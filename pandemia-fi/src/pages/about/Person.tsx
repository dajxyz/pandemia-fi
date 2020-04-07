import React from "react";
import { Card, Heading, Box } from "rebass";
// import { Card, Image, Heading, Text, Link, Box } from "rebass";

interface PersonProps {
  /** name of a person */
  name: string;
  /** job/role title */
  title?: string;
  /** href URL to a profile page or website */
  href?: string;
  /** profile image path/filename */
  image?: string;
  /** image alt text for improved accessibility */
  imageAlt?: string;
  children?: any;
}

const Person = ({
  name,
  href,
  title,
  image,
  imageAlt,
  children,
}: PersonProps) => {
  return (
    <Card
      sx={{
        maxWidth: "38em",
        border: "1pt solid",
        borderColor: "primary",
        p: 2,
        pt: 1,
        pb: 2,
        my: 2,
        borderRadius: 4,
      }}
    >
      <Heading
        as="h4"
        sx={{
          fontSize: 2,
          mt: 2,
          mb: 1,
        }}
      >
        {name}
      </Heading>

      {/* <Image
        className="Person__Image"
        src={image}
        alt={imageAlt}
        sx={{
          width: ["32px", "32px"],
          borderRadius: 4,
          mr: 2,
        }}
      /> */}

      <Box
        sx={{
          mt: 0,
        }}
      >
        {children}
      </Box>

      {/* <Link
        className="Person__Link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Text
          textAlign="center"
          align-self="center"
          flex="1"
          fontSize={[2, 2, 2]}
          color="text"
        >
          {title}
        </Text>
      </Link> */}
    </Card>
  );
};

export default Person;
