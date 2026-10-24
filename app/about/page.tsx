import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  HandHeart,
  HeartHandshake,
  Leaf,
  MessageCircleHeart,
  Sprout,
  UsersRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "हमारे बारे में",
  description:
    "सहयोग विकास फाउंडेशन के उद्देश्य, मूल्यों और समुदाय-केंद्रित कार्यशैली के बारे में जानें।",
};

const values = [
  {
    number: "01",
    title: "करुणा",
    text: "लोगों की ज़रूरतों को सहानुभूति, गरिमा और सम्मान के साथ समझना।",
    icon: <HeartHandshake size={21} />,
  },
  {
    number: "02",
    title: "ईमानदारी",
    text: "ज़िम्मेदारी से काम करना और अपने प्रयासों व परिणामों के बारे में सच्चाई से बताना।",
    icon: <MessageCircleHeart size={21} />,
  },
  {
    number: "03",
    title: "समावेशिता",
    text: "अलग-अलग अनुभवों का सम्मान करना और सभी की भागीदारी को प्रोत्साहित करना।",
    icon: <UsersRound size={21} />,
  },
  {
    number: "04",
    title: "दीर्घकालिक सोच",
    text: "ऐसे समाधानों की दिशा में काम करना जिनसे समुदायों को लंबे समय तक लाभ मिले।",
    icon: <Leaf size={21} />,
  },
];

const approachSteps = [
  {
    number: "01",
    title: "सुनें और समझें",
    text: "समुदाय की प्राथमिकताओं, स्थानीय चुनौतियों और पहले से उपलब्ध संसाधनों को समझें।",
  },
  {
    number: "02",
    title: "मिलकर योजना बनाएँ",
    text: "समुदाय की भागीदारी और साझा उद्देश्यों के साथ उपयोगी पहल की रूपरेखा बनाएँ।",
  },
  {
    number: "03",
    title: "मिलकर कदम उठाएँ",
    text: "तय की गई योजनाओं को आगे बढ़ाने के लिए समुदाय, स्वयंसेवकों और सहयोगियों के साथ काम करें।",
  },
  {
    number: "04",
    title: "सीखें और बेहतर बनाएँ",
    text: "प्रतिक्रिया लें, अनुभवों की समीक्षा करें और सुधार के अवसर पहचानें।",
  },
];

const partnerships = [
  {
    number: "01",
    title: "सामुदायिक संगठन",
    text: "स्थानीय समूहों के साथ संबंध बनाएँ, जो अपने क्षेत्र और समुदाय की प्राथमिकताओं को समझते हैं।",
    icon: <UsersRound size={20} />,
  },
  {
    number: "02",
    title: "स्वयंसेवक और सहयोगी",
    text: "समुदाय की ज़रूरतों के अनुसार अपना समय, कौशल और संवेदनशीलता साझा करें।",
    icon: <HandHeart size={20} />,
  },
  {
    number: "03",
    title: "संस्थाएँ और समर्थक",
    text: "साझा लक्ष्यों और दीर्घकालिक अवसरों के लिए ज़िम्मेदार सहयोग की संभावनाएँ तलाशें।",
    icon: <HeartHandshake size={20} />,
  },
];

