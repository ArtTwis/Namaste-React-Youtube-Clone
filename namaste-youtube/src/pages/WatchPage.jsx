import { useEffect } from "react";
import { appActions } from "../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectVideos } from "../redux/appSelector";
import YoutubeIcon from "../assets/icons/YoutubeIcon.png";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videos = useSelector(selectVideos);

  const selectedVideo = videos.find((video) => {
    return video.id === searchParams.get("v");
  });

  const { tags } = selectedVideo;

  useEffect(() => {
    dispatch(appActions.toggleMenuOption(false));
  }, []);

  return (
    <div>
      <iframe
        width="1300"
        height="600 "
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="m-7 rounded-2xl"></iframe>
      <h1 className="text-2xl font-bold ml-8">{selectedVideo?.title}</h1>
      <div className="flex flex-row items-center m-3">
        <h5 className="ml-8 text-lg font-bold tracking-tight text-gray-900">
          {selectedVideo?.channelTitle}
        </h5>
        <div className="ml-4 border border-gray-300 rounded-lg flex flex-row items-center px-3 py-1">
          <img alt="Youtu.be" src={YoutubeIcon} />
          <h5 className="ml-1 text-lg font-bold tracking-tight text-gray-900">
            Subscribe
          </h5>
        </div>
      </div>
      {tags ? (
        <div className="flex flex-row">
          <h5 className="mb-1 ml-8 text-base font-semibold tracking-tight text-gray-900">
            {tags[0]}, {tags[1]}, {tags[2]} and more
          </h5>
          &nbsp;
          <h5 className="mb-1 ml-8 text-lg font-bold tracking-tight border border-gray-300 text-black py-1 px-2 rounded-lg w-fit text-xs flex flex-row">
            {selectedVideo?.viewCount}
            <svg
              className="ml-2"
              width="15px"
              height="15px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.001 21C5.001 24 8.001 29 16.001 29C24.001 29 27.001 24 28.001 21M31 19C31 17 27.001 7 16 7M16 7C5.001 7 1 17 1 19M16 7V3M21.1758 3.6816L20.1758 7.4106M26 5.6797L23.999 9.1427M30.1416 8.8574L27.3136 11.6844M10.8223 3.6816L11.8213 7.4106M5.999 5.6797L7.999 9.1437M1.8574 8.8574L4.6854 11.6854M16.001 12C12.688 12 10.001 14.687 10.001 18C10.001 21.313 12.688 24 16.001 24C19.314 24 22.001 21.313 22.001 18M21.2441 15.0869C20.7001 14.1089 19.8911 13.3009 18.9141 12.7569M18.001 18C18.001 16.896 17.105 16 16.001 16C14.897 16 14.001 16.896 14.001 18C14.001 19.104 14.897 20 16.001 20C17.105 20 18.001 19.104 18.001 18Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h5>
        </div>
      ) : null}
    </div>
  );
};

export default WatchPage;
