import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodos = () => {
    const newTodos = [...todos];
    if (text === "") return;
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
    console.log(text);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <main>
      <div className={"width-500"}>
        <input
          type="text"
          value={text}
          onChange={changeText}
          className={`
            bg-blue-100 ml-3 mt-3  
            p-3 rounded-full font-bold transition duration-300
            
        `}
        />
        <button
          onClick={addTodos}
          className={"p-3 ml-3  bg-blue-500 text-white rounded-full"}
        >
          追加
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={"m-3 m border-black border-2 w-1/5"}>
              <p className={""}>{todo}</p>
              <button
                onClick={() => deleteTodo(index)}
                className={" bg-gray-300"}
              >
                完了
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
