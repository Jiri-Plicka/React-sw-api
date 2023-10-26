import { QueryClient } from "react-query";

/**
 * Inicializace query clienta
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
        },
    },
});

export const queryKeys = {
    SWS: "people",
};
