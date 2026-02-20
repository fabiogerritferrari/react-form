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
        setItems(...items, newItem);
        setNewItem('')
    }

    return (
        <div className="container">
            <ul className="row">
                {items.map((item, i) => (
                    <li key={i} className="col-12">
                        {item}
                    </li>
                )
                )}
            </ul>
            <form onSubmit={addItem}>
                <input type="text"
                    onChange={e => { setNewItem(e.target.value) }}
                />
                <button type="submit" className="btn btn-primary btn-sm mx-2">Aggiungi Item</button>
            </form>
        </div>

    )
}