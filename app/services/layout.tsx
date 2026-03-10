export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-12">
      <div className="inline-block max-w-4xl text-center justify-center">
        {children}
      </div>
    </section>
  );
}
