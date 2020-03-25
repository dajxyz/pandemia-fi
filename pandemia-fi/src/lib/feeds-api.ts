import Parser, { Output as RSSOutput, Item as RSSItem } from "rss-parser";
import moment from "moment";

const parser = new Parser();

// TODO: Add more colors to the list so that feed list would not run out of colors
const feedHighlightColors: string[] = [
  "#153084",
  "#1B3FAB",
  "#214ED3",
  "#4169E1",
  "#6988E7",
  "#90A8EE",
  "#B8C7F4"
];

const feedURLs: string[] = [
  "https://app.meltwater.com/gyda/outputs/5e70ed19dea75e201037047f/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e735eea1363521e1c685237/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e71c8152ab0b4521c2db20c/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e70ed4d97e4a3b2ac4cbf0e/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss"
];

const buildFeedFromRawData = (
  rawDataItem: RSSOutput,
  assignedId: number
): Feed => ({
  id: assignedId,
  color: feedHighlightColors[assignedId],
  title: rawDataItem.title as string,
  description: rawDataItem.description as string
});

const buildFeedItemsFromRawData = (
  feed: Feed,
  rawItems: RSSItem[]
): FeedItem[] =>
  rawItems.map((rawItem: RSSItem) => ({
    feedId: feed.id,
    color: feed.color,
    title: rawItem.title as string,
    link: rawItem.link as string,
    description: rawItem.content as string,
    creator: rawItem["dc:creator"],
    dateTime: moment(rawItem.pubDate)
  }));

const fetchAllFeedsAndItems = async (): Promise<{
  feeds: Feed[];
  feedItems: FeedItem[];
}> => {
  const rawData: RSSOutput[] = await Promise.all(
    feedURLs.map(feedURL => parser.parseURL(feedURL))
  );
  const feeds: Feed[] = rawData.map(buildFeedFromRawData);
  const feedItems: FeedItem[] = feeds
    .map((feed: Feed) =>
      buildFeedItemsFromRawData(feed, rawData[feed.id].items ?? [])
    )
    .flat()
    .sort((a: FeedItem, b: FeedItem) => a.dateTime.diff(b.dateTime));

  return {
    feeds,
    feedItems
  };
};

export default fetchAllFeedsAndItems;
