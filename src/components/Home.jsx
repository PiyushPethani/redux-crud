import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../store/slices/UserSlice";

function Home() {

    const user = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }

    return (
        <div className='container'>
            <h2>Crud App with JSON Server</h2>
            <Link to={"create"} className="btn btn-success my-3">Create +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <Link to={`/edit/${index}`} className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={() => handleDelete(index)} className="btn btn-sm btn-danger ms-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
