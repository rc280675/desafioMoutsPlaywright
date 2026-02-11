import { z } from 'zod';

export const AtingimentoSchema = z.object({
  funcionarioId: z.number(),
  atingimentoTotal: z.number().min(0).max(100)
});