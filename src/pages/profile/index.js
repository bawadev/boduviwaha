/** @jsxImportSource theme-ui */
/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "../../sections/gallery";
import { deleteImage, getUserImagesByUser, getUserImageVisibilityByUser } from "../../services/apiService";
import {
  updateUserImages,
  updateUserImageVisibility,
  updateUserProfileImage,
} from "../../store/slice/userDetailSlice";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const RegistrationForm = () => {
  const userData = useSelector((state) => state.userDetails.userDetails);
  const userImageData = useSelector((state) => state.userDetails.userImages);
  const userToken = useSelector((state) => state.userDetails.token);
  const userProfileImageData = useSelector(
    (state) => state.userDetails.userProfileImage
  );
  const userImageVisibility = useSelector((state) => state.userDetails.userImageVisibility);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    console.log(userImageData.isLoaded);
    if (userData.userId) {
      getUserImageVisibilityByUser(userData.userId, userToken).then((value) => {
        console.log("llllllllllllllll" + userImageVisibility);
        console.log(value);
        if (value != null) {
          dispatch(updateUserImageVisibility({ userImageVisibility: value }));
        }
      });
    }
    
    
    if (!userImageData.isLoaded && userToken) {
      getUserImagesByUser(userData.userId, userToken).then((data) => {
        data.map((image) => {
          console.log(image.imageType);
          if (image.imageType == "REGULAR") {
            dispatch(
              updateUserImages({
                actionType: "ADD",
                image: {
                  id: image.id,
                  image: `data:image/png;base64,${image.imageData}`,
                },
              }) 
            );
          } else {
            dispatch(
              updateUserProfileImage({
                userProfileImage: { isLoaded: true, image: image.imageData },
              })
            );
          }
        });
      });
    }
  }, []); //

  const deleteUserImage = (imageId) => {
    try {
      deleteImage(imageId, userToken);
      dispatch(updateUserImages({ imageId, actionType: "DELETE_ONE" }));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "අසාර්ථකයි",
        text: "චායා රූපය ඉවත් කිරීම අසාර්ථකයි. නැවත ගිණුමට ඇතුල් වී උත්සහ කරන්න",
      });
    }
  };

  const maxMeditationTime = 60;
  const maxDanaAmount = 5000;
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
        return "නොදන්නා";
    }
  };

  return (
    <Container sx={styles.container}>
      <Flex sx={styles.headerContainer}>
        <Box sx={styles.profileBox}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src={`data:image/png;base64,${userProfileImageData.image}`}
              alt="Profile Avatar"
              sx={styles.avatar}
              onClick={handleDialogToggle}
              style={{
                cursor: "pointer",
                filter: `blur(${(100 - userImageVisibility) / 10}px)`,
              }}
            />
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
          <Heading
            as="h2"
            sx={styles.userName}
          >{`${userData.firstName} ${userData.lastName}`}</Heading>
          <br />
          <Text sx={styles.subTitle}>
            {userData.buddhistPractice.descriptionOfYourSelf}
          </Text>
        </Box>
        <Box sx={styles.infoBox}>
          <Grid columns={[1, 2]} gap={2}>
            <Box>
              <Heading as="h3">නම</Heading>
              <Text>{`${userData.firstName} ${userData.lastName}`}</Text>
            </Box>
            <Box>
              <Heading as="h3">උපන් දිනය</Heading>
              <Text>{userData.dateOfBirth}</Text>
            </Box>
            <Box>
              <Heading as="h3">භාවය</Heading>
              <Text>{userData.gender}</Text>
            </Box>
            <Box>
              <Heading as="h3">ලිපිනය</Heading>
              <Text>{userData.addresses[0].address}</Text>
            </Box>
          </Grid>
          <Button sx={styles.editButton} onClick={()=>router.push("/updation")}>Edit</Button>
        </Box>
      </Flex>

      <Grid columns={[1, null, 2]} gap={4} sx={styles.statusContainer}>
        <Box sx={styles.statusBox}>
          <Heading as="h2">බෞද්ධ හැදෑරීම</Heading>
          <br />

          <Card sx={styles.card}>
            <Text sx={styles.normalText}>
              <strong>
                <u>බෞද්ධ දර්ශනය වසර </u>
              </strong>
              {getTextBasedOnTime(
                userData.buddhistPractice.timeInvestedOverall
              )}
              {" කාලයක් හදාරා ඇත"}
            </Text>
            <br />
            <br />
            <Text sx={styles.normalText}>
              <strong>
                <u>කර්මස්ථාන අචාර්ය වරයා</u>
              </strong>
              {"    "}
              {userData.buddhistPractice.meditationTeacher}
            </Text>
          </Card>

          <Card sx={styles.card}>
            <Heading as="h3">භාවනා කල ප්‍රමාණ</Heading>
            <br />
            <Grid columns={[1, 2]} gap={2}>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>ආනාපාන සති</u>
                  </strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.meditationAnaPanaSathiTime}
                  sx={styles.progress}
                />
              </Box>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>මෛත්‍රී </u>
                  </strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.meditationMayithreeTime}
                  sx={styles.progress}
                />
              </Box>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>සතර ඉරියවුවේ සිහිය</u>
                  </strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.bodyAwarenessTime}
                  sx={styles.progress}
                />
              </Box>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>වෙනත් භාවනා</u>
                  </strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.meditationOtherTime}
                  sx={styles.progress}
                />
              </Box>
            </Grid>
          </Card>

          <Card sx={styles.card}>
            <Heading as="h3">සිල් රැකි ප්‍රමාණ</Heading>
            <br />
            <Grid columns={[1, 2]} gap={2}>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>පන්සිල්</u>
                  </strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.seelaPansilTime}
                  sx={styles.progress}
                />
              </Box>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>අටසිල්</u>
                  </strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.seelaAtaSilTime}
                  sx={styles.progress}
                />
              </Box>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>සිල්පද පහට අඩුවෙන්</u>
                  </strong>
                </Text>
                <Progress
                  max={maxMeditationTime}
                  value={userData.buddhistPractice.seelaOtherTime}
                  sx={styles.progress}
                />
              </Box>
            </Grid>
          </Card>

          <Card sx={styles.card}>
            <Heading as="h3">දාන දුන් ප්‍රමාණ</Heading>
            <br />
            <Grid columns={[1, 2]} gap={2}>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>සතුන්ට දානය</u>
                  </strong>
                </Text>
                <Progress
                  max={maxDanaAmount}
                  value={userData.buddhistPractice.danaAmountAnimals}
                  sx={styles.progress}
                />
              </Box>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>මිනිසුන්ට දානය</u>
                  </strong>
                </Text>
                <Progress
                  max={maxDanaAmount}
                  value={userData.buddhistPractice.danaAmountPeople}
                  sx={styles.progress}
                />
              </Box>
              <Box>
                <Text sx={styles.normalText}>
                  <strong>
                    <u>සංඝයාට දානය</u>
                  </strong>
                </Text>
                <Progress
                  max={maxDanaAmount}
                  value={userData.buddhistPractice.danaAmountSangha}
                  sx={styles.progress}
                />
              </Box>
            </Grid>
          </Card>

          <Text sx={styles.normalText}>
            <strong>
              <u>දේශනා වලට සවන් දුන් කාලය (මිනිත්තු)</u>
            </strong>
            {"  "}
            {userData.buddhistPractice.sermonListenTime}
          </Text>
          <br />
          <br />

          <Text sx={styles.normalText}>
            <strong>
              <u>සවන් දෙන දේශකයන් වහන්සේලා පිලිබඳ විස්තර</u>
            </strong>
            {"    "}
            <br />
            {userData.buddhistPractice.sermonSpeakersDetails}
          </Text>
          <br />
          <Text sx={styles.normalText}>
            <strong>
              <u>අභිධර්මය පිලිබඳ දැනුම</u>
            </strong>
            {"    "}
            {getTextBasedOnValue(userData.buddhistPractice.knowledgeAbhiDhamma)}
          </Text>
        </Box>

        <Box sx={styles.statusBox}>
          <Heading as="h2">සමාජ තත්වය</Heading>
          <br />
          <Grid columns={[1, 2]} gap={2}>
            <Box>
              <Text sx={styles.normalText}>
                <strong>
                  <u>විවාහ තත්ත්වය</u>
                </strong>
                {"    "}
                {getMaritalStatusText(
                  userData.socialInformation.marriageStatus
                )}
              </Text>
            </Box>
            <Box>
              <Text sx={styles.normalText}>
                <strong>
                  <u>රැකියාව</u>
                </strong>
                {"    "}
                {userData.socialInformation.occupation}
              </Text>
            </Box>
            <Box>
              <Text sx={styles.normalText}>
                <strong>
                  <u>උසස්ම අධ්‍යාපන සුදුසුකම</u>
                </strong>
                {"    "}
                {getEducationQualificationText(
                  userData.socialInformation.highestEducationQualification
                )}
              </Text>
            </Box>
            <Box>
              <Text sx={styles.normalText}>
                <strong>
                  <u>මාසික ආදායම</u>
                </strong>
                {"    "}
                <Progress
                  max={maxIncome}
                  value={userData.socialInformation.monthlyIncome}
                  sx={styles.progress}
                />
              </Text>
            </Box>
            <Box>
              <Text sx={styles.normalText}>
                <strong>
                  <u>නිවාස හිමිකාරීත්වය</u>
                </strong>
                {"    "}
                {getHouseOwnershipText(
                  userData.socialInformation.houseOwnership
                )}
              </Text>
            </Box>
            <Box>
              <Text sx={styles.normalText}>
                <strong>
                  <u>වාහන හිමිකාරීත්වය</u>
                </strong>
                {"    "}
                {getVehicleOwnershipText(
                  userData.socialInformation.vehicleOwnership
                )}
              </Text>
            </Box>
          </Grid>
          <Box sx={styles.imageUploadContainer}>
            <ImageUpload
              disabled={userImageData.images.length > 2}
              userId={userData.userId}
              imageType="REGULAR"
            />
          </Box>
          <Box sx={styles.imageUploadContainer}>
            <Gallery
              title={"ඔබේ චායා රූප"}
              data={userImageData.images}
              onDelete={deleteUserImage}
            />
          </Box>
        </Box>
      </Grid>

      <Box sx={styles.statusBox}>
        <Heading as="h2">Health Information</Heading>
        <br />
        <Grid columns={[1, 2, 3]} gap={2}>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>උස</u>
              </strong>
              {"  "} {userData.userHealthInformation.height} ft
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>බර</u>
              </strong>
              {"  "} {userData.userHealthInformation.weight} kg
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>භාහිර ආකර්ශනීය බව(ඔබේ තක්සේරුව)</u>
              </strong>
              {"    "}
              {getExternalAttractivenessText(
                userData.userHealthInformation.physicalAttractiveness
              )}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>සමේ පැහැය</u>
              </strong>
              {"    "}
              {getSkinToneText(userData.userHealthInformation.skinTone)}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>මද්‍යසාර පානය</u>
              </strong>
              {"    "}
              {getDrugUsageText(userData.userHealthInformation.drugUsage)}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>දුම් පානය</u>
              </strong>
              {"    "}
              {getDrugUsageText(userData.userHealthInformation.smoking)}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>බලාපොරොත්තු වන දරුවන් ගණන</u>
              </strong>
              {"    "}
              {userData.userHealthInformation.kidsExpectancy}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>සාමාන්‍ය සෞක්‍ය තත්වය</u>
              </strong>
              {"    "}
              {userData.userHealthInformation.healthCondition}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>ශාරීරික දුබලතා</u>
              </strong>
              {"    "}
              {userData.userHealthInformation.disability}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>මානසික රෝග</u>
              </strong>
              {"    "}
              {userData.userHealthInformation.mentalHealth}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>ජානමය රෝග</u>
              </strong>
              {"    "}
              {userData.userHealthInformation.geneticRisks}
            </Text>
          </Box>
          <Box>
            <Text sx={styles.normalText}>
              <strong>
                <u>විශේෂ දැනුම්දීම්</u>
              </strong>
              {"    "}
              {userData.userHealthInformation.yourMessage}
            </Text>
          </Box>
        </Grid>
      </Box>

      {isDialogOpen && (
        <Box sx={styles.modal} onClick={handleDialogToggle}>
          <Box sx={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <ImageUpload userId={userData.userId} imageType="PROFILE" />
            <Button onClick={handleDialogToggle} sx={styles.closeButton}>
              &times;
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

const styles = {
  normalText: {
    fontSize: 17,
  },
  container: {
    py: 4,
    paddingTop: ["20px", "50px", "100px"],
    px: [2, 3, 4],
  },
  headerContainer: {
    flexDirection: ["column", null, "row"],
    justifyContent: "space-between",
    alignItems: ["center", null, "flex-start"],
  },
  profileBox: {
    flex: [null, null, 1],
    padding: 3,
    backgroundColor: "#f7f9fc",
    borderRadius: "8px",
    textAlign: "center",
    mb: [3, null, 0],
  },
  infoBox: {
    flex: [null, null, 2],
    padding: 3,
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
    mt: [3, null, 0],
  },
  avatar: {
    borderRadius: "50%",
    width: ["80px", "100px"],
    height: ["80px", "100px"],
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
  userName: {
    fontSize: [3, 4],
    mb: 2,
  },
  subTitle: {
    color: "#555",
    fontSize: [1, 2],
  },
  editButton: {
    mt: 3,
    alignSelf: "flex-start",
  },
  statusContainer: {
    mt: 4,
  },
  statusBox: {
    padding: 3,
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
    mb: 4,
  },
  card: {
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.16)",
    marginBottom: "20px",
  },
  cardHeader: {
    pb: 2,
    mb: 2,
  },
  progress: {
    mt: 1,
    height: "14px",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
  },
  imageUploadContainer: {
    mt: 5,
  },
  modal: {
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
  },
  modalContent: {
    width: ["90%", "80%", "400px"],
    bg: "#fff",
    p: 4,
    borderRadius: "8px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default RegistrationForm;
