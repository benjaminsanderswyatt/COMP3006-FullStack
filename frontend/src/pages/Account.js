import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import UpdateField from '../components/UpdateField';

const WEBSOCKET_URL = 'http://localhost:82';

const Account = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem('token');
        navigate('/');
    };


    const handleUpdateMessage = (msg, type) => {
        setMessage(msg);
        setMessageType(type);
    };


    return (
        <div style={styles.main}>
            
            
            <h1>Account</h1>

            <div style={styles.holder}>
                <UpdateField field="username" onUpdateMessage={handleUpdateMessage} />
                <UpdateField field="email" onUpdateMessage={handleUpdateMessage} />
                <UpdateField field="hi" onUpdateMessage={handleUpdateMessage} />

                <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>

            </div>



            
        </div>
    );
};

const styles = {
    main: {
        padding: '20px',
        textAlign: 'left',
        width: '100%',
    },
    holder: {

        background: '#ebf9ff',
        border: 'solid',
        borderColor: '#070810',
        borderRadius: '8px',
        display: 'block',
        padding: '20px',
        width: 'auto',
    },
    logoutButton: {
        background: '#FF4747',
        marginTop: '50px',
        width: '50%',
        minWidth: '100px',
        border: 'none',
        borderRadius: '10px',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
        padding: '5px',
        
      }
};


export default Account;