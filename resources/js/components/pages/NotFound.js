import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderAndFooter from './HeaderAndFooter';
import Login from './Login';


export default function NotFound() {
    return (
        <div class=" min-h-screen flex items-center">
            <div class="container mx-auto p-4 flex flex-wrap items-center">
            <div class="w-full md:w-5/12 text-center p-4">
                <img src="https://img.icons8.com/pastel-glyph/64/000000/page-not-found--v2.png" alt="Not Found" />
            </div>
            <div class="w-full md:w-7/12 text-center md:text-left p-4">
                <div class="text-6xl font-medium">404</div>
                <div class="text-xl md:text-3xl font-medium mb-4">
                Oops. This page has gone missing.
                </div>
                <div class="text-lg mb-8">
                You may have mistyped the address or the page may have moved.
                </div>
                <a href="#" class="border border-white rounded p-4">Go Home</a>
            </div>
            </div>
        </div>
    )
}
