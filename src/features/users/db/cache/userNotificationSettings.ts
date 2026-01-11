import { getGlobalTag, getIdTag } from "@/lib/dataCache";
import { revalidateTag } from "next/cache";

export function getUserNotificationSettingsGlobalGlobalTag() {
    return getGlobalTag("userNotificationSettings");
}

export function getUserNotificationSettingsGlobalIdTag(id: string) {
    return getIdTag("userNotificationSettings", id);
}

export function revalidateUserNotificationSettingsGlobalCache(id: string) {
    revalidateTag(getUserNotificationSettingsGlobalGlobalTag(), "max");
    revalidateTag(getUserNotificationSettingsGlobalIdTag(id), "max");
}