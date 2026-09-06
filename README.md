# BuildBrake website

Product website and documentation for [BuildBrake](https://github.com/karangandhidev/buildbrake).

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Production build

```bash
npm ci
npm run lint
npm run build
```

The static website is generated in `dist/client`.

## Deploy with Vercel

Import this GitHub repository into Vercel and keep the repository settings at their defaults. The checked-in `vercel.json` runs the production build and publishes `dist/client`.

After deployment, add `buildbrake.karangandhi.dev` under **Project Settings > Domains**. Vercel will display the DNS record that must be added at the domain provider.
