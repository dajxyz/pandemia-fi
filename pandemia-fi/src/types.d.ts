type ChartScaleType = "linear" | "logarithmic";

/**
 * News feed item
 *
 * @interface NewsFeedItem
 */
interface NewsFeedItem {
  /**
   * Date of a news feed item
   *
   * @type {import("moment").Moment}
   * @memberof NewsFeedItem
   */
  date: import("moment").Moment;
  /**
   * URL of a news feed item
   *
   * @type {string}
   * @memberof NewsFeedItem
   */
  url: string;
  /**
   * Title of a news feed item
   *
   * @type {string}
   * @memberof NewsFeedItem
   */
  title: string;
  /**
   * Additional information about a news feed item
   *
   * @type {string}
   * @memberof NewsFeedItem
   */
  additionalInfo: string;
}

/**
 * Feed
 *
 * @interface Feed
 */
interface Feed {
  /**
   * Feed identification number
   *
   * @type {number}
   * @memberof Feed
   */
  id: number;
  /**
   * Color of a feed
   *
   * @type {string}
   * @memberof Feed
   */
  color: string;
  /**
   * Title of a feed
   *
   * @type {string}
   * @memberof Feed
   */
  title: string;
  /**
   * Description of a feed
   *
   * @type {string}
   * @memberof Feed
   */
  description: string;
}

/**
 * Feed item
 *
 * @interface FeedItem
 */
interface FeedItem {
  /**
   * Feed identification number
   *
   * @type {number}
   * @memberof FeedItem
   */
  feedId: number;
  /**
   * Color of a feed item
   *
   * @type {string}
   * @memberof FeedItem
   */
  color: string;
  /**
   * Title of a feed item
   *
   * @type {string}
   * @memberof FeedItem
   */
  title: string;
  /**
   * Description of a feed item
   *
   * @type {string}
   * @memberof FeedItem
   */
  description: string;
  /**
   * Link of a feed item in string format
   *
   * @type {string}
   * @memberof FeedItem
   */
  link: string;
  /**
   * Creator of a feed item
   *
   * @type {string}
   * @memberof FeedItem
   */
  creator: string;
  /**
   * Date and time of a feed item
   *
   * @type {import("moment").Moment}
   * @memberof FeedItem
   */
  dateTime: import("moment").Moment;
}
