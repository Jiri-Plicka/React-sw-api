import { useMutation, useQueryClient } from "react-query";
import { getSWListRequest } from "../requests/getSWList";
import { queryKeys } from '../query';

export const useGetSWListMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(
        () => {
            return getSWListRequest();
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries(queryKeys.SWS);
            },
        }
    );
};