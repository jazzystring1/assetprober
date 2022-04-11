import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import TextField from './TextField';
import InputLabel from './InputLabel';
import FormFieldErrorMessage from './FormFieldErrorMessage';

export default function Register(props) {
    const [formInput, setFormInput] = useState({
                                    "email": "", 
                                    "password": "", 
                                    "password_confirmation": ""}
                                    );
    const [validationMessage, setValidationMessage] = useState({
                                     message: "Email is invalid",
                                     errors: {}
                                    })

    const { register, formState: { errors }, handleSubmit } = useForm();   

    const handleChange = (e) => {
      //Get name and value of input
      const { name, value } = e.target;
      setFormInput((prevState) => ({...prevState, [name]: value}));
    }

    const signUpAccount = (formInput, e) => {
        e.preventDefault();
        axios.post('/register', {
          ...formInput
        })    
        .then((res) => {
            console.log("Successful");
        })
        .catch((err) => {
          let validationMessageFromResponse = err.response.data;
           if("errors" in validationMessageFromResponse) {
            setValidationMessage((...prevState) => ({...prevState, ...validationMessageFromResponse}));
          }
        })
    }

    return (
        <section class="flex-grow justify-center items-center">
        <div class="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow rounded-lg bg-blueGray-200 border-0">
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <h1 class="text-blueGray-500 text-2xl font-bold">
                  Sign Up
                </h1>
              </div>
              <hr class="mt-6 border-b-1 border-blueGray-300"/>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(signUpAccount)}>
                <div class="relative w-full mb-3">
                  <InputLabel>Email</InputLabel>
                  <TextField type="email" name="email" register={register} required="true"/>
                  <FormFieldErrorMessage 
                    errors={errors}
                    render={({password}) => 
                      password && <label class="text-yellow-600 text-xs">Email is required</label>
                    }
                  />
                  <div class="pt-2">
                    <span class="text-xs text-yellow-600" hidden>{validationMessage.message}</span>
                  </div>
                </div>
                <InputLabel>Password</InputLabel>
                  <TextField type="password" name="password" register={register} required="true"/>
                  <FormFieldErrorMessage 
                    errors={errors}
                    render={({password}) => 
                      password && <label class="text-yellow-600 text-xs">Password is required</label>
                    }
                  />
               <InputLabel>Confirm Password</InputLabel>
                  <TextField type="password" name="password_confirmation" register={register} required="true"/>
                  <FormFieldErrorMessage 
                    errors={errors}
                    render={({password}) => 
                      password && <label class="text-yellow-600 text-xs">Password is required</label>
                    }
                  />
                <div class="text-center mt-6">
                  <input name="_token" value={csrfToken} type="hidden"/>
                  <button class="bg-indigo-700 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit"> Sign Up </button>
                </div>
                <div class="mt-5">
                  <Link to="/login">
                    <p class="text-sm text-center">
                        Already have an account? &ensp;
                        <a class="text-sm text-indigo-700">
                            Sign in
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
