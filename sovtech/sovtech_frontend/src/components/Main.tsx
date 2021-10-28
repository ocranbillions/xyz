import React, { useState } from 'react'; // TODO
import { connect } from 'react-redux';
import styled, { css, StyledComponent } from 'styled-components';
import JokeComponent from './JokeComponent';


export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;

  .welcome-title {
    font-size : 3rem;
    font-weight:  500;
    text-transform: capitalize;
  }

  .welcome-message {
    margin-top: 20px;
  }
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


const Main = (props: any) => {
  let { selectedCategory } = props;
  
  return (
    <JokeComponent selectedCategory={selectedCategory} />
  )
}

const mapStateToProps = (state: any) => ({
  selectedCategory: state.categoryReducer.selectedCategory as string
});


export default connect(mapStateToProps)(Main);

