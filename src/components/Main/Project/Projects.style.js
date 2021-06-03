import styled from 'styled-components';
import { Button } from 'reactstrap';

const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

const ProjectsWrap = styled.div`
    padding: 30px 0;

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
        margin-left: 23%;
        padding-left: 0;
        left: 0;
        width: 76px;
        height: 110%;
        border-bottom: 3px solid black;
    }
    & h3 {
        display: block;
        color: #07344e;
        border-bottom: 2px solid #f9e81c;
    }
    & span {
        background-color: #f9e81c;
        color: #07344e;
        padding: 3px;
    }
    & b {
        font-size: 14px;
        font-family: 'none';
        color: lightgray;
    }
    & p {
        margin: 30px 0;
        font-size: 40px;
        color: #f9e81c;
    }
    & ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline-block;
        width: 100%;
        margin-bottom: 100px;
        & li {
            float: left;
            width: 50%;
            text-align: justify;
            font-size: 17px;
            line-height: 28px;
        }
        & li img {
            max-width: 600px;
            object-fit: fill;
            vertical-align: middle;
            font-size: 1em;
            margin: 50px 0 0 0;
            padding: 0;
            border: 0;
        }
        & li:first-child {
            text-align: left;
        }
        & li:last-child {
            padding-top: 5px;
        }
    }
    & ul:nth-of-type(2),
    ul:nth-of-type(4) {
        & li {
            float: right;
        }
        & li:first-child {
            text-align: right;
        }
    }
    @media only screen and (max-width: 1023px) {
        & span {
            display: inline-block;
            margin-bottom: 9px;
        }

        & b {
            font-size: 12px;
        }
        & ul {
            margin-bottom: 50px;
            & li img {
                width: 100%;
                max-width: 450px;
            }
            & li {
                float: unset;
                width: 100%;
                text-align: justify;
                font-size: 17px;
                line-height: 22px;
            }
            & li:first-child {
                text-align: center;
            }
            & li:last-child {
                padding-top: 20px;
            }
        }
        & ul:nth-child(4),
        ul:nth-child(8) {
            & li {
                float: unset;
            }
            & li:first-child {
                text-align: center;
            }
        }
    }
    @media only screen and (max-width: 390px){
        & b {
            font-size: 10px;
        }
    }
`;
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
const ProjectBtn = styled(Button)`
    color: white;
    border: 1px;
    /* border-radius: 20px; */
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;

const SubWrap = styled.div`
    margin: 90px 70px;
    @media only screen and (max-width: 1023px) {
        margin: 60px 20px;
    }
`;

export { ProjectsWrap, SubWrap, TitleWrap, ProjectBtn, BtnWrap };
