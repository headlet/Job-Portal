import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo.png'
function NavBar(){
return (
    <header className="bg-black text-white">
        <nav className="flex justify-between gap-6 py-4 px-10 items-center">
           <NavLink to='/' className="flex gap-2 justify-center items-center">
            <img src={Logo} alt="Logo"  className="w-6 h-6"/>
            <h2 className="text-lg font-semibold">Job Portal</h2>
           </NavLink>

           <div className="flex justify-evenly items-center gap-7">
            <NavLink to='/' className={({isActive}) => `p-1 rounded-lg hover:bg-[#309689] ${isActive ? 'bg-[#309689]' : ''}`}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => `p-1 rounded-lg hover:bg-[#309689] ${isActive ? 'bg-[#309689]' : ''}`}> About</NavLink>
            <NavLink to='/contact' className={({isActive}) => `p-1 rounded-lg hover:bg-[#309689] ${isActive ? 'bg-[#309689]' : ''}`}>Contact</NavLink>
            <NavLink to='/jobs' className={({isActive}) => `p-1 rounded-lg hover:bg-[#309689] ${isActive ? 'bg-[#309689]' : ''}`}>Jobs</NavLink>
           </div>

           <NavLink to='/login' className={({isActive}) => `bg-[#309689] px-4 py-2 text-white rounded-lg hover:bg-green-700 ${isActive ? ' bg-green-700' : ''}`}>Login</NavLink>
        </nav>
    </header>
);
}
export default NavBar;