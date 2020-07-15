import styled from "styled-components";

export const Container = styled.div`
    grid-area: PL;
    
    display:flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--tertiary);
    pading: 11px 0;

    max-height: 100vh;
    overflow-y: scroll;

    ::-webkit-scrollBar{
        display: none;
    }

`;

export const Separator = styled.div`
    width:32px;
    border-bottom: 2px solid var(--quaternary);
    
    margin-bottom: 8px; 

`;