import { Pencil, Send, File, Inbox } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="">
      <div className="space-y-4">
        <button className="flex items-center border p-3 rounded bg-white text-gray-500 font-bold">
          <Pencil className="mr-4" /> Compose
        </button>
        <button className="flex items-center font-bold w-full p-2 rounded hover:bg-gray-700 ">
          <Inbox className="mr-2" /> Inbox
        </button>
        <button className="flex items-center font-bold w-full p-2 rounded hover:bg-gray-700">
          <Send className="mr-2" /> Sent
        </button>
        <button className="flex items-center font-bold w-full p-2 rounded hover:bg-gray-700">
          <File className="mr-2" /> Drafts
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
