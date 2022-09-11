import React from "react";
import icon from "../images/chatbot.png";
import chat from "../images/chat_with_us.png";

const chatBot = () => {
    return React.createElement("div", { className: "container" }, [
        React.createElement("div", { className: "chatbox" }, [
            React.createElement("div", { className: "chatbox__support" }, [
                React.createElement("div", { className: "chatbox__header" }, [
                    React.createElement(
                        "div",
                        { className: "chatbox__header__icon" },
                        [
                            React.createElement("img", {
                                src: icon,
                                alt: "chatbot",
                            }),
                        ]
                    ),
                    React.createElement(
                        "div",
                        { className: "chatbox__header__content" },
                        [
                            React.createElement(
                                "h4",
                                {
                                    className:
                                        "chatbox__header__content__title",
                                },
                                "Chat Support"
                            ),
                            React.createElement(
                                "p",
                                { className: "chatbox__header__description" },
                                "Hi, I'm gonna assist you if you need any help. Rest assured"
                            ),
                        ]
                    ),
                ]),
                React.createElement("div", { className: "chatbox__messages" }, [
                    React.createElement("div"),
                ]),
                React.createElement("div", { className: "chatbox__footer" }, [
                    React.createElement("input", {
                        type: "text",
                        placeholder: "Ask me anything!",
                    }),
                    React.createElement(
                        "button",
                        { className: "chatbox__footer__send send__button" },
                        "Send"
                    ),
                ]),
            ]),
            React.createElement("div", { className: "chatbox__button" }, [
                React.createElement("button", {}, [
                    React.createElement("img", { src: chat }),
                ]),
            ]),
        ]),
    ]);
};


//$SCRIPT_ROOT = {{ request.script_root|tojson }}

export default chatBot;
