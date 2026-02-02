import { useEffect, useRef, useState } from 'react';
import { Button, Link } from '@heroui/react';
import gsap from 'gsap';
import { portfolioData, getTopSkills } from '../data/portfolioData';
import { generateResumePDF } from '../utils/generateResumePDF';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { personalInfo } = portfolioData;
  const topSkills = getTopSkills(5);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadResume = async () => {
    setIsGenerating(true);
    try {
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 300));
      generateResumePDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-greeting', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo('.hero-name', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-bio', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-skills', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-buttons', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20 hero-content">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="hero-greeting text-primary text-lg md:text-xl mb-4 font-medium opacity-0">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="hero-name text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0">
            <span className="gradient-text">{personalInfo.firstName}</span>
            <span className="text-white"> {personalInfo.lastName}</span>
          </h1>

          {/* Title */}
          <h2 className="hero-title text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-light opacity-0">
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p className="hero-bio text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed opacity-0">
            {personalInfo.shortBio} with{' '}
            <span className="text-primary font-semibold">{personalInfo.totalYearsExperience}+ years</span> of experience
          </p>

          {/* Top Skills */}
          <div className="hero-skills flex flex-wrap justify-center gap-3 mb-10 opacity-0">
            {topSkills.map((skill) => (
              <span
                key={skill.name}
                className="tech-badge"
              >
                {skill.name} • {skill.years}yr{skill.years > 1 ? 's' : ''}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
            <Button
              as={Link}
              href="#projects"
              color="primary"
              variant="shadow"
              size="lg"
              className="font-semibold px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            <Button
              as={Link}
              href="#contact"
              variant="bordered"
              size="lg"
              className="font-semibold px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              Get In Touch
            </Button>
            <Button
              onPress={handleDownloadResume}
              isLoading={isGenerating}
              variant="flat"
              size="lg"
              className="font-semibold px-8 py-6 text-lg bg-content2 text-white hover:bg-content3 transition-all"
            >
              {!isGenerating && (
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )}
              {isGenerating ? 'Generating...' : 'Download Resume'}
            </Button>
          </div>

          {/* Social Links */}
          <div className="hero-buttons flex justify-center gap-6 mt-10 opacity-0">
            <Link
              href={personalInfo.github}
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0">
          <Link href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}