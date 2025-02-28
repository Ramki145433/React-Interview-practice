import React, { useState } from 'react';
import "./Modal.css";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='modal-container'>
            {!isOpen && (
                <div>
                    <h1>Modal</h1>
                    <button className='modal-button' onClick={() => setIsOpen(true)}>Click Me</button>
                </div>
            )}

            {isOpen && (
                <>
                    <div className='modal-overlay' onClick={() => setIsOpen(false)}></div>
                    <div className='modal-content'>
                        <p className='cross' onClick={() => setIsOpen(false)}>❌</p>
                        <p>
                            Redux Toolkit is our official recommended approach for writing Redux logic. It wraps 
                            around the Redux core and contains packages and functions essential for building a Redux app.
                        </p>
                        <button className='close-button' onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Modal;
