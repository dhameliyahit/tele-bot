const { axiosInstance } = require("./axios");

function sendMessage(messageObj,messageText){
    return axiosInstance.get("sendMessage",{
        chat_id:messageObj.chat.id,
        text:messageText
    })
}


const OTP = () => Math.floor(100000 + Math.random() * 900000).toString();


function handleMessage(messageObj){
    if (!messageObj || !messageObj.text) {
        return "Invalid message or message text is empty.";
    }

    const messageText = messageObj.text.trim() || '';

    if(messageText.charAt(0) === '/'){
        const command = messageText.substr(1);
        let otp = OTP()
        switch(command){
            case 'hi' : return sendMessage(messageObj,"/hi -> for All command \n /start -> introduction \n /edu -> eduction \n /otp -> generate OTP");
            case 'start': return sendMessage(messageObj,"Hi, Hit Dhameliya This side \n for more info text => /hi ");
            case 'edu': return sendMessage(messageObj,"BCA In VNSGU")
            case 'otp': return sendMessage(messageObj,otp)

            default:
                return sendMessage(messageObj,"Hey hi, I don't know what you say")
        }
    }else{
        return sendMessage(messageObj,messageText)
    }
}

module.exports = {handleMessage}