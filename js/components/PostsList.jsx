import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsList extends Component {
  componentWillMount() {
    this.props.handleFetchPosts();
  }

  renderPosts = () =>
    this.props.posts.map(post => (
      <li className="list-group-item" key={post.id}>
        <Link to={`posts/${post.id}`}>
          <span className="pull-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </Link>
      </li>
    ));

  render() {
    return (
      <div>
        <div className="text-sm-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

PostsList.propTypes = {
  handleFetchPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ posts: state.posts.all });

const mapDispatchToProps = dispatch => ({
  handleFetchPosts() {
    dispatch(fetchPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
