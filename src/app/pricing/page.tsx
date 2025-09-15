'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Zap, Crown, Star } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
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
    monthlyPrice: '$5',
    yearlyPrice: '$50',
    period: 'month',
    description: 'For casual creators',
    icon: Star,
    features: [
      '100 AI generations',
      'Premium image processing',
      'High quality output',
      'Priority support',
      'No watermarks',
      'Advanced editing tools'
    ],
    limitations: [],
    cta: 'Start Trial',
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: '$15',
    yearlyPrice: '$150',
    period: 'month',
    description: 'For serious creators',
    icon: Crown,
    features: [
      '300 AI generations',
      'Professional image processing',
      'Ultra high quality output',
      'Priority support',
      'No watermarks',
      'All advanced features',
      'Batch processing'
    ],
    limitations: [],
    cta: 'Start Trial',
    popular: false
  },
  {
    id: 'business',
    name: 'Business',
    monthlyPrice: '$35',
    yearlyPrice: '$350',
    period: 'month',
    description: 'For businesses and teams',
    icon: Crown,
    features: [
      '1000 AI generations',
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

const lifetimePlans = [
  {
    id: 'lifetime-starter',
    name: 'Starter Lifetime',
    price: '$99',
    period: 'lifetime',
    description: 'One-time payment, use forever',
    icon: Star,
    features: [
      '1000 AI generations (lifetime)',
      'Premium image processing',
      'High quality output',
      'Priority support',
      'No watermarks',
      'Advanced editing tools',
      'All Nano Banana features'
    ],
    limitations: [],
    cta: 'Buy Now',
    popular: false
  },
  {
    id: 'lifetime-pro',
    name: 'Pro Lifetime',
    price: '$199',
    period: 'lifetime',
    description: 'Best value for creators',
    icon: Crown,
    features: [
      '3000 AI generations (lifetime)',
      'Professional image processing',
      'Ultra high quality output',
      'Priority support',
      'No watermarks',
      'All advanced features',
      'Batch processing',
      'All Nano Banana features',
      'Commercial license'
    ],
    limitations: [],
    cta: 'Buy Now',
    popular: true
  },
  {
    id: 'lifetime-business',
    name: 'Business Lifetime',
    price: '$399',
    period: 'lifetime',
    description: 'For businesses and teams',
    icon: Crown,
    features: [
      '10000 AI generations (lifetime)',
      'Professional image processing',
      'Ultra high quality output',
      '24/7 dedicated support',
      'No watermarks',
      'All advanced features',
      'Batch processing',
      'API access',
      'Custom branding',
      'All Nano Banana features',
      'Commercial license',
      'Team collaboration'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false
  }
];

const faqs = [
  {
    question: 'How does the credit system work?',
    answer: 'Each AI generation using Google Gemini 2.5 Flash (Nano Banana) consumes one credit. Free users get 10 credits lifetime. Paid plans give monthly credits that reset each billing cycle, or lifetime credits for lifetime plans.'
  },
  {
    question: 'What are watermarks and how do I remove them?',
    answer: 'Free plan results include a watermark. To remove watermarks and get clean results, upgrade to any paid plan (Starter $15, Pro $35, or Business $99).'
  },
  {
    question: 'What billing options do you offer?',
    answer: 'We offer Monthly and Yearly subscription plans, plus Lifetime plans (one-time payment, use forever). Lifetime plans offer the best long-term value with no recurring charges.'
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
  },
  {
    question: 'What AI model do you use?',
    answer: 'We use Google Gemini 2.5 Flash (Nano Banana) for all image generation. Each generation costs us $0.039 in API fees, and we offer competitive lifetime pricing with no daily limits.'
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = React.useState('monthly');

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
              Choose the perfect plan for your creative needs. Flexible billing options available.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-12 h-6 bg-white/20 rounded-full transition-colors"
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : ''
                }`} />
              </button>
              <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingPeriod === 'yearly' && (
                <span className="text-xs bg-[#ff5757] text-white px-2 py-1 rounded-full">
                  Save 17%
                </span>
              )}
            </div>
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
                      <span className="text-4xl font-bold text-white">
                        {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
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

          {/* Lifetime Plans Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#ff5757] to-[#ff8a8a] bg-clip-text text-transparent">
                🚀 Lifetime Plans - Pay Once, Use Forever
              </h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                One-time payment, lifetime access. No recurring charges, no expiration dates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lifetimePlans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <motion.div
                    key={plan.id}
                    className={`relative bg-gradient-to-br from-[#ff5757]/10 to-[#ff8a8a]/5 rounded-2xl p-8 border ${
                      plan.popular ? 'border-[#ff5757]/50 shadow-lg shadow-[#ff5757]/20' : 'border-[#ff5757]/20'
                    } hover:border-[#ff5757]/40 transition-all duration-300`}
                    whileHover={{ y: -5 }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-[#ff5757] text-white px-4 py-1 rounded-full text-sm font-medium">
                          Best Value
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
                      href={plan.id === 'lifetime-business' ? '/contact' : '/app'}
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
