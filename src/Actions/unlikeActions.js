
export default function unlikePosts(post) {

    // dispatch({ type: "FETCH" })
    return function (dispatch) {
       
                dispatch({ type: "UNLIKE_POST", payload: post })
        

}
}