import { Clock, Coins, FileText, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-sky-500" />,
      value: "17.3",
      unit: "Hours",
      label: "Average Time Saved"
    },
    {
      icon: <Coins className="w-8 h-8 text-blue-500" />,
      value: "6.4M",
      unit: "Tokens",
      label: "Saved Per Month"
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      value: "50K+",
      unit: "Docs",
      label: "Ready to Generate"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: "10K+",
      unit: "Users",
      label: "On the Waitlist"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 relative overflow-hidden">
      {/* Premium micro gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/50 via-transparent to-cyan-700/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-sky-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Proven Results That Matter
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of developers who are already on the waitlist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-500"
            >
              <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md w-fit mx-auto group-hover:bg-white/30 transition-colors duration-500 shadow-2xl border border-white/20">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1 text-blue-100">
                {stat.unit}
              </div>
              <div className="text-blue-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;