import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// connect((store)=>{
//     return(
//         posts:store.posts
//     );
// })

import fetchPosts from '../src/Actions/postActions'
import likePosts from '../src/Actions/likeActions'
// const onLike = (post) => (console.log(post));
// const
const onUnlike = (post) => ({ type: 'UNLIKE_POST', post });

const Post = (props) => (
    <div style={ {border:'1px solid #000', margin: 5} }>
      <strong>Post #{props.post.id}</strong>
      {props.liked ? (
        <button onClick={()=>props.onUnlike(props.post)}>
          Unlike
        </button>
      ) : (
        <button onClick={()=>props.onLike(props.post)}>
          Like
        </button>
      )}

    <p>{props.post.body}</p>

      <span>({props.likes} likes)</span>
    </div>
  )

//   const PostsWithLikes = connect(
//     function(state){
//       return {
//         posts: state.posts,
//         postsLikes: state.like,
//         postsLikeCounters: state.postsLikeCounters
//       };
//     },
//     {
//       onLike,
//       onUnlike
//     }
//   )(Posts)





function mapStateToProps(state) {
    console.log(state)
    // const {posts}  = state
    console.log(state.posts.posts)
    return {
        postsAsProps:state.posts
    }
   

}
export class AppNew extends Component {
    // mapDispatchToProps = dispatch => {
    //     return bindActionCreators({
    //         onLike,
    //         // dislike,
        
    //     },
    //         dispatch
    //     )
    // }
   
    componentWillMount(){
      if(! this.props.postsAsProps.fetched){
        this.props.dispatch(fetchPosts())
      }
    }
    onLike(post){
      (this.props.dispatch(likePosts(post)))
     }
    render() {
        const {posts} = this.props.postsAsProps


        // mapStateToProps()
        // console.log(this.props)
        // console.log("asdas")
        console.log(posts)
        return (
            <div>
            <div>
            { /*  {posts.map((content, index) => {

                return <div className="card col-lg-2 col-md-3 col-6">
                    <div className="card-body">
                        <div className="card-title"> <h6> {content.title} </h6>  </div>
                        <div className="card-text" onClick={() => console.log(content.id)}>
                            {content.body}
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Likes: {content.like}</small>
                                <button onClick={()=>console.log(content.id)}>  Like karo      </button>
                                <small class="text-muted">    Disikes: {content.dislike}</small>
                        </div> 
                    </div> 
                         
                </div>
           
            }
            <div>
            */}
            </div>
            {posts.map(post => (
                <div style={ {border:'1px solid #000', margin: 5} }>
                <strong>Post #{post.id}</strong>
             {/* {post.liked ? (
                //   <button onClick={()=>onUnlike(post)}>
                //     Unlike
                //   </button>
                // ) : ( */} 
                  <button onClick={()=>this.onLike(post)}>
                    Like
                  </button>
                )}
          
              <p>{post.body}</p>
          
                <span>({post.like} likes)</span>
              </div>
            //   <Post 
            //     key={post.id}
            //     post={post}
            //     likes={post.like}
            //     liked={post.like}
            //     onLike={onLike}
            //     onUnlike={onUnlike} />
            // 




            ) ) }
                <h1> FETCHED </h1>
            </div>
    
        )
    }
}

export default connect(mapStateToProps)(AppNew)
