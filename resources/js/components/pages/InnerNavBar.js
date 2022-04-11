import PreviousMap from 'postcss/lib/previous-map';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Outlet, Link } from 'react-router-dom'

export default function InnerNavBar() {
    const [hideDropdownList, setHideDropdownList] = useState(true);
    const [hideNavbarList, setHideNavbarList] = useState(true);
    
    const toggleDropdownList = () => {
        setHideDropdownList((hideDropdownList) => !hideDropdownList)
    }

    const toggleNavbarList = () => {
        setHideNavbarList((hideNavbarList) => !hideNavbarList)
    }

    return (
        <>
            <nav class="w-full flex flex-wrap items-center justify-between px-2 py-2 bg-white bg-navbar-expand-lg shadow">
                    <div class="w-full px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
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
                                    <a class="hover:text-indigo-300 px-3 py-4 lg:py-2 flex items-center text-sm text-gray-700" href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index"><i class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
                                        Asset List
                                    </a>
                                </li>
                                <li class="flex items-center">
                                    <a class="hover:text-indigo-300 px-3 py-4 lg:py-2 flex items-center text-sm text-gray-700" href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus?ref=njs-index"><i class="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"></i>
                                        Asset Groups
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <Outlet/>
        </>
    )
}
