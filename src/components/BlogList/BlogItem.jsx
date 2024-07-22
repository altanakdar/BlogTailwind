import React from 'react';

const BlogItem = ({ title, content, author, date, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="flex items-center justify-between text-gray-600 text-sm">
          <strong>{author}</strong>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
