'use client'
import { useSearchParams } from 'next/navigation';
import {useEffect} from "react";
import axios from "/src/api/axiosInstance";

export default function login() {
    const searchParams = useSearchParams();
    const parseLogin = async () => {
        const token = searchParams.get("token");
        const tokenType = searchParams.get("tokenType");

        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
            const response = await axios.post("/auth/login", null, { headers: headers });
            console.log(response);
            localStorage.setItem("token", response.data?.token);
        } catch (e) {
            console.log("ERROR:" + e);
        }
    }

    useEffect(() => {
        parseLogin();
    }, []);

    return (
        <></>
    )
}