import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import SecondFrame from "@components/secondFrame";
import LandingFrame from "@components/LandingFrame";

export default function Home() {
  return (
    <div className="container">
    <Head>
      <title>Round Glass Media</title>
      <link rel="icon" href="/eyeglass.png" />
    </Head>
    <LandingFrame />
      < SecondFrame />

    <main>
    </main>

  </div>

  );
}
