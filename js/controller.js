const controller = event => {
  const activeSection = document.querySelector('[data-active="active"]')
  const targetButton = event.target.closest('.menu-btn')

  activeSection.remove()

  if (targetButton.classList.contains('active-button')) {
    renderMain()
  }

  if (!targetButton.classList.contains('active-button')) {
    if (targetButton === profileButton) openProfile()
    if (targetButton === wishlistButton) openWishlist()
    if (targetButton === bagButton) openBag()
  }

  !targetButton.classList.contains('active-button')
    ? targetButton.classList.add('active-button')
    : targetButton.classList.remove('active-button')

  headerButtonsArray.forEach(button => {
    targetButton !== button && button.classList.contains('active-button')
      ? button.classList.remove('active-button')
      : 0
  })
}

headerButtonsArray.forEach(button =>
  button.addEventListener('click', controller)
)

function openProfile() {
  const renderSection = `
   <main class="profile" id='profile' data-active="active">PROFILE</main>
  `
  header.insertAdjacentHTML('afterend', renderSection)
}

function openWishlist() {
  const renderSection = `
   <main class="wishlist" id='wishlist' data-active="active">WISHLIST</main>
  `
  header.insertAdjacentHTML('afterend', renderSection)
}

function openBag() {
  const renderSection = `
   <main class="bag" id='bag' data-active="active">BAG</main>
  `
  header.insertAdjacentHTML('afterend', renderSection)
}
