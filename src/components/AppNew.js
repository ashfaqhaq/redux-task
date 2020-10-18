import React, { Component } from 'react'
import { connect } from 'react-redux'

// connect((store)=>{
//     return(
//         posts:store.posts
//     );
// })

import fetchPosts from '../Actions/postActions'

function mapStateToProps(state) {
    const {posts}  = state
    console.log(posts)
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
        const {posts} = this.props
        return (
            <div>
                {posts}
            </div>
        )
    }
}

export default connect(mapStateToProps)(AppNew)
