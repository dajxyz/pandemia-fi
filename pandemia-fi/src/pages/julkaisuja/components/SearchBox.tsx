import React from "react";
import { Box } from "rebass";
import { Input } from "theme-ui";

/**
 * SearchBox for the research list filtering
 *
 * TODO: `<SearchBox />` component placeholder for later improvements
 */
const SearchBox = () => {
  return (
    <>
      <Box className="SearchBox" sx={{ textAlign: "right", my: 0, mx: 1 }}>
        <Input
          className="SearchBoxInput"
          sx={{ maxWidth: "360px", display: "inline-block" }}
          placeholder="search"
          // TODO: Local state is problematic on this part of code, and should be rewritten
          // value={this.state.filter}
          // onChange={(e) => this.setState({ filter: e.currentTarget.value })}
        />
      </Box>
      ;
    </>
  );
};

export default SearchBox;
