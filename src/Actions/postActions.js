// import {fetchPosts} from "../postActions"



export default function fetchPosts() {

    // dispatch({ type: "FETCH" })
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // const title = data.title.map((title) => num.title);
                const body = [];
                // const title = [];
                // const body = [];
                // const body = [];
                // const body = [];

                for (var i = 0; i < data.length; i++) {
                    // body.push(data[i]) 
                    body.push(data[i])

                    //    title.push(data[i].title)
                }
                var result = body.map(function (el) {
                    var o = Object.assign({}, el);
                    o.like = 0;
                    o.dislike = 0;
                    o.liked = false;
                    o.disliked= false;

                    return o;
                })
                dispatch({ type: "FETCH_COMPLETE", payload: result })
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR", payload: err })
            })
    }

}