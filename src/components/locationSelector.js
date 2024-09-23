// components/LocationSelector.js
import { useState, useEffect } from "react";
import { Box, Text, Label, Heading, Select } from "theme-ui";

const locations = [
  {
    province: "Western Province",
    districts: [
      {
        district: "Colombo",
        towns: [
          { town: "Colombo", lat: "6.9271", lon: "79.8612" },
          { town: "Dehiwala-Mount Lavinia", lat: "6.8390", lon: "79.8650" },
        ],
      },
    ],
  },
  {
    province: "Central Province",
    districts: [
      {
        district: "Kandy",
        towns: [
          { town: "Kandy", lat: "7.2906", lon: "80.6337" },
          { town: "Peradeniya", lat: "7.2590", lon: "80.5972" },
        ],
      },
    ],
  },
];

const LocationSelector = ({ register, setValue, errors }) => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [towns, setTowns] = useState([]);

  // Handle province change
  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);
    const selectedProvince = locations.find((loc) => loc.province === province);
    setDistricts(selectedProvince ? selectedProvince.districts : []);
    setSelectedDistrict("");
    setTowns([]);

    // Set the selected province in the form
    setValue("province", province);
  };

  // Handle district change
  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    const selectedDistrict = districts.find((d) => d.district === district);
    setTowns(selectedDistrict ? selectedDistrict.towns : []);

    // Set the selected district in the form
    setValue("district", district);
  };

  // Handle town change
  const handleTownChange = (e) => {
    const town = e.target.value;
    setValue("nearestTown", town); // Set the selected town in the form
  };

  return (
    <>
      <Box style={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          පදිංචිය පිලිබඳ තොරතුරු
        </Heading>
        <Text sx={styles.subHeading}>
          යම් අවස්ථා වලදී ඔබේ ලිපිනය කේතයක් සහිත ලිපියක් මගින් තහවුරු කිරීමට
          සිදුවනු හැක. එමනිසා ලිපිනය දෙවරක් පරික්ෂා කරන්න..
        </Text>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="province">පළාත</Label>
            <Select
              id="province"
              {...register("province", { required: "Province is required" })}
              value={selectedProvince}
              onChange={handleProvinceChange}
              sx={{ ...styles.input }}
            >
              <option value="">Select Province</option>
              {locations.map((loc) => (
                <option key={loc.province} value={loc.province}>
                  {loc.province}
                </option>
              ))}
            </Select>
            {errors.province && (
              <Text sx={styles.error}>{errors.province.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="district">දිස්ත්‍රික්කය</Label>
            <Select
              id="district"
              {...register("district", { required: "District is required" })}
              value={selectedDistrict}
              onChange={handleDistrictChange}
              disabled={!selectedProvince}
              sx={{ ...styles.input }}
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district.district} value={district.district}>
                  {district.district}
                </option>
              ))}
            </Select>
            {errors.district && (
              <Text sx={styles.error}>{errors.district.message}</Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="nearestTown">ලඟම නගරය</Label>
            <Select
              id="nearestTown"
              {...register("nearestTown", { required: "Town is required" })}
              onChange={handleTownChange}
              disabled={!selectedDistrict}
              sx={{ ...styles.input }}
            >
              <option value="">Select Town</option>
              {towns.map((town) => (
                <option key={town.town} value={town.town}>
                  {town.town}
                </option>
              ))}
            </Select>
            {errors.nearestTown && (
              <Text sx={styles.error}>{errors.nearestTown.message}</Text>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const styles = {
  textArea: {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f8f8",
    resize: "vertical",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    "&:focus": {
      borderColor: "#5b9dd9",
      outline: "none",
      boxShadow: "0 0 0 2px rgba(91, 157, 217, 0.3)",
    },
  },
  description: {
    marginBottom: 20,
  },
  card: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  Select: {
    borderRadius: 4,
    height: "2.5em",
    fontSize: 16,
    padding: "0 1em",
    border: "1px solid #ccc",
    "@media screen and (max-width: 768px)": {
      fontSize: 14, // Adjust font size for smaller screens
    },
    "&:focus": {
      borderColor: "#5b9dd9",
      outline: "none",
      boxShadow: "0 0 0 2px rgba(91, 157, 217, 0.3)",
    },
  },
  heading: {
    fontSize: [3, 4], // Responsive font size for different screen sizes
    mb: 3,
  },
  subHeading: {
    mb: 3,
    fontSize: 2,
    color: "#555",
  },
  row: {
    display: "flex",
    flexDirection: ["column", "row"], // Stack columns on small screens, row on larger screens
    gap: 3,
    mb: 3,
  },
  field: {
    flex: 1,
    minWidth: 0, // Ensure fields can shrink properly on smaller screens
    marginRight: [0, 3], // Add right margin only on larger screens
  },
  input: {
    width: "100%",
    height: "2.5em",
    mb: 2,
    padding: "0.5em",
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
    "@media screen and (max-width: 768px)": {
      fontSize: 14, // Adjust font size for smaller screens
    },
    "&:focus": {
      borderColor: "#5b9dd9",
      outline: "none",
      boxShadow: "0 0 0 2px rgba(91, 157, 217, 0.3)",
    },
  },
  error: {
    color: "red",
    fontSize: 1,
  },
  button: {
    mt: 3,
    px: 4,
    py: 2,
    fontSize: 2,
    borderRadius: 20,
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default LocationSelector;
