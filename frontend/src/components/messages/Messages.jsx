import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import { useEffect,useRef } from "react";
const Messages = () => {
	const {loading, messages} = useGetMessages();
	useListenMessages();
	const lastRef= useRef();
	useEffect(()=>{
		setTimeout(()=>{
			lastRef.current?.scrollIntoView({behavior: "smooth"});
		},100);

	},[messages])
		return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && messages.length>0 && messages.map(
				(message)=> (<div key={message._id} ref={lastRef}>
					<Message message={message}></Message>
				</div>)
			)}


			{loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{/* fetch the skeleton and display it 5 times */}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;

