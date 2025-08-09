import React from 'react';
import { Check, Zap, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for trying out AI image generation',
      features: [
        '10 images per month',
        'Standard quality',
        'Basic styles',
        'Community gallery access',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'month',
      description: 'For creators who need more power and flexibility',
      features: [
        '500 images per month',
        'High quality + HD',
        'All styles available',
        'Priority generation',
        'Advanced controls',
        'Commercial license',
        'Priority support'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'month',
      description: 'For teams and businesses with high-volume needs',
      features: [
        'Unlimited images',
        'Ultra HD quality',
        'Custom model training',
        'API access',
        'Team collaboration',
        'White-label options',
        'Dedicated support',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-green-500 hover:bg-green-600 text-white',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.popular
                  ? 'border-purple-500 relative'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.price !== 'Free' && (
                      <span className="text-gray-600 text-lg">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:-translate-y-0.5 transform ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Need something custom?
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              We offer custom solutions for enterprise clients with specific requirements. 
              Let's discuss how we can help your team succeed.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;