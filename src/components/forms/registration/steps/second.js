
import { jsx, Box, Label, Input, Button, Heading, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const AddressSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  zip: z.string().min(1, 'ZIP Code is required'),
});

export default function Address({ data, onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(AddressSchema),
    defaultValues: data,
  });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form}>
      <Heading as="h2" sx={styles.heading}>Address</Heading>
      <Text sx={styles.subHeading}>Provide your address details.</Text>
      <Box sx={styles.field}>
        <Label htmlFor="address">Address</Label>
        <Input id="address" {...register('address')} sx={styles.input} />
        {errors.address && <Text sx={styles.error}>{errors.address.message}</Text>}
      </Box>
      <Box sx={styles.field}>
        <Label htmlFor="city">City</Label>
        <Input id="city" {...register('city')} sx={styles.input} />
        {errors.city && <Text sx={styles.error}>{errors.city.message}</Text>}
      </Box>
      <Box sx={styles.field}>
        <Label htmlFor="zip">ZIP Code</Label>
        <Input id="zip" {...register('zip')} sx={styles.input} />
        {errors.zip && <Text sx={styles.error}>{errors.zip.message}</Text>}
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
