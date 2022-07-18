import './App.css';
import 'normalize.css'
import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import TitleDescription from './components/TitleDescription';
import InfoPrice from './components/InfoPrice';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <Header />
      <Main>
          <Row>
            <Gallery />
          </Row>
          <Row>
            <TitleDescription />
            <InfoPrice />
          </Row>
      </Main>
    </>
  );
}

const Main = styled.main`
    flex-direction: column;
    margin: 2rem 0;

    @media screen and (min-width: 880px) {
        flex-direction: row;
        padding: 0 8rem;
        display: flex;
        justify-content: center;
        align-content: center;
    
    }
`;

const Row = styled.div`
    margin: 0;
`;
 
export default App;