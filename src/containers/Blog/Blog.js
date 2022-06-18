import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount () {
        console.log('Test 1');
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
            .then( response => {
                console.log('Test 2');
                console.log('-------------------------');
                console.log(response.data);
                console.log('-------------------------');
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                console.log('Test 3');

                this.setState({posts: updatedPosts});
                // console.log( response );
            } );
        console.log('Test 4');
    }

    postSelectedHandler = (id) => {
        console.log('Test 5');
        this.setState({selectedPostId: id});
    }

    render () {
        console.log('Test 6');
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)} />;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;