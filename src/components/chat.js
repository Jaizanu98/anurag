import { useState } from 'react';
import './chat.css';

const Chat = () => {

    const [messageList, setMessageList] = useState([
        { text: 'Hi' },
        { text: 'Hello' },
        { text: 'Give me your notes' },
    ]);

    const [message, setMessage] = useState("");

    const sendMessage = () => {
        const newList = [...messageList, { text: message }];
        console.log(newList);
        setMessageList(newList);
    }

    return (
        <div className="container cont" style={{ paddingTop: '5rem' }}>
            <div className="card chat-card">
                <div className="card-header">
                    <h4 className="text-center">Chatting App</h4>
                </div>
                <div className="card-body">
                    <div className="message-area">
                        {
                            messageList.map((message) => {
                                return <p>{message.text}</p>
                            })
                        }
                    </div>
                    <h1>{message}</h1>
                    <div className="input-group">
                        <input className="form-control" onChange={(e) => { setMessage(e.target.value) }} />
                        <div className="input-group-append">
                            <button onClick={sendMessage} className="btn btn-primary">Send <i class="fas fa-paper-plane"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Chat;