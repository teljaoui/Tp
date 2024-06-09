import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import {deleteUserAction} from '../config/action'
function UserList() {
    const users = useSelector((data)=>data.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUserAction(id))
    }
    return (
        <div className="container m-5">
            <p>
                <Link to="/add-user">
                    <button className="btn btn-warning">Ajouter</button>
                </Link>
            </p>
            <table  class="table m-1 w-50">
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>designation</td>
                        <td>PU</td>
                        <td>Quantite</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=> {
                            return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.designation}</td>
                                <td>{user.pu}</td>
                                <td>{user.Quantite}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`}>
                                        <button className="btn btn-primary m-1">Modifier</button>
                                    </Link>
                                    <button onClick={() => handleDelete(user.id)} className="btn btn-danger m-1">Supprimer</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>
        </div>
    )
}
export default UserList;