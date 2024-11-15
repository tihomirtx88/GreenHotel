import Link from "next/link";

export default function Navigation(){
    return(
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/apartments">Apartments</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/account">Your Account</Link>
                </li>
            </ul>
        </div>
    );
};