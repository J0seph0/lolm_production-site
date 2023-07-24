import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import SecondFrame from "@components/SecondFrame";
import LandingFrame from "@components/LandingFrame";
import NavBar from "@components/NavBar";

export default function Home() {
  return (
  <div className="container">


    <Head>
      <script src="https://kit.fontawesome.com/8eb4682278.js" crossorigin="anonymous"></script>
      <title>Round Glass Media</title>
      <link rel="icon" href="/eyeglass.png" />
    </Head>


    <NavBar />

  </div>

  );
}
