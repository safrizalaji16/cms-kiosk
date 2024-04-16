"use client";
import { useEffect } from "react";
import grapesjs from "grapesjs";
import gsWebpage from "grapesjs-preset-webpage";
import gsForm from "grapesjs-plugin-forms";
import gsPlgExport from "grapesjs-plugin-export";
import gjsBlockBasic from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";

function WebBuilder() {
  useEffect(() => {
    const editor = grapesjs.init({
      selectorManager: { componentFirst: true },
      height: "100vh",
      storageManager: {
        options: {
          local: {
            key: "gjsProjectNl",
          },
        },
      },
      assetManager: {
        upload: false,
        assets: [
          "https://picsum.photos/200/300",
          "https://picsum.photos/300/300",
          "https://picsum.photos/400/300",
          "https://picsum.photos/500/300",
          "https://picsum.photos/600/300",
        ],
      },
      container: "#gjs",
      fromElement: true,
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
  }, []);

  return <div id="gjs"></div>;
}
export default WebBuilder;
