import React, { useEffect } from "react";
import { authService } from "../fbase";
import {useHistory} from "react-router-dom";

export default () => {
    const onLogoutClick = () => authService.signOut();

    useEffect(()=>{
        
    })
    return (
        <>
        <button onClick = {onLogoutClick}>log out</button>
        </>
    )
}