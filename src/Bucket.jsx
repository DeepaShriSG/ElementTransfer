import React from 'react'

function Bucket({ data, selectedItem, onSelect }) {


  
  return (
    <div className="d-flex flex-column justify-content-start align-items-center mx-5 vh-100">
        {data && data.map((item, index) => (
        <div>
            <button key={index} type="button" className="btn btn-info my-2" onClick={() => onSelect(item)}>
          {item.title}
        </button>
        </div>
      ))}
    </div>
  )
}

export default Bucket