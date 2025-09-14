import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata(
  'Terms of Service - AI Image Generation Platform',
  'Read the terms of service for MRPHUS AI image generation platform. Learn about user responsibilities, service availability, and usage policies.',
  ['terms of service', 'terms', 'user agreement', 'service terms', 'legal terms', 'AI service terms']
);

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center">
              <img 
                src="/MRPHUS-web-logo.png" 
                alt="Mrphus AI" 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center"
            >
              <Scale className="h-10 w-10 text-[#ff5757] mr-4" />
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our AI image generation service.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-gray-500 mt-4"
            >
              Last updated: September 14, 2024
            </motion.p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Acceptance */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-[#ff5757] mr-3" />
                Acceptance of Terms
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-400">
                  By accessing and using Mrphus AI, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </motion.section>

            {/* Service Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="h-6 w-6 text-[#ff5757] mr-3" />
                Service Description
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">AI Image Generation</h3>
                  <p className="text-gray-400">
                    Mrphus AI provides artificial intelligence-powered image generation and enhancement services. 
                    Users can create, modify, and enhance images using various AI models and techniques.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Credit System</h3>
                  <p className="text-gray-400">
                    Our service operates on a credit-based system. Users receive free credits upon registration 
                    and can purchase additional credits as needed. Each AI operation consumes a specific number of credits.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* User Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 text-[#ff5757] mr-3" />
                User Responsibilities
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Appropriate Use</h3>
                  <p className="text-gray-400 mb-3">You agree to use our service only for lawful purposes and in accordance with these terms. You will not:</p>
                  <ul className="text-gray-400 space-y-1 ml-4">
                    <li>• Generate illegal, harmful, or offensive content</li>
                    <li>• Violate any intellectual property rights</li>
                    <li>• Attempt to reverse engineer our AI models</li>
                    <li>• Use the service for commercial purposes without permission</li>
                    <li>• Upload malicious files or attempt to harm our systems</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Content Ownership</h3>
                  <p className="text-gray-400">
                    You retain ownership of images you upload. Generated images are provided for your personal use. 
                    We do not claim ownership of your content, but you grant us necessary rights to process and deliver the service.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Service Availability */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Service Availability</h2>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Uptime & Maintenance</h3>
                  <p className="text-gray-400">
                    We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                    We may perform maintenance, updates, or improvements that temporarily affect service availability.
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold mb-3">Service Modifications</h3>
                  <p className="text-gray-400">
                    We reserve the right to modify, suspend, or discontinue any part of our service at any time. 
                    We will provide reasonable notice for significant changes that affect user experience.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6">Limitation of Liability</h2>
              <div className="bg-gradient-to-r from-[#ff5757]/20 to-[#ff5757]/10 backdrop-blur-sm rounded-xl p-8 border border-[#ff5757]/30">
                <p className="text-gray-300 mb-4">
                  To the maximum extent permitted by law, Mrphus AI shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, or use.
                </p>
                <p className="text-gray-300">
                  Our total liability for any claims arising from or related to the service shall not exceed the amount 
                  you paid for the service in the 12 months preceding the claim.
                </p>
              </div>
            </motion.section>

            {/* Changes to Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6">Changes to Terms</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-400">
                  We reserve the right to modify these terms at any time. We will notify users of significant changes 
                  through our service or via email. Continued use of the service after changes constitutes acceptance 
                  of the new terms.
                </p>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-gray-400 mb-6">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center bg-[#ff5757] hover:bg-[#ff4444] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
