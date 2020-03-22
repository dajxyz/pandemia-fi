import { parseFinnishDateString } from "./helpers";

interface ActionsByNationsFromSource {
  date: string;
  title: string;
  url: string;
  country: string;
}

const buildNewsFeedItemFromSource = (
  sourceItem: ActionsByNationsFromSource
): NewsFeedItem => ({
  date: parseFinnishDateString(sourceItem.date),
  url: sourceItem.url,
  title: sourceItem.title,
  additionalInfo: sourceItem.country
});

const fetchActionsByNations = async (): Promise<NewsFeedItem[]> => {
  const response = await fetch("/data-sources/valtioiden_toimet.json");
  const results: ActionsByNationsFromSource[] = await response.json();
  return results.map(buildNewsFeedItemFromSource);
};

export default fetchActionsByNations;
