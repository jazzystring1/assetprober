import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';

export default function Test(props) {

    return (
            <div class="flex flex-col w-screen h-screen">
                <div class="flex bg-red-400 w-screen h-20">

                </div>
                <div class="flex flex-row bg-yellow-400 w-screen h-screen">
                    <div class="flex bg-pink-400 w-40 h-screen">

                    </div>


                </div>
            </div> 
           
    );
}
