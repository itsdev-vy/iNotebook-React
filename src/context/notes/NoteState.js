import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6139f5a7bc0678ad17c6d4f3",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.078Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6d4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6d4f3",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.078Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6d4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6d4f3",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.078Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6d4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6d4f3",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.078Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6d4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
