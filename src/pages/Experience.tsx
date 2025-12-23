import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Softpro India Computer Technology Pvt. Ltd.',
      location: 'Noida, India',
      duration: 'Internship Period',
      type: 'Internship',
      description: 'Worked on developing EduGate - a comprehensive college management portal for REC Mirzapur using MERN stack technology.',
      responsibilities: [
        'Developed full-stack features using MongoDB, Express.js, React.js, and Node.js',
        'Implemented user authentication and authorization using JWT',
        'Created RESTful APIs for student management system',
        'Designed and developed responsive UI components',
        'Collaborated with team members using Git version control',
        'Participated in code reviews and agile development practices',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Git'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (BTech)',
      field: 'Computer Science & Engineering',
      institution: 'College/University Name',
      duration: 'Current',
      status: 'Pursuing',
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-mono mb-4">
              &lt;Experience /&gt;
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my skills
            </p>
          </motion.div>

          {/* Experience Section */}
          <div className="max-w-4xl mx-auto mb-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                <div className="pl-8 md:pl-20 pb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow border-4 border-background" />

                  <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2">
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Education
            </h2>

            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2">
                      {edu.status}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.field}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
