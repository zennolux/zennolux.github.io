import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";

export function ToggleMode() {
  const [mode, setMode] = useState("");
  const html = document.querySelector("html")!;

  function toggle(mode: string) {
    setMode(mode);
    html.className = mode;
  }

  return (
    <>
      {mode == "dark" ? (
        <CiLight
          className="text-6xl cursor-pointer"
          onClick={() => toggle("")}
        />
      ) : (
        <MdDarkMode
          className="text-6xl cursor-pointer"
          onClick={() => toggle("dark")}
        />
      )}
    </>
  );
}
