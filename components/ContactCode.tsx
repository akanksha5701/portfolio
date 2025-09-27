import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'akanksha.serdevice.xyz',
    href: 'https://akanksha.serdevice.xyz',
  },
  {
    social: 'email',
    link: 'kashyapakanksha0507@gmail.com',
    href: 'mailto:kashyapakanksha0507@gmail.com',
  },
  {
    social: 'github',
    link: 'akanksha5701',
    href: 'https://github.com/akanksha5701',
  },
  {
    social: 'linkedin',
    link: 'akanksha5701',
    href: 'https://www.linkedin.com/in/akanksha5701/',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
