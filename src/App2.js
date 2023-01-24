import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react';
import {v4 as uuid} from 'uuid'

const initProds = [
	{id: id(), name: 'prod1', catg: 'catg1', cost: 100},
	{id: id(), name: 'prod2', catg: 'catg2', cost: 200},
	{id: id(), name: 'prod3', catg: 'catg3', cost: 300},

];

function id() {
  return uuid()
}

const App2 = () => {

  const [prods, setProds] = useState(initProds)
  const [editId, setEditId] = useState(null)

  const result = prods.map(prod => {
    return(
    <div key={prod.id}>
      <table border='2px' cellPadding='3'>
        <tbody>
          <tr> name
            <td>{prod.name}</td>
            <td>{prod.catg}</td>
            <td>{prod.cost}</td>
            <td><button onClick={() => setEditId(prod.id)}>edit</button></td>
          </tr>
        </tbody>
      </table>
   </div>
  )})

  function getValue(prop) {
    return prods.reduce((res, prod) => prod.id === editId ? prod[prop] : res, '')
  }

  function changeItem(prop, event) {
    setProds(prods.map(prod => prod.id === editId ? {...prod,[prop]: event.target.value} : prod))
  }


  return (
    <div className='App'>
      {result}
      <input value={getValue('name')} onChange={event => changeItem('name', event)} /> <br />
      <input value={getValue('catg')} onChange={event => changeItem('catg', event)} /> <br />
      <input value={getValue('cost')} onChange={event => changeItem('cost', event)} /> <br />
      <button onClick={() => setEditId(null)}>save</button>
    </div>
  )
}

export default App2
