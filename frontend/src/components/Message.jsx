/* eslint-disable react/prop-types */
import { extractTime } from '../../utils/extractTime';
import { useAuth } from '../context/AuthContext';
import useConversation from '../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();
  //   const fromMe = message?.senderId === authUser._id;
  const fromMe = true;
  //   const formattedTime = extractTime(message.createdAt?? "2024-06-10");
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';

  //   const shakeClass = message.shouldShake ? 'shake' : '';
  const shakeClass = true;
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        random
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {/* {formattedTime} */}24th jan
      </div>
    </div>
  );
};
export default Message;
