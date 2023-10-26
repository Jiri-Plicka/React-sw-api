import { styled } from 'styled-components';

export const SWPlanetsWrapper = styled.div`
    background-color: grey;
    padding: 10px;
    h4 {
        color: #9cdc35;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        color: #fff;
        background-color: #433f3f;
        border: 2px solid black;
        margin: 5px;
        padding: 10px;
        list-style-type: none;
        width: 240px;
    }
`;