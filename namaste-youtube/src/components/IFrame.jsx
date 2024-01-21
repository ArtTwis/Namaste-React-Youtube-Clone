const IFrame = ({videoId}) => {
  return (
    <iframe
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="m-7 rounded-2xl w-[95%] h-[600px]"></iframe>
  )
}

export default IFrame;