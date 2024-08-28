import axios from "axios";

export const getListCourse = async (page) => {
    let response = await axios.get(`http://116.103.20.59:5000/api/v1/training-courses?page=${page}`);

    return response;
}

export const getTrainingDetail = async (id) => {
    let response = await axios.get(`http://116.103.20.59:5000/api/v1/training-courses/${id}`);
    return response;
}