import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  facebook,
  globe,
  linkedin,
  location,
  mail,
  phone,
  twitter,
} from "../assets/images";

const Footer = () => {
  const contact = [
    {
      text: "Kandaw, Mogok, Mandalay, Myanmar",
      icon: location,
      clickable: false,
      link: "#",
      styles: false,
    },
    {
      text: "job@varoonvalley.com",
      icon: mail,
      clickable: true,
      link: "mailto: job@varoonvalley.com",
      styles: true,
    },
    {
      text: "+959 458 311 581",
      icon: phone,
      clickable: false,
      link: "#",
      styles: false,
    },
  ];

  const social = [
    { text: "Facebook", icon: facebook, link: "#" },
    { text: "Linked In", icon: linkedin, link: "#" },
    { text: "Twitter", icon: twitter, link: "#" },
    { text: "varronvalley.com", icon: globe, link: "#" },
  ];

  const quick = [
    { text: "Home", link: "#" },
    { text: "Service", link: "#services" },
    { text: "About", link: "#about" },
    { text: "Contact", link: "#contact" },
  ];

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 4, lg: 4 }}
      maxWidth={{ base: "500px", md: "100%" }}
      margin={"auto"}
      spacing={3}
    >
      <Box textAlign={{ base: "left", lg: "center" }}>
        <Link href="#" style={{ textDecoration: "none" }}>
          <Box
            textAlign={"center"}
            width={{ base: "fit-content", lg: "100%" }}
            paddingTop={{ base: 0, md: 10 }}
            paddingBottom={3}
          >
            <Text fontSize={"xl"} color={"green.300"} fontWeight={"bold"}>
              Varoon
            </Text>
            <Text
              fontSize={"xl"}
              color={"green.300"}
              fontWeight={"bold"}
              lineHeight={0.5}
            >
              Valley
            </Text>
          </Box>
        </Link>
        <Text>&copy; {new Date().getFullYear()} Varoon Valley.</Text>
      </Box>
      <Box paddingTop={2}>
        <Heading as={"h3"} fontSize={"2xl"}>
          Social
        </Heading>
        {social.map((soc, idx) => (
          <Box key={idx} marginTop={2}>
            <Link href={soc.link}>
              <HStack>
                <Image
                  src={soc.icon}
                  alt={soc.text}
                  width={"24px"}
                  height={"24px"}
                />
                <Text>{soc.text}</Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Box>
      <Box paddingTop={2}>
        <Heading as={"h3"} fontSize={"2xl"}>
          Quick Links
        </Heading>
        {quick.map((qui, idx) => (
          <Box key={idx} marginTop={2}>
            <Link href={qui.link}>
              <HStack>
                <Text>{qui.text}</Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Box>
      <Box paddingTop={2}>
        <Heading as={"h3"} fontSize={"2xl"}>
          Contact
        </Heading>
        {contact.map((con, idx) => (
          <Box key={idx} marginTop={2}>
            <Link href={con.link}>
              <HStack>
                <Image
                  src={con.icon}
                  alt={con.text}
                  width={"24px"}
                  height={"24px"}
                />
                <Text
                  style={
                    con.styles
                      ? {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }
                      : {}
                  }
                >
                  {con.text}
                </Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Box>
    </SimpleGrid>
  );
};

export default Footer;
