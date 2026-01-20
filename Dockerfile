# ===== Stage 1: build =====
FROM node:20-alpine AS build

WORKDIR /app

COPY app/package*.json ./
RUN npm install --only=production

COPY app .

# ===== Stage 2: runtime =====
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
