import styled from 'styled-components';

const Main = styled.main`
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
    flex-direction: column;
    margin: 2rem 0;

    

    @media screen and (min-width: 880px) {
        flex-direction: row;
        padding: 0 8rem;
        display: flex;
        justify-content: center;
        align-content: center;
    
    }
`;

export default Main