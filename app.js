console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv;
const command = argv._[0];
console.log('Command: ', command)
console.log('Yargs: ', argv)

if (command === 'add') {
	const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note added!`);
    console.log(`--`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("Note titile taken.");
  }
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title)
} else if (command === 'remove') {
	const note = notes.removeNote(argv.title);
  console.log(`Note removed!`);
  console.log(`--`);
  console.log(`Title: ${note.title}`);
} else {
	console.log('Command not recognized')
}