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

        rating: `3/5`,

        imgFile: `images/me-before-you.jpeg`,

        link: `https://www.jojomoyes.com/books/me-before-you/`,

        infoPara1: `Lou Clark knows lots of things. She knows how many footsteps there are between the bus stop and home. She knows she likes working in The Buttered Bun tea shop and she knows she might not love her boyfriend Patrick.`,

        infoPara2: `What Lou doesn't know is she's about to lose her job or that knowing what's coming is what keeps her sane.`,

        infoPara3: `Will Traynor knows his motorcycle accident took away his desire to live. He knows everything feels very small and rather joyless now and he knows exactly how he's going to put a stop to that.`,

        infoPara4: `What Will doesn't know is that Lou is about to burst into his world in a riot of colour. And neither of them knows...`,
      },

      {
        name: `After Series`,

        rating: `3/5`,

        imgFile: `images/after.jpg`,

        link: `https://annatodd.com/books/after-2-2/`,

        infoPara1: `There was the time before Tessa met Hardin, and then there's everything AFTER... Life will never be the same. #Hessa`,

        infoPara2: `Tessa is a good girl with a sweet, reliable boyfriend back home. She's got direction, ambition, and a mother who's intent on keeping her that way.`,

        infoPara3: `But she's barely moved into her freshman dorm when she runs into Hardin. With his tousled brown hair, cocky British accent, and tattoos, Hardin is cute and different from what she's used to.`,

        infoPara4: `But he's also rude—to the point of cruelty, even. For all his attitude, Tessa should hate Hardin. And she does—until...`,
      },

      {
        name: `The Breathless Triology Series`,

        rating: `3/5`,

        imgFile: `images/rush.jpg`,

        link: `https://mayabanks.com/series/breathless-trilogy/`,

        infoPara1: `This series follows three billionaires—Gabe Hamilton, Jace Crestwell and Ash McIntyre—who are best friends and business partners.`,

        infoPara2: `The men dominate both in the boardroom and in the bedroom. Each novel in the trilogy will explore the relationship of one of the men as he discovers the woman he will love.`,

        infoPara3: `The Breathless Trilogy is a marriage of author's Sweet Series and their Harlequin Desires.`,

        infoPara4: `Their closest book compares to Rush (Book 1 of this series) and the entire trilogy is Sweet Persuasion (reference to another series), which featured a very wealthy, very dominant hero and submissive...`,
      },

      {
        name: `The Fault In Our Stars`,

        rating: `3/5`,

        imgFile: `images/the-fault-in-our-stars.jpeg`,

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

        rating: `3/5`,

        imgFile: `images/life-of-pi.jpg`,

        link: `https://www.goodreads.com/book/show/4214.Life_of_Pi`,

        infoPara1: `Life of Pi is a fantasy adventure novel by Yann Martel published in 2001.`,

        infoPara2: `The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age.`,

        infoPara3: `He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger...`,
      },

      {
        name: `Demon Road Series`,

        rating: `3/5`,

        imgFile: `images/demon-road.webp`,

        link: `https://skulduggery.fandom.com/wiki/Demon_Road_(series)`,

        infoPara1: `The series follows a 16 year old girl named Amber who discovers she is a demon and has the ability to transform into an enhanced monster like state.`,

        infoPara2: ` It follows her as she is chased across the US by her parents (who are demons as well. )who want to eat her and then later...`,
      },
    ],

    Fantasy: [
      {
        name: `Skulduggery Pleasant Series`,

        rating: `3/5`,

        imgFile: `images/skulduggery-pleasant.jpg`,

        link: `https://www.skulduggerypleasant.co.uk/book/skulduggery-pleasant/`,

        infoPara1: `She's twelve. He's dead. But together they're going to save the world. Hopefully.`,

        infoPara2: `The iconic first book in the bestselling Skulduggery Pleasant series.`,

        infoPara3: `Stephanie's uncle Gordon is a writer of horror fiction. But when he dies and leaves her his estate, Stephanie learns that while he may have written horror it certainly wasn't fiction. `,

        infoPara4: `Pursued by evil forces, Stephanie finds help from an unusual source - the wisecracking skeleton of a dead sorcerer…`,
      },

      {
        name: `Young Samurai Series`,

        rating: `3/5`,

        imgFile: `images/young-samurai.jpeg`,

        link: `https://www.chrisbradford.co.uk/young-samurai-series/1-the-way-of-the-warrior.html`,

        infoPara1: `Jack Fletcher is shipwrecked off the coast of Japan - his beloved father and the crew lie slaughtered by ninja pirates.`,

        infoPara2: `Rescued by the legendary sword master Masamoto Takeshi, Jack's only hope is to become a samurai warrior. And so his training begins...`,

        infoPara3: `But life at the samurai school is a constant fight for survival. Even with his friend Akiko by his side, Jack is singled out by bullies and treated as an outcast. `,

        infoPara4: `With courage in his heart and his sword held high, can Jack prove himself and face his deadliest rival yet?`,
      },
    ],

    Thriller: [
      {
        name: `The Soul Breaker`,

        rating: `3/5`,

        imgFile: `images/the-soul-breaker.jpg`,

        link: `https://www.goodreads.com/book/show/57111216-the-soul-breaker`,

        infoPara1: `The Soul Breaker destroys his victims.`,

        infoPara2: `He doesn't kill them, or mutilate them. But he leaves them completely dead inside, paralysed and catatonic. His only trace a note left in their hands.`,

        infoPara3: `There are three known victims when suddenly the abductions stop. The Soul Breaker has tired of his game, it seems.`,

        infoPara4: `Meanwhile, a man has been found in the snow outside an exclusive psychiatric clinic. He has no recollection of who he is, or why he is there. Unable to match him to any of the police's missing people, the nurses call him Casper...`,
      },
    ],
  };

  const genres = Object.keys(bookDictionary);

  let [currentGenre, setGenre] = useState(`Thriller`);

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
          <p className="nav-heading">
            You can select your preffered genre from below
          </p>
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

        <div className="book-recommendations">
          {bookDictionary[currentGenre].map((books) => {
            return (
              <li key={books.name} className="book-card">
                <div className="book-flex">
                  <a href={books.link} target="blank">
                    <img className="book-image" src={books.imgFile} />
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
    </div>
  );
}

//-------------------
//-------------------
root.render(<App />);
