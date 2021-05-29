import styled from 'styled-components';
import { Button } from 'reactstrap';

const SectionTitle = styled.h1`
    text-align: center;
    padding-top: 80px;
    font-size: 40px;
    font-weight: normal;
    position: relative;

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

const SkilsItem = styled.div`
    text-align: center;
    margin-top: 20px;
    & h4 {
        margin-top: 60px;
    }
    @media only screen and (max-width: 1023px) {
        display: none;
    }
`;
const SkilItem = styled.div`
    display: inline-block;
    width: 190px;
    height: 200px;
    border: 1px solid #ddd;
    position: relative;
    margin: 20px 30px 0 30px;

    & img {
        width: 190px;
        height: 200px;
    }
    &:hover .caption {
        opacity: 1;
    }

    & .caption {
        width: 190px;
        height: 200px;
        background-color: rgba(0, 0, 0, 0.727);
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
    margin: 50px;
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

const List = styled.div`
    width: 100%;
    padding: 0px;
    & h4 {
        margin: 60px 0 35px 0;
        text-align: center;
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
        vertical-align: middle;
        border: 0;
    }
`;
const MobileWrap = styled.div`
    display: none;
    @media only screen and (max-width: 1023px) {
        display: block;
    }
`;

export { SkilsWrap, SkilsItem, SkilItem, MoreSkils, BtnWrap, MoreBtn, CloseBtn, List, MobileWrap, SectionTitle, Li };
