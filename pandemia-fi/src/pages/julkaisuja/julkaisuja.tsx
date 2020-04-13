import React from "react";

import { Box, Flex } from "rebass";
import { Input, Text } from "theme-ui";

import CategoryBadge from "../../components/categorybadge";
import Button from "../../components/button";

import publications from "./publications.json";
import "./julkaisuja.css";

import Introduction from "./components/Introduction";

/* TODO: `<SearchBox />` component placeholder for later improvements */
// import SearchBox from "./components/SearchBox";

const allPublications = publications.map((p) => ({
  date: p.Date,
  name: p.Article,
  authors: p.Author,
  journal: p.Journal,
  citations: (p["Citations 17-03-2020"] || 0) as number,
  n: (p.n || 0) as number,
  if: p.IF,
  link: p.DOI,
  tags: p.tags
    .split(",")
    .map((t) => t.trim())
    .filter((t) => !!t),
}));

const categories = allPublications
  .map((p) => p.tags)
  .reduce((acc, t) => acc.concat(t), [])
  .reduce<Array<string>>((acc, t) => {
    if (!acc.includes(t)) {
      acc.push(t);
    }
    return acc;
  }, []);

const colorsAndBgs = [
  {
    color: "#fff",
    bg: "#3150AE",
  },
  {
    color: "#fff",
    bg: "#5948A5",
  },
  {
    color: "#fff",
    bg: "#3A6579",
  },
  {
    color: "#fff",
    bg: "#875050",
  },
  {
    color: "#fff",
    bg: "#1E4454",
  },
  {
    color: "#fff",
    bg: "#AA5069",
  },
  {
    color: "#fff",
    bg: "#E38731",
  },
  {
    color: "#fff",
    bg: "#808C91",
  },
  {
    color: "#fff",
    bg: "#8D4381",
  },
  {
    color: "#fff",
    bg: "#B86500",
  },
];

const tagMapColors: Map<string, { color: string; bg: string }> = new Map();

categories.forEach((c, i) => {
  tagMapColors.set(c, colorsAndBgs[i % colorsAndBgs.length]);
});

interface Publication {
  date: string;
  name: string;
  authors: string;
  n: number;
  citations: number;
  journal: string;
  if: number | string;
  tags: Array<string>;
  link: string;
}

interface State {
  page: number;
  perPage: number;
  current: Array<Publication>;
  sort: keyof Publication;
  sortDir: "asc" | "desc";
  categories: Array<string>;
  filter: string;
}

/**
 * Julkaisuja section of the website
 */
