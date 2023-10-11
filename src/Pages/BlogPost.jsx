import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post }) => {
  return (
    <article>
      <img src={post.image} alt="" />
      <h4>{post.title}</h4>
      <p>
        <i className="fa fa-user"></i> {post.author} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {post.date} &nbsp;|&nbsp; <i className="fa fa-comments"></i> {post.comments} comments
      </p>
      <p>{post.content}</p>
      <div className="main-button">
        <Link to="/blog-details">Continue Reading</Link>
        <br />
      </div>
    </article>
  );
};

export default BlogPost;
