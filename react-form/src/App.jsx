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
  const [item, setItem] = useState(listItems);

  const addItem = (e) => {
    e.preventDefault(); //Evita di fare refreshare la pagina
    const newItem = newItems.trim(); //Toglie gli spazi prima e dopo
    if (newItem) {
      const newId = item.length > 0 ? Math.max(...item.map(i => i.id)) + 1 : 1;
      setItem([...item, { id: newId, name: newItem }]); // Aggiunge l'elemento alla lista
    }
    setNewItems(''); //Pulisce il campo di input
  }

  const handleRemoveItem = (id) => {
    const newList = item.filter((itemEl) => {
      return itemEl.id !== id;
    });
    setItem(newList);
  }

  return (
    <>
      <div className="container">
        <h1>
          Lista Item
        </h1>

        <ul className="list-group">
          {item.map((itemEl) => (
            <li key={itemEl.id} className="list-group-item">
              {itemEl.name}
              <button
                className="btn btn-danger btn-sm ms-2"
                onClick={() => handleRemoveItem(itemEl.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <form onSubmit={addItem} className="mt-3">
          <div className="mb-3">
            <input
              value={newItems}
              onChange={(e) => { setNewItems(e.target.value) }}
              type="text"
              className="form-control"
              placeholder="New Item" />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </>
  )
}

export default App
