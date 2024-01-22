import MenuIcon from "../assets/icons/MenuIcon.png";
import YoutubeIcon from "../assets/icons/YoutubeIcon.png";
import UserIcon from "../assets/icons/UserIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../redux/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_API_URL, YOUTUBE_SUGGESTION_API } from "../utils/constant";
import { cacheActions } from "../redux/cacheSlice";
import { selectCacheResult } from "../redux/cacheSelector";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState(null);
  const [displaySuggestionList, setDisplaySuggestionList] = useState(false);
  const selectedCacheResult = useSelector(selectCacheResult);

  const dispatch = useDispatch();

  const handleToggleMenuOption = () => {
    dispatch(appActions.toggleSidebar());
  };

  const handleClick = (e) => {
    setSearchQuery(e.target.getAttribute("data-suggestion-item"));
    setDisplaySuggestionList(false);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setDisplaySuggestionList(true);
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const response = await data.json();
    setSuggestionList(response[1]);
    dispatch(cacheActions.cacheResult({ [searchQuery]: response[1] }));
  };

  const handleSearchClick = async () => {
    if (searchQuery !== "") {
      const data = await fetch(
        YOUTUBE_API_URL + "&q=" + encodeURIComponent(searchQuery)
      );
      const response = await data.json();
      const videos = response.items.map((item) => {
        return {
          id: item?.id,
          title: item?.snippet?.title,
          thumbnail: item?.snippet?.thumbnails?.standard?.url,
          channelTitle: item?.snippet?.channelTitle,
          tags: item?.snippet?.tags,
          duration: item?.contentDetails?.duration,
          viewCount: item?.statistics?.viewCount,
        };
      });
      // dispatch(appActions.addVideos(videos));
    }
  };

  useEffect(() => {
    let timer;

    // make an API call after every keystroke but have time gap is > 400ms. :- debouncing
    if (searchQuery !== "") {
      if (
        selectedCacheResult &&
        !selectedCacheResult.hasOwnProperty(searchQuery)
      ) {
        timer = setTimeout(() => getSearchSuggestions(), 300);
      } else {
        setSuggestionList(selectedCacheResult[searchQuery]);
      }
    } else {
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
            onBlur={() => setDisplaySuggestionList(false)}
            onFocus={() => setDisplaySuggestionList(true)}
          />
          {suggestionList && displaySuggestionList && (
            <div className="absolute top-10 bg-gray-100 p-5 rounded-lg min-w-96 max-w-96 shadow-lg">
              <ul>
                {suggestionList.map((item, index) => (
                  <li
                    key={"suggestion-" + index}
                    className="hover:bg-slate-200 py-1 px-2 rounded cursor-pointer text-nowrap text-ellipsis"
                    data-suggestion-item={item}
                    onClick={handleClick}>
                    🔍 {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          type="button"
          className="text-white bg-gray-800 border border-gray-800 hover:bg-gray-900 focus:outline-none rounded-r-full text-base px-5 py-1"
          onClick={handleSearchClick}>
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
