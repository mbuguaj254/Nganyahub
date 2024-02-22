import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";




const Navbar = () => {
  return (
    <header className="w-full absolulte z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
            <Link href="/" className="flex justify-center items-center" >
                <Image 
                    src="/logo.svg"
                    alt="Nganya Hub Logo"
                    width={118}
                    height={18}
                    className="object-contain"
                />
                {/* <p className="font-bold text-[20px]">Nganya Hub</p> */}
            </Link>
            <CustomButton
                title="Sign In"
                btn-type="button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'

            />
        </nav>
    </header>
  )
}

export default Navbar