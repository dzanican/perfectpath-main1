import React from 'react'

export default function Pricing() {
  const features = [
    { name: 'Resume Customizations', free: '2', team: '10', pro: 'Unlimited', enterprise: 'Unlimited' },
    { name: 'Cover Letter Generation', free: '1', team: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
    { name: 'Career Compass', free: '✓', team: '✓', pro: '✓', enterprise: '✓' },
    { name: 'Job Match Analysis', free: '-', team: '✓', pro: '✓', enterprise: '✓' },
    { name: 'Career Path Planning', free: '-', team: '-', pro: '✓', enterprise: '✓' },
    { name: 'Priority Support', free: '-', team: '-', pro: '✓', enterprise: '✓' },
    { name: 'Priority Support', free: '-', team: '-', pro: '✓', enterprise: '✓' },
    { name: 'Priority Support', free: '-', team: '-', pro: '✓', enterprise: '✓' },
    { name: 'Priority Support', free: '-', team: '-', pro: '✓', enterprise: '✓' },
    { name: 'Interview Practice', free: '-', team: '15 minutes', pro: '120 minutes', enterprise: 'Unlimited' }
  ]

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">Pricing & Plans</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Choose the perfect plan to enhance your career journey with PerfectPath.
          </p>
        </div>

        {/* lg+ */}
        <div className="hidden mt-16 lg:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-8 pr-4"></th>

                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">Free</span>
                  <p className="mt-6 text-6xl font-bold">$0</p>
                  <p className="mt-2 text-base font-normal text-gray-500">No CC required</p>
                </th>

                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">See whats out there</span>
                  <p className="mt-6 text-6xl font-bold">$15</p>
                  <p className="mt-2 text-base font-normal text-gray-500">1 month</p>
                </th>

                <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                  <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full">Popular</span>
                  <p className="mt-6 text-6xl font-bold text-white">$25</p>
                  <p className="mt-2 text-base font-normal text-gray-200">3 months</p>
                </th>

                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-blue-600">Lifetime</span>
                  <p className="mt-6 text-6xl font-bold">$150</p>
                  <p className="mt-2 text-base font-normal text-gray-500">Once</p>
                </th>
              </tr>
            </thead>

            <tbody>
              {features.map((feature, index) => (
                <tr key={feature.name}>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">{feature.name}</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">{feature.free}</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">{feature.team}</td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">{feature.pro}</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">{feature.enterprise}</td>
                </tr>
              ))}

              <tr>
                <td className="py-6 pr-4"></td>
                {['free', 'team', 'pro', 'enterprise'].map((tier, index) => (
                  <td key={tier} className={`px-4 py-6 text-center ${tier === 'pro' ? 'bg-[#FFE492] rounded-b-xl text-black' : ''}`}>
                    <a
                      href="#"
                      className={`inline-flex items-center font-semibold ${
                        tier === 'pro' ? 'text-black' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      Get Started
                      <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            {[
              { name: 'Free', price: '$0' },
              { name: 'Team', price: '$99' },
              { name: 'Popular', price: '$150' },
              { name: 'Enterprise', price: '$490' }
            ].map((tier) => (
              <div key={tier.name} className="px-2 py-2">
                <span className="text-sm font-medium text-blue-600">{tier.name}</span>
                <p className="mt-2 text-xl font-bold">{tier.price}</p>
                <span className="mt-1 text-sm font-normal text-gray-500">Per month</span>
              </div>
            ))}
          </div>

          {features.map((feature) => (
            <React.Fragment key={feature.name}>
              <div className="px-2 py-4 sm:px-4">
                <p className="font-semibold">{feature.name}</p>
              </div>
              <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
                <div className="px-2 py-2">{feature.free}</div>
                <div className="px-2 py-2">{feature.team}</div>
                <div className="px-2 py-2">{feature.pro}</div>
                <div className="px-2 py-2">{feature.enterprise}</div>
              </div>
            </React.Fragment>
          ))}

          <div className="grid grid-cols-4 text-center divide-x divide-gray-200">
            {['Free', 'Team', 'Popular', 'Enterprise'].map((tier) => (
              <div key={tier} className="px-1 py-2 sm:px-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  role="button"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
