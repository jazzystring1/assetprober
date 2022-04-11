import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import trashSvg from '../svg/trash.svg'
import scanSvg from '../svg/scan.svg'

export default function Table(props) {
    return (
        <div class="flex flex-wrap mt-4">
          <div class="w-full mb-12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap">
                  <div class="flex flex-row">
                    <div class="">
                      <h3 class="font-semibold text-lg text-blueGray-700">
                        { props.title }
                      </h3>
                    </div>
                  </div>
                  <div class="flex flex-grow justify-end">
                    <div class="ml-2 flex cursor-pointer items-center w-5">
                     <img src={scanSvg} class="rounded"></img>
                    </div>
                    <div class="ml-2 flex cursor-pointer items-center w-5">
                     <img src={trashSvg} class="rounded"></img>
                    </div>
                    <div class="ml-2">
                     <button class="bg-indigo-500 text-white active:bg-blueGray-600 text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> New Asset </button>
                    </div>
                    <div class="ml-2">
                     <button class="bg-yellow-600 text-white active:bg-blueGray-600 text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> Edit </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">

                <table class="table-auto items-center min-w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th class="px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                       <input class=" h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"/>
                      </th>
                      <th class="px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-gray-500 border-blueGray-100">
                        Name
                      </th>
                      <th class="px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-gray-500 border-blueGray-100">
                        Group
                      </th>
                      <th class="px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-gray-500 border-blueGray-100">
                        Status
                      </th>
                      <th class="px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-gray-500 border-blueGray-100">
                        Completion
                      </th>
                      <th class="px-6 align-middle border border-solid py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-gray-500 border-blueGray-100">

                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-t-0 px-6 text-xs border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                        <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"/>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <img src="../../assets/img/bootstrap.jpg" class="h-12 w-12 bg-white rounded-full border" alt="..."/>
                        <span class="ml-3 text-gray-600">
                          https://www.facebook.com
                        </span>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        None
                      </td>
                      <td class="w-0 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-green-700 bg-green-100 border border-green-300 ">
                            <div class="text-xs font-normal leading-none max-w-full flex-initial">On-scan</div>
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <span class="mr-2">60%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <button class="bg-indigo-500 text-white active:bg-blueGray-600 text-sm px-3 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> View </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}
