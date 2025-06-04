import { data } from 'react-router';
import './UserData.scss';
import React, { useState, useEffect } from 'react';



function Userdata() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [displayUserName, setDisplayUserName] = useState('');
    const [display, setDisplay] = useState(false);
    const token = window.localStorage.token || window.sessionStorage.token;

    const nameChange =  async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({userName}),
        });

        if (response.ok) {
            const dataName = await response.json();
            setDisplayUserName(dataName.body.userName);
            setDisplay(false);
        }
    }
        catch (error) {
            console.log(error);
        }
        
    };



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
                setFirstName(data.body.firstName);
                setLastName(data.body.lastName);
                setDisplayUserName(data.body.userName);
                console.log( data.body);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="header">
            { !display ?
            <>
            <h1>Welcome back<br />{displayUserName} {firstName} {lastName}!</h1>
            <button className="edit-button" onClick={() => setDisplay(true)}>Edit Name</button>
            
            </>
            :
            <div className="edit_form" >
                <h2>Edit user info</h2>
                <div className='edit_form_input'>
                <label>User name:</label>
                <input type="text" 
                placeholder={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
                </div>
                <div className='edit_form_input'>
                <label>First name:</label>
                <input type="text" 
                placeholder={firstName}
                onChange={(e) => setUserName(e.target.value)}
                disabled="true"
                />
                </div>
                <div className='edit_form_input'>
                <label>Last name:</label>
                <input type="text" 
                placeholder={lastName} 
                disabled="true"
                />
                </div>
                <div className='edit_form_input_button'>
                <button className="save-button" onClick={nameChange} >Save</button>
                <button className="cancel-button" onClick={() => setDisplay(false)}>Cancel</button>
                </div>
            </div>
            }
        </div>
    );
}



export default Userdata