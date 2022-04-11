import React, {useState, useContext} from 'react';
import AuthInfoContext from '../contexts/AuthInfoContext';
import { Outlet } from 'react-router-dom'
import assetSvg from '../svg/assets.svg'
import taskSvg from '../svg/tasks.svg'
import subdomainEnumerationSvg from '../svg/subenumeration.svg'
import fuzzSvg from '../svg/fuzz.svg'
import feedSvg from '../svg/feed.svg'
import List from './List'
import ListItem from './ListItem';
import Divider from './Divider';

export default function SideNavBar() {
    return (
      <div class="flex flex-wrap md:flex-row">
        <div class="lg:w-1/6">
          <nav class="px-4 pb-4 md:overflow-hidden shadow-xl h-screen">
              <div class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded" id="example-collapse-sidebar">
                <div class="md:min-w-full block pb-2 ">
                  <div class="flex flex-wrap">
                    <div class="lg-6/12 flex justify-end">
                      <button type="button" class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onclick="toggleNavbar('example-collapse-sidebar')">
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <form class="mt-6 mb-4 md:hidden">
                  <div class="mb-3 pt-0">
                    <input type="text" placeholder="Search" class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"/>
                  </div>
                </form>
                <List title="Main">
                  <ListItem 
                    name="Assets"
                    icon={assetSvg}
                    href="/assets"
                  />
                  <ListItem
                     name="Vulnerability Feed"
                     icon={feedSvg}
                     href="/feed/vulnerability"
                  />
                  <ListItem
                     name="Tasks"
                     icon={taskSvg}
                     href="/tasks"
                  />
                </List>
                <Divider/>
                <List title="Asset Discovery">
                  <ListItem 
                    name="Subdomain Enumeration"
                    icon={subdomainEnumerationSvg}
                    href="/enumeration"
                  />
                  <ListItem
                     name="Fuzz"
                     icon={fuzzSvg}
                     href="/fuzz"
                  />
                </List>
              </div>
          </nav>
        </div>
        <div class="flex flex-grow flex-col bg-gray-100">
          <Outlet/>
        </div>
      </div>
    );
}
