import React, { useState, useEffect } from 'react';
import toDoImage from '../assets/to_do_table_image.png';
import wordCloudImage from '../assets/word_cloud.png';


const AnalyticsPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Function to fetch data from an API
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('localhost://2000'); // Replace with your API URL
    //             if (!response.ok) {
    //                 throw new Error(`Error: ${response.statusText}`);
    //             }
    //             const result = await response.json(); // Parse JSON response
    //             setData(result); // Set the data in state
    //         } catch (error) {
    //             setError(error.message); // Set any errors that occur
    //         } finally {
    //             setLoading(false); // Set loading to false after fetch completes
    //         }
    //     };
    //
    //     fetchData(); // Call the fetch function
    // }, []); // Empty array ensures useEffect only runs once after the component mounts
    //
    // if (loading) {
    //     return <div>Loading...</div>; // Display a loading state while data is being fetched
    // }
    //
    // if (error) {
    //     return <div>
    //         Error: Hi there{error}
    //     </div>; // Display error if something goes wrong
    // }



    return (
        <div>
            <h2>Student's View</h2>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre> /!* Display the fetched data *!/*/}
            <img style={{ width: 790, height: 427 }} src={wordCloudImage}></img>
            <h3>Todo List</h3>
            <img style={{ width: 945, height: 118 }} src={toDoImage}></img>
            
        </div>
    );
};

export default AnalyticsPage;
