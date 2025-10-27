import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchInterval: 30000, // auto-refresh every 30s
            staleTime: 15000,
            retry: 1,
        },
    },
});
