import Image from "next/image";

const Footer = () => {
  return (
    <div className="absolute left-0 right-0 rounded-t-xl bg-[#12547C] text-white flex fkex-row py-8 px-40 mb-0 justify-between">
      <div className="my-auto">
        <h2 className="text-2xl font-semibold">Developers :</h2>
        <div className="grid grid-cols-2 gap-3 pt-2 text-lg">
          <h3>Utkarsh Ranjan</h3>
          <h3>Piyush Singh</h3>
          <h3>Abhinav Singh</h3>
          <h3>Divyansh Srivastava</h3>
        </div>
      </div>
      <div className="my-auto">
        <Image
          src="/images/logo-white.svg"
          alt="OnBoard Logo"
          width={200}
          height={80}
          priority={true}
          zIndex="10"
        />
      </div>
    </div>
  );
};

export default Footer;
