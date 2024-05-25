import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Multi Node Hadoop Cluster and MapReduce",
    img: "/public/hadoop.png",
    desc: "I developed a multi-node Hadoop cluster project with one master VM and three slave VMs, all running on Ubuntu Server. I configured the VM settings, network properties, and essential configuration files to execute HDFS commands. IP addresses were mapped to hostnames, and SSH keys were copied to the slave VMs for seamless access. I set the replication factor to 2, ensuring data redundancy across two slave VMs. The project included implementing a MapReduce job for Word Count, utilizing Java, Hadoop, and Linux. This project showcases my skills in big data infrastructure setup and distributed computing.",
  },
  {
    id: 2,
    title: "Notes App ",
    img: "/public/notes.png",
    desc: "I developed a note-taking website that allows users to securely store and access their notes anytime by logging in. Each user can only view and manage their own notes, ensuring privacy and security. I used MongoDB to store the notes, implemented a login page, and secured passwords with hashing. The project leverages a tech stack of React for the frontend, and Node.js with Express for the backend.This project highlights my skills in full-stack web development and secure user authentication.",
  },
  {
    id: 3,
    title: "News App",
    img: "/public/rocketnews.png",
    desc: "I created a dynamic news website using React that fetches and displays news content from various categories via the News API. The site includes a search functionality, allowing users to find news articles related to their queries, and a dark mode feature for enhanced user experience. This project demonstrates my ability to build interactive and user-friendly web applications using React.",
  },
  {
    id: 4,
    title: "AI Image Generation Extension",
    img: "/public/ai-image-gen-extension.png",
    desc: "I developed a Chromium extension that enables users to input text and generate images based on the provided description using OpenAI's image generation API. The extension features a simple and intuitive user interface for inputting text and displays the generated images directly within the extension. This project showcases my skills in creating browser extensions and integrating advanced APIs to provide a seamless and interactive user experience.",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
