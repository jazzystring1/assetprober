import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import AuthInfoContext from '../contexts/AuthInfoContext';

export default function HeaderAndFooter() {
    const [hideDropdownList, setHideDropdownList] = useState(true);
    const [hideNavbarList, setHideNavbarList] = useState(true);
    let { isAuthenticated, updateAuthInfoContext } = useContext(AuthInfoContext);
    let pathname = useLocation();
    let navigate = useNavigate();
    
    const toggleDropdownList = () => {
        setHideDropdownList((hideDropdownList) => !hideDropdownList)
    }

    const toggleNavbarList = () => {
        setHideNavbarList((hideNavbarList) => !hideNavbarList)
    }

    const onLogout = (e) => {
        e.preventDefault();
        axios.post('/logout', {})    
        .then((res) => {
            updateAuthInfoContext({
                userId: "",
                isAuthenticated: false
            });
            navigate('/login');
        })
        .catch((err) => {
          console.log(err);
        })
    }
    
    return (
        <>
            <nav class="w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div class="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a class="text-gray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="./index.html">AssetProber</a>
                    <button onClick={toggleNavbarList} class="rounded-lg lg:hidden rounded-lg focus:outline-none focus:shadow-outline">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                            <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path class="hidden" x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    </div>
                    <div hidden={hideNavbarList} class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" id="example-collapse-navbar">
                    <ul class="flex flex-col lg:flex-row list-none mr-auto items-center">
                        <li class="flex items-center">
                        <a class="hover:text-blueGray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index"><i class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
                            Docs</a>
                        </li>
                    </ul>
                    <ul class="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
                        <li class="inline-block relative">
                        <a class="hover:text-blueGray-500 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="javascript:void(0)" onClick={toggleDropdownList}>
                            Home
                        </a>
                        <div hidden={hideDropdownList} class="absolute bg-white text-base z-50 float-left list-none text-left rounded shadow-lg min-w-48 navbar-popper" id="dropdownList">
                            <span class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                            Admin Layout
                            </span>
                            <a href="" class="hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                            Dashboard
                            </a>
                            <a href="" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                            Settings
                            </a>
                            <a href="javascript:void(0)" onClick={onLogout} class="hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                            Logout
                            </a>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
            <footer hidden={isAuthenticated} class="relative pt-8 pb-6 mt-2">
                <div class="container mx-auto px-2">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div class="text-sm text-blueGray-500 font-semibold py-1">
                        Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                    </div>
                    </div>
                </div>
                </div>
            </footer>
     </>
    )
}