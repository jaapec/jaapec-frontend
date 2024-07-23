import Link from 'next/link'
import Image from 'next/image'
import logo from '@/images/Logo3.png'
export default function Logo() {
    return (
        <Link className="block" href="/">
            <Image src={logo} alt="jaapec" />
        </Link>
    )
}
