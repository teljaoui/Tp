import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUserAction } from "../config/action"
import { useNavigate } from "react-router-dom";
function AddUser() {
    const count = useSelector(data=>data.users.length);
    const [designation, setdesignations] = useState("");
    const [pu, setPu] = useState();
    const [Quantite , setQuantite] =useState();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(addUserAction({
            id:count+1,
            designation:designation,
            pu:pu,
            Quantite:Quantite
           
        }))
        navigate('/')
    }
    return (
        <form>
            <div className="m-4 w-50">
            <label  class="form-label">Designation</label>
            <input type="text" value={designation} onChange={(e)=>setdesignations(e.target.value)} class="form-control"/>
            <label  class="form-label">Pu</label>
            <input type="number" value={pu} onChange={(e)=>setPu(e.target.value)} class="form-control"/>
            <label  class="form-label">Quantite</label>
            <input type="number" value={Quantite} onChange={(e)=>setQuantite(e.target.value)} class="form-control"/>
            <button onClick={handleClick} class="btn btn-success m-3 fs-6">Enregistrer</button>
            </div>
        </form>
    )
}
export default AddUser