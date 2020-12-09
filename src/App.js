import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Happy",
  "😔": "Sad",
  "😕": "Confused",
  "😍": "In love",
  "😒": "unamused face",
  "😭": "Crying",
  "😘": "Kisses",
  "😉": "wink",
  "🤔": "Thinking",
  "😂": "Laughing hard",
  "😜": "Just Kidding",
  "😎": "I am Smart",
  "🤗": "Want to Hug You now",
  "😲": "Astonished by your actions",
  "😡": "I am mad at you",
  "🤥": "Liar"
};

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInterpret(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "we don't have this is our database!";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    // console.log(emoji)
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  // console.log(Object.keys(emojiDictionary))
  var emojiWeKnow = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1>Know The Emoji</h1>
      <h2>Enter your emoji here 👇</h2>
      <input onChange={emojiInterpret} />
      <h2> {meaning} </h2>
      <div className="emoji">
        <h3>Emojis we know</h3>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
