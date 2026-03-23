import { Builds, Header, Wrapper } from "../../ui";

export default function Home() {
  return (
    <div className="flex w-full gap-5 justify-center">
      <div className="relative w-60 max-w-md aspect-square">
        <iframe
          src="https://commit-sphere.vercel.app/embed?user=simplyyliam"
          title="Commit Sphere for simplyyliam"
          className="absolute inset-0 w-60 h-60 border-[0.75px] rounded"
        />
      </div>
      <Wrapper>
        <div className="flex flex-col w-full gap-2.5 sm:h-100 h-auto">
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
