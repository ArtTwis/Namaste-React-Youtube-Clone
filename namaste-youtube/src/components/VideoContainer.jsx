import { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../redux/appSlice";
import { selectVideos } from "../redux/appSelector";
import { convertYouTubeDuration } from "../utils/utils";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectVideos);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
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
    dispatch(appActions.addVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {videos.map((item) => {
        const { tags } = item;
        const duration = convertYouTubeDuration(item.duration);
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <div className="bg-white flex flex-col items-center mx-4 my-2 w-72">
              <img
                className="object-cover h-48 rounded-2xl mt-4"
                src={item.thumbnail}
                alt="thumbnail"
              />
              <div className="px-5 py-2">
                <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <h5 className="mb-1 text-sm tracking-tight text-gray-900">
                  {item.channelTitle}
                </h5>
                <div className="mb-1 text-sm tracking-tight bg-gray-300 text-black py-1 px-2 rounded-lg w-fit text-xs">
                  {duration?.hours ? duration?.hours + "hours" : null}{" "}
                  {duration?.minutes ? duration?.minutes + " min" : null}{" "}
                  {duration?.seconds ? duration?.seconds + " sec" : null}
                </div>
                {tags ? (
                  <h5 className="mb-1 text-xs tracking-tight text-gray-900">
                    {tags[0]}, {tags[1]}, {tags[2]} and more
                  </h5>
                ) : null}
                <h5 className="mb-1 text-sm tracking-tight border border-gray-300 text-black py-1 px-2 rounded-lg w-fit text-xs flex flex-row">
                  {item.viewCount}
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
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
