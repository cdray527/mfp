import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

const MarketingPageLazy = lazy(() => import('./components/MarketingPage'));
const AuthPageLazy = lazy(() => import('./components/AuthPage'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                        <Suspense fallback={<ProgressBar />}>
                            <Switch>
                                <Route path="/auth">
                                    <AuthPageLazy onSignIn={() => setIsSignedIn(true)} />
                                </Route>
                                <Route path="/" component={MarketingPageLazy} />
                            </Switch>
                        </Suspense>
                    </div>
            </StylesProvider>
        </BrowserRouter>
    );
};
