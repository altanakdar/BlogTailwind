import React from 'react';

const BlogInput = ({ label, type, placeholder, name, handleChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        id={name}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}

export default BlogInput;
