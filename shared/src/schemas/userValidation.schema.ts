import { z } from 'zod';

const validateIsraeliID= (id: string) =>  {
    const isValidFormat = /^\d{9}$/.test(id);
    if (!isValidFormat) return false;

    var sum = 0;
    for (var i = 0; i < 9; i++) {
        var digit = Number(id[i]);
        var step = digit * ((i % 2) + 1);
        sum += step > 9 ? step - 9 : step;
    }

    return sum % 10 === 0;
}

export const UserRegistrationSchema = z.object({
  name: z.string(),
  tz: z.string(),
  isAdministor : z.boolean()
});

export type UserRegistrationInput = z.infer<typeof UserRegistrationSchema>;
