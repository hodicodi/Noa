import { z } from "zod";

const validateIsraeliID = (id: string) => {
  if (!/^\d{9}$/.test(id)) return false;

  const sum = id
    .split("")
    .reduce((acc, digit, i) => {
      const step = Number(digit) * ((i % 2) + 1);
      return acc + (step > 9 ? step - 9 : step);
    }, 0);

  return sum % 10 === 0;
};

export const UserRegistrationSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  tz: z.string().refine((tz) => validateIsraeliID(tz), "Invalid tz"),
  isAdministor: z.boolean(),
});

export type UserRegistrationInput = z.infer<typeof UserRegistrationSchema>;
