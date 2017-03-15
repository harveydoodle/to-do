/* FEEDBACK: 
1) Everything is working as it should. 
2) Nice job fixing the issue with the seach function.
3) Only gripe now is that it would be better if you emptied the div with the journal entries and then rendered
the entries that match the search. From a user standpoint, it's messy the way you're journal currently renders searched entries.
It will make render more than one version of an entry on the screen.
- Thuy
*/ 

function journalEntry(title, content, author, tag) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.tag = tag;
}

function journal() {
    this.emptyJournal = [];
    this.insertEntry = function(title, content, author, tag) { //'entry' allows HarveysJournal.insertEntry to work
        let newEntry = new journalEntry(title, content, author, tag);
        this.emptyJournal.push(newEntry);
    }
}

let HarveysJournal = new journal();
console.log(HarveysJournal);

moveInputOut = function(title, content, author, tag) { // puts info in div
    let entry = [];
    entry.push('<li class="bg"><h2 class="title">' + title + '</h2>' 
    + '<span class="content">' + content + '</span><br/>' 
    + '<span class="author">' + author + '</span><br/>' 
    + '<span class="tag">' + eachTag +'</span><br/><br/></li>');

    document.getElementById('entries').innerHTML += entry;
}

$('#clickme').click(function() {
    let title = document.getElementById("textarea-align-title").value;
    let content = document.getElementById("textarea-align-content").value;
    content = content.replace(/\r?\n/g, '<br/>');
    let author = document.getElementById("textarea-align-author").value;
    let tag = document.getElementById("textarea-align-tag").value;
    eachTag = tag.split(',');
    $("#textarea-align-title").val("");
    $("#textarea-align-content").val("");
    $("#textarea-align-author").val("");
    $("#textarea-align-tag").val("");
    
    HarveysJournal.insertEntry(title, content, author, tag);
    // console.log(HarveysJournal);
    moveInputOut(title, content, author, tag);
    // console.log(eachTag)
})

$('#searchbtn').click(function() {

    filteredList = [];
    let searchWord = document.getElementById("searchtag").value;
    for (let i = 0; i < HarveysJournal.emptyJournal.length; i++) {
    tagarray = HarveysJournal.emptyJournal[i].tag.split(', ');
        for (let j = 0; j < tagarray.length; j++) {
            if (tagarray[j] == searchWord) {
                filteredList.push('<li class="bg"><h2 class="title-search">' + HarveysJournal.emptyJournal[i].title + '</h2>' 
                    + '<span class="content">' + HarveysJournal.emptyJournal[i].content + '</span><br/>' 
                    + '<span class="author">' + HarveysJournal.emptyJournal[i].author + '</span><br/>' 
                    + '<span class="tag">' + HarveysJournal.emptyJournal[i].tag +'</span><br/><br/></li>');

            }
        } 
    }
    document.getElementById('filteredEntries').innerHTML += filteredList;
    // console.log(filteredList);
    $("#searchbtn").val("");
    $("#entries").val("");
 })
 