h.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
document.body.style.background = "#222";
document.body.style.color = "#eee";

const url =
  "http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript&sort=month&filter=unsafe&key=gik4BOCMC7J9doavgYteRw((";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if (data.error_message) {
      throw new Error(data.error_message);
    }
    const list = document.createElement("ol");

    document.body.appendChild(list);
    for (const { title, link } of data.items) {
      const entry = document.createElement("li");
      const hyperlink = document.createElement("a");
      entry.appendChild(hyperlink);
      list.appendChild(entry);
      hyperlink.textContent = title;
      hyperlink.href = link;
      hyperlink.style.color = "#eee";
      entry.style.fontSize = "120%";
      entry.style.marginBottom = "12px";
    }
  })
  .then(null, (error) => {
  setTimeout(() => {
    const message = document.createElement("pre");
    document.body.appendChild(message);
    message.style.color = "red";
    message.style.fontSize = "30px";
    message.textContent = String(error);
   }, 3000);
  });
