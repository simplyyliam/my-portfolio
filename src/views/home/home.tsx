import { Builds, Header, Wrapper } from "../../ui";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:items-start sm:gap-5 sm:px-10 ">
      <div className="relative aspect-square w-full max-w-60 sm:w-60 sm:max-w-md">
        <iframe
          src="https://commit-sphere.vercel.app/embed?user=simplyyliam"
          title="Commit Sphere for simplyyliam"
          className="absolute inset-0 h-full w-full rounded border-[0.75px]"
        />
      </div>
      <Wrapper>
        <div className="flex h-auto w-full flex-col gap-2.5 sm:h-100">
          <Header />
          <p>
            Design engineer in the making. Focused on interaction, motion, and
            thoughtful craftsmanship. Self-taught, creatively driven, and always
            iterating. Think → Craft → Repeat.
          </p>
          <Builds />
        </div>
      </Wrapper>
    </div>
  );
}
