function CertificateCardsPreview({ image, title, certificate }) {
    return (
        <div className="certificate-card flex flex-col gap-4 bg-white rounded-2xl drop-shadow-sm w-full h-70 sm:h-76 lg:h-96 xl:h-120 overflow-hidden">
            <div className="w-full h-full bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    )
}

export default CertificateCardsPreview