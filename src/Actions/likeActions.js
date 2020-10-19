// import {fetchPosts} from "../postActions"



export default function likePosts(post) {

    // dispatch({ type: "FETCH" })
    return function (dispatch) {
       
                dispatch({ type: "LIKE_POST", payload: post })
        

}
}