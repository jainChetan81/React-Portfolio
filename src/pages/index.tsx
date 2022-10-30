import type { NextPage } from "next";
import { About, Contact, Hero, Layout, Projects } from "../components";

const Home: NextPage = () => (
  <Layout title="Portfolio - Chetan Jain">
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default Home;
