# MLSoft Ltd — company website

Marketing site for [MLSoft Ltd](https://mlsoft.ltd). Product site: [Velleo](https://velleo.app) (separate repo).

## Local dev

```powershell
cd c:\Users\Marek\Projects\MLSoft
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel (separate project from Velleo)

1. Create GitHub repo, e.g. `mareklatos60-lab/MLSoft` (or `MLSoft-website`).
2. Push this folder:

```powershell
cd c:\Users\Marek\Projects\MLSoft
git init
git add .
git commit -m "Initial MLSoft company site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/MLSoft.git
git push -u origin main
```

3. Vercel → **Add New Project** → import **this** repo (not Velleo).
4. Framework: **Next.js**, Root Directory: **`.`** (repo root).
5. **Settings → Domains** → add `mlsoft.ltd` and `www.mlsoft.ltd`.
6. Deploy.

Velleo project stays on `velleo.app` with Root Directory `apps/web` — do not mix domains.

## Optional env

Usually none. If you add contact forms later:

- `RESEND_API_KEY`, etc. — only in **this** Vercel project.
