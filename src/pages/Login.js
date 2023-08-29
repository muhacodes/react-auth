import { useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";

import AlertModal from "../components/alert";

function LoginPage() {
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
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />

      <AlertModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        message={message}
      />
      {/* <div className="flex justify-center items-center h-screen">
        <button
          onClick={showMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Show Alert
        </button>
        <AlertModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          message="This is an alert message!"
        />
      </div> */}
      <Login openModal={showMessage}   />
    </>
  );
}
export default LoginPage;
