import Link from "next/link";
import type { Metadata } from "next"
import Button from "./Button";
export const metadata: Metadata = {
    title: "Hexashop - About",
    description: "discover a world of endless shoping possibilities at our online store.",
};


const About = () => {
    return (
        <div>
            <Button />
            <Link href="/">Go to Home</Link>
        </div>
    )
}
export default About;