import {
  Button,
  color,
  Flex,
  Heading,
  Input,
  Text,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { colors } from "./Colors";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const LandinPage = () => {
  const [emailAddress, setEmailAddress] = useState("");
  return (
    <Flex w="100%" gridGap="48" h="100%" alignItems="center" flexWrap="wrap">
      <Flex direction="column" justify="center" height="100vh" w="50%">
        <Flex direction="column" backgroundColor="red">
          <Text
            fontSize="md"
            fontWeight="medium"
            color={colors.secondaryColor}
            letterSpacing="wide"
          >
            Welcome to the
          </Text>
          <Heading fontSize="3xl" fontWeight="black">
            Nerdy Club
          </Heading>
          <Text fontSize="md" fontWeight="medium">
            Register and be part of our wonderful community.
          </Text>
        </Flex>

        <Flex height="12" direction="row" gridGap="5" mt="14">
          <FormControl>
            <Input
              width="xl"
              border="none"
              backgroundColor="#DBDBDB"
              height="100%"
              placeholder="example@gmail.com"
              fontSize="sm"
              fontWeight="bold"
              focusBorderColor={colors.secondaryColor}
              value={emailAddress}
              type="email"
              onChange={(event) => setEmailAddress(event.target.value)}
              isRequired
            ></Input>
            <Button
              w="30%"
              height="100%"
              backgroundColor={colors.primaryColor}
              textColor="white"
              fontSize="sm"
              letterSpacing="wide"
              _hover={{ backgroundColor: `${colors.btnHover}` }}
              isDisabled={!emailAddress ? true : false}
            >
              Request Access
            </Button>
          </FormControl>
        </Flex>
        <Text fontSize="sm" mt="2.5" color={colors.secondaryText}>
          This is the private club you only get access through the invitation by
          the admin.
        </Text>
        <Link href="/" maxW="10%">
          <a>
            <Text
              fontSize="sm"
              mt="5"
              color={colors.primaryColor}
              fontWeight="bold"
              maxW="xs"
            >
              Learn more about us
            </Text>
          </a>
        </Link>
      </Flex>
      {/* he */}
      <Flex>
        <Image src="/landing.svg" width="400" height="300" />
      </Flex>
    </Flex>
  );
};

export default LandinPage;
