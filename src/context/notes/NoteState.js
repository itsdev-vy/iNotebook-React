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
      _id: "6139f5a7bc0678ad17c6dd4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678a5d17c6d4f3",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.078Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678aed17c6d4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
    {
      _id: "6139f5a7bc0678ad17c6ed4f3",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.078Z",
      __v: 0,
    },
    {
      _id: "6139ef5a7bc0678ad17c6d4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
    {
      _id: "6139f5ae7bc0678ad17c6d4f3",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.078Z",
      __v: 0,
    },
    {
      _id: "6139f5aw7bc0678ad17c6d4f5",
      user: "613730b16b851106522d23de",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2021-09-09T11:53:11.694Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note");
    const note = {
      _id: "61322f119553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a0664",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the node with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
