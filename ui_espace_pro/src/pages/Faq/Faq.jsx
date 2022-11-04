import React, { useEffect, useState } from "react";
import { Box, Container, Stack, SkeletonText, Flex, Link, Center, Icon } from "@chakra-ui/react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import { NotionRenderer } from "react-notion-x";
import Layout from "../../common/components/Layout";
import "react-notion-x/src/styles.css";
import "./notion.css";
import { _get } from "../../common/httpClient";
import { Breadcrumb } from "../../common/components/Breadcrumb";
import { setTitle } from "../../common/utils/pageUtils";

const mapId = {
  faq: "7e8a9c1a1ef54cb399f8ae50620f95ce",
};

const mapBc = {
  faq: [{ title: "Informations", to: "/informations" }, { title: "FAQ" }],
};

const AsLink = ({ children, ...rest }) => (
  <Link as={NavLink} display="inline-block" {...rest}>
    {children}
  </Link>
);

const NavItem = ({ icon, children, to, shoudBeActive, isSubItem, ...rest }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const Component = to ? AsLink : Center;
  return (
    <Flex
      align="center"
      cursor="pointer"
      color="inherit"
      _hover={{
        bg: "gray.100",
        color: "gray.900",
        borderLeft: "2px solid",
        borderColor: isSubItem ? "transparent" : "bluefrance",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      borderLeft={"2px solid"}
      borderColor={(isActive || shoudBeActive) && !isSubItem ? "bluefrance" : "transparent"}
      {...rest}
    >
      <Component px="4" pl="4" py="3" w="full" color={isActive || shoudBeActive ? "bluefrance" : "grey.800"} to={to}>
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: "gray.600",
            }}
            as={icon}
          />
        )}
        {children}
      </Component>
    </Flex>
  );
};

export default () => {
  let { params } = useRouteMatch();
  const pageId = mapId[params.id] || "7e8a9c1a1ef54cb399f8ae50620f95ce";

  const [isLoading, setIsLoading] = useState(true);
  const [recordMapNotion, setRecordMapNotion] = useState(null);

  useEffect(() => {
    const run = async () => {
      setIsLoading(true);
      const tmp = await _get(`/api/support/content/${pageId}`);
      setRecordMapNotion(tmp);
      setIsLoading(false);
    };
    run();
  }, [pageId]);

  setTitle(recordMapNotion?.pageTitle || "FAQ");

  return (
    <Layout>
      <Box w="100%" pt={[4, 8]} px={[1, 1, 12, 24]}>
        <Container maxW="xl">
          <Breadcrumb pages={[{ title: "Accueil", to: "/" }, ...(mapBc[params.id] || [{ title: "Informations" }])]} />

          <Flex mt={8}>
            <Box w="22%" color="#1E1E1E" pt={[2, 4]}>
              <NavItem to={"/informations"}>FAQ</NavItem>
            </Box>
            <Box pt={[2, 4]} flexGrow={1} pl={16}>
              {isLoading && (
                <Stack mt={20}>
                  <SkeletonText mt="4" noOfLines={10} spacing="4" />
                </Stack>
              )}
              {!isLoading && (
                <NotionRenderer
                  recordMap={recordMapNotion}
                  fullPage={true}
                  darkMode={false}
                  disableHeader={true}
                  rootDomain={process.env.REACT_APP_BASE_URL}
                  bodyClassName="notion-body"
                />
              )}
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};
