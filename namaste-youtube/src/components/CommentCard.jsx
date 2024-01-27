import { useState } from "react";

const Card = ({ item, key }) => {
  return (
    <div key={key} className="bg-white border rounded-xl m-2 py-[2px] px-[18px] flex flex-row items-center bg-gray-100 border-slate-300">
      <div className="flex">
        <img
          className="min-w-8 max-w-8 min-h-8 max-h-8 rounded-full"
          src={item?.authorDisplayImageUrl}
          alt="Author Image"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="px-4 py-1 flex flex-col h-full">
          <label className="text-sm font-bold text-gray-800">
            {item?.authorDisplayName}
          </label>
          <p className="mt-1 text-sm text-gray-500">{item?.textOrignal}</p>
        </div>
      </div>
    </div>
  );
};

const CommentCard = ({ item }) => {
  return (
    <div>
      <Card item={item} margin="" />
      <div>
        {item?.replies
          ? item.replies.map((reply) => <Card item={reply} margin="ml-7" />)
          : null}
      </div>
    </div>
  );
};

export const CommentList = ({ comments = [] }) => {
  return comments.map((comment) => {
    return (
      <div>
        <Card key={comment.id} item={comment} />
        {comment?.replies ? (
          <div className="ml-7">
            <CommentList comments={comment?.replies} />
          </div>
        ) : null}
      </div>
    );
  });
};

export default CommentCard;
