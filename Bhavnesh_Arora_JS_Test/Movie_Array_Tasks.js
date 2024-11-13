const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    details: [
      { chapter: "Introduction", pages: 20 },
      { chapter: "Chapter 1", pages: 65 },
    ],
  },
  {
    title: "Rocking Stone",
    author: "Harper Lee",
    rating: 4.9,
    details: [
      { chapter: "Introduction", pages: 20 },
      { chapter: "Chapter 7", pages: 45 },
    ],
  },
  {
    title: "Investor Harvey",
    author: "Harvey King",
    rating: 4.8,
    details: [
      { chapter: "Story", pages: 20 },
      { chapter: "Chapter 5", pages: 85 },
    ],
  },
  {
    title: "Good Habit",
    author: "Nick Jonas",
    rating: 4.6,
    details: [
      { chapter: "Introduction", pages: 50 },
      { chapter: "Chapter 5", pages: 25 },
    ],
  },
];

// - Write a function to return the book title and the chapter with the maximum pages.

function bookTitleWithMaxPagesChapter(books) {
  let bookTitleMaxPagesChapter = { title: "", maxPages: 0 };

  books.forEach((book) => {
    let longestPages=book.details.reduce((longest,detail)=>{
        let currentPages=detail.pages;
        return currentPages>longest?currentPages:longest
    },0)

    if(longestPages>bookTitleMaxPagesChapter.maxPages){
        bookTitleMaxPagesChapter = { title: book.title, maxPages: longestPages }
    }
  });
  return bookTitleMaxPagesChapter;
}
console.log(bookTitleWithMaxPagesChapter(books));
// - Return a list of unique authors.

function uniqueAuthors(books) {
  const allAuthors = books.map((book) => book.author);
  return [...new Set(allAuthors)];
}

console.log(uniqueAuthors(books));
