import React from "react";
import { authService } from "../fbase";

export default () => {
    const onLogoutClick = () => authService.signOut();
    return (
        <>
        <button onClick = {onLogoutClick}>log out</button>
        </>
    )
}