import AOS from "aos";
import GlobalStyle from "@assets/GlobalStyle";
import Main from "@pages/Main";

import "react-18-image-lightbox/style.css";
import "aos/dist/aos.css";
import "react-lazy-load-image-component/src/effects/blur.css";

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
