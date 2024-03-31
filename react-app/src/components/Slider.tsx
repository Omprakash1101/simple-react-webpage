import { Fragment } from "react/jsx-runtime";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
function Slider() {
  return (
    <Fragment>
      <div id="home" className="card bg-dark text-white">
        <section className="slider container mb-3">
          <Carousel>
            <Carousel.Item className="slide">
              <img
                className="d-block w-100"
                src="https://pinnacle2k24.world/img/ROBOMIRACLE.png"
                height="650px"
                alt="First slide"
              />
              <div className="pad">
                <h1 className="e1">Empowering Society</h1>
                <h1 className="e1">Through Science </h1>
                <p className="i">Food Lab is one point solution for all food safety needs</p>
                <a href="#" className="btn btn-success">
                  Get Started 
                </a>
              </div>
            </Carousel.Item>
            <Carousel.Item className="slide">
             <img
                className="d-block w-100"
                src="https://pinnacle2k24.world/img/skilptlogo.jpg"
                height="650px"
                alt="Second slide"
              />
              <div className="card-img-overlay card-sld">
                <div className="card">
                  <div className="card-header">Featured</div>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary ">
                      Get Started 
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="slide">
              <img
                className="d-block w-100"
                src="#"
                height="650px"
                alt="Third slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Three slide label</h5>
                <p>
                  Some representative placeholder content for the three slide.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </Fragment>
  );
}

export default Slider;
