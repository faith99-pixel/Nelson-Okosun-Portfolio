"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { sectionPadding } from '../styles/styles';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior GIS Consultant & Project Manager",
      company: "Geospatial Solutions Inc.",
      location: "Remote",
      period: "2020 - Present",
      description: [
        "Lead cross-functional teams of 8-12 professionals in delivering complex GIS projects",
        "Manage project budgets ranging from $50K to $500K with 98% on-time delivery rate",
        "Develop spatial analysis solutions for environmental monitoring and urban planning",
        "Implement web GIS applications serving 10,000+ daily users"
      ],
      technologies: ["ArcGIS Pro", "Python", "PostgreSQL", "React", "Project Management"]
    },
    {
      title: "GIS Analyst & Project Coordinator",
      company: "Environmental Data Systems",
      location: "Lagos, Nigeria",
      period: "2018 - 2020",
      description: [
        "Coordinated environmental monitoring projects across West Africa",
        "Performed spatial analysis for land use change detection using satellite imagery",
        "Developed automated workflows reducing data processing time by 60%",
        "Trained junior analysts in GIS best practices and project methodologies"
      ],
      technologies: ["ArcGIS", "QGIS", "Remote Sensing", "Python", "SQL"]
    },
    {
      title: "Junior GIS Specialist",
      company: "Urban Planning Authority",
      location: "Abuja, Nigeria",
      period: "2016 - 2018",
      description: [
        "Created detailed maps and spatial analyses for urban development projects",
        "Maintained and updated spatial databases for city planning initiatives",
        "Collaborated with urban planners and architects on zoning projects",
        "Conducted field surveys and GPS data collection"
      ],
      technologies: ["ArcGIS", "AutoCAD", "GPS", "Cartography", "Database Management"]
    }
  ];

  return (
    <motion.section
      id="experience"
      className={`${sectionPadding} bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white py-28`}
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
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A track record of successful GIS projects and team leadership across various industries and scales
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-red-800 to-transparent"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-red-800 rounded-full border-4 border-gray-900"></div>

              {/* Content */}
              <div className="ml-16 bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <div className="flex items-center space-x-1">
                        <Building size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-red-400 text-sm mt-2 md:mt-0">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-red-800 mr-2 mt-1.5 w-1 h-1 bg-red-800 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-800/20 text-red-300 text-xs rounded-full border border-red-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-800/20 to-red-900/20 border border-red-800/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how my experience can contribute to your next GIS project or team.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-800 hover:bg-red-900 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-red-800/20"
            >
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;