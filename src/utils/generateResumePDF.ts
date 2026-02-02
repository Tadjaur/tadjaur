import jsPDF from 'jspdf';
import { portfolioData, getSkillsByExperience, getSkillCategories } from '../data/portfolioData';

export const generateResumePDF = () => {
  const { personalInfo, experiences, education, certifications, skills } = portfolioData;
  const doc = new jsPDF();
  
  // Colors
  const primaryColor: [number, number, number] = [99, 102, 241]; // Indigo
  const textColor: [number, number, number] = [31, 41, 55]; // Gray-800
  const lightGray: [number, number, number] = [107, 114, 128]; // Gray-500
  
  let yPosition = 20;
  const leftMargin = 20;
  const rightMargin = 190;
  const pageWidth = 170;
  
  // Helper function to add a new page if needed
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > 280) {
      doc.addPage();
      yPosition = 20;
    }
  };
  
  // Helper function for section headers
  const addSectionHeader = (title: string) => {
    checkNewPage(20);
    yPosition += 8;
    doc.setFillColor(...primaryColor);
    doc.rect(leftMargin, yPosition - 5, pageWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title.toUpperCase(), leftMargin + 3, yPosition);
    doc.setTextColor(...textColor);
    yPosition += 10;
  };
  
  // Helper function for text wrapping
  const addWrappedText = (text: string, fontSize: number, maxWidth: number, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line: string) => {
      checkNewPage(6);
      doc.text(line, leftMargin, yPosition);
      yPosition += fontSize * 0.5;
    });
  };
  
  // ========== HEADER ==========
  // Name
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...primaryColor);
  doc.text(personalInfo.name, leftMargin, yPosition);
  yPosition += 8;
  
  // Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...textColor);
  doc.text(personalInfo.title, leftMargin, yPosition);
  yPosition += 6;
  
  // Contact info line
  doc.setFontSize(9);
  doc.setTextColor(...lightGray);
  const contactLine = `${personalInfo.email} | ${personalInfo.location} | ${personalInfo.timezone}`;
  doc.text(contactLine, leftMargin, yPosition);
  yPosition += 4;
  
  // Links
  doc.setTextColor(...primaryColor);
  const linksLine = `LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}`;
  doc.text(linksLine, leftMargin, yPosition);
  doc.setTextColor(...textColor);
  yPosition += 3;
  
  // Availability badge
  doc.setFillColor(34, 197, 94); // Green
  doc.roundedRect(leftMargin, yPosition, 55, 6, 1, 1, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text(`✓ ${personalInfo.availability}`, leftMargin + 2, yPosition + 4);
  doc.setTextColor(...textColor);
  yPosition += 10;
  
  // ========== PROFESSIONAL SUMMARY ==========
  addSectionHeader('Professional Summary');
  doc.setTextColor(...textColor);
  addWrappedText(personalInfo.bio, 10, pageWidth);
  yPosition += 3;
  
  // ========== TECHNICAL SKILLS ==========
  addSectionHeader('Technical Skills');
  
  const skillCategories = getSkillCategories();
  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    devops: 'DevOps',
    database: 'Database',
    tools: 'Tools',
  };
  
  Object.entries(skillCategories).forEach(([category, categorySkills]) => {
    if (categorySkills.length === 0 || category === 'other') return;
    
    checkNewPage(10);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${categoryLabels[category]}: `, leftMargin, yPosition);
    
    doc.setFont('helvetica', 'normal');
    const skillsList = categorySkills.map(s => `${s.name} (${s.years}yr${s.years > 1 ? 's' : ''})`).join(', ');
    const skillLines = doc.splitTextToSize(skillsList, pageWidth - 25);
    doc.text(skillLines, leftMargin + 25, yPosition);
    yPosition += skillLines.length * 5 + 2;
  });
  yPosition += 3;
  
  // ========== WORK EXPERIENCE ==========
  addSectionHeader('Work Experience');
  
  experiences.forEach((exp, index) => {
    checkNewPage(30);
    
    // Job title and company
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(exp.title, leftMargin, yPosition);
    
    const titleWidth = doc.getTextWidth(exp.title);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...primaryColor);
    doc.text(`@${exp.company}`, leftMargin + titleWidth + 1, yPosition);
    doc.setTextColor(...textColor);
    yPosition += 5;
    
    // Duration
    doc.setFontSize(9);
    doc.setTextColor(...lightGray);
    doc.text(`${exp.startDate} - ${exp.endDate} (${exp.duration})`, leftMargin, yPosition);
    if (exp.companyUrl) {
      doc.setTextColor(...primaryColor);
      doc.text(exp.companyUrl, leftMargin + 80, yPosition);
    }
    doc.setTextColor(...textColor);
    yPosition += 6;
    
    // Key achievements/descriptions
    doc.setFontSize(9);
    exp.description.slice(0, 4).forEach((desc) => {
      checkNewPage(8);
      const wrappedDesc = doc.splitTextToSize(`• ${desc}`, pageWidth - 5);
      doc.text(wrappedDesc, leftMargin + 3, yPosition);
      yPosition += wrappedDesc.length * 4 + 1;
    });
    
    // Technologies used
    if (exp.technologies.length > 0) {
      checkNewPage(8);
      doc.setFontSize(8);
      doc.setTextColor(...lightGray);
      const techLine = `Technologies: ${exp.technologies.slice(0, 8).join(', ')}${exp.technologies.length > 8 ? '...' : ''}`;
      const techLines = doc.splitTextToSize(techLine, pageWidth);
      doc.text(techLines, leftMargin + 3, yPosition);
      yPosition += techLines.length * 3 + 2;
      doc.setTextColor(...textColor);
    }
    
    // Projects
    if (exp.projects.length > 0) {
      checkNewPage(10);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'italic');
      const projectNames = exp.projects.map(p => p.name).join(', ');
      doc.text(`Projects: ${projectNames}`, leftMargin + 3, yPosition);
      doc.setFont('helvetica', 'normal');
      yPosition += 5;
    }
    
    yPosition += 5;
  });
  
  // ========== EDUCATION ==========
  addSectionHeader('Education');
  
  education.forEach((edu) => {
    checkNewPage(15);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(edu.degree, leftMargin, yPosition);
    yPosition += 5;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...primaryColor);
    doc.text(edu.institution, leftMargin, yPosition);
    doc.setTextColor(...lightGray);
    doc.text(` | ${edu.startYear} - ${edu.endYear}`, leftMargin + doc.getTextWidth(edu.institution), yPosition);
    doc.setTextColor(...textColor);
    yPosition += 8;
  });
  
  // ========== CERTIFICATIONS ==========
  if (certifications.length > 0) {
    addSectionHeader('Certifications');
    
    certifications.forEach((cert) => {
      checkNewPage(10);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`• ${cert.name}`, leftMargin, yPosition);
      yPosition += 4;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...lightGray);
      let certInfo = `  Issued: ${cert.year}`;
      if (cert.certificateId) {
        certInfo += ` | ID: ${cert.certificateId}`;
      }
      doc.text(certInfo, leftMargin, yPosition);
      doc.setTextColor(...textColor);
      yPosition += 6;
    });
  }
  
  // ========== FOOTER ==========
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...lightGray);
    doc.text(
      `${personalInfo.name} - Resume | Page ${i} of ${pageCount}`,
      105,
      290,
      { align: 'center' }
    );
    doc.text(
      `Generated from portfolio: ${personalInfo.github}`,
      105,
      294,
      { align: 'center' }
    );
  }
  
  // Save the PDF
  const fileName = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
  doc.save(fileName);
  
  return fileName;
};

export default generateResumePDF;