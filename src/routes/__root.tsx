import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">Page not found</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground">Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Լաստիվեր | Lastuer Restaurant — Haghpat, Alaverdi, Armenia" },
      { name: "description", content: "Lastuer — authentic Armenian cuisine in Haghpat, Alaverdi. Traditional dishes, river views, warm hospitality." },
      { property: "og:title", content: "Լաստիվեր | Lastuer Restaurant — Haghpat, Alaverdi, Armenia" },
      { property: "og:description", content: "Lastuer — authentic Armenian cuisine in Haghpat, Alaverdi. Traditional dishes, river views, warm hospitality." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Լաստիվեր | Lastuer Restaurant — Haghpat, Alaverdi, Armenia" },
      { name: "twitter:description", content: "Lastuer — authentic Armenian cuisine in Haghpat, Alaverdi. Traditional dishes, river views, warm hospitality." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/924ab05e-2720-44ae-9c8e-fcc9080e47be/id-preview-ba6ba0f2--4cdce7cc-f3b6-427a-8e41-eb5a8a73f496.lovable.app-1780659145279.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/924ab05e-2720-44ae-9c8e-fcc9080e47be/id-preview-ba6ba0f2--4cdce7cc-f3b6-427a-8e41-eb5a8a73f496.lovable.app-1780659145279.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Noto+Sans+Armenian:wght@400;500;600&family=Noto+Serif+Armenian:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
