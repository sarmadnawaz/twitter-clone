import React from 'react';
import UserContext from './userContext';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'

function UserProvider(props){
    const [userContext, setUserContext] = React.useState(null)
    React.useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUserContext(user)
            }else {
                setUserContext(null)
            }
        })
    }, [userContext])
    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider