import React from 'react';

import {Grid} from './styles';

import ProjetList from '../ProjetList';
import ProjetInfo from '../ProjetInfo';
import AlarmList from '../AlarmList';

const Layout: React.FC = () => {
    return(
        <Grid>
            <ProjetList/>
            <ProjetInfo/>
            <AlarmList/>
        </Grid>
    );
}

export default Layout