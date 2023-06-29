import styled from 'styled-components';

export const StyledLocationAndHoursContainer = styled.div`


text-align: center;
h2{
    margin: 0.5em;
}

.hoursSection{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
    margin-bottom: 2.5em;

}

.locationSection {
    position: relative;
    width: 100%;
    height: 600px;
}
@media (max-width: 800px){
    .hoursSection{
    display: flex;
    flex-direction: column;
}
}




`;

