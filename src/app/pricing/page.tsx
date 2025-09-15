'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Zap, Crown, Star } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out our AI features',
    icon: Zap,
    features: [
      '10 AI generations (lifetime)',
      'Basic image processing',
      'Standard quality output',
      'Community support',
      'Watermarked results'
    ],
    limitations: [
      'Limited to 10 generations total',
      'Standard processing speed',
      'Basic support only'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$15',
    period: 'lifetime',
    description: 'For casual creators',
    icon: Star,
    features: [
      '100 AI generations (lifetime)',
      'Premium image processing',
      'High quality output',
      'Priority support',
      'No watermarks',
      'Advanced editing tools'
    ],
    limitations: [],
    cta: 'Buy Now',
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$35',
    period: 'lifetime',
    description: 'For serious creators',
    icon: Crown,
    features: [
      '300 AI generations (lifetime)',
      'Professional image processing',
      'Ultra high quality output',
      'Priority support',
      'No watermarks',
      'All advanced features',
      'Batch processing'
    ],
    limitations: [],
    cta: 'Buy Now',
    popular: false
  },
  {
    id: 'business',
    name: 'Business',
    price: '$99',
    period: 'lifetime',
    description: 'For businesses and teams',
    icon: Crown,
    features: [
      '1000 AI generations (lifetime)',
      'Professional image processing',
      'Ultra high quality output',
      '24/7 dedicated support',
      'No watermarks',
      'All advanced features',
      'Batch processing',
      'API access',
      'Custom branding'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false
  }
];

const faqs = [
  {
    question: 'How does the credit system work?',
    answer: 'Each AI generation consumes one credit. Free users get 10 credits lifetime, Starter plan gives 100 credits lifetime, Pro plan gives 300 credits lifetime, and Business plan gives 1000 credits lifetime.'
  },
  {
    question: 'What are watermarks and how do I remove them?',
    answer: 'Free plan results include a watermark. To remove watermarks and get clean results, upgrade to any paid plan (Starter $15, Pro $35, or Business $99).'
  },
  {
    question: 'Are these really lifetime plans?',
    answer: 'Yes! All our plans are one-time payments with lifetime access. No monthly subscriptions, no recurring charges. Pay once and use forever.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and cryptocurrency for all plans.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade to a higher plan anytime. We\'ll credit your previous purchase towards the new plan.'
  },
  {
    question: 'What happens if I run out of credits?',
    answer: 'You can purchase additional credit packs or upgrade to a higher plan. Credits never expire and can be used anytime.'
  }
];

export default function PricingPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-[#ff5757] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pricing
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#ff5757] to-white bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Choose the perfect lifetime plan for your creative needs. Pay once, use forever.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  className={`relative bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-[#ff5757] bg-white/10' : ''
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#ff5757] text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#ff5757]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#ff5757]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#ff5757] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.id === 'enterprise' ? '/contact' : '/app'}
                    className={`w-full block text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-[#ff5757] text-white hover:bg-[#ff6b6b]'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Features Comparison */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Compare Features</h3>
            <div className="bg-white/5 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="text-left p-6 font-semibold">Features</th>
                      <th className="text-center p-6 font-semibold">Free</th>
                      <th className="text-center p-6 font-semibold">Starter</th>
                      <th className="text-center p-6 font-semibold">Pro</th>
                      <th className="text-center p-6 font-semibold">Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Lifetime Credits', '10', '100', '300', '1000'],
                      ['Image Quality', 'Standard', 'High', 'Ultra High', 'Ultra High'],
                      ['Watermarks', 'Yes', 'No', 'No', 'No'],
                      ['Support', 'Community', 'Priority', 'Priority', '24/7 Dedicated'],
                      ['Advanced Editing Tools', 'No', 'Yes', 'Yes', 'Yes'],
                      ['Batch Processing', 'No', 'No', 'Yes', 'Yes'],
                      ['API Access', 'No', 'No', 'No', 'Yes'],
                      ['Custom Branding', 'No', 'No', 'No', 'Yes']
                    ].map(([feature, free, starter, pro, business], index) => (
                      <tr key={index} className="border-t border-white/10">
                        <td className="p-6 font-medium">{feature}</td>
                        <td className="p-6 text-center text-gray-400">{free}</td>
                        <td className="p-6 text-center text-white">{starter}</td>
                        <td className="p-6 text-center text-white">{pro}</td>
                        <td className="p-6 text-center text-white">{business}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#ff5757]/20 to-[#ff8a8a]/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already using MRPHUS AI to transform their images.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="inline-flex items-center px-8 py-4 bg-[#ff5757] text-white font-semibold rounded-full hover:bg-[#ff6b6b] transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
