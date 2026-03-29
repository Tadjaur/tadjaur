import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThreeBackground from "./components/ThreeBackground";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
	const mainRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Initialize smooth scrolling and animations
		const ctx = gsap.context(() => {
			// Animate sections on scroll
			gsap.utils.toArray<HTMLElement>(".section-animate").forEach((section) => {
				gsap.fromTo(
					section,
					{ opacity: 0, y: 100 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: section,
							start: "top 80%",
							end: "bottom 20%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});
		}, mainRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={mainRef} className="relative">
			{/* Three.js Background */}
			<ThreeBackground />

			{/* Navigation */}
			<Navbar />

			{/* Main Content */}
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
