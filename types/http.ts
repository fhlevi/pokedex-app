import { z } from "zod";

const HTTPClientNonAuthSchema = z.object({
    url: z.string(),
    method: z.enum(['GET', 'POST', 'PUT', 'DELETE']).optional(),
    data: z.any().optional(),
    params: z.record(z.string(), z.any()).optional(),
    headers: z.record(z.string(), z.any()).optional(),
});

export type IHTTPClientNonAuth = z.infer<typeof HTTPClientNonAuthSchema>