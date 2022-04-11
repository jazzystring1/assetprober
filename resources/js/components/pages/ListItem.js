import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ListItem({name, icon, href}) {
    const navigate = useNavigate();

    return (
            <>
                <li class="flex flex-row items-center hover:bg-gray-300 rounded cursor-pointer" onClick={() => navigate(href)}>
                    <img src={icon} class="h-5 w-5" alt="SVG as an image"/>
                    <a class="text-gray-700 text-sm py-3 block hover:text-blueGray-500">
                        <i class="fas fa-tv mr-2 text-gray-700 text-sm"></i>
                        {name}
                    </a>
                </li>
            </>
               
    );
}
