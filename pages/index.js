import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import SecondFrame from "@components/SecondFrame";
import Main from "@components/Main";
import NavBar from "@components/NavBar";
import About from "@components/About";
import Skills from "@components/Skills";

export default function Home() {
  return (
  <div className="container cursor-[url(../public/Black_Box.png)]">


    <Head>
      <script src="https://kit.fontawesome.com/8eb4682278.js" crossorigin="anonymous"></script>
      <title>Round Glass Media</title>
      <link rel="icon" href="/eyeglass.png" />
    </Head>


    <NavBar />
    <Main /> 
    <About />
    <Skills />

  </div>

  );
}
