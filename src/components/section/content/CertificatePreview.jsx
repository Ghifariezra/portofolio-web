import { useState, useEffect } from 'react'
import CertificateCardsPreview from '@section/content/CertificateCardsPreview'
import DE_CERTIFICATE from '@assets/DE-Certificate.png'
import fetchData from '@services/Quotes'

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
    const [quote, setQuote] = useState([])
    
    const getQuote = async () => {
        try {
            const quote = await fetchData()
            setQuote(...quote)

            const choiceRandomQuote = Math.floor(Math.random() * quote.length)
            
            setQuote(quote[choiceRandomQuote])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getQuote()
    }, [])

    return (
        <div className="certificate-content">
            <div>
                <blockquote>
                    <p>
                        {quote ? quote.quotes : ''}
                    </p>
                    <footer>— {quote ? quote.author : ''}, <cite>Self Entitled</cite></footer>
                </blockquote>
            </div>
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