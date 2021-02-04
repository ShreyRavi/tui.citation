// citationPlugin
/**
 * @description a Toast UI plugin to render citations
 */
function citationPlugin() {
    function getArrayOfCitations() {
        let result = [];
        var citations = $(editor.getHtml()).find("code");
        console.log($('#editor').text());
        const regex = '/^{cite.*}$/gm';
        for (let r = 0; r < citations.length; r++) {
            if ($(citations[r]).attr("data-backticks") === '1') {
                try {
                    console.log(citations[r].innerText);
                    console.log(citations[r].innerText.match(regex));
                    result.push(JSON.parse(citations[r].innerText));
                } catch(e) {
                    continue;
                }
            }
        }
        /*
        for (let r = 0; r < citations.length; r++) {
            if ($(citations[r]).attr("data-language") === 'cite') {
                try {
                    result.push(JSON.parse(citations[r].innerText));
                } catch(e) {
                    continue;
                }
            }
        }*/
        return result;
    }
    function renderCitation(citationWrapperId, citationText, citationId) {
        if (!citationText || !citationId) {
            return;
        }
        const citations = getArrayOfCitations();
        console.log(citations);
        console.log(citationText);
        console.log(citationId);
        const citationNumber = citations.findIndex(citation => citation.id === citationId && citation.text === citationText) + 1;

        const el = document.querySelector(`#${citationWrapperId}`);
        el.innerHTML = `<p>${citationText}<sup>${citationNumber}</sup></p>`;
    }
    function renderBibliography(biblioWrapperId) {
        const citations = getArrayOfCitations();
        const el = document.querySelector(`#${biblioWrapperId}`);
        el.innerHTML = `<ol>${citations.map(citation => `<li>${citation.text}</li>`).join('')}</ol>`;
    }

    // citation
    Editor.codeBlockManager.setReplacer('cite', citeData => {
        try {
            data = JSON.parse(citeData);
            const citationWrapperId = `cite${Math.random()
                .toString(36)
                .substr(2, 10)}`;
            setTimeout(renderCitation.bind(null, citationWrapperId, data['text'], data['id']), 0);
            // citations = [];
            
            return `<p id="${citationWrapperId}"></p>`;
        } catch(e) {
            return `<div></div>`;
        }
    });

    // bibliography
    Editor.codeBlockManager.setReplacer('bibliography', bibliographyData => {
        const biblioWrapperId = `biblio${Math.random()
            .toString(36)
            .substr(2, 10)}`;
        setTimeout(renderBibliography.bind(null, biblioWrapperId), 0);
        return `<div id="${biblioWrapperId}"></div>`;
    });
}