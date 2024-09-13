import {
  jsx,
  Box,
  Label,
  Input,
  Button,
  Heading,
  Text,
  Select,
} from "theme-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { padding } from "polished";
import { useRouter } from "next/router";

const PersonalInfoSchema = z.object({
  firstName: z.string().min(1, "ඔබේ නම අත්‍යවශ්‍යයි"),
  lastName: z.string().min(1, "වාසගම අත්‍යවශ්‍යයි"),
  dateOfBirth: z.date({ required_error: "උපන් දිනය අත්‍යවශ්‍යයි" }),
  email: z.string().email("වලංගු විදුත් තැපෑලක් නොවේ"),
  phoneNumber: z.string().min(1, "දුරකථන අංකය අත්‍යවශ්‍යයි"),
  gender: z.string().min(1, "ස්ත්‍රී/පුරුෂ භාවය අත්‍යවශ්‍යයි"),
  address: z.string().min(1, "ලිපිනය අත්‍යවශ්‍යයි"),
  province: z.string().min(1, "පළාත අත්‍යවශ්‍යයි"),
  district: z.string().min(1, "දිස්ත්‍රිකකය අත්‍යවශ්‍යයි"),
  nearestTown: z.string().min(1, "ලඟම නගරය අත්‍යවශ්‍යයි"),
});

