"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { sectionPadding } from '../styles/styles';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Geographic Information Systems",
      institution: "University of Lagos",
      location: "Lagos, Nigeria",
      period: "2014 - 2016",
      description: "Specialized in spatial analysis, remote sensing, and GIS application development. Thesis focused on urban growth modeling using satellite imagery.",
      achievements: ["First Class Honors", "Best Thesis Award", "GIS Society President"]
    },
    {
      degree: "Bachelor of Science in Geography",
      institution: "Ahmadu Bello University",
      location: "Zaria, Nigeria",
      period: "2010 - 2014",
      description: "Comprehensive study of physical and human geography with emphasis on spatial analysis and cartography.",
      achievements: ["Second Class Upper", "Geography Department Award", "Research Assistant"]
    }
  ];

  const certifications = [
    {
      title: "Certified GIS Professional (GISP)",
      issuer: "GIS Certification Institute",
      year: "2019",
      description: "Professional certification recognizing expertise in GIS technology and project management"
    },
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      year: "2020",
      description: "Global standard for project management professionals"
    },
    {
      title: "Esri Technical Certification",
      issuer: "Esri Inc.",
      year: "2021",
      description: "Advanced certification in ArcGIS Pro and Enterprise solutions"
    },
    {
      title: "Remote Sensing Specialist",
      issuer: "International Society for Photogrammetry",
      year: "2018",
      description: "Specialized certification in satellite imagery analysis and interpretation"
    }
  ];

  const continuingEducation = [
    "Advanced Python for GIS (2023)",
    "Machine Learning for Spatial Analysis (2022)",
    "Agile Project Management (2021)",
    "Web GIS Development with React (2023)"
  ];

  return (
    <motion.section
      className={`${sectionPadding} bg-gradient-to-br from-red-950 via-gray-900 to-red-950 text-white py-28`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
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
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-red-400 mb-8 flex items-center"
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <p className="text-red-400 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.location}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{edu.description}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-red-400 text-sm">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-800/20 text-red-300 text-xs rounded-full border border-red-800/30"
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
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-red-400 mb-8 flex items-center"
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white flex-1">{cert.title}</h4>
                  <span className="text-red-400 text-sm font-medium">{cert.year}</span>
                </div>
                <p className="text-red-400 font-medium text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuing Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-8 flex items-center">
            <BookOpen className="mr-3" size={28} />
            Recent Continuing Education
          </h3>

          <div className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {continuingEducation.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-red-800 rounded-full flex-shrink-0"></div>
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