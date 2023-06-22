import { Carousel } from 'antd';
import img1 from '../images/interior/img1.jpg';
import img2 from '../images/interior/img2.jpg';
import img7 from '../images/food/img7.jpg';
import img5 from '../images/food/img5.jpg';
import img6 from '../images/food/img6.jpg';
import { BorderDiv, HomeDiv, HomeDivName } from '../styled/Home.styled';

const HomePage = () => {
    return (
    <div>
    <Carousel autoplay>
    <div className='carouselDiv'>
    <img src={img1} alt="restaurant" height="400px" className='responsiveImg'></img>
    </div>
    <div>
    <img src={img2} alt="restaurant" className='responsiveImg'></img>
    </div>
    <div>
    <img src={img7} alt="spaghetti" className='responsiveImg'></img>
    </div>
  </Carousel>

    <div className="homeLeft">
    <img src={img5} alt='food' className='responsiveImg1'></img>
    <HomeDiv>
      <BorderDiv>
      <HomeDivName to='/menu'>Menu</HomeDivName>
      </BorderDiv>
      </HomeDiv>
     </div>

      <div className="homeRight">
      <HomeDiv>
        <BorderDiv>
      <HomeDivName to='/contact'>Contact Us</HomeDivName>
      </BorderDiv>
      </HomeDiv>
      <img src={img6} alt='food' className='responsiveImg1'></img>
      </div>
    </div> );
}
 
export default HomePage;
