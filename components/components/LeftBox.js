import {
  Flex,
  Input,
  Button,
  Text,
  Heading,
  Box,
  Divider,
  Tag,
  Code,
} from "@chakra-ui/react";

import { Fragment } from 'react'

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const LeftBox = ({
  handleTest,
  data,
  prob2,
  string,
  strings,
  setStrings,
  handleReset,
  handleTextChange,
  handleSimulation,
  simulating,
  count,
  regex1,
  regex2,
}) => {
  return (
    <>
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "30em"]}
        mr={[0, 0, 0, 0, 0, 24]}
        mt={[14, 14, 16, 16, 16, 0]}
      >
        <Flex align="flex-end" justify="space-between">
          <Heading variant="title">DFA Simulator</Heading>
          <Code fontSize={["0.5em", null, "0.6em", null, null, "0.6em"]}>
            BCS34 Group 3
          </Code>
        </Flex>

        <Divider mb="6" />

        <Box>
          <form onSubmit={handleTest}>
            <Flex align="center">
              <Heading>Input String:</Heading>
              <Flex align="center"  wrap="wrap">
                {data.length > 0 && data.map((item, index) => (
                  <Fragment key={index}>
                    <Button
                      style={{ marginBottom: '4px', marginTop: '4px' }}
                      variant="data"
                      rightIcon={
                        item.result === "Valid" ? (
                          <Box color="teal.300">
                            <FaCheck />
                          </Box>
                        ) : (
                          item.result === "Invalid" && (
                            <Box color="pink.300">
                              <ImCross />
                            </Box>
                          )
                        )
                      }
                    >
                      {`${strings[index]} - ${item.result}`}
                    </Button>
                  </Fragment>
                ))}
              </Flex>
            </Flex>
            <Input
              maxLength="500"
              fontSize={["0.7em", "0.7em", "0.9em"]}
              my={3}
              placeholder={!prob2 ? "e.g. babbabab" : "e.g. 0110101"}
              value={string}
              onChange={handleTextChange}
            />
            <Flex justify="space-between" align="center">
              <Flex>
                <Button type="submit" disabled={simulating} onClick={() => setStrings([...strings, string])}>
                  Validate
                </Button>
                <Button
                  isLoading={simulating}
                  loadingText="simulating..."
                  spinnerPlacement="start"
                  onClick={handleSimulation}
                  ml={2}
                  disabled={simulating}
                >
                  Simulate
                </Button>
                <Button
                  variant="clear"
                  onClick={handleReset}
                  disabled={simulating}
                >
                  Clear
                </Button>
              </Flex>
              <Text
                fontWeight="semibold"
                fontSize={["0.7em", "0.7em", "0.9em"]}
              >
                Limit: {count}/500
              </Text>
            </Flex>
            <Divider my="6" />
            {/* DIVIDER OF LEFT CONTAINER */}
            <Flex
              align="center"
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              // justify="space-between"
            >
              <Heading>Regular Expression:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? regex1 : regex2}
              </Tag>
            </Flex>
            <Flex
              my={2}
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              align="center"
            >
              <Heading>Language Accepted:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? "[a, b]" : "[0, 1]"}
              </Tag>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LeftBox;
