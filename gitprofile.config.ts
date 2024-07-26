// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'RoheetBakare', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Resume-portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'End-to-End GTM and Product Data Analytics Platform',
          description:
            'Developed self-serve analytics tools and a scalable data pipeline with dbt and Airflow, boosting productivity by 50% and improving data processing efficiency by 40%.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Email Generator',
          description:
            'Developed AI content summarization tool, cutting document comprehension time by 60% with Streamlit. Enhanced sentiment analysis accuracy by 40% with OpenAI GPT-3. Leveraged AWS to deploy a Gmail-integrated app for automated email, optimizing user efficiency.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },

        {
          title: 'Precision Market Targeting: Data-Driven Insights',
          description:
            'Designed and implemented a sophisticated prediction model using regression analysis to enhance target market identification accuracy by 15%. Developed an A/B testing model driving a 20% increase in customer engagement and a 10% rise in sales revenue.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Hand Recognition',
          description:
            'This project employs computer vision to accurately identify and classify hand gestures in real-time.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Sentiment Analysis',
          description:
            'Utilized PyTorch to implement advanced sentiment analysis using pre-trained BERT on smile annotations dataset, showcasing deep learning proficiency and improving training speed by 20% with efficient data loaders.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Roheet Bakare',
    description: 'Experienced Data Scientist skilled in data analysis, machine learning, and cloud technologies, with a proven track record of enhancing business growth and operational efficiency.',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/roheetbakare/',
    reddit: '',
    website: '',
    phone: '510-329-6032',
    email: 'bakareroheet@gmail.com',
  },
  resume: {
    fileUrl:
      '/Users/roheetbakare/Downloads/Roheet_Bakare_Resume', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R programming',
    'HTML',
    'TensorFlow',
    'PyTorch',
    'Keras',
    'NumPy',
    'Scikit-learn',
    'AWS (EC2, S3, DynamoDB, SageMaker)',
    'Kubernetes',
    'GitHub',
    'MongoDB',
    'NoSQL',
    'ETL',
    'Data Modeling',
    'Agile Development',
    'Distributed Systems',
    'Natural Language Processing Specialization',
    'Deep Learning Specialization',
    'AWS Cloud Practitioner',
    'Apache Airflow',
    'dbt (Data Build Tool)',
    'Tableau',
    'PowerBI',
    'Apache Spark',
    'Apache Kafka',
    'Hadoop'
]
,
  experiences: [
    {
      company: 'CodersData',
      position: 'Data Scientist',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://codersdata.com/category/find-jobs',
    },
    {
      company: 'California State University East Bay ',
      position: 'Data Scientist',
      from: 'January 2023',
      to: 'May 2024',
      companyLink: 'https://www.csueastbay.edu/parking/',
    },
    {
      company: 'Codingal Technologies Pvt Ltd',
      position: 'Data Scientist',
      from: 'September 2020',
      to: 'August 2022',
      companyLink: 'https://www.codingal.com/en-US/',
    },
    {
      company: 'Skillovate Learning Pvt Ltd',
      position: 'Data Scientist',
      from: 'October 2018',
      to: 'August 2020',
      companyLink: 'https://www.codingal.com/en-US/',
    },
  ],
  certifications: [
    {
      name: 'AWS Cloud Practioner',
      body: 'AWSs Cloud Practioner',
      year: 'March 2024',
      link: 'https://example.com',
    },
    
    {
      name: 'Natural Language Processing Specialization',
      body: 'Natural Language Processing Specialization',
      year: 'March 2018',
      link: 'https://example.com',
    },
    
    {
      name: 'Deep Learning Specialization',
      body: 'Deep Learning Specialization',
      year: 'March 2018',
      link: 'https://example.com',
    },
   
  ],
  educations: [
    {
      institution: 'California State University East Bay',
      degree: 'Masters of Science, Statistics',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Pune University',
      degree: 'B.Tech Mechanical Engineering',
      from: '2016',
      to: '2021',
    },
  ],
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/RoheetBakare/"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
