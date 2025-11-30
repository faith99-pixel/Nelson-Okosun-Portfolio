"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { sectionPadding } from '../styles/styles';
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Education = () => {
  const education = [
    {
      degree: "MSc. Geographical Information Systems",
      institution: "Umeå University",
      location: "Sweden",
      period: "2022",
      description: "Advanced study in geographical information systems, spatial analysis, and geospatial technologies with focus on practical applications.",
      achievements: ["Third Place Winner - Hack for Gävle 2022", "Green Delivery Package Challenge"]
    },
    {
      degree: "B. Tech, Urban and Regional Planning",
      institution: "Federal University of Technology",
      location: "Akure, Nigeria",
      period: "2017",
      description: "Comprehensive study in urban planning, regional development, and spatial planning with emphasis on GIS applications.",
      achievements: ["GIS/Transport Analysis Projects", "Research in Urban Development"]
    }
  ];

  const certifications = [
    {
      title: "ArcGIS Enterprise: Administrative Workflows",
      issuer: "ESRI Canada",
      year: "Jun 2023",
      description: "Advanced training in ArcGIS Enterprise administration and workflow management",
      link: "https://drive.google.com/file/d/15M8fqQ--sKG1xMZBJBqeSsPqkSlDnj9o/view?usp=sharing"
    },
    {
      title: "ArcGIS Enterprise: Configuring a Base Deployment",
      issuer: "ESRI Canada",
      year: "Jun 2023",
      description: "Specialized training in ArcGIS Enterprise deployment and configuration",
      link: "https://drive.google.com/file/d/1qfidXStwTBHdIaUKaYegWpJ0glKTqLey/view?usp=sharing"
    },
    {
      title: "Google Cloud Certification",
      issuer: "Google Africa Developer Scholarship",
      year: "Apr 2021",
      description: "Cloud computing and development certification through Google Africa program",
      link: "https://drive.google.com/drive/folders/1K6grcQQ3UZTfqT2DhTgN0JtNCrIFwwMY"
    },
    {
      title: "ERP Technical Consultancy Training",
      issuer: "CyberVault Academy",
      year: "Apr 2020",
      description: "Training in Info SunSystems and SAP enterprise resource planning systems"
    },
    {
      title: "Cartography (MOOC)",
      issuer: "ESRI Training",
      year: "Jun 2018",
      description: "Online certification in cartographic design and map production techniques"
    },
    {
      title: "ArcGIS Desktop/Spatial Analyst Professional",
      issuer: "GIS Plus Technologies",
      year: "Oct 2016",
      description: "Professional certification in ArcGIS Desktop and Spatial Analyst tools"
    }
  ];

  const continuingEducation = [
    "Member, Geospatial Professional Network (Young Professional) - Jan 2025",
    "Member, Project Management Institute (Montreal) - Apr 2024",
    "Digital Skills: ArcGIS Enterprise, Pro, QGIS, Web GIS, FME",
    "Programming: Python, Docker, HOMER Pro, Power Grid Simulation",
    "Survey Tools: ArcGIS Survey 123, KOBO Toolbox, Field Maps",
    "Presentation: Microsoft Office, Adobe Illustrator, ArcGIS Story Maps"
  ];

  return (
    <motion.section
      className={`${sectionPadding} bg-black py-16 px-4`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      >
      <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="md:text-4xl text-[26px] font-bold mb-4 text-purple-600">Education & Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development in GIS technology and project management
          </p>
        </motion.div>

        {/* Formal Education */}
         <div className="mb-16">
           <motion.h3
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.3 }}
            className="md:text-2xl text-xl font-semibold text-purple-600 mb-8 flex items-center"
            >
             <GraduationCap className="mr-3" size={28} />
             Formal Education
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-purple-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.location}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{edu.description}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-purple-600 text-sm">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-600/20 text-purple-600 text-xs rounded-full border border-purple-600/30"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="md:text-2xl text-[20px] font-semibold text-purple-600 mb-8 flex items-center"
            >
             <Award className="mr-3" size={28} />
             Professional Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className={`bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 transition-all duration-300 ${
                  cert.link ? 'hover:bg-white/20 hover:border-purple-600/50 cursor-pointer group' : 'hover:bg-white/20'
                }`}
              >
                {cert.link ? (
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white flex-1 group-hover:text-purple-600 transition-colors">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 text-sm font-medium">{cert.year}</span>
                        <ExternalLink size={16} className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <p className="text-purple-600 font-medium text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                    <p className="text-purple-600 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view certificate →
                    </p>
                  </Link>
                ) : (
                  <>
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white flex-1">{cert.title}</h4>
                      <span className="text-purple-600 text-sm font-medium">{cert.year}</span>
                    </div>
                    <p className="text-purple-600 font-medium text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-300 text-sm">{cert.description}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="md:text-2xl text-[20px] font-semibold text-purple-600 mb-8 flex items-center">
            <BookOpen className="mr-3" size={28} />
            Professional Memberships & Digital Skills
          </h3>

          <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {continuingEducation.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{course}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;