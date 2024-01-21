const CommentCard = ({ item }) => {
  return (
    <div className="bg-white border rounded-xl m-2 py-[2px] px-[18px] flex flex-row items-center bg-gray-100 border-slate-300">
      <div className="flex">
        <img
          className="min-w-12 max-w-12 min-h-12 max-h-12 rounded-full"
          src={item?.authorDisplayImageUrl}
          alt="Author Image"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="px-4 py-1 flex flex-col h-full">
          <h3 className="text-base font-bold text-gray-800">
            {item?.authorDisplayName}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {item?.textOrignal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
