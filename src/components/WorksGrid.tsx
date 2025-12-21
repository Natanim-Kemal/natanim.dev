'use client';

import React from 'react';

const works = [
    { id: 1, src: '/feature-1.jpg', title: 'Project 1', span: 'tall' },
    { id: 2, src: '/feature-2.jpg', title: 'Project 2', span: 'normal' },
    { id: 3, src: '/feature-3.jpg', title: 'Project 3', span: 'wide' },
    { id: 4, src: '/feature-4.jpg', title: 'Project 4', span: 'tall' },
    { id: 5, src: '/feature-5.jpg', title: 'Project 5', span: 'normal' },
];

export default function WorksGrid() {
    return (
        <section className="py-16" style={{ backgroundColor: 'var(--background-base)' }}>
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Featured Works
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        A showcase of projects I&apos;ve crafted with passion
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[180px]">
                    {/* Item 1 - Tall */}
                    <div className="group relative overflow-hidden rounded-2xl row-span-2 cursor-pointer">
                        <img
                            src="/feature-1.jpg"
                            alt="Project 1"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-semibold text-lg">Project 1</h3>
                        </div>
                    </div>

                    {/* Item 2 - Normal */}
                    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img
                            src="/feature-2.jpg"
                            alt="Project 2"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-semibold">Project 2</h3>
                        </div>
                    </div>

                    {/* Item 3 - Wide (spans 2 cols) */}
                    <div className="group relative overflow-hidden rounded-2xl col-span-2 cursor-pointer">
                        <img
                            src="/feature-3.jpg"
                            alt="Project 3"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-semibold text-lg">Project 3</h3>
                        </div>
                    </div>

                    {/* Item 4 - Normal */}
                    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img
                            src="/feature-4.jpg"
                            alt="Project 4"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-semibold">Project 4</h3>
                        </div>
                    </div>

                    {/* Item 5 - Tall */}
                    <div className="group relative overflow-hidden rounded-2xl row-span-2 cursor-pointer">
                        <img
                            src="/feature-5.jpg"
                            alt="Project 5"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-semibold text-lg">Project 5</h3>
                        </div>
                    </div>

                    {/* Duplicate some for fuller grid */}
                    <div className="group relative overflow-hidden rounded-2xl col-span-2 cursor-pointer">
                        <img
                            src="/feature-1.jpg"
                            alt="Project 6"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-semibold text-lg">Project 6</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
