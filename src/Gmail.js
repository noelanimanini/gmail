import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const db = {
  Crystal: [
    { to: "Crystal", from: "Billy", message: "Good luck on your exam!" },
    { to: "Crystal", from: "Madison", message: "I miss you! Hope all is well" },
  ],
  Harry: [
    {
      to: "Harry",
      from: "Jason",
      message: "You left your flip flops at the party",
    },
    { to: "Harry", from: "Madison", message: "It's over! We're done!" },
  ],
  Gazelle: [
    { to: "Gazelle", from: "Shakira", message: "O le o le o le ~" },
    { to: "Gazelle", from: "Javar", message: "Hackathon tomorrow?" },
  ],
};

const answers = [];
// const personal = [];
function Gmail({ email }) {
  const [form, setForm] = useState("");
  const user = useSelector((state) => state.email);

  for (let ele in db) {
    if (ele === email) {
      return <div>{user}</div>;
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
    answers.push(form);
    console.log(answers);
  };

  return (
    <div>
      <div>
        <form>
          <h1> Hello {email}</h1>
          <input type="text" onChange={(e) => setForm(e.target.value)} />

          <button onClick={(e) => handleForm(e)}> Send </button>
        </form>
      </div>
    </div>
  );
}

export default Gmail;
