import { Button, Stack, useColorModeValue } from "@chakra-ui/react";

const MobileNav = () => {
  return (
    <>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ base: "flex", md: "none" }}
        direction="column"
        spacing={4}
      >
        <Button>Business</Button>
        <Button>Entertainment</Button>
        <Button>Health</Button>
        <Button>Science</Button>
        <Button>Sports</Button>
        <Button>Technology</Button>
        <Button>Favorites</Button>
      </Stack>
    </>
  );
};

export default MobileNav;
