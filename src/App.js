import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from './history'
// connect((store)=>{
//     return(
//         posts:store.posts
//     );
// })

import fetchPosts from './Actions/postActions'
import likePosts from './Actions/likeActions'
import unlikePosts from './Actions/unlikeActions'
import dislikePosts from './Actions/DislikeActions'
import undislikePosts from './Actions/unDislikeActions'

import gorefer from './gorefer.png';
// const onLike = (post) => (console.log(post));
// const
// const 

const Post = (props) =>(
  <div class="card container pt-3" style={{width: '30rem'}}>
    <strong>Post #{props.post.id} {props.post.title} </strong>
       <div class="card-body ">
       <img class="card-img-top" src={gorefer} alt="Card pict"></img>
       <strong>  Content</strong>
    <p>{props.post.body}</p>
    <div className="btn-group">
    {props.liked ? (
     
      <button class="btn btn-outline-primary mx-3" style={{width:'10rem'}} onClick={() => props.onUnlike(props.post)}>
        Remove Like <span class="badge badge-light ml-1">{props.likes}</span>
      </button>
    ) : (

        <button class="btn btn-primary mx-3" style={{width:'10rem'}} onClick={() => props.onLike(props.post)}>
          Like <span class="badge badge-light ml-1">{props.likes}</span>
        </button>
      )} 
      {props.isDisliked ? (
        <button class="btn btn-danger mx-3" style={{width:'10rem'}} onClick={() => props.onUndislike(props.post)}>
        
          Remove Dislike
          <span class="badge badge-light ml-1">{props.dislikes}</span>
        </button>
      ) : (
          <button class="btn btn-outline-danger mx-3"  style={{width:'8rem'}} onClick={() => props.onDislike(props.post)}>
           Dislike   <span class="badge badge-light ml-1">{props.dislikes}</span>
          </button>
         
        )}
        </div>
        <div class="card-body">
       
      </div>
   
  </div>
  </div>
)





function mapStateToProps(state) {
  console.log(state)
  
  console.log(state.posts.posts)
  return {
    postsAsProps: state.posts
  }


}
export class App extends Component {
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
            <h3 class="d-flex justify-content-center mt-4">  All Posts </h3>
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
          <div style={{ margin: 5 }}>
          
             {<Post
              key={post.id}
              post={post}
              title ={post.title}
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

          
          
          
         
         




        
      </div>

    )
  }
}

export default connect(mapStateToProps)(App)
