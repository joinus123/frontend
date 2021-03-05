let sectionAnimationDelay = 600;

const getMultipleElementsByQuery = query => document.querySelectorAll(query);
const getElementByQuery = query => document.querySelector(query);

const section9Animation = () => {
  const paragraphs = getMultipleElementsByQuery(".last-sec-p");

  const dottedLines = getMultipleElementsByQuery(".last_section_icon_st0");

  setTimeout(() => {
    paragraphs.forEach(para => {
      para.style.opacity = 1;
      para.style.transform = "translate(0vw, 0vh)";
    });
    dottedLines.forEach(line => {
      line.classList.add("hideStroke");
      setTimeout(() => {
        line.classList.remove("hideStroke");
        line.classList.add("showStroke");
        line.classList.add("animateLinesLower");
      }, 100);
    });
  }, 500);
};

const section8Animation = () => {
  const shadowHeading = getElementByQuery(".sec-8-right-text h2");
  const mainHeading = getElementByQuery(".sec-8-right-text h3");
  const paragraphs = getMultipleElementsByQuery(".sec-8-right-text p");

  setTimeout(() => {
    shadowHeading.style.opacity = 1;
    shadowHeading.style.transform = "scale(1)";

    mainHeading.style.opacity = 1;
    mainHeading.style.transform = "scale(1)";
  }, 500);

  setTimeout(() => {
    paragraphs.forEach(para => {
      para.style.opacity = 1;
    });
  }, 1000);
};

const section7Animation = () => {
  const dottedLines = getMultipleElementsByQuery(".uppersection_icon_st0");

  setTimeout(() => {
    dottedLines.forEach(line => {
      line.classList.add("hideStroke");
      setTimeout(() => {
        line.classList.remove("hideStroke");
        line.classList.add("showStroke");
        line.classList.add("animateLinesUpper");
      }, 100);
    });
  }, 500);
};

const section6Animation = () => {
  const shadowHeading = getElementByQuery(".sec-6-right-text h2");
  const mainHeading = getElementByQuery(".sec-6-right-text h3");
  const Tree = getElementByQuery(".section-6-tree");
  const paragraphs = getMultipleElementsByQuery(".sec-6-right-text p");

  setTimeout(() => {
    shadowHeading.style.transform = "translate(0vw, 0vh)";
    mainHeading.style.transform = "translate(0vw, 0vh)";
    Tree.classList.remove("hideTree");
  }, 500);

  setTimeout(() => {
    paragraphs.forEach(para => {
      para.style.opacity = 1;
      para.style.transform = "translate(0vw, 0vh)";
    });
  }, 2000);
};

const section5Animation = () => {
  const shadowHeading = getElementByQuery(".sec-5-left-box h2");
  const mainHeading = getElementByQuery(".sec-5-left-box h3");
  const paragraphs = getMultipleElementsByQuery(".sec-5-left-box p");
  const string = "CARE";

  setTimeout(() => {
    shadowHeading.style.display = "block";
    mainHeading.style.display = "block";
    addLetter();
  }, 1000);

  let count = 0;
  const addLetter = () => {
    count++;
    shadowHeading.innerHTML = string.substring(0, count);
    mainHeading.innerHTML = string.substring(0, count);
    if (count < 4) {
      setTimeout(() => {
        addLetter();
      }, 500);
    }
  };

  setTimeout(() => {
    paragraphs.forEach(para => {
      para.style.opacity = 1;
      para.style.transform = "translate(0vw, 0vh)";
    });
  }, 2500);
};

const section4Animation = () => {
  const shadowHeading = getElementByQuery(".sec-4-right-text h2");
  shadowHeading.style.transform = "translate(0vw, 0vh)";

  const mainHeading = getElementByQuery(".sec-4-right-text h3");
  mainHeading.style.transform = "translate(0vw, 0vh)";

  setTimeout(() => {
    const paragraphs = getMultipleElementsByQuery(".sec-4-right-text p");
    paragraphs.forEach(para => {
      para.style.transform = "translate(0vw, 0vh)";
      para.style.opacity = 1;
    });
  }, 500);
};

const section3Animation = () => {
  const section3BigHeading = getElementByQuery(".sec-3-left-text h2");
  const section3SmallHeading = getElementByQuery(".sec-3-left-text h3");
  const section3Paragraphs = getMultipleElementsByQuery(".sec-3-left-text p");

  const boxItem1 = getElementByQuery("#boxItem1");
  const boxItem2 = getElementByQuery("#boxItem2");
  const boxItem3 = getElementByQuery("#boxItem3");
  const plantImage = getElementByQuery("#plantImg");

  setTimeout(() => {
    boxItem3.classList.remove("boxItem3Translate");
    setTimeout(() => {
      boxItem2.classList.remove("boxItem2Translate");
      setTimeout(() => {
        boxItem1.classList.remove("boxItem1Translate");
        setTimeout(() => {
          plantImage.classList.remove("plantTranslate");
        }, 500);
      }, 500);
    }, 500);
  }, 500);

  setTimeout(() => {
    section3BigHeading.style.transform = "scale(1)";
  }, 500);

  setTimeout(() => {
    section3SmallHeading.style.transform = "translate(0vw, 0vh)";
  }, 500);

  section3Paragraphs.forEach(para => {
    setTimeout(() => {
      para.style.opacity = 1;
      para.style.transform = "translate(0vw, 0vh)";
    }, 500);
  });
};

