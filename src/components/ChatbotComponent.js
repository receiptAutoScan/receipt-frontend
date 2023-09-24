import { useEffect, useRef, useState } from "react";
import "../css/chatbot.css"
import { sendChatToServer } from "../apis/ChatbotAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faX } from "@fortawesome/free-solid-svg-icons";

export default function ChatbotComponent() {

    const inputRef = useRef(null);
    const chatboxContentRef = useRef(null);
    const [chatShow, setChatShow] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {

        setChatHistory([...chatHistory, { type: "AI", content: "안녕하세요! 오늘은 무엇을 도와드릴까요?" }]);

    }, []);


    const onKeyEnter = (e) => {
        if (e.key === "Enter") {
            sendChat();
        }
    }

    const onSendButtonClick = () => {
        sendChat();
    }

    // 채팅 보내기
    const sendChat = async () => {
        const chat = inputRef.current.value;


        if (chat === "") {
            return;
        }

        setChatHistory([...chatHistory, { type: "user", content: chat }]);

        // 채팅 입력창 초기화
        inputRef.current.value = "";

        // 채팅 아래로 스크롤
        chatboxContentRef.current.scrollTop = chatboxContentRef.current.scrollHeight;
        
        // 채팅 전송
        const response = await sendChatToServer(chat);
        
        if (response) {

            setChatHistory([...chatHistory, { type: "user", content: chat }, { type: "AI", content: response }]);
            
            // 채팅 아래로 스크롤
            chatboxContentRef.current.scrollTop = chatboxContentRef.current.scrollHeight;

            console.log(chatHistory);
        }

        
    }

    const chatbotToggle = (e) => {
        setChatShow(!chatShow);
    }

    return (
        <>
            {chatShow &&
                <div className="Chatbox">
                    <div className="ChatboxHeader">
                        Finance 어시스턴트 AI
                        <FontAwesomeIcon icon={faX} style={{color: "#ffffff", float: "right", marginRight: "5px"}} onClick={chatbotToggle}/>
                    </div>
                    <div className="ChatboxContent" ref={chatboxContentRef}>
                        {chatHistory &&

                            chatHistory.map((data) => {
                                const good = data.type === "user" ? "UserChatItem" : "AIChatItem";
                                return (
                                    <div className={good}>
                                        {data.content}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="ChatboxInputBox">
                        <input
                            className="ChatboxInput"
                            type="text"
                            placeholder="메시지를 입력하세요."
                            ref={inputRef}
                            onKeyDown={onKeyEnter}
                        />
                        <button className="ChatbotSendButton" onClick={onSendButtonClick}>Send</button>
                    </div>
                </div>
            }

            {!chatShow &&
                <div className="ChatbotButton" onClick={chatbotToggle}>
                    <FontAwesomeIcon icon={faComment} style={{ color: "#ffffff", fontSize: "50px" }} />
                </div>
            }
        </>
    );
}