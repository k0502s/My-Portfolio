import styled from 'styled-components';
import { Row } from 'reactstrap';

const FooterWrap = styled(Row)`
    padding: 50px 0;
    background-color: #091e2a;
    color: #fff;
    font-size: small;
    font-family: none;
    & p {
        text-align: center;
        letter-spacing: 0.2em;
    }
`;

const TitleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;

export { FooterWrap, TitleWrap };
