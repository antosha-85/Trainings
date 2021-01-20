import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import Free from "../Free.png";
import { connect } from "react-redux";

class Home extends Component {
  // state = {
  //   posts: [],
  // };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     this.setState({ posts: res.data.slice(0, 10) });
  //   });
  // }
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = !posts.length ? (
      <div className="center">No posts yet!</div>
    ) : (
      posts.map((post) => (
        <div className="post card" key={post.id}>
          <img src={Free} alt="Free" />
          <div className="card-content">
            <Link to={`/${post.id}`}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      ))
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
