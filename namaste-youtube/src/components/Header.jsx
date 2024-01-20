import MenuIcon from "../assets/icons/MenuIcon.png";
import YoutubeIcon from "../assets/icons/YoutubeIcon.png";
import UserIcon from "../assets/icons/UserIcon.png";
import { useDispatch } from "react-redux";
import { appActions } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenuOption = () => {
    dispatch(appActions.toggleSidebar());
  };

  return (
    <div className="flex flex-row justify-between h-14 border border-b-2 border-gray-200 shadow-sm px-7">
      <div className="flex flex-row items-center">
        <img
          src={MenuIcon}
          alt="Menu"
          style={{ width: "28px", height: "28px" }}
          className="mr-2 cursor-pointer"
          onClick={handleToggleMenuOption}
        />
        <a href="/">
          <img src={YoutubeIcon} alt="Youtube" className="mr-1" />
        </a>
        <label className="text-lg font-bold">Youtube</label>
      </div>
      <div className="flex flex-row items-center">
        <input
          type="text"
          className="bg-white border border-gray-400 text-gray-900 text-base rounded-l-full focus:outline-none block w-96 px-4 py-1 "
        />
        <button
          type="button"
          className="text-white bg-gray-800 border border-gray-800 hover:bg-gray-900 focus:outline-none rounded-r-full text-base px-5 py-1">
          Search
        </button>
      </div>
      <div className="flex flex-row items-center">
        <img src={UserIcon} alt="User" />
        <label className="ml-2">Twinkle Goyal</label>
      </div>
    </div>
  );
};

export default Header;
