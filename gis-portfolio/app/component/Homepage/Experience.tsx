"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { sectionPadding } from '../styles/styles';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "GIS Coordinator",
      company: "City of Airdrie, AB (Contract)",
      location: "Canada",
      period: "Nov 2024 – Present",
      description: [
        "Leading and coordinating the GIS team, creating complex GIS applications, and assisting Leadership Teams with strategic planning",
        "Developing complex GIS web-based applications to support business unit requirements with optimized geospatial data management",
        "Creating, updating, and maintaining GIS maps and SDE data, providing real-time address and land parcel data",
        "Automating data workflows using Python and FME to streamline GIS processes and improve data integration efficiency",
        "Leading LiDAR acquisition and management to capture city-wide Bare Earth LAS data and Building footprints",
        "Expanding City of Airdrie Open Data program using ESRI AGOL platform, increasing transparency and accessibility"
      ],
      technologies: ["ArcGIS Pro", "Python", "FME", "LiDAR", "ESRI AGOL", "SDE", "Open Data"]
    },
    {
      title: "GIS Analyst",
      company: "Rio Tinto",
      location: "Montreal",
      period: "Feb 2023 – Jun 2024",
      description: [
        "Subject matter expert to Closure team for development of systems to capture, store and utilize geotechnical data",
        "Managing utility and infrastructure on mine sites using various GIS tools",
        "Supporting ETL automation for importing data into ArcGIS Portal from Landfolio and DroneDeploy",
        "Final stage deployment and upgrade of ArcGIS Enterprise system for mine closure and rehabilitation unit",
        "Development of custom ArcGIS Web applications using Experience Builder for land asset data",
        "Supporting transfer of GIS data into Power BI using ETL transformation for Senior Leadership visualization"
      ],
      technologies: ["ArcGIS Enterprise", "ArcGIS Experience Builder", "DroneDeploy", "Landfolio", "Power BI", "ETL"]
    },
    {
      title: "Geo-Data Consultant / Project Manager",
      company: "INTEGRATION Environment and Energy GmbH",
      location: "Gräfenberg, Bavaria, Germany",
      period: "Nov 2020 – Feb 2023",
      description: [
        "Providing GIS Data management and Visualization Support on energy projects for multilateral organizations",
        "Liaising with project partners to understand energy infrastructure needs and translate them into KPIs",
        "Performing grid network and cluster analysis to find reachable locations within travel time limits",
        "Supporting remote assessment, demand assessment, distribution network planning, and financial modelling",
        "Processing data to create visualizations and thematic maps for population centers and large users",
        "Modelling energy consumption data using R to visualise consumption patterns and estimate similar use-cases"
      ],
      technologies: ["GIS", "R", "Energy Modeling", "Grid Analysis", "Financial Modelling", "Data Visualization"]
    },
    {
      title: "Geospatial Features Extractor",
      company: "United Nations Global Service Centre",
      location: "Italy",
      period: "May 2022 – Nov 2022",
      description: [
        "Visual interpretation, extraction and geospatial data collection of topographic features using OpenStreetMap",
        "Creating transportation routing project for global logistics services by integrating OpenRouteService API",
        "Customizing user interface using Node.js and validating results by comparing with routes in selected countries",
        "Assisting in development and update of Quality Control and Quality Assurance SOPs for consistent data management"
      ],
      technologies: ["OpenStreetMap", "OpenRouteService API", "JavaScript", "Node.js", "Docker", "QA/QC"]
    },
    {
      title: "Data Analyst; Operations Team Lead",
      company: "OPAY: Opera (Mini) Group",
      location: "Nigeria",
      period: "Aug 2019 – Jun 2020",
      description: [
        "Managing national online database and merchant information for over 10 million service users",
        "Performing daily CRM data operations for financial transactions, customer registrations and business development",
        "Using geographic analysis tools to determine areas with highest transaction origination",
        "Spooling data using SQL Hue Editor from company CRM and sorting data for different cities analysis"
      ],
      technologies: ["SQL", "CRM", "Geographic Analysis", "Data Operations", "Business Intelligence"]
    },
    {
      title: "IT Specialist / Facility Manager",
      company: "Lagos State Development and Property Corporation",
      location: "Lagos, Nigeria",
      period: "Jul 2018 – Jun 2019",
      description: [
        "Data management and visualization – Creation and maintenance of building information databases",
        "Facility management for state owned buildings including maintenance audits and compliance monitoring",
        "Building maintenance audits, materials standard compliance, renovations and refurbishment monitoring"
      ],
      technologies: ["Database Management", "Data Visualization", "Facility Management", "Building Information Systems"]
    },
    {
      title: "GIS Analyst; Field Officer",
      company: "GIS Plus Technologies",
      location: "Nigeria",
      period: "Apr 2016 – Oct 2016",
      description: [
        "E-LAND PRICING PROJECT - Building electronic land pricing system using ArcGIS with Python scripts",
        "FUTA WEST GATE Site Selection Project - Site survey, Data Analysis, and preparation of locational maps",
        "Field Research and mapping, Data Analysis using SPSS and ArcGIS desktop"
      ],
      technologies: ["ArcGIS", "Python", "SPSS", "Field Research", "Site Analysis", "Land Pricing Systems"]
    }
  ];

  return (
    <motion.section
      id="experience"
      className={`${sectionPadding} relative bg-black md:py-14 py-8`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Work Experience</h2>

        <div className="relative max-w-4xl mx-auto md:max-w-4xl sm:max-w-full sm:px-2">
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
                <div className="hidden md:block absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-purple-600 to-transparent"></div>
              )}
              
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-4 top-6 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900"></div>

              {/* Content */}
              <div className="md:ml-16 mx-auto md:mx-0 w-full bg-white/10 border border-purple-600/30 backdrop-blur-sm rounded-2xl pt-14 shadow-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">{exp.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-300 text-sm gap-1 md:gap-0">
                      <div className="flex items-center space-x-1">
                        <Building size={14} className="flex-shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} className="flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-purple-600 text-sm mt-2 md:mt-0">
                    <Calendar size={14} className="flex-shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                     <span className="text-purple-600 mr-2 mt-1.5 w-1 h-1 bg-purple-600 rounded-full flex-shrink-0"></span>
                     {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-600/20 text-purple-600 text-xs rounded-full border border-purple-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
      </div>
    </motion.section>
  );
};

export default Experience;
