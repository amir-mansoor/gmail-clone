import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MailBox from "../components/MailBox";
import { useEffect } from "react";
import { BASE_URL } from "../constants";

const HomeScreen = () => {
  const { user, isSignedIn } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      const sendUserDataToBackend = async () => {
        try {
          const sessionToken = await getToken();
          const response = await fetch(`${BASE_URL}/users/add-user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionToken}`, // Pass token for secure verification
            },
            body: JSON.stringify({
              id: user.id,
              email: user.primaryEmailAddress?.emailAddress,
              name: user.fullName,
              avatarUrl: user.avatarUrl,
            }),
          });

          const data = await response.json();
          console.log(data.message);
        } catch (err) {
          console.log("error sending data to backend", err);
        }
      };

      sendUserDataToBackend();
    }
  }, [user, isSignedIn, getToken]);
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
