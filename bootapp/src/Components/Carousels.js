import { Carousel } from "react-bootstrap";
import Kedarnath from '../image/slider/kedarnath-i.jpg';
import Badrinath from '../image/slider/Badrinath-i.jpg';
import Gangotri from '../image/slider/Gangotri-i.jpg';
import Yamunotri from '../image/slider/Yamunotri-i.jpg';

export default function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 images"
          src={Kedarnath}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Kedarnath</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 images"
          src={Badrinath}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Badrinath</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 images"
          src={Gangotri}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Gangotri</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 images"
          src={Yamunotri}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h1>Yamunotri</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}