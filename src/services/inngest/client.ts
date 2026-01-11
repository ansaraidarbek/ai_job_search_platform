import { DeletedObjectJSON, UserJSON } from "@clerk/nextjs/server";
import { Inngest, EventSchemas } from "inngest";

type CLerkWebhookData<T> = {
    data: {
        data: T;
        raw: string;
        headers: Record<string, string>;
    };
};

type Events = {
    "clerk/user.created": CLerkWebhookData<UserJSON>;
    "clerk/user.updated": CLerkWebhookData<UserJSON>;
    "clerk/user.deleted": CLerkWebhookData<DeletedObjectJSON>;
};

// Create a client to send and receive events
export const inngest = new Inngest({
    id: "appliance",
    schemas: new EventSchemas().fromRecord<Events>(),
});
