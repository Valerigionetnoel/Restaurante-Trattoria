import styled from 'styled-components';

export const StyledMenuContainer = styled.div`

`;

export const StyledMenuButtonContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 1em;

button{
    width: 25%;
}
button:hover{
    width: 25%;
}
`;

export const StyledDishesContainer = styled.div`

h1 {
    border: 2px solid red;
    margin-top: 30px;
    text-align: center;
}

.picture {
    border: 2px solid orange;
    margin-top: 30px;
}

.examplePicture {
    width: 50%;
    height: 400px;
}

.dishCard {
    border-bottom: 1px solid black;
    margin: 20px;
}



`;

