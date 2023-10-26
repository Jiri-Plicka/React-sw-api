import { styled } from 'styled-components';

export const SWListWrapper = styled.div`
    background-color: grey;
    padding: 10px;
    min-height: 100vh;
    h4 {
        color: #d335dc;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        color: #fff;
        background-color: #4e4848;
        text-align: left;
        padding: 20px 10px 40px 20px;
        border: 2px solid black;
        margin: 5px;
        width: 170px;
    }
    .name {
        text-decoration: none;
        list-style-type: none;
    }
`;