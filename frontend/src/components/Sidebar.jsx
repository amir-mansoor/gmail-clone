import { Pencil, Send, File, Inbox } from "lucide-react";
import { useState } from "react";
import SendMail from "./SendMail";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="space-y-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center border p-3 rounded-3xl bg-white text-gray-500 font-bold"
        >
          <Pencil className="mr-4" /> Compose
        </button>
        <button className="flex items-center font-bold w-full rounded-r-full p-2 rounded hover:bg-gray-700 ">
          <Inbox className="mr-2" /> Inbox
        </button>
        <button className="flex items-center font-bold w-full p-2 rounded-r-full hover:bg-gray-700">
          <Send className="mr-2" /> Sent
        </button>
        <button className="flex items-center font-bold w-full p-2 rounded-r-full hover:bg-gray-700">
          <File className="mr-2" /> Drafts
        </button>
      </div>

      <SendMail isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Sidebar;
