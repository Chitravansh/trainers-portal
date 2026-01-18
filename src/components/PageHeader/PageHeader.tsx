interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="bg-black text-white text-center pt-28 pb-16 md:pt-32 md:pb-24 ">
      <h1 className="text-3xl md:text-5xl font-bold">
        {title}
      </h1>
    </section>
  );
}