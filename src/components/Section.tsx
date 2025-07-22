type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
