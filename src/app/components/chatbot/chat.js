// "use client";

// import { useState } from "react";
// import { Chatbot } from "react-chatbot-kit";
// import config from "./config";
// import ActionProvider from "./actionProvider";
// import MessageParser from "./MessageParser";
// import "react-chatbot-kit/build/main.css";

// export default function Chat() {
//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);

//   const toggleChatbot = () => {
//     setIsChatbotOpen(!isChatbotOpen);
//   };

//   return (
//     <>
//       <div className="fixed bottom-4 right-4 flex flex-col items-end">
//         <button
//           className="bg-orange-500 transition-all text-lg font-semibold text-[#fcfdfc] rounded-full px-4 py-2 mb-2 hover:bg-orange-400 focus:outline-none"
//           onClick={toggleChatbot}
//         >
//           {isChatbotOpen ? "Close Chat" : "Chat with Us"}
//         </button>
//         {isChatbotOpen && (
//           <div className="fixed bottom-52 right-6 w-72 h-96 rounded-lg shadow-lg ">
//             <Chatbot
//               config={config}
//               messageParser={MessageParser}
//               actionProvider={ActionProvider}
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
