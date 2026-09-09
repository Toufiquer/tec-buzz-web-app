# Please Follow the Unified Design Standards & Project Requirements


## UI Standards

- Use Shadcn UI, creamy-white/white backgrounds, `max-w-7xl`, rounded-sm borders, responsive layouts, and minimal/no custom padding or margins.
- Use `border-[#eadfca]` for borders.
- All section root borders must use:

```css
.custom-parent-border {
  border-block: 1px solid #eadfca;
  border-inline: 1px solid #eadfca;
}
```

- Add `custom-parent-border` to the root of `Query.tsx` and `Mutation.tsx`.
- Remove only root-level direct `border-x`/`border-y` classes. Preserve internal borders.
- Buttons must use Shadcn `size="sm"`, `cursor-pointer`, 0.7s transitions, and non-black colors:
  - Amber: normal actions
  - Light green: submit/save
  - Light red: destructive actions

## Data, API, and State

- Use Redux/RTK Query for dashboard fetching, caching, and mutations.
- Secure and rate-limit every API.
- Reuse existing APIs, schemas, company resolver, icon registry, UI components, and editor patterns.
- Do not create duplicate APIs, schemas, or company settings.
- Use `global.ts` for company defaults: name, email, phone, WhatsApp, logo, description, address, bio, and social links.
- Company data priority:

```text
Dashboard company data → global.ts defaults → section-54 data.ts fallback
```

- Keep section-specific content independent from company information.
- Do not hardcode company-specific data inside `section-54`.

## Loading, Feedback, and Dialogs

- Show success/error toasts for updates, deletes, and relevant actions.
- Include loading and disabled states.
- Use Skeleton loaders while loading.
- Use `AlertDialog` + `ScrollArea` for delete confirmation.
- Use `Dialog` + `ScrollArea` for view/edit/icon/media pickers.
- Refresh buttons require a 60-second cooldown countdown.

## Media, Icons, and Navigation

- Use icons only from `src/components/all-icons`.
- Use the existing media-library picker with search, type filters, Upload, and `ScrollArea`.
- Use `next/image` with `alt`, `width`, and `height`; use `unoptimized` for dashboard, user, or external URLs.
- Use `next/link` for internal navigation.
- Use `<a>` only for external, mailto, tel, hash, download, or new-tab links.

## Lists and Text

- Lists with more than 10 items must include working pagination and an items-per-page Select: `10`, `25`, `50`, `100`.
- Truncate long text with `...`; show the full value through a tooltip or View modal.
- Ensure all pages and dialogs work on mobile, tablet, and desktop.
- Keep the implementation type-safe and safe when data is missing.

============================================================================================================================
============================================================================================================================
============================================================================================================================
Only create the plan; do not execute any task.

Review the work involving folders and prepare a short, step-by-step plan in Bangla. Ensure the plan covers checking every folder, updating files where necessary, and verifying that everything works.

For each step, provide:
1. The task in Bangla
2. A ready-to-use English prompt for that step

I will execute each step later, one by one.

Here is the problem That I want to solve:
I want to only Update Mutation.tsx with the following instructions. 
1. Create a global Image picker form modal and it will load full media and reuse it in all Mutation if needed with same design. also there is a button 'Edit' and it will open the modal and I can edit the select image. 
2. If there is any layout is need to change for Good Looking Editor UI than change it. 
---------------------------------------------------------
Now pleas generate step by step of  prompt. and at the top please add a line 'Please do the following task one after another. and after completing one then do the next one.

============================================================================================================================
============================================================================================================================
look at the file 'business-growth.txt' Now write a prompt to create this business features, so I can use this prompt in others applications. I want all features same as business-growth page. 
============================================================================================================================

I have a company name TecBuzz, 'http://tecbuzz.bd/', I need to update my website and service. 

I have those service and here is charge for service. 
Servie Name        | Discount Cost | Real Cost 
1. Website:        | 8000          | 15000
2. Hosting:        | 500           | 500
3. Domain:         | 2000          | 2000
4. Content:        | 2500          | 3500
5. Marketing:      | 1000          | 1000
6. Service:        | 1000          | 1000
7. SEO:            | 2000          | 3000
8. Ad Bosting:     | 1000          | 4000

Content Monthly Package (3 Reels + 7 Post): 
Reels: 3/week (Sun, Tue, Thu)
Static Post: 7/week (everyday)
Reels: 12*150=1800
Static Post: 30*20=600
Ad Post (21 Static Post): 21*50=1050


Content Monthly Package (7 Reels + 7 Post): 
Reels: 7/week (everyday)
Static Post: 7/week (everyday)
Reels: 30*150=4500
Static Post: 30*20=600
Ad Post (21 Static Post): 21*50=1050


Content Monthly Package (14 Reels + 14 Post): 
Reels: 14/week (everyday 2 Reels)
Static Post: 14/week (everyday 2 Static post)
Reels: 60*150=9000
Static Post: 60*20=1200
Ad Post 1 (21 Static Post): 21*50=1050
Ad Post 2 (21 Static Post): 21*50=1050

My Website features : 
1. Authentication, Role based access, Employee management. 
2. Full customize able webiste.
3. Blocking user.
4. Fast Loading. 
5. Tracking like Google GTA4, FB pixel, ticktop pixel 
6. WhatsApp
7. Business growth [manage lead user, tracking them, following up, councillor management]
8. Media [ImageBB, Youtube, Uploadthings]
9. Install as PWA. 
10. Sequrite rate-limit, Authentication, and authrorization.

* Please have a Look on the website for more info. 

Based on bangladesh SMC give me Full Business plan. pricing, and service. I can delevery in 24-48 Hours. I want from You 
1. Website : Waht I need to update?
2. Business pricing: Update pricing 
3. How to Busting and Do funneling. 
4. How to get customer form facebook AD or Google 
5. Any Idea to grow my business?

* Expalin all details in bangla. 
