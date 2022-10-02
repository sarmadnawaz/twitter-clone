import React from "react";
import { TiHome } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { ImSearch } from "react-icons/im";
import { CgMoreAlt } from "react-icons/cg";
import Avatar from '../UI/Avatar'
import { signOutUser } from '../../Actions/auth'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <div className="header">
        <div className="header-first">
          <div>
            <img src="/img/twitter-logo-s.png" alt="twitter logo" />
          </div>
          <div>
            <TiHome /> Home
          </div>
          <div>
            <ImSearch /> Explore
          </div>
          <div>
            <MdEmail /> Messages
          </div>
          <div>
            <BsFillBookmarkFill /> Bookmarks
          </div>
          <div>
            <HiUser /> Profile
          </div>
        </div>
        <div className="header-second">
            <div className="user-summary">
            <Avatar imageUrl={"https://xsgames.co/randomusers/avatar.php?g=male"} />
              <div className="user-summary-details">
                <h3>User</h3>
                <p>@username</p>
              </div>
                <CgMoreAlt style={{ fontSize : '26px'}} onClick={() => {
                  signOutUser().then(
                    () => navigate('/'),
                    (error) => alert(error)
                  )
                }}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
