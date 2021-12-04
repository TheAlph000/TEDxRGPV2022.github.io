let header = document.getElementById("event-header");
let overlay = document.getElementsByClassName("overlay");
let headerFoot = document.getElementsByClassName("header_foot");
let headerHeight = 0;
let faceImage = document.getElementsByClassName("face-image");
let faceProp = document.getElementsByClassName("face-prop");
let eventHeading = document.getElementsByClassName("event_heading");
let eventInfo = document.getElementsByClassName("event_info");
let ham = document.getElementsByClassName("ham");
let sideNav = document.getElementsByClassName("sidenav");

console.log(header);

window.onload = function () {
  // overlay[0].style.height = header.clientHeight + 25 + "px";

  // ham[0].style.marginLeft =
  //   -sideNav[0].clientWidth / 2 + ham[0].clientWidth / 2 + "px";

  if (window.innerWidth < 500) {
    faceImage[0].style.top = eventHeading[0].offsetTop + 60 + "px";
  } else if (window.innerWidth >= 500 && window.innerWidth < 768) {
    faceImage[0].style.top =
      eventHeading[0].offsetTop - 0.05 * window.innerWidth + "px";
    faceImage[0].style.right = "10px";
    eventInfo[0].style.fontSize = "1rem";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    faceImage[0].style.top =
      eventHeading[0].offsetTop - 0.02 * window.innerHeight + "px";
  } else {
    faceImage[0].style.top = "3rem";
  }

  //   faceImage[0].style.top = header.clientHeight + "px";
  //   faceImage[0].style.transform = `translate(-20vw, -${
  //     faceProp[0].clientHeight + 80
  //   }px)`;
  //   faceImage[0].style.display = "inline-block";
  // } else if (window.innerWidth >= 1200) {
  //   faceImage[0].style.top = header.clientHeight + "px";
  //   faceImage[0].style.transform = `translate(-50%, -${faceProp[0].clientHeight}px)`;
  // }
};

// window.onresize = function () {
//   overlay[0].style.height = header.clientHeight + 25 + "px";

//   if (window.innerWidth >= 768 && window.innerWidth < 1200) {
//     faceImage[0].style.top = header.clientHeight + "px";
//     faceImage[0].style.transform = `translate(-15vw, -${
//       faceProp[0].clientHeight + 80
//     }px)`;
//   } else if (window.innerWidth >= 1200) {
//     faceImage[0].style.top = header.clientHeight + "px";
//     faceImage[0].style.transform = `translate(-50%, -${faceProp[0].clientHeight}px)`;
//   }
// };
