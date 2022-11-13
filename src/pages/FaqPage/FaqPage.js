import React, { useState, useEffect } from 'react'
import FAQ from '../../components/FaqComponents/FAQ/FAQ'
import Navbar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'
import './FaqPage.css'
const Questions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [faqs, setfaqs] = useState([
        {
            question: 'Caravinn üzerinden nasıl karavan kiralayabilirim?',
            answer: 'İyi bir karavan, karavanlarda bulunması gereken bulunan en yaygın özelliklerin birçoğuna sahiptir. Standart bir karavanda edilmiş bir kamp aracında prizler, yatak, koltuk, banyo ve küçük bir mutfak alanı bulunacaktır. Buna ek olarak, çoğu kiralık...',
            open: true
        },
        {
            question: 'Kiralık Karavanlar Kaç Çeşittir?',
            answer: 'karavanlarda bulunması gereken bulunan en yaygın özelliklerin birçoğuna sahiptir.',
            open: false
        },
        {
            question: 'Karavan Kullanmak için Özel Ehliyet Gerekir Mi?',
            answer: 'karavanlarda bulunması gereken bulunan en yaygın özelliklerin birçoğuna sahiptir.',
            open: false
        },
        {
            question: 'Doğru Karavan Kamp Alanı Seçiminin Önemi Nedir?',
            answer: 'karavanlarda bulunması gereken bulunan en yaygın özelliklerin birçoğuna sahiptir..',
            open: false
        },
        {
            question: 'Kiralık Karavanlar Kaç Çeşittir?',
            answer: 'karavanlarda bulunması gereken bulunan en yaygın özelliklerin birçoğuna sahiptir.',
            open: false
        },
        {
            question: 'Karavan Kullanmak için Özel Ehliyet Gerekir Mi?',
            answer: 'karavanlarda bulunması gereken bulunan en yaygın özelliklerin birçoğuna sahiptir.',
            open: false
        },
        {
            question: 'Doğru Karavan Kamp Alanı Seçiminin Önemi Nedir?',
            answer: 'karavanlarda bulunması gereken bulunan en yaygın özelliklerin birçoğuna sahiptir..',
            open: false
        },
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div className="bg-blue">
            <div className='faq-page' style={{}}>
                <Navbar />
                <div className="faq-page-content">
                    <h1 style={{ color: '#FFF' }}>Sıkça Sorulan Sorular</h1>
                    <div className="faqs">
                        {faqs.map((faq, i) => (
                            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions