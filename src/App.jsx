import { useState } from "react";
import Bucket from "./Bucket";

function App() {
  const [bucket1, setBucket1] = useState([
    { title: "item1" },
    { title: "item2" },
    { title: "item3" },
    { title: "item4" },
    { title: "item5" },
  ]);

  const [bucket2, setBucket2] = useState([
    { title: "item6" },
    { title: "item7" },
  ]);
  
  const [selectedItem, setSelectedItem] = useState(null);

  // Add selected item to Bucket
  const addToBucket = () => {
    if (selectedItem && bucket1.includes(selectedItem)) {
      setBucket1(bucket1.filter((item) => item !== selectedItem));
      setBucket2([...bucket2, selectedItem]);
      setSelectedItem(null); 
    }else if(selectedItem && bucket2.includes(selectedItem)){ 
      setBucket2(bucket2.filter((item) => item !== selectedItem));
      setBucket1([...bucket1, selectedItem]);
      setSelectedItem(null); 
    }else{
      alert("Try again")
    }
  };

  const addAllBucket = ()=>{
    if(selectedItem && bucket1.includes(selectedItem)){
      setBucket2([...bucket2, ...bucket1]);
      setBucket1([]);
      setSelectedItem(null); 
    }else if(selectedItem && bucket2.includes(selectedItem)){
      setBucket1([...bucket1, ...bucket2]);
      setBucket2([]);
      setSelectedItem(null); 
    }else{
      alert("Try again")
    }
  }

  const removeItem = ()=>{
     if(selectedItem && bucket1.includes(selectedItem)){
      setBucket1(bucket1.filter((item)=>item !== selectedItem))
      setSelectedItem(null)
     }else  if(selectedItem && bucket2.includes(selectedItem)){
      setBucket2(bucket2.filter((item)=>item !== selectedItem))
      setSelectedItem(null)
    }
  }
 
  const removeAllItems = ()=>{
    setBucket1([]);
    setBucket2([]);
  }


  return (
    <>
      <div className="d-flex justify-content-evenly align-items-center m-5">
        {/* Bucket 1 */}
        <div>
          <div className="border rounded-1 border-secondary-subtle">
            <h3 className="text-center mx-2">Bucket1</h3>
            <Bucket
              data={bucket1}
              selectedItem={selectedItem}
              onSelect={setSelectedItem}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex flex-column justify-content-evenly align-items-center m-5">
          <button
            type="button"
            className="btn btn-secondary m-2 px-2"
            style={{width:"95px" }}
            onClick={addToBucket}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2 px-2"
            style={{width:"95px" }}
            onClick={addAllBucket}
          >
            Addall
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2 px-2"
            style={{width:"95px" }}
            onClick={removeItem}
          >
            Remove
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2 px-2"
            style={{width:"95px" }}
            onClick={removeAllItems}
          >
            RemoveAll
          </button>
        </div>

        {/* Bucket 2 */}
        <div>
          <div className="border rounded-1 border-secondary-subtle">
            <h3 className="text-center mx-2">Bucket2</h3>
            <Bucket
              data={bucket2}
              selectedItem={selectedItem}
              onSelect={setSelectedItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
