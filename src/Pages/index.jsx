import Call from "../components/shared/Contact";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/header";
import Hero from "../components/shared/Hero";
import Main from "../components/shared/Main";
import Expert from "../components/shared/Team";


export default function Home() {
    return (
        
        <>

        {/* HEADER */}
        <Header />

        {/* HERO/KONTEN */}
        <Hero />

        {/* PRODUCTS LIST */}
        <Main />

        {/* TEAM SECTION */}
        <Expert />

        {/* CONTACT SECTION */}
        <Call />

        {/* FOOTER */}
        <Footer />

        </>

    )
}