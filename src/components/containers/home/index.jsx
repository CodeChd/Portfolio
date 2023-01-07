import { motion } from 'framer-motion';
import './styles.scss';

function Home() {
  return (
    <section className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Carl Francisco
          <br />
          React JS developer.
        </h1>
      </div>

      <motion.div initial={{y: 500}} animate={{ y: 0 }}>
        <div className="contact-me">
          <div className="contact-me_button">
            <a href="#">Download Resume</a>
          </div>
          <div className="contact-social">
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-github" />
            <i className="fa-brands fa-linkedin" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
