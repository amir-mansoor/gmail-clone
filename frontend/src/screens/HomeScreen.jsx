import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MailBox from "../components/MailBox";
import SendMail from "../components/SendMail";

const HomeScreen = () => {
  return (
    <div>
      {/* Show showcase if user is signout else show chatbox and sidebar */}
      <SignedOut>
        <div className="text-center mt-52">
          <h1 className="font-bold text-6xl tracking-tighter text-blue-600">
            Manage Your Business With Gmail
          </h1>
          <p className="mt-4 text-lg">
            Gmail seamlessly blends simplicity with powerful features, offering
            an intuitive interface, smart organization tools
          </p>

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
        </div>
      </SignedOut>

      <SignedIn>
        {/* Show sidebar and mailbox flex */}
        <div className="flex ml-2  mt-4">
          <div className="flex-[0.2]">
            <Sidebar />
          </div>
          <div className="flex-auto">
            <MailBox />
          </div>
        </div>
      </SignedIn>
    </div>
  );
};

export default HomeScreen;
