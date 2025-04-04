export const products = [
    {
        title: 'Mail',
        key: 'mail',
        description: 'Kanban board template built with Shadcn UI. A sleek and customizable solution for project management and task tracking.',
        price: '$49',
        preview_url: '#',
        images: [
            '/cosmic.jpg',
            '/cosmic2.jpg',
            '/cosmic.jpg',
        ],
        purchase_url: "",
        github_url: "",
        variants: [],
        paddle_id: {
            production: "pri_01jcqbwg15v03ypcak7rm3bbg4",
            sandbox: "pri_01jcte94jhv0dg09fa9x64thmr"
        },
        release_date: '2025-01-01',
        last_updated: '2025-02-01',
        meta: {
            title: 'Mail App - Shadcn UI Examples',
            description: 'Open source mail app template. A slightly improved version of the shadcn/ui example.',
        }
    },
    {
        title: 'Kanban Board',
        key: 'kanban-board',
        description: 'Kanban board template built with Shadcn UI. A sleek and customizable solution for project management and task tracking.',
        price: '',
        preview_url: '#',
        images: [
            '/cosmic.jpg',
            '/cosmic2.jpg',
            '/cosmic.jpg',
        ],
        purchase_url: "",
        github_url: "",
        variants: [],
        paddle_id: {
            production: "pri_01jcqbwg15v03ypcak7rm3bbg4",
            sandbox: "pri_01jcte94jhv0dg09fa9x64thmr"
        },
        release_date: '2025-01-01',
        last_updated: '2025-02-01',
        meta: {
            title: 'Kanban Board - Shadcn UI Examples',
            description: 'Kanban board template built with Shadcn UI. A sleek and customizable solution for project management and task tracking.',
            example_url: 'https://pragmatic-board.vercel.app/board'
        }
    },
    {
        title: 'Music App',
        key: 'music-app',
        description: 'A modern music app template built with Shadcn UI. Perfect for streaming music, creating playlists, and managing audio content.',
        price: '',
        preview_url: '#',
        images: [
            '/cosmic.jpg',
            '/cosmic2.jpg',
            '/cosmic.jpg',
        ],
        purchase_url: "",
        github_url: "",
        variants: [],
        paddle_id: {
            production: "pri_01jcqbwg15v03ypcak7rm3bbg4",
            sandbox: "pri_01jcte94jhv0dg09fa9x64thmr"
        },
        release_date: '2025-01-01',
        last_updated: '2025-02-01',
        meta: {
            title: 'Music App - Shadcn UI Examples',
            description: 'A modern music app template built with Shadcn UI. Perfect for streaming music, creating playlists, and managing audio content.',
        }
    }
] as const

export type Product = (typeof products)[number];

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