import React from 'react';
import ReactDOM from 'react-dom';

export default function NavLink(props) {
    return (
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            {props.name}
        </a>
    );
}

