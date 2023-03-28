import React, { useState } from 'react'
import { loginActions, selectLogin, selectUserName } from '../../store/loginSlice';
import { useSelector, useDispatch } from 'react-redux';

function Header() {

    const isLoggedIn = useSelector(selectLogin);
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();

    const handleLogIn = () => {
        dispatch(loginActions.login('John Doe'));
    }

    const handleLogOut = () => {
        dispatch(loginActions.logout());
    }

    return (
        <header>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">eCommerceAW</a>
                    {isLoggedIn ? (
                        <div class="card">
                            <div>
                                <span style={{
                                    marginRight: '10px',
                                    marginLeft: '10px'
                                }}>
                                    {userName}
                                </span>
                                <button onClick={() => handleLogOut()} type="button" class="btn btn-outline-secondary" >Log Out</button>
                            </div>
                        </div>

                    ) : (
                        <button onClick={() => handleLogIn()} type="button" class="btn btn-outline-secondary">Log In</button>
                    )}
                </div>
            </nav>


        </header>
    )
}

export default Header