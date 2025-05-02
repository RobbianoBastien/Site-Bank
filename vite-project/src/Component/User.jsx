import { data } from 'react-router';
import './User.scss';
import React, { useState, useEffect } from 'react';



function Userdata() {
    const [userName, setUserName] = useState('');
    const token = window.localStorage.token;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setUserName(data.body.firstName);
                console.log('User data:', data.body);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

   /*  return (
        <div className="header">
            <h1>Welcome back<br />{userName}!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    ); */
}



export default Userdata