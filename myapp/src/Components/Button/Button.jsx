import React from "react";
import "./Button.css"
export default function Button({heading,icon}) {
  return (
    <div>
      <button class="button-37">
        {heading} {icon}
      </button>
    </div>
  );
}
