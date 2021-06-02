import styled from 'styled-components';

const AboutWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & h1 {
        text-align: center;
        font-size: 40px;
        font-weight: normal;
        position: relative;
        color: #f9e81c;
    }

    & h1:before {
        content: '';
        position: absolute;
        margin-left: 46.5%;
        padding-left: 0;
        left: 0;
        width: 56px;
        height: 110%;
        border-bottom: 3px solid black;
    }
`;

const TapWrap = styled.div`
    width: 800px;
    height: 500px;
    position: relative;
`;
const InnerWrap = styled.div`
    height: 500px;
    margin-top: 80px;
    margin-bottom: 70px;
`;

const Items = styled.div`
    width: 800px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
    

    & a:hover img {
        width: 120px;
        height: 120px;
    }
    & img {
        margin-bottom: 20px;
        padding: 20px;
        width: 100px;
        height: 100px;
        border-radius: 30%;
        transition: 0.5s;
        object-fit: cover;
    }
    & span:nth-of-type(1) {
        color: #d7d8d8;
    }
    & span:nth-of-type(2) {
        background-color: #f9e81c;
        color: #07344e;
        padding: 4px;
    }
    & div {
        width: 800px;
        height: 500px;
        float: left;
        box-sizing: border-box;
        text-align: center;
        padding: 20px;
    }
    @media only screen and (max-width: 767px) {
        & div {
            padding: 20px 230px 20px 230px;
            height: 300px;
        }
    }
`;

export { AboutWrap, Items, TapWrap, InnerWrap };
