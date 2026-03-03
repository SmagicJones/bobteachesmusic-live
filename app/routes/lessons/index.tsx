import { LessonsHero } from "~/components/LessonsHero";
import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Music Lessons | Guitar & Bass Tuition | Bob Teaches Music" },
    {
      name: "description",
      content:
        "Explore guitar and bass lessons with Bob. Flexible tuition for all ages and abilities, available in person or online around Lancashire.",
    },
  ];
};

export default function Lessons() {
  return (
    <div>
      <LessonsHero />
    </div>
  );
}
