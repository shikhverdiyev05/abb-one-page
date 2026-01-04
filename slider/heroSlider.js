function heroSlider() {
    return {
        currentSlide: 0,
        autoplay: true,
        interval: null,
        slides: [
            {
                title: "Sesli suni intelekt komekciniz",
                description: "Artiq xidmetinizdedir",
                buttonText: "ABB Mobile",
                buttonUrl: "#",
                image: "https://cdn.abb-bank.az/Deposit_purple0000_2_1_a7e73c0a10_243da87f0f.png",
            },
            {
                title: "Nagd kreditle 6%-dek endirim!",
                description: "50 000 AZN-dək nağd krediti filiala gəlmədən, olduğunuz yerdən əldə edin!",
                buttonText: "Indi sifaris edin",
                buttonUrl: "#",
                image: ""
            },
            {
                title: "Voen ile kredit imkani",
                description: "Fərdi sahibkarlara özəl 100 000 AZN-dək tam onlayn kredit əldə edin!",
                buttonText: "Muraciet edin",
                buttonUrl: "#",
                image: ""
            },
            {
                title: "Alpha card",
                description: "Indi hem reqemsal , hem fiziki",
                buttonText: "Onlayn sifaris edin",
                buttonUrl: "#",
                image: ""
            },
            {
                title: "Sahibkar krediti",
                description: "500 000 AZN-dək “Sahibkar” kreditini 1 iş günü ərzində əldə edin. ",
                buttonText: "Muraciet edin",
                buttonUrl: "#",
                image: ""
            },
            {
                title: "Tam DigiCard",
                description: "Kartınızı onlayn sifariş edin və fürsətlərdən faydalanın!",
                buttonText: "Onlayn sifaris edin",
                buttonUrl: "#",
                image: ""
            },
            {
                title: "DigiHesab Max",
                description: "Hesabınızdakı qalıq məbləğə illik 6% gəlir əldə edin.",
                buttonText: "DigiHesab Max",
                buttonUrl: "#",
                image: ""
            }

        ],
        init() {
            this.startAutoplay();
        },
        next() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prev() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
        goTo(index) {
            this.currentSlide = index;
        },
        startAutoplay() {
            this.interval = setInterval(() => {
                if (this.autoplay) {
                    this.next();
                }
            }, 5000);
        },
        replaceBrokenImage(event) {
            // Fallback obrázky z iného zdroja
            const fallbacks = [
                '',
                '',
                ''
            ];
            event.target.src = fallbacks[this.currentSlide % fallbacks.length];
        }
    }
}