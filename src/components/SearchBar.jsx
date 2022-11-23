import {React, useState} from "react";

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [date, setDate] = useState(new Date())

    const handleChange = (event) => {
        if(event.target.id === 'plate'){
            setSearch(event.target.value)
        } else if(event.target.id === 'date'){
            setDate(event.target.value)
        }
    }

    return(
        <div className="mx-auto w-screen p-2 mb-10">
            <div className="container flex md:flex-row flex-col w-full">
            <div className="mx-auto w-full">
                <input id="plate" className="p-3 w-full md:w-1/4 text-xl border mr-3" type='text' placeholder='Enter A License Plate #' />
                <input id="date" placeholder="Choose a date" className="p-3 w-full md:w-1/6 text-xl border" type='date'  />
                <button className="p-3 w-full md:w-36 rounded-md bg-blue-500 md:ml-3 text-xl text-white hover:bg-blue-600 duration-300 ease-in-out">Search</button>
            </div>
            </div>
        </div>
    )
}

export default SearchBar;