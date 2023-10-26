import { useMutation, useQueryClient } from "react-query";
import { getSWPlanetsRequest } from "../requests/getSWPlanets";
import { queryKeys } from "../query";

export const useGetSWPlanetsMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(
        () => {
            return getSWPlanetsRequest();
        },
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries(queryKeys.SWS);
            },
        }
    );
};