const section2Animation = () => {
  const sec2BigHeading = getElementByQuery(".sec-2-right-text h2");
  const sec2SmallHeading = getElementByQuery(".sec-2-right-text h3");
  const sec2Paragraph = getElementByQuery(".sec-2-right-text p");
  const dottedLineOuter = getElementByQuery(".center_st1");
  const dottedLinesInner = getMultipleElementsByQuery(".center_st0");

  sec2BigHeading.style.transform = "translate(0vw, 0vh)";
  setTimeout(() => {
    sec2SmallHeading.style.transform = "translate(0vw, 0vh)";
    setTimeout(() => {
      dottedLineOuter.classList.remove("hideStroke");
      dottedLineOuter.classList.add("showStrokeColored");
      dottedLineOuter.classList.add("animateLinesSecondSectionOuter");
    }, 100);

    dottedLinesInner.forEach(line => {
      line.classList.add("hideStroke");
      setTimeout(() => {
        line.classList.remove("hideStroke");
        line.classList.add("showStrokeColored");
        line.classList.add("animateLinesSecondSectionInner");
      }, 100);
    });
    setTimeout(() => {
      dottedLineOuter.classList.add("hideStroke");
    }, 500);

    setTimeout(() => {
      sec2Paragraph.style.opacity = 1;
    }, 1000);
  }, 1000);
};

const section1Animation = () => {
  const mainHeading = getElementByQuery(".banner-text h1");
  const subHeading = getElementByQuery(".banner-text h2");

  mainHeading.style.transform = "translate(0vw, 0vh)";
  subHeading.style.transform = "translate(0vw, 0vh)";

  initLeafs();
};

const initLeafs = () => {
  const leaf1 = getElementByQuery("#leaf1");
  const leaf2 = getElementByQuery("#leaf2");
  const leaf3 = getElementByQuery("#leaf3");
  const leaf4 = getElementByQuery("#leaf4");
  const leaf5 = getElementByQuery("#leaf5");
  const leaf6 = getElementByQuery("#leaf6");

  leaf1.setAttribute("stroke-dasharray", leaf1.getTotalLength());
  leaf2.setAttribute("stroke-dasharray", leaf2.getTotalLength());
  leaf3.setAttribute("stroke-dasharray", leaf3.getTotalLength());
  leaf4.setAttribute("stroke-dasharray", leaf4.getTotalLength());
  leaf5.setAttribute("stroke-dasharray", leaf5.getTotalLength());
  leaf6.setAttribute("stroke-dasharray", leaf6.getTotalLength());

  leaf1.setAttribute("stroke-dashoffset", leaf1.getTotalLength());
  leaf2.setAttribute("stroke-dashoffset", leaf2.getTotalLength());
  leaf3.setAttribute("stroke-dashoffset", leaf3.getTotalLength());
  leaf4.setAttribute("stroke-dashoffset", leaf4.getTotalLength());
  leaf5.setAttribute("stroke-dashoffset", leaf5.getTotalLength());
  leaf6.setAttribute("stroke-dashoffset", leaf6.getTotalLength());

  animateLeafs();
};

const animateLeafs = () => {
  if (getElementByQuery("#leaf1").getAttribute("stroke-dashoffset") > 0) {
    fillLeaf("#leaf1");
  } else if (
    getElementByQuery("#leaf3").getAttribute("stroke-dashoffset") > 0
  ) {
    fillLeaf("#leaf3");
  } else if (
    getElementByQuery("#leaf5").getAttribute("stroke-dashoffset") > 0
  ) {
    fillLeaf("#leaf5");
  }
};

const fillLeaf = leafId => {
  let nextLeafId = "#leaf" + (Number(leafId.substring(leafId.length - 1)) + 1);
  let offset = getElementByQuery(leafId).getAttribute("stroke-dashoffset");
  if (offset - 5 > 0) {
    offset = offset - 5;
    getElementByQuery(leafId).setAttribute("stroke-dashoffset", offset);
    getElementByQuery(nextLeafId).setAttribute(
      "stroke-dashoffset",
      getElementByQuery(nextLeafId).getAttribute("stroke-dasharray") * 2 -
        offset
    );
    setTimeout(() => {
      fillLeaf(leafId);
    }, 7.5);
  } else if (offset < 5) {
    offset = 0;
    getElementByQuery(leafId).setAttribute("stroke-dashoffset", offset);
    getElementByQuery(nextLeafId).setAttribute(
      "stroke-dashoffset",
      getElementByQuery(nextLeafId).getAttribute("stroke-dasharray") * 2 -
        offset
    );
    if (leafId === "#leaf5") {
      setTimeout(() => {
        getElementByQuery(".leafSVG").classList.add("grow", "op-0");
        setTimeout(() => {
          initLeafs();
          getElementByQuery(".leafSVG").classList.remove("op-0", "grow");
        }, 500);
      }, 200);
    } else {
      animateLeafs();
    }
  }
};

