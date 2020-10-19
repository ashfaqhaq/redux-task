
export default function unDislikePosts(post) {

    // dispatch({ type: "FETCH" })
    return function (dispatch) {
       
                dispatch({ type: "UNDISLIKE_POST", payload: post })
        

}
}