import { Col, Row } from 'antd';
import { Carousel } from 'antd';
import img1 from '../images/interior/img1.jpg';
import img2 from '../images/interior/img2.jpg';
import img7 from '../images/food/img7.jpg';
import img5 from '../images/food/img5.jpg';
import img6 from '../images/food/img6.jpg';
import { HomeDiv } from '../styled/Home.styled';

const HomePage = () => {
    return (
    <div>
    <Carousel autoplay>
    <div className='carouselDiv'>
    <img src={img1} alt="restaurant" height="400px" width="100%" overflow="hidden"></img>
    </div>
    <div>
    <img src={img2} alt="restaurant" height="400px" width="100%" overflow="hidden"></img>
    </div>
    <div>
    <img src={img7} alt="spaghetti" height="400px" width="100%" overflow='hidden' object-fit="cover"></img>
    </div>
  </Carousel>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col span={12}  className='homeDiv'>
    <img src={img5} alt='food' height='400px' width="100%"></img>
    </Col>
  <Col span={12}  className='homeDiv'>
    <HomeDiv>
      <h3>Menu</h3>
      </HomeDiv></Col>
      <Col span={12}  className='homeDiv'> 
      <HomeDiv>
      <h3>Contact Us</h3>
      </HomeDiv>
      </Col>
  <Col span={12}  className='homeDiv'>
    <img src={img6} alt='food' height='400px' width='100%'></img>
    </Col>
</Row>

    </div> );
}
 
export default HomePage;
