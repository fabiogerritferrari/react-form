import { useState } from "react"
import Bag from './Bag'
import FormAddItem from "./FormAddItem";

export default function Items() {

    const [items, setItems] = useState([
        'Pozione',
        'Spada lunga',
        'Scudo'
    ]);

    const [newItem, setNewItem] = useState('');

    const addItem = e => {
        e.preventDefault();
        setItems([...items, newItem]);
        setNewItem('');
    }


    return (
        <main className="container">
            <Bag
                items={items}
                setItems={setItems}
            />
            <FormAddItem
                addItem={addItem}
                newItem={newItem}
                setNewItem={setNewItem}
            />
        </main>

    )
}