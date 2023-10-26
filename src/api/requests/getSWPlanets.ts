import { apiInstance } from "../..";
import { BaseSWPlanetsResponse } from '../responses/sw';

export const getSWPlanetsRequest =async () => {
    const { data } = await apiInstance.get<BaseSWPlanetsResponse>(`/planets/`);
    return data;
};