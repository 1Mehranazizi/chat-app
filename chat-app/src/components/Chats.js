import React from 'react';
import { useHistory } from 'react-router-dom';

//firebase
import { auth } from '../firebase';

//components
import Navbar from "./Navbar";

const Chats = () => {
    const history = useHistory();
    const logOutHandler = async () => {
        await auth.signOut();
        history.push("/");
    }

    return (
        <div>
            <Navbar logOutHandler={logOutHandler} />
        </div>
    );
};

export default Chats;