'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const navItems = [
    { href: '#about', label: 'About', },
    { href: '#work', label: 'Work', },
    { href: '#opensource', label: 'Open Source', },
    { href: '#contact', label: 'Contact', },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        if (isMobileMenuOpen) {
            const handleClick = () => setIsMobileMenuOpen(false);
            document.addEventListener('click', handleClick);
            return () => document.removeEventListener('click', handleClick);
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled ? 'py-2 px-4' : 'py-4 px-4'
                }`}
        >
            <nav
                className={`
                    mx-auto flex items-center justify-between
                    transition-all duration-300 ease-out
                    ${isScrolled
                        ? 'max-w-[800px] px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md'
                        : 'max-w-[1200px] px-6 py-2'
                    }
                `}
                style={{
                    backgroundColor: isScrolled
                        ? (theme === 'dark' ? 'rgba(20, 20, 20, 0.95)' : 'rgba(255, 255, 255, 0.95)')
                        : 'transparent',
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-bold text-lg transition-colors hover:opacity-80"
                    style={{ color: 'var(--text-primary)' }}
                >
                    <span className="text-xl">✦</span>
                    <span>natanim</span>
                </Link>

                {/* Navigation Links - Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
                    ))}
                </div>

                {/* CTA Button & Theme Toggle */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/10"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-primary)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-primary)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5"
                        aria-label="Toggle menu"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                    >
                        {isMobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>

                    {/* CTA Button - Desktop */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-[1.02]"
                        style={{
                            backgroundColor: 'var(--accent-primary)',
                            color: 'var(--background-base)'
                        }}
                    >
                        Get in touch
                    </a>
                </div>
            </nav>

            {/* Mobile Menu Card */}
            <div
                className={`
                    md:hidden fixed top-20 right-4 w-56
                    transition-all duration-300 ease-out
                    ${isMobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }
                `}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="rounded-2xl p-4 shadow-lg backdrop-blur-md"
                    style={{
                        backgroundColor: theme === 'dark' ? 'rgba(20, 20, 20, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                        border: '1px solid var(--grid-line)'
                    }}
                >
                    {/* Menu Items */}
                    <div className="space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-black/5"
                                style={{ color: 'var(--text-primary)' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="font-medium">{item.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div
                        className="my-3 h-px"
                        style={{ backgroundColor: 'var(--grid-line)' }}
                    />

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
                        style={{
                            backgroundColor: 'var(--accent-primary)',
                            color: 'var(--background-base)'
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span>✉️</span>
                        Get in touch
                    </a>
                </div>
            </div>
        </header>
    );
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
    return (
        <a
            href={href}
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
            {children}
        </a>
    );
}