export default function PersonalInfo({ data, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: data,
  });

  const router = useRouter();
    const handleBack = () =>{
      //router.push("profile/not-verified/warning")
    }

  const dateOfBirth = watch("dateOfBirth");

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
      <Box style={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ඔබේ මුලික තොරතුරු
        </Heading>
        <Text sx={styles.subHeading}>
          ව්‍යාජ අධාර්මික පුද්ගලයින් ගෙන් අනෙකුත් පරිශීලකයන්ට සිදුවන හානි සහ
          හිරිහැර වැළක්වීමේ අරමුණින් ඔබ ඇතුලක් කරන තොරතුරු අපගේ නියෝජිතයන් හා
          පරිගණක වැඩසටහන් මගින් තහවුරු කරන බවට අප සහතික වන්නෙමු. එබැවින් සත්‍ය
          තොරතුරු පමණක් ඇතුලත් කරන ලෙස කාරුණිකව ඉල්ලා සිටිමු. එක් පුද්ගලයෙකුට එක
          ගිණුමක් පමණක් පවත්වාගෙන යාමට ඉඩ ලබාදෙන අතර ඔබේ අවංක භාවය ඉතා ඉහලින්
          අගය කරමු.
        </Text>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="firstName">ඔබේ නම</Label>
            <Input
              id="firstName"
              {...register("firstName")}
              sx={styles.input}
            />
            {errors.firstName && (
              <Text sx={styles.error}>{errors.firstName.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="lastName">වාසගම</Label>
            <Input id="lastName" {...register("lastName")} sx={styles.input} />
            {errors.lastName && (
              <Text sx={styles.error}>{errors.lastName.message}</Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="dateOfBirth">උපන් දිනය</Label>
            <DatePicker
              id="dateOfBirth"
              selected={dateOfBirth}
              onChange={(date) => setValue("dateOfBirth", date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="YYYY/MM/DD"
              className="date-picker"
              wrapperClassName="date-picker-wrapper"
            />
            {errors.dateOfBirth && (
              <Text sx={styles.error}>{errors.dateOfBirth.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="gender">ස්ත්‍රී/පුරුෂ භාවය</Label>
            <Select id="gender" {...register("gender")} sx={styles.select}>
              <option value="MALE">පුරුෂ</option>
              <option value="FEMALE">ස්ත්‍රී</option>
            </Select>
            {errors.gender && (
              <Text sx={styles.error}>{errors.gender.message}</Text>
            )}
          </Box>
        </Box>
      </Box>
      <Box style={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          ඔබේ සබඳතා
        </Heading>
        <Text sx={styles.subHeading}>
          ඔබේ ගිණුම තහුවුරු කරගැනීමේ මෙහි ඇතුලත් කරන තොරතුරු යොදා ගැනේ. මනා සිහි
          නුවනින් යුතුව පුරවන්න.
        </Text>
        <Box sx={styles.field}>
          <Label htmlFor="email">විදුත් තැපෑල</Label>
          <Input id="email" {...register("email")} sx={styles.input} />
          {errors.email && (
            <Text sx={styles.error}>{errors.email.message}</Text>
          )}
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="phoneNumber">දුරකථන අංකය</Label>
            <Input
              id="phoneNumber"
              {...register("phoneNumber")}
              sx={styles.input}
              value={data.phone}
            />
            {errors.phoneNumber && (
              <Text sx={styles.error}>{errors.phoneNumber.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="phoneType">දුරකථන වර්ගය</Label>
            <Select
              id="phoneType"
              {...register("phoneType")}
              sx={styles.select}
            >
              <option value="mobile">ජංගම</option>
              <option value="landline">රැහැන්</option>
              <option value="whatsapp">වට්සැප්</option>
            </Select>
            {errors.phoneType && (
              <Text sx={styles.error}>{errors.phoneType.message}</Text>
            )}
          </Box>
        </Box>
      </Box>
      <Box style={styles.card}>
        <Heading as="h2" sx={styles.heading}>
          පදිංචිය පිලිබඳ තොරතුරු
        </Heading>
        <Text sx={styles.subHeading}>
          යම් අවස්ථා වලදී ඔබේ ලිපිනය කේතයක් සහිත ලිපියක් මගින් තහවුරු කිරීමට
          සිදුවනු හැක. එමනිසා ලිපිනය දෙවරක් පරික්ෂා කරන්න..
        </Text>
        <Box sx={styles.field}>
          <Label htmlFor="address">ලිපිනය</Label>
          <Input id="address" {...register("address")} sx={styles.input} />
          {errors.address && (
            <Text sx={styles.error}>{errors.address.message}</Text>
          )}
        </Box>
        <Box sx={styles.row}>
          <Box sx={styles.field}>
            <Label htmlFor="province">පළාත</Label>
            <Input id="province" {...register("province")} sx={styles.input} />
            {errors.province && (
              <Text sx={styles.error}>{errors.province.message}</Text>
            )}
          </Box>
          <Box sx={styles.field}>
            <Label htmlFor="district">දිස්ත්‍රිකකය</Label>
            <Input id="district" {...register("district")} sx={styles.input} />
            {errors.district && (
              <Text sx={styles.error}>{errors.district.message}</Text>
            )}
          </Box>
        </Box>
        <Box sx={styles.field}>
          <Label htmlFor="nearestTown">ලඟම නගරය</Label>
          <Input
            id="nearestTown"
            {...register("nearestTown")}
            sx={styles.input}
          />
          {errors.nearestTown && (
            <Text sx={styles.error}>{errors.nearestTown.message}</Text>
          )}
        </Box>
      </Box>
      <Box sx={styles.buttonRow}>
        <Button
          type="button"
          onClick={() => alert("Going back...")}
          sx={styles.button}
        >
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
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f8f8',
    resize: 'vertical',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    '&:focus': {
      borderColor: '#5b9dd9',
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(91, 157, 217, 0.3)',
    },
  },
  description: {
    marginBottom: 20,
  },
  card: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  select: {
    borderRadius: 4,
    height: '2.5em',
    fontSize: 16,
    padding: '0 1em',
    border: '1px solid #ccc',
    '@media screen and (max-width: 768px)': {
      fontSize: 14, // Adjust font size for smaller screens
    },
    '&:focus': {
      borderColor: '#5b9dd9',
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(91, 157, 217, 0.3)',
    },
  },
  heading: {
    fontSize: [3, 4], // Responsive font size for different screen sizes
    mb: 3,
  },
  subHeading: {
    mb: 3,
    fontSize: 2,
    color: '#555',
  },
  row: {
    display: 'flex',
    flexDirection: ['column', 'row'], // Stack columns on small screens, row on larger screens
    gap: 3,
    mb: 3,
  },
  field: {
    flex: 1,
    minWidth: 0, // Ensure fields can shrink properly on smaller screens
    marginRight: [0, 3], // Add right margin only on larger screens
  },
  input: {
    width: '100%',
    height: '2.5em',
    mb: 2,
    padding: '0.5em',
    fontSize: 16,
    borderRadius: 4,
    border: '1px solid #ccc',
    '@media screen and (max-width: 768px)': {
      fontSize: 14, // Adjust font size for smaller screens
    },
    '&:focus': {
      borderColor: '#5b9dd9',
      outline: 'none',
      boxShadow: '0 0 0 2px rgba(91, 157, 217, 0.3)',
    },
  },
  error: {
    color: 'red',
    fontSize: 1,
  },
  button: {
    mt: 3,
    px: 4,
    py: 2,
    fontSize: 2,
    borderRadius: 20,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'darkblue',
    },
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};
