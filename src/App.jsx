import { useState } from "react";
import Stats from "./components/Stats";
import TextArea from "./components/TextArea";
import Main from "./components/Main";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "./lib/constant";

function App() {
  const [stats, setStats] = useState({
    wordCount: 0,
    charCount: 0,
    instaCount: INSTAGRAM_MAX_CHARACTERS,
    fbCount: FACEBOOK_MAX_CHARACTERS,
  });

  return (
    <Main>
      <TextArea setStats={setStats} />
      <Stats stats={stats} />
    </Main>
  );
}

export default App;
