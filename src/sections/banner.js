import { jsx, Box, Container, Heading, Text, Button, Input } from "theme-ui";
import { rgba } from "polished";
import siteImages from "../resource/images";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateLoginBanner } from "../store/slice/homePageSclice";
import { backEndBaseUrl } from "../store/static-store";
import Swal from "sweetalert2";
import axios from "axios";
import {
  updateAuthDetails,
  updateToken,
  updateUserDetails,
  updateUserImages,
} from "../store/slice/userDetailSlice";
import {
  getUserDetails,
  loginUser,
  registerUser,
} from "../services/userService";

export default function Banner() {
  const loginBanner = useSelector((state) => state.homepage.login);
  const authDetail = useSelector((state) => state.userDetails.authDetails);
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const authDetails = useSelector((state) => state.userDetails.userDetails);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    try {
      let userResponse;
      if (loginBanner) {
        userResponse = await registerUser({ username, email, password });
        Swal.fire({
          icon: "success",
          title: "සාර්ථකයි...",
          text: "ලියාපදිංචිය සාර්ථකයි! ගිණුමට පිවිසෙන්න",
          footer: '<a href="#">ඇයි මෙහෙම වෙන්නේ?</a>',
        });
        dispatch(updateLoginBanner({ login: false }));
      } else {
        userResponse = await loginUser({ username, password });
        const { accessToken } = userResponse;
        dispatch(updateToken({ token: accessToken }));
        dispatch(updateAuthDetails({ authDetails: userResponse }));
        Swal.fire({
          icon: "success",
          title: "සාර්ථකයි...",
          text: "පිවිසීම සාර්ථකයි! ගිණුමට පිවිසෙන්න",
          footer: '<a href="#">ඇයි මෙහෙම වෙන්නේ?</a>',
        });

        try {
          const userDetails = await getUserDetails(
            userResponse.id,
            accessToken
          );
          dispatch(updateUserDetails({ userDetails }));
          router.push("/matching");
        } catch (error) {
          Swal.fire({
            title: "ඔබේ ගිණුම සම්පූර්ණ කරන්න",
            text: "ගැලපීම් සඳහා අවශ්‍යවන දත්ත ඇතුලත් කර නොමැත. කරුණා කර තොරතුරු ඇතුලත් කරන්න",
          });
          router.push("/registration");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      let errorMessage = loginBanner
        ? "ලියාපදිංචි කිරීම අසාර්ථකයි! ඔබේ අන්තර්ජාල සබඳතාවය හෝ වෙනත් තාක්ෂණික දෝෂ සඳහා පරීක්ෂා කර නැවත උත්සාහ කරන්න."
        : "පිවිසීම අසාර්ථකයි! ඔබේ අන්තර්ජාල සබඳතාවය හෝ වෙනත් තාක්ෂණික දෝෂ සඳහා පරීක්ෂා කර නැවත උත්සාහ කරන්න.";
      let footerMessage = "";

      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.username) {
          errorMessage = `පරිශීලක නාමය දෝෂයකි`;
          footerMessage = errorData.username;
        } else if (errorData.password) {
          errorMessage = `මුරපද දෝෂයකි`;
          footerMessage = `${footerMessage} හා ${errorData.password}`;
        } else if (errorData.message) {
          errorMessage = `ඇතුලත් කල දත්ත වල දෝෂයකි`;
          footerMessage = errorData.message;
        } else {
          footerMessage = "ඇයි මෙහෙම වෙන්න ?";
        }
      }

      Swal.fire({
        icon: "error",
        title: loginBanner ? "අසාර්ථකයි..." : "දෝෂයක්...",
        text: errorMessage,
        footer: `<a href="#">${footerMessage}</a>`,
      });
    }
  };

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            {authDetail === null || authDetail.id == -1 ? (
              <>
                {!loginBanner ? (
                  <>
                    <Heading as="h2" sx={styles.heroTitle}>
                      සාදරයෙන් නැවත පිළිගමු!
                    </Heading>
                    <Text as="p" sx={styles.desc}>
                      කරුණා කර ගිණුමට ඇතුල් වන්න.
                    </Text>

                    <Box as="form" onSubmit={handleSubmit} sx={styles.form}>
                      <Box sx={styles.inputGroup}>
                        <Input
                          onChange={handleChange}
                          sx={styles.input}
                          type="text"
                          id="username"
                          name="username"
                          placeholder="පරිශීලක නාමය"
                          value={formData.username}
                          required
                        />
                      </Box>
                      <Box sx={styles.inputGroup}>
                        <Input
                          onChange={handleChange}
                          sx={styles.input}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="මුරපදය"
                          value={formData.password}
                          required
                        />
                      </Box>
                      <Button
                        type="submit"
                        sx={styles.button}
                        variant="primary"
                      >
                        {"ඇතුල් වන්න"}
                      </Button>

                      <Text sx={styles.switchText}>
                        {"නව ගිණුමක් සාදන්න?"}{" "}
                        <Button
                          onClick={() =>
                            dispatch(updateLoginBanner({ login: !loginBanner }))
                          }
                          sx={styles.switchButton}
                          variant="link"
                        >
                          {"ලියාපදිංචි වන්න"}
                        </Button>
                      </Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box as="form" onSubmit={handleSubmit} sx={styles.form}>
                      <Heading as="h2" sx={styles.heroTitleFrontPage}>
                        දෙවියෙක් හා දිව්‍යාංගනාවක් සම වන විවාහය
                      </Heading>
                      <Text as="p" sx={styles.desc}>
                        &nbsp;&nbsp;&nbsp;&nbsp;ශ්‍රී ලංකාවේ ප්‍රථම බොදු ධාර්මික
                        මංගල සේවය. දැහැමි දිවි පෙවෙතක් සඳහා ලාංකික තරුණ තරුණියන්
                        සඳහා කාරුණික අත්වලක් වීමට අප සූදානම්. ඔබේ සංසාරගත
                        ප්‍රේමය හිමිකර ගැනීමට අදම ලියාපදිංචි වන්න.
                      </Text>
                      <Box sx={styles.inputGroup}>
                        <Input
                          onChange={handleChange}
                          sx={styles.input}
                          type="email"
                          id="email"
                          name="email"
                          placeholder="ඊමේල්"
                          value={formData.email}
                          required
                        />
                      </Box>
                      <Box sx={styles.inputGroup}>
                        <Input
                          onChange={handleChange}
                          sx={styles.input}
                          type="text"
                          id="username"
                          name="username"
                          placeholder="පරිශීලක නාමය"
                          value={formData.username}
                          required
                        />
                      </Box>
                      <Box sx={styles.inputGroup}>
                        <Input
                          onChange={handleChange}
                          sx={styles.input}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="මුරපදය"
                          value={formData.password}
                          required
                        />
                      </Box>
                      <Button
                        type="submit"
                        sx={styles.button}
                        variant="primary"
                      >
                        {"ලියාපදිංචි වන්න"}
                      </Button>
                      <Text sx={styles.switchText}>
                        {"දැනටමත් ගිණුමක් තිබේ?"}{" "}
                        <Button
                          onClick={() =>
                            dispatch(updateLoginBanner({ login: !loginBanner }))
                          }
                          sx={styles.switchButton}
                          variant="link"
                        >
                          {"ගිණුමට පිවිසෙන්න"}
                        </Button>
                      </Text>
                    </Box>
                  </>
                )}
              </>
            ) : (
              <>
                <Box as="form" onSubmit={handleSubmit} sx={styles.form}>
                  <Heading as="h2" sx={styles.heroTitle}>
                    යහපත් විවාහ දිවියකට බොදු උපදෙස්..
                  </Heading>
                 
                  <Box>
                    <Text as="p" sx={styles.desc2}>
                      1. <strong>සමානකාරත්වය:</strong>ඔබගේ සහකරු හෝ සහකාරිය සතු සමාන සමානකාරත්වය
                      වැදගත් වේ. දෙපිළේම සංවර්ධනය වූ ගුණ හා පිරිපුන් අවස්ථා
                      පරමාර්ථයකින් ජීවිතයට මූලික සෙවීම කළ යුතුය.
                    </Text>
                    <Text as="p" sx={styles.desc2}>
                      2. <strong>කරුණාව හා අනුකම්පා:</strong> ගෝත්‍රය, ආගමික හෝ
                      සමාජ තත්ත්වය පමණක් නොව, දුකෙහිදී පිහිටවීමට, ආදරය හා
                      සෙනෙහස සදාකාලීනව ගොඩනගන්නා අත්වැලක් සොයා ගන්න.
                    </Text>
                    <Text as="p" sx={styles.desc2}>
                      3. <strong>අන්නොන්ය ගෞරවය සහ විශ්වාසය:</strong> ඔබේ
                      සහකරු/සහකාරිය සමඟ සම්බන්ධතාවය තෘප්තිමත් කිරීමට ගෞරවය හා
                      විශ්වාසය සතුටින් ආරක්ෂා කරන්න. මෙය සමාජයේ සුවිසල්
                      කේන්ද්‍රය වන අතර, නිවැරැදි සම්බන්ධය සොයා ගැනීම ඔබේ සම්පූර්ණ
                      වගකීමක්.
                    </Text>
                    <Text as="p" sx={styles.desc2}>
                      4. <strong>එකිනෙකා සමග දියුණු වීම:</strong>{" "}
                      දෙදෙනාම තමාගේ සංවර්ධනය කර ගැනීමට අදාළව හා දෙදෙනාටම ප්‍රයෝජනවත් වැඩ
                      පිළිවෙලක් ලෙස සම්බන්ධතාවය පවත්වාගෙන යන්න.
                    </Text>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${siteImages.bannerBg.src}) no-repeat center top / cover`,
    backgroundSize: ["100%", null, null, null, "cover"],
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    minHeight: [null, null, null, null, "50vh", "100vh"],
  },
  bannerContent: {
    backgroundColor: rgba("#fff", 0.6),
    boxShadow: [
      "0px 10px 16px rgba(52, 61, 72, 0.12)",
      null,
      null,
      null,
      "none",
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      "20px",
      "30px",
      null,
      null,
      null,
      "30px 50px 60px",
      "50px 60px 90px",
    ],
    borderRadius: 20,
    m: ["110px 0 0", null, null, "110px auto 0", "60px 0 0", null, 0],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)":
      {
        maxWidth: 515,
        mt: 70,
        padding: "30px 50px 65px",
      },
  },
  heroTitle: {
    fontSize: [20, 20, 20, 20, , 4, 6],
    fontWeight: 700,
    letterSpacing: "heading",
    lineHeight: [1.4, null, null, null, null, null, 1.2],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)":
      {
        fontSize: 30,
      },
  },
  heroTitleFrontPage: {
    fontSize: [20, 20, 20, 20, , 4, 6],
    fontWeight: 700,
    textAlign: "center",
    letterSpacing: "heading",
    lineHeight: [1.4, null, null, null, null, null, 1.2],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)":
      {
        fontSize: 30,
      },
  },
  desc: {
    fontSize: [16, 17, 16, 20],
    lineHeight: [1.5, 1.5, 1.5, 1.6, 2, 1, 1.5],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)":
      {
        mt: 10,
      },
  },
  desc2: {
    fontSize: [14, 15, 14, 18],
    lineHeight: [1.5, 1.5, 1.5, 1.6, 2, 1, 1.5],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    "@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)":
      {
        mt: 10,
      },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginTop: "2px",
    marginBottom: "7px",
  },
  input: {
    borderRadius: "20px",
    height: "50px",
    fontSize: "16px",
    padding: "0 15px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    flex: "1",
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    width: "100%",
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ":focus": {
      outline: "0 none",
    },
  },
  switchText: {
    marginTop: 15,
    fontSize: 14,
    textAlign: "center",
  },
  switchButton: {
    color: "#0070f3",
    padding: 0,
    marginLeft: 5,
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    fontSize: 14,
  },
};
