import React, { useState, useEffect } from 'react';
import barGraph from '../assets/bar.png';
import barGraph2 from '../assets/bar2.webp';

const FrontPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/data'); // Replace with your API URL
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const result = await response.json(); // Parse JSON response
            setData(result); // Set the data in state
        } catch (error) {
            setError(error.message); // Set any errors that occur
        } finally {
            setLoading(false); // Set loading to false after fetch completes
        }
    };


    useEffect(() => {
        // Function to fetch data from an API
        fetchData(); // Call the fetch function
    }, []); // Empty array ensures useEffect only runs once after the component mounts

    if (loading) {
        return <div>Loading...</div>; // Display a loading state while data is being fetched
    }

    if (error) {
        return <div>
            Error: Hi there{error}
        </div>; // Display error if something goes wrong
    }

    return (
        <div>
            <h2>Professor's View</h2>
            {/*<h3>{data.message}</h3>*/}
            {/*<h3>{data.value}</h3>*/}
            {/*<pre>{JSON.stringify(data, null, 2)}</pre> /!* Display the fetched data *!/*/}
                <div><img style={{width:700, height:350}} src={barGraph2} ></img></div>
                <div><img style={{width:700, height:350}} src={barGraph}></img></div>

        </div>
    );
};

export default FrontPage;
