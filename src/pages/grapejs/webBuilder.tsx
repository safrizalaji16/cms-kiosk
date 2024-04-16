"use client"
import { useEffect } from "react";
import grapesjs from 'grapesjs';
import gsWebpage from 'grapesjs-preset-webpage';
import gsForm from 'grapesjs-plugin-forms';
import gsPlgExport from 'grapesjs-plugin-export';
import gjsBlockBasic from 'grapesjs-blocks-basic';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs/dist/grapes.min.js';

function WebBuilder() {
    useEffect(() => {
        const editor = grapesjs.init({
            selectorManager: { componentFirst: true },
            height: '100vh',
            storageManager: {
                options: {
                    local: {
                        key: 'gjsProjectNl'
                    }
                }
            },
            assetManager: {
                upload: false,
                assets: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/300/300',
                    'https://picsum.photos/400/300',
                    'https://picsum.photos/500/300',
                    'https://picsum.photos/600/300',
                ],
            },
            container: '#gjs',
            fromElement: true,
            // width: '100%',
            plugins: [gsWebpage, gsForm, gsPlgExport, gjsBlockBasic],
            pluginsOpts: {
                gsWebpage: {
                    modalTitleImport: 'Import template',
                    modalTitleExport: 'Export template',
                    codeViewerTheme: 'material',
                    importPlaceholder: '<table class="table"><tr><td class="cell">Hello world!</td></tr></table>',
                    cellStyle: {
                        'font-size': '12px',
                        'font-weight': 300,
                        'vertical-align': 'top',
                        color: 'rgb(111, 119, 125)',
                        margin: 0,
                        padding: 0,
                    }
                },
                // gsNewsletter: {
                //     modalTitleImport: 'Import newsletter',
                //     modalTitleExport: 'Export newsletter',
                //     codeViewerTheme: 'material',
                //     importPlaceholder: '<table class="table"><tr><td class="cell">Hello world!</td></tr></table>',
                //     cellStyle: {
                //         'font-size': '12px',
                //         'font-weight': 300,
                //         'vertical-align': 'top',
                //         color: 'rgb(111, 119, 125)',
                //         margin: 0,
                //         padding: 0,
                //     }
                // },
            },
        });

    //     editor.BlockManager.add('1-section', {
    //         label: '1 Section',
    //         content: `<section>Section 1</section>`,
    //         attributes: {
    //             title: 'Insert 1 section'
    //         }
    //     });
    //     editor.BlockManager.add('2-section', {
    //         label: '2 Section',
    //         attributes: {
    //             class: 'fa fa-columns',
    //         },
    //         content: `
    //         <style>
    //     body {
    //         font-family: Arial, sans-serif;
    //         margin: 0;
    //         padding: 0;
    //     }

    //     .container {
    //         display: flex;
    //     }

    //     .left-column, .right-column {
    //         flex: 1;
    //         padding: 20px;
    //     }

    //     .left-column {
    //         background-color: #f2f2f2;
    //     }

    //     .right-column {
    //         background-color: #e0e0e0;
    //     }

    //     h2 {
    //         margin-top: 0;
    //     }

    //     p {
    //         margin-bottom: 0;
    //     }
    // </style>

    // <div class="container">
    //     <div class="left-column">
    //         <h2>Left Column</h2>
    //         <p>This is the content of the left column.</p>
    //     </div>
    //     <div class="right-column">
    //         <h2>Right Column</h2>
    //         <p>This is the content of the right column.</p>
    //     </div>
    // </div>
    //         `,
    //     });
    //     editor.BlockManager.add('h1-block', {
    //         label: 'Heading',
    //         content: '<h1>Put your title here</h1>',
    //         category: 'Basic',
    //         attributes: {
    //             title: 'Insert h1 block'
    //         }
    //     });
    //     editor.BlockManager.add('resizable-image-input', {
    //         label: 'Resizable Image Input',
    //         content: `<div class="resizable-image-input">
    //                     <input type="file" id="file" name="file" accept="image/*">
    //                   </div>
    //                   <style>
    //                   .resizable-image-input': {
    //                     width: '100%',
    //                     height: 'auto',
    //                     border: '1px solid #ccc',
    //                     padding: '10px',
    //                     boxSizing: 'border-box',
    //                     resize: 'both', // Enable resizing
    //                     overflow: 'auto', // Allow overflow content
    //                 },
    //                 '#file': {
    //                     width: '100%',
    //                 }
    //                   </style>`,
    //         category: 'Basic',
    //         attributes: { class: 'fa fa-image' },

    //     });

    }, [])

    return (
        <div id="gjs"></div>
    );
}
export default WebBuilder;
