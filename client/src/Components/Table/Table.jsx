import React from 'react';

const Table = () => {
    const API_URL = "http://localhost:5000/api";

    async function getData() {
        try {
            const response = await fetch(`${API_URL}/users`);
            const user = await response.json();
            if (!user.ok) {
                throw new Error(`Response status: ${user.status}`);
            }

            const userName = user.userName;
            const email = user.email
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            {data.map((item) => (
                <div className="cart" key={item._id}>
                    <p>User ID: {item._id} </p>
                    <p>Name: {item.userName}</p>
                    <p>Email: {item.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Table;
