import React, { Component } from 'react'





class App extends Component {
    state = {
        // userInput:[{
        body: [],
        id: [],
        title: [],
        // eslint-disable-next-line no-dupe-keys
        id: []
        // }]
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);

                // const title = data.title.map((title) => num.title);
                const body = [];
                const title = [];
                // const body = [];
                // const body = [];
                // const body = [];

                for (var i = 0; i < data.length; i++) {
                    // body.push(data[i]) 
                    body.push(data[i])
                    //    title.push(data[i].title)
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
                {this.state.body.map((content,index) => {
                    return <div>
                    <ul>                        <li key={content.id} onClick={()=>console.log(content.id)}> {content.id}
                        {content.title}
                        
                        </li>
                        </ul>
                    </div>

                })
            }
            </div>
            )
            
    
}
}
export default App
