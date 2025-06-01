import ContainerBackground from "@/components/shared/ContainerBackground";
import CookiesES from "@/markdown/pages/cookies.mdx"

const CookiesPoliciesEsPage = () => {

    return (
        <div className="w-full h-auto min-h-screen">
            <ContainerBackground>
                <div className="max-w-5xl z-50">
                    <CookiesES />
                </div>
            </ContainerBackground>
        </div>
    )
}

export default CookiesPoliciesEsPage;