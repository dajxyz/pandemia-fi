import { parseFinnishDateString } from "./helpers";

interface ActionsByOrganisationsFromSource {
  date: string;
  organisation: string;
  url: string;
  organisationType: string;
  location: string;
}

const buildNewsFeedItemFromSource = (
  sourceItem: ActionsByOrganisationsFromSource
): NewsFeedItem => ({
  date: parseFinnishDateString(sourceItem.date),
  url: sourceItem.url,
  title: sourceItem.organisation,
  additionalInfo: `${sourceItem.organisationType}, ${sourceItem.location}`
});

const fetchActionsByOrganisations = async (): Promise<NewsFeedItem[]> => {
  const response = await fetch("/data-sources/organisaatioiden_toimet.json");
  const results: ActionsByOrganisationsFromSource[] = await response.json();
  return results.map(buildNewsFeedItemFromSource);
};

export default fetchActionsByOrganisations;
