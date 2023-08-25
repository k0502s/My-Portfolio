import GlobalStyle from "@assets/GlobalStyle";
import Main from "@pages/Main/Main";

import "bootstrap/dist/css/bootstrap.css";
import "react-18-image-lightbox/style.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
};

export default App;
