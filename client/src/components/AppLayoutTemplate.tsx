import React from 'react';
import AppFooter from './AppFooter/AppFooter';
import AppHeader from './AppHeader/AppHeader';
import { Outlet } from 'react-router-dom';

const AppLayoutTemplate: React.FC = () => {
    return <>
        <AppHeader />
        <main><Outlet /></main>
        <AppFooter />
    </>;
}

export default AppLayoutTemplate;