"use client";

import { useEffect, useState } from "react";

const ClientCom = () => {
  const [postdata, setPostData] = useState([]);
  useEffect(() => {
    const apiFun = async () => {
      const URL = `https://jsonplaceholder.typicode.com/posts`;
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setPostData(data);
    };
    apiFun();
  }, []);
  return (
    <>
      <h1 className="font-extrabold text-xl">This is Client Component</h1>
      <ul className="grid grid-cols-3 gap-3 m-10">
        {postdata.map((item) => (
          <li key={item.id} className="p-3 shadow-md bg-gray-300 rounded-sm">
            <h2 className="mb-2 capitalize font-extrabold text">
              {item.title}
            </h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientCom;

//
