import React from 'react'
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );
    const axiosIntance = axios.create({
        baseURL: process.env.REACT_APP_URL,
    });
    const login = async (inputs) => {
        const res = await axiosIntance.post("/auth/login", inputs, {
            withCredentials: true,
        });

        setCurrentUser(res.data)

    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};