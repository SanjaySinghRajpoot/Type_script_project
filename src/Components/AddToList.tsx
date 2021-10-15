import React, {useState} from "react";
import { Istate as Props} from '../App';


interface Iprops {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<Iprops> = ({people, setPeople}) => {

    const [input, setInput] = useState({  // a new element 
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleClick = () => {
       setPeople([...people, 
        {
           name: input.name,
           age: input.age,
           note: input.note,
           url: input.img,
       }]) 
    }

    return(
        <div>
            <input 
              type="text"
              placeholder="name"
              className="AddToList-input"
              value={input.name}
              onChange={handleChange}
              name="name"
            />
             <input 
              type="text"
              placeholder="Age"
              className="AddToList-input"
              value={input.age}
              onChange={handleChange}
              name="age"
            />
             <input 
              type="text"
              placeholder="url"
              className="AddToList-input"
              value={input.note}
              onChange={handleChange}
              name="note"
            />
             <textarea 
              placeholder="Note"
              className="AddToList-input"
              value={input.img}
              onChange={handleChange}
              name="img"
            />
            <button className="AddToList-btn" onClick={handleClick}>
                Add to List
            </button>


        </div>
    )
}

export default AddToList;