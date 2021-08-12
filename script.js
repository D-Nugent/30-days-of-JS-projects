// Element Selectors Start
const videoEl = document.querySelector('video');
const projectModals = document.querySelectorAll('.project');

// Element Selectors End

// Element Event Listeners Start
videoEl.addEventListener('mouseenter',toggleVideoControls)
videoEl.addEventListener('mouseleave',toggleVideoControls)
projectModals.forEach(modal => modal.addEventListener('click',toggleExpand))
// Element Event Listeners End

// Functions Start
function toggleVideoControls(){
  this.hasAttribute('controls')?this.removeAttribute('controls'):this.setAttribute('controls','')
}
function toggleExpand(){
  console.log('expand ran');
  this.classList.toggle('--active');
  let modalVid = this.querySelector('video');
  modalVid.hasAttribute('controls')?modalVid.removeAttribute('controls'):modalVid.setAttribute('controls','')
}
// Functions End