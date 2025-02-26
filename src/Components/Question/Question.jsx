import { useState, useEffect } from "react"
import "./Question.css"
import "./Pagination"
import Pagination from "./Pagination";
export default function Question() {
    const [products, setProducts] = useState([]);
    const [apiError, setApiError] = useState("");
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const fetchData = async() => {
        try{
            const data = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
            const res = await data.json()
            if(res && res.products) {
                console.log(res.products)
                setProducts(res.products)
                console.log(res.total)
                setTotal(res.total)
            }

        } catch(error) {
            setApiError("Something is Fishy");
            
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])
    return (
        <div>
            <h1>Products List </h1>
            {
                apiError ? (<p>{apiError}</p>) : (
                    products.length > 0 ? ( <ul>
                        {
                            products.map((item) => (
                                <li key={item.id} style={{"listStyle" : "none"}}>
                                    <div className="card">
                                        <img src={item.thumbnail} alt={item.title} />
                                        <h2>{item.title}</h2>
                                        <p>{item.price}$</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    ) : (<p>Loading....</p>)
                )
            }
            {products.length > 0 ? (<Pagination total = {total} page = {page} setPage = {setPage}/>) : null}
        </div>
    )
}