import React, { useState } from 'react'

function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    }

    const handleLogOut = () => {
        setIsLoggedIn(false);
    }

    return (
        <header>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">eCommerceAW</a>
                    {isLoggedIn ? (

                        <div class="card">
                            <div>
                                <span style={{ marginRight: '10px', marginLeft: '10px' }}>John Doe</span>
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