import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import AuthInfoContext from '../contexts/AuthInfoContext';
import TextField from './TextField';
import InputLabel from './InputLabel';
import FormFieldErrorMessage from './FormFieldErrorMessage';

export default function Login() {
  const navigate = useNavigate();
  
  const { register, formState: { errors }, handleSubmit } = useForm();

  const { updateAuthInfoContext } = useContext(AuthInfoContext);

  const signInAccount = (formInput, e) => {
      axios.post('/login', {
        ...formInput
      })   
      .then((res) => {
          let { user_id } = res.data;

          if(user_id) {
            updateAuthInfoContext({
              userId: user_id,
              isAuthenticated: true
            });
            navigate('/dashboard');
          }
      })
      .catch((err) => {
          console.log(err);
      })
  }

  return (
      <section class="flex-grow justify-center items-center">
        <div class="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div class="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow rounded-lg bg-blueGray-200 border-0">
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <h6 class="text-blueGray-500 text-2xl font-bold">
                  Sign In
                </h6>
              </div>
              {/*<div class="btn-wrapper text-center">
                <button class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                  <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"/>Github</button>
                <button class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                  <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google </button>
      
              </div>*/}
              <hr class="mt-6 border-b-1 border-blueGray-300"/>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              {/*<div class="text-center text-gray-900 dark:text-white mb-3 text-base font-medium">
                <h3>Or sign in with credentials</h3>
            </div>*/}
              <form onSubmit={handleSubmit(signInAccount)}>
                <div class="relative w-full mb-3">
                  <InputLabel>Email</InputLabel>
                  <TextField type="email" name="email" register={register} required />
                  <FormFieldErrorMessage 
                    errors={errors}
                    render={({email}) => 
                       email?.type == "required" 
                       ?
                       <label class="text-yellow-600 text-xs">Email is required</label>
                       :
                       ""
                   }
                  />
                </div>            
                <div class="relative w-full mb-3">
                  <InputLabel>Password</InputLabel>
                  <TextField type="password" name="password" register={register} required="true"/>
                  <FormFieldErrorMessage 
                    errors={errors}
                    render={({password}) => 
                      password && <label class="text-yellow-600 text-xs">Password is required</label>
                    }
                  />
                </div>
                <div>
                  <label class="inline-flex items-center cursor-pointer">
                  <input id="customCheckLogin" type="checkbox" class="form-checkbox border-2 border-gray-100 rounded  ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">Remember me</span></label>
                </div>
                <div class="text-center mt-3">
                  <input name="_token" value={csrfToken} type="hidden"/>
                  <button class="bg-indigo-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> Sign In </button>
                </div>
                <div class="mt-5">
                  <Link to="/register">
                    <p class="text-sm text-center">
                        Don't have an account? &ensp;
                        <a class="text-sm text-indigo-500 hover:text-orange-800">
                            Create account
                        </a>
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  );
}
