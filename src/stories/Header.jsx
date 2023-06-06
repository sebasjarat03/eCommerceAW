import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

export const Header = ({
  isLoggedIn,
  username,
  handleLogOut,
  handleOpenCart,
  quantity,
  handleLogIn,
}) => (
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">eCommerceAW</a>
        {isLoggedIn ? (
          <div class="card">
            <div>
              {isLoggedIn && (
                <span
                  style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                >
                  {username}
                </span>
              )}
              <button
                onClick={() => handleOpenCart()}
                type="button"
                class="btn btn-outline-secondary"
                style={{ marginRight: "10px" }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span class="badge bg-secondary">{quantity}</span>
              </button>
              <button
                onClick={() => handleLogOut()}
                type="button"
                class="btn btn-outline-secondary"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => handleLogIn()}
            type="button"
            class="btn btn-outline-secondary"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

Header.defaultProps = {
  isLoggedIn: false,
};
