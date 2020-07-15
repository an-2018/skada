import React from 'react';
import logoSweage from '../../assets/seweage-projet-logo.png'

import {Button} from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasAlerts?: boolean;
    alerts?: number;
}

const ProjetButton: React.FC<Props> = ({
    isHome,
    hasAlerts,
    alerts,
    selected
}) =>{
    return (
        <Button
            isHome = {isHome}
            hasAlerts = {hasAlerts}
            alerts = {alerts}
            className={selected ? 'active' : ''}
        >
            {isHome && <img className="image" src={logoSweage} alt='logo-projet' /> }
        </Button>
    );
};

export default ProjetButton;