import {
  jsx,
  Box,
  Label,
  Input,
  Button,
  Heading,
  Text,
  Select,
  Textarea,
} from "theme-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "react-datepicker/dist/react-datepicker.css";
import { margin, padding } from "polished";

const AdditionalInfoSchema = z.object({
  socialStatus: z.string().min(1, "සමාජ තත්වය අත්‍යවශ්‍යයි"),
  highestEducationQualification: z.string().min(1, "අධ්‍යාපනය අත්‍යවශ්‍යයි"),
  jobOrProffesion: z.string().min(1, "රැකියාව අත්‍යවශ්‍යයි"),
  monthlyIncome: z.string().min(1, "මාසික ආදායම අත්‍යවශ්‍යයි"),
  houseOwnership: z.string().min(1, "නිවාස හිමිකාරිත්වය අත්‍යවශ්‍යයි"),
  vehicleOwnership: z.string().min(1, "වාහන හිමිකාරිත්වය අත්‍යවශ්‍යයි"),
  marriageStatus: z.string().min(1, "අවිවාහක තත්වය අත්‍යවශ්‍යයි"),
  phisicalStatus: z.string().min(1, "ශාරීරික තත්වය අත්‍යවශ්‍යයි"),
  height: z.string().min(1, "උස අත්‍යවශ්‍යයි"),
  weight: z.string().min(1, "බර අත්‍යවශ්‍යයි"),
  phisicalAttractiveness: z.string().min(1, "ආකර්ශනීය බව අත්‍යවශ්‍යයි"),
  skinTone: z.string().min(1, "සමේ පැහැපත් බව අත්‍යවශ්‍යයි"),
  kidsExpectancy: z.string().min(1, "දරුවන් ගණන අත්‍යවශ්‍යයි"),
  smoking: z.string().min(1, "දුම් පානය අත්‍යවශ්‍යයි"),
  drinking: z.string().min(1, "මත් ද්‍රව්‍ය පාවිච්චිය අත්‍යවශ්‍යයි"),
  healthCondition: z.string().min(1, "ශාරීරික රෝග අත්‍යවශ්‍යයි"),
  disability: z.string().min(1, "ශාරීරික අකර්මන්‍යතා අත්‍යවශ්‍යයි"),
  mentalHealth: z.string().min(1, "මානසික රෝග අත්‍යවශ්‍යයි"),
  geneticRisks: z.string().min(1, "ජානමය රෝග අත්‍යවශ්‍යයි"),
  yourMessage: z.string().min(1, "ඔබේ පණිවිඩය අත්‍යවශ්‍යයි"),
});

