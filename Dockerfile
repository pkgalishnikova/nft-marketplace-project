FROM node:lts AS dependencies
WORKDIR /nft-marketplace
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts AS builder
WORKDIR /nft-marketplace
COPY . .
COPY --from=dependencies /nft-marketplace/node_modules ./node_modules
RUN yarn build

FROM node:lts AS runner
WORKDIR /nft-marketplace
ENV NODE_ENV=production

COPY --from=builder /nft-marketplace/const ./const
COPY --from=builder /nft-marketplace/components_new ./components_new
COPY --from=builder /nft-marketplace/pages ./pages
COPY --from=builder /nft-marketplace/public ./public
COPY --from=builder /nft-marketplace/styles ./styles
COPY --from=builder /nft-marketplace/package.json ./package.json
COPY --from=builder /nft-marketplace/.next ./.next
COPY --from=builder /nft-marketplace/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]