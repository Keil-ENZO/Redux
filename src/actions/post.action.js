import axios from "axios";

export const GET_POSTS = "GET_POST";
export const ADD_POST = "ADD_POST";

export const getPost = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/posts")
            .then((res) => {
                dispatch({ type: GET_POSTS , payload: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const addPost = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/posts", data)
            .then((res) => {
                dispatch({ type: ADD_POST , payload: data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}