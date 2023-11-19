import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import { toast } from 'react-toastify';
const Blogcontainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [titles, setTitles] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
  // handler for mark as red
  const handlerMarkAsRead = read => {
    const totalReadTime = readTime + read;
    setReadTime(totalReadTime);
  };
  // handler for show book mark data
  const bookMark = (title, istrue) => {
    const allTitles = [...titles, title];
    if (titles.includes(title)) {
      const restTitle = titles.filter(t => t !== title);
      setTitles(restTitle);
      toast('Remove from bookmark');
    } else {
      setTitles(allTitles);
      toast('Addet to bookmark');
    }
    setIsTrue(istrue);
  };
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(blogs => setBlogs(blogs));
  }, [titles]);
  return (
    <div className="flex w-3/4 my-20 mx-auto justify-between ">
      <div className="w-2/3  ">
        {blogs &&
          blogs.map(blog => (
            <Blog
              key={blog.id}
              blog={blog}
              bookMark={bookMark}
              handlerMarkAsRead={handlerMarkAsRead}
              isTrue={isTrue}
            ></Blog>
          ))}
      </div>
      <div className="sticky top-0 ms-12 w-[40%]">
        <div className="p-4 border  sticky top-0 my-5 border-blue-500 bg-slate-200 rounded-md">
          <p className="text-blue-500">Spend time on red: {readTime} min</p>
        </div>
        <div className="bg-slate-100 sticky top-16  p-4 w-full">
          <h2>Book marks blogs: {titles.length}</h2>
          {titles.map((title, index) => (
            <Bookmark title={title} key={index}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogcontainer;
