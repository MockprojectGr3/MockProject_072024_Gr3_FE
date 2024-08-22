import axios from "axios";

export const postFeedback = async (data) => {
    const response = await axios.post("http://116.103.20.59:5000/api/v1/feedback-request", data);
    console.log('response: ', response);
    //return response.data.user;
}