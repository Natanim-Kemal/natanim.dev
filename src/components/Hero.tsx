'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsVisible(true);
    }, []);

    return (
        <section
            className="relative min-h-screen flex items-center justify-center pt-32 pb-32 mt-16"
            style={{ backgroundColor: 'var(--background-base)' }}
        >
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div
                        className={`
              space-y-8 text-center lg:text-left
              transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        {/* Eyebrow/Tag */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                            style={{
                                backgroundColor: 'var(--background-surface)',
                                color: 'var(--text-secondary)',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                            }}
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Available for work
                        </div>

                        {/* Main Headline */}
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Building digital
                            <br />
                            experiences that
                            <br />
                            <span style={{ color: 'var(--text-secondary)' }}>matter.</span>
                        </h1>

                        {/* Subheadline */}
                        <p
                            className="text-lg sm:text-xl max-w-lg mx-auto lg:mx-0"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            I'm Natanim, a creative software engineer & developer passionate about crafting
                            beautiful, functional, and user-centered digital experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-[220px] sm:max-w-none mx-auto lg:mx-0">
                            <a
                                href="#work"
                                className="btn-primary"
                            >
                                View my work
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#contact"
                                className="btn-secondary"
                            >
                                Get in touch
                            </a>
                        </div>

                        {/* Social Proof / Stats */}
                        <div
                            className="flex items-center gap-8 justify-center lg:justify-start pt-4"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <div className="text-center lg:text-left">
                                <div
                                    className="text-2xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    3+
                                </div>
                                <div className="text-sm">Years Experience</div>
                            </div>
                            <div
                                className="w-px h-10"
                                style={{ backgroundColor: 'var(--grid-line)' }}
                            />
                            <div className="text-center lg:text-left">
                                <div
                                    className="text-2xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    30+
                                </div>
                                <div className="text-sm">Projects Completed</div>
                            </div>
                            <div
                                className="w-px h-10 hidden sm:block"
                                style={{ backgroundColor: 'var(--grid-line)' }}
                            />
                            <div className="text-center lg:text-left hidden sm:block">
                                <div
                                    className="text-2xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    15+
                                </div>
                                <div className="text-sm">Happy Clients</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Hero Card/Widget */}
                    <div
                        className={`
              relative
              transition-all duration-700 ease-out delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
                    >
                        {/* The "whiter" card */}
                        <div
                            className="relative rounded-2xl p-8 lg:p-10"
                            style={{
                                backgroundColor: 'var(--background-surface)',
                                boxShadow: 'var(--shadow-card)'
                            }}
                        >
                            {/* Card Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src="/profile.jpg"
                                    alt="Natanim Kemal"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3
                                        className="font-semibold"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        Natanim Kemal
                                    </h3>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        sofware engineer
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-1 mb-6">
                                {['Backend', 'Security', 'Ai automation', 'DevOps', 'Blockchain'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-full text-sm font-medium"
                                        style={{
                                            backgroundColor: 'var(--background-base)',
                                            color: 'var(--text-secondary)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Featured Projects Grid */}
                            <div className="rounded-xl overflow-hidden p-2" style={{ backgroundColor: 'var(--background-base)' }}>
                                <div className="grid grid-cols-3 grid-rows-2 gap-2 h-[200px]">
                                    {/* Large left image */}
                                    <div className="row-span-2 group relative overflow-hidden rounded-lg cursor-pointer">
                                        <img
                                            src="/feature-1.jpg"
                                            alt="Project 1"
                                            className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>

                                    {/* Top middle */}
                                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                                        <img
                                            src="/feature-2.jpg"
                                            alt="Project 2"
                                            className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>

                                    {/* Top right */}
                                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                                        <img
                                            src="/feature-3.jpg"
                                            alt="Project 3"
                                            className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>

                                    {/* Bottom middle */}
                                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                                        <img
                                            src="/feature-4.jpg"
                                            alt="Project 4"
                                            className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>

                                    {/* Bottom right */}
                                    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                                        <img
                                            src="/feature-5.jpg"
                                            alt="Project 5"
                                            className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-5 gap-2 mt-6">
                                <a
                                    href="https://github.com/natanim-kemal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                    }}
                                    title="GitHub"
                                >
                                    <svg className="w-5 h-5 icon-themed" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com/in/natanim-kemal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                    }}
                                    title="LinkedIn"
                                >
                                    <svg className="w-5 h-5 icon-themed" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://x.com/straydeg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                    }}
                                    title="X (Twitter)"
                                >
                                    <svg className="w-5 h-5 icon-themed" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://t.me/phnatanim"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                    }}
                                    title="Telegram"
                                >
                                    <svg className="w-5 h-5 icon-themed" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:reachnatanim@gmail.com"
                                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                    }}
                                    title="Email"
                                >
                                    <svg className="w-5 h-5 icon-themed" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Decorative Element - Floating badge */}
                        <div
                            className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce"
                            style={{
                                backgroundColor: 'var(--background-surface)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            <span style={{ filter: 'grayscale(1)' }}>👋</span> Hello!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
