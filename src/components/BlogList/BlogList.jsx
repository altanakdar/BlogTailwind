import React, { useState } from 'react';
import { blogData } from '../../Data/BlogData';
import BlogItem from './BlogItem';
import AddNewBlog from './AddNewBlog';

const BlogList = () => {
  const [blogs, setBlogs] = useState(blogData);

  function handleSubmit(myBlogData) {
    const newBlog = { ...myBlogData, id: Math.random() };
    setBlogs([newBlog, ...blogs]);
  }

  return (
    <div className="container mx-auto p-4">
      <AddNewBlog handleSubmit={handleSubmit} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            date={blog.date}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
