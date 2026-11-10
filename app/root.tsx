import { configureTracking } from "@agent-native/core/client/analytics";
import { appPath } from "@agent-native/core/client/api-path";
import { createAgentNativeQueryClient } from "@agent-native/core/client/hooks";
import { AppProviders } from "@agent-native/toolkit/app/providers";
import { useState } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";

import { Layout as AppLayout } from "@/components/layout/Layout";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { AppToolkitProvider } from "@/components/ui/toolkit-provider";
import { APP_NAME, APP_TITLE } from "@/lib/app-config";

import stylesheet from "./global.css?url";

configureTracking({
  getDefaultProps: (_name, properties) => ({
    ...properties,
    app: APP_NAME,
  }),
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const THEME_INIT_SCRIPT = `
(function() {
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');
  document.documentElement.style.colorScheme = 'light';
  try { localStorage.setItem('theme', 'light'); } catch(e) {}
})();
`;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        {/* guard:allow-raw-color - theme-color metadata requires a concrete browser-chrome color. */}
        <meta name="theme-color" content="#F5EFE6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content={APP_TITLE} />
        <link rel="icon" type="image/svg+xml" href={appPath("/favicon.svg")} />
        <link rel="icon" type="image/png" sizes="32x32" href={appPath("/favicon-32x32.png")} />
        <link rel="icon" type="image/png" sizes="16x16" href={appPath("/favicon-16x16.png")} />
        <link rel="shortcut icon" href={appPath("/favicon.ico")} />
        <link rel="apple-touch-icon" href={appPath("/icon-180.svg")} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  const [queryClient] = useState(() => createAgentNativeQueryClient());
  return (
    <AppToolkitProvider>
      <AppProviders isPublicPath={true} queryClient={queryClient}>
        <SmoothScrollProvider>
          <AppLayout>
            <Outlet />
          </AppLayout>
        </SmoothScrollProvider>
      </AppProviders>
    </AppToolkitProvider>
  );
}

export { ErrorBoundary } from "@agent-native/toolkit/app/shared";
