import React, { useState, useEffect } from 'react'
import FAQ from '../../components/FaqComponents/FAQ/FAQ'
import Navbar from '../../components/NavBar/Navbar'

import './FaqPage.css'
const Questions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [faqs, setfaqs] = useState([
        {
            question: "Caravınn Nedir?",
            answer: "Caravinn, karavanlarla seyahat etme yaşam tarzını ülkemizde yaygınlaştırmak amacıyla kurulmuş, karavan kiralamak için çevrimiçi bir pazar yeridir. Bu modern karavan kiralama platformunun yardımıyla, artık Türkiye'nin onlarca şehrinden karavan, karavan ve küçük evler de dahil olmak üzere çeşitli konaklama birimleri kiralamak mümkün. Caravinn, Türk karavan sektöründeki sorunları çözerek kendi karavanından para kazanmak isteyenler için bir pazar yaratmanın yanı sıra, karavanları maceracılarla buluşturarak keyifli anılar yaratacak hızlı ve güvenilir bir hizmet sunmayı amaçlıyor.",
            open: true
        },
        {
            question: "Caravınn'da ilan vermek ücretli midir?",
            answer: "Caravınn'da karavan ilanı oluşturmak için herhangi bir ücret vermenize gerek yoktur. Size veya işletmenize ait herhangi bir sayıda karavan ile  kendi reklam sayfanıza sahip olabilirsiniz. İlan açarak reklam oluşturmak  için hiçbir ücrete gerek yoktur.",
            open: false
        },
        {
            question: "Şirket değilim, kendi karavanımı boş zamanlarında burada listeleyebilir miyim?",
            answer: "Caravınn'in bireysel karavan sahiplerinin karavanlarının kullanılmadıkları süreleri değerlendirmelerine olanak sağlaması, sizin için en önemli avantajlarından biridir. Bunu yaparak karavanınızı en uygun  zamanlarda kolayca kiralayabilecek ve yıllık 100.000 ile 150.000 TL arasında gelir elde edebileceksiniz. Caravınn ile birlikte kısa süreli kira sigortası gibi konularda bizimle iletişime geçmenizi saygılarımızla rica ederiz. Bizimle iletişime geçmek için info@caravinn.com veya kurumsal hatlarımızı kullanabilirsiniz.",
            open: false
        },
        {
            question: "Caravınn puanımı nasıl yükseltebilirim?",
            answer: "Sizinle olan etkileşimlerine ilişkin iletişim kurduğunuz karavan kiralayıcılarının  sistemde sizin için verdiği geri bildirimler, karavan  puanının hesaplanmasına yöneliktir. İsteklere yanıt verme süreniz, hoş olmayan sürprizlerin olmaması ve kiralama deneyiminin kalitesi, karavan puanının daha iyi olmasına olumlu katkıda bulunur. Yorumlar ve puanlar sisteme kaydedildiğinden sonraki kiralamalar için rezervasyon yapan müşteriler tarafından her zaman inceleneceklerini unutmayın.",
            open: false
        },
        {
            question: "Beğendiğim  karavanları nasıl saklayabilirim?",
            answer: "Beğendiğiniz karavanlara  daha sonra kolayca ulaşabilmek  için favorilerinize ekleyin. Favori karavanlarınızı dilediğinizde sistemde  ziyaret edebilirsiniz.",
            open: false
        },
        {
            question: "Beğendiğim karavan ile ilgili ödemeyi nereye yapmalıyım?",
            answer: "Tercih ettiğiniz karavanı sistem üzerinden hızlı bir şekilde rezerve edebilirsiniz. Bu rezervasyon için ödenmesi gereken toplam tutarın %40'ını kredi kartı ve 3D secure ödeme yöntemleri ile ödemeniz gerekmektedir. Karavanı teslim aldığınızda kalan bakiyeyi ve kapora bedelini sahibine ödemeniz gerekmektedir.",
            open: false
        },
        {
            question: "Beğendiğim karavanın iptal şartlarını nasıl öğrenebilirim?",
            answer: "Rezervasyon sırasında karavanın iptal koşullarını inceleyebilir ve karşınıza çıkan ekranlarda sunulan iptal olanaklarını inceleyebilirsiniz.",
            open: false
        },
        {
            question: "Depozito vermek zorunlu mudur?",
            answer: "Karavanın olası hasarı, trafik cezası ve köprü geçişleri nedeniyle depozito çok önemlidir. bu nedenle karavan sahipleri depozito isteyebilir; İlanları incelerken karavan özelliklerinde depozito tutarını görebilirsiniz.",
            open: false
        },
        {
            question: "Nasıl Kiralama Yapılır?",
            answer: "Caravınn platformunda, bir karavan kiralamak için sadece üç adım vardır: Ya size uygun karavanları listeleyin ya da sitede öne çıkan karavanlardan birini seçin. caravınn.com'daki arama çubuğuna tatilinizin tarihlerini ve yerini girerek harika karavanlar bulabilir ve değerlendirebilirsiniz. Seçtiğiniz karavanın müsait olduğu günlere göre 'Rezervasyon yap' seçeneğini seçip karavan sahibinin onay vermesini bekleyebilirsiniz. İlgilendiğiniz karavan için sahibi 'Anında Rezervasyon' özelliğini açtıysa, izin almadan hemen karavan kiralayabilirsiniz. Ödemenizi tamamlayıp rezervasyonunuzun onaylanmasını beklerken, seyahat planınızı yapabilirsiniz. Lütfen şartlar ve koşullar, sınırlamalar ve iptal politikaları dahil olmak üzere kritik makalelerimizi şimdi okuyun.",
            open: false
        },
        {
            question: "Kiraladığım Karavan ile ilgili bir sorun olursa ne yapmalıyım?",
            answer: "Önce karavanın sahibi ile konuşup sorunu orada çözmeye çalışmanızı tavsiye ederiz. Karavan sahiplerinin arabaları ile ilgili uzmanlık ve deneyimleri daha fazladır. Ancak, karavan veya karavanın sahibi ile bir sorununuz varsa, lütfen bizimle olduğu kadar karavan sahibiyle de iletişime geçin. Örneğin, kiraladığınız karavanın durumu, sahibi tarafından sağlanan açıklamaya uymuyorsa, karavan güvenli ve yola elverişli değilse veya kiraladığınız  karavanınız seyahat halindeyken herhangi bir bileşeni herhangi bir şekilde arızalanırsa, lütfen karavan sahibini ve bizi bilgilendirin. Caravın'ın bir rezervasyon sitesi olduğunu unutmayın. Karavan sahibi ile yaptığınız sözleşme tüm kiralama prosedürünü yönetir. Araç kiralamada olduğu gibi her sözleşme sahibine ve firmaya göre değişir. Sonuç olarak sözleşmeleri dikkatlice incelemenizi tavsiye ederiz. Lütfen olayı bize bildirmenin yanı sıra sitedeki karavanı ve karavan sahibini derecelendirmeyi unutmayın.",
            open: false
        },
        {
            question: "Karavanı Kaç Kişinin Kullanmasına İzin Verilir?",
            answer: "Gerekli ehliyete sahip olan herkes karavanı sahibinin düzenlemeleri ve istekleri doğrultusunda kullanabilir; sürücü sayısında herhangi bir kısıtlama yoktur. Bu özellikler kiralamak istediğiniz karavan ilan sayfasında listelenmiştir. Bazı karavanlar için sürücü yaşı ve ehliyet sınırlamaları geçerlidir. Karavan kiralamadan önce lütfen bu bilgileri okuyunuz.",
            open: false
        },
        {
            question: "Onaylı Kullanıcı Nedir?",
            answer: "caravınn.com'a üye olduktan sonra profillerini tamamlayan kullanıcılar onaylı kullanıcı olarak kabul edilir. Karavan sadece bu kullanıcılar tarafından kiralanabilir. Hesabınızı doğrulamak %100 ücretsizdir. Caravınn'a kaydolmak ve profilinizi tamamlamak için gerekli verileri girmeniz yeterlidir. Karavan sahiplerinin misafirleri için yaptığımız kontrollerin aynısını biz de yapıyor ve karavan sahiplerini güvenilir karavan severlerle eşleştiriyoruz.",
            open: false
        },
        {
            question: "Nasıl Onaylı Kullanıcı olabilirim?",
            answer: "caravınn.com'a kayıt olduktan ve e-posta adresinizi onayladıktan sonra sisteme  giriş yapın. Ekranın sağ üst köşesinde profil resminiz olacak şekilde açılan pencerenin ''Kişisel Bilgiler'' sayfasında sizden istenen bilgileri girin ve kaydedin. İstenen bilgiler ile sağladığınız kimlik bilgileri uyuştuğunda sistem sizi yetkili kullanıcı olarak kaydedecektir.",
            open: false
        },
        {
            question: "Rezervasyonumu uzatmak istersem ne yapmalıyım?",
            answer: "Uzun bir yolculuk olacağa benziyor! Seyahat tarihlerinizi seyahatinizden önce veya seyahatiniz sırasında değiştirmek isterseniz, öncelikle caravınn.com'da karavan sahibinin karavanının hala müsait olup olmadığına bakmalısınız. Kiraladığınız tarihin devamında takip eden günler seçtiğiniz karavan için uygunsa  Caravınn ilan sayfasını ziyaret edebilir, uzatmak istediğiniz tarihleri seçip ödeme yaparak işlemi tamamlayabilirsiniz.",
            open: false
        },
        {
            question: "Gezi süresini kısaltabilir miyim?",
            answer: "Evet, tatilinizi kısa kesebilirsiniz, ancak burada iptal kurallarına ve hüküm ve koşullarına göre geri ödeme alacağınızı unutmayın.",
            open: false
        },
        {
            question: "Rezervasyonumu iptal etmem gerekirse ne yapmalıyım?",
            answer: "Rezervasyonunuzu iptal etmeniz gerektiğini öncelikle karavan sahibine bildirin ve hangi iptal kurallarını seçtiklerini öğrenin. Rezervasyon bilgilerinin alt kısmında 'iptal' seçeneği yer almaktadır. Bu seçeneği seçerek, karavan sahibi tarafından seçilen iptal politikasına göre rezervasyonunuzu sonlandırabilir ve ücret iadesi alabilirsiniz. Caravınn kaydı sırasında belirtilen tüm iptal kuralları geçerlidir.",
            open: false
        },
        {
            question: "İptal politikaları nasıl uygulanır?",
            answer: "Karavan için üç iptal seçeneği mevcuttur ve karavan sahibinin bunlardan birini seçmesi gerekmektedir. Rezervasyonu iptal edebilir ve belirtilen koşul koşullarına göre geri ödeme alabilirsiniz. Politikalar burada mevcuttur.",
            open: false
        },
        {
            question: "İptal işlemi gerçekleştirirsem para iadesi alabilir miyim?",
            answer: "İadenizin tutarı, karavan sahibi tarafından seçilen iptal politikasına ve iptalin kalkış tarihinizden ne kadar uzakta olduğuna bağlıdır. İptal işlemi doğrulanır doğrulanmaz banka hesabınıza geri ödeme tutarı yatırılacaktır. Not: İadenin hesabınıza geçmesi bankaya göre 3-5 iş günü sürebilmektedir.",
            open: false
        },
        {
            question: "Minimum kiralama süresi nedir?",
            answer: "Bu süre karavan sahiplerine bağlıdır. Minimum kiralama süresi bilgisine incelediğiniz her karavana göre değişiklik gösterir. İlgili karavanın ilan sayfasından ulaşabilirsiniz.",
            open: false
        },
        {
            question: "Karavan sahibi rezervasyonumu ne kadar süre içerisinde onaylar?",
            answer: "Karavan sahibinin taahhüt düzeyi, ne kadar hızlı yanıt vereceğini belirleyecektir; birkaç dakika veya birkaç saat olabilir. 24 saat içinde cevap bekleniyor. Talepte bulunduktan sonra 24 saatten fazla zaman geçtiyse, rezervasyonunuzun ilerleyişini kontrol etmek için Caravınn destek ekibiyle iletişime geçin.",
            open: false
        },
        {
            question: "Karavan kullanabilmek için hangi ehliyet gereklidir?",
            answer: "Tipik olarak, bir karavan işletmek için A tipi veya B tipi standart bir otomobil lisansı kullanılır. Ancak, kiralanan karavana bağlı olarak, bazen birkaç izin daha gerekli olabilir. Ehliyet türü karavanın ağırlığına göre farklılık göstermektedir. Bir karavan B sınıfı bir ehliyetle sürülebilmesine rağmen, aracın ağırlığı 750 kg'dan fazla ise BE sınıfı bir ehliyet gereklidir. Kamyon sınıfı karavan kullanmak için C sınıfı ehliyet, otobüs sınıfı karavan kullanmak için E Sınıfı ehliyet gerekir. Kiralamak istediğiniz karavanın lisans tipinin kiralamadan önce uyumlu olduğundan emin olun!",
            open: false
        },
        {
            question: "Karavan kiralayarak istediğim her yere gidebilir miyim?",
            answer: "Bazı karavan sahipleri, sadece belirli bölgelerde kalmanız konusunda ısrar edebilir veya araçlarını festival gibi organizasyonlara katılmak  için kiralayamayacağınızı söyleyebilir. Karavanın sahibi ile rotanız hakkında görüşmeyi lütfen unutmayın!  Bu durumda karavan sahibi ile aranızdaki anlaşmaya mutlaka uyulmalıdır.",
            open: false
        },
        {
            question: "Karavan kullanmak için bir yaş sınırı var mı?",
            answer: "En az 18 yaşında ve ehliyet sahibi olan herkesin karavan kullanmasına izin verilir, ancak bazı karavan sahipleri yaşça daha büyük ve daha fazla sürüş deneyimi olanların karavanlarını kiralamasına izin verir. Bu, kiralamak istediğiniz karavan sahibinin koşullarına bağlıdır. Bu bilgiyi kiralamak istediğiniz karavan ilan sayfasındaki açıklamalarda bulabilirsiniz.",
            open: false
        },
        {
            question: "Karavan kullanmak için kaç yıllık ehliyet sahibi olmam gerekir?",
            answer: "Bu, kiralamak istediğiniz karavanın sahibine bağlıdır çünkü sürücünün ehliyetinin olması gereken minimum yıl sayısını onlar seçer. Kiralamak istediğiniz karavanı incelerken poliçeler alanına bakmanızı tavsiye ederiz.",
            open: false
        },
        {
            question: "Kiraladığım karavana evcil hayvanımı getirebilir miyim?",
            answer: "Karavan sahiplerimizin çoğu hayvanları severken, bazı karavan sahiplerimizin karavanalrında  evcil dostlarımıza karşı sınırlamaları olabilir. Derecelendirmeden önce kiralamak istediğiniz karavanın sahibinin hayvanlar için uygunluk belirtip belirtmediğine dikkat ediniz.",
            open: false
        },
        {
            question: "Araçların kaskosu var mı?",
            answer: "caravınn platformu olarak karavan sahiplerine çok çeşitli sigorta alternatifleri sunuyoruz. Karavan sahibi, sunduğumuz 'Sigorta' seçeneğini tercih ederse ve kendi sigortası yoksa seyahatinizin sigortası Caravınn tarafından oluşturulur. Sigorta bedeli seyahat günü boyunca hesaplanır ve misafirlerden 'ekstra ücret' olarak tahsil edilir.",
            open: false
        },
        {
            question: "Kaza veya arıza yaparsam ne olur?",
            answer: "Karar vermeden önce kiralamak istediğiniz karavanın ve karavan sahibinin değerlendirmelerini okuyun. Karavanı teslim almadan önce sahibiyle konuşup kısa bir test sürüşü ayarlayabilirsiniz. Bir kaza veya arıza durumunda hatanın nedeni uzmanlar tarafından belirlenerek tespit edilir. Hatanın karavanı kiralayan kişinin hatası olması durumunda bedeli kiralayandan karavan sahibi tarafından alınır.",
            open: false
        },
        {
            question: "Otopark ve hız cezalarını kim ödüyor?",
            answer: "Karavan yolculuğunuzdan aldığınız keyfin azalmasını asla  istemeyiz. Bu nedenle ödediğiniz  depozitonuzdan park ve hız cezaları düşüldükten sonra tarafınıza geri ödeme yapılmaktadır.",
            open: false
        },
        {
            question: "Aracı iade etmeden önce ne yapmalıyım?",
            answer: "Kiralamak istediğiniz karavanın sahibi ile imzaladığınız sözleşmenin şartlarını inceleyerek, anlaşmalı olduğumuz şekilde aracı kendisine teslim edebilirsiniz.",
            open: false
        },
        {
            question: "Sorularınıza cevap bulamadınız mı?",
            answer: "Caravınn Destek Ekibi, en zorlu sorulara bile yanıt verecek donanıma sahiptir. caravınn.com'un 'Yardım ve Destek Merkezi' nde sunduğumuz iletişim yöntemleri ile her zaman sorularınızı bize iletebilirsiniz.",
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