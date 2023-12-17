import { useState } from "react";

type props = {
  setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
};

export function Input({ setTaskList }: props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="Write something"
        onChange={(e) => setValue(e.target.value)}
        className="border border-black rounded-xl p-3 mb-4"
      />

      <button
        type="submit"
        onClick={() => {
          if (value !== "") {
            setTaskList((taskList: string[]) => [...taskList, value]);
            setValue("");
          }
          return;
        }}
        className="bg-slate-400 rounded-lg w-20 py-2"
      >
        Submit
      </button>
    </>
  );
}
