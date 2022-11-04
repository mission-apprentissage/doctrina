import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

/**
 * @description Beta layout component.
 * @param {JSX.Element} children
 * @return {JSX.Element}
 */
const Layout = ({ children, ...rest }) => {
  return (
    <Container maxW="full" minH="100vh" d="flex" flexDirection="column" p={0} {...rest}>
      <Header />
      <NavigationMenu />
      <Box minH={"60vh"} flexGrow="1">
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
