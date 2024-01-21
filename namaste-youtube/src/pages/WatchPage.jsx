import { useEffect, useState } from "react";
import { appActions } from "../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectComments, selectVideos } from "../redux/appSelector";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  YOUTUBE_VIDEO_COMMENTS_API_URL,
} from "../utils/constant";
import IFrame from "../components/IFrame";
import IFrameDescription from "../components/IFrameDescription";
import CommentCard from "../components/CommentCard";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoId, setVideoId] = useState(searchParams.get("v"));
  const videos = useSelector(selectVideos);
  const comments = useSelector(selectComments);

  const selectedVideo = videos.find((video) => {
    return video.id === searchParams.get("v");
  });

  const getComments = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_COMMENTS_API_URL +
        searchParams.get("v") +
        "&key=" +
        YOUTUBE_API_KEY
    );
    const response = await data.json();
    const comments = response.items.map((item) => {
      return {
        id: item?.id,
        channelId: item?.snippet?.channelId,
        videoId: item?.snippet?.videoId,
        textOrignal: item?.snippet?.topLevelComment?.snippet?.textOriginal,
        authorDisplayName: item?.snippet?.topLevelComment?.snippet?.authorDisplayName,
        authorDisplayImageUrl: item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
      }
    })

    dispatch(appActions.addComments(comments));
  };

  useEffect(() => {
    dispatch(appActions.toggleMenuOption(false));
  }, []);

  useEffect(() => {
    getComments();
  }, [videoId]);

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
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="col-span-2 h-auto">
        <IFrame videoId={videoId} />
        <IFrameDescription selectedVideo={selectedVideo} />
      </div>
      <div className="col-span-1 min-h-[700px] max-h-[700px] m-7 rounded-2xl border border-slate-300 overflow-y-scroll">
        <div className="h-16 bg-gray-500 flex items-center">
          <label className="mx-5 text-xl font-bold text-white">Comments</label>
        </div>
        {
          comments.map((item) => {
            return <CommentCard item={item} key={item?.id} />
          })
        }
      </div>
    </div>
  );
};

export default WatchPage;
