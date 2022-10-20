// ハンバーガーメニュー
jQuery('.drawer-icon, .drawer-background').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



// スムーススクロール
//constでヘッダーを取得しておく
const header = $('#header');

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  const gap = header.outerHeight();
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top - gap;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );
  return false;
});




  // swiper
  const swiper = new Swiper(".swiper",  {
    speed: 400,
    spaceBetween: 20,
    width: 274,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
				spaceBetween: 40,
				width: 400,
      }
    },

  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // クリック有効化
  },
});





// アコーディオン

jQuery('.qa__box__q').on('click', function(){
  jQuery(this).addClass('-active');
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa__box__icon').toggleClass('is-open');
});

// トップに戻る
$(function() {
    const pageTop = $('#totop');
    pageTop.hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 80) {
            pageTop.fadeIn(300);
        }else {
            pageTop.fadeOut(300);
        }
    });
    pageTop.click(function() {
        $('body, html').animate({ scrollTop: 0}, 500);
        return false;
    })
});


// form
let $form = $( '#js-form' )
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp()
        $( '#js-success' ).slideDown()
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $form.slideUp()
        $( '#js-error' ).slideDown()
      }
    } 
  });
  return false; 
}); 
  

let $submit = $('#js-submit')
$('#js-form input, #js-form textarea, #js-form select').on('change', function() {
  if(
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form select').val() !== "" &&
    $('#js-form input[name="entry.1619972976"]').prop('checked') === true
  ) {
    $submit.prop('disabled', false)
    $submit.addClass('-active')
  } else {
    $submit.prop('disabled', true)
    $submit.removeClass('-active')
  }
});

