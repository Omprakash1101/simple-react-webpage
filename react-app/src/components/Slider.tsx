import { Fragment } from "react/jsx-runtime";
import Carousel from 'react-bootstrap/Carousel';
function Slider(){
  return(
    <Fragment>
       <div id="home">
　　　        <section className="slider container mb-3">
　　　        <Carousel>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src= "https://pinnacle2k24.world/img/ROBOMIRACLE.png"
                height="650px"
　　　          alt="First slide"
　　　        />
<div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src="https://pinnacle2k24.world/img/skilptlogo.jpg"
                height="650px"
　　　          alt="Second slide"
　　　        />
<div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the Second slide.</p>
      </div>
　　　      </Carousel.Item>
　　　      <Carousel.Item className='slide'>
　　　        <img
　　　          className="d-block w-100"
　　　          src="#"
                height="650px"
　　　          alt="Third slide"
　　　        />
<div className="carousel-caption d-none d-md-block">
        <h5>Three slide label</h5>
        <p>Some representative placeholder content for the three slide.</p>
      </div>
　　　      </Carousel.Item>
　　　    </Carousel>
　　　    </section>
</div>
    </Fragment>
  );
}

export default Slider;