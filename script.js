const BLOCKS_SLIDE_DELTA = 340;
let blockShowedIndex = 0;

window.onload = function() {
    setInterval(
        function() {
            slideBlocks(true);
        },
        3000,
    );
};

function slideBlocks(forward) {
    const blockListElement = document.getElementById('block-list');
    const blocksChildLength = blockListElement.children.length;
    blockShowedIndex = forward
        ? (blockShowedIndex + 1) % blocksChildLength
        : !blockShowedIndex
            ? blocksChildLength - 1
            : blockShowedIndex - 1;

    blockListElement.style.left = `${blockShowedIndex * (-BLOCKS_SLIDE_DELTA)}px`;
}

function addParagraph() {
    const someBlock = document.getElementById('some-block');
    const paragraphNode = document.createElement('p');
    paragraphNode.innerText = 'Some paragraph added!';
    someBlock.append(paragraphNode);
}
