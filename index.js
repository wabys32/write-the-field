var maxLetters = 1000
var textField = document.getElementById("textField");
var letters = document.getElementById("letters");
var topic = document.getElementById("topic");
textField.setAttribute("maxlength", maxLetters)

var list = [['Another', 'Moreover', 'And then', 'Similarly', 'Also', 'In addition', 'like wise', 'As well as', 'Besides', 'Furthermove', 'Besides this', 'In the same way', 'Not only ... but also'],
            ['After this', 'Then', 'At this point', 'Earlier', 'Later', 'To begin with', 'Initially', 'Following this', 'Another advantage', 'One reason', 'Another reason', 'A further reason', 'The final reason'],
            ['Eventually', 'So', 'Then', 'In that case', 'Thus', 'Consequently', 'Thereby', 'Therefore', 'As a result', 'Admittedly', 'it follows that'],
            ['However', 'On the other hand', 'Despite', 'In spite of', 'In contrast', 'Alternatively', 'Although', 'On the contrary', 'Instead of', 'Rather', 'Whereas', 'Nonetheless', 'Even though'],
            ['Obviously', 'Certainly', 'Plainly', 'Of course', 'Undoubtedly'],
            ['Since', 'Because', 'Due to', 'Owing to', 'Leads to', 'Cause of', 'In order to'],
            ['If', 'Unless', 'Whether', 'Provided that', 'Depending on'],
            ['In conclusion', 'In summary', 'Lastly', 'Finally', 'To sum up', 'To conclude', 'To recapitulate', 'In short']]
function linkingWord(ind){
    document.getElementById("hint").innerHTML = list[ind][Math.floor(Math.random() * list[ind].length)];
}

function change(){
    var lettersAmount = textField.value.length
    letters.innerHTML = lettersAmount+" / "+maxLetters;
    if(lettersAmount == maxLetters){
        letters.innerHTML = "0 / "+maxLetters;
        textField.value = ""
        generateWord()
    }
}

function generateWord(){
    fetch("book.txt")
        .then(response => response.text())
        .then(data => {
            let words = [];
            words = data.split(" ");
            topic.innerHTML = words[Math.floor(Math.random() * words.length)];
        })
        .catch(error => {
            //asd
});
}
generateWord()