import { z } from "zod";

export const todoValidationSchema = z.object({
  id: z.string().describe("ID of the Todo"),
  title: z.string().describe("Title of the Todo"),
  description: z.string().optional().describe("description for the todo"),
  isCompleted: z
    .boolean()
    .default(false)
    .describe("if the todo item is completed or not"),
});

export type Todo = z.infer<typeof todoValidationSchema>;
