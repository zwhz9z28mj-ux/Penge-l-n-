document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("loanForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone");
  const amount = data.get("amount");
  const term = data.get("term");

  const subject = encodeURIComponent("Låneansøgning fra " + name);
  const body = encodeURIComponent(
`Ny låneansøgning

Navn: ${name}
E-mail: ${email}
Telefon: ${phone}
Ønsket lånebeløb: ${amount} DKK
Ønsket løbetid: ${term}

Bemærk: Denne formular er en demo og sender via brugerens almindelige e-mailklient.`
  );

  window.location.href = `mailto:pengelan7@gmail.com?subject=${subject}&body=${body}`;
});