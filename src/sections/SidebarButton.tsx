import { Box, Flex, IconButton } from "@chakra-ui/react";

type SideBarButtonProp = {
  text: string;
  buttonIcon: JSX.Element;
};
export const SidebarButton = ({ text, buttonIcon }: SideBarButtonProp) => {
  return (
    <>
      <Box
        as="a"
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
        mt="1rem"
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#FED7D7",
            color: "000000",
          }}
        >
          <IconButton
            mr="4"
            aria-label="Search database"
            fontSize="16"
            _groupHover={{
              color: "#E53E3E",
            }}
            icon={buttonIcon}
          />
          {text}
        </Flex>
      </Box>
    </>
  );
};
