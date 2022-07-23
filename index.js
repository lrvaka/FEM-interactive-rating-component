let rating = "1"

const body = document.body

const app = () => {
  const ratingList = body.querySelector(".rating-list")
  const ratingNodes = body.querySelectorAll(".rating-item")
  const submitBtn = body.querySelector(".rating-submit-btn")
  const ratingScreen = body.querySelector(".rating-screen")
  const thankYouScreen = body.querySelector(".thank-you-screen")
  const thankYouMsg = body.querySelector(".thank-you-selected")

  ratingList.addEventListener("click", (e) => {
    const target = e.target.closest(".rating-item")
    if (!target) return

    if (rating) {
      ratingNodes.forEach((e) => {
        if (rating == e.getAttribute("data-rating")) {
          e.classList.remove("selected")
        }
      })
    }

    target.classList.add("selected")
    rating = target.getAttribute("data-rating")
  })

  submitBtn.addEventListener("click", (e) => {
    console.log(rating)
    ratingScreen.style.display = "none"
    thankYouScreen.style.display = "flex"
    thankYouMsg.textContent = `You selected ${rating} out of 5`
  })
}

app()
