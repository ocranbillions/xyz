import React, { useState } from 'react';
import styled, { css, StyledComponent } from 'styled-components';
import { connect } from 'react-redux';

export const ItemContainer = styled.button`
  display: flex;

  flex-direction:column;
  align-items:center;
  .circle{
      padding: 10px 2px;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 50%;
 
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;


const CategoryItem = (props: any) => {

  const { setSelectedCategory, category: categoryName, selectedCategory } = props;


  console.log({ selectedCategory })

  return (
    <ItemContainer
      onClick={() => setSelectedCategory(categoryName)}
    >
      <div className='circle'></div>
      <span>{categoryName}</span>
    </ItemContainer>)
}


const mapStateToProps = (state: any) => ({
  selectedCategory: state.categoryReducer.selectedCategory as string
});

export default connect(mapStateToProps)(CategoryItem);


// const activeStyle = css`
//   background-color: #4285f4;
// `;

// const checkIfActive = (props: any) => {
//   if (props.className === 'active') {
//     return activeStyle;
//   }
// };


// export const PreviewContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   @media screen and (max-width: 800px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 15px;
//   }
// `;