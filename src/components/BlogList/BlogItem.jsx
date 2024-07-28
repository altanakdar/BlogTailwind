import React from "react";

const BlogItem = ({ id, setBlogs, onUpdateItem, title, content, author, date, image }) => {
  
  function handleDeleteItem() {
    setBlogs((blogs) => blogs.filter((blog) => blog.id !== id));
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <strong>{author}</strong>
          <p>{date}</p>
          <button
            className="
              bg-red-600 
              text-white 
              font-semibold 
              py-2 
              px-4 
              rounded-md 
              hover:bg-red-700 
              transition-colors 
              duration-300 
              focus:outline-none 
              focus:ring-2 
              focus:ring-red-500 
              focus:ring-offset-2
              w-[70px]
              sm:w-auto
              text-sm 
              sm:text-base
            "
            onClick={handleDeleteItem}
          >
            Delete
          </button>
          <button
            className="
              bg-gray-600 
              text-white 
              font-semibold 
              py-2 
              px-4 
              rounded-md 
              hover:bg-gray-700 
              transition-colors 
              duration-300 
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-500 
              focus:ring-offset-2
              w-[70px]
              sm:w-auto
              text-sm 
              sm:text-base
            "
            onClick={() => onUpdateItem({ id, title, content, author, date, image })}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
