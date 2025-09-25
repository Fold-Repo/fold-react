"use client"

import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "@/store";
import { HeroUIProvider } from "@heroui/react"

// 👇 Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

export function Providers({ children }: { children: React.ReactNode }) {

    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 10,
                gcTime: 1000 * 60 * 60,
                refetchOnWindowFocus: false,
                retry: 2,
                retryDelay: 3000
            },
        }
    }));

    // 👇 Init AOS globally
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HeroUIProvider>
                        {children}
                    </HeroUIProvider>
                </PersistGate>
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
