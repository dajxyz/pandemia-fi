import React from "react";
import { BounceLoader } from "react-spinners";
import { Flex, Text } from "rebass";

const Spinner: React.FunctionComponent = () => (
  <BounceLoader size={40} color={"#72a0ed"} />
);

export const SpinnerBlock: React.FunctionComponent = ({ children }) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    p={4}
  >
    <Spinner />
    {!!children && (
      <Text>
        <>{children}</>
      </Text>
    )}
  </Flex>
);

export default Spinner;
