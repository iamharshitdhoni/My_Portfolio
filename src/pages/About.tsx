import { motion } from 'framer-motion';
import { GraduationCap, Code, Target, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BTech in Computer Science',
    },
    {
      icon: Code,
      title: 'Specialization',
      description: 'MERN Stack Development',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Full Stack Web Applications',
    },
    {
      icon: Zap,
      title: 'Passion',
      description: 'Clean & Efficient Code',
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-mono mb-4">
              &lt;About Me /&gt;
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Know More <span className="text-gradient">About Me</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated developer with a passion for creating impactful digital solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative Frame */}
                <div className="absolute inset-4 border-2 border-primary/30 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-card rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                        <Code className="w-16 h-16 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">MERN Developer</h3>
                      <p className="text-muted-foreground font-mono text-sm">BTech CS Student</p>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">
                Passionate About Building <span className="text-gradient">Web Solutions</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a BTech Computer Science student with a strong foundation in full-stack
                  web development. My expertise lies in the MERN stack - MongoDB, Express.js,
                  React.js, and Node.js - which allows me to build robust and scalable web
                  applications from scratch.
                </p>
                <p>
                  During my internship at <span className="text-primary font-semibold">Softpro India Computer Technology Pvt. Ltd., Noida</span>,
                  I had the opportunity to work on a major project - EduGate for REC Mirzapur College.
                  This experience enhanced my skills in developing real-world applications and
                  working in a professional environment.
                </p>
                <p>
                  I am constantly learning and staying updated with the latest technologies
                  to deliver modern, efficient, and user-friendly web solutions.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
