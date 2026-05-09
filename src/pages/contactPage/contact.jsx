import ContactForm from "../../components/forms/contactForm.jsx";

function ContactPage() {
  return (

    <>
      <header>
        <title>Get in Touch | Angel Buenavista — Web Designer in Taguig, Philippines</title>
        <meta name="description" content="Get in touch with Angel Buenavista, a web designer and frontend developer in Taguig, Philippines. Let's collaborate on your next website project and bring your ideas to life." />
      </header>

      <section className="h-screen flex justify-center items-center xl:ml-62 xl:p-10">
        <ContactForm />
      </section>
    </>

  );
}

export default ContactPage;