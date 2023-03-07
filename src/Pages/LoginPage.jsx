import { useState } from "react"

function LoginPage () {
const [user,setuser] = useState(null)
const [password, setpassword] = useState(null)

    return(

        <div className="col-lg-2 mx-auto">
<div className="shadow p-3">
    <form >
    <input value={user} onChange={(input)=>{setuser(input.target.value)}} required placeholder="Email" className="form-control mb-2"/>
    <input value={password} onChange={(int)=>{setpassword(int.target.value)}} placeholder="Password" className="form-control mb-2"/>
    <button className="btn bg-primary w-100">LogIn</button>
    </form>

</div>
        </div>
    )
}
export default LoginPage