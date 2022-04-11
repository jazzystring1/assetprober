import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import AuthInfoContext from '../contexts/AuthInfoContext';
import { Outlet, Link } from 'react-router-dom'
import Table from './Table';
import newAssetSvg from '../svg/newAsset.svg'

export default function Dashboard() {
    return (
      <div class="fromDashboard">
          <div class="relative rounded-xl overflow-auto p-8 bg-[#f8faff]">
            <div class="cursor-pointer group block max-w-xs mx-auto rounded-lg p-4 shadow-lg space-y-3 hover:bg-indigo-500 hover:ring-sky-500">
              <div class="flex items-center space-x-3">
              <img src={newAssetSvg} class="h-5 w-5" alt="SVG as an image"/>
                <h3 class="text-sm text-gray-900 font-semibold group-hover:text-white">New asset</h3>
              </div>
              <p class="text-sm text-gray-500 group-hover:text-white">Create a new asset to start scanning vulnerabilities</p>
            </div>
          </div>
      </div>
    );
}
