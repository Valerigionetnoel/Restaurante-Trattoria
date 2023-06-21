import styled from 'styled-components';

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
padding: 3em;
`;
export const HomeDivName = styled.h2 `
padding-top: 3em;
&:hover{
    color: ${({theme}) => theme.colors.orange};
}
`;