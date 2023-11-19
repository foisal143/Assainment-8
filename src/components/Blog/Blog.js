import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Blog = ({ blog }) => {
  console.log(blog);
  const { title, registered, redTime, picture, name, id, author_picture } =
    blog;
  return (
    <div className="my-5">
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
        <span>
          {redTime} min red <FontAwesomeIcon icon={faCoffee} />
        </span>
      </div>
    </div>
  );
};

export default Blog;
