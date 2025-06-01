import ContainerBackground from "@/components/shared/ContainerBackground";
import PrivacityES from "@/markdown/pages/privacidad.mdx";

const PrivacyPoliciesEsPage = () => {

    return (
        <div className="w-full h-auto min-h-screen">
            <ContainerBackground>
                <div className="max-w-5xl z-50">
                    <PrivacityES />
                </div>
            </ContainerBackground>
        </div>
    )
}

export default PrivacyPoliciesEsPage;