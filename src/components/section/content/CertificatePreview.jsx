import CertificateCardsPreview from '@section/content/CertificateCardsPreview'
import DE_CERTIFICATE from '@assets/DE-Certificate.png'

const certificate = [
    {
        image: DE_CERTIFICATE,
        title: 'Data Engineering',
        certificate: DE_CERTIFICATE,
    },
    {
        image: DE_CERTIFICATE,
        title: 'Data Engineering',
        certificate: DE_CERTIFICATE,
    },
    {
        image: DE_CERTIFICATE,
        title: 'Data Engineering',
        certificate: DE_CERTIFICATE,
    },
    {
        image: DE_CERTIFICATE,
        title: 'Data Engineering',
        certificate: DE_CERTIFICATE,
    },
]

function CertificatePreview() {
    return (
        <div className="certificate-content">
            <div className='head-project'>
                <h1 className="text-project">Certificate</h1>
            </div>
            <div className="wrapper-certificate">
                {
                    certificate.map((item, index) => (
                        <CertificateCardsPreview key={index} {...item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CertificatePreview