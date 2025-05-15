function CertificateCardsPreview({ image, title, certificate }) {
    return (
        <div className="certificate-card" data-aos="fade-up">
            <div className="img-certificate" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
    )
}
 
export default CertificateCardsPreview