import styled from 'styled-components';
import { Button } from 'reactstrap';

const SectionTitle = styled.h1`
    text-align: center;
    padding-top: 80px;
    font-size: 40px;
    font-weight: normal;
    position: relative;
    color: #f9e81c;

    &::before {
        content: '';
        position: absolute;
        margin-left: 17%;
        padding-left: 0;
        left: 0;
        width: 56px;
        height: 41%;
        border-bottom: 3px solid black;
    }
`;
const SkilsWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SkilTitle = styled.div`
    background-color: #f9e81c;
    display: flex;
    justify-content: center;
    margin: 60px 600px 5px 600px;
    border-radius: 6px;
`;
const SkilsItem = styled.div`
    text-align: center;
    margin-top: 20px;
    & h4 {
        margin: 0;
        padding: 5px;
        color: #07344e;
    }
    @media only screen and (max-width: 1023px) {
        display: none;
    }
`;
const SkilItem = styled.div`
    display: inline-block;
    width: 205px;
    height: 190px;
    position: relative;
    margin: 20px 30px 0 30px;

    & img {
        width: 205px;
        height: 190px;
        background-color: white;
        border-radius: 7%;
    }
    &:hover .caption {
        opacity: 1;
    }

    & .caption {
        width: 205px;
        height: 190px;
        background-color: rgba(0, 0, 0, 0.727);
        border-radius: 7%;
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        padding: 10px;
        /* padding을 주어서 원래 정했던 width와 height에서 삐져나오기 때문에 border-box줌 */
        box-sizing: border-box;
        padding-top: 10px;
        opacity: 0;
        transition: 0.5s;
        font-size: 15px;
    }
    @media only screen and (max-width: 1023px) {
        margin: 5px 5px 0 5px;
    }
`;

const MoreSkils = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;
const MoreBtn = styled(Button)`
    display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    color: white;
    border: 1px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;
const CloseBtn = styled(Button)`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    color: white;
    border: 1px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    &:hover {
        color: white;
        background-color: lightslategray;
    }
`;

// Mobile Device CSS

const MskilTitle = styled.div`
    background-color: #f9e81c;
    display: flex;
    justify-content: center;
    border-radius: 6px;
    margin: 60px 130px 35px 130px;
`;

const List = styled.div`
    width: 100%;
    padding: 0px;
    & h4 {
        margin: 0;
        padding: 5px;
        color: #07344e;
    }
`;

const Li = styled.li`
    width: 100%;
    display: inline-block;
    margin: 0 0 20px 0;
    height: 48px;
    font-size: 16px;
    & h3 {
        margin: 0;
        padding: 0;
    }
    & img {
        float: left;
        margin: 0 16px 0 0;
        width: 36px;
        height: 33px;
        vertical-align: middle;
        background-color: white;
        border-radius: 9%;
        border: 0;
    }
    & span {
        font-size: 15px;
    }
`;
const MobileWrap = styled.div`
    display: none;
    @media only screen and (max-width: 1023px) {
        display: block;
    }
`;

export { SkilsWrap, SkilsItem, SkilItem, MoreSkils, BtnWrap, MoreBtn, CloseBtn, List, MobileWrap, SectionTitle, Li, SkilTitle, MskilTitle };
