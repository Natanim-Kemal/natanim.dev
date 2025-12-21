'use client';

import React from 'react';

// Tech stack with Simple Icons CDN URLs - all in black
const techStack = [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/000000' },
    { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/000000' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/000000' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/000000' },
    { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/000000' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/000000' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/000000' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/000000' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/000000' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/000000' },
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/000000' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/css/000000' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/000000' },
    { name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte/000000' },
];

// Split into rows
const row1 = techStack.slice(0, 8);
const row2 = techStack.slice(8, 16);

// Mobile rows (3 rows)
const mobileRow1 = techStack.slice(0, 6);
const mobileRow2 = techStack.slice(6, 11);
const mobileRow3 = techStack.slice(11, 16);

function MarqueeRow({ items, reverse = false }: { items: typeof techStack; reverse?: boolean }) {
    return (
        <div className="marquee-wrapper">
            <div className={`marquee-content ${reverse ? 'marquee-reverse' : ''}`}>
                {/* First set */}
                {items.map((tech, index) => (
                    <div key={`first-${index}`} className="marquee-item">
                        <img src={tech.icon} alt={tech.name} className="w-6 h-6 md:w-8 md:h-8 dark:invert" />
                        <span className="text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>{tech.name}</span>
                    </div>
                ))}
                {/* Duplicate set */}
                {items.map((tech, index) => (
                    <div key={`second-${index}`} className="marquee-item">
                        <img src={tech.icon} alt={tech.name} className="w-6 h-6 md:w-8 md:h-8 dark:invert" />
                        <span className="text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TechMarquee() {
    return (
        <section className="py-8 md:py-12" style={{ backgroundColor: 'var(--background-base)' }}>
            <div className="max-w-[1200px] mx-auto relative overflow-hidden">
                {/* Fade gradients */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, var(--background-base), transparent)' }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, var(--background-base), transparent)' }}
                />

                {/* Desktop: Two rows moving opposite */}
                <div className="hidden md:block space-y-4">
                    <MarqueeRow items={row1} />
                    <MarqueeRow items={row2} reverse />
                </div>

                {/* Mobile: Three rows */}
                <div className="md:hidden space-y-3">
                    <MarqueeRow items={mobileRow1} />
                    <MarqueeRow items={mobileRow2} reverse />
                    <MarqueeRow items={mobileRow3} />
                </div>
            </div>
        </section>
    );
}
