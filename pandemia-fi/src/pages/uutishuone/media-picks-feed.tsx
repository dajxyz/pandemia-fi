import React from "react";
import NewsFeedItem from "../../components/newsfeeditem";
import { useFetchMediaPicks } from "../../lib/fetch-media-picks";

const MediaPicksFeed: React.FunctionComponent = () => {
  const { data = [] } = useFetchMediaPicks();
  return (
    <>
      {data.map((item, index) => (
        <NewsFeedItem key={index} {...item} />
      ))}
    </>
  );
};

export default MediaPicksFeed;
