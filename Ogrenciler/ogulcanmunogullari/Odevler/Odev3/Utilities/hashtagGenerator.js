function hashtagGenerator(blogs) {
 var hashtags = new Set();

 blogs.forEach(function (blog) {
  var wordList = blog.text.split(' ');

  wordList.forEach(function (word) {
   if (word.startsWith('#')) {
    hashtags.add(word);
   }
  });
 });
 return Array.from(hashtags);
}
export default hashtagGenerator;
