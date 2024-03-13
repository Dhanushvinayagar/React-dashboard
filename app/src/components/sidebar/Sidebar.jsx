import './sidebar.css'
import Profile from '../../assets/icons/profile.jpeg'
import { CiSettings } from "react-icons/ci";
import { IoSpeedometerOutline } from "react-icons/io5";
const Sidebar = () => {
    const userName = "User"
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-section">

                    <img src={Profile} alt="profile" className='profile' />
                    <div className="user-name">
                        <h6>Hi {userName}</h6>
                        <p className='info'>View my info</p>
                    </div>
                    <CiSettings />
                </div>
                <div className="sidebar-section dashboard">
                    <div className='section-container'>
                        <IoSpeedometerOutline size={25}/>
                        <h6 >
                            Dashboard
                        </h6>
                    </div>
                </div>
                <div className="sidebar-section">3</div>
                <div className="sidebar-section">4</div>
                <div className="sidebar-section">5</div>
                <div className="sidebar-section">6</div>
                <div className="sidebar-section">7</div>
                <div className="sidebar-section">8</div>
                <div className="sidebar-section">9</div>
                <div className="sidebar-section">10</div>
            </div>
        </>
    )
}

export default Sidebar
