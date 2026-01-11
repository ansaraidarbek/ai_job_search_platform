import {
    pgTable,
    varchar,
    boolean,
    integer,
    primaryKey,
} from "drizzle-orm/pg-core";
import { UserTable } from "./user";
import { OrganizationTable } from "./organization";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";

export const OrganizationuserSettingsTable = pgTable(
    "organization_user_settings",
    {
        userId: varchar()
            .notNull()
            .references(() => UserTable.id),
        organizationId: varchar()
            .notNull()
            .references(() => OrganizationTable.id),
        newApplicationEmailNotifications: boolean().notNull().default(false),
        minimumRating: integer(),
        createdAt,
        updatedAt,
    },
    (table) => [primaryKey({ columns: [table.userId, table.organizationId] })]
);

export const organizationuserSettingsRelations = relations(
    OrganizationuserSettingsTable,
    ({ one }) => ({
        user: one(UserTable, {
            fields: [OrganizationuserSettingsTable.userId],
            references: [UserTable.id],
        }),
        organization: one(OrganizationTable, {
            fields: [OrganizationuserSettingsTable.organizationId],
            references: [OrganizationTable.id],
        }),
    })
);
