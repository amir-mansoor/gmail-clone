// SendMail.js
import { X } from "lucide-react";
import React, { useState } from "react";

const SendMail = ({ isOpen, setIsOpen }) => {
  const [emailData, setEmailData] = useState({
    recipients: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the email data to your backend API
    console.log("Email sent:", emailData);
    // Reset the form after submission
    setEmailData({ recipients: "", subject: "", body: "" });
    setIsOpen(false); // Close the form after sending
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed rounded bottom-0 right-0 bg-neutral-700 shadow-lg p-4 transition-transform transform h-[25rem] translate-y-0">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-4 right-0  bg-neutral-400 rounded-full p-2"
          >
            <X size={20} />
          </button>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="recipients"
              placeholder="Recipients"
              value={emailData.recipients}
              onChange={handleChange}
              required
              className="w-full p-2 border bg-transparent outline-none border-gray-300 rounded mb-2"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={emailData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent outline-none border border-gray-300 rounded mb-2"
            />
            <textarea
              name="body"
              placeholder="Email Body"
              value={emailData.body}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none p-2 border border-gray-300 rounded mb-2"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SendMail;
