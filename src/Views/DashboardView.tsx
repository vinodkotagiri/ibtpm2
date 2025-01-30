import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Active {
  estimate?: boolean;
  profile?: boolean;
  settings?: boolean;
}

const DashboardView = () => {
  const [active, setActive] = useState<Active>({estimate:true});
const navigate=useNavigate()
  const handleClick = (key: keyof Active) => {
    // Set the clicked item to true, and all others to false
    setActive({
      estimate: key === 'estimate' ? true : false,
      profile: key === 'profile' ? true : false,
      settings: key === 'settings' ? true : false,
    });
    navigate(key!=='estimate'?key:'/dashboard')
  };

  return (
    <div className="flex">
    <aside className="bg-base-200 max-w-56 min-h-screen min-w-16 w-56">
      <ul className="menu bg-base-200 rounded-box w-full">
        <li
          className="rounded-lg"
          style={{ background: active?.estimate ? '#A29BFE' : '' }}
        >
          <button onClick={() => handleClick('estimate')}>My Estimates</button>
        </li>
        <li
          className="rounded-lg"
          style={{ background: active?.profile ? '#A29BFE' : '' }}
        >
          <button onClick={() => handleClick('profile')}>Profile</button>
        </li>
        <li
          className="rounded-lg"
          style={{ background: active?.settings ? '#A29BFE' : '' }}
        >
          <button onClick={() => handleClick('settings')}>Settings</button>
        </li>
      </ul>
    </aside>
    <div className="flex-1 bg-slate-200 p-3">
      <Outlet/>
    </div>
    </div>
  );
};

export default DashboardView;
