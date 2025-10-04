"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { sectionPadding } from '../styles/styles';
import { CheckCircle, Award, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    "ArcGIS Pro & ArcMap",
    "QGIS & PostGIS",
    "Python & R for GIS",
    "Remote Sensing",
    "Spatial Analysis",
    "Project Management",
    "Web GIS Development",
    "Database Management",
    "Cartographic Design",
    "Team Leadership"
  ];

  const achievements = [
    {
      icon: <Award size={24} />,
      title: "Certified GIS Professional",
      description: "GISP certification with 8+ years experience"
    },
    {
      icon: <Target size={24} />,
      title: "Project Success Rate",
      description: "98% on-time delivery across 50+ projects"
    },
    {
      icon: <Users size={24} />,
      title: "Team Leadership",
      description: "Led teams of 5-15 professionals"
    }
  ];

  return (
    <motion.section
      id="about"
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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-red-400">
              Transforming Data into Spatial Intelligence
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 8 years of experience in GIS consulting and project management, I specialize in 
              turning complex spatial data into actionable insights. My expertise spans from technical 
              GIS analysis to strategic project leadership, ensuring successful delivery of geospatial 
              solutions across various industries.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I have successfully managed and delivered projects ranging from environmental monitoring 
              systems to urban planning solutions, always focusing on innovation, efficiency, and 
              stakeholder satisfaction.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle size={16} className="text-red-800 flex-shrink-0" />
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-red-800 mt-1">
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
            ))}

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-gradient-to-r from-red-800 to-red-900 p-6 rounded-xl text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-2">
                Ready to Start Your Project?
              </h4>
              <p className="text-red-100 text-sm mb-4">
                Let's discuss how I can help transform your spatial data into valuable insights.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-red-800 font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
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