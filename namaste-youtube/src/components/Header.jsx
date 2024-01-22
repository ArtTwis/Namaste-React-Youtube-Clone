import MenuIcon from "../assets/icons/MenuIcon.png";
import YoutubeIcon from "../assets/icons/YoutubeIcon.png";
import UserIcon from "../assets/icons/UserIcon.png";
import { useDispatch } from "react-redux";
import { appActions } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState(null);
  const [displaySuggestionList, setDisplaySuggestionList] = useState(false);

  const dispatch = useDispatch();

  const handleToggleMenuOption = () => {
    dispatch(appActions.toggleSidebar());
  };

  const handleClick = (e) => {
    setSearchQuery(e.target.getAttribute('data-suggestion-item'));
    setDisplaySuggestionList(false);
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setDisplaySuggestionList(true);
  }

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const response = await data.json();
    setSuggestionList(response[1]);
  };

  useEffect(() => {
    let timer;
    // make an API call after every keystroke but have time gap is > 400ms. :- debouncing
    if(searchQuery != ""){
      timer = setTimeout(() => getSearchSuggestions(), 300);
    }else{
      setSuggestionList(null);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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
        <div className="flex flex-col relative">
          <input
            type="text"
            className="bg-white border border-gray-400 text-gray-900 text-base rounded-l-full focus:outline-none block w-96 px-4 py-1"
            value={searchQuery}
            onChange={handleChange}
          />
          {suggestionList && displaySuggestionList && (
            <div className="absolute top-10 bg-gray-100 p-5 rounded-lg min-w-96 max-w-96 shadow-lg">
              <ul>
                {suggestionList.map((item, index) => (
                  <li key={"suggestion-" + index} className="hover:bg-slate-200 py-1 px-2 rounded cursor-pointer text-nowrap text-ellipsis" data-suggestion-item={item} onClick={handleClick}>🔍  {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
