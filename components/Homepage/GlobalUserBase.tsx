"use client";

const GlobalUserBase = () => {
  const regions = [
    {
      name: "North America",
      users: "12,500",
      percentage: 35,
      color: "bg-primary",
    },
    { name: "Europe", users: "8,200", percentage: 23, color: "bg-blue-500" },
    {
      name: "Asia Pacific",
      users: "11,300",
      percentage: 31,
      color: "bg-green-500",
    },
    {
      name: "Latin America",
      users: "4,000",
      percentage: 11,
      color: "bg-yellow-500",
    },
  ];

  const totalUsers = 36000;

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">
            Global User Base
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our platform serves users across the globe with a presence in over
            50 countries.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Statistics */}
          <div className="lg:col-span-1">
            <div className="bg-primary bg-opacity-5 rounded-lg p-8 border border-primary border-opacity-20">
              <div className="mb-8">
                <p className="text-gray-600 text-sm font-medium mb-2">
                  TOTAL ACTIVE USERS
                </p>
                <p className="text-4xl md:text-5xl font-black text-primary">
                  {totalUsers.toLocaleString()}+
                </p>
              </div>

              <div className="space-y-6">
                {regions.map((region, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-dark font-semibold text-sm">
                        {region.name}
                      </p>
                      <p className="text-primary font-bold">
                        {region.percentage}%
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`${region.color} h-full rounded-full`}
                        style={{ width: `${region.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 text-xs mt-1">
                      {region.users} users
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              {/* ASCII World Map Visualization */}
              <div className="bg-white rounded-lg p-6 border border-gray-100">
                <div className="font-mono text-xs text-gray-400 leading-relaxed overflow-x-auto">
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 960 600"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG World Map */}
                    <defs>
                      <style>{`
                        .country { fill: #f0f0f0; stroke: #e0e0e0; stroke-width: 0.5; }
                        .country-active { fill: #f77a40; opacity: 0.3; stroke: #f77a40; }
                        .country-highlight { fill: #f77a40; opacity: 0.6; }
                      `}</style>
                    </defs>

                    {/* Simplified world regions */}
                    {/* North America */}
                    <rect
                      x="50"
                      y="100"
                      width="150"
                      height="200"
                      className="country-highlight"
                    />
                    {/* South America */}
                    <rect
                      x="150"
                      y="300"
                      width="100"
                      height="150"
                      className="country-active"
                    />
                    {/* Europe */}
                    <rect
                      x="300"
                      y="80"
                      width="120"
                      height="100"
                      className="country-active"
                    />
                    {/* Africa */}
                    <rect
                      x="350"
                      y="200"
                      width="100"
                      height="200"
                      className="country"
                    />
                    {/* Asia */}
                    <rect
                      x="500"
                      y="100"
                      width="300"
                      height="250"
                      className="country-highlight"
                    />
                    {/* Oceania */}
                    <circle
                      cx="750"
                      cy="450"
                      r="40"
                      className="country-active"
                    />

                    {/* Labels */}
                    <text
                      x="125"
                      y="200"
                      textAnchor="middle"
                      className="text-xs font-semibold fill-dark"
                      fontSize="12"
                    >
                      N. America
                    </text>
                    <text
                      x="200"
                      y="380"
                      textAnchor="middle"
                      className="text-xs font-semibold fill-dark"
                      fontSize="12"
                    >
                      S. America
                    </text>
                    <text
                      x="360"
                      y="130"
                      textAnchor="middle"
                      className="text-xs font-semibold fill-dark"
                      fontSize="12"
                    >
                      Europe
                    </text>
                    <text
                      x="650"
                      y="220"
                      textAnchor="middle"
                      className="text-xs font-semibold fill-dark"
                      fontSize="12"
                    >
                      Asia
                    </text>
                    <text
                      x="750"
                      y="450"
                      textAnchor="middle"
                      className="text-xs font-semibold fill-white"
                      fontSize="10"
                    >
                      Oceania
                    </text>
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-sm text-gray-600">
                      High Active Users
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary bg-opacity-30 rounded"></div>
                    <span className="text-sm text-gray-600">Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <span className="text-sm text-gray-600">
                      Expanding Markets
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalUserBase;
