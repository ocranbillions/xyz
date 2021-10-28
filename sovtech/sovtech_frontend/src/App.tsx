import CategoryList from './components/CategoryList';
import Main from './components/Main';
import styled from 'styled-components';


const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  min-height: 100vh;
  padding-top: 10px;
  padding-bottom: 10px; 
`
const Container = styled.div`
  max-width: 600px;
`

function App() {
  return (
   <AppWrapper>
     <Container>
      <Main/>
      <CategoryList/>
     </Container>
    </AppWrapper>
  );
}

export default App;
