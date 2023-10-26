import { useMutation, useQueryClient } from "react-query";
import { getSWCardRequest } from "../requests/getSWCard";
import { queryKeys } from "../query";

export const useGetSWCardMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(
        (name: string) => {
            return getSWCardRequest(name);
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries(queryKeys.SWS);
            },
        }
    );
};