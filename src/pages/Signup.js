
import { useState } from "react";
import Header from "../components/Header";
import Signup from "../components/Signup";
import AlertModal from "../components/alert";

function SignupPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = (message) => {
    setMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <AlertModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        message={message}
      />
      <Signup openModal={showMessage} />
    </>
  );
}
export default SignupPage;
