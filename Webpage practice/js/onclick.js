let sections = document.querySelectorAll('[id^="section"]');

if (sections.length > 1) {
  let sectionOne = sections[0];
  sections.forEach((section) => {
    if (section !== sectionOne) { // Use strict comparison (===) here
      section.style.display = "none"; // Use vanilla JavaScript for setting the style
    }
  });
}

const display = (sectionId) => {
  makeRemainingScreensInvisible(sectionId);
  let section = document.getElementById(sectionId);
  section.style.display = "block"; // Use vanilla JavaScript for setting the style
  window.scrollTo(0, 0);
};

const makeRemainingScreensInvisible = (sectionId) => {
  let sections = document.querySelectorAll('[id^="section"]');
  sections.forEach((section) => {
    if (section.id !== sectionId) { // Use strict comparison (===) here
      section.style.display = "none"; // Use vanilla JavaScript for setting the style
    }
  });
};
