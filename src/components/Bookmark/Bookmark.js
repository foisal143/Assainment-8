import React from 'react';

const Bookmark = ({ title }) => {
  return (
    <div className="sticky p-5 bg-white my-2 rounded-md shadow-md top-16">
      <p className="text-2xl font-semibold">{title}</p>
    </div>
  );
};

export default Bookmark;
