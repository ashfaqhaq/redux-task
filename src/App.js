import React, { Component } from 'react'
import Counter from './components/Counter'
class App extends Component {
    state = {
        // userInput:[{
        body: []
    }
    componentDidMount() {

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
                    return o;
                })

                // console.log(data.)
                this.setState({

                    body: result



                })
                console.log(this.state)
                // console.log(result)
            })



    }

    
    render() {
      
    //    console.log(data_fetched)
        return (
            <div className>
                {this.state.body.map((content, index) => {

                    return <div className="card col-lg-2 col-md-3 col-6" onClick={() => console.log(content.id)} >
                        <div className="card-body">
                            <div className="card-title"> <h6> {content.title} </h6>  </div>
                            <div className="card-text">
                                {content.body}
                                <div class="card-footer">
                                    <small class="text-muted">Likes: {content.like}</small>
                                    
                                    <small class="text-muted">    Disikes: {content.dislike}</small>
                                    {<Counter />}
                                </div>
                            </div>
                        </div>
                    </div>


                })
                }
            </div>
        )


    }
}
export default App;
