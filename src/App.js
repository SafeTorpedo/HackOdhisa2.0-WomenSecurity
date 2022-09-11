import React from "react";
import "./App.css";
import chatBot from "./components/chatBot";

class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector(".chatbox__button"),
            chatBox: document.querySelector(".chatbox__support"),
            sendButton: document.querySelector(".chatbox__send"),
        };

        this.status = false;
        this.reply = [];
    }

    toggle(chatbox) {
        this.status = !this.status;
        if (this.status) {
            chatbox.classList.add("chatbox--active");
        } else {
            chatbox.classList.remove("chatbox--active");
        }
    }

    onSend(chatbox) {
        //fetching from the bot model is required
        //Hanzii please check out the onSend method
    }

    updateChat(chatbox) {
        //being invoked in onSend method to append the response from the bot model
        //Hanzii please check
    }

    display() {
        const { openButton, chatBox, sendButton } = this.args;
        openButton.addEventListener("click", () => this.toggle(chatBox));
        sendButton.addEventListener("click", () => this.onSend(chatBox)); //Hanzii

        const node = chatBox.querySelector("input");
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSend(chatBox);
            }
        });
    }
}

const App = () => {
    return React.createElement(chatBot, {}, [React.createElement(obj)]);
};

const obj = () => {
    const chatbox = new Chatbox(); //will only work after the fetching methods are done
    return chatbox.display();
};

export default App;
