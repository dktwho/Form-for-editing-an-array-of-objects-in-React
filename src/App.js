import { useState } from 'react';
import './App.css';


const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];


function App() {
  const [notes, setNotes] = useState(initNotes)
  const [editId, setEditId] = useState(null)

  const result = notes.map(note => {
    return <p key={note.id}>
      <span>{note.prop1}</span>
      <span>{note.prop2}</span>
      <span>{note.prop3}</span>

      <button onClick={() => setEditId(note.id)}>Edit</button>
    </p>
  })

  function getValue(prop) {
    return notes.reduce((res, note) => note.id === editId ? note[prop] : res, '')
  }

  function changeItem(prop, event) {
    setNotes(notes.map(note => note.id === editId ? {...note,[prop]: event.target.value} : note))
  }


  return (
    <div className="App">
      {result}
      <input value={getValue('prop1')} onChange={event => changeItem('prop1', event)}/> <br />
      <input value={getValue('prop2')} onChange={event => changeItem('prop2', event)}/> <br />
      <input value={getValue('prop3')} onChange={event => changeItem('prop3', event)}/> <br />
      <button onClick={() => setEditId(null)}>save</button>


    </div>
  );
}

export default App;
