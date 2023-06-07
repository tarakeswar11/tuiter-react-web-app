import React, { useState } from "react";

function TuitStats({ comments, retweets, likes, liked }) {
  const [isLiked, setIsLiked] = useState(liked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const likeIconClass = isLiked ? "bi bi-heart-fill text-danger" : "bi bi-heart";

  return (
    <div className="row mt-2 text-secondary">
      
      <div className="col">
        <i className="bi bi-chat"></i>&nbsp;
        <span className="comments">{comments}</span>
      </div>
      <div className="col">
        <i className="bi bi-repeat"></i>&nbsp;
        <span className="retweets">{retweets}</span>
      </div>
      <div className="col" onClick={handleLikeClick}>
        <i className={likeIconClass}></i>&nbsp;
        <span>{likeCount}</span>
      </div>
      <div className="col">
        <i className="bi bi-upload"></i>
      </div>
    </div>
  );
}

export default TuitStats;
