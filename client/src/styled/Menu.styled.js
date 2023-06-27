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
    margin-top: 1em;
    text-align: center;
    font-size: 3em;
}

.picture {
    margin-top: 0.7em;
}

.examplePicture {
    padding-top: 1em;
    width: 50%;
    height: 400px;
}

.dishCard {
    border-bottom: 1px solid black;
    margin: 20px;
}
.dishCard h4{
    font-weight: bold;
}
.dishCard p{
    padding-top: 0.3em;
}
`;

