type ChartScaleType = "linear" | "logarithmic";

interface NewsFeedItem {
  date: import("moment").Moment;
  url: string;
  title: string;
  additionalInfo: string;
}
