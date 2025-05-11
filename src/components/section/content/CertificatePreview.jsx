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
    const [newAdvice, setNewAdvice] = useState(false)
    const [quote, setQuote] = useState([])

    const handleNewAdvice = () => {
        getQuote()
    }    
    
    const getQuote = async () => {
        try {
            const quotes = await fetchData() // asumsi ini mengembalikan array of quotes
            const randomIndex = Math.floor(Math.random() * quotes.length)
            const selected = quotes[randomIndex]
            setQuote(selected)
        } catch (error) {
            console.log(error)
        }
    }
    

    useEffect(() => {
        getQuote()
    }, [])

    return (
        <div className="certificate-content">
            <div className='quote-content flex flex-col items-center'>
                <div className="quote flex gap-4 flex-col items-center p-4 w-70 sm:w-120 bg-sky-600 drop-shadow-sm rounded-sm hover:bg-white active:bg-white transition duration-300 group">
                    <blockquote className='text-center text-[10px] sm:text-[12px] md:text-[14px] text-white group-hover:text-sky-600 group-active:text-sky-600 transition duration-300'>
                        <p>
                            "{quote?.quotes || ''}"
                        </p>
                        <footer>— {quote?.author || ''}, <cite>Self Entitled</cite></footer>
                    </blockquote>
                    <button className='px-8 py-1 bg-white text-sky-600 rounded text-xs md:text-sm group-hover:bg-sky-600 group-hover:text-white group-active:bg-sky-600 group-active:text-white transition duration-300' onClick={handleNewAdvice}>
                        Give me advice
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