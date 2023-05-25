import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório.'),
  email: z.string().email('Deve ser um e-mail').nonempty("O e-mail é obrigatório."),
  password: z.string().nonempty('Senha é obrigatória').min(6, 'A senha precisa de no minimo 6 caracteres'),
  confirmPassword: z.string().nonempty('Senha é obrigatória').min(6, 'A senha precisa de no minimo 6 caracteres'),
  telephone: z.string().length(11, "Deve conter pelo menos 11 dígitos").nonempty('O campo telefone é obrigatório.'),
}).refine(data => data.password === data.confirmPassword, {
  message: "As senhas não conferem",
  path: ['confirmPassword']
})

export type RegisterData = z.infer<typeof registerSchema>;