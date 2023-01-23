import { Navbar, Hero, Footer } from "../components"
import { NavbarLinks } from "../constants"
export default function Home() {
  return (
    <>
      <Navbar navlinks={NavbarLinks} />
      {/* <Hero />
      <Footer /> */}
    </>
  );
}