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
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const BuddhistPracticeSchema = z.object({
  // Basic Buddhist background
  origin: z.enum(["SINCE_BIRTH", "CONVERTED"]),
  timeInvestedOvarall: z.enum([
    "MORE_50",
    "MORE_40",
    "MORE_30",
    "MORE_20",
    "MORE_10",
    "MORE_5",
    "LESS_5"
  ]),
  
  // Deed categories
  deedCategoryDana: z.enum(["NO", "SMALL_TIME", "BIG_TIME"]),
  deedCategorySeela: z.enum(["NO", "SMALL_TIME", "BIG_TIME"]),
  deedCategoryBhavana: z.enum(["NO", "SMALL_TIME", "BIG_TIME"]),
  deedCategoryOther: z.enum(["NO", "SMALL_TIME", "BIG_TIME"]),
  
  // Meditation times (hours per month)
  meditationAnaPanaSathiTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  meditationMayithreeTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  bodyAwarenessTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  meditationOtherTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  meditationTeacher: z.string().optional(),
  
  // Seela practice times (hours per month)
  seelaPansilTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  seelaAtaSilTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  seelaOtherTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  
  // Dana amounts (LKR per month)
  danaAmountAnimals: z.number().min(0, "මුදල ධන අගයක් විය යුතුය"),
  danaAmountPeople: z.number().min(0, "මුදල ධන අගයක් විය යුතුය"),
  danaAmountSangha: z.number().min(0, "මුදල ධන අගයක් විය යුතුය"),
  
  // Sermon listening
  sermonListenTime: z.number().min(0, "කාලය ධන අගයක් විය යුතුය"),
  sermonSpeakersDetails: z.string().optional(),
  
  // Personal details
  knowledgeAbhiDhamma: z.enum([
    "NO",
    "SMALL_TIME",
    "BIG_TIME",
    "BIG_TIME_PRACTICAL"
  ]),
  descriptionOfYourSelf: z.string().min(1, "ඔබේ පණිවිඩය අත්‍යවශ්‍යයි"),
  enterToHardPractice: z.enum([
    "NO",
    "SMALL_TIME",
    "BIG_TIME"
  ])
});

