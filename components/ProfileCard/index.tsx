import Image from "next/image";
import { formatStringWithLineBreaks } from "../ui/lineBreaker";

const ProfileCard = ({ id, image, name, role, semblance }: {id: string, image: string, name: string, role: string, semblance: string }) => <div id={id}>
  <Image src={image} width="0" height="0" className="w-full h-auto" alt={name} />
  <h3>{name}</h3>
  <h4>{role}</h4>
  <p>{formatStringWithLineBreaks(semblance)}</p>
</div>
export default ProfileCard;
