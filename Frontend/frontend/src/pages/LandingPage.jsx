import React, { useState } from "react";
import NavBar from '../components/NavBar';

const LandingPage = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <NavBar/>
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-gray-950 to-gray-950"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Draw Together
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Real-time collaborative drawing tool. Create amazing art with friends and colleagues from anywhere in the world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 active:scale-95">
                                <span className="relative z-10">Start Drawing Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            <button className="group border border-gray-700 hover:border-gray-500 bg-gray-900/50 hover:bg-gray-800/50 text-gray-300 hover:text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                                <span className="group-hover:scale-105 transition-transform duration-300">Watch Demo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                        Amazing Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: "🎨",
                                title: "Real-time Collaboration",
                                desc: "Draw simultaneously with multiple users. See changes instantly as they happen.",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: "⚡", 
                                title: "Lightning Fast",
                                desc: "Powered by WebSockets for instant updates and smooth drawing experience.",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: "🔒",
                                title: "Secure Rooms", 
                                desc: "Private drawing rooms with invite links. Your creativity stays protected.",
                                gradient: "from-green-500 to-emerald-500"
                            }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className={`group relative bg-gray-900/80 p-8 rounded-2xl border border-gray-800 hover:border-${feature.gradient.split(' ')[1].split('-')[1]}-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                                    activeFeature === index ? 'border-purple-400/50 shadow-xl shadow-purple-500/10' : ''
                                }`}
                                onMouseEnter={() => setActiveFeature(index)}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-2xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-200 group-hover:text-white transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Preview */}
            <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                        See It In Action
                    </h2>
                    <div className="group relative bg-gray-900 rounded-3xl p-1 border border-gray-800 hover:border-gray-600 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gray-900 rounded-2xl p-8">
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-700 group-hover:border-gray-600 transition-all duration-500">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-4xl">🎨</span>
                                    </div>
                                    <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                                        Interactive Drawing Canvas Preview
                                    </p>
                                    <p className="text-gray-600 text-sm mt-3 group-hover:text-gray-500 transition-colors duration-300">
                                        (Live demo would be implemented here)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Create Room", desc: "Start a new drawing session", delay: "0" },
                            { step: "2", title: "Invite Friends", desc: "Share the room link", delay: "100" },
                            { step: "3", title: "Draw Together", desc: "Collaborate in real-time", delay: "200" },
                            { step: "4", title: "Save & Share", desc: "Export your masterpiece", delay: "300" }
                        ].map((item, index) => (
                            <div 
                                key={index} 
                                className="group text-center relative"
                            >
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                    <div className="relative w-20 h-20 bg-gradient-to-r from-gray-800 to-gray-900 group-hover:from-purple-600 group-hover:to-blue-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold border border-gray-700 group-hover:border-transparent transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                        {item.step}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                        Ready to Create Together?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Join thousands of users who are already creating amazing art collaboratively in real-time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-95">
                            <span className="relative z-10 flex items-center gap-3">
                                Get Started - It's Free
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button className="group border border-gray-700 hover:border-gray-500 bg-gray-900/50 hover:bg-gray-800/50 text-gray-400 hover:text-white px-8 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg active:scale-95">
                            <span className="flex items-center gap-2">
                                View Gallery
                                <span className="group-hover:scale-110 transition-transform duration-300">🖼️</span>
                            </span>
                        </button>
                    </div>
                    <p className="text-gray-600 text-sm mt-6">No registration required • Instant access</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 bg-gray-900/50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-500">
                        <p className="mb-4">&copy; 2024 Draw Together. Built with React & WebSockets.</p>
                        <div className="flex justify-center gap-6">
                            {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((social) => (
                                <a 
                                    key={social}
                                    href="#" 
                                    className="text-gray-500 hover:text-gray-300 transition-colors duration-300 hover:scale-110 transform"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;