import styled from 'styled-components';
import img9 from '../images/food/img9.jpg';

export const DonationsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${img9});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
h3{
    margin: 0.5em;
    text-align: center;
    color: white;
}`;

export const DonationsForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.3em;
width: 35%;
margin: 1em;
background-color: white;
border-radius: 5px;
border: none;
box-shadow: 2px 2px 2px 2px ${({theme}) => theme.colors.lightGrey};
padding: 1em;
@media (max-width: 700px){
    width: 50%;
}

.inputBox{
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width:100%;
    @media (max-width: 700px){
        display: flex;
        flex-direction: column;
    }
}
.inputBox span{


}
input{
    padding: 1em;
    border: 1px solid ${({theme}) => theme.colors.orange};
    border-radius: 5px;
}
`;
