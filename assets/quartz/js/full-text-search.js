; (async function() {
  const encoder = (str) => str.toLowerCase().split(/([^a-z]|[^\x00-\x7F])/)
  const contentIndex = new FlexSearch.Document({
    cache: true,
    charset: "latin:extra",
    optimize: true,
    index: [
      {
        field: "content",
        tokenize: "reverse",
        encode: encoder,
      },
      {
        field: "title",
        tokenize: "forward",
        encode: encoder,
      },
    ],
  })

  const { content } = await fetchData
  for (const [key, value] of Object.entries(content)) {
    contentIndex.add({
      id: key,
      title: value.title,
      content: removeMarkdown(value.content),
    })
  }

  const formatForDisplay = (id) => ({
    id,
    url: id,
    title: content[id].title,
    content: content[id].content,
  })

  registerHandlers((e) => {
    const term = e.target.value
    const searchResults = contentIndex.search(term, [
      {
        field: "content",
        limit: 10,
      },
      {
        field: "title",
        limit: 5,
      },
    ])
    const getByField = (field) => {
      const results = searchResults.filter((x) => x.field === field)
      if (results.length === 0) {
        return []
      } else {
        return [...results[0].result]
      }
    }
    const allIds = new Set([...getByField("title"), ...getByField("content")])
    const finalResults = [...allIds].map(formatForDisplay)
    displayResults(term, finalResults, true)
  })
})();
function switchTheme2(e) {
    console.log("Changing modes...");
    
    if (e.target.checked) {
        darkmode();
    } else {
        lightmode();
    }
}


function darkmode() {
    adsfas = document.getElementsByClassName("danger")
        for (i = 0; i < adsfas.length; i++) {
      adsfas[i].style.backgroundColor = "rgba(0, 137, 0, 0.3)";
    }
    
    adsfas2 = document.getElementsByTagName("code")
    for (i = 0; i < adsfas2.length; i++) {
      adsfas2[i].style.backgroundColor = "rgb(43, 39, 94)";
    }
    
    adsfas3 = document.getElementsByTagName("rect")
    for (i = 0; i < adsfas3.length; i++) {
      adsfas3[i].style.fill = "rgb(10, 30, 10)";
    }
    
    adsfas4 = document.getElementsByClassName("nodeLabel")
        for (i = 0; i < adsfas4.length; i++) {
      adsfas4[i].style.color = "white";
    }
    
    document.querySelector(".book-menu-content").style.backgroundColor = "rgb(27,26,26)";
    document.querySelector("body > header").style.backgroundColor = "rgb(40,38,64)";
}
function lightmode() {
    adsfas = document.getElementsByClassName("danger")
    for (i = 0; i < adsfas.length; i++) {
      adsfas[i].style.backgroundColor = "rgba(0, 137, 0, 0.3)";
    }
    
    adsfas2 = document.getElementsByTagName("code")
    for (i = 0; i < adsfas2.length; i++) {
      adsfas2[i].style.backgroundColor = "rgb(222,214,197)";
    }
    
    adsfas3 = document.getElementsByTagName("rect")
    for (i = 0; i < adsfas3.length; i++) {
      adsfas3[i].style.fill = "rgb(236, 236, 255)";
    }
    
    adsfas4 = document.getElementsByClassName("nodeLabel")
        for (i = 0; i < adsfas4.length; i++) {
      adsfas4[i].style.color = "black";
    }
    document.querySelector(".book-menu-content").style.backgroundColor = "rgb(251,248,238)";
    document.querySelector("body > header").style.backgroundColor = "rgb(46,141,83)";
}


document.querySelector("#darkmode-toggle").addEventListener("change", switchTheme2);
document.querySelector("body > header").style.position = "fixed";
if (document.querySelector("#darkmode-toggle").checked) {
    darkmode();
} else {
    lightmode();
}
