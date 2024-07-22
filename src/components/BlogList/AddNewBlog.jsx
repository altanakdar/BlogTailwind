import React, { useState } from 'react';
import Button from "../UI/Button";
import BlogInput from './BlogInput';

const blogInputs = [
  {
    label: "Title",
    type: "text",
    placeholder: "Blog İsmi Giriniz",
    name: "title"
  },
  {
    label: "Content",
    type: "text",
    placeholder: "Blog İçeriği Giriniz",
    name: "content"
  },
  {
    label: "Author",
    type: "text",
    placeholder: "Blog Yazar İsmi Giriniz",
    name: "author"
  },
  {
    label: "Date",
    type: "text",
    placeholder: "Blog Tarihi Giriniz",
    name: "date"
  },
  {
    label: "Image",
    type: "text",
    placeholder: "Blog Resmi Giriniz",
    name: "image"
  }
];

const AddNewBlog = ({ handleSubmit }) => {
  const [myBlogData, setMyBlogData] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
    image: ""
  });

  function handleChange({ target: { name, value } }) {
    setMyBlogData({ ...myBlogData, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(myBlogData);
    // Form alanlarını submit işleminden sonra temizle
    setMyBlogData({
      title: "",
      content: "",
      author: "",
      date: "",
      image: ""
    });
  }

  return (
    <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10 space-y-6" onSubmit={onSubmit}>
      {blogInputs.map((input, index) => (
        <BlogInput key={index} {...input} handleChange={handleChange} />
      ))}
      <div className="text-center">
        <Button size="lg" color="success" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          Yeni Blog Ekle
        </Button>
      </div>
    </form>
  );
}

export default AddNewBlog;
