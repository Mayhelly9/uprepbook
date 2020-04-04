let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3723.JPG?v=1585186571282",
    name: "Mayhelly Vargas",
    quote: "Be the change you want to see in the world - Gandhi",
    superlative: "Best Personality"
  },
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3745.JPG?v=1585186586146",
    name: "Fatima",
    quote: "To lose patience is to lose the battle, and i won- Gandhi",
    superlative: "Best Friend"
  },
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3741.JPG?v=1585186726042",
    name: "James Greene",
    quote: "Rest at the end, not in the middle - Kobe",
    superlative: "Best Smile"
  },
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3742.PNG?v=1585186738770",
    name: "Gregory Gillet",
    quote: "Remember the name, Big G",
    superlative: "Best Dressed"
  },
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3743.JPG?v=1585186741403",
    name: "Vianka Elington",
    quote:
      "Dont ever let people get into your head. Make sure you try your best and be the best you can be",
    superlative: "Most Friendly"
  },
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3746.JPG?v=1585186764487",
    name: "Henly Lajara",
    quote: "UNDER CONSTRUCTION",
    superlative: "Most Outspoken"
  },
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3749.JPG?v=1585186754393",
    name: "Dashawn Green",
    quote: "I don't wish, I make things into a reality",
    superlative: "Best Photographer"
  },
  {
    profileImage:
      "https://cdn.glitch.com/9174c8b8-b284-42e8-bde2-e96b43792108%2FIMG_3747.PNG?v=1585186749028",
    name: "Djaliatou Barry",
    quote: "You love me b***h",
    superlative: "Most Innocent"
  }
];
let count = 0;
document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;
let lastStudent = students.length - 1;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  if (count > lastStudent) {
    count = 0;
  }
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  if (count < 0) {
    count = lastStudent;
  }
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =
    students[count].superlative;
});
let memeDiv = document.querySelector("#meme");
console.log(memeDiv);

memeDiv.addEventListener("click", () => {
  memeDiv.innerHTML =
    "<img src= 'https://i1.wp.com/politicallyincorrecthumor.com/wp-content/uploads/2020/03/congratulations-class-of-2020-virtual-reality-graduation.jpg?resize=500%2C576&ssl=1'/>";
});
