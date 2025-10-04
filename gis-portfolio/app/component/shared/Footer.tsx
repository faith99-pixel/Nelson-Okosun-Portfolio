"use client"

import React from 'react'
import { sectionPadding } from '../styles/styles'
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={`bg-gradient-to-br from-red-950 to-gray-900 text-white py-12 ${sectionPadding}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-800">Nelson</span> Okosun
            </h3>
            <p className="text-gray-400 mb-4">
              GIS Consultant & Project Manager specializing in spatial analysis, 
              mapping solutions, and project management.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:nelson@example.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-800 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-14">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-red-400 transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-800" />
                <span className="text-gray-400">nelson@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-red-800" />
                <span className="text-gray-400">Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Nelson Okosun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer