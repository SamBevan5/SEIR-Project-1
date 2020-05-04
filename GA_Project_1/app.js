
const $button = $(`.button`);

// animate the buttons
$button.on(`click`, (event) => {
    const $element = $(event.currentTarget);
    const separatedLetter = $element.text().trim();
    setTimeout(() => {
        $element.css(`background-color`, `#DCDCDC`)
        $element.css(`box-shadow`, "0 0 2px 2px inset")
        $element.css(`font-size`, "1.3rem")
    }, 0);
    setTimeout(() => {
        $element.css(`background-color`, `white`)
        $element.css(`box-shadow`, "0 0 2px 2px")
        $element.css(`font-size`, "1.5rem")
    }, 200);
    setTimeout(() => {
        $element.css(`background-color`, `#B22222`)
        $element.css(`box-shadow`, "0 0 2px 2px")
        $element.empty();
        $element.text(separatedLetter);
    }, 300);


});