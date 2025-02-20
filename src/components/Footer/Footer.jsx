import React from 'react'
import './footer.css'
import arrowBtn from './assets/arrow-btn.svg'
import Logo from './assets/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom'


const Footer = (props) => {
    function scrollUpButton() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        // style={{ backgroundColor: '#6DB7D6' }} FOOTER BG
        <div className="footer-bg" style={{ backgroundColor: props.bg }}>
            <div className='footer'>
                <img src={arrowBtn} onClick={scrollUpButton} alt="arrow-btn" id='icon' />
                <div className="parts">
                    <div className="part">
                        <img id='logo' src={Logo} alt="logo" />
                        <div className="social-media">
                            <span><FaFacebookF /></span>
                            <span><FaInstagram /></span>
                            <span><FaTwitter /></span>
                            <span><FaLinkedin /></span>
                            <span><FaYoutube /></span>
                        </div>
                    </div>
                    <div className="part">
                        <h4>Caravinn</h4>
                        <ul>
                            <Link to={'/nasil-kiralarim'}><li>Nasıl Kiralarım?</li></Link>
                            <Link to={'/nasil-kiraya-veririm'}><li>Nasıl Kiraya Veririm?</li></Link>
                            <Link to={'/kiralik-karavanlar'}><li>Kiralık Karavanlar</li></Link>
                            <Link to={'/bize-ulasin'}><li>Bize Ulaşın</li></Link>
                            <Link to={'/faq'}><li>Sıkça Sorulan Sorular</li></Link>
                        </ul>
                    </div>
                    <div className="part">
                        <h4>Blog</h4>
                        <ul>
                            <li>En Popüler Karavanlar</li>
                            <li>Karavan Sırları Hakkında</li>
                            <li>Karavan İçin 5 İpucu</li>
                            <li>Karavan tam olarak nedir?</li>
                        </ul>
                    </div>
                    <div className="part">
                        <ul>
                            <a target="_blank" rel="noopener noreferrer" href='mailto:info@caravinn.com'>
                                <li>
                                    <FiMail
                                        style={{
                                            marginRight: 10,
                                            fontSize: 18
                                        }}
                                    />
                                    info@caravinn.com
                                </li>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='tel:+902129094062'>
                                <li>
                                    <IoCallOutline style={{ marginRight: 10, fontSize: 18 }} />
                                    +0 (212) 909 40 62
                                </li>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href='http://maps.google.com/?q=Esentepe Mah. Talatpaşa Cad. No:5, Şişli, İstanbul'>
                                <li>
                                    <IoLocationOutline style={{ marginRight: 10, fontSize: 18 }} />
                                    Esentepe Mah. Talatpaşa Cad. No:5, Şişli, İstanbul
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="copyright-text">
                    <p>Sitede yayınlanan içerikler izinsiz kullanılamaz. Tüm hakları Saklıdır.</p>
                    <div className="terms-conditions">
                        <ul>
                            <Link style={{ color: '#196CA5' }} to={'/kvkk-cerezler'}><li>Gizlilik Sözleşmesi</li></Link>
                            <Link style={{ color: '#196CA5' }} to={'/kvkk-cerezler'}><li>Kullanım Koşulları</li></Link>
                            <Link style={{ color: '#196CA5' }} to={'/kvkk-cerezler'}><li>Çerezler</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
