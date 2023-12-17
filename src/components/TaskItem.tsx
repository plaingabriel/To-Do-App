import { useEffect, useRef, useState } from "react";

type listProps = {
  key: string;
  content: string;
};

export function ListItem({ key, content }: listProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState(content);

  useEffect(() => {
    if (textAreaRef.current === null || divRef.current === null) return;

    const scrollHeight = textAreaRef.current.scrollHeight;

    textAreaRef.current.style.height = scrollHeight + "px";
    divRef.current.style.height = scrollHeight + 40 + "px";
  }, [value, isChecked]);

  return (
    <div
      key={key}
      ref={divRef}
      className={`flex items-start border rounded-2xl border-black pl-[30px] pr-[35px] pt-[18px] ${
        value ? undefined : "hidden"
      } ${isChecked ? "hidden" : undefined}`}
    >
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
        className="mt-[8.5px] mr-2"
      />
      <textarea
        ref={textAreaRef}
        rows={1}
        onChange={(e) => setValue(e.target.value)}
        className={`w-[300px] md:w-[400px] lg:w-[550px] h-[25px] pt-[1.6px] border border-transparent overflow-hidden focus:bg-transparent focus:outline-none resize-none break-words ${
          isChecked ? "line-through" : undefined
        }`}
        value={value}
      ></textarea>
    </div>
  );
}
