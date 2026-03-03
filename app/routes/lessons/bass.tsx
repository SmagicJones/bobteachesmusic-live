import { BassLessonsHero } from "~/components/BassLessonsHero";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Bass Guitar Lessons in Blackburn & Lancashire | Bob Teaches Music",
    },
    {
      name: "description",
      content:
        "Learn bass guitar with personalised one-to-one tuition. Lessons available around Blackburn, Preston, Chorley and online. All levels welcome.",
    },
  ];
};

export default function BassLessons() {
  return (
    <div>
      <BassLessonsHero />
    </div>
  );
}
