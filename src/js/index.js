// citationPlugin
/**
 * @description a Toast UI plugin to render citations
 */
function citationPlugin() {
    const regex = new RegExp('^{cite.*}$', 'gm');
    function getArrayOfCitations() {
        let result = [];
        var citations = $(editor.getHtml()).find("code");
        for (let r = 0; r < citations.length; r++) {
            if (($(citations[r]).attr("data-backticks") === '1') 
            && (citations[r].innerText.match(regex)) !== null) {
                try {
                    const newCitation = JSON.parse(citations[r].innerText.replace('{cite', '').slice(0, -1));
                    if (!(Object.keys(newCitation).length === 0 && newCitation.constructor === Object)) {
                        result.push(newCitation);
                    }
                } catch(e) {
                    continue;
                }
            }
        }
        return result;
    }

    function renderCitations() {
        let count = 0;
        const md = editor.getMarkdown();
        editor.setMarkdown(md.replace(/[^>]`\{cite[^}]+\}\}`/g, (match) => {
            count += 1;
            return `<span class="citation">${match}></span><sup>${count}</sup>`;
        }));
    }

    function renderBibliography(biblioWrapperId) {
        const citations = getArrayOfCitations();
        const el = document.querySelector(`#${biblioWrapperId}`);
        el.innerHTML = `<ol>${citations.map(citation => `<li>'${citation.title}' ${citation.author}, ${citation.year}. doi: ${citation.doi}</li>`).join('')}</ol>`;
        renderCitations();
        renderCitations = () => {};
    }

    Editor.codeBlockManager.setReplacer('bibliography', bibliographyOptions => {
        const biblioWrapperId = `biblio${Math.random()
            .toString(36)
            .substr(2, 10)}`;
        setTimeout(renderBibliography.bind(null, biblioWrapperId), 0);
        return `<div id="${biblioWrapperId}"></div>`;
    });
}