"use client";
import { useEffect } from "react";
import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-webpage";
import gsForm from "grapesjs-plugin-forms";
import gsPlgExport from "grapesjs-plugin-export";
import gjsBlockBasic from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";

function WebBuilder({ code }: { code: string }) {
  useEffect(() => {
    const editor = grapesjs.init({
      // selectorManager: { componentFirst: true },
      height: "100%",
      storageManager: {
        options: {
          local: {
            key: "gjsProjectNl",
          },
        },
      },
      container: "#gjs",
      // fromElement: true,
      plugins: [gsWebpage, gsForm, gsPlgExport, gjsBlockBasic],
      pluginsOpts: {
        gsWebpage: {
          modalTitleImport: "Import template",
          modalTitleExport: "Export template",
          codeViewerTheme: "material",
          importPlaceholder:
            '<table class="table"><tr><td class="cell">Hello world!</td></tr></table>',
          cellStyle: {
            "font-size": "12px",
            "font-weight": 300,
            "vertical-align": "top",
            color: "rgb(111, 119, 125)",
            margin: 0,
            padding: 0,
          },
        },
      },
    });
      // HTML yang akan ditambahkan ke dalam editor
      const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Video Player</title>
          <style>
              /* CSS untuk header */
              header {
                  background-color: #333;
                  color: #fff;
                  padding: 10px;
                  text-align: center;
              }
              
              /* CSS untuk footer */
              footer {
                  background-color: #333;
                  color: #fff;
                  padding: 10px;
                  text-align: center;
                  position: fixed;
                  bottom: 0;
                  width: 100%;
              }
              
              /* CSS untuk video container */
              .video-container {
                  position: relative;
                  width: 100%;
                  padding-top: 56.25%; /* 16:9 Aspect Ratio (56.25%) */
              }
              
              /* CSS untuk video iframe */
              .video-container iframe {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
              }
          </style>
      </head>
      <body>
          <header>
              <h1>Header</h1>
          </header>

          <div class="video-container">
              <!-- Ganti "VIDEO_ID" dengan ID video YouTube yang ingin Anda tampilkan -->
              <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
          </div>

          <footer>
              <h2>Footer</h2>
          </footer>
      </body>
      </html>
    `;

    // Tambahkan konten HTML ke dalam editor GrapesJS
    editor.setComponents(`<div class="cls">New component</div>`);
    
  }, [code]);

  return <div id="gjs"></div>;
}
export default WebBuilder;
