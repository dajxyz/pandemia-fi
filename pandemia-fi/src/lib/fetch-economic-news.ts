import { parseFinnishDateString } from "./helpers";

interface EconomicNewsFromSource {
  date: string;
  title: string;
  url: string;
}

const buildNewsFeedItemFromSource = (
  sourceItem: EconomicNewsFromSource
): NewsFeedItem => ({
  date: parseFinnishDateString(sourceItem.date),
  url: sourceItem.url,
  title: sourceItem.title,
  additionalInfo: ""
});

const fetchActionsByNations = async (): Promise<NewsFeedItem[]> => {
  const response = await fetch("/data-sources/talousuutiset.json");
  const results: EconomicNewsFromSource[] = await response.json();
  return results.map(buildNewsFeedItemFromSource);
};

export default fetchActionsByNations;
