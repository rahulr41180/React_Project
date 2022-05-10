
import "./Login.css"

import { useState, useEffect } from "react";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { AuthLogin } from "../../Redux/Login/action";

export const Login = () => {

    const [formdata, setFormData] = useState({
        email : "",
        password : "",
    });

    const isAuth = useSelector((store) => store.IsAuth.isAuth)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log('isAuth:', isAuth)


    const handleChange = (event) => {
        const { name, value }  = event.target;

        setFormData({
            ...formdata,
            
            [name] : value,
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('formdata:', formdata)
        axios.post("https://reqres.in/api/register", {
            email : formdata.email,

            password : formdata.password,
        })
        .then((res) => {
            dispatch(AuthLogin(res.data.token))
            console.log("res : ", res)
            console.log("res : ", res.data.token)
            navigate("/", {replace : false});
        })
        .catch((error) => {
            console.log('error:', error)
            alert("Please Enter username as eve.holt@reqres.in and password as pistol")
        })
    }

    return (
        <div className="container">
            <div className="LeftNavbar">
                <Link className="login" to="/">
                    <div>HOME</div>
                </Link> 
            </div>
            <div className="Right__Box">
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <input onChange={handleChange} name="email" type="text" placeholder="Enter Email...." />
                        <input onChange={handleChange} name="password" type="text" placeholder="Enter Password...." />
                        <input type="submit" value="LOGIN" />
                    </form>
                </div>
            </div>
        </div>
    )

}