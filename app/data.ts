export const templates = [
    {
        id: 1,
        slug: 'sass-landing-page-cosmic',
        name: "Cosmic",
        title: "SaaS Landing Page",
        description: "A modern, responsive landing page template for developers, optimized for SaaS projects. Built with shadcn/ui, Tailwind CSS, and Next.js.",
        content: "Laravel Homestead is an official, pre-packaged Vagrant box that provides you a wonderful development environment without requiring you to install PHP, a web server, and any other server software on your local machine. No more worrying about messing up your operating system! Vagrant boxes are completely disposable. If something goes wrong, you can destroy and re-create the box in minutes!",
        meta_title: "Cosmic - SaaS Landing Page Shadcn Template",
        meta_description: "A modern, responsive landing page template for developers, optimized for SaaS projects. Built with shadcn/ui, Tailwind CSS, and Next.js.",
        images: [
            '/cosmic.jpg',
            '/cosmic2.jpg',
            '/cosmic.jpg',
        ],
        price: "$49",
        price_label: "Next.js",
        preview_url: "https://cosmic.shadcnuikit.com/",
        purchase_url: "",
        github_url: "",
        categories: [2, 3],
        variants: [],
        paddle_id: {
            production: "pri_01jcqbwg15v03ypcak7rm3bbg4",
            sandbox: "pri_01jcte94jhv0dg09fa9x64thmr"
        },
        release_date: '2025-01-01',
        last_updated: '2025-02-01',
        page_count: 9,
        componentsTree: ['Header', 'Hero section', 'CTA', 'Contact Form', 'Email Subscribe Form', 'Features Blocks', 'Footer']
    },
    {
        id: 1,
        slug: 'landing-page-miranda',
        name: "Miranda",
        title: "Landing Page Template",
        description: "A modern, responsive landing page template for developers. Built with shadcn/ui, Tailwind CSS, and React.",
        content: "",
        meta_title: "Miranda - Landing Page Shadcn Template",
        meta_description: "",
        images: [
            '/miranda1.png',
            '/miranda2.png',
            '/miranda3.png',
        ],
        price: "",
        price_label: "React",
        preview_url: "https://shadcn-landing-page.vercel.app/",
        purchase_url: "",
        github_url: "https://github.com/leoMirandaa/shadcn-landing-page",
        categories: [1, 3],
        variants: [],
        paddle_id: {
            production: "",
            sandbox: ""
        },
        release_date: '2024-07-01',
        last_updated: '2025-02-01',
        page_count: 1,
        componentsTree: ['Navbar', 'Sidebar(mobile)', 'Hero', 'Sponsors', 'About', 'Stats', 'How It Works', 'Features', 'Services', 'Call-to-Action (CTA)', 'Testimonials', 'Team', 'Pricing', 'Newsletter', 'Frequently Asked Questions(FAQ)', 'Footer']
    },
] as const

export type Template = (typeof templates)[number];

export const categories = [
    {
        id: 1,
        slug: "free",
        name: "Free Templates",
        description:
            "Open source Shadcn UI templates. Take what you want and use it freely.",
        meta_title: 'Free Shadcn Templates',
        meta_description: 'Open source and free shadcn/ui templates. Browse projects built with Tailwind CSS 4, Next.js, React, Vue, and Laravel. Supports Typescript.'
    },
    {
        id: 2,
        slug: "premium",
        name: "Premium Templates",
        description:
            "Check out premium landing pages, admin dashboard templates, ecommerce templates and more, powered by Shadcn UI.",
        meta_title: 'Premium Shadcn Templates',
        meta_description: 'Premium and paid shadcn/ui templates. Browse projects built with Tailwind CSS 4, Next.js, React, Vue, and Laravel. Supports Typescript.'
    },
    {
        id: 3,
        slug: "landing-pages",
        name: "Landing Pages",
        description:
            "Take a look at landing pages created with Shadcn UI support. Choose from high-quality templates with high conversion rates to best reflect your project.",
        meta_title: 'Shadcn Landing Page Templates',
        meta_description: 'Check out shadcn/ui landing pages templates. Browse projects built with Tailwind CSS 4, Next.js, React, Vue, and Laravel. Supports Typescript.'
    },
    {
        id: 4,
        slug: "admin-dashboards",
        name: "Admin Dashboards",
        description:
            "Check out admin dashboard templates built with Shadcn UI support. Check out beautiful templates built with Tailwind CSS, Next.js, React, Vue and Typescript.",
        meta_title: 'Shadcn Admin Dashboard Templates',
        meta_description: 'Check out shadcn/ui admin dashboard templates. Browse projects built with Tailwind CSS 4, Next.js, React, Vue, and Laravel. Supports Typescript.'
    },
    {
        id: 5,
        slug: "ui-kits",
        name: "UI Kits",
        description:
            "Check out UI kits built with Shadcn UI support. Check out awesome templates built with Tailwind CSS, Next.js, React, Vue and Typescript.",
        meta_title: 'Shadcn UI Kits',
        meta_description: 'Check out ui kits built with shadcn/ui. Browse projects built with Tailwind CSS, Next.js, React, Vue, and Laravel. Supports Typescript.'
    },
    {
        id: 6,
        slug: "web-apps",
        name: "Web Apps",
        description:
            "Web app templates prepared with Shadcn UI support. Browse projects built with Tailwind CSS, Next.js, React, Vue, and Laravel. Supports Typescript.",
        meta_title: 'Shadcn Web App Templates',
        meta_description: 'Check out shadcn/ui web app templates. Browse projects built with Tailwind CSS, Next.js, React, Vue, and Laravel. Supports Typescript.'
    },
    {
        id: 7,
        slug: "ecommerce",
        name: "E-commerce",
        description:
            "E-commerce website templates prepared with Shadcn UI support. Browse projects built with Tailwind CSS, Next.js, React, Vue, and Laravel. Supports Typescript.",
        meta_title: 'Shadcn E-commerce Templates',
        meta_description: 'Check out shadcn/ui ecommerce website templates. Browse projects built with Tailwind CSS, Next.js, React, Vue, and Laravel. Supports Typescript.'
    },
] as const

export type Category = (typeof categories)[number];