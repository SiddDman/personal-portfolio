import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Multi Node Hadoop Cluster and MapReduce",
    img: "/personal-portfolio/hadoop.webp",
    desc: "Developed a multi-node Hadoop cluster project with one master VM and three slave VMs, all running on Ubuntu Server. I configured the VM settings, network properties, and essential configuration files to execute HDFS commands. IP addresses were mapped to hostnames, and SSH keys were copied to the slave VMs for seamless access. I set the replication factor to 2, ensuring data redundancy across two slave VMs. The project included implementing a MapReduce job for Word Count, utilizing Java, Hadoop, and Linux. This project showcases my skills in big data infrastructure setup and distributed computing.",
    github_link:
      "https://docs.google.com/document/d/1gWLlMBr96HJnkWsXyHkFN0UaqNokG3sTZGxMec_C_uc/edit?usp=sharing",
    website: "https://youtu.be/8mBPeT00xsM?si=3wWJ5c4ddyNhK6sk",
  },
  {
    id: 2,
    title: "Meet Ease",
    img: "/personal-portfolio/meet-ease.webp",
    desc: "Developed an enterprise-ready video conferencing app using Next.js, TypeScript, and tools like Stream and Tailwind CSS. Implemented robust user management with Clerk for secure sign-in, sign-up, and protected routes, customizing its appearance and URLs. Designed an intuitive UI, featuring a full-screen layout for meetings, and utilized dynamic routes in Next.js for versatile URLs. Integrated Stream for high-quality video and audio meetings, creating server-side functions for authentication and secret key access. Implemented features for users to view upcoming meetings, past meetings, recordings, and access their personal rooms for a seamless experience. Deployed the application on Vercel, ensuring comprehensive support for both managed and self-hosted environments.",
    github_link: "https://github.com/SiddDman/MeetEase",
    website: "https://meet-ease-phi.vercel.app/",
  },
  {
    id: 3,
    title: "Docu Verse",
    img: "/personal-portfolio/docuverse.webp",
    desc: "Developed a collaborative text editor using Next.js, TypeScript, and Tailwind CSS, incorporating responsive design principles. The editor features real-time collaboration powered by the Liveblocks SDK, allowing users to see shared cursors and avatars within the document. I integrated Lexical for rich text editing and implemented user authentication with Clerk, along with bug tracking via Sentry. The application also includes notifications for mentions and document access, as well as role-based permissions, enabling users to assign editor or viewer access and add comments within the editor interface.",
    github_link: "https://github.com/SiddDman/docu-verse",
    website: "https://docu-verse-sidd.vercel.app/",
  },
  {
    id: 4,
    title: "Notes App",
    img: "/personal-portfolio/notes.webp",
    desc: "Developed a note-taking website that allows users to securely store and access their notes anytime by logging in. Each user can only view and manage their own notes, ensuring privacy and security. I used MongoDB to store the notes, implemented a login page, and secured passwords with hashing. The project leverages a tech stack of React for the frontend, and Node.js with Express for the backend.This project highlights my skills in full-stack web development and secure user authentication.",
    github_link: "https://github.com/SiddDman/Notes_APP_React",
    website: "",
  },
  {
    id: 5,
    title: "News App",
    img: "/personal-portfolio/rocketnews.webp",
    desc: "Developed a dynamic news website using React that fetches and displays news content from various categories via the News API. The site includes a search functionality, allowing users to find news articles related to their queries, and a dark mode feature for enhanced user experience. This project demonstrates my ability to build interactive and user-friendly web applications using React.",
    github_link: "https://github.com/SiddDman/News_Website_React",
    website: "",
  },
  {
    id: 6,
    title: "AI Image Generation Extension",
    img: "/personal-portfolio/ai-image-gen-extension.webp",
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
                  {item.title === "Multi Node Hadoop Cluster and MapReduce"
                    ? "Documentation"
                    : "See Code"}
                </button>
              </a>
              <a href={item.website} target="_blank" rel="noreferrer">
                <button
                  style={{
                    opacity: `${item.website === "" ? 0 : 1}`,
                  }}
                >
                  {item.title === "Multi Node Hadoop Cluster and MapReduce"
                    ? "Video"
                    : "Visit"}
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
