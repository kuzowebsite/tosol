var quotes = ["Алд бие минь алжааваас алжаатугай, Ахуй төр минь бүү алдартуга, Бүтэн бие минь зовбол зовтугай, Бүтэн улс минь бүү алдартугай,     Чингис хаан",
    "...Явган хүнээс хоцорвол, Унаатай байгаад яанам, Явуулын үгэнд үнэмшвэл, Ухаан заьагаад яанам..., Ш.Гүрбазар"];


  function getQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("parag").innerHTML="<em>" + randomQuote + "</em>";
  }

