import { Profiles } from "./profiles";
import { RotatingText } from "./rotating-text";


export const Header = () => {
  return (
    <div className="flex items-center gap-4">
      <Profiles />
      <div className="flex items-center justify-center gap-1.75">
        <h1>Hey, I&apos;m liam! I&apos;m a</h1>
        <RotatingText/>
      </div>
    </div>
  );
};
