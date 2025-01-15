const { axiosInstance } = require("./axios");

function sendMessage(messageObj,messageText){
    return axiosInstance.get("sendMessage",{
        chat_id:messageObj.chat.id,
        text:messageText
    })
}

function handleMessage(messageObj){
    const messageText = messageObj.text || '';

    if(messageText.charAt(0) === '/'){
        const command = messageText.substr(1);

        switch(command){
            case 'start': return sendMessage(messageObj,"Hi, Hit Dhameliya This side");

            case 'edu': return sendMessage(messageObj,"BCA In VNSGU")

            default:
                return sendMessage(messageObj,"Hey hi, I don't know what you say")
        }
    }else{
        return sendMessage(messageObj,messageText)
    }
}

module.exports = {handleMessage}