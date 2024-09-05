export function StepsSection() {
  return (
    <section className="relative mx-auto flex min-h-[70dvh] max-w-desktop items-center gap-12">
      <section className="relative z-10 grid w-full grid-cols-3 gap-12">
        <article className="grid aspect-square place-content-center rounded-lg border backdrop-blur-3xl">
          STEP 1
        </article>
        <article className="grid aspect-square place-content-center rounded-lg border backdrop-blur-3xl">
          STEP 2
        </article>
        <article className="grid aspect-square place-content-center rounded-lg border backdrop-blur-3xl">
          STEP 3
        </article>
      </section>
      <figure className="absolute inset-0 bottom-0">
        <img
          className="h-full w-full object-cover saturate-0"
          src="./images/FooterGradient.png"
          alt=""
        />
      </figure>
    </section>
  );
}
