import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório."),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("Deve ser um e-mail"),
  telephone: z
    .string()
    .length(11, "Deve conter 11 dígitos")
    .nonempty("O campo telefone é obrigatório."),
});

export type ContactData = z.infer<typeof contactSchema>;
