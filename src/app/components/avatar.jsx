import Image from "next/image";

const MyAvatar = () => {
  return (
    <Image
      src="/images/logo-icon.png"
      width={50}
      height={50}
      alt="O"
      className="bg-[#fcfdfc] w-12 h-10"
    />
  );
};

export default MyAvatar;
