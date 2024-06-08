import Footer from "../components/layout/FooterHome"
import Header from "../components/layout/HeaderHome"
import useDirection from "../hooks/useDirection"

export default function Home(props: {
    children: React.ReactNode
}) {

    const { toggleDirection } = useDirection()


    return (
        <div className="">
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}