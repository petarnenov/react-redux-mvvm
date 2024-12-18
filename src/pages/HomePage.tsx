import React from 'react';
import TopNavigation from '~/components/TopNavigation/TopNavigation';
import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>RTK && RTKQ</h1>
            <a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">Redux Toolkit</a>
            <a href="https://redux-toolkit.js.org/rtk-query/overview" target="_blank" rel="noreferrer">RTK Query</a>
            <TopNavigation />
            <Outlet />
        </div>
    );
};

export default HomePage;
