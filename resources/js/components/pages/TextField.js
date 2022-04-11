import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';
import ReactDOM from 'react-dom';

export default function TextField({ name, register, type, ...validationRules}) {
    return (
        <input {...register(name, validationRules)} type={type} class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:ring-indigo-700 focus:outline-2 w-full"/>
    )
}
