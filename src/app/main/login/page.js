'use client'
import { useSearchParams } from 'next/navigation';
import {useEffect} from "react";
import axios from "/src/api/axiosInstance";


export default function login() {
    const searchParams = useSearchParams();
    const parseLogin = async () => {
        const response = axios.post("/auth/login", null,
            { headers: {
                        'Authorization' : searchParams.get("tokenType") + ' ' + searchParams.get("token")}
            });
        console.log(response);

        localStorage.setItem("token", response.data?.token);
    }

    useEffect(() => {
        parseLogin();
    }, []);

    return (
        <></>
    )
}