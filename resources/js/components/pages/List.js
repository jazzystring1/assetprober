import React from 'react';

export default function List({title, children}) {
    return (
            <>
                <h6 class="md:min-w-full text-gray-700 text-sm block pt-4 pb-4 no-underline font-semibold">
                  {title}
                </h6>
                <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                  {children}
                </ul>
                
            </>
               
    );
}
