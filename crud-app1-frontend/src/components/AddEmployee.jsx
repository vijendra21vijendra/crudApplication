import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";

const AddEmployee = ({}) => {

    const {state} = useLocation();

    const [username, setUsername] = useState(state?.username || "");
    const [email, setEmail] = useState(state?.email || "");
    const [id, setId] = useState(state?.id || -1);

    const navigate  = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(username, email);
        if(id !== -1){
            const {data} = await axios.put(`http://localhost:8081/api/v1/employees/${id}`, {username:username,email:email});
        }else{
        const {data} = await axios.post(`http://localhost:8081/api/v1/employees`, {username:username,email:email});
        }
        setUsername("");
        setEmail("");
        navigate("/showEmployee");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                    <input type="text"
                     className="form-control" 
                     id="exampleInputUsername1" 
                     aria-describedby="emailHelp"
                     value={username}
                     onChange={(e)=> setUsername(e.target.value)}
                     />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                     className="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddEmployee;