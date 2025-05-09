import React, { useState } from 'react'

const FileExplorer = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const isFolder = !!data.children;
  return (
    <div>
      {
        isFolder ? (
            <div style={{cursor : "pointer", fontWeight:"600"}} onClick={() => setIsOpen(!isOpen)}>{data.name} {isOpen ? "-" : "+"}</div>
        ) : (
            <div style={{marginLeft : "20px"}}>{data.name}</div>
        )
      }
      {
        isOpen && isFolder && data.children ? (
            <div>
                {
                    data.children.map((child) => <FileExplorer data={child}/>)
                }
            </div>
        ) : (
            null
        )
      }
    </div>
  )
}

export default FileExplorer
