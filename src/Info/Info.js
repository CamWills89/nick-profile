import React from "react";
import self from "../img/self.png";

export let colors = ["rgb(185, 85, 211)", "rgb(247, 10, 7)"];

export const info = {
  firstName: "Nick",
  lastName: "Oliveira",
  initials: "Nick_Oliveira",
  position: "Freelance Videographer",
  selfPortrait: self,
  gradient: `linear-gradient(135deg, ${colors})`,
  miniBio: [
    ["🇺🇸", "Atlanta, Georgia"],
    ["💼", "Cinematographer, editor, artist"],
    ["✉️", "ngoliveira25@gmail.com"],
  ],
  socials: [
    ["https://www.facebook.com/nick.oliveira.161", facebookIcon()],
    ["https://www.instagram.com/nicholas_oliveira/?hl=en", instagramIcon()],
    [
      "https://www.youtube.com/channel/UCDXtabhCqaTKi4nd1VVsb8g/videos",
      youtubeIcon(),
    ],
  ],
  bio: `
I am Toronto born, an Atlanta based director, cinematographer, editor, and artist with over ten years of experience. Combining my love for films and visual art, I have developed a truly unique storytelling style. I can produce a wide variety of media, including concerts, business events, product advertisements, short films, and more!`,
};

function facebookIcon() {
  return <i className="fa fa-facebook" aria-hidden="true" />;
}

function instagramIcon() {
  return <i className="fa fa-instagram" aria-hidden="true" />;
}

function youtubeIcon() {
  return <i className="fa fa-youtube" aria-hidden="true" />;
}
