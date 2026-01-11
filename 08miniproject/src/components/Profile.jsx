import Usercontext from "../context/Usercontext"
import React, {useContext, Usecontext} from 'react'

function Profile() {
    const {user} = useContext(Usercontext)
    
    if(!user) return <div>please Login</div>

    return <div> Welcome {user.username}</div>
}

export default Profile