import React from "react";
import { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 character ❤");
      return;
    }

    handleSubmitGuess(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
