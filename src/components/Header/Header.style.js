import styled from 'styled-components';

const Hedaer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-size: cover;
    width: 100%;
    & h2 {
        color: #f9e81c;
        font-size: 55px;
        margin-bottom: 20px;
    }
    & p {
        color: #f9e81c;
        font-size: 25px;
        margin-bottom: 35px;
    }
    @media only screen and (max-width: 767px) {
        & h2 {
            font-size: 27px;
        }
        & p {
            font-size: 20px;
        }
    }
`;


export { Hedaer };
