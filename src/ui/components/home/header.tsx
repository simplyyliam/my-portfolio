import { Profiles } from "./profiles";
import { RotatingText } from "./rotating-text";


export const Header = () => {
  return (
    <div className="flex gap-4 sm:flex-row flex-col sm:items-center items-start">
      <Profiles />
      <div className="flex items-center justify-center gap-1.75 flex-wrap">
        <h1>Hey, I&apos;m liam! I&apos;m a</h1>
        <RotatingText/>
      </div>
    </div>
  );
};