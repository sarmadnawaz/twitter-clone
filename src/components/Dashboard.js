import React from 'react';
import UserContext from '../store/userContext';
import Header from './main/Header'
import Feed from "./main/Feed"
import Avatar from './UI/Avatar';

function Dashboard(){
    const user = React.useContext(UserContext)
    console.log(user)
    return (
        <div className='dashboard'>
            <Header />
            <main>
            <Feed />
            </main>
        </div>
    )
}

export default Dashboard;