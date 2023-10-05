import React, { useState } from 'react'

const ItemAddPage = ({ addItem }) => {

    const [medicineName, setMedicineName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAddItem = () => {
        if (medicineName && description && price && quantity) {
            const newItem = {
                medicineName, description, price, quantity
            };

            addItem(newItem);

            setMedicineName('');
            setDescription('');
            setPrice('');
            setQuantity('');
        }
    };

    return (
        <div>
            <label>Medicine Name:</label>
            <input type='text' value={medicineName} onChange={(e) => setMedicineName(e.target.value)} ></input>
            <label>Description:</label>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <label>Price:</label>
            <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}></input>
            <label>Quantity:</label>
            <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default ItemAddPage
