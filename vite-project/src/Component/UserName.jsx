import './Username.scss';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../Redux/userSlice";

function Username () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [displayUserName, setDisplayUserName] = useState(''); 
    const [display, setDisplay] = useState(false);
    const userData = useSelector((state) => state.userAuth.user);
    const token = useSelector((state) => state.userAuth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (display) {
        setUserName(userData.userName || "");
        setFirstName(userData.firstName || "");
        setLastName(userData.lastName || "");
    }
    }, [userData, token, display]);

    if (!userData) {
        return <div>Loading user data...</div>;
    }


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
                dispatch(setUserData(dataName.body));
                console.log(dataName.body);
                setDisplay(false);
            }
        }
            catch (error) {
                console.log(error);
            }
                    
        };
        return (
        <div className="header">
            { !display ?
            <>
            <h1>Welcome back<br />{userData.userName} {userData.firstName} {userData.lastName}!</h1>
            <button className="edit-button" onClick={() => setDisplay(true)}>Edit User Name</button>
            
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
                disabled={true}
                />
                </div>
                <div className='edit_form_input'>
                <label>Last name:</label>
                <input type="text" 
                placeholder={lastName} 
                disabled={true}
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
};

export default Username;
