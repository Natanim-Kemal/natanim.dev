'use client';

import React, { useState } from 'react';

const socialLinks = [
    {
        name: 'GitHub',
        handle: '@natanim-kemal',
        url: 'https://github.com/natanim-kemal',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        handle: 'Natanim Kemal',
        url: 'https://linkedin.com/in/natanim-kemal',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'X (Twitter)',
        handle: '@straydeg',
        url: 'https://x.com/straydeg',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Telegram',
        handle: '@phnatanim',
        url: 'https://t.me/phnatanim',
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
    },
];

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="pt-24 pb-12 relative overflow-hidden" style={{ backgroundColor: 'var(--background-base)' }}>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating circles */}
                <div
                    className="absolute w-72 h-72 rounded-full opacity-[0.03] animate-float"
                    style={{
                        background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
                        top: '10%',
                        left: '5%',
                        animationDelay: '0s',
                    }}
                />
                <div
                    className="absolute w-96 h-96 rounded-full opacity-[0.02] animate-float"
                    style={{
                        background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
                        bottom: '10%',
                        right: '5%',
                        animationDelay: '2s',
                    }}
                />
                <div
                    className="absolute w-48 h-48 rounded-full opacity-[0.03] animate-float"
                    style={{
                        background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
                        top: '50%',
                        right: '20%',
                        animationDelay: '4s',
                    }}
                />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-pulse-slow"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            border: '1px solid var(--grid-line)',
                        }}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                            Available for new opportunities
                        </span>
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Let&apos;s work together
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Have a project in mind or just want to chat? I&apos;d love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        {/* Email Card */}
                        <a
                            href="mailto:reachnatanim@gmail.com"
                            className="group block p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                            style={{
                                backgroundColor: 'var(--background-surface)',
                                boxShadow: 'rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                    style={{ backgroundColor: 'var(--background-base)' }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-primary)' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>
                                        Email me at
                                    </p>
                                    <p className="text-lg font-semibold group-hover:underline" style={{ color: 'var(--text-primary)' }}>
                                        reachnatanim@gmail.com
                                    </p>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-muted)' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                                Connect with me
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-[1.03]"
                                        style={{
                                            backgroundColor: 'var(--background-surface)',
                                            boxShadow: 'rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px',
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                            style={{
                                                backgroundColor: 'var(--background-base)',
                                                color: 'var(--text-primary)',
                                            }}
                                        >
                                            {social.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                                                {social.name}
                                            </p>
                                            <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                                                {social.handle}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <div
                            className="p-5 rounded-xl flex items-center gap-4"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                border: '1px solid var(--grid-line)',
                            }}
                        >
                            <div className="text-2xl">📍</div>
                            <div>
                                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                                    Addis Ababa, Ethiopia
                                </p>
                                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                                    UTC+3 · Open to remote work worldwide
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div
                        className="p-8 rounded-2xl"
                        style={{
                            backgroundColor: 'var(--background-surface)',
                            boxShadow: 'rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px',
                        }}
                    >
                        <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                            Send me a message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black/10"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                        border: '1px solid var(--grid-line)',
                                        color: 'var(--text-primary)',
                                    }}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black/10"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                        border: '1px solid var(--grid-line)',
                                        color: 'var(--text-primary)',
                                    }}
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                                    Message
                                </label>
                                <textarea
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
                                    style={{
                                        backgroundColor: 'var(--background-base)',
                                        border: '1px solid var(--grid-line)',
                                        color: 'var(--text-primary)',
                                    }}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                                style={{
                                    backgroundColor: 'var(--text-primary)',
                                    color: 'var(--background-base)',
                                }}
                            >
                                <span className={`inline-flex items-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                    Send message
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                                {isSubmitting && (
                                    <span className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                    </span>
                                )}
                            </button>

                            {isSubmitted && (
                                <div className="flex items-center gap-2 text-green-600 animate-fade-in">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-sm font-medium">Message sent successfully!</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-12 border-t text-center" style={{ borderColor: 'var(--grid-line)' }}>
                    {/* Big Logo */}
                    <div
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        <span className="mr-2">✦</span>natanim
                    </div>

                    {/* Copyright & Credits */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                            © 2026 Natanim. Built with Next.js & Tailwind CSS by natanim
                        </p>
                        <a
                            href="https://t.me/phnatanim"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm transition-all duration-300 hover:opacity-70"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                            @phnatanim
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
