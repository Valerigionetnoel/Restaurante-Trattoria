import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeDiv = styled.div `
background-color: ${({theme}) => theme.colors.offWhite};
box-shadow: 10px lightgrey;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;
export const BorderDiv = styled.div `
border: 2px solid ${({theme}) => theme.colors.navy};
border-radius: 5px;
height: 80%;
width: 80%;
padding: 2em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const HomeDivName = styled(Link) `
font-family: 'Dancing Script', cursive;
font-size: 4vmax;
font-weight: 400;
color: ${({theme}) => theme.colors.navy};
&:hover{
    color: ${({theme}) => theme.colors.orange};
}
`;