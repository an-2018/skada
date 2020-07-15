import React from 'react';

import {Container, HashtagIcon, Title, Separator, Description} from './styles';

const AlarmList: React.FC = () => {
    return(
        <Container>
            <HashtagIcon/>
            <Title>Alarm Title</Title>

            <Separator/>

            <Description>Alarm body Message</Description>
        </Container>
    );
}

export default AlarmList