import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  Select,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { IoMdHeart } from "react-icons/io";
import MobileNav from "../sections/MobileNav";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src="https://img.freepik.com/free-vector/gradient-breaking-news-logo-design_23-2151274659.jpg?t=st=1718729682~exp=1718733282~hmac=7ad227c8c8bad7176fbaabeb1aa287dfe1f6236fee66c52d78a1a4c62e8c9dba&w=740"
            w="2.5rem"
            onClick={() => navigate("/")}
            cursor={"pointer"}
          />

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            justify={"space-between"}
            w="25rem"
          >
            <Select placeholder="category" w="10rem">
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </Select>
            <Button
              bg="#E53E3E"
              color="#ffffff"
              _hover={{
                background: "white",
                color: "#E53E3E",
              }}
              leftIcon={<IoMdHeart />}
              onClick={() => navigate("/favorites")}
            >
              Favorites
            </Button>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0.5 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <IconButton
                bg="#E53E3E"
                color="#ffffff"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </InputRightElement>
            <Input type="text" placeholder="search..." />
          </InputGroup>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
