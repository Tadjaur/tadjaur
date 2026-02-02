import { useEffect, useRef } from 'react';
import { Card, CardBody } from '@heroui/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getSkillCategories, getSkillsByExperience, portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const categoryLabels: Record<string, { name: string; icon: string; color: string }> = {
  frontend: { name: 'Frontend', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
  backend: { name: 'Backend', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
  mobile: { name: 'Mobile', icon: '📱', color: 'from-purple-500 to-pink-500' },
  devops: { name: 'DevOps', icon: '🚀', color: 'from-orange-500 to-red-500' },
  database: { name: 'Database', icon: '🗄️', color: 'from-yellow-500 to-amber-500' },
  tools: { name: 'Tools', icon: '🛠️', color: 'from-indigo-500 to-violet-500' },
  other: { name: 'Other', icon: '📦', color: 'from-gray-500 to-slate-500' },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillCategories = getSkillCategories();
  const topSkills = getSkillsByExperience().slice(0, 8);
  const { personalInfo } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars
      gsap.utils.toArray<HTMLElement>('.skill-bar-fill').forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        );
      });

      // Animate category cards
      gsap.fromTo(
        '.skill-category',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen pt-[200px] py-20 relative section-animate"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {personalInfo.totalYearsExperience}+ years of experience with modern technologies and frameworks
          </p>
        </div>

        {/* Top Skills with Progress Bars */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Most Proficient</span> Technologies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {topSkills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-primary text-sm">
                    {skill.years} year{skill.years > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${(skill.years / personalInfo.totalYearsExperience) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills by Category */}
        <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, skills]) => {
            if (skills.length === 0) return null;
            const categoryInfo = categoryLabels[category];

            return (
              <Card key={category} className="skill-category glass border-none card-hover">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{categoryInfo.icon}</span>
                    <h3 className="text-xl font-bold text-white">{categoryInfo.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative"
                      >
                        <span className="tech-badge cursor-default">
                          {skill.name}
                        </span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-content1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {skill.years} year{skill.years > 1 ? 's' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-400 mb-8">
            All Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {getSkillsByExperience().map((skill, index) => {
              const size = skill.years >= 4 ? 'text-lg' : skill.years >= 2 ? 'text-base' : 'text-sm';
              const opacity = skill.years >= 4 ? 'opacity-100' : skill.years >= 2 ? 'opacity-80' : 'opacity-60';
              
              return (
                <span
                  key={skill.name}
                  className={`${size} ${opacity} text-gray-300 hover:text-primary transition-colors cursor-default`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}