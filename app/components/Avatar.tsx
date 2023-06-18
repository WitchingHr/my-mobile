"use client"

import placeholder from "@/app/assets/images/placeholder.jpg";
import Image from "next/image";

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({}) => {
  return (
    <div className="relative h-full overflow-hidden border border-white rounded-full aspect-square avatar-shadow">
      <Image src={placeholder} alt="avatar" fill className="object-cover" />
    </div>
  );
};

export default Avatar;
