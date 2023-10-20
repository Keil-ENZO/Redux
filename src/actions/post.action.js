import axios from "axios";

export const GET_POSTS = "GET_POST";

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