import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
const Message = ({message}) => {
  const {authUser}= useAuthContext();
  const {selectedConversation} = useConversation();
  
  const fromMySide= message.senderId=== authUser._id;
  const chatClassName= fromMySide? 'chat-end' : 'chat-start';
  const profilePic= fromMySide? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleChatColor= fromMySide? 'bg-blue-500': "";
  const messageTime= extractTime(message.createdAt);
    return (
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="TK"
              src={profilePic}
            />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleChatColor} pb-2`}>
         {message.message}
        </div>
        <div className="chat-footer opacity-200 text-xs flex gap-1 items-center">
          {messageTime}
        </div>
      </div>
    );
  };
  
  export default Message;
  