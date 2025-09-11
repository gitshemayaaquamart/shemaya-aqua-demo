import About from "@/components/about/about";
import Header from "@/components/header/header";
import Nav from "@/components/nav/Nav";
import OurProducts from "@/components/products/our-products";
import WhatsNew from "@/components/blogs/whats-new";
import ContactForm from "@/components/contact/contact-form";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <OurProducts />
      <About />
      <WhatsNew />
      <ContactForm />
    </>
  );
}
