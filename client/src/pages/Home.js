import { Col, Divider, Row } from 'antd';
import { Carousel } from 'antd';
import img1 from '../images/interior/img1.jpg';
import img2 from '../images/interior/img2.jpg';


const HomePage = () => {
    return ( <div>
        
    <h1>Home Page</h1>





  <Carousel autoplay>
    <div>
    <img src={img1} alt="restaurant" height="500" width="100%"></img>
    </div>
    <div>
    <img src={img2} alt="restaurant" height="500" width="100%"></img>
    </div>
    <div>
    <img src={img1} alt="restaurant" height="500" width="100%"></img>
    </div>
    <div>
    <img src={img2} alt="restaurant" height="500" width="100%"></img>
    </div>
  </Carousel>





  <Row>
    <Col xs={{ span: 2, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 2, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
  </Row>

    
    
    </div> );
}
 
export default HomePage;