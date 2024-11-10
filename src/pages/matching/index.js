/** @jsxImportSource theme-ui */
import {
  jsx,
  Box,
  Container,
  Grid,
  Card,
  Heading,
  Text,
  Input,
  Button,
  Label,
  Select,
} from "theme-ui";
import { useState } from "react";
import { margin } from "polished";
import Overlay from "../../components/blur-overlay";
import { useRouter } from "next/router";
import { locations } from "../../components/locationSelector";

const FilterPage = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(true);


  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [towns, setTowns] = useState([]);



  const router = useRouter();

  
  const toggleOverlay = () => {
    router.push('/profile')
    setOverlayVisible(!isOverlayVisible);
  };

  const handleProvinceChange = (e) => {
    const selected = e.target.value;
    setSelectedProvince(selected);
    const province = locations.find(
      (location) => location.province === selected
    );
    setDistricts(province ? province.districts : []);
    setSelectedDistrict("");
    setTowns([]);
  };

  const handleDistrictChange = (e) => {
    const selected = e.target.value;
    setSelectedDistrict(selected);
    const district = districts.find(
      (district) => district.district === selected
    );
    setTowns(district ? district.towns : []);
  };

  return (
    <Container>
      <Box as="section" sx={styles.section}>
        <Box sx={styles.heightBox}></Box>
        {/* Filter Section */}
        <Grid columns={[1, 2]} gap={4}>
          {/* Marriage & Economy Section */}
          <Card sx={styles.card}>
            <Heading as="h3" sx={styles.cardTitle}>
              Marriage & Economy
            </Heading>
            <Box as="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ flex: 1, mb: 2 }}>
                {" "}
                {/* Adjust mb for spacing if needed */}
                <Box sx={styles.formGroup}>
                  <Label htmlFor="marriageStatus">Marriage Status</Label>
                  <Select
                    id="marriageStatus"
                    name="marriageStatus"
                    sx={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="SIGNATURE_ONLY">Signature Only</option>
                    <option value="MARRIED">Married</option>
                    <option value="SINGLE">Single</option>
                  </Select>
                </Box>
                <Box sx={styles.formGroup}>
                  <Label htmlFor="houseOwnership">House Ownership</Label>
                  <Select
                    id="houseOwnership"
                    name="houseOwnership"
                    sx={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="NO_HOUSE">No House</option>
                    <option value="OWN_HOUSE">Own House</option>
                  </Select>
                </Box>
              </Box>
              <Box sx={{ flex: 1, mb: 2 }}>
                {" "}
                {/* Adjust mb for spacing if needed */}
                <Box sx={styles.formGroup}>
                  <Label htmlFor="vehicleOwnership">Vehicle Ownership</Label>
                  <Select
                    id="vehicleOwnership"
                    name="vehicleOwnership"
                    sx={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="NO">No</option>
                    <option value="YES">Yes</option>
                  </Select>
                </Box>
                <Box sx={styles.formGroup}>
                  <Label htmlFor="income">Income Range</Label>
                  <Select id="income" name="income" sx={styles.select}>
                    <option value="">Select</option>
                    <option value="<30000">Less than 30,000</option>
                    <option value="30000-50.000">30,000 - 50,000</option>
                    <option value="50000-100000">50,000 - 100,000</option>
                    <option value=">100000">More than 100,000</option>
                  </Select>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Health Section */}
          <Card sx={styles.card}>
            <Heading as="h3" sx={styles.cardTitle}>
              Health
            </Heading>
            <Box as="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ flex: 1, mb: 2 }}>
                {" "}
                {/* Adjust mb for spacing if needed */}
                <Box sx={styles.formGroup}>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" name="age" type="number" sx={styles.input} />
                </Box>
                <Box sx={styles.formGroup}>
                  <Label htmlFor="height">Height Min(cm)</Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    sx={styles.input}
                  />
                </Box>
                <Box sx={styles.formGroup}>
                  <Label htmlFor="drinkingLevel">Drinking Level</Label>
                  <Select
                    id="drinkingLevel"
                    name="drinkingLevel"
                    sx={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="NON_DRINKER">Non-drinker</option>
                    <option value="SOCIAL_DRINKER">Social drinker</option>
                    <option value="MODERATE_DRINKER">Moderate drinker</option>
                    <option value="HEAVY_DRINKER">Heavy drinker</option>
                  </Select>
                </Box>
              </Box>
              <Box sx={{ flex: 1, mb: 2 }}>
                {" "}
                {/* Adjust mb for spacing if needed */}
                <Box sx={styles.formGroup}>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    sx={styles.input}
                  />
                </Box>
                <Box sx={styles.formGroup}>
                  <Label htmlFor="height">Height Max(cm)</Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    sx={styles.input}
                  />
                </Box>
                <Box sx={styles.formGroup}>
                  <Label htmlFor="smokingLevel">Smoking Level</Label>
                  <Select
                    id="smokingLevel"
                    name="smokingLevel"
                    sx={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="NON_SMOKER">Non-smoker</option>
                    <option value="OCCASIONAL_SMOKER">Occasional smoker</option>
                    <option value="REGULAR_SMOKER">Regular smoker</option>
                  </Select>
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Location Section */}
          <Card sx={styles.card}>
            <Heading as="h3" sx={styles.cardTitle}>
              Location
            </Heading>
            <Box as="form" sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ flex: 1, mb: 2 }}>
                {" "}
                {/* Adjust mb for spacing if needed */}
                <Box sx={styles.formGroup}>
                  <Label htmlFor="province">Province</Label>
                  <Select
                    id="province"
                    name="province"
                    sx={styles.select}
                    value={selectedProvince}
                    onChange={handleProvinceChange}
                  >
                    <option value="">Select Province</option>
                    {locations.map((location) => (
                      <option key={location.province} value={location.province}>
                        {location.province}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box sx={styles.formGroup}>
                  <Label htmlFor="nearestTown">Nearest Town</Label>
                  <Select
                    id="nearestTown"
                    name="nearestTown"
                    sx={styles.select}
                    disabled={!selectedDistrict}
                  >
                    <option value="">Select Town</option>
                    {towns.map((town) => (
                      <option key={town.town} value={town.town}>
                        {town.town}
                      </option>
                    ))}
                  </Select>
                </Box>
              </Box>
              <Box sx={{ flex: 1, mb: 2 }}>
                {" "}
                {/* Adjust mb for spacing if needed */}
                <Box sx={styles.formGroup}>
                  <Label htmlFor="district">District</Label>
                  <Select
                    id="district"
                    name="district"
                    sx={styles.select}
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    disabled={!selectedProvince}
                  >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district.district} value={district.district}>
                        {district.district}
                      </option>
                    ))}
                  </Select>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card sx={styles.card}>
            <Button sx={styles.button}>Filter</Button>
          </Card>
        </Grid>
      </Box>
      {isOverlayVisible && (
        <Overlay buttonText="ඔබේ ගිණුමට යොමුවන්න" description="ගිණුමේ තොරතුරු අප විසින් තහවුරු කර නොමැත. ඔබේ විද්‍යුත් තැපෑල හෝ වට්සැප් පරීක්ෂා කර බලන්න." footerDescription = "එසේම ඔබේ ඇතුලත් කල තොරතුරු වල නිරවද්‍යතාව නැවත නැවැතත් පරීක්ෂා කර තොරතුරු යාවත්කාලීන කරන්න" onClose={toggleOverlay} />
      )}
      {/* Results Section */}
      <Box as="section" sx={styles.resultsSection}>
        <Heading sx={styles.resultsTitle}>Results</Heading>
        <Grid columns={[1, 2]} gap={4} sx={styles.resultsGrid}>
          {/* Example card, replace with dynamic data */}
          {/* <Card sx={styles.resultCard}>
            <Text sx={styles.resultCardText}>Result 1</Text>
          </Card>
          <Card sx={styles.resultCard}>
            <Text sx={styles.resultCardText}>Result 2</Text>
          </Card> */}
          {/* Add more result cards as needed */}
        </Grid>
      </Box>
    </Container>
  );
};

