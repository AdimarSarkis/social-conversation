import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
    const profile = await initialProfile();
    const group = await db.group.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    if(group){
        return redirect(`/groups/${group.id}`)
    }
    return ( 
        <InitialModal />
     );
}
 
export default SetupPage;