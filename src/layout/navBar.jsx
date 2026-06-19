import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png'
function NavBar(){
return (
    <header className="bg-black text-white">
        <nav className="flex justify-between gap-6 py-4 px-10 items-center">
           <NavLink to='/' className="flex gap-2 justify-center items-center">
            <img src={Logo} alt="Logo"  className="w-6 h-6"/>
            <h2 className="text-lg font-semibold">Job Portal</h2>
           </NavLink>

           <div className="flex justify-evenly gap-7">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'> About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/jobs'>Jobs</NavLink>
           </div>

           <NavLink className="bg-[#309689] px-4 py-2 text-white rounded-lg">Login</NavLink>
        </nav>
    </header>
);
}
export default NavBar;