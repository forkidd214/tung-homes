# Visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/


##### BASE
FROM node:20-alpine AS base
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN corepack enable pnpm && corepack use pnpm@latest
WORKDIR /app


##### DEPENDENCIES
FROM base AS deps
RUN \
  --mount=type=bind,source=package.json,target=package.json \
  --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
  pnpm install --frozen-lockfile


# Uncomment the following block if not relying on the standalone output of nextjs.
##### PROD DEPENDENCIES
# FROM base AS prod-deps
# ENV NODE_ENV=production
# COPY --from=deps /app/node_modules ./node_modules
# RUN \
#   --mount=type=bind,source=package.json,target=package.json \
#   --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
#   pnpm prune --prod


##### BUILD
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build


##### TEST
# FROM build as test
# ENV NODE_ENV test
# USER node
# RUN pnpm run e2e


##### PRODUCTION
FROM base AS prod
ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app/public ./public
# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown node .next
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build --chown=node /app/.next/standalone ./
COPY --from=build --chown=node /app/.next/static ./.next/static
# Rev up the enginee
USER node
EXPOSE 3000
ENV PORT=3000
# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]