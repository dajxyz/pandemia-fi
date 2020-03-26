import Parser, { Output as RSSOutput, Item as RSSItem } from "rss-parser";
import moment from "moment";

const parser = new Parser();

// TODO: Add more colors to the list so that feed list would not run out of colors
const feedHighlightColors: string[] = [
  "#2979FF",
  "#6202EE",
  "#FF9800",
  "#33D69F",
  "#0DDEDE",
  "#FF9CDD",
  "#C20505",
  "#808080"
];

const feedURLs: string[] = [
  "https://app.meltwater.com/gyda/outputs/5e70ed19dea75e201037047f/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e735eea1363521e1c685237/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e71c8152ab0b4521c2db20c/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e70ed4d97e4a3b2ac4cbf0e/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e7b59d61363521e1c6852c5/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e7b59f251615cb4acd82465/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e7b59b297e4a3b2ac4cc027/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss",
  "https://app.meltwater.com/gyda/outputs/5e7b5a0f2122be1c1cdd2400/rendering?apiKey=5507cdbfa4b0adb412e15cf0&type=rss"
];

const fetchAndParseRSSFeed = async (url: string): Promise<RSSOutput | null> => {
  try {
    return await parser.parseURL(url);
  } catch {
    return null;
  }
};

/**
 * Build feed from the raw data
 */
const buildFeedFromRawData = (
  rawDataItem: RSSOutput,
  assignedId: number
): Feed => ({
  id: assignedId,
  color: feedHighlightColors[assignedId],
  title: rawDataItem.title as string,
  description: rawDataItem.description as string
});

/**
 * Build feed items from the raw data
 */
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

/**
 * Fetch all feeds and items
 */
const fetchAllFeedsAndItems = async (): Promise<{
  feeds: Feed[];
  feedItems: FeedItem[];
}> => {
  const rawData: RSSOutput[] = (
    await Promise.all(feedURLs.map(feedURL => fetchAndParseRSSFeed(feedURL)))
  ).filter((outputOrNull): outputOrNull is RSSOutput => outputOrNull !== null);
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
