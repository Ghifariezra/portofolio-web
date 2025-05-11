function CertificateCardsPreview({ image, title, certificate }) {
    return (
        <div className="certificate-card">
            <div className="img-certificate" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    )
}

export default CertificateCardsPreview