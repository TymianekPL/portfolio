function openTab(evt, tabName) {
     window.location.href = `#${tabName}`;
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(`${tabName}-page`).style.display = "block";
     evt.currentTarget.className += " active";
}

{
     const links = document.getElementsByTagName("*");
     for (const key in links) {
          if (Object.hasOwnProperty.call(links, key)) {
               const link = links[key];
               if (!link.getAttribute("href")) continue;
               link.addEventListener("click", () => {
                    window.location.href = link.getAttribute("href");
               });
          }
     }
}
if (window.location.hash)
     try {
          document.getElementById(`${window.location.hash}`).click();
     } catch {
          document.getElementById(`default`).click();
     }
else document.getElementById(`default`).click();

const showSnackbar = (content, style = "") => {
     var x = document.getElementById("snackbar");
     x.className = "show";
     x.innerHTML = content;
     x.style = style;
     setTimeout(function () {
          x.className = x.className.replace("show", "");
     }, 3000);
}