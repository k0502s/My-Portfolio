import AOS from "aos";
import GlobalStyle from "@assets/GlobalStyle";
import Main from "@pages/Main";

import "react-18-image-lightbox/style.css";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
};

export default App;
