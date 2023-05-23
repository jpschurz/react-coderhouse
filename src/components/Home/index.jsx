import Carousel from 'react-bootstrap/Carousel'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useAuth } from '../AuthContext'
import '../scss/main.scss'


const Home = () => {
  const { user } = useAuth();7

  return (
      <>
      <h5 className="welcome">Bienvenido {user.email}</h5>
      <section>
        <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" src="src/assets/home-1.jpg" alt="Magic The Gathering" height="400"/>
            <Carousel.Caption>
              <h2>Trading Card Game</h2>
              <p>Magic, Pokemon, Yu-Gi-Oh! y mas!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" src="src/assets/home-2.jpg" alt="Juegos de Mesa" height="400"/>
            <Carousel.Caption>
              <h3>Juegos de Mesa</h3>
              <p>Para todas las edades</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" src="src/assets/home-3.jpg" alt="Figuras de colección" height="400"/>
            <Carousel.Caption>
              <h3>Figuras de Colección</h3>
              <p>Te falta alguno? aca conseguis todo!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <div>
        <Container>
          <h2 className="my-4 text-center">Los mejores juegos los encontras aca!</h2>          
        </Container>   
        </div> 
      </section>       
      </>
    );
};

export default Home;