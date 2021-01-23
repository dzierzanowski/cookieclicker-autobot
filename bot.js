(function bot() {
  const bigCkie = document.querySelector("#bigCookie")
  const clik = bigCkie.click.bind(bigCkie);
  function run() {
    clik();
    setTimeout(run, 0);
  }
  run();
})();
