import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'EduGate - REC Mirzapur',
      description: 'A comprehensive college management portal developed during internship at Softpro India. Features include student management, course enrollment, attendance tracking, and grade management.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      featured: true,
      highlights: [
        'Student & Faculty Management',
        'Course Enrollment System',
        'Attendance Tracking',
        'Grade Management Portal',
        'Admin Dashboard',
      ],
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      featured: false,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      tags: ['MERN Stack', 'Socket.io', 'JWT Auth'],
      featured: false,
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with rich text editor, comment system, and user profiles with social features.',
      tags: ['React.js', 'Express.js', 'MongoDB'],
      featured: false,
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-mono mb-4">
              &lt;Projects /&gt;
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work and the projects I've built using the MERN stack
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-card border border-border overflow-hidden group hover:border-primary/50 transition-all duration-500">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Featured Project
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs">
                    Internship Project
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {projects[0].title}
                </h2>

                <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                  {projects[0].description}
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {projects[0].highlights?.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Layers className="w-4 h-4 text-primary" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="hero">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                  <Button variant="glass">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-secondary text-muted-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
