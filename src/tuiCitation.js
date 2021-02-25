// tuiCitation user-defined Toast plugin
import ToastEditor from '@toast-ui/editor';

//helper methods
function renderCitations() {
    let count = 0;
    const md = ToastEditor.getMarkdown();
    ToastEditor.setMarkdown(md.replace(/[^>]`\{cite[^}]+\}\}`/g, (match) => {
        count += 1;
        return `<span class="citation">${match}></span><sup>${count}</sup>`;
    }));
}

function renderBibliography(biblioWrapperId, citations) {
    if(!citations) {
        alert('citations not loaded');
        return;
    }
    const el = document.querySelector(`#${biblioWrapperId}`);
    el.innerHTML = `<h3>Bibliography</h3><ol>${citations.map(citation => `<li>'${citation.title}' ${citation.author}, ${citation.year}. </li>`).join('')}</ol>`;
}

/**
 * tuiCitationPlugin
 * @param {Editor|Viewer} editor - instance of Editor or Viewer from Toast UI
 * @param {Object} options - options for plugin (WIP)
 */
export default function tuiCitationPlugin(options) {
    const { citations, insertedCitations } = options;
    ToastEditor.codeBlockManager.setReplacer('bibliography', bibliographyOptions => {
        const biblioWrapperId = `biblio${Math.random()
            .toString(36)
            .substr(2, 10)}`;
        setTimeout(renderBibliography.bind(null, biblioWrapperId, citations), 0);
        return `<div id="${biblioWrapperId}"></div>`;
    });
}