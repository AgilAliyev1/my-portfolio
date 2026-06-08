export const en = {
  meta: {
    title: 'Agil Aliyev | Portfolio',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    certificates: 'Certificates',
    blog: 'Blog',
    contact: 'Contact',
  },
  common: {
    link: 'Link',
    liveDemo: 'Live Demo',
    read: 'read',
    viewPdf: 'View PDF →',
    viewCertificate: 'View Certificate →',
    view: 'View →',
    all: 'All',
    builtWith: 'Built with React',
    writeupSoon: 'Writeup coming soon',
  },
  home: {
    greeting: "Hi there, I'm",
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
  },
  about: {
    heading: 'About Me',
    education: 'Education',
    workExperience: 'Work Experience',
    volunteerWork: 'Volunteer Work',
    certifications: 'Certifications & Training',
    skills: 'Skills',
    technologiesUsed: 'Technologies Used',
    technologiesSub: 'Stack behind this portfolio and related projects.',
  },
  projects: {
    heading: 'Projects',
    sub: "Things I've built",
  },
  certificates: {
    heading: 'Certificates',
    sub: "Courses and credentials I've earned",
    searchPlaceholder: 'Search certificates...',
    empty: 'No certificates found.',
  },
  blog: {
    heading: 'Blog',
    sub: 'Thoughts, notes and updates',
    back: '← Back to blog',
    notFound: 'Post not found.',
  },
  contact: {
    heading: 'Contact',
    sub: 'Have a question or want to work together? Reach out anytime.',
    email: 'Email',
    phone: 'Phone',
    profiles: 'Profiles',
    location: 'Location',
    name: 'Name',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    messagePlaceholder: 'Your message...',
    send: 'Send Message',
    sending: 'Sending...',
    success: "Message sent! I'll get back to you soon.",
    error: 'Something went wrong. Please try again or email me directly.',
    thanks: (name) => `Thanks ${name}! I'll get back to you soon.`,
  },
  categories: {
    Cybersecurity: 'Cybersecurity',
    Leadership: 'Leadership',
    Volunteer: 'Volunteer',
  },
  profile: {
    title: 'Cybersecurity Enthusiast',
    location: 'Baku, Azerbaijan',
    summary:
      'COP29 volunteer and IT student at ADA University building offensive security skills through CTF labs, Nmap recon, and Python automation. Hands-on with phishing analysis, web app testing, and network enumeration. Targeting an entry-level Red Team role where attacker mindset meets real-world discipline.',
    emailLabels: {
      Personal: 'Personal',
      University: 'University',
    },
    phoneLabels: {
      WhatsApp: 'WhatsApp',
      Contact: 'Contact',
    },
  },
  education: [
    {
      degree: 'Bachelor of Information Technologies',
      school: 'ADA University',
      location: 'Baku, Azerbaijan',
      period: 'Expected May 2027',
      coursework: [
        'Introduction to Computer Networks',
        'Introduction to Cyber Security',
        'Data Engineering (Python)',
        'Web & Mobile I & II',
      ],
    },
  ],
  experience: [
    {
      role: 'Organizer',
      company: 'European Youth Parliament Azerbaijan',
      period: 'August 2025 — January 2026',
      points: [
        'Coordinated event logistics and secured sponsorships to support large-scale organizational activities.',
        'Collaborated with cross-functional teams to improve operational efficiency and volunteer engagement.',
        'Contributed strategic ideas during planning sessions to enhance event execution and participation.',
      ],
    },
    {
      role: 'Camp Counselor',
      company: 'AKS English Camp',
      period: 'July 2025 — August 2025',
      points: [
        'Led team-based activities and managed group coordination in dynamic environments.',
        'Developed leadership and problem-solving skills through real-time decision-making.',
      ],
    },
  ],
  volunteer: [
    {
      role: 'Volunteer',
      organization: 'COP29',
      period: 'November 2024',
      points: [
        'Assisted international delegates with logistics and coordination in a high-pressure environment.',
        'Demonstrated strong communication and professionalism while supporting event operations.',
      ],
    },
  ],
  skillGroups: [
    {
      category: 'Programming',
      items: [
        'Python',
        'Bash',
        'Java',
        'JavaScript',
        'C++',
        'React',
        'HTML',
        'CSS',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'REST APIs',
      ],
    },
    {
      category: 'Cybersecurity',
      items: [
        'Network Reconnaissance (Nmap)',
        'Vulnerability Assessment (Nessus)',
        'Packet Analysis (Wireshark)',
        'Web App Testing (Burp Suite)',
        'Exploitation Frameworks (Metasploit)',
        'CTF & Lab-Based Pentesting',
        'Web App Security (OWASP Top 10)',
        'XSS',
        'Phishing Analysis & Simulation',
      ],
    },
    {
      category: 'Networking',
      items: [
        'TCP/IP',
        'OSI Model',
        'Network Troubleshooting',
        'Routing & Switching',
      ],
    },
    {
      category: 'Systems',
      items: [
        'Linux',
        'Bash / Shell Scripting',
        'Virtual Machines',
        'Command Line',
      ],
    },
    {
      category: 'Tools',
      items: ['Git', 'Cisco Packet Tracer'],
    },
    {
      category: 'Soft Skills',
      items: [
        'Event Coordination',
        'Team Leadership',
        'Problem Solving',
        'Time Management',
        'Adaptability',
        'Presentation / Public Speaking',
      ],
    },
    {
      category: 'Languages',
      items: ['Azerbaijani (Native)', 'Turkish (Fluent)', 'English (Professional)'],
    },
  ],
  technologiesUsed: [
    'React',
    'Vite',
    'JavaScript',
    'React Router',
    'HTML',
    'CSS',
    'CSS Modules',
  ],
  projectsData: [
    {
      title: 'Portfolio Website',
      description:
        'Full-stack personal site with React 19, Vite, CSS Modules, EN/AZ i18n, Formspree contact form, and Framer Motion animations. Deployed on Vercel with SPA routing and SEO meta tags.',
    },
    {
      title: 'CyLab CTF Challenge Track',
      description:
        'Completed 15+ CyLab Academy challenges across web exploitation, binary analysis, and cryptography. Documented exploit chains, flag extraction steps, and remediation notes for each category.',
    },
    {
      title: 'Network Reconnaissance Lab',
      description:
        'ADA University lab series mapping a /24 subnet: host discovery, SYN port scans, service versioning, and Wireshark packet captures. Produced a repeatable 5-stage recon checklist with annotated Nmap output.',
    },
    {
      title: 'Phishing Awareness Simulation',
      description:
        'Designed 3 controlled phishing scenarios modeling urgency, credential-harvest, and spoofed-sender tactics. Measured click rates, analyzed failure patterns, and drafted user-facing awareness takeaways.',
    },
    {
      title: 'TryHackMe Offensive Security Path',
      description:
        'Active TryHackMe profile covering Nmap, Burp Suite, Metasploit, and Linux privilege basics across 20+ rooms. Focus on translating room walkthroughs into personal methodology notes.',
    },
    {
      title: 'Nmap Recon Automation CLI',
      description:
        'Python CLI that runs staged recon: ping sweep → SYN scan → service detection → output to timestamped reports. Cuts manual Nmap workflow from 6 commands to a single scripted pipeline.',
    },
    {
      title: 'Web Security Writeups',
      description:
        'Documented XSS, SQLi, and authentication-bypass findings from TryHackMe web rooms and OWASP Juice Shop labs. Each writeup covers recon, exploitation, proof-of-impact, and remediation.',
    },
    {
      title: 'Phishing Email Analyzer',
      description:
        'Python toolkit that parses suspicious emails for spoofed headers, URL mismatches, and keyword red flags. Built to speed up manual triage during phishing awareness exercises.',
    },
  ],
  certificatesData: [
    { title: 'Cybersecurity Virtual Experience' },
    { title: 'Ethical Hacking Certification' },
    { title: 'Camp Counselor Certificate' },
    { title: 'Organizer — 12th National Outreach Session' },
    { title: 'Organizer — Financial Summit' },
    { title: 'COP29 Volunteers Online Training' },
  ],
  blogPostsData: [
    {
      title: 'Getting Started with Nmap',
      excerpt:
        'Notes on host discovery, port scanning, and service enumeration for network reconnaissance.',
      readTime: '5 min',
      content: [
        'Nmap is one of the first tools I reach for when starting network reconnaissance. Before scanning ports, I usually begin with host discovery to see which systems are alive on a subnet.',
        'For port scanning, I typically start with a SYN scan (-sS) to identify open services without completing the full TCP handshake. Once open ports are found, service enumeration (-sV) helps determine what software is running and which versions are in use.',
        'Documenting each step matters — noting the scan type, timing, and results makes it easier to reproduce findings during labs or coursework. Combining Nmap output with Wireshark packet captures gives a much clearer picture of what is happening on the wire.',
      ],
    },
    {
      title: 'Phishing Simulations: What I Learned',
      excerpt:
        'Reflections on running phishing awareness exercises and spotting common social engineering patterns.',
      readTime: '4 min',
      content: [
        'Running phishing simulations taught me that technical controls alone are not enough — people are often the first line of defense. The most convincing emails mimicked real internal communications: urgent deadlines, familiar sender names, and links that looked legitimate at a glance.',
        'A few patterns stood out repeatedly: mismatched URLs on hover, generic greetings instead of names, and pressure to act immediately. Training users to pause and verify before clicking is more effective than any single filter.',
        'The goal of a simulation is awareness, not punishment. Framing results as a learning opportunity helped participants understand what to watch for without creating fear around reporting suspicious messages.',
      ],
    },
    {
      title: 'Building This Portfolio with React',
      excerpt:
        'How I structured routes, CSS modules, and components for a clean personal site with Vite.',
      readTime: '6 min',
      content: [
        'I chose React with Vite for fast development and a simple production build. React Router handles client-side navigation between pages like Projects, About, and Contact without full page reloads.',
        'Each page and component has its own CSS Module, which keeps styles scoped and avoids class name collisions. Shared layout pieces — the sidebar and navbar — live in a Layout component that wraps every route.',
        'Data for projects, certificates, and experience is separated into data files, while UI strings support English and Azerbaijani through a translation context. Deploying to Vercel was straightforward: a build command, a dist output folder, and a rewrite rule for SPA routing.',
      ],
    },
  ],
}
