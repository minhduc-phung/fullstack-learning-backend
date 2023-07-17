const Note = require("../models/note");

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

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
};
