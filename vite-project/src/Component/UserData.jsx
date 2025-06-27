import {useNavigate } from 'react-router';
import './UserData.scss';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../Redux/userSlice";





function Userdata() {
    const token = useSelector((state) => state.userAuth.token);
    const isConnected = useSelector((state) => state.userAuth.isConnected);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    useEffect(() => {
        if (!isConnected) {
            navigate('/Sign-in');
            return;
        }
        const fetchUserData = async () => {
            try { 
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                dispatch(setUserData(data.body));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [token, dispatch]);
}



export default Userdata