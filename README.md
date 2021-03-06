# [tui.citation](https://shreyravi.github.io/tui.citation/)
A bibliography and citation custom plugin for Toast UI. Render citations and a bibliography in real-time! 
To test, clone repo and run `npm install && npm start`.
<p align="center"><img src="https://github.com/ShreyRavi/tui.citation/raw/main/screenshot.png" height="93%" width="93%"></img>Screenshot of the demo of tui.citation Toast-UI Plugin.</p>

## How to Run

1. Clone repository (`gh repo clone ShreyRavi/tui.citation` with Github CLI)

2. Run `npm install` inside repository directory

3. Run `npm start` inside repository directory

4. Navigate to `http://localhost:3000/` (usually)

## Instructions

Use the 'C' button on the toolbar to open a citation insertion selection modal to add a desired citation from list.

Use the 'B' button on the toolbar to insert a bibliography automatically at the end of the document.

## WIP Disclaimer

The repository is meant to be a showcase and is not a final, finished product. Data is pre-filled to simulate real-world use cases and certain functionality is not completed.

## File Structure
### Primary Files
- `src/EditorExample.js` - contains main React for example
- `src/CiteModal.js` - contains React modal for selection of a citation
- `src/tuiCitation.js` - contains ToastUI plugin code
- `src/App.test.js` - will contain unit tests _still in progress_
### Other Files
- `screenshot.png` - a screenshot of the plugin in action
- `README.md` - self-explanatory
- `LICENSE` - MIT License

## License
MIT License. Open Source.
