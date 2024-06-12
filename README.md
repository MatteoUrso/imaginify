## 📋 <a name="table">Table of Contents</a>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🔋 [Features](#features)
3. 🤸 [Quick Start](#quick-start)
4. 🕸️ [Assets & Code](#snippets)

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Clerk
- MongoDB
- Shadcn
- Tailwind CSS
- Cloudinary
- Stripe

## <a name="features">🔋 Features</a>

👉 **Authentication and Authorization**: Secure user access with registration, login, and route protection.

👉 **Community Image Showcase**: Explore user transformations with easy navigation using pagination

👉 **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately

👉 **Image Restoration**: Revive old or damaged images effortlessly

👉 **Image Recoloring**: Customize images by replacing objects with desired colors easily

👉 **Image Generative Fill**: Fill in missing areas of images seamlessly

👉 **Object Removal**: Clean up images by removing unwanted objects with precision

👉 **Background Removal**: Extract objects from backgrounds with ease

👉 **Download Transformed Images**: Save and share AI-transformed images conveniently

👉 **Transformed Image Details**: View details of transformations for each image

👉 **Transformation Management**: Control over deletion and updates of transformations

👉 **Credits System**: Earn or purchase credits for image transformations

👉 **Profile Page**: Access transformed images and credit information personally

👉 **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use

👉 **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MatteoUrso/imaginify.git
cd yoom
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Clerk Webhook Secret
WEBHOOK_SECRET=

# MongoDB
MONGODB_URL=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Stripe Webhook Secret
STRIPE_WEBHOOK_SECRET=

# Other
NEXT_PUBLIC_SERVER_URL=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        purple: {
          100: "#F4F7FE",
          200: "#BCB6FF",
          400: "#868CFF",
          500: "#7857FF",
          600: "#4318FF",
        },
        dark: {
          400: "#7986AC",
          500: "#606C80",
          600: "#2B3674",
          700: "#384262",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        IBMPlex: ["var(--font-ibm-plex)"],
      },
      backgroundImage: {
        "purple-gradient": "url('/assets/images/gradient-bg.svg')",
        banner: "url('/assets/images/banner-bg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

.auth {
  @apply flex-center min-h-screen w-full bg-purple-100;
}

.root {
  @apply flex min-h-screen w-full flex-col bg-white lg:flex-row;
}

.root-container {
  @apply mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10;
}

/* ========================================== TAILWIND STYLES */
@layer utilities {
  /* ===== UTILITIES */
  .wrapper {
    @apply max-w-5xl mx-auto px-5 md:px-10 w-full text-dark-400 p-16-regular;
  }

  .gradient-text {
    @apply bg-purple-gradient bg-cover bg-clip-text text-transparent;
  }

  /* ===== ALIGNMENTS */
  .flex-center {
    @apply flex justify-center items-center;
  }

  .flex-between {
    @apply flex justify-between items-center;
  }

  /* ===== TYPOGRAPHY */
  /* 44 */
  .h1-semibold {
    @apply text-[36px] font-semibold sm:text-[44px] leading-[120%] sm:leading-[56px];
  }

  /* 36 */
  .h2-bold {
    @apply text-[30px] font-bold md:text-[36px] leading-[110%];
  }

  /* 30 */
  .h3-bold {
    @apply font-bold text-[30px] leading-[140%];
  }

  /* 24 */
  .p-24-bold {
    @apply font-bold text-[24px] leading-[120%];
  }

  /* 20 */
  .p-20-semibold {
    @apply font-semibold text-[20px] leading-[140%];
  }

  .p-20-regular {
    @apply font-normal text-[20px] leading-[140%];
  }

  /* 18 */
  .p-18-semibold {
    @apply font-semibold text-[18px] leading-[140%];
  }

  /* 16 */
  .p-16-semibold {
    @apply font-semibold text-[16px] leading-[140%];
  }

  .p-16-medium {
    @apply font-medium text-[16px] leading-[140%];
  }

  .p-16-regular {
    @apply font-normal text-[16px] leading-[140%];
  }

  /* 14 */
  .p-14-medium {
    @apply font-medium text-[14px] leading-[120%];
  }

  /* 10 */
  .p-10-medium {
    @apply font-medium text-[10px] leading-[140%];
  }

  /* =====  SHADCN OVERRIDES */
  .button {
    @apply py-4 px-6 flex-center gap-3 rounded-full p-16-semibold focus-visible:ring-offset-0 focus-visible:ring-transparent !important;
  }

  .dropdown-content {
    @apply shadow-lg rounded-md overflow-hidden p-0;
  }

  .dropdown-item {
    @apply p-16-semibold text-dark-700 cursor-pointer transition-all px-4 py-3 rounded-none outline-none hover:border-none focus-visible:ring-transparent hover:text-white hover:bg-purple-gradient hover:bg-cover focus-visible:ring-offset-0 focus-visible:outline-none !important;
  }

  .input-field {
    @apply rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important;
  }

  .search-field {
    @apply border-0 bg-transparent text-dark-600 w-full placeholder:text-dark-400 h-[50px] p-16-medium focus-visible:ring-offset-0 p-3 focus-visible:ring-transparent !important;
  }

  .submit-button {
    @apply bg-purple-gradient bg-cover rounded-full py-4 px-6 p-16-semibold h-[50px] w-full md:h-[54px];
  }

  .select-field {
    @apply w-full border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 rounded-[16px] h-[50px] md:h-[54px] text-dark-600 p-16-semibold disabled:opacity-100 placeholder:text-dark-400/50 px-4 py-3 focus:ring-offset-0 focus-visible:ring-transparent focus:ring-transparent focus-visible:ring-0 focus-visible:outline-none !important;
  }

  .select-trigger {
    @apply flex items-center  gap-2 py-5 capitalize focus-visible:outline-none;
  }

  .select-item {
    @apply py-3 cursor-pointer hover:bg-purple-100;
  }

  .IconButton {
    @apply focus-visible:ring-transparent focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none !important;
  }

  .sheet-content button {
    @apply focus:ring-0 focus-visible:ring-transparent focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none !important;
  }

  .success-toast {
    @apply bg-green-100 text-green-900;
  }

  .error-toast {
    @apply bg-red-100 text-red-900;
  }

  /* Home Page */
  .home {
    @apply sm:flex-center hidden h-72 flex-col gap-4 rounded-[20px] border bg-banner bg-cover bg-no-repeat p-10 shadow-inner;
  }

  .home-heading {
    @apply h1-semibold max-w-[500px] flex-wrap text-center text-white shadow-sm;
  }

  /* Credits Page */
  .credits-list {
    @apply mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-9 xl:grid-cols-3;
  }

  .credits-item {
    @apply w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-8 shadow-xl shadow-purple-200/20 lg:max-w-none;
  }

  .credits-btn {
    @apply w-full rounded-full bg-purple-100 bg-cover text-purple-500 hover:text-purple-500;
  }

  /* Profile Page */
  .profile {
    @apply mt-5 flex flex-col gap-5 sm:flex-row md:mt-8 md:gap-10;
  }

  .profile-balance {
    @apply w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-8;
  }

  .profile-image-manipulation {
    @apply w-full rounded-[16px] border-2 border-purple-200/20 bg-white p-5 shadow-lg shadow-purple-200/10 md:px-6 md:py-8;
  }

  /* Transformation Details */
  .transformation-grid {
    @apply grid h-fit min-h-[200px] grid-cols-1 gap-5 py-8 md:grid-cols-2;
  }

  .transformation-original_image {
    @apply h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-purple-100/20 object-cover p-2;
  }

  /* Collection Component */
  .collection-heading {
    @apply md:flex-between mb-6 flex flex-col gap-5 md:flex-row;
  }

  .collection-list {
    @apply grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3;
  }

  .collection-empty {
    @apply flex-center h-60 w-full rounded-[10px] border border-dark-400/10 bg-white/20;
  }

  .collection-btn {
    @apply button w-32 bg-purple-gradient bg-cover text-white;
  }

  .collection-card {
    @apply flex flex-1 cursor-pointer flex-col gap-5 rounded-[16px] border-2 border-purple-200/15 bg-white p-4 shadow-xl shadow-purple-200/10 transition-all hover:shadow-purple-200/20;
  }

  /* MediaUploader Component */
  .media-uploader_cldImage {
    @apply h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-purple-100/20 object-cover p-2;
  }

  .media-uploader_cta {
    @apply flex-center flex h-72 cursor-pointer flex-col gap-5 rounded-[16px] border border-dashed bg-purple-100/20 shadow-inner;
  }

  .media-uploader_cta-image {
    @apply rounded-[16px] bg-white  p-5 shadow-sm shadow-purple-200/50;
  }

  /* Navbar Component */
  .header {
    @apply flex-between fixed h-16 w-full border-b-4 border-purple-100 bg-white p-5 lg:hidden;
  }

  .header-nav_elements {
    @apply mt-8 flex w-full flex-col items-start gap-5;
  }

  /* Search Component */
  .search {
    @apply flex w-full rounded-[16px] border-2 border-purple-200/20 bg-white px-4 shadow-sm shadow-purple-200/15 md:max-w-96;
  }

  /* Sidebar Component */
  .sidebar {
    @apply hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex;
  }

  .sidebar-logo {
    @apply flex items-center gap-2 md:py-2;
  }

  .sidebar-nav {
    @apply h-full flex-col justify-between md:flex md:gap-4;
  }

  .sidebar-nav_elements {
    @apply hidden w-full flex-col items-start gap-2 md:flex;
  }

  .sidebar-nav_element {
    @apply flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner;
  }

  .sidebar-link {
    @apply p-16-semibold flex size-full gap-4 p-4;
  }

  /* TransformationForm Component */
  .prompt-field {
    @apply flex flex-col gap-5 lg:flex-row lg:gap-10;
  }

  .media-uploader-field {
    @apply grid h-fit min-h-[200px] grid-cols-1 gap-5 py-4 md:grid-cols-2;
  }

  /* TransformedImage Component */
  .download-btn {
    @apply p-14-medium mt-2 flex items-center gap-2 px-2;
  }

  .transformed-image {
    @apply h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-purple-100/20 object-cover p-2;
  }

  .transforming-loader {
    @apply flex-center absolute left-[50%] top-[50%] size-full -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-[10px] border bg-dark-700/90;
  }

  .transformed-placeholder {
    @apply flex-center p-14-medium h-full min-h-72 flex-col gap-5 rounded-[16px] border border-dashed bg-purple-100/20 shadow-inner;
  }
}

/* =====  CLERK OVERRIDES */
.cl-userButtonBox {
  display: flex;
  flex-flow: row-reverse;
  gap: 12px;
}

.cl-userButtonOuterIdentifier {
  font-size: 16px;
  font-weight: 600;
  color: #384262;
}
```

</details>

<details>
