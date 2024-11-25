import { useNavigate } from 'react-router-dom'

const NavbarComponent = () => {
  const navigate=useNavigate()
  return (
    <div className="navbar  bg-light-primary z-50">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">IBT</a>
    </div>
      <div className="flex-none gap-2 float-start">
        <input className='input input-bordered  max-w-xs w-[150px]' placeholder='Length(m)' />
        <input className='input input-bordered  max-w-xs w-[150px]' placeholder='breadth(m)' />
      </div>
    <div className="flex-none gap-2">
      <div className='mx-3 h-full flex items-center justify-center'>
        <button className='btn btn-primary' onClick={()=>{navigate('/schedule')}}>Schedule</button>
        {/* <UnitsToggler/> */}
      </div>
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default NavbarComponent