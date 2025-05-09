import { useState } from 'react'

const listItems = [
  { id: 1, name: 'Final Fantasy 1' },
  { id: 2, name: 'Final Fantasy 2' },
  { id: 3, name: 'Final Fantasy 3' },
  { id: 4, name: 'Final Fantasy 4' },
  { id: 5, name: 'Final Fantasy 5' },
]

function App() {

  const [newItems, setNewItems] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    const item = newItems.trim();

  }


  return (
    <>
      <div className="container">
        <h1>
          Lista Item
        </h1>

        <ul className="list-group">
          {listItems.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name}
            </li>
          ))}
          <form onSubmit={addItem} >
            <div className="mb-3 mt-5">
              <input
                value={newItems}
                onChange={(e) => { setNewItems(e.target.value) }}
                type="text"
                className="form-control"
                placeholder="New Item" />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </ul>
      </div>
    </>
  )
}

export default App
