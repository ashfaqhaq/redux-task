// import {fetchPosts} from "../postActions"



export default function dislikePosts(post) {

    // dispatch({ type: "FETCH" })
    return function (dispatch) {
       
                dispatch({ type: "DISLIKE_POST", payload: post })
        

}
}