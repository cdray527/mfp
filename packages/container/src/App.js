import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import { createBrowserHistory } from 'history';

const MarketingPageLazy = lazy(() => import('./components/MarketingPage'));
const AuthPageLazy = lazy(() => import('./components/AuthPage'));
const DashboardPageLazy = lazy(() => import('./components/DashboardPage'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                        <Suspense fallback={<ProgressBar />}>
                            <Switch>
                                <Route path="/auth">
                                    <AuthPageLazy onSignIn={() => setIsSignedIn(true)} />
                                </Route>
                                <Route path="/dashboard">
                                    {!isSignedIn && <Redirect to="/" />}
                                    <DashboardPageLazy />
                                </Route>
                                <Route path="/" component={MarketingPageLazy} />
                            </Switch>
                        </Suspense>
                    </div>
            </StylesProvider>
        </Router>
    );
};
