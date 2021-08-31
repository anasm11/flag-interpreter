import "./style.css";
import React, { useState } from "react";

const flagDict = {
  "🇮🇳": "INDIA",
  "🇺🇸": "USA",
  "🇬🇧": "UK",
  "🇷🇺": "RUSSIA",
  "🇦🇺": "AUSTRALIA",
  "🇨🇦": "CANADA",
  "🇩🇪": "GERMANY",
  "🇪🇸": "SPAIN",
  "🇮🇪": "IRELAND",
  "🇯🇵": "JAPAN"
};
const emjs = Object.keys(flagDict);

export default function App() {
  const [inpt, setInpt] = useState("");

  function emojiHandle(event) {
    var userinput = event.target.value;

    var meaning = flagDict[userinput];
    if (meaning == undefined)
      meaning = "entered input is not present in database";
    setInpt(meaning);
  }

  function clickHandle(emoji) {
    setInpt(flagDict[emoji]);
  }

  return (
    <div className="App">
      <h1>Hi! Try out this Flag interpreter</h1>
      <input onChange={emojiHandle} />
      <h2>{inpt}</h2>

      <div>
        <h3>flags we know</h3>
        {emjs.map((item) => (
          <span
            key={item}
            onClick={() => clickHandle(item)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * class is className
 * style takes object
 *
 * visr view interact stateinevent handler render
 */
