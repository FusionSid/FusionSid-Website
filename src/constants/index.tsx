const styles = {
    homeTextCode: "text-white opacity-10 font-jetbrains"
}

const NavbarLinks: Array<{ id: string, title: string, link: string }> = [
    { id: "about", title: "About", link: "/about" },
    { id: "projects", title: "Projects", link: "/projects" },
    { id: "contact", title: "Contact", link: "/contact" }
]

export {
    styles,
    NavbarLinks
}