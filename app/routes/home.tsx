import { type MetaFunction } from "react-router";
import { Hero } from "~/components/Hero";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Bob Teaches Music | Guitar & Bass Lessons in Blackburn, Preston & Chorley",
    },
    {
      name: "description",
      content:
        "Expert guitar and bass tuition around Blackburn, Preston and Chorley. In-person and online lessons tailored to your level. Get in touch today!",
    },
  ];
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
