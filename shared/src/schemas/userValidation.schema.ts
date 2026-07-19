// userSchema.ts (Shared or copied to both Front-end & Back-end)
import { z } from 'zod';

function validateIsraeliID(id: string) {
    // 1. Regex check: Ensure input is exactly 9 digits 
    const isValidFormat = /^\d{9}$/.test(id);
    if (!isValidFormat) return false;

    // 2. Modulo-10 (Luhn) Checksum validation
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let digit = Number(id[i]);
        // Multiply alternate digits by 1 or 2
        let step = digit * ((i % 2) + 1);
        // If the product is > 9, subtract 9 (or sum the two digits)
        sum += step > 9 ? step - 9 : step;
    }

    // The sum must be a multiple of 10
    return sum % 10 === 0;
}


export const UserRegistrationSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters"),
  tz: z.string().refine((tz) => validateIsraeliID(tz), "Invalid email address"),
});



// Infer TypeScript types directly from the schema
export type UserRegistrationInput = z.infer<typeof UserRegistrationSchema>;
