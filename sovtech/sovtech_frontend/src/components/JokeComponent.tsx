import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { connect } from 'react-redux';
import { setCategory } from '../redux/actions';
import styled, { css, StyledComponent } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding-top:4rem;

  .avatar{
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }

  .category-title{
    font-size : 2rem;
    font-weight:  600;
    text-transform: capitalize;
  }
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const JokeContent = styled.p`
  min-height: 200px;
  text-align: center;
  margin: 35px 0px 10px 0px;
  font-size: 1.5rem;
  padding: 10px 0px;
`;

const Button = styled.button`
 background: #aaa;
 padding: 10px 30px 10px 30px;
 border-radius: 10px;
 background-color: black;
 color: white;
border-radius: 24px;

`;

interface Props {
  src: string;
}

const Avatar = styled.div<Props>`
  background-image: ${p => p.src};
`;


const JokeComponent = (props: any) => {
  const { selectedCategory, nextJoke } = props;

  const category = selectedCategory.split(" ")[0];
  let joke;

  const FETCH_JOKE_BY_CATEGORY = gql`
  query Query($category: String!) {
    getJokeByCategory(category: $category) {
      id
      value
      icon_url
      url
      created_at
      updated_at
    }
  }`;

  const { data, loading, error } = useQuery(FETCH_JOKE_BY_CATEGORY, {
    variables: { category: selectedCategory }
  })

  if (data)
    joke = data.getJokeByCategory


  return (
    <MainArea>
      {/* {loading && <div>loading joke...</div>} */}
      {error && <div>Unexpected server error!</div>}

      {
        joke &&
        <Card>
          <h1 className="category-title">{category} Jokes</h1>

          <Avatar src={joke.icon_url} />
          <JokeContent>“{joke.value}” - <em>Chuck Norris</em></JokeContent>

          <Button
            onClick={() => nextJoke(category)}
          >
            {loading ? "Loading..." : "Next Joke"}
          </Button>
        </Card>
      }
    </MainArea>
  )
}


const mapDispatchToProps = (dispatch: any) => ({
  nextJoke: (category: string) => dispatch(setCategory(category))
})

export default connect(null, mapDispatchToProps)(JokeComponent);

