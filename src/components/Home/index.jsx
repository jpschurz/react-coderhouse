import Carousel from 'react-bootstrap/Carousel'
import { useAuth } from '../AuthContext'


const Home = () => {
  const { user } = useAuth();

  return (
      <>      
      <section>
        <div>
        <Carousel>
          <Carousel.Item>
            <img className="img-carousel" src="src/assets/home-1.jpg" alt="Magic The Gathering" height="400"/>
            <Carousel.Caption>
              <h1>Trading Card Game</h1>
              <h4>Magic, Pokemon, Yu-Gi-Oh! y mas!</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" src="src/assets/home-2.jpg" alt="Juegos de Mesa" height="400"/>
            <Carousel.Caption>
              <h1>Juegos de Mesa</h1>
              <h4>Para todas las edades</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" src="src/assets/home-3.jpg" alt="Figuras de colección" height="400"/>
            <Carousel.Caption>
              <h1>Figuras de Colección</h1>
              <h4>Te falta alguno? aca conseguis todo!</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        <div>
        </div> 
      </section>       
      </>
    );
};

export default Home;