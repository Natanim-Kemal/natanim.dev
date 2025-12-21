'use client';

import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-24" style={{ backgroundColor: 'var(--background-base)' }}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        About Me
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        I'm a code-slinging software engineer based in Ethiopia who loves crafting beautiful,
                        functional digital experiences. With a background in design, security and engineering,
                        I bridge the gap between aesthetics and performance with skills I developed from AAU
                        and online resources.
                    </p>
                    <p
                        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-4"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        When I'm not coding, you can find me exploring new tech, contributing to open source,
                        or brewing the perfect cup of coffee <span className="emoji-bw">☕</span>
                    </p>
                </div>

                {/* Three Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 - Intro */}
                    <div
                        className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        style={{
                            backgroundColor: 'var(--background-surface)',
                            boxShadow: 'var(--shadow-card)'
                        }}
                    >
                        <div className="text-3xl mb-4 emoji-bw">💻</div>
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Intro
                        </h3>
                        <div
                            className="space-y-4 text-sm leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            <p>
                                I love creating web apps, dev tools, blockchain, keeping my systems secure
                                and doing machine learning. I love exploring unconventional bleeding edge tech so you can always catch
                                me learning the next big thing.
                            </p>
                            <p>
                                I contribute to open-source too! <span className="font-medium" style={{ color: 'var(--text-primary)' }}>vike.dev</span>,
                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}> solid-sonner</span>,
                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}> create-spring</span>.
                                I author some of my own libraries as well:
                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}> bagon-hooks</span>,
                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}> solid-number-flow</span>,
                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}> vike-metadata</span>,
                                <span className="font-medium" style={{ color: 'var(--text-primary)' }}> tsdot</span>.
                            </p>
                            <p>
                                Outside of coding, I like to travel <span className="emoji-bw">✈️</span>, workout <span className="emoji-bw">🏋️‍♂️</span>, go for runs <span className="emoji-bw">🏃</span>,
                                and filming everyday life with my phone <span className="emoji-bw">📱</span>
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Education */}
                    <div
                        className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        style={{
                            backgroundColor: 'var(--background-surface)',
                            boxShadow: 'var(--shadow-card)'
                        }}
                    >
                        <div className="text-3xl mb-4 emoji-bw">🎓</div>
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Education
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>✦</span>
                                <div>
                                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                        Addis Ababa University
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>✦</span>
                                <div>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                        BS in Software Engineering<br />
                                        <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                                            Major in Cybersecurity
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>✦</span>
                                <div>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                        <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>3.6</span> CGPA / 4
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>✦</span>
                                <div>
                                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                        Security Certified by Google
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-sm" style={{ color: 'var(--text-primary)' }}>✦</span>
                                <div>
                                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                                        Most Outstanding CICT Student
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Work Experience */}
                    <div
                        className="rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        style={{
                            backgroundColor: 'var(--background-surface)',
                            boxShadow: 'var(--shadow-card)'
                        }}
                    >
                        <div className="text-3xl mb-4 emoji-bw">💼</div>
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            Work Experience
                        </h3>
                        <div className="space-y-5">
                            <div className="border-l-2 pl-4" style={{ borderColor: 'var(--grid-line)' }}>
                                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    Software Engineer
                                </p>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    TechCorp Inc. • 2024 - 2025 • Remote
                                </p>
                                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                                    Full-stack development, system architecture
                                </p>
                            </div>
                            <div className="border-l-2 pl-4" style={{ borderColor: 'var(--grid-line)' }}>
                                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    Cybersecurity Intern
                                </p>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    INSA • Internship
                                </p>
                                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                    Mar 2025 - Jul 2025 • Addis Ababa
                                </p>
                                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                                    Information Security, Wazuh, SIEM
                                </p>
                            </div>
                            <div className="border-l-2 pl-4" style={{ borderColor: 'var(--grid-line)' }}>
                                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    Backend Developer
                                </p>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    Addis Ababa University • Internship
                                </p>
                                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                    Mar 2025 - Present • Remote
                                </p>
                                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                                    PPMoS Platform, Server Side Programming
                                </p>
                            </div>
                            <div className="border-l-2 pl-4" style={{ borderColor: 'var(--grid-line)' }}>
                                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                                    Frontend Development
                                </p>
                                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    RDX • 2022 - 2023
                                </p>
                                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                                    Figma, UI/UX implementation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
