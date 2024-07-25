import Head from "next/head";
import Main from "@components/Main";
import NavBar from "@components/NavBar";
import About from "@components/About";
import Skills from "@components/Skills";
import Contact from "@components/Contact";

export default function Home() {
  return (
  <div className="container cursor-[url(../public/Black_Box.png)]">


    <Head>
      <script src="https://kit.fontawesome.com/8eb4682278.js" crossorigin="anonymous"></script>
      <title>Round Glass Media</title>
      <link rel="icon" href="/tab.png" className="p-4" />
    </Head>


    <NavBar isDifferentPage={false} />
    <Main /> 
    <About />
    <Skills />
    <Contact />

  </div>

  );
}
