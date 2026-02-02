import { useEffect, useRef } from 'react';
import { Card, CardBody } from '@heroui/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData, getTotalProjectsCount } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { personalInfo, experiences, education, certifications } = portfolioData;
  const totalProjects = getTotalProjectsCount();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: 'Years Experience', value: personalInfo.totalYearsExperience },
    { label: 'Projects Completed', value: totalProjects },
    { label: 'Companies Worked', value: experiences.length },
    { label: 'Certifications', value: certifications.length },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen pt-[200px] py-20 relative section-animate"
    >
      <div className="container mx-auto px-3 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="about-card">
            <Card className="glass border-none">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Who I Am</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a <span className="text-primary font-semibold">{personalInfo.title}</span> based in {personalInfo.location}, 
                    with a passion for building scalable and user-friendly applications.
                  </p>
                  <p>
                    {personalInfo.bio}
                  </p>
                  <p>
                    Currently <span className="text-green-400 font-semibold">{personalInfo.availability}</span> and 
                    available with <span className="text-primary">{personalInfo.timezone}</span>.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 rounded-lg bg-content2/50"
                    >
                      <div className="text-3xl font-bold gradient-text mb-1">
                        {stat.value}+
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className="about-card">
              <Card className="glass border-none">
                <CardBody className="p-8">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-primary">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.startYear} - {edu.endYear}</p>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Certifications */}
            <div className="about-card">
              <Card className="glass border-none">
                <CardBody className="p-8">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications</h3>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-content2/50">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{cert.name}</h4>
                          <p className="text-gray-400 text-sm">Issued {cert.year}</p>
                          {cert.certificateId && (
                            <p className="text-xs text-gray-500 mt-1">ID: {cert.certificateId}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}