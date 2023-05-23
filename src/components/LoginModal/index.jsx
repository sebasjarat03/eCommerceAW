import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  loginActions,
  selectLogin,
  selectShowSignModal,
  selectUser,
} from "../../store/loginSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth, db } from "../../config/firebase";
import {
  QuerySnapshot,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function LoginModal() {
  const showModal = useSelector(selectShowSignModal);
  const logged = useSelector(selectLogin);
  const dispatch = useDispatch();
  const [signUpMode, setSignUpMode] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const usersCollectionRef = collection(db, "users");
  const user = useSelector(selectUser);

  const handleCloseModal = () => {
    dispatch(loginActions.setSignModal());
  };

  const handleSignUpButt = () => {
    setSignUpMode(!signUpMode);
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password).then(
        (res) => {
          addDoc(usersCollectionRef, {
            uid: res.user.uid,
            username: username,
          });
        }
      );
      setEmail("");
      setPassword("");
      handleCloseModal();
    } catch (error) {
      alert(error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password).then(
        (res) => {
          const q = query(usersCollectionRef, where("uid", "==", res.user.uid));
          getDocs(q).then((querySnapshot) => {
            const formattedData = querySnapshot.docs.map((doc) => ({
              ...doc.data(),
            }));

            dispatch(loginActions.setUser(formattedData[0]));
          });
        }
      );

      dispatch(loginActions.login());
      setEmail("");
      setPassword("");
      handleCloseModal();
    } catch (error) {
      alert(error);
    }
  };

  return (
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
                    onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
}

export default LoginModal;
