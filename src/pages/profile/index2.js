/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Container,
  Button,
  Progress,
  Grid,
  Card,
} from "theme-ui";
import ImageUpload from "../../components/image-uploader";
import { useSelector } from "react-redux";

const RegistrationForm = () => {
  const userData = useSelector((state) => state.userDetails.userDetails);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Toggle the modal visibility
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const maxMeditationTime = 60; // Assuming 60 minutes as the max for meditation
  const maxDanaAmount = 5000; // Assuming 5000 as max for Dana Amount
  const maxIncome = 100000;

  function getMaritalStatusText(maritalStatus) {
    switch (maritalStatus) {
      case "SIGNATURE_ONLY":
        return "අත්සනට සිමා වූ";
      case "DIVORCED":
        return "දික්කසාද වී ඇත";
      case "SINGLE":
        return "අවිවාහක";
      default:
        return "Unknown marital status";
    }
  }

  function getSkinToneText(tone) {
    switch (tone) {
      case "DARK":
        return "අඳුරු පැහැ";
      case "LIGHT":
        return "තලෙළු පැහැ";
      case "BRIGHT":
        return "දීප්තිමත් පැහැ";
      case "VERY_BRIGHT":
        return "ඉතා දීප්තිමත් පැහැ";
      default:
        return "Unknown skin tone";
    }
  }

  function getExternalAttractivenessText(perception) {
    switch (perception) {
      case "NORMAL":
        return "සාමාන්‍ය පෙනුම";
      case "ATTRACTIVE":
        return "ආකර්ෂණිය";
      case "SUPER_ATTRACTIVE":
        return "ඉතා ආකර්ශනීය";
      default:
        return "ප්‍රකාශ කිරීමට අකමැති";
    }
  }
  function getDrugUsageText(response) {
    switch (response) {
      case "YES":
        return "ඔව්";
      case "OCCASIONALLY":
        return "ඉඳහිට";
      case "NO":
        return "නැත";
      default:
        return "Unknown response";
    }
  }

  function getEducationQualificationText(qualification) {
    switch (qualification) {
      case "NO":
        return "පාසල් අධ්‍යාපනය ලබා නැත";
      case "GRADE_5":
        return "5 ශ්‍රේණිය දක්වා";
      case "OL":
        return "සාමාන්‍ය පෙළ දක්වා";
      case "AL":
        return "උසස් පෙළ දක්වා";
      case "UNI":
        return "විශ්ව විද්‍යාල අධ්‍යාපනය";
      case "PHD":
        return "පශ්චාත් උපාධි";
      default:
        return "Unknown qualification";
    }
  }

  const getTextBasedOnValue = (value) => {
    switch (value) {
      case "NO":
        return "නැත";
      case "SMALL_TIME":
        return "සුළු වශයෙන් හදාරමි";
      case "BIG_TIME":
        return "තරඟ විභාග සඳහා හදාරා ඇත";
      case "BIG_TIME_PRACTICAL":
        return "සංකල්ප ප්‍රයෝගිකව භාවිතා කරමි";
      default:
        return "Unknown value";
    }
  };
  function getVehicleOwnershipText(ownership) {
    switch (ownership) {
      case "NO":
        return "වාහනයක් නොමැත";
      case "BIKE":
        return "මෝටර් බයිසිකලයක් ඇත";
      case "TUK":
        return "ට්‍රයි ෂෝ රථයක් ඇත";
      case "CAR":
        return "මෝටර් රථයක් ඇත";
      case "OTHER":
        return "වෙනත් වාහනයක් ඇත";
      default:
        return "Unknown vehicle ownership";
    }
  }
  function getHouseOwnershipText(ownership) {
    switch (ownership) {
      case "NO_HOUSE":
        return "නිවසක් නොමැත";
      case "PARENTS_HOUSE":
        return "දෙමව්පියන්ගේ නිවාසයක ජීවත් වේ";
      case "RENT_HOUSE":
        return "කුලී නිවාසයක ජීවත් වේ";
      case "OWN_HOUSE":
        return "මගේම නිවසක ජීවත් වේ";
      default:
        return "Unknown house ownership";
    }
  }

  const getTextBasedOnTime = (value) => {
    switch (value) {
      case "MORE_50":
        return "වසර 50ට වැඩි කාලයක්";
      case "MORE_40":
        return "වසර 40ට වැඩි කාලයක්";
      case "MORE_30":
        return "වසර 30ට වැඩි කාලයක්";
      case "MORE_20":
        return "වසර 20ට වැඩි කාලයක්";
      case "MORE_10":
        return "වසර 10ට වැඩි කාලයක්";
      case "MORE_5":
        return "වසර 5ට වැඩි කාලයක්";
      case "LESS_5":
        return "වසර 5ට අඩු කාලයක්";
      default:
        return "Unknown time";
    }
  };
  return (
    <Container sx={styles.container}>
      <Flex sx={styles.headerContainer}>
        <Box sx={styles.profileBox}>
          {/* Clickable Profile Image */}
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Clickable Profile Image */}
            <img
              src="https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ=w240-h480-rw"
              alt="Profile Avatar"
              sx={styles.avatar}
              onClick={handleDialogToggle} // Opens modal on click
              style={{ cursor: "pointer" }}
            />
            {/* Camera Icon Overlay */}
            <div
              onClick={handleDialogToggle}
              sx={styles.cameraIconContainer}
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://w7.pngwing.com/pngs/519/947/png-transparent-camera-computer-icons-graphy-camera-electronics-rectangle-photography-thumbnail.png"
                alt="Update Icon"
                sx={styles.cameraIcon}
              />
            </div>
          </div>
          <Heading as="h2">{`${userData.firstName} ${userData.lastName}`}</Heading>
          <Text sx={styles.subTitle}>
            {userData.buddhistPractice.descriptionOfYourSelf}
          </Text>
        </Box>
        {isDialogOpen && (
          <div
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              bg: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={handleDialogToggle} // Clicking outside closes the dialog
          >
            <div
              sx={{
                width: "400px",
                bg: "#fff",
                p: 4,
                borderRadius: "8px",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <ImageUpload userId={userData.id} imageType="profile" />

              {/* Close button */}
              <button
                onClick={handleDialogToggle}
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                &times;
              </button>
            </div>
          </div>
        )}
        <Box sx={styles.infoBox}>
          <Flex sx={styles.infoItem}>
            <Heading as="h3">නම</Heading>
            <Text>{`${userData.firstName} ${userData.lastName}`}</Text>
          </Flex>
          <Flex sx={styles.infoItem}>
            <Heading as="h3">උපන් දිනය</Heading>
            <Text>{userData.dateOfBirth}</Text>
          </Flex>
          <Flex sx={styles.infoItem}>
            <Heading as="h3">භාවය</Heading>
            <Text>{userData.gender}</Text>
          </Flex>
          <Flex sx={styles.infoItem}>
            <Heading as="h3">ලිපිනය</Heading>
            <Text>{userData.addresses[0].address}</Text>
          </Flex>
          <Button sx={styles.editButton}>Edit</Button>
        </Box>
      </Flex>
      <Flex sx={styles.statusContainer}>
        {/* Buddhist Practice Information */}
        <Box sx={styles.statusBox}>
          <Heading as="h4">බෞද්ධ හැදෑරීම</Heading>

          <Text>
            <strong>බෞද්ධ දර්ශනය වසර </strong>{" "}
            {getTextBasedOnTime(userData.buddhistPractice.timeInvestedOverall)}{" "}
            {" කාලයක් හදාරා ඇත"}
          </Text>
          <hr />
          <Card
            sx={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.16)",
              marginBottom: "20px",
            }}
          >
            <Text sx={{ borderBottom: "1px solid black" }}>
              <strong>භාවනා කල ප්‍රමාණ</strong>
            </Text>
            <br />
            <Text>
              <strong>කර්මස්ථාන අචාර්ය වරයා:</strong>{" "}
              {userData.buddhistPractice.meditationTeacher}
            </Text>
            <br />

            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>ආනාපාන සති:</strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.meditationAnaPanaSathiTime}
                  sx={styles.progress}
                />
              </Box>
              <Box
                sx={{
                  flex: 1,
                  p: 2,

                  justifyContent: "center",
                }}
              >
                <Text>
                  <strong>මෛත්‍රී :</strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.meditationMayithreeTime}
                  sx={styles.progress}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>සතර ඉරියවුවේ සිහිය:</strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.bodyAwarenessTime}
                  sx={styles.progress}
                />
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>වෙනත් භාවනා:</strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.meditationOtherTime}
                  sx={styles.progress}
                />
              </Box>
            </Box>
          </Card>

          <Card
            sx={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.16)",
              marginBottom: "20px",
            }}
          >
            <Text sx={{ borderBottom: "1px solid black" }}>
              <strong>සිල් රැකි ප්‍රමාණ</strong>
            </Text>
            <br />
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>පන්සිල්:</strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.seelaPansilTime}
                  sx={styles.progress}
                />
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>අටසිල්:</strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.seelaAtaSilTime}
                  sx={styles.progress}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>සිල්පද පහට අඩුවෙන්:</strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.seelaOtherTime}
                  sx={styles.progress}
                />
              </Box>
              <Box sx={{ flex: 1, p: 2 }}></Box>
            </Box>
          </Card>
          <Card
            sx={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.16)",
              marginBottom: "20px",
            }}
          >
            <Text sx={{ borderBottom: "1px solid black" }}>
              <strong>දාන දුන් ප්‍රමාණ:</strong>
            </Text>
            <br />
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>සතුන්ට දානය:</strong>
                </Text>
                <Progress
                  max={maxDanaAmount}
                  value={userData.buddhistPractice.danaAmountAnimals}
                  sx={styles.progress}
                />
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>මිනිසුන්ට දානය:</strong>
                </Text>
                <Progress
                  max={maxDanaAmount}
                  value={userData.buddhistPractice.danaAmountPeople}
                  sx={styles.progress}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1, p: 2 }}>
                <Text>
                  <strong>සංඝයාට දානය:</strong>
                </Text>
                <Progress
                  max={maxDanaAmount}
                  value={userData.buddhistPractice.danaAmountSangha}
                  sx={styles.progress}
                />
              </Box>
              <Box sx={{ flex: 1, p: 2 }}></Box>
            </Box>
          </Card>

          <Text>
            <strong>දේශනා වලට සවන් දුන් කාලය (මිනිත්තු):</strong>{" "}
            {userData.buddhistPractice.sermonListenTime}
          </Text>
          <hr />
          <Text>
            <strong>සවන් දෙන දේශකයන් වහන්සේලා පිලිබඳ විස්තර:</strong> <br />
            {userData.buddhistPractice.sermonSpeakersDetails}
          </Text>
          <hr />
          <Text>
            <strong>අභිධර්මය පිලිබඳ දැනුම:</strong>{" "}
            {getTextBasedOnValue(userData.buddhistPractice.knowledgeAbhiDhamma)}
          </Text>
        </Box>
        <Box sx={styles.statusBox}>
          <Heading as="h4">සමාජ තත්වය</Heading>
          <br />
          <Text>
            <strong>විවාහ තත්ත්වය:</strong>{" "}
            {getMaritalStatusText(userData.socialInformation.marriageStatus)}
          </Text>
          <hr />
          <Text>
            <strong>රැකියාව:</strong> {userData.socialInformation.occupation}
          </Text>
          <hr />
          <Text>
            <strong>උසස්ම අධ්‍යාපන සුදුසුකම:</strong>{" "}
            {getEducationQualificationText(
              userData.socialInformation.highestEducationQualification
            )}
          </Text>
          <hr />
          <Text>
            <strong>මාසික ආදායම:</strong> <br />
            {userData.socialInformation.monthlyIncome}
          </Text>
          <hr />
          <Text>
            <strong>නිවාස හිමිකාරීත්වය:</strong>{" "}
            {getHouseOwnershipText(userData.socialInformation.houseOwnership)}
          </Text>
          <hr />
          <Text>
            <strong>වාහන හිමිකාරීත්වය:</strong>{" "}
            {getVehicleOwnershipText(
              userData.socialInformation.vehicleOwnership
            )}
          </Text>
          <hr />
          <ImageUpload userId={userData.userId} imageType="REGULAR" />
        </Box>
      </Flex>
      <Flex sx={styles.statusContainer}>
        <Box sx={styles.statusBox}>
          <Heading as="h4">Health Information</Heading>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>උස: {userData.userHealthInformation.height} ft</Text>
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>බර: {userData.userHealthInformation.weight} kg</Text>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>භාහිර ආකර්ශනීය බව(ඔබේ තක්සේරුව):</strong>{" "}
                {getExternalAttractivenessText(
                  userData.userHealthInformation.physicalAttractiveness
                )}
              </Text>
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>සමේ පැහැය:</strong>{" "}
                {getSkinToneText(userData.userHealthInformation.skinTone)}
              </Text>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>මද්‍යසාර පානය:</strong>{" "}
                {getDrugUsageText(userData.userHealthInformation.drugUsage)}
              </Text>
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>දුම් පානය:</strong>{" "}
                {getDrugUsageText(userData.userHealthInformation.smoking)}
              </Text>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>බලාපොරොත්තු වන දරුවන් ගණන:</strong>{" "}
                {userData.userHealthInformation.kidsExpectancy}
              </Text>
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>සාමාන්‍ය සෞක්‍ය තත්වය:</strong>{" "}
                {userData.userHealthInformation.healthCondition}
              </Text>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, p: 2 }}>
              {" "}
              <Text>
                <strong>ශාරීරික දුබලතා:</strong>{" "}
                {userData.userHealthInformation.disability}
              </Text>
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>මානසික රෝග:</strong>{" "}
                {userData.userHealthInformation.mentalHealth}
              </Text>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>ජානමය රෝග:</strong>{" "}
                {userData.userHealthInformation.geneticRisks}
              </Text>
            </Box>
            <Box sx={{ flex: 1, p: 2 }}>
              <Text>
                <strong>විශේෂ දැනුම්දීම්:</strong>{" "}
                {userData.userHealthInformation.yourMessage}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

const styles = {
  avatar: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    width: "20px",
    height: "20px",
  },
  progress: {
    height: "10px",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
  },
  container: {
    py: 4,
    paddingTop: "100px",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileBox: {
    flex: 1,
    padding: 3,
    backgroundColor: "#f7f9fc",
    borderRadius: "8px",
    textAlign: "center",
  },
  infoBox: {
    flex: 2,
    padding: 3,
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
  },
  avatar: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
  subTitle: {
    color: "#555",
  },
  location: {
    color: "#777",
    marginBottom: "20px",
  },
  buttonGroup: {
    justifyContent: "center",
    marginBottom: "20px",
  },
  button: {
    mr: 2,
  },
  socialLinks: {
    textAlign: "left",
    padding: "10px",
  },
  infoItem: {
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  editButton: {
    mt: 3,
    alignSelf: "flex-start",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    mt: 4,
    textAlign: "center",
  },
  statusBox: {
    flex: 1,
    padding: 3,
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
    marginLeft: "10px",
    textAlign: "left",
  },
};

export default RegistrationForm;
