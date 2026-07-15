import { brandConfig } from "@/config/brand";

interface CourseCardProps {
  course: {
    title: string;
    description: string;
    duration: string;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-serif text-xl font-semibold text-foreground" style={{ fontFamily: brandConfig.typography.editorial }}>
          {course.title}
        </h3>
        <span className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/55">{course.duration}</span>
      </div>
      <p className="mt-3 text-base leading-7 text-foreground/70">{course.description}</p>
    </article>
  );
}
