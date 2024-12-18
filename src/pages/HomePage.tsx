import React from 'react';
import TopNavigation from '~/components/TopNavigation';
import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => {

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Hello world!</h1>
            <TopNavigation />
            <Outlet />
        </div>
    );
};

export default HomePage;
