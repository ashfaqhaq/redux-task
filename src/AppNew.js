import React, { Component } from 'react'
import { connect } from 'react-redux'

// connect((store)=>{
//     return(
//         posts:store.posts
//     );
// })

import fetchPosts from '../src/Actions/postActions'

function mapStateToProps(state) {
    console.log(state)
    // const {posts}  = state
    console.log(state.posts.posts)
    return {
        postsAsProps:state.posts
    }
    // const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    //   selectedSubreddit
    // ] || {
    //   isFetching: true,
    //   items: []
    // }
  

}
export class AppNew extends Component {
    componentWillMount(){
        this.props.dispatch(fetchPosts())
    }
    render() {
        const {posts} = this.props.postsAsProps


        // mapStateToProps()
        // console.log(this.props)
        // console.log("asdas")
        console.log(posts)
        return (
            <div>
                <h1> FETCHED </h1>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AppNew)