export default function SpiritualInfo({ data, onSubmit, onBack }) {

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BuddhistPracticeSchema),
    defaultValues: data,
  });
  

  const scrollToTop = () => {
    // Find the element with id 'topBox' and scroll to it
    const topBoxElement = document.getElementById("topBox");
    if (topBoxElement) {
      topBoxElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use useEffect to scroll to top on component mount
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ඔබේ බෞද්ධ පසුබිම
        </Heading>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="origin">මුලාරම්භය</Label>
            <Select id="origin" {...register("origin")} sx={styles.select}>
              <option value="SINCE_BIRTH">උපන් දා සිට බෞද්ධ</option>
              <option value="CONVERTED">පසු කාලීනව වැළඳගත්</option>
            </Select>
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="origin">ධර්මය හැදෑරු කාලය</Label>
            <Select
              id="timeInvestedOvarall"
              {...register("timeInvestedOvarall")}
              defaultValue="MORE_50"
              sx={styles.select}
            >
              <option value="MORE_50">වසර 50ට වැඩි</option>
              <option value="MORE_40">වසර 40ට වැඩි</option>
              <option value="MORE_30">වසර 30ට වැඩි</option>
              <option value="MORE_20">වසර 20ට වැඩි</option>
              <option value="MORE_10">වසර 10ට වැඩි</option>
              <option value="MORE_5">වසර 5ට වැඩි</option>
              <option value="LESS_5">වසර 5ට අඩු</option>
            </Select>
          </Box>
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="deedCategoryDana">දාන කුසලයෙහි</Label>
            <Select
              id="deedCategoryDana"
              {...register("deedCategoryDana")}
              defaultValue="NO"
              sx={styles.select}
            >
              <option value="NO">නොයෙදෙමි</option>
              <option value="SMALL_TIME">සුළුවෙන් යෙදෙමි</option>
              <option value="BIG_TIME">මහත් වශයෙන් යෙදෙමි</option>
            </Select>
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="deedCategorySeela">සීල කුසලය</Label>
            <Select
              id="deedCategorySeela"
              {...register("deedCategorySeela")}
              defaultValue="NO"
              sx={styles.select}
            >
              <option value="NO">නොයෙදෙමි</option>
              <option value="SMALL_TIME">සුළු වශයෙන් යෙදෙමි</option>
              <option value="BIG_TIME">මහත් වශයෙන් යෙදෙමි</option>
            </Select>
            {errors.deedCategorySeela && (
              <Text sx={styles.error}>{errors.deedCategorySeela.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="deedCategoryBhavana">භාවනා කුසලය</Label>
            <Select
              id="deedCategoryBhavana"
              {...register("deedCategoryBhavana")}
              defaultValue="NO"
              sx={styles.select}
            >
              <option value="NO">නොයෙදෙමි</option>
              <option value="SMALL_TIME">සුළු වශයෙන් යෙදෙමි</option>
              <option value="BIG_TIME">මහත් වශයෙන් යෙදෙමි</option>
            </Select>
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="deedCategoryOther">වෙනත්(ධර්ම ශ්‍රවනය ආදී..)</Label>
            <Select
              id="deedCategoryOther"
              {...register("deedCategoryOther")}
              defaultValue="NO"
              sx={styles.select}
            >
              <option value="NO">නොයෙදෙමි</option>
              <option value="SMALL_TIME">සුළු වශයෙන් යෙදෙමි</option>
              <option value="BIG_TIME">මහත් වශයෙන් යෙදෙමි</option>
            </Select>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          භාවනා කාලය
        </Heading>
        <Label htmlFor="meditationTimePerWeek" style={styles.description}>
          භාවනා කාලය ලෙස මාසයකට පැය කීයක් භාවනා කලේද යන්න ඇතුලත් කරන්න
        </Label>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="meditationAnaPanaSathiTime">
              ආනාපානසති භාවනා කාලය (මසකට පැය)
            </Label>
            <Input
              id="meditationAnaPanaSathiTime"
              type="number"
              defaultValue={0}
              {...register("meditationAnaPanaSathiTime", {
                valueAsNumber: true,
              })}
              sx={styles.input}
            />
            {errors.meditationAnaPanaSathiTime && (
              <Text sx={styles.error}>
                {errors.meditationAnaPanaSathiTime.message}
              </Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="meditationMayithreeTime">
              මෛත්‍රි භාවනා කාලය (මසකට පැය)
            </Label>
            <Input
              id="meditationMayithreeTime"
              type="number"
              defaultValue={0}
              {...register("meditationMayithreeTime", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.meditationMayithreeTime && (
              <Text sx={styles.error}>
                {errors.meditationMayithreeTime.message}
              </Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="bodyAwarenessTime">
              සතර ඉරියවුවේ සිහිය කාලය (මසකට පැය)
            </Label>
            <Input
              id="bodyAwarenessTime"
              type="number"
              defaultValue={0}
              {...register("bodyAwarenessTime", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.bodyAwarenessTime && (
              <Text sx={styles.error}>{errors.bodyAwarenessTime.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="meditationOtherTime">
              වෙනත් භාවනා කාලය (මසකට පැය)
            </Label>
            <Input
              id="meditationOtherTime"
              type="number"
              defaultValue={0}
              {...register("meditationOtherTime", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.meditationOtherTime && (
              <Text sx={styles.error}>
                {errors.meditationOtherTime.message}
              </Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="meditationTeacher">
            භාවනා උපදේශක / අචාර්ය (කර්මස්ථාන අචාර්ය වරයෙකු සිටි නම්, ඔබට අවශ්‍ය
            නම් අවශ්‍යයි ලෙස සඳහන් කරන්න)
          </Label>
          <Input
            id="meditationTeacher"
            type="text"
            {...register("meditationTeacher")}
            sx={styles.input}
          />
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          සීල පුණ්‍ය කටයුතු
        </Heading>
        <Label htmlFor="seelaTimePerWeek" style={styles.description}>
          සීල පුණ්‍ය කටයුතු ලෙස මාසයකට පැය කීයක් සීලයෙන් හැසුරුනේද යන්න ඇතුලත්
          කරන්න
        </Label>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="seelaPansilTime">පන්සිල් කාලය (මසකට පැය)</Label>
            <Input
              id="seelaPansilTime"
              type="number"
              defaultValue={0}
              {...register("seelaPansilTime", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.seelaPansilTime && (
              <Text sx={styles.error}>{errors.seelaPansilTime.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="seelaAtaSilTime">අට සිල් කාලය (මසකට පැය)</Label>
            <Input
              id="seelaAtaSilTime"
              type="number"
              defaultValue={0}
              {...register("seelaAtaSilTime", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.seelaAtaSilTime && (
              <Text sx={styles.error}>{errors.seelaAtaSilTime.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="seelaOtherTime">වෙනත් සිල් කාලය (මසකට පැය)</Label>
            <Input
              id="seelaOtherTime"
              type="number"
              defaultValue={0}
              {...register("seelaOtherTime", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.seelaOtherTime && (
              <Text sx={styles.error}>{errors.seelaOtherTime.message}</Text>
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ධර්ම දාන
        </Heading>
        <Label htmlFor="danaAmountAnimals" style={styles.description}>
          ධර්ම දාන ලෙස මාසයක් තුල සතුන්ට දී ඇති දානය ප්‍රමාණ රුපියල් වලින්
          ඇතුලත් කරන්න
        </Label>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="danaAmountAnimals">සතුන්ට (මසකට රුපියල්)</Label>
            <Input
              id="danaAmountAnimals"
              type="number"
              defaultValue={0}
              {...register("danaAmountAnimals", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.danaAmountAnimals && (
              <Text sx={styles.error}>{errors.danaAmountAnimals.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="danaAmountPeople">මිනිසුන්ට (මසකට රුපියල්)</Label>
            <Input
              id="danaAmountPeople"
              type="number"
              defaultValue={0}
              {...register("danaAmountPeople", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.danaAmountPeople && (
              <Text sx={styles.error}>{errors.danaAmountPeople.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="danaAmountSangha">සංඝයාට (මසකට රුපියල්)</Label>
            <Input
              id="danaAmountSangha"
              type="number"
              defaultValue={0}
              {...register("danaAmountSangha", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.danaAmountSangha && (
              <Text sx={styles.error}>{errors.danaAmountSangha.message}</Text>
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ධර්ම ශ්‍රවණය
        </Heading>
        <Label htmlFor="sermonListenTime" style={styles.description}>
          මාසයක් තුල පැය කිහිපයක් ධර්ම ශ්‍රවණය සඳහා වැය කලේද යන්න ඇතුලත් කරන්න
        </Label>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="sermonListenTime">
              ධර්ම ශ්‍රවණ කාලය (මසකට පැය)
            </Label>
            <Input
              id="sermonListenTime"
              type="number"
              defaultValue={0}
              {...register("sermonListenTime", { valueAsNumber: true })}
              sx={styles.input}
            />
            {errors.sermonListenTime && (
              <Text sx={styles.error}>{errors.sermonListenTime.message}</Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="sermonSpeakersDetails">
            ඔබ සවන් දෙන ධර්ම කථිකයන් පිලිබඳ විස්තර මෙහි ඇතුලත් කරන්න
          </Label>
          <Textarea
            rows={8}
            id="sermonSpeakersDetails"
            type="text"
            {...register("sermonSpeakersDetails")}
            sx={styles.textArea}
          />
          {errors.sermonSpeakersDetails && (
            <Text sx={styles.error}>
              {errors.sermonSpeakersDetails.message}
            </Text>
          )}
        </Box>
      </Box>
      <Box sx={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ඔබ ගැන විස්තර
        </Heading>
        <Box sx={styles.field}>
          <Label htmlFor="knowledgeAbhiDhamma">ඔබ අභිධර්මය හදාරන්නේද</Label>
          <Select
            id="knowledgeAbhiDhamma"
            {...register("knowledgeAbhiDhamma")}
            defaultValue="NO"
            sx={styles.select}
          >
            <option value="NO">නැත</option>
            <option value="SMALL_TIME">සුළු වශයෙන් හදාරමි</option>
            <option value="BIG_TIME">තරඟ විභාග සඳහා හදාරා ඇත</option>
            <option value="BIG_TIME_PRACTICAL">
              සංකල්ප ප්‍රයෝගිකව භාවිතා කරමි
            </option>
          </Select>
          {errors.deedCategorySeela && (
            <Text sx={styles.error}>{errors.deedCategorySeela.message}</Text>
          )}
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="descriptionOfYourSelf">
              ඔබ ගැන විස්තර ඇතුලත් කරන්න
            </Label>
            <Textarea
              rows={8}
              id="descriptionOfYourSelf"
              type="text"
              {...register("descriptionOfYourSelf")}
              sx={styles.textArea}
            />
            {errors.descriptionOfYourSelf && (
              <Text sx={styles.error}>
                {errors.descriptionOfYourSelf.message}
              </Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="enterToHardPractice">
            සාසන ගත වීමට (මහන දම් පිරීමට) අදහසක් ඇතිද
          </Label>
          <Select
            id="enterToHardPractice"
            {...register("enterToHardPractice")}
            defaultValue="NO"
            sx={styles.select}
          >
            <option value="NO">නොමැත</option>
            <option value="SMALL_TIME">ස්ථිර අදහසක් නොමැත</option>
            <option value="BIG_TIME">ඉලක්කයක් ලෙස සලකමි</option>
          </Select>
          {errors.deedCategorySeela && (
            <Text sx={styles.error}>{errors.deedCategorySeela.message}</Text>
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
    marginBottom: 20,
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
