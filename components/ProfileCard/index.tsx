import Image from "next/image";
import { formatStringWithLineBreaks } from "@/components/ui/lineBreaker";
import ContactButton from "../ContactButton";

export interface Editor {
  id: string;
  image: string;
  name: string;
  imdb: string;
  role: string;
  semblance: string;
  cta: string;
}

const ProfileCard = ({ id, image, name,imdb, role, semblance, cta }: Editor) => <div id={id} className="flex flex-col font-heading gap-y-5 items-start">
  <div className="relative">
    <a className="absolute bottom-5 right-5 cursor-pointer" href={imdb} target="_blank"><Image src="/clients/imdb-logo.svg" width="0" height="0" className="w-20 h-auto opacity-70 hover:opacity-100" alt={`View ${name}'s profile on IMDB`} /></a>
    <Image src={image} width="0" height="0" className="w-full h-auto" alt={name} />
  </div>
  <div className="flex flex-col items-start px-10 gap-y-5 md:pr-20 md:pl-0">
    <div className="flex flex-col">
      <h3 className="flex font-semibold text-2xl w-full">{name}</h3>
      <h4 className="text uppercase">{role}</h4>
    </div>
    <p className="">{formatStringWithLineBreaks(semblance)}</p>
    <ContactButton title={cta} />
  </div>
</div>
export default ProfileCard;
