import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Multi Node Hadoop Cluster and MapReduce",
    img: "/personal-portfolio/hadoop.png",
    desc: "Developed a multi-node Hadoop cluster project with one master VM and three slave VMs, all running on Ubuntu Server. I configured the VM settings, network properties, and essential configuration files to execute HDFS commands. IP addresses were mapped to hostnames, and SSH keys were copied to the slave VMs for seamless access. I set the replication factor to 2, ensuring data redundancy across two slave VMs. The project included implementing a MapReduce job for Word Count, utilizing Java, Hadoop, and Linux. This project showcases my skills in big data infrastructure setup and distributed computing.",
    github_link: "",
    website: "",
  },
  {
    id: 2,
    title: "Meet Ease",
    img: "/personal-portfolio/meet-ease.png",
    desc: "Video Calling Platform for you to contact clients and friends.",
    github_link: "https://github.com/SiddDman/MeetEase",
    website: "https://meet-ease-phi.vercel.app/",
  },
  {
    id: 3,
    title: "Prompt Share",
    img: "/personal-portfolio/prompt-share.png",
    desc: "Developed a prompt sharing website using Next.js and Tailwind CSS, featuring a simple and intuitive user interface. Integrated MongoDB for efficient prompt storage and management. Utilized Google OAuth for secure user authentication. The homepage displays all prompts, allowing users to copy them easily. Users can view prompts specific to them or others, and manage their prompts by editing or deleting them in the profile section. Each prompt includes contextual tags, and the site offers comprehensive search functionality based on content, tags, or users. This project highlights effective data handling and a user-friendly experience for sharing and discovering prompts.",
    github_link: "https://github.com/SiddDman/share-gpt-prompts",
    website: "https://share-gpt-prompts-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Notes App",
    img: "/personal-portfolio/notes.png",
    desc: "Developed a note-taking website that allows users to securely store and access their notes anytime by logging in. Each user can only view and manage their own notes, ensuring privacy and security. I used MongoDB to store the notes, implemented a login page, and secured passwords with hashing. The project leverages a tech stack of React for the frontend, and Node.js with Express for the backend.This project highlights my skills in full-stack web development and secure user authentication.",
    github_link: "https://github.com/SiddDman/Notes_APP_React",
    website: "",
  },
  {
    id: 5,
    title: "News App",
    img: "/personal-portfolio/rocketnews.png",
    desc: "Developed a dynamic news website using React that fetches and displays news content from various categories via the News API. The site includes a search functionality, allowing users to find news articles related to their queries, and a dark mode feature for enhanced user experience. This project demonstrates my ability to build interactive and user-friendly web applications using React.",
    github_link: "https://github.com/SiddDman/News_Website_React",
    website: "",
  },
  {
    id: 6,
    title: "AI Image Generation Extension",
    img: "/personal-portfolio/ai-image-gen-extension.png",
    desc: "Developed a Chromium extension that enables users to input text and generate images based on the provided description using OpenAI's image generation API. The extension features a simple and intuitive user interface for inputting text and displays the generated images directly within the extension. This project showcases my skills in creating browser extensions and integrating advanced APIs to provide a seamless and interactive user experience.",
    github_link: "https://github.com/SiddDman/ai-image-gen-extension",
    website: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 450]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="btn_container">
              <a href={item.github_link} target="_blank" rel="noreferrer">
                <button
                  style={{
                    opacity: `${item.github_link === "" ? 0 : 1}`,
                  }}
                >
                  See Code
                </button>
              </a>
              <a href={item.website} target="_blank" rel="noreferrer">
                <button
                  style={{
                    opacity: `${item.website === "" ? 0 : 1}`,
                  }}
                >
                  Visit
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
