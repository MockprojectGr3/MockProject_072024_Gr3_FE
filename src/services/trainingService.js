import axios from "axios";

export const getAllCourses = async () => {
    let response = await axios.get(`http://116.103.20.59:5000/api/v1/training-courses`);

    return response.data.length;
}

export const getListCourse = async (page) => {
    let response = await axios.get(`http://116.103.20.59:5000/api/v1/training-courses?page=${page}`);

    return response;
}