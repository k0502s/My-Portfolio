import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import AppNav from './components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyle from './assets/GlobalStyle';
import './assets/custom.css';


const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <AppNav />
            <Header />
            <div id="main-body">
                <Main />
            </div>
            <Footer />
        </div>
    );
};

export default App;
