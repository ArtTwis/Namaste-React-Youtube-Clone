
import YoutubeIcon from "../assets/icons/YoutubeIcon.png";
import YtChannel from "../assets/icons/player.png";

const IFrameDescription = ({selectedVideo}) => {
  return (
    <>
      <h1 className="text-2xl font-bold mx-8">{selectedVideo?.title}</h1>
      <div className="flex flex-row items-center justify-between mx-8 my-3">
        <div className="flex flex-row gap-2">
          <img alt="Youtube Channel" src={YtChannel} />
          <h5 className="text-lg font-bold tracking-tight text-gray-900">
            {selectedVideo?.channelTitle}
          </h5>
        </div>
        <div className="ml-4 border border-gray-300 rounded-lg flex flex-row items-center px-3">
          <img alt="Youtu.be" src={YoutubeIcon} />
          <h5 className="ml-1 text-sm font-bold tracking-tight text-gray-900">
            Subscribe
          </h5>
        </div>
      </div>
    </>
  );
};

export default IFrameDescription;
