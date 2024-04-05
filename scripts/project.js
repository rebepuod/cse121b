
//King James (Authorised) Version - de4e12af7f28f599-02
// /v1/bibles/{bibleId}/verses/{verseId}
// https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/verses/${verseId}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false

const bibleId = "de4e12af7f28f599-02";
// const content = `https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${chapterId}`;

const section = document.getElementById("all");

async function getData(link) {
    const response = await fetch(link, {
        method: "GET",
        headers: {
        "api-key": "d9e7b50e0b488a789ad735052d270a6d",
        }
    });
    if (response.ok){
    const data = await response.json();

    return data;
    }
}

async function displayBooks() {
    const books = `https://api.scripture.api.bible/v1/bibles/${bibleId}/books`;
    const booksResponse = await getData(books);
    const booksData = booksResponse.data;
    
    let booksDisplayed = booksData.map(book => {
        return `<a id = ${book.id}>${book.name}</a><br/>`;
    });
    
    section.innerHTML = booksDisplayed.join("");

    section.addEventListener("click",(e) => {
        const bookIds = e.target.id;
        //https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/DEU/chapters
        let chapters = `https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookIds}/chapters`;
        reset();
        // console.log(bookIds);
        displayChapters(chapters);
    });

}

async function displayChapters(link) {
    const chaptersResponse = await getData(link);
    const chaptersList= chaptersResponse.data;
    // console.log(chaptersList)
    let chaptersDisplay = chaptersList.map(chapter => {
        return `<a id = ${chapter.id}>${chapter.number}</a><br/>`;
     })
     section.innerHTML = chaptersDisplay.join("");

     section.addEventListener("click",(e) => {
        const chapterIds = e.target.id;
        const versicle = `https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/chapters/${chapterIds}?content-type=html&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=true`;
        // const versicle = `https://api.scripture.api.bible/v1/bibles/${bibleId}/chapters/${chapterIds}`;
        reset();
        
        displayVersicles(versicle);
    })
}

async function displayVersicles(link) {
    const versiclesResponse = await getData(link);
    const versiclesList = versiclesResponse.data.content;
    console.log(versiclesList)
    let versiclesDisplay = versiclesList;
    section.innerHTML = `${versiclesDisplay}`;

}

function reset() {
    section.innerHTML = "";
}

displayBooks();