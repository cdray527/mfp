import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingPage from './components/MarketingPage';
import Header from './components/Header';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingPage />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
};
