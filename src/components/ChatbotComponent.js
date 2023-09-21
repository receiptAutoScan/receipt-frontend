import { useEffect, useRef, useState } from "react";
import "../css/chatbot.css"
import { sendChatToServer } from "../apis/ChatbotAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faX } from "@fortawesome/free-solid-svg-icons";

export default function ChatbotComponent() {

    const inputRef = useRef(null);
    const chatboxContentRef = useRef(null);
    const [chatShow, setChatShow] = useState(false);

    useEffect(() => {


    }, []);

    // 이전 채팅 내역 가져오기
    // const getPastChats = () => {

    // }

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

        // 채팅 전송
        const response = await sendChatToServer(chat);

        if (response) {
            // 채팅창에 내용 추가
            chatboxContentRef.current.innerHTML += `<div class="UserChatItem">${chat}</div><div class="AIChatItem">${response}</div>`;

            // 채팅 아래로 스크롤
            chatboxContentRef.current.scrollTop = chatboxContentRef.current.scrollHeight;

            // 채팅 입력창 초기화
            inputRef.current.value = "";
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
                        <div className="AIChatItem">
                            어시스턴트: 안녕하세요! 오늘은 무엇을 도와드릴까요?
                        </div>
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