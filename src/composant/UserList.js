import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUserAction  , DeletAllAction} from '../config/action'
function UserList() {
    const users = useSelector((data) => data.users);
    const dispatch = useDispatch();


    const handleDelete = (id) => {
        dispatch(deleteUserAction(id))
    }
    const DeletAll = () => {
        dispatch(DeletAllAction())
    }
    return (
        <div className="container m-5">
            <p>
                <Link to="/add-user" className="btn btn-warning m-1">Ajouter</Link>
                <button onClick={DeletAll} className="btn btn-danger m-1">DeletAll</button>
            </p>
            <table class="table m-1 w-50">
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
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.designation}</td>
                                <td>{user.pu}</td>
                                <td>{user.Quantite}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`} className="btn btn-primary m-1">Modifier</Link>
                                    <button onClick={() => handleDelete(user.id)} className="btn btn-danger m-1">Supprimer</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default UserList;