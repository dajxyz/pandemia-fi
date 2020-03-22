interface MediaPickFromSource {
  date: string;
  title: string;
  url: string;
  sourceName: string;
}

const buildNewsFeedItemFromMediaPick = (
  sourceItem: MediaPickFromSource
): NewsFeedItem => ({
  date: new Date(sourceItem.date),
  url: sourceItem.url,
  title: sourceItem.title,
  additionalInfo: sourceItem.sourceName
});

export const fetchMediaPicks = async (): Promise<NewsFeedItem[]> => {
  const response = await fetch("/data-sources/mediapoiminnat.json");
  const results: MediaPickFromSource[] = await response.json();
  return results.map(buildNewsFeedItemFromMediaPick);
};
