import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex -space-x-4">
        <Avatar>
          <AvatarImage src="/favcon.png"/>
          <AvatarFallback>S.L</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/pfp.png"/>
          <AvatarFallback>S.L</AvatarFallback>
        </Avatar>
      </div>
      Hey, I&apos;m liam! I&apos;m a Developer
    </div>
  );
};
