import { useState } from "react";
import { Input } from "./components/Input";
import { ListItem } from "./components/TaskItem.tsx";

export function App() {
  const taskArr: string[] = [];
  const [taskList, setTaskList] = useState(taskArr);
  const len = taskList.length > 0;

  console.log(taskList);

  return (
    <>
      <div
        id="container"
        className={`w-full flex justify-center ${
          len ? undefined : "items-center h-[80vh]"
        }`}
      >
        <div id="to-do-list" className="flex-col">
          <h1 className="text-center p-10 font-bold text-[40px]">To Do App</h1>
          <div id="input-section" className="flex flex-col items-center">
            <Input setTaskList={setTaskList} />
          </div>
          {taskList.length > 0 ? (
            <>
              <hr className="mt-6 w-full" />
              <h2>Pending Tasks</h2>
            </>
          ) : null}

          <div id="list-section" className="mt-10 flex flex-col gap-y-4">
            {taskList.map((task) => (
              <ListItem key={task} content={task} />
            ))}
          </div>
        </div>
      </div>
      <footer className="h-[20vh]"></footer>
    </>
  );
}
