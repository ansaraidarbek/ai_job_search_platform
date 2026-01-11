import { db } from "@/src/drizzle/db";
import { UserNotificationSettingsTable } from "@/src/drizzle/schema";
import { revalidateUserNotificationSettingsGlobalCache } from "./cache/userNotificationSettings";

export async function insertUserNotificationSettings(
    settings: typeof UserNotificationSettingsTable.$inferInsert
) {
    await db
        .insert(UserNotificationSettingsTable)
        .values(settings)
        .onConflictDoNothing();
    revalidateUserNotificationSettingsGlobalCache(settings.userId);
}
