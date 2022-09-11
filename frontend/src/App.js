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
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.reply.push(msg1);
        //$SCRIPT_ROOT is declared in a html file in the tutorial
        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "woman security bot", message: r.answer };
                this.message.push(msg2);
                this.updateChat(chatbox)
                textField.value = ''

            }).catch((error) => {
                console.error('Error:', error);
                this.updateChat(chatbox)
                textField.value = ''
            });

    }

    updateChat(chatbox) {
        var html = '';
        this.reply.slice().reverse().forEach(function(item, ) {
            if (item.name === "woman security bot")
            {
                html += '<div>' + item.message + '</div>'
            }
            else 
            {
                html += '<div>' + item.message + '</div>'
            }
        });

        //const chatboxreply = chatbox.querySelector('.chatbox__messages');
        //TO DO: these html need to be append to the main file
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
    //creating object
    return React.createElement("div", { className: "App" }, [
        React.createElement(chatBot),
    ]);
    // To be instated after completing the methods
    // const chatbox = new Chatbox();
    // chatbox.display();
};

export default App;
