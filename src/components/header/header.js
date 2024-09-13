import { jsx, Box, Container, MenuButton, Flex, Button } from "theme-ui";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Sticky from "react-stickynode";
import Logo from "../logo";
import { NormalLink, NavLink } from "../link";
import menuItems from "./header.data";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginBanner } from "../../store/slice/homePageSclice";
import { FaUserCircle } from "react-icons/fa";
import { clearAuthDetails, updateAuthDetails } from "../../store/slice/userDetailSlice";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const dispatch = useDispatch();
  const registerBanner = useSelector((state) => state.homepage.login);
  const authDetails = useSelector((state) => state.userDetail.authDetails);
  const userDetail = useSelector((state)=>state.userDetail.userDetails);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const logout = () => {
    // Handle logout logic, like clearing the auth details from the store
    dispatch(clearAuthDetails());
    router.push('/')
    setShowProfilePopup(false);
  };
  const viewAccount = () => {
    console.log(userDetail)
    if (userDetail.userId>0) {
      router.push('/profile')
      setShowProfilePopup(false);
    }else{
      Swal.fire({
        title: "ඔබේ ගිණුම සම්පූර්ණ කරන්න",
        text: "ගැලපීම් සඳහා අවශ්‍යවන දත්ත ඇතුලත් කර නොමැත. කරුණා කර තොරතුරු ඇතුලත් කරන්න",
      });
    }
    
    
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
                
                {authDetails ? (
                  <Box sx={styles.profileContainer}>
                    <FaUserCircle
                      onClick={toggleProfilePopup}
                      size="30px"
                      style={{ cursor: "pointer" }}
                    />
                    {showProfilePopup && !mobileMenu && (
                      
                      <Box sx={styles.profilePopup}>
                        <p>{authDetails.username}</p>
                        <p>{authDetails.email}</p>
                        <Button
                          variant="primaryMd"
                          sx={styles.logoutButton}
                          onClick={viewAccount}
                        >
                          View Account
                        </Button>
                        <Button
                          variant="primaryMd"
                          sx={styles.logoutButton}
                          onClick={logout}
                        >
                          Logout
                        </Button>
                      </Box>
                    )}
                    {showProfilePopup && mobileMenu && (
                      <Box sx={styles.profileContainer}>
                      {showProfilePopup && (
                        <Box
                          sx={[
                            styles.profileMenu,
                            { display: ["block", "block", "none"] }, // Show only on mobile
                          ]}
                        >
                          <p>{authDetails.username}</p>
                          <p>{authDetails.email}</p>
                          <Button
                            variant="primaryMd"
                            sx={styles.logoutButton}
                            onClick={viewAccount}
                          >
                            View Account
                          </Button>
                          
                          <Button
                            variant="primaryMd"
                            sx={styles.logoutButton}
                            onClick={logout}
                          >
                            Logout
                          </Button>
                        </Box>
                      )}
                    </Box>
                    )}
                  </Box>
                ) : (
                  <Button
                    sx={styles.joinNow}
                    onClick={() => {
                      router.push('/')
                      dispatch(updateLoginBanner({ login: !registerBanner }));
                      closeMobileMenu();
                    }}
                    variant="primaryMd"
                  >
                    {registerBanner ? "ගිණුමට පිවිසෙන්න" : "ලියාපදිංචි වන්න"}
                  </Button>
                )}
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose onClick={closeMobileMenu} size="20px" />
                </Button>
              ) : (
                <MenuButton
                  aria-label="Toggle Menu"
                  onClick={toggleMobileMenu}
                />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  profileContainer: {
    position: "relative",
    marginLeft: "auto",
  },
  profileMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "#fff",
    boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
    borderRadius: "8px",
    padding: "10px",
    width: "100%",
    zIndex: 100,
    p: {
      margin: "0 0 1px 0",
      fontWeight: "bold",
    },
  },
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
    "@media only screen and (max-width: 1000px)": { // Updated from 768px to 900px
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
            marginTop: 1,
          },
        },
        button: {
          marginTop: 4,
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
      textAlign:'center',
      margin: "0 20px",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      padding: "10px",
      borderRadius: "20px",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
        cursor: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        padding: "inherit",
        margin: "inherit",
        backgroundColor: "inherit",
        borderRadius: "inherit",
        "&:hover": {
          backgroundColor: "inherit",
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
  profileContainer: {
    position: "relative",
    marginLeft: "auto",
  },
  profilePopup: {
    position: "absolute",
    top: "40px",
    right: 0,
    backgroundColor: "#fff",
    boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
    borderRadius: "8px",
    padding: "10px",
    zIndex: 100,
    p: {
      margin: "0 0 10px 0",
      fontWeight: "bold",
    },
  },
  logoutButton: {
    mt:2,
    width: "100%",
    textAlign: "center",
  },
};
