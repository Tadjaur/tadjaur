import { useEffect, useRef } from 'react';
import { Card, CardBody, Chip, Link } from '@heroui/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { experiences } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, index) => {
        gsap.fromTo(
          item,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -50 : 50 
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen pt-[200px] py-20 relative section-animate"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey through various companies and roles
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary/30" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.startDate}`}
              className={`timeline-item relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 pulse-glow" />

              {/* Card */}
              <Card className={`glass border-none card-hover ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <CardBody className="p-6">
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center gap-3 mb-2 flex-wrap md:justify-start">
                      {index % 2 === 0 && <div className="hidden md:block flex-1" />}
                      <Chip color="primary" variant="flat" size="sm">
                        {exp.duration}
                      </Chip>
                      <span className="text-gray-400 text-sm">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {index % 2 === 0 && <div className="hidden md:block flex-1" />}
                      {exp.companyUrl ? (
                        <Link
                          href={exp.companyUrl}
                          target="_blank"
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          {exp.company} ↗
                        </Link>
                      ) : (
                        <span className="text-primary">{exp.company}</span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <ul className={`space-y-2 text-gray-300 text-sm ${index % 2 === 0 ? 'md:list-none' : 'list-disc list-inside'}`}>
                      {exp.description.slice(0, 3).map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Key Achievements</p>
                      <ul className={`space-y-1 text-gray-400 text-xs ${index % 2 === 0 ? 'md:list-none' : 'list-disc list-inside'}`}>
                        {exp.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="tech-badge text-xs">
                        +{exp.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Projects */}
                  {exp.projects.length > 0 && (
                    <div className={`mt-4 pt-4 border-t border-content3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Projects ({exp.projects.length})
                      </p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.projects.map((project) => (
                          <Chip
                            key={project.name}
                            variant="bordered"
                            size="sm"
                            className="border-primary/30 text-gray-300"
                          >
                            {project.name}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  )}
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}