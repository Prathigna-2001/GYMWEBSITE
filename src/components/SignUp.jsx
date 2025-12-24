import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function SignUp() {

  const [page, setPage] = useState("register");

  return (
    <>
      {page === "register" ? (
        <Register switchToLogin={() => setPage("login")} />
      ) : (
        <Login switchToRegister={() => setPage("register")} />
      )}
    </>
  );
}

export default SignUp;
