import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function FormFieldErrorMessage(props) {
    return (
        <div class="mb-2">
            { props.render(props.errors) }
        </div>
    )
}
