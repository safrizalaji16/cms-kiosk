export function extractHTML(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Mengambil judul dari elemen <title>
  const title = doc.querySelector("title").textContent.trim();

  // Mengambil konten dari elemen <body>
  const body = doc.querySelector("body").innerHTML.trim();

  // Mengambil semua elemen <style> dalam elemen <head>
  const styleElements = doc.querySelectorAll("style");
  let style = "";
  styleElements.forEach((styleElement) => {
    style += styleElement.textContent.trim() + "\n";
  });

  return { title, body, style };
}
