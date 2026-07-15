interface StoryCardProps {
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

export function StoryCard({ testimonial }: StoryCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border/70 bg-background/70 p-6 shadow-[0_12px_32px_rgba(8,15,12,0.06)]">
      <p className="font-serif text-xl leading-8 text-foreground">“{testimonial.quote}”</p>
      <div className="mt-6">
        <p className="text-base font-medium text-foreground">{testimonial.name}</p>
        <p className="text-sm uppercase tracking-[0.3em] text-foreground/55">{testimonial.role}</p>
      </div>
    </article>
  );
}
