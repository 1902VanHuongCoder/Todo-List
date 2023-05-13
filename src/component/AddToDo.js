import { Add } from "@mui/icons-material"

function AddToDo({ addtask, setInput})
{
    const handleInput = (event) =>
    {
        setInput(event.target.value);
    }
    return(
        <div className="add-todo">
            <input maxLength={20} type="text" onChange={handleInput} placeholder="Enter anything..." />
            <button onClick={addtask}><Add /> Add</button>
        </div>
    )
}

export default AddToDo;