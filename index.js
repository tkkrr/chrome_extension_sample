var inputer = document.createElement("input");
inputer.value = "hoge";
inputer.type = "text"
inputer.classList.add("bufferInputer");
inputer.addEventListener("change", (e) => {
    const phrase = e.target.value
    e.target.value = ""
    const searchBox = document.querySelector("input[title='検索']")
    const searchForm = document.querySelector("form[action='/search']")
    searchBox.value = phrase
    searchForm.submit()
})

document.body.appendChild(inputer);