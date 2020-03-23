import useFetch from "react-fetch-hook";
import { parseFinnishDateString } from "./helpers";

const feedUrl = "/data-sources/mediapoiminnat.json";

interface MediaPickFromSource {
  date: string;
  title: string;
  url: string;
  sourceName: string;
}

const buildNewsFeedItemFromMediaPick = (
  sourceItem: MediaPickFromSource
): NewsFeedItem => ({
  date: parseFinnishDateString(sourceItem.date),
  url: sourceItem.url,
  title: sourceItem.title,
  additionalInfo: sourceItem.sourceName
});

const fetchMediaPicks = async (): Promise<NewsFeedItem[]> => {
  const response = await fetch("/data-sources/mediapoiminnat.json");
  const results: MediaPickFromSource[] = await response.json();
  return results.map(buildNewsFeedItemFromMediaPick);
};

export const useFetchMediaPicks = () =>
  useFetch<NewsFeedItem[]>(feedUrl, {
    formatter: async response => {
      const results: MediaPickFromSource[] = await response.json();
      return results.map(buildNewsFeedItemFromMediaPick);
    }
  });

export default fetchMediaPicks;
