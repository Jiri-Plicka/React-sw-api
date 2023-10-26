import { apiInstance } from '../..';
import { BaseSWPeopleResponse } from '../responses/sw';

export const getSWListRequest = async () => {
    const { data } = await apiInstance.get<BaseSWPeopleResponse>(`/people/?limit=20`);
    return data;
};