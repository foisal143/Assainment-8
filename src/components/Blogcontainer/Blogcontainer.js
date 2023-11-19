import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogcontainer = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(blogs => setBlogs(blogs));
  }, []);
  return (
    <div className="flex w-3/4 my-20 mx-auto justify-between items-center">
      <div className="w-2/3  ">
        {blogs && blogs.map(blog => <Blog blog={blog}></Blog>)}
      </div>
      <div>book mark container</div>
    </div>
  );
};

export default Blogcontainer;
