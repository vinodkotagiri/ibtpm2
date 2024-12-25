import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const NavbarComponent = () => {
  const navigate = useNavigate()
  const { drawingData } = useAppSelector( state => state.schedule )
  return (
    <div className="navbar  bg-light-primary z-[9999]">
      <div className="flex-1">
        <NavLink to='/' className="btn btn-ghost text-xl">IBT</NavLink>
      </div>
      <div className='flex gap-3'>

        <label className="input input-bordered flex items-center gap-2 w-[200px] bg-slate-300 font-semibold text-slate-700">
          Length
          <input type="text" value={ drawingData?.plotLength +' m ('+Math.ceil(drawingData?.plotLength/0.3048)+' ft)'} className='font-bold'/>
        </label>

        <label className="input input-bordered flex items-center gap-2 w-[200px] bg-slate-300 font-semibold text-slate-700">
          Width
          <input type="text"  value={drawingData.plotWidth+' m ('+Math.ceil(drawingData?.plotWidth/0.3048)+' ft)'} className='font-bold' />
        </label>

      </div>
      <div className="flex-none gap-2 z-50">
        <div className='mx-3 h-full flex items-center justify-center'>
          <button className='btn btn-primary' onClick={ () => { navigate( '/schedule' ) } }>Schedule</button>
          {/* <UnitsToggler/> */ }
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={ 0 }
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               <li>
              <NavLink className="justify-between" to='/dashboard/estimates'>
                Estimates
                <span className="badge">New</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="justify-between" to='/dashboard/profile'>
                Profile
              </NavLink>
            </li>
            <li><NavLink to='/dashboard/settings'>Settings</NavLink></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent