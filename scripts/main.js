const detail_Image_Selector = '[data-image-role="target"]',
      detail_Title_Selector = '[data-image-role="title"]',
      detail_Frame_Selector = '[data-image-role="frame"]',
      thumbnail_Link_Selector = '[data-image-role="trigger"]',
      hidden_Detail_Class = 'hidden-detail',
      tiny_effect_class = 'is-tiny',
      esc_Key = 27;

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(detail_Image_Selector);
  detailImage.setAttribute('src', imageUrl);
  var detailTitle = document.querySelector(detail_Title_Selector);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(thumbnail_Link_Selector);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

function hideDetails() {
  'use strict';
  document.body.classList.add(hidden_Detail_Class);
}

function showDetails() {
  'use strict';
  var frame = document.querySelector(detail_Frame_Selector);
  document.body.classList.remove(hidden_Detail_Class);
  frame.classList.add(tiny_effect_class);
  setTimeout(function() {
    frame.classList.remove(tiny_effect_class);
  }, 50);
}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === esc_Key) {
      hideDetails();
    }
  });
}

initializeEvents();
