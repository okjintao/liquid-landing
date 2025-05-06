# Liquid Landing

A modern, beautiful landing and docs site for the Liquid Protocol ecosystem.

---

## 🚀 Live Site

[https://beliquid.fun/](https://beliquid.fun/)

---

## 🛠️ Local Development

1. **Clone the repo:**
   ```sh
   git clone https://github.com/okjintao/liquid-landing.git
   cd liquid-landing
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   ```
3. **Run the dev server:**
   ```sh
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🧹 Formatting & Linting

- **Format all code (Prettier + import sorting):**
  ```sh
  npx prettier --write .
  ```
- **Lint:**
  ```sh
  pnpm lint
  ```

---

## 🚢 Deployment

- **Production is deployed on [Vercel](https://vercel.com/):**
  - Every push to `main` auto-deploys to [https://beliquid.fun/](https://beliquid.fun/)
  - Preview deployments are created for PRs.
- **Manual build:**
  ```sh
  pnpm build
  ```

---

## 🧪 Continuous Integration (CI)

- GitHub Actions run on every PR and push to `main`:
  - Lint
  - Format check
  - Build
- See `.github/workflows/ci.yml` for details.

---

## 🤝 Contributing

- Please run `npx prettier --write .` before committing.
- Ensure all lint and build checks pass.
- Open a PR and describe your changes.

---

## 📄 License

MIT
