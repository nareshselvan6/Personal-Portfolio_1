import styles from './ContactStyles.module.css';

function Contact() {


  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" >
           <h2> Name : Tamilselvan</h2>
          </label>
        
        </div>
        <div className="formGroup">
          <label htmlFor="email" >
           <h2> Email : <span className='emailid'> tamilselvanselvaraj961998@gmail.com </span> </h2>
          </label>
        
        </div>
        <div className="formGroup">
          <label htmlFor="message" >
          <h2>  Message : Hire Me! Lets Work Together</h2>
          </label>
         
        </div>
        <div className="formGroup">
          <label htmlFor="message" >
          <h2>  Address : Chennai</h2>
          </label>
         
        </div>
      </form>
    </section>
  );
}

export default Contact;
