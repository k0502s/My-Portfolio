import styled from 'styled-components';
import { Row } from 'reactstrap';
import { FaPhoneAlt, FaEnvelope, FaGithub, FaBlogger } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

const KakaoIcon = styled(RiKakaoTalkFill)`
    font-size: 25px;
    margin-bottom: 5px;
`;
const PhoneIcon = styled(FaPhoneAlt)`
    font-size: 17px;
    margin-bottom: 5px;
`;
const EmailIcon = styled(FaEnvelope)`
    font-size: 20px;
    margin-bottom: 5px;
`;
const GitHubIcon = styled(FaGithub)`
    font-size: 20px;
    margin-bottom: 5px;
`;
const BlogIcon = styled(FaBlogger)`
    font-size: 20px;
    margin-bottom: 5px;
`;
const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;
    & h1 {
        text-align: center;
        font-size: 40px;
        font-weight: normal;
        position: relative;
        color: #fff;
    }

    & h1:before {
        content: '';
        position: absolute;
        margin-left: 23%;
        padding-left: 0;
        left: 0;
        width: 76px;
        height: 110%;
        border-bottom: 3px solid #fff;
    }
`;

const ContactWrap = styled(Row)`
    padding: 0;
    background-color: #07344e;
    color: #fff;
    font-size: small;
    font-family: none;
`;
const InfoWrap = styled.div`
    text-align: center;
    margin-bottom: 60px;
    & span {
        padding: 0 20px;
    }
    & b {
        font-size: 20px;
    }
    & img {
        margin-bottom: 5px;
        border-radius: 45%;
        width: 20px;
    }
`;

const HomeBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;

export { TitleWrap, ContactWrap, InfoWrap, KakaoIcon, EmailIcon, PhoneIcon, GitHubIcon, BlogIcon, HomeBtnWrap };
