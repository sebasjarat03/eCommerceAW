import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export const LoginModal = ({
  showModal,
  handleCloseModal,
  signUpMode,
  username,
  email,
  password,
  handleSignIn,
  handleSignUpButt,
  handleSignUp,
}) => (
  <div>
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        {signUpMode === false ? (
          <>
            <Modal.Title>Sign in</Modal.Title>
          </>
        ) : (
          <>
            <Modal.Title>Sign up</Modal.Title>
          </>
        )}
      </Modal.Header>
      <Modal.Body>
        <div>
          <div class="mb-3">
            {signUpMode === true && (
              <>
                <label for="exampleFormControlInput2" class="form-label">
                  Username
                </label>
                <input
                  value={username}
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="username"
                />
              </>
            )}

            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              value={email}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <label for="inputPassword5" class="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-labelledby="passwordHelpBlock"
            />

            {signUpMode === false ? (
              <>
                <div class="d-grid gap-2 col-6 mx-auto mt-4">
                  <button
                    onClick={() => handleSignIn()}
                    class="btn btn-primary"
                    type="button"
                  >
                    Sign in
                  </button>
                </div>
                <p class="text-center mt-4">Or</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button
                    onClick={() => handleSignUpButt()}
                    class="btn btn-info"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
              </>
            ) : (
              <>
                <div class="d-grid gap-2 col-6 mx-auto mt-4">
                  <button
                    onClick={() => handleSignUp()}
                    class="btn btn-primary"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
                <p class="text-center mt-4">Or</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button
                    onClick={() => handleSignUpButt()}
                    class="btn btn-info"
                    type="button"
                  >
                    Sign in
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary fs-4" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);

LoginModal.propTypes = {
  signUpMode: PropTypes.bool.isRequired,
};

LoginModal.defaultProps = {
  signUpMode: false,
};
