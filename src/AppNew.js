import React, { Component } from 'react'
import { connect } from 'react-redux'
import Details from './Details'
import Routes from './Routes'
import { Redirect } from 'react-router'
import history from './history'
// connect((store)=>{
//     return(
//         posts:store.posts
//     );
// })

import fetchPosts from '../src/Actions/postActions'
import likePosts from '../src/Actions/likeActions'
import unlikePosts from '../src/Actions/unlikeActions'
import dislikePosts from '../src/Actions/DislikeActions'
import undislikePosts from '../src/Actions/unDislikeActions'
// const onLike = (post) => (console.log(post));
// const
// const 

const Post = (props) => (
  <div style={{ border: '1px solid #000', margin: 5 }}>
    <strong>Post #{props.post.id}</strong>
    {props.liked ? (
      <button onClick={() => props.onUnlike(props.post)}>
        Unlike
      </button>
    ) : (
        <button onClick={() => props.onLike(props.post)}>
          Like
        </button>
      )} 
      {props.isDisliked ? (
        <button onClick={() => props.onUndislike(props.post)}>
          unDislike
        </button>
      ) : (
          <button onClick={() => props.onDislike(props.post)}>
           disLike
          </button>
        )}





    <p>{props.post.body}</p>

    <span>({props.likes} likes)</span>
    <span>({props.dislikes} likes)</span>
  </div>
)





function mapStateToProps(state) {
  console.log(state)
  
  console.log(state.posts.posts)
  return {
    postsAsProps: state.posts
  }


}
export class AppNew extends Component {
  state = {
    redirect:false
  }
 
  componentWillMount() {
    if (!this.props.postsAsProps.fetched) {
      this.props.dispatch(fetchPosts())
    }
  }
  onLike(post) {
    (this.props.dispatch(likePosts(post)))
  }
  onUnlike(post){
   (this.props.dispatch(unlikePosts(post)));
  }
  onDislike(post) {
    (this.props.dispatch(dislikePosts(post)))
  }
  onUndislike(post){
   (this.props.dispatch(undislikePosts(post)));
  }


  handleDetails(props){
      console.log(props)
      // this.setState({redirect:true})
      // history.push({
      //   pathname: '/Details',
      //   posts: props,
      // })
      history.push('/Details', props);
  }
  render() {
    const { posts } = this.props.postsAsProps

    //  if(state.redirect){ 
    //   <Redirect to= {{ pathname: '/Details',  state: { post: posts } }} />
    // }
  
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
          <div style={{ border: '1px solid #000', margin: 5 }}>
          
             {<Post
              key={post.id}
              post={post}
              likes={post.like}
              liked={post.isLiked}
              dislikes={post.dislike}
              isDisliked={post.isDisliked}
              onLike={()=>this.onLike(post)}
              onUnlike={()=>this.onUnlike(post)}
              onDislike={()=>this.onDislike(post)}
              onUndislike={()=>this.onUndislike(post)}
               />
             }
          {/* <h6 onClick={()=>{this.handleDetails(post)}}>{post.title} </h6> */}
          </div>   
          ))}

          
          
          
         
         




        <h1> FETCHED </h1>
      </div>

    )
  }
}

export default connect(mapStateToProps)(AppNew)
