import Hero from "@components/Hero";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mt-5">Home Page</h1>
      <Hero/>
    </div>
  );
};

export default Home;
