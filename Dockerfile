FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run build


# -- Production image --
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV MONGODB_URI=mongodb+srv://iconic:iconic1234@cluster0.epa5l7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
ENV NEXT_PUBLIC_API_BASE_URL=http://localhost:8081/api
ENV ADMIN_USERNAME=admin
ENV ADMIN_PASSWORD=admin123
ENV JWT_SECRET=5f1d3b5d133f42f17e7092f6abd5a5404b5bc0f51dd1da4f8dd575f9b4fdd38f

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src

EXPOSE 8081
CMD ["npm", "run", "start"]