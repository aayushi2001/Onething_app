import Accordion from "@/components/Accordian/Accordian";
import Footer from "@/components/Footer/Footer";
import Form_Section from "@/components/Form_Section/Form_Section";
import Freedom_Section from "@/components/Freedom_Section/Freedom_Section";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero_Section/Hero";
import Rewards_Section from "@/components/Rewards_Section/Rewards_Section";
import Style_Section from "@/components/Style_Section/Style_Section";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website Title</title>
      </Head>
      <Header />
      <Hero />
      <Freedom_Section />
      <Form_Section />
      <Rewards_Section />
      <Style_Section />
      <Accordion />
      <Footer />
    </>
  );
}
