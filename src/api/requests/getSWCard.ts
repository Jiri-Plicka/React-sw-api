import { apiInstance } from "../..";
import { BaseSWPeople } from "../responses/sw";

export const getSWCardRequest = async (name: string) => {
    const { data } = await apiInstance.get<BaseSWPeople>(`/people/${name}`);
    return data;
};