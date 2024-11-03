import { SignUp } from "@clerk/clerk-react";
import React from "react";

const RegisterScreen = () => {
  return (
    <div className="flex justify-center mt-10">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default RegisterScreen;
