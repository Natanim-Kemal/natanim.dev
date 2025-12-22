'use client';

import React from 'react';

// Top 6 featured projects - larger cards
const featuredProjects = [
    {
        id: 1,
        title: 'synce',
        description: 'A mobile and desktop app for syncing pdf files between devices. Built with flutter and supabase.',
        tags: ['Flutter', 'NestJS', 'PostgreSQL', 'AWS'],
        image: '/synce.jpg',
        link: 'https://synce.website',
        github: 'https://github.com/natanim-kemal/synce'
    },
    {
        id: 2,
        title: 'akllyl',
        description: 'A modern photo studio website built with Next.js and Tailwind CSS.',
        tags: ['NextJS', 'Tailwind', 'Python'],
        image: '/akllyl.jpg',
        link: 'https://akllyl.vercel.app',
        github: 'https://github.com/natanim-kemal/akllyl'
    },
    {
        id: 3,
        title: 'ModIntel - Ongoing*',
        description: (
            <>
                Machine learning pipeline to enhance{' '}
                <a
                    href="https://owasp.org/www-project-modsecurity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-colors"
                    style={{ color: '#3b82f6' }}
                >
                    Modsecurity
                </a>{' '}
                analytics with visual dashboard.
            </>
        ),
        tags: ['Python', 'Pandas', 'lua', 'Svelte', 'Tailwind'],
        image: '/placeholder.png',
        link: 'https://modintel.live',
        github: 'htts://github.com/natanim-kemal/modintel'
    },
    {
        id: 4,
        title: '🌀',
        description: 'Modern, asthetic, responsive portfolio website built with Next.js 16, Tailwind CSS, and TypeScript for myself.',
        tags: ['TypeScript', 'NextJS', 'Tailwind'],
        image: '/portfolio.png',
        link: '#',
        github: '#',
        isCurrentSite: true
    },
    {
        id: 5,
        title: 'neon-nexus',
        description: 'IoT monitoring dashboard with real-time threat detection and automated response system.',
        tags: ['TypeScript', 'Svelte', 'Tailwind'],
        image: '/neon-nexus.png',
        link: 'https://neon.nexus.neon',
        github: 'https://github.com/natanim-kemal/neon-nexus'
    },
    {
        id: 6,
        title: 'zentask',
        description: 'Minimalist productivity application focusing on deep work sessions and flow state.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase'],
        image: '/zentask.png',
        link: 'https://zentask.app',
        github: 'https://github.com/natanim-kemal/zentask'
    },
];

// Mini projects grid - 3x3 = 9 items
const miniProjects = [
    { title: 'bagon-hooks', description: 'React hooks library for common use cases', icon: '🪝' },
    { title: 'solid-number-flow', description: 'Animated number transitions for Solid.js', icon: '🔢' },
    { title: 'vike-metadata', description: 'SEO metadata plugin for Vike', icon: '🏷️' },
    { title: 'tsdot', description: 'TypeScript utility library', icon: '📦' },
    { title: 'CLI Tool', description: 'Command-line productivity tool', icon: '⌨️' },
    { title: 'VS Code Theme', description: 'Custom dark theme for VS Code', icon: '🎨' },
    { title: 'API Wrapper', description: 'REST API client wrapper', icon: '🔌' },
    { title: 'Chrome Extension', description: 'Browser productivity extension', icon: '🧩' },
    { title: 'Telegram Bot', description: 'Message automation bot from this website to my telegram', icon: '🤖' },
];

export default function Work() {
    const [activeCard, setActiveCard] = React.useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <section id="work" className="py-24" style={{ backgroundColor: 'var(--background-base)' }}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Featured Work
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        A selection of projects I&apos;ve built. From web apps to dev tools to blockchain.
                    </p>
                </div>

                {/* Featured Projects - 6 larger cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            style={{
                                backgroundColor: 'var(--background-surface)',
                                boxShadow: 'var(--shadow-card)'
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3
                                    className="text-lg font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="text-sm mb-4 line-clamp-2"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs rounded-full"
                                            style={{
                                                backgroundColor: 'var(--background-base)',
                                                color: 'var(--text-secondary)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.id === 4 ? (
                                        <div
                                            className="group/link flex items-center gap-1 text-sm font-medium cursor-default relative"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            <span className="relative inline-block">
                                                <span className="transition-opacity duration-300 group-hover/link:opacity-0">
                                                    Live
                                                </span>
                                                <span className="absolute left-0 top-0 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover/link:opacity-100">
                                                    You&apos;re already there
                                                </span>
                                                {/* Invisible spacer to reserve width on hover */}
                                                <span className="hidden group-hover/link:inline opacity-0 whitespace-nowrap" aria-hidden="true">
                                                    You&apos;re already there
                                                </span>
                                            </span>
                                        </div>
                                    ) : (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                                            style={{ color: 'var(--text-primary)' }}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Mini Projects Section - Header stays in container */}
                <div className="text-center mb-12">
                    <h3
                        className="text-2xl md:text-3xl font-bold mb-3"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        ...and more mini projects
                    </h3>
                </div>
            </div>

            {/* Mini Projects Grid */}
            <div className="w-full px-4 md:px-8">
                <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[900px] mx-auto">
                    {miniProjects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`group relative p-4 md:p-5 rounded-2xl transition-all duration-300 cursor-pointer ${activeCard === index ? 'is-active' : ''}`}
                            style={{
                                backgroundColor: 'var(--background-surface)',
                                border: '1px solid var(--grid-line)',
                                boxShadow: 'rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px',
                            }}
                        >
                            {/* Icon Wrapper */}
                            <div
                                className={`relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-xl flex items-center justify-center overflow-hidden transition-opacity duration-300 md:group-hover:opacity-0 ${activeCard === index ? 'opacity-0' : ''}`}
                                style={{
                                    backgroundColor: 'rgb(245, 245, 245)',
                                    boxShadow: 'rgba(19, 19, 22, 0.698) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px',
                                }}
                            >
                                {/* Icon */}
                                <span className="text-xl md:text-2xl emoji-bw z-10">{project.icon}</span>

                                {/* Decorative lines */}
                                <div className="absolute bottom-1.5 left-1.5 right-1.5 flex flex-col gap-1">
                                    <div className="h-1 rounded-full" style={{ backgroundColor: 'rgb(224, 224, 224)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset' }} />
                                    <div className="h-1 w-3/4 rounded-full" style={{ backgroundColor: 'rgb(224, 224, 224)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset' }} />
                                </div>
                            </div>

                            {/* Title */}
                            <h4
                                className={`font-semibold text-xs md:text-sm text-center leading-tight transition-opacity duration-300 md:group-hover:opacity-0 ${activeCard === index ? 'opacity-0' : ''}`}
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {project.title}
                            </h4>

                            {/* Hover Overlay */}
                            <div
                                className={`absolute inset-0 p-4 md:p-5 rounded-2xl flex flex-col items-center justify-center transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}
                                style={{ backgroundColor: 'var(--background-surface)' }}
                            >
                                <h4
                                    className="font-semibold text-xs md:text-sm text-center mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {project.title}
                                </h4>
                                <p
                                    className="text-xs text-center leading-relaxed"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    {project.description}
                                </p>

                                {/* Decorative circles - one in each corner */}
                                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(224, 224, 224)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset' }} />
                                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(224, 224, 224)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset' }} />
                                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(224, 224, 224)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset' }} />
                                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(224, 224, 224)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
