import { pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", (t) => ({
  id: t.text().primaryKey(),
  name: t.text().notNull(),
  email: t.text().notNull().unique(),
  emailVerified: t.boolean().notNull(),
  image: t.text(),
  createdAt: t.timestamp().notNull(),
  updatedAt: t.timestamp().notNull(),
  role: t.text(),
  banned: t.boolean(),
  banReason: t.text(),
  banExpires: t.timestamp(),
  lang: t.text(),
}));

export const account = pgTable("account", (t) => ({
  id: t.text().primaryKey(),
  accountId: t.text().notNull(),
  providerId: t.text().notNull(),
  userId: t
    .text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: t.text(),
  refreshToken: t.text(),
  idToken: t.text(),
  accessTokenExpiresAt: t.timestamp(),
  refreshTokenExpiresAt: t.timestamp(),
  scope: t.text(),
  password: t.text(),
  createdAt: t.timestamp().notNull(),
  updatedAt: t.timestamp().notNull(),
}));

export const verification = pgTable("verification", (t) => ({
  id: t.text().primaryKey(),
  identifier: t.text().notNull(),
  value: t.text().notNull(),
  expiresAt: t.timestamp().notNull(),
  createdAt: t.timestamp(),
  updatedAt: t.timestamp(),
}));

export const userLoginLogs = pgTable("user_login_logs", (t) => ({
  id: t.serial().primaryKey(),
  createdAt: t.timestamp().notNull().defaultNow(),
  updatedAt: t.timestamp().notNull().defaultNow(),
  ipAddress: t.text(),
  userAgent: t.text(),
  userId: t.text().notNull(),
  token: t.text().notNull(),
  userEmail: t.text().notNull(),
}));

export const userSignupLogs = pgTable("user_signup_logs", (t) => ({
  id: t.serial().primaryKey(),
  createdAt: t.timestamp().notNull().defaultNow(),
  updatedAt: t.timestamp().notNull().defaultNow(),
  ipAddress: t.text(),
  userAgent: t.text(),
  userId: t.text().notNull(),
  token: t.text().notNull(),
  userEmail: t.text().notNull(),
}));
