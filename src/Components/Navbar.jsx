import React from "react";

function Navbar() {
  return (
    <div className="sm:p-3 p-2 bg-white">
      <ul className="flex sm:mx-4 mx-2 text-tpr-green gap-4 items-center">
        <li className="cursor-pointer">
          <img
            src="https://tpr.net.tr/wp-content/uploads/2022/10/tprmobil.jpg"
            alt="logo"
            width={32}
          />
        </li>
        <li className=" bg-tpr-green text-white rounded-lg p-2 cursor-pointer">
          Nails
        </li>
        <li className="cursor-pointer">Homepage</li>
        <li className="cursor-pointer">About</li>
      </ul>
    </div>
  );
}

export default Navbar;
