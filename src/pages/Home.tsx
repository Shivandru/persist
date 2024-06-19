import { Box, Flex, Heading } from "@chakra-ui/react";
import { IoMdBriefcase } from "react-icons/io";
import { SidebarButton } from "../sections/SidebarButton";
import { FaDesktop, FaPlusCircle, FaFilm } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import NewsList from "../components/NewsList";
const Home = () => {
  return (
    <>
      <Flex w="95%" h="100vh" border="1px solid black" m="auto">
        <Box
          h="auto"
          w="20%"
          border={"1px solid black"}
          display={{ base: "none", md: "block" }}
        >
          <Heading textAlign={"center"} fontSize={"1.5rem"} mt="2rem" mb="2rem">
            Category
          </Heading>
          <SidebarButton text="Business" buttonIcon={<IoMdBriefcase />} />
          <SidebarButton text="Entertainment" buttonIcon={<FaFilm />} />
          <SidebarButton text="Health" buttonIcon={<FaPlusCircle />} />
          <SidebarButton
            text="Sports"
            buttonIcon={<MdOutlineSportsBaseball />}
          />
          <SidebarButton text="Technology" buttonIcon={<FaDesktop />} />
        </Box>
        <Box h="100%" w="80%" border={"1px solid red"} m={{ base: "auto" }}>
          <NewsList />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