/*
const fillLeaf = leafId => {
  let offset = getElementByQuery(leafId).getAttribute("stroke-dashoffset");
  if (offset - 5 > 0) {
    offset = offset - 5;
    getElementByQuery(leafId).setAttribute("stroke-dashoffset", offset);
    getElementByQuery(
      `#leaf${Number(leafId.substring(leafId.length - 1)) + 1}`
    ).setAttribute("stroke-dashoffset", offset);
    setTimeout(() => {
      fillLeaf(leafId);
    }, 5);
  } else if (offset < 5) {
    offset = 0;
    getElementByQuery(leafId).setAttribute("stroke-dashoffset", offset);
    if (leafId === "#leaf5") {
      setTimeout(() => {
        getElementByQuery(".leafSVG").classList.add("grow", "op-0");
        setTimeout(() => {
          initLeafs();
          getElementByQuery(".leafSVG").classList.remove("op-0", "grow");
        }, 500);
      }, 200);
    } else {
      animateLeafs();
    }
  }
};
*/

const animateSection = (sectionNumber, isFirstLoad = false) => {
  let delay = sectionAnimationDelay;
  if (isFirstLoad) {
    delay = 0;
  }
  switch (sectionNumber) {
    case "1":
      setTimeout(() => {
        section1Animation();
      }, delay);
      break;

    case "2":
      setTimeout(() => {
        section2Animation();
      }, delay);
      break;

    case "3":
      setTimeout(() => {
        section3Animation();
      }, delay);
      break;
    case "4":
      setTimeout(() => {
        section4Animation();
      }, delay);
      break;
    case "5":
      setTimeout(() => {
        section5Animation();
      }, delay);
      break;
    case "6":
      setTimeout(() => {
        section6Animation();
      }, delay);
      break;
    case "7":
      setTimeout(() => {
        section7Animation();
      }, delay);
      break;
    case "8":
      setTimeout(() => {
        section8Animation();
      }, delay);
      break;
    case "9":
      setTimeout(() => {
        section9Animation();
      }, delay);
      break;
    default:
      break;
  }
};

let lastSection =
  window.location.href.split("#").length > 1
    ? window.location.href.split("#")[1].length
      ? window.location.href.split("#")[1]
      : "section1"
    : "section1";

const getSectionNumber = sectionString =>
  sectionString.substring(sectionString.length - 1, sectionString.length);

const animateFloatingLeaf = () => {
  const floatingLeaf = getElementByQuery("#floatingLeaf");
  const sectionId =
    window.location.href.split("#").length > 1
      ? window.location.href.split("#")[1].length
        ? window.location.href.split("#")[1]
        : "section1"
      : "section1";

  const sectionNumber = getSectionNumber(sectionId);
  switch (sectionNumber) {
    case "1":
      floatingLeaf.classList.value = "leafSection1PositionEnter";
      break;
    case "2":
      floatingLeaf.classList.value = "leafSection2PositionEnter";
      break;
    case "3":
      floatingLeaf.classList.value = "leafSection3PositionEnter";
      break;
    case "4":
      floatingLeaf.classList.value = "leafSection4PositionEnter";
      break;
    case "5":
      floatingLeaf.classList.value = "leafSection5PositionEnter";
      break;
    case "6":
      floatingLeaf.classList.value = "leafSection6PositionEnter";
      break;
    case "7":
      floatingLeaf.classList.value = "leafSection7PositionEnter";
      break;
    case "8":
      floatingLeaf.classList.value = "leafSection8PositionEnter";
      break;
    case "9":
      floatingLeaf.classList.value = "leafSection9PositionEnter";
      break;
    default:
      break;
  }
};

const listenToScroll = () => {
  let thisSection = window.location.href.split("#")[1];
  animateFloatingLeaf();
  if (
    lastSection.length &&
    getSectionNumber(thisSection) > getSectionNumber(lastSection)
  ) {
    lastSection = window.location.href.split("#")[1];
    animateSection(getSectionNumber(lastSection));
  }
};

const sectionNumber = getSectionNumber(lastSection);
setTimeout(() => {
  for (let i = 1; i <= sectionNumber; i++) {
    animateSection(String(i), true);
  }
}, 250);

const detectKeyPress = e => {
  if (e.code == "ArrowDown" || e.code == "ArrowUp") {
    setTimeout(() => {
      listenToScroll();
    }, 200);
  }
};

const addListenerToNav = () => {
  document.querySelectorAll("#fp-nav ul li a").forEach(
    item =>
      (item.onclick = () => {
        setTimeout(() => {
          listenToScroll();
        }, 200);
      })
  );
};

window.onload = () => {
  addListenerToNav();
  animateFloatingLeaf();
  window.addEventListener("wheel", listenToScroll);
  window.addEventListener("keyup", detectKeyPress);
};
