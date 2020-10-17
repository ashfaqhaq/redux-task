import React, { Component } from 'react'





 class App extends Component {
     state={
         body:[],
         id:[],
         title:[],
         id:[]
     }
    componentDidMount(){
    
        fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>{
            console.log(data);

            // const title = data.title.map((title) => num.title);
            const body = [];
            // const body = [];
            // const body = [];
            // const body = [];

            for (var i = 0; i < data.length; i++) {
                body.push(data[i])
            }
            // console.log(data.)
            this.setState({
                body
            })
            console.log(this.state)
        })
    
    
    
    }


    render() {
        return (
            <div>
             {this.state.body.map((content)=>{
                return <div className="d-flex">
                
                <div className="card " style={{width: '18rem'}}>
                <div className="card-body">
                <div className="card-title">  {content.title}  </div>
                 <div className="card-text">
                 {content.body}
                 </div>
                 </div>
                 </div>
                 </div>
             })}
            </div>
            // <div>
            // asda
            // </div>
        )
    }
}

export default App
