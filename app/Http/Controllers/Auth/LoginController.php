<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginAccountRequest;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function create(LoginAccountRequest $request) {
        if(Auth::attempt($request->all())) {
            return response()->json([
                'message' => 'You have logged in successfully!',
                'user_id' => Auth::id()
            ], 200);
        } 

        return response()->json([
            'message' => 'Incorrect email or password',
        ], 200);
    }

    public function logout() {
        return Auth::logout();
    }
}
