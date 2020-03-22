import React from "react";
import {Link, Text, Heading} from 'rebass';

interface NewsFeedItemProps {
  date: Date;
  url: string;
  title: string;
  additionalInfo: string;
}

const NewsFeedItem: React.FunctionComponent<NewsFeedItemProps> = ({
  children,
  date,
  url,
  title,
  additionalInfo,
}) => {
  return (
    <Link href={url}>
      <Heading>{title}</Heading>
      <Text>{additionalInfo}</Text>
      <Text>{date.toString()}</Text>
      {children}
    </Link>
  )
};

export default NewsFeedItem;
