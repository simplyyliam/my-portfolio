import { Builds, Header, Wrapper } from "../../ui";


export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col w-full gap-2.5 sm:h-100 h-auto">
        <Header/>
        <p>
          Design engineer in the making. Focused on interaction, motion, and thoughtful craftsmanship. Self-taught, creatively driven, and always iterating. Think → Craft → Repeat.
        </p>
        <Builds/>
      </div>
    </Wrapper>
  );
}