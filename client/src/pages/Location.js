import React, { Component } from 'react';
import { StyledLocationAndHoursContainer,  } from '../styled/Location.styled';
import Map from '../components/Map';




const LocationPage = () => {
    
    
    return (
    <StyledLocationAndHoursContainer>
        <h1>Hours & Location</h1>
        <div className='hoursSection'>
            <h3>Monday</h3>
            <p>10:30am - 9:00pm</p>
            <h3>Tuesday</h3>
            <p>10:30am - 9:00pm</p>
            <h3>Wednesday</h3>
            <p>10:30am - 9:00pm</p>
            <h3>Thursday</h3>
            <p>10:30am - 9:00pm</p>
            <h3>Friday</h3>
            <p>10:30am - 10:00pm</p>
            <h3>Saturday</h3>
            <p>10:00am - 10:00pm</p>
            <h3>Sunday</h3>
            <p>10:00am - 9:00pm</p>
            <h3>100 Tucker Park Rd, Saint John, NB E2K 5E2</h3>
        </div>
        <div className='locationSection'>
        
        
        <Map />
        </div>
    </StyledLocationAndHoursContainer>
    );
}
 
export default LocationPage;

