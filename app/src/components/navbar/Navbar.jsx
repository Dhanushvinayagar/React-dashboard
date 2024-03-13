import './navbar.css'
import UniversityLogo from '../../assets/icons/UniversityLogo.png'
import { AiFillBell } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
const Navbar = () => {
    const numberOfNotifications = 1
    const handleClick = ()=>{
        alert("Notification clicked")
    }
    return (
        <>
            <div className="navbar">
                <div className="university-logo">
                    <img src={UniversityLogo} alt="univercity-logo" />
                </div>
                <div className="topbar-right">
                    <div className="top-container" onClick={()=>handleClick()}>
                        <div className="notification">
                            <AiFillBell size={24} color='grey' />
                            <div className="circle">{numberOfNotifications}</div>
                        </div>
                        <p>Notifications</p>
                    </div>
                    <div className="top-container">
                        <IoIosLogOut size={24} color='grey' />
                        <p>Log&nbsp;out</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
