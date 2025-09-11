import About from "@/components/about/about";
import Header from "@/components/header/header";
import Nav from "@/components/nav/Nav";
import OurProducts from "@/components/products/our-products";
import WhatsNew from "@/components/blogs/whats-new";
import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/footer/footer";
import Notice from "@/components/notice/notice";

export default function Home() {
  return (
    <>
      <Notice notice={`Notice: You are currently using a development version of Shemaya Aqua (Pvt) Ltd. Some features may not work as expected.`} />
      <Nav />
      <Header />
      <OurProducts />
      <About />
      <WhatsNew />
      <ContactForm />
      <Footer />
    </>
  );
}
