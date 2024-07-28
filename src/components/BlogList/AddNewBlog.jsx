import React, { useState, useEffect } from 'react';
import Button from "../UI/Button";
import BlogInput from './BlogInput';

const blogInputs = [
  { label: "Title", type: "text", placeholder: "Blog İsmi Giriniz", name: "title" },
  { label: "Content", type: "text", placeholder: "Blog İçeriği Giriniz", name: "content" },
  { label: "Author", type: "text", placeholder: "Blog Yazar İsmi Giriniz", name: "author" },
  { label: "Date", type: "text", placeholder: "Blog Tarihi Giriniz", name: "date" },
  { label: "Image", type: "text", placeholder: "Blog Resmi Giriniz", name: "image" },
];

const AddNewBlog = ({ handleSubmit, blogToUpdate, setBlogToUpdate, handleBlogUpdate }) => {
  const [myBlogData, setMyBlogData] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    if (blogToUpdate) {
      setMyBlogData(blogToUpdate);
    }
  }, [blogToUpdate]);

  function handleChange({ target: { name, value } }) {
    setMyBlogData({ ...myBlogData, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (blogToUpdate) {
      handleBlogUpdate({ ...myBlogData, id: blogToUpdate.id });
      setBlogToUpdate(null);
    } else {
      handleSubmit(myBlogData);
    }
    setMyBlogData({
      title: "",
      content: "",
      author: "",
      date: "",
      image: "",
    });
  }

  return (
    <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10 space-y-6" onSubmit={onSubmit}>
      {blogInputs.map((input, index) => (
        <BlogInput key={index} {...input} handleChange={handleChange} value={myBlogData[input.name] || ''} />
      ))}
      <div className="text-center">
        <Button
          size="lg"
          color="success"
          className={`${
            blogToUpdate ? "bg-gray-500 hover:bg-gray-600" : "bg-green-500 hover:bg-green-600"
          } text-white py-2 px-4 rounded transition`}
        >
          {blogToUpdate ? "Update Blog" : "Add New Blog"}
        </Button>
      </div>
    </form>
  );
}

export default AddNewBlog;
