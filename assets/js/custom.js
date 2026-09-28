
/**
 * ===============================================
 * =============== Swiper Slider =================
 * ===============================================
 */

$(document).ready(function () {
  var noticeSwiper = new Swiper(".poplyn__notice-swiper", {
    direction: "vertical",
    slidesPerView: "1",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
  var heroSwiper = new Swiper(".poplyn__hero-swiper", {
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      }
    }
  });
  var categorySwiper = new Swiper(".poplyn__category-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        slidesPerView: 2.5,
       spaceBetween: 16,
      },
      576: {
        slidesPerView: 3.5,
        spaceBetween: 16,

      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 20,

      },
      1024: {
        slidesPerView: 5.5
      },
      1200: {
        slidesPerView: 7.8
      },
    }
  });
  var productSwiper = new Swiper(".poplyn__product-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.poplyn__next-bs',
      prevEl: '.poplyn__prev-bs',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 3,
       spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4
      },
    }
  });
  var testimonialSwiper = new Swiper(".poplyn__testimonial-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.poplyn__next-test',
      prevEl: '.poplyn__prev-test',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       spaceBetween: 16,
      },
         768: {
        slidesPerView: 2,
       spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3
      },
    }
  });
  var feedSwiper = new Swiper(".poplyn__feed-swiper", {
    spaceBetween: -20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.poplyn__next-feed',
      prevEl: '.poplyn__prev-feed',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5
      },
      576: {
        slidesPerView: 2.5
      },
        768: {
        slidesPerView: 3.5
      },
      1200: {
        slidesPerView: 5
      },
    }
  });

 var feedSwiper = new Swiper(".poplyn__multipleCta-swiper", {
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 1
      },
    }
  });


  var categorySwiper = new Swiper(".blog__releted-swiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       spaceBetween: 16,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 16,

      },
      1200: {
        slidesPerView: 3
      },
    }
  });

});

/**
 * ===============================================
 * =============== BADGE ROTATION =================
 * ===============================================
 */
$(document).ready(function () {
  $('.poplyn__product-single').each(function () {
    const $card = $(this);
    const $badges = $card.find('.poplyn__badge-list li');
    if ($badges.length <= 1) return;
    let current = 0;
    let interval;
    $badges.hide().eq(0).show();
    function startRotation() {
      interval = setInterval(function () {
        $badges.eq(current).fadeOut(300);
        current = (current + 1) % $badges.length;
        $badges.eq(current).fadeIn(300);
      }, 2000);
    }
    function stopRotation() {
      clearInterval(interval);
    }
    startRotation();
    $card.on('mouseenter', function () {
      stopRotation();
    });
    $card.on('mouseleave', function () {
      startRotation();
    });
  });
});
/**
 * ===============================================
 * ============== Fancybox Gallery ===============
 * ===============================================
 */
Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});


const minSlider = document.getElementById("priceMin");
const maxSlider = document.getElementById("priceMax");

const progress = document.querySelector(".poplyn__price-progress");

const minText = document.getElementById("minPrice");
const maxText = document.getElementById("maxPrice");

const gap = 100;

function updateSlider(){

    let min = parseInt(minSlider.value);
    let max = parseInt(maxSlider.value);

    if(max - min < gap){

        if(event.target === minSlider){
            minSlider.value = max - gap;
            min = max - gap;
        }else{
            maxSlider.value = min + gap;
            max = min + gap;
        }

    }

    minText.innerHTML = min;
    maxText.innerHTML = max;

    const minPercent = (min / minSlider.max) * 100;
    const maxPercent = (max / maxSlider.max) * 100;

    progress.style.left = minPercent + "%";
    progress.style.width = (maxPercent - minPercent) + "%";

}

minSlider.addEventListener("input", updateSlider);
maxSlider.addEventListener("input", updateSlider);

updateSlider();

function updateClearButtons() {

    $('.accordion-item').each(function () {

        const hasChecked = $(this)
            .find('input[type="checkbox"]:checked')
            .length > 0;

        $(this)
            .find('.poplyn__shop-sidebar-clear')
            .toggleClass('d-none', !hasChecked);

    });

}

$(document).on('change', '.accordion-item input[type="checkbox"]', function () {
    updateClearButtons();
});

$(document).on('click', '.poplyn__shop-sidebar-clear', function () {

    const target = $(this).data('target');

    $(target)
        .find('input[type="checkbox"]')
        .prop('checked', false)
        .trigger('change');

});

updateClearButtons();



$(document).ready(function () {
  const sizeButtons = document.querySelectorAll('.size-btn');
  const selectedSize = document.getElementById('selectedSize');
  
  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
  
      sizeButtons.forEach(btn => {
        btn.classList.remove('active');
      });
  
      button.classList.add('active');
      selectedSize.textContent = button.dataset.size;
    });
  });
});