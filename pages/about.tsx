import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Akanksha</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from New Delhi, India. I primarily
              work with Python and Django Framework and HTML, Bootstrap, Javasript also.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React, but
              you&apos;ll also find me working with Python Django, Mysql and React
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Serd</span> as
              Software Engineer, working with a lean team of 4 frontend
              engineers to build a next-gen video creation suite for the people
              of video.
            </p>
            <p className={styles.paragraph}>
              I&apos; Experienced in
 developing scalable web applications, integrating machine learning solutions, and working with cloud
 technologies. Quick learner with a passion for continuous growth and problem-solving
            </p>
          </section>

         

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to play games and roam around alone.
            </p>
            <br></br>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
