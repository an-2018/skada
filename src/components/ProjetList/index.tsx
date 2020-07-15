import React from 'react';

import {Container, Separator} from './styles';
import ProjetButton from '../ProjetButton'

const ProjetList: React.FC = () =>{
    return(
        <Container>
            <ProjetButton isHome/>
            <Separator/>

            <ProjetButton/>
            <ProjetButton alerts={17} />
            <ProjetButton alerts={3}/>
        </Container>
    );
};

export default ProjetList;