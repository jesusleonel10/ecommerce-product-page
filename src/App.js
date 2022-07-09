import './App.css';
import 'normalize.css'
import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import TitleDescription from './components/TitleDescription';
import InfoPrice from './components/InfoPrice';
import Main from './elements/Main';
import Row from './elements/Row';

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
 
export default App;