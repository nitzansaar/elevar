// read the public csv file and print out the contents to test

const url = "https://docs.google.com/spreadsheets/d/1d7r0PNbs0WiuDo-1E_Tq4RHRldrYussa9hkzaA6rB44/export?format=csv&gid=0";

fetch(url)
  .then(r => r.text())
  .then(csv => {
    const rows = csv.trim().split("\n").map(r => r.split(","));
    const headers = rows[0];
    const items = rows.slice(1).map(row =>
      Object.fromEntries(headers.map((h, i) => [h.trim(), row[i]?.trim()]))
    );
    const filtered = items.filter(item => item["Sale Price"]);
    console.log(filtered);
  });