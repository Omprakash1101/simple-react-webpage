import Footer from "./components/Footer";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";

function App(){
  const images = [
    "https://pinnacle2k24.world/img/skilptlogo.jpg",
    "https://pinnacle2k24.world/img/ROBOMIRACLE.png"
    // Add more image URLs here
  ];
  return <div>
    <NavBar />
    <Footer/>
  </div>;
}

export default App;