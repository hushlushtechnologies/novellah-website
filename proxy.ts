// proxy.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);   // default export is fine, keep as-is

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};