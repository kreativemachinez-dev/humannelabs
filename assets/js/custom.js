
// single product details 
(function ($) {
  function initLabsProduct() {
    var $main = $("#labsMainProductImage");
    var $thumbs = $(".labs__product-thumb");
    var $cards = $(".labs__quantity-card");
    var $message = $(".labs__quantity-text");
    if (!$main.length) return;
    function changeImage(src) {
      if (!src) return;
      $main.css("opacity", "0");
      $main.off("load error").on("load error", function () {
        $(this).css("opacity", "1");
      });
      $main.attr("src", src);
    }
    $thumbs.on("click", function () {
      var $this = $(this);
      changeImage($this.data("image"));
      $thumbs.removeClass("active");
      $this.addClass("active");
    });
    $cards.on("click", function () {
      var $this = $(this);
      changeImage($this.data("image"));
      $cards.removeClass("active");
      $this.addClass("active");
      var name = $.trim(
        $this.find(".labs__quantity-name").text()
      ).toLowerCase();
      $message.toggleClass("show", name === "single");
    });
    var $active = $cards.filter(".active");
    var activeName = $.trim(
      $active.find(".labs__quantity-name").text()
    ).toLowerCase();
    if (activeName === "single") {
      $message.addClass("show");
    }
  }
  $(function () {
    initLabsProduct();
  });
})(jQuery);
// single product details close

// Form Select Color

$(".humanlabs-contact-form .form-select").on("change", function () {
  if (this.selectedIndex > 0) {
    $(this).css("color", "#1E1E1E");
  } else {
    $(this).css("color", "#8B847B");
  }
});

// Form Select Color


