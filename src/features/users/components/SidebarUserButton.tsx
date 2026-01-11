import { Suspense } from "react";
import { SidebarUserButtonClient } from "./_SidebarUserButtonClient";
import { getCurrentUser } from "@/src/services/clerk/lib/getCurrentAuth";
import { LogOutIcon } from "lucide-react";
import { SidebarMenuButton } from "@/src/components/ui/sidebar";
import { SignOutButton } from "./AuthButtons";

export function SidebarUserButton() {
    return (
        <Suspense>
            <SidebarUserSuspense />
        </Suspense>
    );
}

async function SidebarUserSuspense() {
    const { user } = await getCurrentUser({ allData: true });

    if (user == null) {
        return (
            <SignOutButton>
                <SidebarMenuButton>
                    <LogOutIcon />
                    <span>Log Out</span>
                </SidebarMenuButton>
            </SignOutButton>
        );
    }

    return <SidebarUserButtonClient user={user} />;
}