export default FilterPage;

const styles = {
  section: {
    py: 1, // Minimal padding
  },
  heightBox: {
    marginTop: 100,
  },
  card: {
    p: 1, // Minimal padding
    borderRadius: 2, // Minimal border radius
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.125)",
  },
  cardTitle: {
    fontSize: 2, // Reduced font size
    mb: 1,
  },
  formGroup: {
    mb: 1,
  },
  input: {
    fontSize: 12.5, // Slightly increased font size (optional)
    px: 1.3, // Slightly increased padding
    // Reduce height for smaller input field
    width: "90%",
    height: "90%",
  },
  select: {
    fontSize: 12.5, // Slightly increased font size
    px: 1.3, // Slightly increased padding
    py: 0.7, // Slightly increased padding
    width: "90%", // Reduced width
  },

  button: {
    mt: 2, // Minimal margin
    backgroundColor: "primary",
    color: "white",
    fontSize: 12.5, // Reduced font size
    px: 2, // Minimal padding
    py: 0.8, // Minimal padding
    cursor: "pointer",
    display: "block",
    width: "90%", // Reduced width
    textAlign: "center",
  },
  resultsSection: {
    mt: 1, // Minimal margin
    mb: 150,
  },
  resultsTitle: {
    fontSize: 22.5, // Reduced font size
    mb: 1,
    textAlign: "center",
  },
  resultsGrid: {
    mb: 1,
  },
  resultCard: {
    p: 1, // Minimal padding
    borderRadius: 2, // Minimal border radius
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.125)",
  },
  resultCardText: {
    fontSize: 11.4, // Very small font size
  },
};
