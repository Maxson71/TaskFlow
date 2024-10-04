import { Profile } from "../_domain/types";

export const getProfileNotes = (profile: Profile) => {
    return profile.name ? profile.name : profile.email;
};