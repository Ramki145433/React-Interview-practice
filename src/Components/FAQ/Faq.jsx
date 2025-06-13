import React, { useState } from 'react'
import "./Faq.css"

const Faq = () => {
    const faqList = [
  { id: 1, question: "What is React?", answer: "React is a JS library for building UIs." },
  { id: 2, question: "What is a component?", answer: "Component is a reusable UI block." },
  { id: 3, question: "What is state in React?", answer: "State is a built-in object to hold data." }
];

    const [activeIndex, setActiveIndex] = useState(null)
  return (
    <div className='faq-container'>
          <h1>FAQ Section</h1>
          {
              faqList.map((item, index) => {
                  return (
                      <div key={index} className='faq' onClick={() => setActiveIndex(activeIndex ? null : item.id)} style={{cursor: "pointer"}}>
                          <div className='question'>
                            <h3>{item.question}</h3>
                            {
                                activeIndex === item.id ? <span>➖</span> : <span>➕</span>
                            }
                          </div>
                          {
                              activeIndex === item.id && <p>{item.answer}</p>
                          }
                      </div>
                  )
              })
          }
    </div>
  )
}

export default Faq
