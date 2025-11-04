import Link from "next/link";

const Footer = () => {
    return(
        <div className="container mx-auto py-5 px-10">
            <span className="pb-4">&copy; AirBnb, inc.</span>
            <ul className="flex gap-2">
                <li className="hover:underline"><Link href="/">Privacidade</Link></li>
                <li>&middot;</li>
                <li className="hover:underline"><Link href="/">Termos</Link></li>
                <li>&middot;</li>
                <li className="hover:underline"><Link href="/">Informações da empresa</Link></li>
            </ul>
        </div>
    )
}

export default Footer;