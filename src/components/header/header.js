import { jsx, Box, Container, MenuButton, Flex, Button } from "theme-ui";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Sticky from "react-stickynode";
import Logo from "../logo";
import { NormalLink, NavLink } from "../link";
import menuItems from "./header.data";
import { useDispatch, useSelector } from "react-redux";
import { markLogin } from "../../store/slice/homePageSclice";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const registerBanner = useSelector((state) => state.homepage.login);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          sx={styles.header}
          className={mobileMenu ? "is-mobile-menu" : ""}
        >
          <Container>
            <Box sx={styles.headerInner}>
              <Logo />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? "navbar active" : "navbar"}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? "active" : ""}
                >
                  {menuItems.map(({ path, label }, i) => (
                    <li key={i} className="nav-item">
                      <NavLink
                        path={path}
                        label={label}
                        onClick={closeMobileMenu}
                        isScroll={!path.startsWith("/")}
                      />
                    </li>
                  ))}
                </Box>
                <Button
                  sx={styles.joinNow}
                  onClick={() => dispatch(markLogin({ login: !registerBanner }))}
                  variant="primaryMd"
                >
                  {registerBanner ? "ගිණුමට පිවිසෙන්න" : "ලියාපදිංචි වන්න"}
                </Button>
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose onClick={closeMobileMenu} size="20px" />
                </Button>
              ) : (
                <MenuButton aria-label="Toggle Menu" onClick={toggleMobileMenu} />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}


const styles = {
  headerWrapper: {
    backgroundColor: "transparent",
    ".is-sticky": {
      header: {
        backgroundColor: "#fff",
        boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",
        py: [10],
      },
    },
  },
  header: {
    position: "fixed",
    left: 0,
    right: 0,
    py: [20],
    transition: "all 0.3s ease-in-out 0s",
    "&.is-mobile-menu": {
      backgroundColor: "#fff",
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media only screen and (max-width: 768px)": {
      ".navbar": {
        position: "absolute",
        top: "100%",
        backgroundColor: "#fff",
        width: "100%",
        left: 0,
        p: "20px 30px",
        display: "block",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        opacity: 0,
        visibility: "hidden",
        transition: "all 0.3s ease-in-out 0s",
        "&.active": {
          opacity: 1,
          visibility: "visible",
        },
        ul: {
          display: "block",
          "li + li": {
            marginTop: 5,
          },
        },
        button: {
          marginTop: 8,
          width: "100%",
        },
      },
    },
  },
  navbar: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    marginLeft: "auto",
    p: 0,
    ".nav-item": {
  cursor: "pointer",
  fontWeight: 900,
  fontSize: 20,
  padding: 0,
  margin: "0 20px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  padding: "10px",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  // Targeting <a> elements within .nav-item to reset their styles
  "a": {
    textDecoration: "none", // Remove underline
    color: "inherit", // Inherit color from parent
    cursor: "inherit", // Inherit cursor from parent
    fontWeight: "inherit", // Inherit font weight from parent
    fontSize: "inherit", // Inherit font size from parent
    padding: "inherit", // Inherit padding from parent
    margin: "inherit", // Inherit margin from parent
    backgroundColor: "inherit", // Inherit background color from parent
    borderRadius: "inherit", // Inherit border radius from parent
    "&:hover": {
      backgroundColor: "inherit", // Inherit hover background color from parent
    },
  },
},
".active": {
  color: "primary",
},

  },
  joinNow: {
    marginLeft: "auto",
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
  },
};
