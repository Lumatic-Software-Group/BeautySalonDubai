# BeautySalonDubai (Merged Root)

This directory merges the working Next.js migration (`nextjs-glamour-palace`) with the older attempt (`glamour-palace-nextjs`) into a single root folder.

## Structure
- `app/`, `components/`, `public/`, `styles/` — from nextjs-glamour-palace (finalized implementation)
- package.json, next.config.js, tsconfig.json — from nextjs-glamour-palace (clean compatible versions)
- Any unique files from glamour-palace-nextjs are copied over where non-conflicting.

## Run
```
cd BeautySalonDubai
npm install --no-optional
npm run dev
```
If you use yarn:
```
corepack enable
cd BeautySalonDubai
yarn install
yarn dev
```

## Notes
- Uses Vazir font globally across the entire app.
- Virtual Tour now displays real images from `public/assets/images`.
- Single-page scrollable layout with Hero, Services, Virtual Tour, Testimonials, Careers, Contact, and Footer.
- If you previously had dependency errors, use `npm install --no-optional` or switch to `yarn install`.
