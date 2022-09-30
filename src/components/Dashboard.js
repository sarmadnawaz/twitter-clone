import React from 'react';
import UserContext from '../store/userContext';

function Dashboard(){
    const user = React.useContext(UserContext)
    console.log(user)
    return (
        <div className='dashboard'></div>
    )
}

export default Dashboard