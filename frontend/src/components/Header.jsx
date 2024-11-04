import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Logo from "../assets/logo.png";
import { Search, UserRound, UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 px-2">
      <div className="flex items-center">
        <img src={Logo} alt="gmail logo" width={100} />

        <Link to="/">
          <h1 className="-ml-3 text-2xl">Gmail</h1>
        </Link>

        <SignedIn>
          <div className="flex items-center ml-[160px] w-[500px] backdrop-brightness-105 border border-gray-700 py-3 rounded-full px-2">
            <Search />
            <input
              className="w-full ml-2 outline-none  bg-transparent"
              type="text"
              placeholder="Search Mail"
            />
          </div>
        </SignedIn>
      </div>

      <div>
        <SignedOut>
          <div className="flex items-center space-x-2">
            <Link to="/register">
              <UserRoundPlus />
            </Link>
            <span>|</span>
            <Link to="/login">
              <UserRound />
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
