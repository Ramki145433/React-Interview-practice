import React, { useEffect, useState } from 'react'
import "./Search.css";

const Search = () => {
    const products = [
  "Laptop",
  "Smartphone",
  "Tablet",
  "Charger",
  "Headphones",
  "Keyboard",
  "Mouse",
  "Monitor",
  "Speaker"
    ];
    
    const [items, setItems] = useState(products)
    const [searchItem, setSearchItem] = useState("");
    const [error, setError] = useState("")
    // const handleChange = (e) => {
    //     let value = e.target.value;
    //     console.log(value)
    //     const filteredValues = products.filter((entry) => entry.toLowerCase().includes(value.toLowerCase()));
    //     console.log(filteredValues)
    //     if (filteredValues.length > 0) {
    //         setItems(filteredValues)
    //         setError(" ")
    //     } else {
    //         setError("No Items Are Found")
    //         setItems([])
    //     }
    // }
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchItem.trim() === "") {
                setItems(products)
                setError("")
                return
            }
            const filteredValues = products.filter((entry) => entry.toLowerCase().includes(searchItem.toLowerCase()));

            if (filteredValues.length > 0) {
                setItems(filteredValues)
                setError("")
            } else {
                setItems([])
                setError("No Item Found")
            }
        }, 300)
        return () => clearTimeout(timer);
    }, [searchItem])
  return (
    <div className='search-container'>
          <h1>Search Bar</h1>
          <input type="text"
              value={searchItem}
              placeholder='Search Item'
              onChange={(e) => setSearchItem(e.target.value)} />
          {
              error && <p style={{color : "red", marginTop : "1rem", fontSize : "1rem"}}>{error}</p>
          }
          <div className="item-container">
              {
            items.map((item, index) => {
                  return (
                      <ul key={index}>
                          <li>{item}</li>
                      </ul>
                  )
              })
            }
          </div>
    </div>
  )
}

export default Search