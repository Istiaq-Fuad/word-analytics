import { useState } from "react";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../lib/constant";

export default function TextArea({ setStats }) {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);

  const handleInput = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarning(true);
      newText = newText.replace("<script>", "");
    } else {
      setWarning(false);
    }

    setText(newText);
    setStats({
      wordCount: newText.split(" ").length,
      charCount: newText.length,
      instaCount: INSTAGRAM_MAX_CHARACTERS - newText.length,
      fbCount: FACEBOOK_MAX_CHARACTERS - newText.length,
    });
  };

  return (
    <div className="input-container">
      <textarea
        value={text}
        onChange={handleInput}
        name="text-input"
        className="input"
        wrap="soft"
        placeholder="Enter your text here..."
        spellCheck="false"
      />
      {warning && <p className="warning">warning: malicious input detected</p>}
    </div>
  );
}
