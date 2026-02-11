import { z } from 'zod';

export const MetaSchema = z.object({
  id: z.number(),
  nome: z.string(),
  ano: z.number(),
  descricao: z.string().nullable().optional(),
  funcao: z.string().nullable().optional()
});