import Image from "next/image";
import { formatStringWithLineBreaks } from "../ui/lineBreaker";

export interface Editor {
  id: string;
  image: string;
  name: string;
  role: string;
  semblance: string;
}

const ProfileCard = ({ id, image, name, role, semblance }: Editor) => <div id={id} className="flex flex-col gap-y-5 font-heading">
  <Image src={image} width="0" height="0" className="w-full h-auto" alt={name} />
  <div className="flex flex-col">
    <h3 className="font-semibold text-2xl">{name}</h3>
    <h4 className="text uppercase">{role}</h4>
  </div>
  <p className="px-10 md:pr-20 md:pl-0">{formatStringWithLineBreaks(semblance)}</p>
</div>
export default ProfileCard;
