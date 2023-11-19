import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const Blog = ({ blog, handlerMarkAsRead }) => {
  console.log(blog);
  const { title, registered, redTime, picture, name, id, author_picture } =
    blog;
  return (
    <div className="my-5 ">
      <img src={picture} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex my-5 justify-between items-center">
          <img
            className="w-16 me-2 w-50 rounded-full h-16"
            src={author_picture}
            alt=""
          />
          <div className="w-fit">
            <h5 className="font-semibold">{name}</h5>
            <p>{registered.slice(0, 10)}</p>
          </div>
        </div>
        <span className="me-4">
          {redTime} min red{' '}
          <button>
            {' '}
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </span>
      </div>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-slate-400 my-2">#beginners #programming</p>
      <button
        onClick={() => handlerMarkAsRead(redTime)}
        className="text-blue-500 underline"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
