import React, {useId, useState} from 'react'

function CheckedItems({label, onChange, checked}) {
    const id = useId()
    return(
        <div className="checkboxItems">
            <input type="checkbox" id={id} checked={checked} onChange={onChange}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

function ItemsList({items, setItems}) {
    return(
        <div className="itemsMainContainer">
            <div className="itemsContainer">
                <ul>
                    {
                        Object.entries(items).map(([label, checked], index) => {
                            return(
                                <li key={index} style={{listStyle : "none"}}>
                                    <CheckedItems 
                                    label = {label}
                                    checked={checked}
                                    // onChange={() => {
                                    //     setItems((prev) => ({
                                    //         ...prev, [label] : !prev[label]
                                    //     }))
                                    // }}

                                    onChange={() => {
                                        setItems((prev) => (
                                            {
                                                ...prev, [label] : !prev[label]
                                            }
                                        ))
                                    }}

                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const TransferList = () => {
    let DEFAULT_LEFT_ITEMS = ["PYTHON", "JAVA", "JAVASCRIPT", "KOTLIN"]
    let DEFAULT_RIGHT_ITEMS = ["ANGULAR", 'REACT', 'EXPRESS', 'SPRINGBOOT']

    function generateItemObjects(arr) {
        let objItems = arr.reduce((acc, item) => {
            acc[item] = false;
            return acc
        }, {})
        return objItems
    }

    function transferAllItems(itemsSrc, setItemsSrc, itemsDst, setItemsDst) {
        setItemsDst((prev) => ({...prev, ...itemsSrc}))
        setItemsSrc({})
    }

    function transferSelectedItems(itemsSrc, setItemsSrc, itemsDst, setItemsDst) {
        let a = Object.entries(itemsSrc).filter(([_,value]) => value)
        let b = a.reduce((acc, [key, val]) => {
            acc[key] = false;
            return acc
        }, {})
        setItemsDst((prev) => (
            
            {
                ...prev, ...b
            }
        ))
        setItemsSrc((prev) => ({
            ...Object.fromEntries(Object.entries(prev).filter(([_,val]) => !val))
        }))
    }

    const [leftItems, setLeftItems] = useState(generateItemObjects(DEFAULT_LEFT_ITEMS));
    const [rightItems, setRightItems] = useState(generateItemObjects(DEFAULT_RIGHT_ITEMS));

    console.log(leftItems, rightItems)

    function hasNoSelectedItems(items) {
        return Object.values(items).every((val) => !val)
    }

  return (
    <div>
      <ItemsList 
        items={leftItems}
        setItems={setLeftItems}
      />

    <div className="btnsContainer">
        <button disabled={Object.keys(rightItems).length === 0} onClick={() => transferAllItems(rightItems, setRightItems, leftItems, setLeftItems)}>&lt;&lt;</button>
        <button disabled={hasNoSelectedItems(leftItems)} onClick={() => transferSelectedItems(leftItems, setLeftItems, rightItems, setRightItems)}>&gt;</button>
        <button disabled={hasNoSelectedItems(rightItems)} onClick={() => transferSelectedItems(rightItems, setRightItems, leftItems, setLeftItems)}>&lt;</button>
        <button disabled={Object.keys(leftItems).length === 0} onClick={() => transferAllItems(leftItems, setLeftItems, rightItems, setRightItems)}>&gt;&gt;</button>
    </div>

      <ItemsList 
        items={rightItems}
        setItems={setRightItems}
      />
    </div>
  )
}

export default TransferList