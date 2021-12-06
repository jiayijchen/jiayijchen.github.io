import React from 'react';
import BlogPost from './BlogPost.js';

export default function Blog(props) {
  let blog = [...props.blogData].reverse();

  return (
    <div className="landing">
      <div className="row mx-4 pt-4">
        <div className="col-sm-10 offset-sm-1 pt-2">
        <div className="h1 font2 text-center">
          <span className="font-light txt">jacob_chen</span>
          <span className="font-light fw-bold">/blog</span>
        </div>
          <div className="row pt-3">
            {blog.length > 0
              ? blog.map((blogPost) => {
                return (
                  <BlogPost key={blogPost.id} blogPost={blogPost} />
                )
              })
              : console.log("Loading data...")
            }
          </div>
        </div>
      </div>
    </div>
  )
}
