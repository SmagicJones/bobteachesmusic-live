import { GuitarLessonsHero } from "~/components/GuitarLessonsHero";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Guitar Lessons in Blackburn & Lancashire | Bob Teaches Music" },
    {
      name: "description",
      content:
        "One-to-one guitar lessons for beginners to advanced players. Available in Blackburn, Preston, Chorley and online. Start your guitar journey today.",
    },
  ];
};

export default function GuitarLessons() {
  return (
    <div>
      <GuitarLessonsHero />
    </div>
  );
}
