import { Container } from "@chakra-ui/react";
import NewsCard from "../sections/NewsCard";

const NewsList = () => {
  return (
    <Container maxW={"7xl"} h="100%" border={"1px solid black"}>
      <NewsCard />
    </Container>
  );
};

export default NewsList;
