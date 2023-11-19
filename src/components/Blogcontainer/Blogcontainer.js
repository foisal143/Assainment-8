import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Blogcontainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  // handler for mark as red
  const handlerMarkAsRead = read => {
    console.log(readTime);
    const totalReadTime = readTime + read;
    setReadTime(totalReadTime);
  };
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(blogs => setBlogs(blogs));
  }, []);
  return (
    <div className="flex w-3/4 my-20 mx-auto justify-between ">
      <div className="w-2/3  ">
        {blogs &&
          blogs.map(blog => (
            <Blog blog={blog} handlerMarkAsRead={handlerMarkAsRead}></Blog>
          ))}
      </div>
      <div className="sticky top-0">
        <div className="p-4 border sticky top-0 my-5 border-blue-500 bg-slate-200 rounded-md">
          <p className="text-blue-500">Spend time on red:{readTime} min</p>
        </div>
        <div className="bg-slate-100 p-4 w-full">
          <h2>Book marks blogs:</h2>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default Blogcontainer;
