import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledNotFound = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 3em;
font-size: 3vw;
`;

export const StyledNotFoundLink = styled(Link)`
color: ${({theme}) => theme.colors.navy};
padding: 1em;
font-size: 2vmax;
&:hover {
    color: ${({theme}) => theme.colors.orange};
}
`;
