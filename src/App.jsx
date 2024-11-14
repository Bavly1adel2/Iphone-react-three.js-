
import Nav from "./componts/Nav.jsx";
import Jumbotron from "./componts/jumbotron.jsx";
import Soundsection from "./componts/Soundsection.jsx";
import Display from "./componts/DisplaySection.jsx";
import ModelViewer from "./componts/ModelViewer.jsx";
import Footer from "./componts/Footer.jsx";
//import ModelAnimation from "./componts/ModelAnimation.jsx";

function App() {

  return (
    <div className="App">
      <Nav />
        <ModelViewer/>
        <Jumbotron />
        <Soundsection />
      <Display />
        <Footer/>

    </div>
  );
}

export default App;
