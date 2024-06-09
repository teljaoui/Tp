import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../config/action";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UpdateUser() {
    const {id} = useParams()
    const user = useSelector(data=>data.users.find((u)=>u.id===parseInt(id)));
    const [designation, setdesignations] = useState(user.designation);
    const [pu, setpu] = useState(user.pu);
    const [Quantite, setQuantite]=useState(user.Quantite)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(updateUserAction({
            id:id,
            designation:designation,
            pu:pu,
            Quantite:Quantite
        }))
        navigate('/')
    }
    return (
        <form>
            <div className="m-4 w-50">
            <label class="form-label">Designation</label>
            <input type="text" value={designation} onChange={(e)=>setdesignations(e.target.value)} class="form-control"/>
            <label class="form-label">Pu</label>
            <input type="number" value={pu} onChange={(e)=>setpu(e.target.value)} class="form-control"/>
            <label class="form-label">Quantite</label>
            <input type="number" value={Quantite} onChange={(e)=>setQuantite(e.target.value)} class="form-control"/>
            <button onClick={handleClick} class="btn btn-success m-2">Enregistrer</button>
            </div>
        </form>
    )
}
export default UpdateUser