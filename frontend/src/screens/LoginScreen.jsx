import { SignIn } from "@clerk/clerk-react";

const LoginScreen = () => {
  return (
    <div className="flex justify-center mt-10">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default LoginScreen;
