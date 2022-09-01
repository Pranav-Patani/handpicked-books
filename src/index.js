import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import svgBook from "../public/images/book.svg";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
//-----------------------------------------
//-----------------------------------------

function App() {
  const bookDictionary = {
    Romance: [
      {
        name: `Me Before You`,

        rating: `4/5`,

        imgFile: `images/me-before-you.jpeg`,

        imgAlt: `me-before-you`,

        link: `https://www.jojomoyes.com/books/me-before-you/`,

        infoPara1: `Lou Clark knows lots of things. She knows how many footsteps there are between the bus stop and home. She knows she likes working in The Buttered Bun tea shop and she knows she might not love her boyfriend Patrick.`,

        infoPara2: `What Lou doesn't know is she's about to lose her job or that knowing what's coming is what keeps her sane.`,

        infoPara3: `Will Traynor knows his motorcycle accident took away his desire to live. He knows everything feels very small and rather joyless now and he knows exactly how he's going to put a stop to that.`,

        infoPara4: `What Will doesn't know is that Lou is about to burst into his world in a riot of colour. And neither of them knows...`,
      },

      {
        name: `After Series`,

        rating: `4.5/5`,

        imgFile: `images/after.jpg`,

        imgAlt: `after`,

        link: `https://annatodd.com/books/after-2-2/`,

        infoPara1: `There was the time before Tessa met Hardin, and then there's everything AFTER... Life will never be the same. #Hessa`,

        infoPara2: `Tessa is a good girl with a sweet, reliable boyfriend back home. She's got direction, ambition, and a mother who's intent on keeping her that way.`,

        infoPara3: `But she's barely moved into her freshman dorm when she runs into Hardin. With his tousled brown hair, cocky British accent, and tattoos, Hardin is cute and different from what she's used to.`,

        infoPara4: `But he's also rude—to the point of cruelty, even. For all his attitude, Tessa should hate Hardin. And she does—until...`,
      },

      {
        name: `The Breathless Triology Series`,

        rating: `4/5`,

        imgFile: `images/rush.jpg`,

        imgAlt: `rush`,

        link: `https://mayabanks.com/series/breathless-trilogy/`,

        infoPara1: `This series follows three billionaires—Gabe Hamilton, Jace Crestwell and Ash McIntyre—who are best friends and business partners.`,

        infoPara2: `The men dominate both in the boardroom and in the bedroom. Each novel in the trilogy will explore the relationship of one of the men as he discovers the woman he will love.`,

        infoPara3: `The Breathless Trilogy is a marriage of author's Sweet Series and their Harlequin Desires.`,

        infoPara4: `Their closest book compares to Rush (Book 1 of this series) and the entire trilogy is Sweet Persuasion (reference to another series), which featured a very wealthy, very dominant hero and submissive...`,
      },

      {
        name: `The Fault In Our Stars`,

        rating: `4/5`,

        imgFile: `images/the-fault-in-our-stars.jpeg`,

        imgAlt: `the-fault-in-our-stars`,

        link: `https://www.johngreenbooks.com/the-fault-in-our-stars`,

        infoPara1: `Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis.`,

        infoPara2: `But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.`,

        infoPara3: `The Fault in Our Stars debuted at #1 on the New York Times bestseller list and was chosen as TIME Magazine's #1 Fiction Book of 2012.`,

        infoPara4: `The movie adaptation of The Fault in Our Stars was released in Summer 2014 starring Shailene Woodley, Ansel Elgort, and Nat Wolff, and directed...`,
      },
    ],

    Fiction: [
      {
        name: `Life Of Pi`,

        rating: `3.5/5`,

        imgFile: `images/life-of-pi.jpg`,

        imgAlt: `life-of-pi`,

        link: `https://www.goodreads.com/book/show/4214.Life_of_Pi`,

        infoPara1: `Life of Pi is a fantasy adventure novel by Yann Martel published in 2001.`,

        infoPara2: `The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age.`,

        infoPara3: `He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger...`,
      },

      {
        name: `Young Samurai Series`,

        rating: `4/5`,

        imgFile: `images/young-samurai.jpeg`,

        imgAlt: `young-samurai`,

        link: `https://www.chrisbradford.co.uk/young-samurai-series/1-the-way-of-the-warrior.html`,

        infoPara1: `Jack Fletcher is shipwrecked off the coast of Japan - his beloved father and the crew lie slaughtered by ninja pirates.`,

        infoPara2: `Rescued by the legendary sword master Masamoto Takeshi, Jack's only hope is to become a samurai warrior. And so his training begins...`,

        infoPara3: `But life at the samurai school is a constant fight for survival. Even with his friend Akiko by his side, Jack is singled out by bullies and treated as an outcast.`,

        infoPara4: `With courage in his heart and his sword held high, can Jack prove himself and face his deadliest rival yet?`,
      },
      {
        name: `Red, White and Royal Blue`,

        rating: `4.5/5`,

        imgFile: `images/red-white-and-royal-blue.jpg`,

        imgAlt: `red-white-and-royal-blue`,

        link: `https://www.caseymcquiston.com/red-white-royal-blue`,

        infoPara1: `First Son Alex Claremont-Diaz is the closest thing to a prince this side of the Atlantic. With his intrepid sister and the Veep's genius granddaughter, they're the White House Trio, a beautiful millennial marketing strategy for his mother, President Ellen Claremont.`,

        infoPara2: `International socialite duties do have downsides—namely, when photos of a confrontation with his longtime nemesis Prince Henry at a royal wedding leak to the tabloids and threaten American/British relations.`,

        infoPara3: `The plan for damage control: staging a fake friendship between the First Son and the Prince.`,

        infoPara4: `Alex is busy enough handling his mother's bloodthirsty opponents and his own political ambitions without...`,
      },
      {
        name: `This is how it always is`,

        rating: `3.5/5`,

        imgFile: `images/this-is-how-it-always-is.jpg`,

        imgAlt: `this-is-how-it-always-is`,

        link: `https://www.lauriefrankel.net/this-is-how-it-always-is.html`,

        infoPara1: `This is how a family keeps a secret...and how that secret ends up keeping them.`,

        infoPara2: `This is how a family lives happily ever after…until happily ever after becomes complicated. This is how children change…and then change the world.`,

        infoPara3: ` When Rosie and Penn and their four boys welcome the newest member of their family, no one is surprised it's another baby boy. But at least their large, loving, chaotic family knows what to expect.`,

        infoPara4: ` But Claude is not like his brothers. One day he puts on a dress and refuses to take it off. He wants...`,
      },
    ],

    Fantasy: [
      {
        name: `Skulduggery Pleasant Series`,

        rating: `5/5`,

        imgFile: `images/skulduggery-pleasant.jpg`,

        imgAlt: `skulduggery-pleasant`,

        link: `https://www.skulduggerypleasant.co.uk/book/skulduggery-pleasant/`,

        infoPara1: `She's twelve. He's dead. But together they're going to save the world. Hopefully.`,

        infoPara2: `The iconic first book in the bestselling Skulduggery Pleasant series.`,

        infoPara3: `Stephanie's uncle Gordon is a writer of horror fiction. But when he dies and leaves her his estate, Stephanie learns that while he may have written horror it certainly wasn't fiction. `,

        infoPara4: `Pursued by evil forces, Stephanie finds help from an unusual source - the wisecracking skeleton of a dead sorcerer…`,
      },

      {
        name: `Demon Road Series`,

        rating: `4/5`,

        imgFile: `images/demon-road.webp`,

        imgAlt: `demon-road`,

        link: `https://skulduggery.fandom.com/wiki/Demon_Road_(series)`,

        infoPara1: `The series follows a 16 year old girl named Amber who discovers she is a demon and has the ability to transform into an enhanced monster like state.`,

        infoPara2: `It follows her as she is chased across the US by her parents (who are demons as well. )who want to eat her and then later...`,
      },
      {
        name: `Heartless`,

        rating: `4.5/5`,

        imgFile: `images/heartless.jpg`,

        imgAlt: `heartless`,

        link: `https://www.marissameyer.com/heartless/`,

        infoPara1: `Long before she was the terror of Wonderland — the infamous Queen of Hearts — she was just a girl who wanted to fall in love.`,

        infoPara2: `Catherine may be one of the most adored girls in Wonderland, and a favorite of the yet-unmarried King of Hearts, but her interests lie elsewhere. A talented baker, all she wants is to open a shop with her best friend and supply the Kingdom of Hearts with delectable pastries and confections.`,

        infoPara3: `But according to her mother, such a goal is unthinkable for the young woman who could be the next Queen.`,

        infoPara4: `At a royal ball where Cath is expected to receive the king's marriage proposal, she meets Jest, the handsome and mysterious court joker... `,
      },
      {
        name: `The Iron King`,

        rating: `4/5`,

        imgFile: `images/the-iron-king.jpg`,

        imgAlt: `the-iron-king`,

        link: `http://juliekagawa.com/?page_id=130`,

        infoPara1: `Meghan Chase has a secret destiny—one she could never have imagined…`,

        infoPara2: `Something has always felt slightly off in Meghan's life, ever since her father disappeared before her eyes when she was six. She has never quite fit in at school…or at home.`,

        infoPara3: `When a dark stranger begins watching her from afar and her prankster best friend becomes strangely protective of her, Meghan senses that everything she's known is about to change. But she could never have guessed the truth.`,

        infoPara4: `For Meghan is the daughter of a mythical faery king…and a pawn in a deadly war. Now Meghan will...`,
      },
    ],

    Thriller: [
      {
        name: `The Soul Breaker`,

        rating: `4/5`,

        imgFile: `images/the-soul-breaker.jpg`,

        imgAlt: `the-soul-breaker`,

        link: `https://www.goodreads.com/book/show/57111216-the-soul-breaker`,

        infoPara1: `The Soul Breaker destroys his victims.`,

        infoPara2: `He doesn't kill them, or mutilate them. But he leaves them completely dead inside, paralysed and catatonic. His only trace a note left in their hands.`,

        infoPara3: `There are three known victims when suddenly the abductions stop. The Soul Breaker has tired of his game, it seems.`,

        infoPara4: `Meanwhile, a man has been found in the snow outside an exclusive psychiatric clinic. He has no recollection of who he is, or why he is there. Unable to match him to any of the police's missing people, the nurses call him Casper...`,
      },

      {
        name: `The Turn Of The Key`,

        rating: `3.5/5`,

        imgFile: `images/the-turn-of-the-key.jpg`,

        imgAlt: `the-turn-of-the-key`,

        link: `https://ruthware.com/books/the-turn-of-the-key/`,

        infoPara1: `Their dream house will become her worst nightmare…`,

        infoPara2: `When she stumbles across the advert, she' looking for something else completely. But it seems like too good an opportunity to miss: a live-in nanny position, with a staggeringly generous salary.`,

        infoPara3: `And when Rowan arrives at Heatherbrae House, she is smitten by the luxurious 'smart' home fitted out with all modern conveniences, by the beautiful Scottish Highlands, and by this picture-perfect family.`,

        infoPara4: `What she doesn't know is that she's stepping into a nightmare - one that will end with a child dead and her in a cell awaiting trial for murder...`,
      },

      {
        name: `No Exit`,

        rating: `3/5`,

        imgFile: `images/no-exit.jpg`,

        imgAlt: `no-exit`,

        link: `https://tayloradamsauthor.com/books/`,

        infoPara1: `A brilliant, edgy thriller about four strangers, a blizzard, a kidnapped child, and a determined young woman desperate to unmask and outwit a vicious psychopath.`,

        infoPara2: `A kidnapped little girl locked in a stranger's van. No help for miles. What would you do?`,

        infoPara3: `On her way to Utah to see her dying mother, college student Darby Thorne gets caught in a fierce blizzard in the mountains of Colorado. With the roads impassable, she's forced to wait out the storm at a remote highway rest stop. Inside are some vending machines, a coffee maker, and four complete strangers.`,

        infoPara4: `Desperate to find a signal to call home, Darby goes back out into the storm...`,
      },

      {
        name: `Verity`,

        rating: `4.5/5`,

        imgFile: `images/verity.jpg`,

        imgAlt: `verity`,

        link: `https://www.colleenhoover.com/portfolio/verity/`,

        infoPara1: `Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish.`,

        infoPara2: `Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started.`,

        infoPara3: `What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read.`,

        infoPara4: `Page after page of bone-chilling admissions, including Verity's recollection of...`,
      },
    ],
  };

  const genres = Object.keys(bookDictionary);

  let [currentGenre, setGenre] = useState(`Romance`);

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <div className="heading">
        <img className="svg-book" src={svgBook} alt="book" />
        <h1>Handpicked Books</h1>
      </div>
      <div className="book-library">
        <div className="library-navigation">
          <div className="button-container">
            <p>You can select your preffered genre from below</p>
            {genres.map((genre) => {
              return (
                <button
                  key={genre}
                  className="buttons"
                  onClick={() => genreClickHandler(genre)}
                >
                  {genre}
                </button>
              );
            })}
          </div>
        </div>

        <div className="book-recommendations">
          {bookDictionary[currentGenre].map((books) => {
            return (
              <li key={books.name} className="book-card">
                <div className="book-flex">
                  <a href={books.link} target="_blank_">
                    <img
                      className="book-image"
                      src={books.imgFile}
                      alt={books.imgAlt}
                    />
                  </a>
                  <div className="book-info-paras">
                    <p className="book-info">{books.infoPara1}</p>
                    <p className="book-info">{books.infoPara2}</p>
                    <p className="book-info">{books.infoPara3}</p>
                    <p className="book-info">{books.infoPara4}</p>
                    <a
                      className="book-know-more"
                      href={books.link}
                      target="blank"
                    >
                      Know More
                    </a>
                  </div>
                </div>

                <div style={{ fontSize: "1.8rem", margin: "0.4rem 0" }}>
                  {books.name}
                </div>
                <div style={{ fontSize: "1rem", margin: "0.4rem 0" }}>
                  Rating: {books.rating}
                </div>
              </li>
            );
          })}
        </div>
      </div>

      <footer className="footer">
        <h3>About</h3>
        <p>
          Welcome to the Handpicked Books. This is a web-app that recommend
          books according to the chosen genre. If you love reading books, you
          should definetly give these books a try.
        </p>
        <p>Happy Reading!</p>
      </footer>
    </div>
  );
}

//-------------------
//-------------------
root.render(<App />);
