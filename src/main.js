const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".gallery .image")

const previewBox = document.querySelector(".preview-box")
const categoryName = previewBox.querySelector(".title p")
const previewImg = previewBox.querySelector("img")
const closeIcon = previewBox.querySelector(".icon")
const shadow = previewBox.querySelector(".shadow")



const preview  = (element) => {
    document.querySelector('body').style.overflow = 'hidden'

    let selectedPrevImg =  element.querySelector("img").src;
} 