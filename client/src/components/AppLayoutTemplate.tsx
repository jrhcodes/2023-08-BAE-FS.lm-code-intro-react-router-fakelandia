import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';

const AppLayoutTemplate: React.FC = () => {
    return <>
        <AppHeader />
        <Outlet />
        <AppFooter />
    </>;
}

export default AppLayoutTemplate;