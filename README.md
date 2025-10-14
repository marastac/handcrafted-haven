# WDD430 – Handcrafted Haven

A web marketplace where artisans can showcase and sell handcrafted products.

## Week 07 – Project Completion (Submission)

### Links

- **Application (Vercel):** `TODO: https://YOUR-VERCEL-APP-URL/`
- **GitHub Project Board (≥10 items):** `TODO: https://github.com/users/marastac/projects/<BOARD_NUMBER>`
- **Repository:** https://github.com/marastac/handcrafted-haven
- **Group Demo Video:** `TODO: https://YOUR-VIDEO-LINK`

### Implemented

- Responsive catalog with cards
- Search, category filter, sorting (price ↑/↓, rating ↓)
- Product detail page (`/product/[id]`)
- A11y basics: skip link, labels, aria-live result count, focus styles
- Tailwind brand theme and consistent UI polish

### Quick tour

1. Search “mug” → filter by category → sort by price.
2. Open **View details** → verify artisan, price, rating, description.

### Tech

- Next.js (App Router, TypeScript)
- Tailwind CSS (v4 theme tokens)
- Vercel

### Run locally

```bash
npm install
npm run dev
```

Structure
src/app/page.tsx
src/app/product/[id]/page.tsx
src/app/layout.tsx
src/app/globals.css
src/components/ProductCard.tsx
src/lib/products.ts

Participant

Mario Alberto Astonitas Acuña (@marastac
)

---

## 🚀 Qué te falta para dejarlo 100% listo

1. **Publica en Vercel** y copia la **URL de producción**.
2. Abre tu **Project Board** y copia el **enlace exacto** (con número).
3. Sube el **video demo** (YouTube/Drive) y copia el enlace.
4. Reemplaza los **3 `TODO:`** en el **documento para Canvas** y en el **README**.
5. Haz commit & push:

```bash
git add README.md
git commit -m "docs: W07 submission with links and rubric checklist"
git push origin main
```