export default function AdditionalInfo({ data, onSubmit, onBack }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data,
  });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
      <Box style={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ඔබේ සමාජ තත්වය
        </Heading>
        <Box sx={styles.field}>
          <Label htmlFor="highestEducationQualification">ලබා ඇති ඉහලම අධ්‍යාපනය</Label>
          <Select
            defaultValue={"NO"}
            id="highestEducationQualification"
            {...register("highestEducationQualification")}
            sx={styles.select}
          >
            <option value="NO">පාසල් අද්‍යාපනය ලබා නැත</option>
            <option value="GRADE_5">5 ශ්‍රේණිය දක්වා</option>
            <option value="OL">සාමාන්‍ය පෙළ දක්වා</option>
            <option value="AL">උසස් පෙළ දක්වා</option>
            <option value="UNI">විශ්ව විද්‍යාල අද්‍යාපනය</option>
            <option value="PHD">පශ්චාත් උපාධි</option>
          </Select>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="jobOrProffesion">වර්තමාන රැකියාව</Label>
          <Input
            id="jobOrProffesion"
            {...register("jobOrProffesion")}
            sx={styles.input}
          />
          {errors.jobOrProffesion && (
            <Text sx={styles.error}>{errors.jobOrProffesion.message}</Text>
          )}
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="monthlyIncome">දල මාසික ආදායම</Label>
          <Input
            type="number"
            id="monthlyIncome"
            {...register("monthlyIncome")}
            sx={styles.input}
          />
          {errors.monthlyIncome && (
            <Text sx={styles.error}>{errors.monthlyIncome.message}</Text>
          )}
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="houseOwnership">නිවාස හිමිකාරිත්වය</Label>
            <Select
              defaultValue={"NO_HOUSE"}
              id="houseOwnership"
              {...register("houseOwnership")}
              sx={styles.select}
            >
              <option value="NO_HOUSE">නිවසක් නොමැත</option>
              <option value="PARENTS_HOUSE">දෙමවුපියන්ගේ නිවාස</option>
              <option value="RENT_HOUSE">කුලී නිවාස</option>
              <option value="OWN_HOUSE">මගේම නිවාස</option>
            </Select>
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="vehicleOwnership">වාහන හිමිකාරිත්වය</Label>
            <Select
              defaultValue={"NO"}
              id="vehicleOwnership"
              {...register("vehicleOwnership")}
              sx={styles.select}
            >
              <option value="NO">නොමැත</option>
              <option value="BIKE">මෝටර් බයිසිකලයක්</option>
              <option value="TUK">ට්‍රයි ෂෝ රථයක්</option>
              <option value="CAR">මෝටර් රථයක්</option>
              <option value="OTHER">වෙනත්</option>
            </Select>
          </Box>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="assetsOwnership">අනෙකුත් වත්කම් හිමිකාරිත්වය</Label>
          <Textarea
            id="assetsOwnership"
            {...register("assetsOwnership")}
            sx={styles.textArea}
          />
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="marriageStatus">අවිවාහක තත්වය</Label>
          <Select
            defaultValue={"SIGNATURE_ONLY"}
            id="marriageStatus"
            {...register("marriageStatus")}
            sx={styles.select}
          >
            <option value="SIGNATURE_ONLY">අත්සනට සිමා වූ</option>
            <option value="DIVORCED">දික්කසාද</option>
            <option value="SINGLE">අවිවාහක</option>
          </Select>
        </Box>
      </Box>
      <Box style={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ඔබේ පෞරුෂික තොරතුරු
        </Heading>

        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="height">
              උස (අඩි.අඟල්, උදා අඩි 5යි අඟල් 4 = 5.4)
            </Label>
            <Input
              type="number"
              id="height"
              {...register("height")}
              sx={styles.input}
            />
            {errors.height && (
              <Text sx={styles.error}>{errors.height.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="weight">බර (කිලෝග්රෑම්)</Label>
            <Input
              type="number"
              id="weight"
              {...register("weight")}
              sx={styles.input}
            />
            {errors.weight && (
              <Text sx={styles.error}>{errors.weight.message}</Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="physicalAttractiveness">ඔබේ ආකර්ශනීය බව</Label>
            <Select
              defaultValue={"NORMAL"}
              id="physicalAttractiveness"
              {...register("physicalAttractiveness")}
              sx={styles.select}
            >
              <option value="NORMAL">සාමාන්‍ය පෙනුම</option>
              <option value="ATTRACTIVE">ආකර්ෂණිය</option>
              <option value="SUPER_ATTRACTIVE">ඉතා ආකර්ශනීය</option>
            </Select>
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="skinTone">සමේ පැහැපත් බව</Label>
            <Select
              defaultValue={"DARK"}
              id="skinTone"
              {...register("skinTone")}
              sx={styles.select}
            >
              <option value="DARK">අඳුරු පැහැ</option>
              <option value="LIGHT">තලෙළු</option>
              <option value="BRIGHT">දීප්තිමත්</option>
              <option value="VERY_BRIGHT">ඉතා දීප්තිමත්</option>
            </Select>
          </Box>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="kidsExpectancy">බලාපොරොත්තු වන දරුවන් ගණන</Label>
          <Input
            type="number"
            id="kidsExpectancy"
            {...register("kidsExpectancy")}
            sx={styles.input}
          />
          {errors.kidsExpectancy && (
            <Text sx={styles.error}>{errors.kidsExpectancy.message}</Text>
          )}
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="smoking">දුම් පානය</Label>
            <Select
              defaultValue="YES"
              id="smoking"
              {...register("smoking")}
              sx={styles.select}
            >
              <option value="YES">ඔවු</option>
              <option value="OCCASIONALLY">ඉඳහිට</option>
              <option value="NO">නොමැත</option>
            </Select>
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="drugUsage">මත් වතුර/ ද්‍රව්‍ය පාවිච්චිය</Label>
            <Select
              defaultValue="YES"
              id="drugUsage"
              {...register("drugUsage")}
              sx={styles.select}
            >
              <option value="YES">ඔවු</option>
              <option value="OCCASIONALLY">ඉඳහිට</option>
              <option value="NO">නොමැත</option>
            </Select>
          </Box>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="healthCondition">සැලකිය යුතු ශාරීරික රෝග</Label>
          <Textarea
            id="healthCondition"
            {...register("healthCondition")}
            sx={styles.textArea}
          />
          {errors.healthCondition && (
            <Text sx={styles.error}>{errors.healthCondition.message}</Text>
          )}
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="disability">සැලකිය යුතු ශාරීරික අකර්මන්‍යතා</Label>
          <Textarea
            id="disability"
            {...register("disability")}
            sx={styles.textArea}
          />
          {errors.disability && (
            <Text sx={styles.error}>{errors.disability.message}</Text>
          )}
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="mentalHealth">සැලකිය යුතු මානසික රෝගී තත්ත්ව</Label>
          <Input
            id="mentalHealth"
            {...register("mentalHealth")}
            sx={styles.input}
          />
          {errors.mentalHealth && (
            <Text sx={styles.error}>{errors.mentalHealth.message}</Text>
          )}
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="geneticRisks">සැලකිය යුතු ජානමය රෝග</Label>
          <Input
            id="geneticRisks"
            {...register("geneticRisks")}
            sx={styles.input}
          />
          {errors.geneticRisks && (
            <Text sx={styles.error}>{errors.geneticRisks.message}</Text>
          )}
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="yourMessage">ඔබේ පණිවිඩය</Label>
          <Textarea
            id="yourMessage"
            {...register("yourMessage")}
            sx={styles.textArea}
            rows={8}
          />
          {errors.yourMessage && (
            <Text sx={styles.error}>{errors.yourMessage.message}</Text>
          )}
        </Box>
      </Box>
      <Box sx={styles.buttonRow}>
        <Button type="button" onClick={onBack} sx={styles.button}>
          ආපසු
        </Button>
        <Button type="submit" sx={styles.button}>
          ඊළඟ
        </Button>
      </Box>
    </Box>
  );
}

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
  select: {
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
    marginBottom: 15,
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
