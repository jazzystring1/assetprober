import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderAndFooter from './pages/HeaderAndFooter';
import Main from './pages/Main';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import RelayTest from './RelayTest';
import NotFound from './pages/NotFound';
import SideNavBar from './pages/SideNavBar';
import Table from './pages/Table';
import Assets from './pages/Assets';
import InnerNavBar from './pages/InnerNavBar';
import Test from './pages/Test';
import RequireAuth from './pages/RequireAuth';
import RequireNonAuth from './pages/RequireNonAuth';
import AuthInfoContext from './contexts/AuthInfoContext';
import { useLocalStorage } from './hooks/useLocalStorage';

const AppRouter = () => {
    const [authInfo, setAuthInfo] = useLocalStorage("authInfo", {
        userId: "", 
        isAuthenticated: false
    });

    const updateAuthInfoContext = ({userId, isAuthenticated}) => {
        setAuthInfo((prevState) => ({
            ...prevState, 
            userId: userId, 
            isAuthenticated: isAuthenticated
        }))
    }

    return (
        <AuthInfoContext.Provider value={{...authInfo, updateAuthInfoContext}}>
            <BrowserRouter>
                <Routes>
                    <Route element={<HeaderAndFooter/>}>
                        <Route path="/" element={<Main/>}>
                            <Route 
                                index
                                element={
                                    <RequireNonAuth redirectTo="/dashboard">
                                        <Login/>
                                    </RequireNonAuth>
                                }
                            />
                            <Route 
                                path="login" 
                                element={
                                    <RequireNonAuth redirectTo="/dashboard">
                                        <Login/>
                                    </RequireNonAuth>
                                } 
                            />
                            <Route 
                                path="register" 
                                element={
                                    <RequireNonAuth redirectTo="/dashboard">
                                        <Register/>
                                    </RequireNonAuth>
                                } 
                            />
                            <Route 
                                path="relay" 
                                element={
                                    <RequireNonAuth redirectTo="/dashboard">
                                        <RelayTest/>
                                    </RequireNonAuth>
                                } 
                            />
                            <Route element={<SideNavBar/>}>
                                <Route
                                    path="dashboard" 
                                    element={
                                        <RequireAuth redirectTo="/login">
                                            <Dashboard/>
                                        </RequireAuth>
                                    }
                                />
                                <Route element={<InnerNavBar/>}>
                                    <Route
                                        path="assets" 
                                        element={
                                            <RequireAuth redirectTo="/login">
                                                <Assets/>
                                            </RequireAuth>
                                        }
                                    />
                                </Route>
                                <Route
                                    path="test" 
                                    element={
                                        <RequireAuth redirectTo="/login">
                                            <Table/>
                                        </RequireAuth>
                                    }
                                />

                            </Route>
                                                    
                            <Route path="*" element={<NotFound/>} />
                        </Route>
                    </Route>
                    <Route path="test" element={<Test/>} />
                </Routes>
            </BrowserRouter>
        </AuthInfoContext.Provider>
                                
    );
};

export default AppRouter;