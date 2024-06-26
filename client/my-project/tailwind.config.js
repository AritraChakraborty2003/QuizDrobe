/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#e8f2fd",
      maintext: "#004AAD",
      bodytext: "#49688D",
      buttonColor: "#F7FAFF",
      ruleButtonColor: "#49688D",
      rulebody: "#F7FAFF",
      backQuiz: "#c5ddff",
      ruleborder: "#49688D",
      white: "#fff",
      timerBody: "#49688D",
      quizBody: "#F7FAFF",
      quizButton: "#F7FAFF",
      quiztext: "#737373",
      feedbackbutton: "#49688D",
      feedbackbody: "#F7FAFF",
      textcounter: "#737373",
      timerText: "#FF0000",
      lightgrey: "#F4F5F7",
    },
    fontFamily: {
      oxygen: ["Oxygen"],
      roboto: ["Roboto"],
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
