import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
