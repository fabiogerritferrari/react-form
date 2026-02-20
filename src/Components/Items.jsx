import { useState } from "react"


export default function Items() {

    const [newItem, setNewItem] = useState('');

    const [items, setItems] = useState([
        'Pozione',
        'Spada lunga',
        'Scudo'
    ]);

    const addItem = e => {
        e.preventDefault();
        setItems([...items, newItem]);
        setNewItem('');
    }

    const deleteItem = (i) => {
        const NewItems = items.filter((item, index) => i !== index)
        setItems(NewItems)
    }

    return (
        <div className="container">
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center"
                        key={index}>
                        {item}
                        <button className='btn btn-danger' onClick={() => { deleteItem(index) }}>X</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={addItem} className="mt-4">
                <input type="text"
                    value={newItem}
                    onChange={e => { setNewItem(e.target.value) }}
                />
                <button type="submit" className="btn btn-primary btn-sm mx-2">Aggiungi Item</button>
            </form>
        </div>

    )
}