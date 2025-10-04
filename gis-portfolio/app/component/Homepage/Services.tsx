"use client";
import React from 'react';
import { Map, Database, BarChart3, Users, Globe, Layers } from 'lucide-react';
import { sectionPadding } from '../styles/styles';
import { motion } from 'framer-motion';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceCard = ({ icon, title, description }: ServiceProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
    >
      <div className="text-red-800 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Map size={32} />,
      title: "Spatial Analysis & Mapping",
      description: "Advanced spatial analysis, cartographic design, and interactive mapping solutions using ArcGIS, QGIS, and web mapping technologies."
    },
    {
      icon: <Database size={32} />,
      title: "GIS Database Management",
      description: "Design and management of spatial databases, geodatabase creation, data modeling, and integration with enterprise systems."
    },
    {
      icon: <Globe size={32} />,
      title: "Remote Sensing & Imagery",
      description: "Satellite imagery analysis, aerial photography interpretation, change detection, and environmental monitoring solutions."
    },
    {
      icon: <Users size={32} />,
      title: "Project Management",
      description: "End-to-end project management for GIS implementations, team coordination, stakeholder management, and delivery optimization."
    },
    {
      icon: <Layers size={32} />,
      title: "Web GIS Development",
      description: "Custom web-based GIS applications, interactive dashboards, and mobile GIS solutions for field data collection."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Geospatial Analytics",
      description: "Business intelligence through location analytics, market analysis, site selection, and demographic studies using GIS."
    }
  ];

  return (
    <motion.div
      id="services"
      className={`${sectionPadding} bg-gradient-to-br from-red-950 via-gray-900 to-red-950 text-white py-28`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Comprehensive GIS consulting and project management services to transform your spatial data into actionable insights
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;