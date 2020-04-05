import React, {Component} from "react";
import axios from 'axios';

export default class Vidoes extends Component{
    state = {
        data: []
    };

    componentWillMount(){
        axios.get('https://riseshineserver.herokuapp.com/post')
            .then(res => {
                return this.setState({data: res.data.data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    listOfPost(){
        const posts = [];

        console.log(this.state.data)
        this.state.data.forEach(post => {
            posts.push(
                <div>
                    <p>{post.id}</p>
                    <p>{post.id}</p>    
                </div>
                
            )
        });

        return posts;
    }

    render(){
        
        return(
            <div className="container">
                <h1>Videos</h1>
                <p>Coming Soon!</p>
            </div>
        );
    };
};