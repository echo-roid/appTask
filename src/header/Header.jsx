

import logo from "../assets/images/Avatar.png"
import bell from "../assets/images/bell.png"
import menubar from "../assets/images/Menu.png"
import { AiOutlineSearch } from 'react-icons/ai';
import "./header.css"


const Header = () => {

    return (

        <>
            <header className="p-4 ">
                <div className="wrap_header ">

                    <div className="top_header d-flex justify-content-between align-items-center mb-3">
                        <div className="logo d-flex align-items-center">
                            <img width={40} height={40} src={logo} alt="Not found" />
                            <img className="ms-3" width={20} height={20} src={bell} alt="" />
                            <span className="ms-3">DAYS FREE 7-11/ SF RETURNS</span>
                        </div>
                        <div className="menu">
                            <img width={30} src={menubar} alt="" />
                        </div>
                    </div>

                    <div className="bottom_header">
                        <div className="header_search position-relative mb-4">
                            <input type="text" placeholder="Try Red Slipons " />
                            <AiOutlineSearch />
                        </div>

                        <div className="tab_gender ">
                            <ul className="p-0 d-flex justify-content-between">
                                <li className="me-1">
                                    Women's
                                </li>
                                <li className="me-1">
                                    Men's
                                </li>
                                <li>
                                    Kids
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>
        </>

    )

}





export default Header;