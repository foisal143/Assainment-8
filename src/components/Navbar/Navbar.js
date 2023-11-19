import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex  py-2 bg-blue-900 text-white justify-between md:px-12">
      <div>
        <h3 className="text-2xl font-semibold">Knowladge Bd</h3>
      </div>
      <button className="btn btn-warning">Blog</button>
    </nav>
  );
};

export default Navbar;
