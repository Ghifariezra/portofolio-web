import { useState, useEffect } from 'react'
import CertificateCardsPreview from '@section/content/CertificateCardsPreview'
import { fetchCertificate, fetchQuotes } from '@services/MyAPI'

function CertificatePreview() {
    const [quote, setQuote] = useState([])
    const [certificate, setCertificate] = useState([])

    const handleNewAdvice = () => {
        getQuote()
    }

    const getQuote = async () => {
        try {
            const quotes = await fetchQuotes()
            const randomIndex = Math.floor(Math.random() * quotes.length)
            const selected = quotes[randomIndex]
            setQuote(selected)
        } catch (error) {
            console.log(error)
        }
    }

    const getCertificate = async () => {
        const cachedCertificates = localStorage.getItem('certificates')
        if (cachedCertificates) {
            setCertificate(JSON.parse(cachedCertificates))
            return
        }
        try {
            const certificates = await fetchCertificate()
            setCertificate(certificates)
            localStorage.setItem('certificates', JSON.stringify(certificates))
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        getCertificate()
        getQuote()
    }, [])

    return (
        <div className="certificate-content">
            <div className='quote-content flex flex-col items-center'>
                <div className="quote flex gap-4 flex-col items-center p-4 w-70 sm:w-120 bg-white drop-shadow-sm rounded-sm hover:bg-sky-600 active:bg-sky-600 transition duration-300 group">
                    <blockquote className='text-center text-[10px] sm:text-[12px] md:text-[14px] text-sky-600 group-hover:text-white group-active:text-white transition duration-300'>
                        <p>
                            "{quote?.quote || ''}"
                        </p>
                        <footer>— {quote?.author || ''}, <cite>Self Entitled</cite></footer>
                    </blockquote>
                    <button className='px-8 py-1 bg-sky-600 text-white rounded text-xs md:text-sm group-hover:bg-white group-hover:text-sky-600 group-active:bg-white group-active:text-sky-600 transition duration-300' onClick={handleNewAdvice}>
                        Other Quotes
                    </button>
                </div>
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