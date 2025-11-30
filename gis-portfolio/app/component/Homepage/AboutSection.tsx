"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { sectionPadding } from '../styles/styles';
import { CheckCircle, Award, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    "Geographic Information Systems & Science",
    "Project Management",
    "Enterprise Systems Administration",
    "Business Development",
    "Data Analytics and Management",
    "Presentation and Communication",
    "ArcGIS Pro & ArcMap",
    "QGIS & PostGIS",
    "Python & R for GIS",
    "Remote Sensing",
    "Spatial Analysis",
    "Web GIS Development"
  ];

  const achievements = [
    {
      icon: <Award size={24} />,
      title: "Hack for Gävle 2022 Winner",
      description: "Third Place - Green Delivery Package Challenge by Future Position X & Microsoft"
    },
    {
      icon: <Target size={24} />,
      title: "Professional Memberships",
      description: "PMI Montreal Member & Geospatial Professional Network (Young Professional)"
    },
    {
      icon: <Users size={24} />,
      title: "International Experience",
      description: "Projects across Africa, Europe, and North America with major organizations"
    }
  ];

  return (
    <motion.section
      id="about"
      className={`${sectionPadding} bg-black text-white md:pt-20 md:pb-10 md:py-0 py-16`}
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
          <h2 className="text-4xl font-bold mb-4 text-purple-600">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate GIS Consultant and Project Manager with extensive experience in spatial analysis,
            mapping solutions, and leading cross-functional teams to deliver innovative geospatial projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">
              Transforming Data into Spatial Intelligence
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a GIS Consultant and Urban Planner with over 8 years of experience applying geospatial technology, data analytics, and energy systems modeling to solve real-world challenges. Currently serving as GIS Coordinator at the City of Airdrie (Canada), I lead the design of advanced GIS applications, automate spatial data workflows with Python and FME, and drive the city's open data and mapping initiatives.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My career spans Africa, Europe, and North America, where I've worked with organizations like Rio Tinto, GIZ, the World Bank, and the United Nations, transforming spatial data into insights that support urban planning, renewable energy projects, and humanitarian mapping.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm passionate about data-driven spatial intelligence, open data collaboration, and using technology to build smarter, sustainable communities.
            </p>

            {/* Core Competencies */}
            <h4 className="text-lg font-semibold text-purple-600 mb-4">Core Competencies</h4>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle size={16} className="text-purple-600 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => {
              const isClickable = achievement.title === "Hack for Gävle 2022 Winner";
               
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.3 + index * 0.1 }}
                  className={`bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl transition-all duration-300 ${
                    isClickable ? 'hover:bg-white/20 hover:border-purple-600/30 cursor-pointer' : 'hover:bg-white/20'
                  }`}
                  {...(isClickable ? {
                    onClick: () => window.open("https://hack-for-gavle.confetti.events/", "_blank")
                  } : {})}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-purple-600 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-600/15 to-purple-600/15 border border-purple-600/30 p-6 rounded-xl text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                Ready to Start Your Project?
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Let's discuss how I can help transform your spatial data into valuable insights.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
