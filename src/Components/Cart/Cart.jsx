import React, {useEffect, useState} from 'react'
import "./Cart.css"
const Cart = () => {
  const initialCart = [
  { id: 101, name: "Laptop", price: 59999 },
  { id: 102, name: "Headphones", price: 1999 },
  { id: 103, name: "Mouse", price: 499 },
];

  const [cartItems, setCartItems] = useState(initialCart)
  const [totalPrice, setTotalPrice] = useState(0)

  
  function handleRemove(num) {
    setCartItems((prev) => prev.filter((entry) => !(entry.id === num)))
  }

  useEffect(() => {
    let sum = cartItems.reduce((acc, curr) => {
      acc += curr.price
      return acc
    }, 0)
    setTotalPrice(sum)
    console.log(sum)
  }, [cartItems])

  return (
    <div className='cart-holder'>
      <h1>Showing Cart Items</h1>
      {
        cartItems.length === 0 ? <p>Cart is Empty</p> : null
      }
      {
        cartItems.length > 0 ? <p>{cartItems.length}</p> : null
      }
      <div className='cart-container'>
        {
          cartItems.map((item) => {
            return (
              <div className='cart-list' key={item.id}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
      <h3>Total Price Of Cart Items : {totalPrice}</h3>
      <button className='clear' onClick={() => setCartItems([])}>Clear Cart</button>
    </div>
  )
}

export default Cart
