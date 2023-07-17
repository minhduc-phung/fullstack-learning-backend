const Note = require("../models/note");
const User = require("../models/user");

const initialNotes = [
  {
    content: "Midday Colored Siesta",
    important: false,
  },
  {
    content: "Evening Colored Siesta",
    important: true,
  },
];

const nonExistingId = async () => {
  const note = new Note({ content: "Will be removed." });
  await note.save();
  await note.deleteOne();

  return note._id.toString();
};

const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map((note) => note.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
  usersInDb,
};
