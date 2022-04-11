import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function InputLabel(props) {
    return (
        <label class="block text-sm font-medium text-gray-700 mb-2" for="grid-password">
            { props.children }
        </label>
    )
}
