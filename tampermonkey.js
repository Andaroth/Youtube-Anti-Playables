// ==UserScript==
// @name         Youtube Anti-Playables
// @namespace    https://anda.ninja/
// @version      1.0.3
// @description  Automatically kills the "Youtube Playables" box
// @author       Axel Andaroth
// @match        https://www.youtube.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAC1JREFUWEft0EERAAAAAUH6lxbDZxU4s815PffjAAECBAgQIECAAAECBAgQIDAaPwAh6O5R/QAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log('Youtube Anti-Playables by Axel Andaroth')
    setInterval(function() {
        const box = Array.from(document.querySelectorAll('ytd-rich-shelf-renderer')).find(box => {
            for (let expr of [
                // add new content inside double quotes, followed by a comma:
                "youtube playables",
                "jeux intégrés"
            ]) { if ((box.innerHTML || "").toString().toLowerCase().includes((expr || "").toString().toLowerCase())) return true }
            return false
        })
        if (!!box && box.querySelector('button.ytSpecButtonShapeNextHost')) { box.querySelector('button.ytSpecButtonShapeNextHost').click(); box.remove() }
    },1000)
})();
