import { useEffect, useState } from 'react';
import { Target, BookOpen, Users, ArrowRight, Sparkles, Trophy, TrendingUp } from 'lucide-react';

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('mission');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: Target,
      title: 'Challenge',
      description: 'Monthly AI problems that push your limits and spark innovation',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Master',
      description: 'Learn cutting-edge techniques from real-world AI applications',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Collaborate',
      description: 'Connect with brilliant minds across the globe',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  const stats = [
    { value: '50+', label: 'Monthly Participants', icon: Users },
    { value: '12', label: 'Curated Challenges', icon: Sparkles },
    { value: '∞', label: 'Learning Potential', icon: TrendingUp }
  ];

  return (
    <section id="mission" className="relative py-24 bg-white dark:bg-[#0a0a0f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-orange-50/50 dark:from-purple-900/10 dark:via-[#0a0a0f] dark:to-orange-900/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 mb-8">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Our North Star</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Democratizing</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">AI Excellence</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We transform AI learning from solitary study into a 
            <span className="font-medium text-gray-900 dark:text-white"> collaborative journey</span>, 
            where every challenge brings you closer to mastery.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-4 shadow-sm`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{pillar.description}</p>

                {/* Decorative gradient accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Impact stats */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800 p-1 shadow-sm">
            <div className="rounded-xl bg-white dark:bg-gray-900 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 mb-4 mx-auto">
                      <stat.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to become part of the journey?
          </p>
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-sm hover:shadow-lg">
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;