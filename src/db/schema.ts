import {
  pgTable,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const mahasiswa = pgTable("mahasiswa", {
  nama: text("nama"),
  umur: integer("umur"),
});

export const department = pgTable("department", {
  id: integer("id").notNull(),
  name: text("name").notNull(),
  active: boolean("active").notNull(),
  createdDate: timestamp("created_date").defaultNow().notNull(),
  createdBy: text("created_by").notNull(),
  updatedDate: timestamp("updated_date").defaultNow().notNull(),
  updatedBy: text("updated_by").notNull(),
});

export const employee = pgTable("employee", {
  id: integer("id"),
  userName: text("user_name"),
  password: text("password"),
  name: text("name"),
  nik: integer("nik"),
  email: text("email"),
  phone: text("phone"),
  active: boolean("active"),
  divisionId: integer("division_id"),
  departmentId: integer("department_id"),
  positionId: integer("position_id"),
  createdDate: timestamp("created_date").defaultNow(),
  createdBy: text("created_by"),
  updatedDate: text("updated_date"),
  updatedBy: text("updated_by"),
});