export default function AboutPage() {
  return (
    <div className="about-page" lang="hi">
      <section className="about-hero">
        <div className="page-shell about-hero-grid">
          <div className="about-hero-copy">
            <span className="eyebrow"><span className="label-line" /> 01 · परिचय</span>
            <h1 className="about-hindi-text">हर व्यक्ति को मिले आगे बढ़ने का <em>अवसर।</em></h1>
            <p className="about-hindi-text">हमारा विश्वास है कि सच्चा बदलाव तब आता है, जब लोग एक साझा उद्देश्य के साथ मिलकर आगे बढ़ते हैं। सहयोग, संवेदनशीलता और सामूहिक प्रयासों के माध्यम से हम एक ऐसे समाज के निर्माण की दिशा में काम करते हैं, जहाँ हर व्यक्ति को समान अवसर, सम्मान और बेहतर भविष्य की उम्मीद मिले।</p>
            <div className="about-hero-actions">
              <a className="button button-dark" href="#our-story">हमारी कहानी <ArrowRight size={16} /></a>
              <Link className="text-link" href="/contact">हमारे साथ जुड़ें <ArrowUpRight size={16} /></Link>
            </div>
          </div>
          <div className="about-hero-visual">
            <div className="about-hero-photo" role="img" aria-label="सहयोग विकास फाउंडेशन के लिए साझा किया गया समुदाय का चित्र" />
            <span className="about-hero-accent" aria-hidden="true"><Sprout size={28} /></span>
            <span className="about-image-note">लोग पहले। प्रगति साथ-साथ।</span>
          </div>
        </div>
      </section>

      <section className="about-story-section section-pad" id="our-story">
        <div className="page-shell about-story-grid">
          <div className="about-story-copy">
            <span className="eyebrow">02 · हमारी कहानी</span>
            <h2>सहयोग से मिलता है साथ।<br />विकास से मिलती है <em>प्रगति।</em></h2>
            <p>हमारे नाम में दो सरल विचार जुड़े हैं—एक-दूसरे का साथ देना और मिलकर आगे बढ़ना। सहयोग विकास फाउंडेशन को समुदाय के विकास, सामूहिक पहल और सकारात्मक सामाजिक बदलाव के एक मंच के रूप में आगे बढ़ाया जा रहा है।</p>
            <p>यह कहानी उन लोगों और समुदायों की है जिनके प्रयासों से काम संभव होता है। फाउंडेशन की पुष्टि के बाद हम इसके पड़ाव साझा करेंगे।</p>
          </div>
          <div className="about-story-visual">
            <div className="about-story-photo" role="img" aria-label="साथ में समय बिताते लोग; उदाहरण के लिए उपयोग किया गया चित्र" />
            <span className="photo-placeholder-tag">उदाहरण का चित्र · फाउंडेशन का स्वीकृत चित्र यहाँ जोड़ें</span>
          </div>
        </div>
      </section>

      <section className="why-section section-pad">
        <div className="page-shell why-grid">
          <div className="why-photo" role="img" aria-label="समुदाय की एक बैठक; उदाहरण के लिए उपयोग किया गया चित्र">
            <span className="photo-placeholder-tag">उदाहरण का चित्र</span>
          </div>
          <div className="why-copy">
            <span className="eyebrow">03 · हमारे अस्तित्व का उद्देश्य</span>
            <h2>अवसर हर व्यक्ति की पहुँच में <em>होना चाहिए।</em></h2>
            <p>हर व्यक्ति और परिवार को बेहतर भविष्य गढ़ने का अवसर, गरिमा और सहयोग मिलना चाहिए। हम लोगों को साथ लाने, समुदाय की प्राथमिकताएँ समझने और समावेशी व स्थायी प्रगति के लिए अवसर बनाने के उद्देश्य से काम करते हैं।</p>
            <p>हमारी शुरुआत किसी तयशुदा जवाब से नहीं होती। शुरुआत होती है—समझने, सहयोग करने और संवेदनशीलता के साथ कदम उठाने की इच्छा से।</p>
            <Link className="text-link" href="/programs">हमारे कार्यक्षेत्र देखें <ArrowRight size={16} /></Link>
            <div style={{display:"flex",gap:"12px",marginTop:"8px",flexWrap:"wrap"}}>
              <Link className="quiet-link" href="/education">Education <ArrowRight size={13} /></Link>
              <Link className="quiet-link" href="/wellbeing">Wellbeing <ArrowRight size={13} /></Link>
              <Link className="quiet-link" href="/livelihoods">Livelihoods <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">04 · हमारा मिशन और दृष्टि</span><h2>साझा उद्देश्य।<br /><em>उम्मीद भरा भविष्य।</em></h2></div>
            <p>ये प्रारूपिक वक्तव्य इस वेबसाइट की दिशा बताते हैं। फाउंडेशन को इन्हें अपने आधिकारिक रूप से स्वीकृत मिशन और दृष्टि के अनुसार जाँचना या बदलना चाहिए।</p>
          </div>
          <div className="mission-cards">
            <article className="mission-card">
              <span>हमारा मिशन</span>
              <h3>सार्थक अवसर—मिलकर, सबके लिए।</h3>
              <p>सार्थक पहलों, सहयोग और ऐसे अवसरों के माध्यम से लोगों तथा समुदायों को सशक्त बनाना, जो सामाजिक विकास और समावेशी प्रगति में सहायक हों।</p>
            </article>
            <article className="vision-card">
              <span>हमारी दृष्टि</span>
              <h3>ऐसा भविष्य जहाँ हर व्यक्ति आगे बढ़ सके।</h3>
              <p>ऐसे समाज की दिशा में योगदान देना जहाँ हर व्यक्ति को बेहतर भविष्य बनाने के लिए अवसर, गरिमा और आवश्यक सहयोग मिले।</p>
            </article>
          </div>
          <p className="about-disclosure">मिशन और दृष्टि का प्रारूप · फाउंडेशन की आधिकारिक स्वीकृति की प्रतीक्षा में</p>
        </div>
      </section>

      <section className="philosophy-section section-pad">
        <div className="page-shell philosophy-grid">
          <div className="philosophy-visual">
            <div className="philosophy-photo" role="img" aria-label="बाहर मिलकर काम करते लोग; उदाहरण के लिए उपयोग किया गया चित्र" />
            <span className="photo-placeholder-tag">उदाहरण का चित्र</span>
          </div>
          <div className="philosophy-copy">
            <span className="eyebrow">05 · हमारा दर्शन</span>
            <h2>लोगों के साथ।<br /><em>हर कदम पर।</em></h2>
            <p>हमारा विश्वास है कि प्रगति तब अधिक मजबूत होती है जब लोग उसे गढ़ने में सक्रिय भागीदार हों। स्थानीय समझ, भागीदारी और आपसी सम्मान हमारे सुनने, योजना बनाने और काम करने के तरीके का आधार हैं।</p>
            <div className="philosophy-points">
              <p><span>01</span> धारणाओं से नहीं, सुनने से शुरुआत करें।</p>
              <p><span>02</span> पहले से मौजूद क्षमताओं को आगे बढ़ाएँ।</p>
              <p><span>03</span> साथ सीखें और जवाबदेह बने रहें।</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">06 · हमारे मूल मूल्य</span><h2>वे मूल्य जो तय करते हैं<br /><em>हम कैसे काम करते हैं।</em></h2></div>
            <p>ये प्रस्तावित मूल्य समुदाय-केंद्रित कार्यशैली के प्रति हमारी प्रतिबद्धताओं को दर्शाते हैं।</p>
          </div>
          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.number}>
                <div className="about-value-top"><span>{value.number}</span>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section section-pad" id="our-approach">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">07 · हमारी कार्यशैली</span><h2>सुनें। योजना बनाएँ।<br /><em>साथ मिलकर सीखें।</em></h2></div>
            <p>सार्थक काम लगातार चलने वाली प्रक्रिया है। ये चार कदम स्थानीय समझ और साझा सीख को केंद्र में रखते हैं।</p>
          </div>
          <div className="approach-grid">
            {approachSteps.map((step) => (
              <article className="approach-step" key={step.number}>
                <span className="approach-number">{step.number}</span>
                <span className="approach-marker" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="approach-photo-strip">
            <div className="approach-photo" role="img" aria-label="साथ आए समुदाय के सदस्य; उदाहरण के लिए उपयोग किया गया चित्र" />
            <p>हमारी कार्यशैली सीखने, प्रतिक्रिया और बदलाव के लिए हमेशा खुली है।</p>
          </div>
        </div>
      </section>

      <section className="journey-section section-pad">
        <div className="page-shell journey-grid">
          <div className="journey-copy">
            <span className="eyebrow">08 · सफ़र और पड़ाव</span>
            <h2>एक सफ़र—जिसे<br /><em>ईमानदारी से बताएँ।</em></h2>
            <p>हम फाउंडेशन की यात्रा आगे बढ़ने के साथ साझा करना चाहते हैं। स्थापना की तारीख, प्रमुख पड़ाव और उपलब्धियाँ पुष्टि तथा प्रकाशन की स्वीकृति के बाद यहाँ जोड़ी जाएँगी।</p>
            <span className="journey-status"><span /> पुष्टि किए गए पड़ाव यहाँ जोड़े जाएँगे।</span>
          </div>
          <div className="journey-visual">
            <div className="journey-photo" role="img" aria-label="समुदाय के लोग साथ में; उदाहरण के लिए उपयोग किया गया चित्र" />
            <div className="journey-placeholder">
              <span>हमारी यात्रा</span>
              <h3>हमारे पड़ाव,<br />सही समय पर।</h3>
              <p>पुष्टि के बिना कोई तारीख या उपलब्धि प्रकाशित नहीं की गई है।</p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-photo" role="img" aria-label="फाउंडेशन के संस्थापक के लिए स्थान; यह वास्तविक संस्थापक का चित्र नहीं है" />
        <div className="founder-copy">
          <span className="eyebrow eyebrow-light">09 · संस्थापक का संदेश</span>
          <span className="founder-quote-mark" aria-hidden="true">“</span>
          <h2>बदलाव की शुरुआत होती है, जब हम <em>साथ खड़े होते हैं।</em></h2>
          <p>हमारा विश्वास है कि हर व्यक्ति को अधिक मजबूत और समावेशी भविष्य बनाने में योगदान देने का अवसर मिलना चाहिए। हमारी आशा है कि हम विनम्रता से सुनें, प्रतिबद्धता के साथ काम करें और जिन समुदायों के साथ काम करते हैं, उनके साथ आगे बढ़ें।</p>
          <p className="founder-attribution">संदेश का प्रारूप · संस्थापक की समीक्षा और स्वीकृति की प्रतीक्षा में</p>
          <span className="founder-image-note">चित्र के लिए स्थान · संस्थापक का स्वीकृत चित्र यहाँ जोड़ें</span>
        </div>
      </section>

      <section className="team-section section-pad">
        <div className="page-shell team-layout">
          <div className="team-heading">
            <span className="eyebrow">10 · टीम और नेतृत्व</span>
            <h2>कई हाथ।<br /><em>एक साझा उद्देश्य।</em></h2>
            <p>बदलाव सामूहिक प्रयास से आता है। हमारी टीम, स्वयंसेवक और सहयोगी अपना समय, कौशल, विचार और प्रतिबद्धता साझा करते हैं।</p>
            <Link className="text-link" href="/contact">हमारी टीम से मिलें <ArrowRight size={16} /></Link>
          </div>
          <div className="team-photo-panel">
            <div className="team-photo" role="img" aria-label="साथ मिलकर काम करता समूह; उदाहरण का चित्र, फाउंडेशन की टीम नहीं" />
            <div className="team-placeholder">
              <UsersRound size={20} />
              <p>पुष्टि की गई टीम जानकारी और स्वीकृत तस्वीरें यहाँ जोड़ी जाएँगी।</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerships-section section-pad">
        <div className="page-shell">
          <div className="section-heading">
            <div><span className="eyebrow">11 · साझेदारियाँ</span><h2>साथ मिलकर बेहतर।<br /><em>हर बार।</em></h2></div>
            <p>सम्मानजनक और समुदाय-आधारित प्रगति के लिए प्रतिबद्ध लोगों और संगठनों से बातचीत का हम स्वागत करते हैं।</p>
          </div>
          <div className="partnerships-grid">
            {partnerships.map((partner) => (
              <article className="partnership-card" key={partner.number}>
                <span className="partnership-number">{partner.number}</span>
                <span className="partnership-icon">{partner.icon}</span>
                <h3>{partner.title}</h3>
                <p>{partner.text}</p>
              </article>
            ))}
          </div>
          <div className="partnerships-footer">
            <span>किसी साझेदार का नाम या लोगो उनकी अनुमति से ही साझा किया जाएगा।</span>
            <Link className="quiet-link" href="/contact">साझेदारी पर बात करें <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="accountability-section section-pad">
        <div className="page-shell accountability-grid">
          <div>
            <span className="eyebrow eyebrow-light">12 · पारदर्शिता</span>
            <h2>भरोसा बनता है<br /><em>खुलकर बताने से।</em></h2>
            <p>समुदायों और समर्थकों को हमारे काम, प्राथमिकताओं और संसाधनों के उपयोग की जानकारी मिलनी चाहिए। आधिकारिक दस्तावेज़ों की पुष्टि और प्रकाशन की स्वीकृति के बाद उन्हें साझा किया जाएगा।</p>
          </div>
          <div className="accountability-list">
            <div><span>01</span><span>पंजीकरण की जानकारी</span><span>जल्द साझा होगी</span></div>
            <div><span>02</span><span>वार्षिक रिपोर्ट</span><span>जल्द साझा होगी</span></div>
            <div><span>03</span><span>वित्तीय जानकारी</span><span>जल्द साझा होगी</span></div>
            <div><span>04</span><span>लागू प्रमाणपत्र</span><span>जल्द साझा होंगे</span></div>
          </div>
        </div>
      </section>

      <section className="future-section section-pad">
        <div className="page-shell future-grid">
          <div className="future-visual">
            <div className="future-photo" role="img" aria-label="सुहानी रोशनी में हरा-भरा दृश्य; उदाहरण के लिए उपयोग किया गया चित्र" />
            <span className="photo-placeholder-tag">उदाहरण का चित्र</span>
          </div>
          <div className="future-copy">
            <span className="eyebrow">13 · भविष्य की दिशा</span>
            <h2>सुनते रहें।<br /><em>आगे बढ़ते रहें।</em></h2>
            <p>हमारी आगे की दिशा समुदाय की प्राथमिकताओं, सावधानी से मिली सीख और ज़िम्मेदार साझेदारियों से तय होनी चाहिए। योजनाओं की पुष्टि होने पर फाउंडेशन उन्हें साझा करेगा।</p>
            <div className="future-note"><Sprout size={19} /><span>आज की जड़ों से जुड़े। आने वाले कल के लिए तैयार।</span></div>
          </div>
        </div>
      </section>

      <section className="about-closing section-pad">
        <div className="page-shell about-closing-inner">
          <span className="eyebrow">14 · हमारे साथ चलें</span>
          <h2>साथ मिलकर लाएँ<br /><em>सार्थक बदलाव।</em></h2>
          <p>आपका हर योगदान, स्वयंसेवा का हर घंटा और हर साझेदारी साझा उद्देश्य को आगे बढ़ा सकती है।</p>
          <div className="about-hero-actions">
            <Link className="button button-dark" href="/donate">हमारे काम में सहयोग दें <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline-dark" href="/get-involved">स्वयंसेवक बनें <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
