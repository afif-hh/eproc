import { createInsertSchema, createSelectSchema } from "drizzle-valibot";
import { department } from "./schema";

export const insertDepartmentSchema = createInsertSchema(department);
export type SelectDepartment = typeof department.$inferSelect;
