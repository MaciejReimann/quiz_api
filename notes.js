console.log('Starting notes.js');

const fs = require ('fs');

const fetchNotes = () => {
	try {
		const notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	};
}
const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
	let notes = fetchNotes();
	const note = {
		title, 
		body
	};	
	const dupicateNotes = notes.filter( (note) => note.title === title );
	if (dupicateNotes.length === 0) {
			notes.push(note);
			saveNotes(notes)
			return note;
	};
};
const getAll = () => {
	let notes = fetchNotes();
	return notes;
};
const getNote = (title) => {
	let notes = fetchNotes();
	const noteFound = notes.filter( (note) => note.title === title);
	return noteFound[0];
};
const removeNote = (title) => {
	let notes = fetchNotes();
	const noteFound = notes.filter( (note) => note.title === title );
	// const filteredNotes = nots.filter((note) => note.title !== title);
	if (noteFound.length > 0) {
		notes.splice(notes.indexOf(noteFound), 1);
		saveNotes(notes) // filteredNotes
		return noteFound[0];
	};
};

const logNote = (note) => {
	console.log(`--`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};
