import React from './node_modules/react';
import { useForm } from './node_modules/react-hook-form'
import './Login.css'
import * as firebase from "./node_modules/firebase/app";
import "./node_modules/firebase/auth";
import firebaseConfig from "../../firebase.config";



firebase.initializeApp(firebaseConfig);


const Login = () => {
    
    
    

     console.log();
    return (
        <div >
            <form className="ship-ment" onSubmit={handleSubmit(onSubmit)}>
                
                <input name="name" ref={register({ required: true })} placeholder="Your name.."/>  
                {errors.name && <span>Name is required</span>}
                <br/>
                <input name="email" ref={register({ required: true })}  placeholder="Email.."/>  
                {errors.email && <span>Email is required</span>}
                <br/>
                <input name="password" ref={register({ required: true })}  placeholder="Password" type="password"/>  
                {errors.password && <span>Password is required</span>}
                <br/>
                <input name="conformPassword" ref={register({ required: true })}  placeholder="Conform password" type="password"/>  
                {errors.conformPassword && <span>Conform Password is required</span>}
                
                <br/>
                {
                    <input type="submit" value="SingUp" />
                }
            </form>
        </div>
    );
};

export default Login;