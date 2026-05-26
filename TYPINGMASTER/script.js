    const quotes = [
      "Programming is the art of telling another human what one wants the computer to do.",
      "Success usually comes to those who are too busy to be looking for it.",
      "The future depends on what you do today.",
      "Learning never exhausts the mind.",
      "JavaScript makes web pages interactive and dynamic."
    ];

    let timer = 60;
    let interval;
    let started = false;

    const quoteEl = document.getElementById("quote");
    const inputEl = document.getElementById("input");
    const timeEl = document.getElementById("time");
    const wpmEl = document.getElementById("wpm");
    const resultEl = document.getElementById("result");

    function loadQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteEl.textContent = quotes[randomIndex];
    }

    function startTest() {
      clearInterval(interval);

      timer = 30;
      started = false;

      timeEl.textContent = timer;
      wpmEl.textContent = 0;
      resultEl.textContent = "";

      inputEl.value = "";
      inputEl.disabled = false;
      inputEl.focus();

      loadQuote();
    }

    inputEl.addEventListener("input", () => {

      if (!started) {
        started = true;

        interval = setInterval(() => {
          timer--;
          timeEl.textContent = timer;

          const wordsTyped = inputEl.value.trim().split(" ").length;
          const wpm = Math.round(wordsTyped * (60 / (30 - timer || 1)));
          wpmEl.textContent = wpm;

          if (timer <= 0) {
            clearInterval(interval);
            inputEl.disabled = true;

            resultEl.textContent =
              "Your typing speed is " + wpm + " WPM";
          }
        }, 1000);
      }
    });

    startTest();