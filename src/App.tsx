import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-gray-500 border-b uppercase text-center">
        Hello world
      </h1>
      <div className="container mx-auto text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit ipsa nobis commodi ea! Ut reiciendis debitis optio totam
          alias maxime fuga quos doloremque doloribus sunt, explicabo dolore
          eveniet, nobis quia odio ex magni eius aut animi itaque cum ducimus
          amet deleniti architecto. Nam numquam provident est vitae pariatur
          doloribus temporibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fuga commodi eos id ea, cupiditate natus esse,
          accusamus quos enim doloribus quam suscipit. Iste rerum autem quod
          incidunt non deleniti quam fuga reprehenderit perferendis, ratione
          saepe consequuntur eligendi repudiandae, mollitia maiores quas, eum
          optio reiciendis qui facere similique nisi ab vitae?
        </p>
        <hr />
        <div className="mx-auto flex w-[500px] justify-between *:py-2 *:px-4 *:border-4 *:text-blue-500 shadow">
          <button className="">Hello</button>
          <button>World</button>
        </div>
      </div>
    </div>
  );
}

export default App;
