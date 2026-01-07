const ServerCom = async () => {
  const URL = `https://jsonplaceholder.typicode.com/posts`;
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1 className="font-bold text">This is Client Component</h1>
      <ul className="grid grid-cols-3 gap-3 m-10">
        {data.map((item) => (
          <li key={item.id} className="p-3 shadow-md bg-gray-300 rounded-sm">
            <h2 className="mb-2 capitalize font-bold text">{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServerCom;

//
