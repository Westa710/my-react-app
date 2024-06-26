import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const moveUp = (index: number) => {
    if (index === 0) return; // Can't move up the first item
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [
      newTodos[index],
      newTodos[index - 1],
    ];
    setTodos(newTodos);
  };

  const moveDown = (index: number) => {
    if (index === todos.length - 1) return; // Can't move down the last item
    const newTodos = [...todos];
    [newTodos[index + 1], newTodos[index]] = [
      newTodos[index],
      newTodos[index + 1],
    ];
    setTodos(newTodos);
  };

  // function to delete all items
  const deleteAll = () => {
    setTodos([]);
  };

  // function to concat some items for testing
  const concatItems = () => {
    setTodos([...todos, "test1", "test2", "test3"]);
  };

  return (
    <main>
      <div className={"flex"}>
        <div className={"w-[300px] flex"}>
          <input
            type="text"
            value={text}
            onChange={changeText}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            className={`
            bg-blue-100 ml-3 mt-3  
            p-3 rounded-full font-bold transition duration-300
        `}
          />
          <div className={""}>
            <button
              onClick={addTodo}
              className={
                "w-[80px] p-3 ml-3 bg-blue-500 text-white rounded-full"
              }
            >
              追加
            </button>
            <button
              onClick={deleteAll}
              className={"w-[80px] p-3 ml-3 bg-red-500 text-white rounded-full"}
            >
              全削除
            </button>
            <button
              onClick={concatItems}
              className={
                "w-[80px] p-3 ml-3 bg-green-500 text-white rounded-full"
              }
            >
              test
            </button>
          </div>
        </div>
        <div className={"pl-5 pt-3 "}>
          <Link href="/" legacyBehavior>
            <a className="text-4xl">home</a>
          </Link>
        </div>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className={"m-3 border-cyan-600 border-2 w-[280px]"}
            >
              <p className={"text-center h-[30px]"}>{todo}</p>
              <div className="flex">
                <button
                  onClick={() => moveUp(index)}
                  className={"flex-1 bg-yellow-500 h-[30px] text-white"}
                >
                  ↑
                </button>
                <button
                  onClick={() => moveDown(index)}
                  className={"flex-1 bg-green-500 h-[30px] text-white"}
                >
                  ↓
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className={"flex-1 bg-blue-500 h-[30px] text-white"}
                >
                  完了
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
