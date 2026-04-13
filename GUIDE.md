
# 🎓 Mentor's Guide: Building Your Junior Portfolio

Hey there! As you build this out, here is the UX strategy and reasoning behind the code I've provided.

## 1. UX Strategy & Navigation
- **The "Scanner" Layout:** Recruiters spend about 6-8 seconds on a portfolio. This site uses a **single-page architecture (SPA)** with clear headings so they can find your projects immediately.
- **Sticky Nav:** Always keep your contact info and navigation visible so they don't have to scroll back up to reach you.
- **Visual Hierarchy:** Large bold typography for your name/role, and neutral backgrounds to make your project screenshots "pop."

## 2. Page Content Outline
- **Home (Hero):** Clearly states your "Value Proposition." You aren't just a dev; you are someone who "bridges the gap" between design and code.
- **Projects:** Instead of just a list, we show **Case Studies**. This is crucial for UX roles. It shows *how* you think (Problem -> Solution).
- **About:** Kept short. We use a bulleted skills section because it's easier to read than a paragraph.
- **Contact:** Large, high-contrast section at the bottom. The "Final Call to Action."

## 3. Why This Layout Works
- **Mobile First:** The grid system (`grid-cols-1 md:grid-cols-2`) ensures it looks perfect on an iPhone and a Macbook.
- **Problem/Solution Framing:** Juniors often just show "what they built." Seniors show "what problem they solved." This code encourages you to fill in the *Problem Statement* and *Solution* for every project.

## 4. Simple Folder Structure
```text
/
├── components/       # Reusable UI parts (Navbar, Cards, Modals)
├── App.tsx           # Main layout and section logic
├── constants.tsx     # ALL YOUR CONTENT (Update your info here!)
├── types.ts          # TypeScript definitions
├── index.tsx         # Entry point
└── index.html        # Main template
```

## 5. Deployment Steps
1. **Push to GitHub:** Create a new repository and push this code.
2. **Netlify/Vercel:**
   - Link your GitHub account.
   - Select your portfolio repo.
   - Set build command to: `npm run build` (or similar if using a bundler).
   - Set publish directory to: `dist` or `build`.
3. **Domain:** Use the free `.netlify.app` or `.vercel.app` domain, or connect a custom one.

## 6. Portfolio-Ready Copy Tips
- **Headline:** Don't just say "Welcome to my site." Say "I build digital experiences that work."
- **Role:** Always use the title you want to be hired for (e.g., "Junior UX Web Developer").
- **Projects:** Use real screenshots! Even if they are just from a simple class project, high-quality images make you look professional.

**Ready to start?** Just update the `constants.tsx` file with your own projects and info!
