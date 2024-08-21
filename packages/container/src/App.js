import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingPage from './components/MarketingPage';
import Header from './components/Header';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingPage />
            </div>
        </BrowserRouter>
    );
};
