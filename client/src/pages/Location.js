import React, { Component } from 'react';
import { StyledLocationAndHoursContainer,  } from '../styled/Location.styled';
import Map from '../components/Map';




const LocationPage = () => {
    
    
    return (
    <StyledLocationAndHoursContainer>
        <h2>Hours & Location</h2>
        <div className='hoursSection'>
            <div>
            <h3>Monday</h3>
            <p>10:30am - 9:00pm</p>
            </div>
            <div>
            <h3>Tuesday</h3>
            <p>10:30am - 9:00pm</p>
            </div>
            <div>
            <h3>Wednesday</h3>
            <p>10:30am - 9:00pm</p>
            </div>
            <div>
            <h3>Thursday</h3>
            <p>10:30am - 9:00pm</p>
            </div>
            <div>
            <h3>Friday</h3>
            <p>10:30am - 10:00pm</p>
            </div>
            <div>
            <h3>Saturday</h3>
            <p>10:00am - 10:00pm</p>
            </div>
            <div>
            <h3>Sunday</h3>
            <p>10:00am - 9:00pm</p>
            </div>
        </div>
        <div className='locationSection'>
        <h5>100 Tucker Park Rd, Saint John, NB E2K 5E2</h5>
        
        <Map />
        </div>
    </StyledLocationAndHoursContainer>
    );
}
 
export default LocationPage;

