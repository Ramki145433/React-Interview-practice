import React from 'react'
import FileExplorer from './FileExplorer';
import Reducer from './Reducer';
const Initial = () => {
    const data = [
        {
          id: 1,
          name: "README.md",
        },
        {
          id: 2,
          name: "Documents",
          children: [
            {
              id: 3,
              name: "Word.doc",
            },
            {
              id: 4,
              name: "Powerpoint.ppt",
            },
          ],
        },
        {
          id: 5,
          name: "Downloads",
          children: [
            {
              id: 6,
              name: "unnamed.txt",
            },
            {
              id: 7,
              name: "Misc",
              children: [
                {
                  id: 8,
                  name: "foo.txt",
                },
                {
                  id: 9,
                  name: "bar.txt",
                },
              ],
            },
          ],
        },
      ];

      const sortedItems = (items) => {
            return items.sort((a,b) => {
                let isAFolder = !!a.children
                let isBFolder = !!b.children
                if(isAFolder !== isBFolder) return isAFolder ? -1 : 1
                return a.name.localeCompare(b.name)
            })
      }
  return (
    <div>
        {
            sortedItems(data).map((item) => (
                <FileExplorer key={item.id} data={item}/>
            ))
        }
        <Reducer />
    </div>
  )
}

export default Initial
