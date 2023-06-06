import { LoginModal } from "./LoginModal";

export default {
  title: "eCommerceAW/LoginModal",
  component: LoginModal,
  tags: ["autodocs"],
};

export const SignUp = {
  args: {
    signUpMode: true,
    showModal: true,
  },
};

export const SignIn = {
  args: {
    signUpMode: false,
    showModal: true,
  },
};
