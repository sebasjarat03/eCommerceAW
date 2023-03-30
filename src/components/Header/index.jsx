import { loginActions, selectLogin, selectUserName } from '../../store/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { cartActions } from '../../store/cartSlice';


function Header() {

    const isLoggedIn = useSelector(selectLogin);
    const userName = useSelector(selectUserName);
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.cart.totalQuantity);

    const handleLogIn = () => {
        dispatch(loginActions.login('Sebastian'));
    }

    const handleLogOut = () => {
        dispatch(loginActions.logout());
    }

    const handleOpenCart = () => {
        dispatch(cartActions.setShowCart());

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
                                <button onClick={() => handleOpenCart()} type="button" class="btn btn-outline-secondary" style={{ marginRight: '10px' }}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <span class="badge bg-secondary" >{quantity}</span>
                                </button>
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