export default class Julkaisuja extends React.Component<{}, State> {
  state: State = {
    page: 0,
    perPage: 15,
    current: allPublications,
    sort: "if",
    sortDir: "desc",
    filter: "",
    categories,
  };

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    if (prevState.filter !== this.state.filter) {
      const current = allPublications.filter((p) => {
        if (!!this.state.filter) {
          return (
            p.date.includes(this.state.filter) ||
            p.name.includes(this.state.filter) ||
            p.authors.includes(this.state.filter) ||
            p.citations.toString().includes(this.state.filter) ||
            p.journal.includes(this.state.filter) ||
            p.if.toString().includes(this.state.filter) ||
            p.tags.includes(this.state.filter)
          );
        } else {
          return true;
        }
      });
      this.setState({ current, page: 0 });
    }
  }

  render() {
    return (
      <Flex flexWrap="wrap" sx={{ p: 0 }}>
        <Box width={[1]} sx={{ p: 0 }}>
          <Box className="IntroductionWrapper" width={[1]} sx={{ p: 2 }}>
            <Introduction />
          </Box>

          <Box className="researchList" sx={{ p: 0, maxWidth: "100%" }}>
            <Box className="CategoryBadgeWrapper" width={[1]} sx={{ px: 1 }}>
              {this.state.categories.map((t) => {
                const color: { color: string; bg: string } = tagMapColors.get(
                  t
                )!;
                return (
                  <Box
                    onClick={() => this.setState({ filter: t })}
                    sx={{
                      cursor: "pointer",
                      display: "inline-block",
                      margin: 1,
                    }}
                  >
                    <CategoryBadge
                      title={t}
                      color={color.color}
                      bg={color.bg}
                    />
                  </Box>
                );
              })}
            </Box>

            {/* TODO: This should be replaced with `<SearchBox />` later */}
            <Box
              className="SearchBox"
              sx={{ textAlign: "right", my: 0, mx: 1 }}
            >
              <Input
                className="SearchBoxInput"
                sx={{ maxWidth: "360px", display: "inline-block" }}
                placeholder="search"
                value={this.state.filter}
                onChange={(e) =>
                  this.setState({ filter: e.currentTarget.value })
                }
              />
            </Box>

            <Flex flexWrap="wrap" className="research-table">
              <Box
                className="cell head first"
                width={[1 / 5, 1 / 5, 1 / 2]}
                display={["none", "block", "block"]}
                onClick={() =>
                  this.setState({
                    sort: "name",
                    sortDir:
                      this.state.sort === "name"
                        ? this.state.sortDir === "asc"
                          ? "desc"
                          : "asc"
                        : "desc",
                  })
                }
              >
                <Text>Artikkelin nimi&nbsp;{this.renderSort("name")}</Text>
              </Box>
              <Box
                className="cell head"
                width={[1 / 5, 1 / 5, 1 / 8]}
                display={["none", "block", "block"]}
                onClick={() =>
                  this.setState({
                    sort: "date",
                    sortDir:
                      this.state.sort === "date"
                        ? this.state.sortDir === "asc"
                          ? "desc"
                          : "asc"
                        : "desc",
                  })
                }
              >
                <Text>Päivämäärä&nbsp;{this.renderSort("date")}</Text>
              </Box>
              <Box
                className="cell head"
                width={[1 / 5, 1 / 5, 1 / 8]}
                display={["none", "block", "block"]}
                onClick={() =>
                  this.setState({
                    sort: "citations",
                    sortDir:
                      this.state.sort === "citations"
                        ? this.state.sortDir === "asc"
                          ? "desc"
                          : "asc"
                        : "desc",
                  })
                }
              >
                <Text>Citations&nbsp;{this.renderSort("citations")}</Text>
              </Box>
              <Box
                className="cell head"
                width={[1 / 5, 1 / 5, 1 / 8]}
                display={["none", "block", "block"]}
                onClick={() =>
                  this.setState({
                    sort: "if",
                    sortDir:
                      this.state.sort === "if"
                        ? this.state.sortDir === "asc"
                          ? "desc"
                          : "asc"
                        : "desc",
                  })
                }
              >
                <Text>IF&nbsp;{this.renderSort("if")}</Text>
              </Box>
              <Box
                className="cell head"
                width={[1 / 5, 1 / 5, 1 / 8]}
                display={["none", "block", "block"]}
                onClick={() =>
                  this.setState({
                    sort: "tags",
                    sortDir:
                      this.state.sort === "tags"
                        ? this.state.sortDir === "asc"
                          ? "desc"
                          : "asc"
                        : "desc",
                  })
                }
              >
                <Text>Tags&nbsp;{this.renderSort("tags")}</Text>
              </Box>
              {this.state.current
                .sort((p1, p2) => {
                  if (
                    typeof p1[this.state.sort] === "number" &&
                    typeof p2[this.state.sort] === "number"
                  ) {
                    const sort =
                      p1[this.state.sort] > p2[this.state.sort]
                        ? 1
                        : p1[this.state.sort] < p2[this.state.sort]
                        ? -1
                        : 0;
                    return this.state.sortDir === "asc" ? sort : sort * -1;
                  }
                  try {
                    const sort = ((p1[this.state.sort] || "") as any).compareTo(
                      p2[this.state.sort] || ""
                    );
                    return this.state.sortDir === "asc" ? sort : sort * -1;
                  } catch {
                    try {
                      const sort = ((p1[this.state.sort] ||
                        "") as any).localeCompare(p2[this.state.sort] || "");
                      return this.state.sortDir === "asc" ? sort : sort * -1;
                    } catch {
                      return -1;
                    }
                  }
                })
                .filter(
                  (c, i) =>
                    i >= this.state.page * this.state.perPage &&
                    i < (this.state.page + 1) * this.state.perPage
                )
                .map((publication, i) => (
                  <React.Fragment key={i}>
                    {/*FULL SIZE*/}
                    <Box
                      className="cell first"
                      width={1 / 2}
                      display={["none", "none", "block"]}
                    >
                      <Box>
                        <Box>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={publication.link}
                          >
                            {publication.name}
                          </a>
                        </Box>
                        <Box sx={{ pt: 1 }}>{publication.authors}</Box>
                      </Box>
                    </Box>
                    <Box
                      className="cell"
                      width={1 / 8}
                      display={["none", "none", "block"]}
                    >
                      <Text>{publication.date}</Text>
                    </Box>
                    <Box
                      className="cell"
                      width={1 / 8}
                      display={["none", "none", "block"]}
                    >
                      <Text>
                        {" "}
                        Cited by: {publication.citations}
                        <br />
                        n={publication.n}
                      </Text>
                    </Box>
                    <Box
                      className="cell"
                      width={1 / 8}
                      display={["none", "none", "block"]}
                    >
                      <Text>
                        {publication.if}
                        <br />
                        {publication.journal}
                      </Text>
                    </Box>
                    <Box
                      className="cell"
                      width={1 / 8}
                      display={["none", "none", "block"]}
                    >
                      <Box>
                        {publication.tags.map((t, i2) => {
                          const color: {
                            color: string;
                            bg: string;
                          } = tagMapColors.get(t)!;
                          return (
                            <Box
                              key={i2}
                              sx={{ display: "inline-block", margin: "3px" }}
                            >
                              <CategoryBadge
                                title={t}
                                color={color.color}
                                bg={color.bg}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                    {/*MIDDLE SIZE*/}
                    <Box
                      className="cell first no-border"
                      width={3 / 5}
                      display={["none", "block", "none"]}
                    >
                      <Text>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={publication.link}
                        >
                          {publication.name}
                        </a>
                      </Text>
                    </Box>
                    <Box
                      className="cell no-border"
                      width={1 / 5}
                      display={["none", "block", "none"]}
                    >
                      <Text>{publication.if}</Text>
                    </Box>
                    <Box
                      className="cell no-border"
                      width={1 / 5}
                      display={["none", "block", "none"]}
                    >
                      <Box>
                        {publication.tags.map((t, i2) => {
                          const color: {
                            color: string;
                            bg: string;
                          } = tagMapColors.get(t)!;
                          return (
                            <Box
                              key={i2}
                              sx={{ display: "inline-block", margin: "3px" }}
                            >
                              <CategoryBadge
                                title={t}
                                color={color.color}
                                bg={color.bg}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>

                    <Box
                      className="cell"
                      width={1 / 5}
                      display={["none", "block", "none"]}
                    >
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ textAlign: "left" }}>
                          {publication.authors}
                        </Text>
                        <Text style={{ textAlign: "right" }}>
                          n={publication.n}
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      className="cell"
                      width={1 / 5}
                      display={["none", "block", "none"]}
                    >
                      <Text>Cited by: {publication.citations}</Text>
                    </Box>
                    <Box
                      className="cell"
                      width={1 / 5}
                      display={["none", "block", "none"]}
                    >
                      <Text>{publication.date}</Text>
                    </Box>
                    <Box
                      className="cell"
                      width={2 / 5}
                      display={["none", "block", "none"]}
                    >
                      <Text>&nbsp;</Text>
                    </Box>
                    {/*SMALL SIZE*/}
                    <Box
                      className="cell first no-border"
                      width={3 / 4}
                      display={["block", "none", "none"]}
                    >
                      <Text>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={publication.link}
                        >
                          {publication.name}
                        </a>
                      </Text>
                    </Box>
                    <Box
                      className="cell no-border"
                      width={1 / 4}
                      display={["block", "none", "none"]}
                    >
                      <Text>
                        {publication.if}
                        <br />
                        {publication.journal}
                      </Text>
                    </Box>

                    <Box
                      className="cell first no-border"
                      width={1 / 4}
                      display={["block", "none", "none"]}
                    >
                      <Text>{publication.authors}</Text>
                    </Box>
                    <Box
                      className="cell no-border"
                      width={1 / 4}
                      display={["block", "none", "none"]}
                    >
                      <Text>Cited by: {publication.citations}</Text>
                    </Box>
                    <Box
                      className="cell no-border"
                      width={1 / 4}
                      display={["block", "none", "none"]}
                    >
                      <Text>n={publication.n}</Text>
                    </Box>
                    <Box
                      className="cell no-border"
                      width={1 / 4}
                      display={["block", "none", "none"]}
                    >
                      <Text>{publication.date}</Text>
                    </Box>

                    <Box
                      className="cell first"
                      width={1}
                      display={["block", "none", "none"]}
                    >
                      <Box>
                        {publication.tags.map((t, i2) => {
                          const color: {
                            color: string;
                            bg: string;
                          } = tagMapColors.get(t)!;
                          return (
                            <Box
                              key={i2}
                              sx={{ display: "inline-block", margin: "3px" }}
                            >
                              <CategoryBadge
                                title={t}
                                color={color.color}
                                bg={color.bg}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  </React.Fragment>
                ))}
            </Flex>

            <Box className="pagination-controls">
              <Flex
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box width={[1, 1 / 4, 1 / 4]}>
                  Näytetään rivit {this.state.perPage * this.state.page + 1} -{" "}
                  {Math.min(
                    this.state.current.length,
                    this.state.perPage * (1 + this.state.page)
                  )}{" "}
                  (yhteensä {this.state.current.length})
                </Box>
                <Box width={[1, 3 / 4, 3 / 4]} style={{ textAlign: "right" }}>
                  <Button
                    onClick={() =>
                      this.setState({ page: Math.max(0, this.state.page - 1) })
                    }
                  >
                    Edellinen
                  </Button>
                  {this.renderPages()}
                  <Button
                    onClick={() =>
                      this.setState({
                        page: Math.min(
                          this.state.page + 1,
                          Math.floor(
                            this.state.current.length / this.state.perPage
                          )
                        ),
                      })
                    }
                  >
                    Seuraava
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    );
  }

  renderSort(name: string) {
    if (this.state.sort === name) {
      if (this.state.sortDir === "desc") {
        return <span>&darr;</span>;
      } else {
        return <span>&uarr;</span>;
      }
    } else {
      return null;
    }
  }

  renderPages() {
    const buttons = [];
    for (let i = 0; i < this.state.current.length; i = i + this.state.perPage) {
      let page = Math.floor(i / this.state.perPage);
      buttons.push(
        <Button
          key={i}
          type={this.state.page === page ? "muted" : "primary"}
          onClick={() => this.setState({ page: page })}
        >
          {page + 1}
        </Button>
      );
    }
    return buttons;
  }
}
