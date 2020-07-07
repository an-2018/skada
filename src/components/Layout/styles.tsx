import styled from 'styled-components';
// PL - Projets List
// ML - Menu List
// HS - Home Space
// IL - Info List
// Al - Alert List
// S - Seetings
// SB - Search Bar
// UI - User Info
export const Grid = styled.div`
    display:grid;

    grid-template-columns: 71px 240px auto 240px ;
    grid-template-rows: 46px auto 52px ;

    grid-template-areas: 
        'PL ML AL AL'
        'PL ML HS IL'
        'S  UI SB IL'
    ;

    height: 100vh;

`;