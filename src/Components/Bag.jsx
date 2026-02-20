
export default function Bag({ items, setItems }) {

    const deleteItem = (i) => {
        const NewItems = items.filter((item, index) => i !== index)
        setItems(NewItems)
    }

    return (
        <ul className="list-group">
            {items.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center"
                    key={index}>
                    {item}
                    <button className='btn btn-danger' onClick={() => { deleteItem(index) }}>X</button>
                </li>
            ))}
        </ul>
    )
}