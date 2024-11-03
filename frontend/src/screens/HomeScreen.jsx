import { SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="text-center mt-52">
      <h1 className="font-bold text-6xl tracking-tighter text-blue-600">
        Manage Your Business With Gmail
      </h1>
      <p>
        Gmail seamlessly blends simplicity with powerful features, offering an
        intuitive interface, smart organization tools
      </p>
      <SignedOut>
        <div className="space-x-4 mt-5">
          <Link to="/register">
            <button className="border p-2 rounded font-bold  transition-all hover:bg-blue-500 hover:text-black ">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="border p-2 rounded font-bold  transition-all hover:bg-blue-500 hover:text-black ">
              Login
            </button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default HomeScreen;
