const setButton = document.getElementById('beautify-btn');
const originalInput = document.getElementById('original-json');
const beautifiedJson = document.getElementById('beautified-json');

setButton.addEventListener('click', () => {
    try{
        const original = originalInput.innerText;
        let beautified = JSON.parse(original);
        let beautifiedJsonStr = JSON.stringify(beautified, null, 2);
        let replacedToHTML = beautifiedJsonStr.replaceAll(" ", '&nbsp;')
            .replaceAll("\n", "<br/>");
        replacedToHTML = "<span>".concat(replacedToHTML).concat("<span/>");
        console.log(replacedToHTML);
        beautifiedJson.innerHTML = replacedToHTML;
    }catch (e){
        console.log(e);
    }
})