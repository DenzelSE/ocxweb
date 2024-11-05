import Image from "next/image";
import GooglePlayDownloadButton from "./GooglePlayDownloadButton";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-blue-400 dark:from-[#4a8691] dark:to-[#244f6b]">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto md:max-w-6xl py-8 md:py-24 gap-y-10 md:gap-x-10">
        <div className="flex flex-col gap-y-6 md:gap-y-10 text-center md:text-left">
          <p className="text-3xl md:text-5xl font-mono font-bold dark:text-[#f0f4f8]">
            {`Offline transactions with speed and reliability.`}
          </p>
          <p className="text-base md:text-lg font-mono text-gray-600 dark:text-[#c4d4e0]">
            {`Our app ensures that your payments remain seamless, even without internet access. Whether you're in remote areas or experiencing network disruptions, you can rely on fast, secure, and efficient transactions.`}
          </p>
          <GooglePlayDownloadButton />
          <br />
          <div className="flex justify-center md:justify-start items-center gap-x-2">
            <p className="text-gray-600 text-lg md:text-xl font-mono dark:text-[#c4d4e0]">
              {`Built on `}
            </p>
            <Link href={"https://lisk.com/"}>
              <Image height={50} width={50} src={"/lisk.png"} alt="Lisk Logo" />
            </Link>
          </div>
        </div>
        <Image
          className="md:w-full w-10/12"
          height={500}
          width={500}
          src="/mock_1.png"
          alt="App Mockup"
        />
      </div>
    </div>
  );
};

export default Header;
