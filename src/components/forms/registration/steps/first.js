
import { jsx, Box, Label, Input, Button, Heading, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const PersonalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
});

export default function PersonalInfo({ data, onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: data,
  });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
      <Heading as="h2" sx={styles.heading}>Personal Information</Heading>
      <Text sx={styles.subHeading}>Provide your personal details.</Text>
      <Box sx={styles.field}>
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" {...register('firstName')} sx={styles.input} />
        {errors.firstName && <Text sx={styles.error}>{errors.firstName.message}</Text>}
      </Box>
      <Box sx={styles.field}>
        <Label htmlFor="lastName">Last name</Label>
        <Input id="lastName" {...register('lastName')} sx={styles.input} />
        {errors.lastName && <Text sx={styles.error}>{errors.lastName.message}</Text>}
      </Box>
      <Box sx={styles.field}>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" {...register('email')} sx={styles.input} />
        {errors.email && <Text sx={styles.error}>{errors.email.message}</Text>}
      </Box>
      <Button type="submit" sx={styles.button}>Next</Button>
    </Box>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    p: 4,
    border: '1px solid #ddd',
    borderRadius: 4,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: 3,
    mb: 2,
  },
  subHeading: {
    mb: 3,
  },
  field: {
    mb: 3,
  },
  input: {
    mb: 1,
  },
  error: {
    color: 'red',
    fontSize: 1,
  },
  button: {
    mt: 3,
  },
};
