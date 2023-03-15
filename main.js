//Grabbing all components I need from DOM
const imgs = document.getElementsByTagName("img")
const btns = document.querySelectorAll(".btn")

const allBtn = document.querySelector(".all-btn")
const headphonesBtn = document.querySelector(".headphones-btn")
const keyboardsBtn = document.querySelector(".keyboards-btn")
const lightsBtn = document.querySelector(".lights-btn")



//Add filter click event to the dog button by matching comparing id if statement
headphonesBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].id != headphonesBtn.id) {
      imgs[i].style.display = 'none'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})


//Added click event to caribbean filter button
lightsBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].id != lightsBtn.id) {
      imgs[i].style.display = 'none'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})



//Now this one
keyboardsBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].id != keyboardsBtn.id) {
      imgs[i].style.display = 'none'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})

//And this one too
allBtn.addEventListener("click", () => {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display == 'none') {
      imgs[i].style.display = 'block'
    } else {
      imgs[i].style.display = 'block'
    }
  }
})


//active state for the tabs
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    removeStateAll();
    btn.classList.add("active")
  })
})






function removeStateAll() {
  btns.forEach(btn => {
    btn.classList.remove("active")
  })
}
