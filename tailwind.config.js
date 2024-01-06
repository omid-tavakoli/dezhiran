/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Peyda: "Peyda",
        PeydaSemiBold: "PeydaSemiBold",
        PeydaBold: "PeydaBold",
      },
      colors: {
        "dark-header": "#111111",
        "menu-mobile": "#F9F9F9",
        "pale-blue": "#0D78E5",
        "orange-mid": "#E34935",
        "orange-primery" : "#C73D2B",
        "secondary-gray": "#4B4B4B",
        primary: "#f4f4f4",
        "btn-bg": "#F0F6FF",
        "content-one": "#243757",
        "content-gray": "#42526D",
        "gray-border": "#6B788E",
        "contact-cream": "#F5F6F7",
        address: "#E6F0FF",
        "footer-contact": "#15294B",
        "number-contact": "#354764",
        socail: "#E7F3FF",
        "list-faq": "#686868",
        "quiz-faq": "#3E3E3E",
        "faq-border": "#D1CECF",
        "box-answer": "#EBF3FF",
         'title-video' :'#F6F6F6',
         'content-video' :'#f1f1f1',
         'line-time':'#B23525',
          asnwer: "#1B1B1B",
      },
      borderRadius: {
        xs: "4px",
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
};
