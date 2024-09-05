export function StepsSection() {
  return (
    <section className="relative mx-auto flex min-h-[70dvh] max-w-desktop items-center gap-12">
      <section className="grid w-full grid-cols-3 gap-12">
        <article className="grid aspect-square place-content-center rounded-lg border bg-secondary">
          STEP 1
        </article>
        <article className="grid aspect-square place-content-center rounded-lg border bg-secondary">
          STEP 2
        </article>
        <article className="grid aspect-square place-content-center rounded-lg border bg-secondary">
          STEP 3
        </article>
      </section>
    </section>
  );
}
