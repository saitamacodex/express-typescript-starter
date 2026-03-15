import { z } from "zod";

export const todoValidationSchema = z.object({
  title: z.string().describe("Title of the Todo"),
  description: z.string().optional().describe("description for the todo"),
  isCompleted: z
    .boolean()
    .default(false)
    .describe("if the todo item is completed or not"),
});

export type Todo = {
  id: number;
} & z.infer<typeof todoValidationSchema>;
