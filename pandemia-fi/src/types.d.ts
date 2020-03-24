type ChartScaleType = "linear" | "logarithmic";

interface NewsFeedItem {
  date: import("moment").Moment;
  url: string;
  title: string;
  additionalInfo: string;
}

interface Feed {
  id: number;
  color: string;
  title: string;
  description: string;
}

interface FeedItem {
  feedId: number;
  color: string;
  title: string;
  description: string;
  link: string;
  creator: string;
  dateTime: import("moment").Moment;
}
