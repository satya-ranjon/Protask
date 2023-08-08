import { RiSettings6Line } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { userLogout } from "../../services/auth/authSlice";

const LogoutAndSetting = () => {
  const dispatch = useDispatch();

  /**
   * Handles the logout action.
   * Removes authentication data from localStorage and dispatches a userLogout action.
   */
  const handleLogout = () => {
    localStorage.removeItem("auth");
    dispatch(userLogout());
  };

  return (
    <div className="logout-and-setting absolute  w-32 left-10 bottom-24 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <ul className="w-full text-center">
        {/* Setting Option */}
        <li className="hover:text-primary w-full px-4 text-sm border-b-2 border-transparent duration-300 transition-colors  py-2 cursor-pointer flex justify-start gap-3 items-center">
          <RiSettings6Line /> Setting
        </li>

        {/* Logout Option */}
        <li
          className="hover:text-primary w-full px-4 text-sm border-b-2 border-transparent duration-300 transition-colors  py-2 cursor-pointer flex justify-start gap-3 items-center"
          onClick={handleLogout}>
          <AiOutlineLogout />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default LogoutAndSetting;