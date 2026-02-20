
export default function FormAddItem({ addItem, newItem, setNewItem }) {

    return (

        <form onSubmit={addItem} className="mt-4">
            <input type="text"
                value={newItem}
                onChange={e => { setNewItem(e.target.value) }}
            />
            <button type="submit" className="btn btn-primary btn-sm mx-2">Aggiungi Item</button>
        </form>
    )

}