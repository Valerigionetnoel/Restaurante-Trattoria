import styled from 'styled-components';

export const DonationsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
margin: 2em;
h3{
    margin: 0.5em;
    text-align: center;

}
`;

export const DonationsForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.3em;
width: 25%;


.inputBox{
    margin: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width:100%;
}
.inputBox span{


}
input{
    padding: 1em;
    border: 1px solid ${({theme}) => theme.colors.orange};
    border-radius: 5px;
}
`;
