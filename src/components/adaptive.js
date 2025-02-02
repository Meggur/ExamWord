import React from 'react';

const Adaptive = () => {
    return (
        <div className="h-fullw-full m-4 sm:flex sm:flex-row-reverse flex flex-col lg:bg-black md:bg-red-500 sm:bg-blue-500">
            <input type={"checkbox"}/>
            <input type={"radio"}/>
            <input type={"datetime-local"}/>
            <input type={"date"}/>
            <input type={"url"}/>
        </div>
    );
};

export default Adaptive;