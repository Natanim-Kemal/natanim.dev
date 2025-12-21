'use client';

import React from 'react';

// Open source contributions data
const contributions = [
    {
        quote: "Contributed to the Vike ecosystem by building essential plugins and documentation improvements.",
        project: 'vike.dev',
        role: 'Core Contributor',
        logo: 'https://cdn.simpleicons.org/vite/black',
        link: 'https://github.com/vikejs/vike'
    },
    {
        quote: "Built solid-sonner, a toast notification library for SolidJS with beautiful animations.",
        project: 'solid-sonner',
        role: 'Creator & Maintainer',
        logo: 'https://cdn.simpleicons.org/solid/black',
        link: 'https://github.com/natanim/solid-sonner'
    },
    {
        quote: "Developed create-spring, a CLI tool for scaffolding Spring Boot projects with best practices.",
        project: 'create-spring',
        role: 'Creator & Maintainer',
        logo: 'https://cdn.simpleicons.org/spring/black',
        link: 'https://github.com/natanim/create-spring'
    },
    {
        quote: "Built bagon-hooks, a collection of essential React hooks for common use cases.",
        project: 'bagon-hooks',
        role: 'Creator & Maintainer',
        logo: 'https://cdn.simpleicons.org/react/black',
        link: 'https://github.com/natanim/bagon-hooks'
    },
    {
        quote: "Created solid-number-flow for smooth animated number transitions in SolidJS applications.",
        project: 'solid-number-flow',
        role: 'Creator & Maintainer',
        logo: 'https://cdn.simpleicons.org/solid/black',
        link: 'https://github.com/natanim/solid-number-flow'
    },
    {
        quote: "Developed vike-metadata plugin for easy SEO metadata management in Vike projects.",
        project: 'vike-metadata',
        role: 'Creator & Maintainer',
        logo: 'https://cdn.simpleicons.org/vite/black',
        link: 'https://github.com/natanim/vike-metadata'
    },
];

export default function OpenSource() {
    return (
        <section id="opensource" className="py-24" style={{ backgroundColor: 'var(--background-base)' }}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Open Source
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Contributing to the developer community through open source projects and libraries.
                    </p>
                </div>

                {/* Contributions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contributions.map((contribution, index) => (
                        <a
                            key={index}
                            href={contribution.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative rounded-2xl transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: 'var(--background-surface)',
                                boxShadow: 'rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px',
                            }}
                        >
                            {/* Card Content */}
                            <div className="p-6">
                                {/* Quote */}
                                <p
                                    className="text-sm leading-relaxed mb-6"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    &ldquo;{contribution.quote}&rdquo;
                                </p>

                                {/* Project Info */}
                                <div className="flex items-center gap-3">
                                    {/* Project Logo */}
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                                        style={{
                                            border: '1px solid rgb(225, 226, 227)',
                                        }}
                                    >
                                        <img
                                            src={contribution.logo}
                                            alt={contribution.project}
                                            className="w-6 h-6 object-contain dark:invert"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://cdn.simpleicons.org/github/black';
                                            }}
                                        />
                                    </div>

                                    {/* Project Name & Role */}
                                    <div>
                                        <p
                                            className="font-medium text-sm"
                                            style={{ color: 'rgb(20, 20, 20)' }}
                                        >
                                            {contribution.project}
                                        </p>
                                        <p
                                            className="text-sm"
                                            style={{ color: 'rgb(137, 137, 137)' }}
                                        >
                                            {contribution.role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Divider with + icons */}
                            <div className="absolute bottom-0 left-0 right-0 h-px flex items-center">
                                <div className="flex-1 h-px" style={{ backgroundColor: 'rgb(211, 211, 211)' }} />
                                <div className="px-2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(20, 20, 20, 0.15)" strokeWidth="1.5" strokeLinecap="round">
                                        <path d="M12 5L12 19M5 12L19 12" />
                                    </svg>
                                </div>
                                <div className="flex-1 h-px" style={{ backgroundColor: 'rgb(211, 211, 211)' }} />
                            </div>

                            {/* Corner decorations */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                {/* GitHub Stats / CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/natanim-kemal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: 'var(--text-primary)',
                            color: 'var(--background-base)',
                        }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View all on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
