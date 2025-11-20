"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Instagram, AtSign, Linkedin, MapPin } from 'lucide-react';
import { sectionPadding } from '../styles/styles';
import Link from 'next/link';

type Props = {};

const Profile = (props: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [stats, setStats] = useState({ experience: 0, organizations: 0, solutions: 0 });
    const statsRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isInView, setIsInView] = useState(false);

    // Function to handle smooth scrolling
    const scrollToSection = (sectionId: string) => {
        setIsMenuOpen(false); // Close mobile menu if open

        const element = document.getElementById(sectionId);
        console.log("Attempting to scroll to:", sectionId, element); // Debug log

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            console.warn(`Element with ID "${sectionId}" not found`);
        }
    };

    // Counter animation function
    const animateCounter = (start: any, end: any, duration: any, setValue: any, property: any) => {
        let startTimestamp: any = null;
        const step = (timestamp: any) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);

            setValue((prev: { experience: number; organizations: number; solutions: number }) => ({ ...prev, [property]: value }));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Trigger counter animation when stats section comes into view
    useEffect(() => {
        if (isInView) {
            animateCounter(0, 8, 1500, setStats, 'experience');
            animateCounter(0, 18, 2000, setStats, 'organizations');
            animateCounter(0, 35, 2500, setStats, 'solutions');
        }
    }, [isInView]);

    useEffect(() => {
        // Trigger animations after component mounts
        setIsLoaded(true);
    }, []);

    return (
        <div id='home' className={`bg-gray-900 text-white min-h-screen overflow-hidden backdrop-blur-lg bg-opacity-80 relative`}>
            <div className={`flex flex-col md:flex-row items-center justify-center gap-8 p-6 min-h-screen ${sectionPadding} pt-40 md:pt-28 container mx-auto`}>
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-md z-0"></div>

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    {[...Array(8)].map((_, i) => {
                        const sizes = [75, 120, 90, 110, 85, 95, 130, 80];
                        const positions = [
                            { top: 10, left: 20 },
                            { top: 60, left: 80 },
                            { top: 30, left: 60 },
                            { top: 80, left: 30 },
                            { top: 20, left: 90 },
                            { top: 70, left: 10 },
                            { top: 40, left: 40 },
                            { top: 90, left: 70 }
                        ];
                        const durations = [25, 30, 22, 28, 26, 24, 32, 27];
                        const opacities = [0.2, 0.3, 0.15, 0.25, 0.35, 0.18, 0.28, 0.22];
                        const scales = [0.6, 0.8, 0.4, 0.7, 0.9, 0.5, 0.75, 0.65];

                        return (
                            <div
                                key={i}
                                className="absolute rounded-full bg-gray-600 bg-opacity-20"
                                style={{
                                    width: `${sizes[i]}px`,
                                    height: `${sizes[i]}px`,
                                    top: `${positions[i].top}%`,
                                    left: `${positions[i].left}%`,
                                    animation: `float ${durations[i]}s infinite linear`,
                                    opacity: opacities[i],
                                    transform: `scale(${scales[i]})`,
                                }}
                            />
                        );
                    })}
                </div>

                <style jsx>{`
                @keyframes float {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(100px, 100px) rotate(180deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(1); opacity: 0.8; }
                }
                @keyframes shine {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>

                <div className="flex-1 space-y-6 relative z-10 md:mx-4">
                    <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <p className="text-gray-300 mb-1">Hi, I am</p>
                        <h1 className="text-3xl font-bold mb-2">Nelson Okosun</h1>
                        {/* <h2 className={`text-4xl font-bold !text-[#D4AF37] mb-8 ${isLoaded ? 'animate-pulse' : ''}`}>
                        GIS Consultant & Project Manager
                    </h2> */}
                        <h2 className={`text-4xl font-bold text-purple-600 mb-8 ${isLoaded ? 'animate-pulse' : ''}`}
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #9333ea 0%, #c084fc 50%, #9333ea 100%)',
                                backgroundSize: '200% auto',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'shine 3s linear infinite'
                            }}>
                            GIS Consultant & Project Manager
                        </h2>

                        <div className="flex space-x-4 mb-8">
                            <a href="https://instagram.com/nelson_oaks" target="_blank" rel="noopener noreferrer"
                                className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white text-gray-400 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                                style={{ animationDuration: '2s', animationDelay: '300ms', animationIterationCount: 1 }}>
                                <Instagram size={16} />
                            </a>
                            <a href="mailto:Nelsonokosun@hotmail.com"
                                className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white text-gray-400 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                                style={{ animationDuration: '2s', animationDelay: '400ms', animationIterationCount: 1 }}>
                                <AtSign size={16} />
                            </a>
                            <a href="https://www.linkedin.com/in/nelsonokosun/" target="_blank" rel="noopener noreferrer"
                                className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white text-gray-400 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                                style={{ animationDuration: '2s', animationDelay: '500ms', animationIterationCount: 1 }}>
                                <Linkedin size={16} />
                            </a>
                            {/* <a href="#contact"
                            className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white text-gray-400 transition-all duration-300 transform hover:scale-110 cursor-pointer ${isLoaded ? 'animate-bounce' : 'opacity-0'}`}
                            style={{ animationDuration: '2s', animationDelay: '600ms', animationIterationCount: 1 }}>
                            <MapPin size={16} />
                        </a> */}
                        </div>
                    </div>

                    <div className={`flex flex-col sm:flex-row gap-4 mb-2 pb-12 w-full sm:w-auto transition-all duration-700 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <button className="border border-gray-600 hover:border-purple-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30 relative overflow-hidden group">
                            <Link
                                href="https://drive.google.com/drive/folders/1K6grcQQ3UZTfqT2DhTgN0JtNCrIFwwMY"
                                target='_blank'
                                className="relative z-10"
                            >
                                Download CV
                            </Link>
                            <span className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-20"></span>
                        </button>
                    </div>

                    <div
                        ref={statsRef}
                        className={`flex w-full md:w-3/5 mt-12 pb-11 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: '700ms' }}
                    >
                        <div className="flex-1 border-r border-gray-700 px-4 transform transition-all duration-500 hover:scale-105">
                            <h3 className="text-xl font-bold text-purple-600">{stats.experience}+</h3>
                            <p className="text-xs sm:text-sm text-gray-300 font-semibold">Years Experience</p>
                        </div>
                        <div className="flex-1 border-r border-gray-700 px-4 transform transition-all duration-500 hover:scale-105">
                            <h3 className="text-xl font-bold text-purple-600">{stats.organizations}+</h3>
                            <p className="text-xs sm:text-sm font-semibold text-gray-300 text-nowrap">Organizations</p>
                        </div>
                        <div className="flex-1 px-4 transform transition-all duration-500 hover:scale-105">
                            <h3 className="text-xl font-bold text-purple-600">{stats.solutions}+</h3>
                            <p className="text-xs sm:text-sm font-semibold text-gray-300 text-nowrap">Solutions Delivered</p>
                        </div>
                    </div>
                </div>

                <div className={`relative flex-1 max-w-xs sm:max-w-sm md:max-w-md transition-all duration-1000 transform ${isLoaded ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-16 opacity-0 rotate-6'} z-10`}>
                    <div className="relative">
                        {/* Profile image */}
                        <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/profile_picture.jpeg"
                                alt="Nelson Okosun"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;