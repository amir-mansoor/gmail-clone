import { MoreVertical, RotateCw } from "lucide-react";
import { useState } from "react";
import Inbox from "./Inbox";
import { useLocation } from "react-router-dom";

const MailBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  window.onclick = (e) => {
    if (isOpen && e.target.classList[1] !== "lucide-ellipsis-vertical") {
      setIsOpen(false);
    }
  };
  return (
    <div className="bg-neutral-800  h-[90vh] mx-2 rounded">
      {/* Mail box header */}
      <div className="h-16 backdrop-brightness-110 border-b border-b-gray-600 p-2">
        <div className="space-x-4 flex items-center">
          <button className="p-2 rounded-full hover:bg-gray-700">
            <RotateCw />
          </button>

          <div className="relative inline-block text-left">
            {/* Three dots icon */}
            <button
              onClick={toggleDropdown}
              className="p-2 rounded-full hover:bg-gray-700"
            >
              <MoreVertical name="dots" size={24} />
            </button>

            {/* Dropdown box */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-md shadow-lg z-10">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
                  Mark All as Read
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mails will be show here */}
      <Inbox />
    </div>
  );
};

export default MailBox;
