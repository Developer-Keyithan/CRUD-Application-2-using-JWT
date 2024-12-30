import React, { useEffect, useState } from "react";
import Cart from '../Cart/Cart';
import './Demo.css'

const Demo = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = "http://localhost:5000/api/users";
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result);
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div className="cart-container">
            {data.map((item, index) => (
                <Cart key={index} data={item} />
            ))}
        </div>
    );
};

export default Demo;
