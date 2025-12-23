import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/Bootstrap', level: 90 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'REST APIs', level: 85 },
        { name: 'Authentication', level: 80 },
      ],
    },
    {
      title: 'Database',
      color: 'from-yellow-500 to-orange-400',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Mongoose', level: 82 },
        { name: 'MySQL', level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'from-purple-500 to-pink-400',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'npm/yarn', level: 85 },
      ],
    },
  ];

  const technologies = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript',
    'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub', 'Rest API',
    'Mongoose', 'Vite', 'npm', 'VS Code'
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-mono mb-4">
              &lt;Skills /&gt;
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-gradient">Technical Skills</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 font-mono text-sm cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
