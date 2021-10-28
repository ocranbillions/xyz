import React, { Key } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { connect, DispatchProp } from 'react-redux';
import styled, { css } from 'styled-components';
import CategoryItem from './CategoryItem';
import { setCategory } from '../redux/actions';


export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  gap:1rem;
  padding: 2rem;
`;


const FETCH_CATEGORIES = gql`
  query Query {
    getJokeCategories
  }
`;


const CategoryList = (props: any) => {
  const { setSelectedCategory } = props;

  const { data, loading, error } = useQuery(FETCH_CATEGORIES);

  return (
    <ListContainer>
      {loading && <div>Loading... fetch categories</div>}
      {error && <div>Unexpected server error!</div>}

      { data &&
        <>
          { data.getJokeCategories.map(
            (category: string, i: Key) =>
              <CategoryItem key={i} category={category} setSelectedCategory={setSelectedCategory} />
          )
          }
        </>
      }
    </ListContainer>
  )
}


const mapDispatchToProps = (dispatch: any) => ({
  setSelectedCategory: (category: string) => dispatch(setCategory(category))
})

export default connect(null, mapDispatchToProps)(CategoryList);
