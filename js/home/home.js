
var home = function() {
	return [
	  '<div id="homeContent">',
      '<div class="homeBanner">',
        '<div class="homeBannerImg"><img src="images/homeBanner.png" alt=""></div>',
        '<div class="homeBannerText">',
          '<div>',
            '<div class="homeBannerText_box">',
              '<h2 class="i18n" i18n-text="homeBannerTitle"></h2>',
              '<p class="i18n" i18n-text="homeBannerText"></p>',
              '<div class="phoneLoad">',
                '<div class="left iOSLoad">',
                  '<div class="phoneText">',
                    '<span class="left">iOS</span>',
                    '<b class="right"></b>',
                  '</div>',
                  '<div class="homeLookQr">',
                    '<img src="images/qrCode.png">',
                  '</div>',
                '</div>',
                '<div class="left androidLoad">',
                  '<div class="phoneText">',
                    '<span class="left">Android</span>',
                    '<b class="right"></b>',
                  '</div>',
                  '<div class="homeLookQr">',
                    '<img src="images/qrCode.png">',
                  '</div>',
                '</div>',
              '</div>',
            '</div>',
          '</div>',
        '</div>',
      '</div>',
      '<div id="homeMain">',
          '<div class="homeNav">',
            '<div class="homeNavBox">',
              '<div>',
              '<div data-id="selfCircleBox" class="left itemHomeNav hoveNavActive">',
                '<span class="i18n" i18n-text="selfCircle"></span>',
              '</div>',
              '<div data-id="selfCarClub" class="left itemHomeNav">',
                '<span class="i18n" i18n-text="selfCarClub"></span>',
              '</div>',
              '<div data-id="recruitCarClub" class="left itemHomeNav">',
                '<span class="i18n" i18n-text="carClubRecruit"></span>',
              '</div>',
              '</div>',
            '</div>',
          '</div>',
          '<div id="homeContentBox"></div>',
      '</div>',
    '</div> '
	].join('')
}

var selfCircleBox = function() {
  return [
    '<div id="selfCircleBox">',
             '<h3 class="topTitle i18n" i18n-text="selfCircleTitle01"></h3>',
              '<div class="phoneInRight">',
                '<div class="phoneContentCut">',
                  '<div class="phoneContentBox showGroup01">',
                    '<div class="itemPhoneContent">',
                      '<span>01</span>',
                      '<div class="left">',
                        '<h4 class="i18n" i18n-text="selfCircleSmall01"></h4>',
                        '<span class="i18n" i18n-text="selfCircleSmallText01"></span>',
                      '</div>',
                    '</div>',
                   '<div class="itemPhoneContent">',
                      '<span>02</span>',
                      '<div class="left">',
                        '<h4 class="i18n" i18n-text="selfCircleSmall02"></h4>',
                        '<span class="i18n" i18n-text="selfCircleSmallText02"></span>',
                      '</div>',
                    '</div>',
                    '<div class="itemPhoneContent">',
                      '<span>03</span>',
                      '<div class="left">',
                        '<h4 class="i18n" i18n-text="selfCircleSmall03"></h4>',
                        '<span class="i18n" i18n-text="selfCircleSmallText03"></span>',
                      '</div>',
                    '</div>',
                  '</div>',
                '</div>',
                '<div class="phoneBox">',
                  '<div class="swiper-container group01 swiper-no-swiping">',
                    '<div class="phoneBoxList swiper-wrapper">',
                      '<div class="itemShowImg swiper-slide">',
                        '<img src="images/hot_img.png" alt="">',
                      '</div>',
                      '<div class="itemShowImg swiper-slide">',
                        '<img src="images/attention_img.png" alt="">',
                      '</div>',
                      '<div class="itemShowImg swiper-slide">',
                        '<img src="images/small_video.png" alt="">',
                      '</div>',
                    '</div>',
                  '</div>',
                '</div>',
              '</div>',

              '<div class="phoneInLeft">',
                '<div class="phoneBox">',
                  '<div class="swiper-container group02 swiper-no-swiping">',
                    '<div class="phoneBoxList swiper-wrapper">',
                      '<div class="itemShowImg swiper-slide">',
                        '<img src="images/recommend_img.png" alt="">',
                      '</div>',
                      '<div class="itemShowImg swiper-slide">',
                        '<img src="images/to_self_drive.png" alt="">',
                      '</div>',
                      '<div class="itemShowImg swiper-slide">',
                        '<img src="images/car_club.png" alt="">',
                      '</div>',
                    '</div>',
                  '</div>',
                '</div>',
                '<div class="phoneContentCut">',
                  '<div class="phoneContentBox right showGroup02">',
                    '<div class="itemPhoneContent">',
                      '<span>01</span>',
                      '<div class="rirhgt">',
                        '<h4 class="i18n" i18n-text="selfCircleSmall04"></h4>',
                        '<span class="i18n" i18n-text="selfCircleSmallText04"></span>',
                      '</div>',
                    '</div>',
                    '<div class="itemPhoneContent">',
                      '<span>02</span>',
                      '<div class="left">',
                        '<h4 class="i18n" i18n-text="selfCircleSmall05"></h4>',
                        '<span class="i18n" i18n-text="selfCircleSmallText05"></span>',
                      '</div>',
                    '</div>',
                    '<div class="itemPhoneContent">',
                      '<span>03</span>',
                      '<div class="left">',
                        '<h4 class="i18n" i18n-text="selfCircleSmall06"></h4>',
                        '<span class="i18n" i18n-text="selfCircleSmallText06"></span>',
                      '</div>',
                    '</div>',
                  '</div>',
                '</div>',
              '</div>',
              '<h3 class="middelTitle i18n" i18n-text="selfCircleTitle02"></h3>',
              '<div class="allUserInWorld">',
                '<video id="video" autoplay="autoplay" loop="loop">',
                  '<source src="images/world_video.mp4" />',
                  '<span class="i18n" i18n-text="noPlayVideo"></span>',
                '</video>',
             '</div>',
              '<div class="circleBottom">',
                '<img class="lazy" data-original="images/self_circle_bottom.png" alt="">',
              '</div>',
            '</div>',
  ].join('')
}

var selfCarClub = function() {
  return [
    '<div id="selfCarClub">',
              '<div class="carClubBanner">',
                '<div class="carClubBannerImg">',
                  '<img src="images/selfCarImg.png" alt="">',
                '</div>',
                '<div class="carClubBannerTxt">',
                  '<div class="carClubBannerTxtBox">',
                    '<h3 class="i18n" i18n-text="selfCircleTitle03"></h3>',
                    '<p class="i18n" i18n-text="utravelIntro"></p>',
                  '</div>',
                '</div>',
              '</div>',
              '<div class="carClubContent">',
                '<h3 class="i18n" i18n-text="selfCircleTitle04"></h3>',
                '<div class="itemShowContent">',
                  '<div class="contentSign left">',
                    '<img class="lazy" data-original="images/act_recommend.png" alt="">',
                  '</div>',
                  '<div class="contentText rightFloat">',
                    '<h4 class="i18n" i18n-text="selfGourpTitle01"></h4>',
                    '<p class="i18n" i18n-text="selfGourpSmallTitle01"></p>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText01"></span></div>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText02"></span></div>',
                  '</div>',
                '</div>',
                '<div class="itemShowContent">',
                  '<div class="contentText leftFloat">',
                    '<h4 class="i18n" i18n-text="selfGourpTitle02"></h4>',
                    '<p class="i18n" i18n-text="selfGourpSmallTitle02"></p>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText03"></span></div>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText04"></span></div>',
                  '</div>',
                   '<div class="contentSign right">',
                    '<img class="lazy" data-original="images/act_content.png" alt="">',
                  '</div>',
                '</div>',
                '<div class="itemShowContent">',
                  '<div class="contentSign left">',
                    '<img class="lazy" data-original="images/club_info.png" alt="">',
                  '</div>',
                  '<div class="contentText rightFloat">',
                    '<h4 class="i18n" i18n-text="selfGourpTitle03"></h4>',
                    '<p class="i18n" i18n-text="selfGourpSmallTitle03"></p>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText05"></span></div>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText06"></span></div>',
                  '</div>',
                '</div>',
                '<div class="itemShowContent">',
                  '<div class="contentText leftFloat">',
                    '<h4 class="i18n" i18n-text="selfGourpTitle04"></h4>',
                    '<p class="i18n" i18n-text="selfGourpSmallTitle04"></p>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText07"></span></div>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText08"></span></div>',
                  '</div>',
                   '<div class="contentSign right">',
                    '<img class="lazy" data-original="images/people_chat.png" alt="">',
                  '</div>',
                '</div>',
                '<div class="itemShowContent">',
                  '<div class="contentSign left">',
                    '<img class="lazy" data-original="images/act_positioin.png" alt="">',
                  '</div>',
                  '<div class="contentText rightFloat">',
                    '<h4 class="i18n" i18n-text="selfGourpTitle05"></h4>',
                    '<p class="i18n" i18n-text="selfGourpSmallTitle05"></p>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText09"></span></div>',
                    '<div><b class="left"></b><span class="left i18n" i18n-text="selfGourpSmallText10"></span></div>',
                  '</div>',
                '</div>',
              '</div>',
              '<div class="carClubBottom">',
                '<img class="lazy" data-original="images/carClubBottom.png" alt="">',
              '</div>',
            '</div>',
  ].join('')
}

var recruitCarClub = function() {
  return [
    '<div id="recruitCarClub">',
              '<div class="carClubWelfare recruitModule">',
                '<div class="moduleLeftTop"><span class="i18n" i18n-text="recruitClubTitle01"></span></div>',
                '<div class="moduleText">',
                  '<p class="i18n" i18n-text="recruitClubText01"></p>',
                  '<p class="i18n" i18n-text="recruitClubText02"></p>',
                  '<p class="i18n" i18n-text="recruitClubText03"></p>',
                  '<p class="i18n" i18n-text="recruitClubText04"></p>',
                '</div>',
                '<div class="toApplyClub">',
                  '<span class="i18n" i18n-text="applyClub"></span>',
                  '<div class="showLoadAppQr"><img src="images/qrCode.png"></div>',
                '</div>',
              '</div>',
              '<div class="leaderWelfare recruitModule">',
                '<div class="moduleLeftTop"><span class="i18n" i18n-text="recruitClubTitle02"></span></div>',
                '<div class="moduleText">',
                  '<p class="i18n" i18n-text="recruitClubText05"></p>',
                  '<p class="i18n" i18n-text="recruitClubText06"></p>',
                  '<p class="i18n" i18n-text="recruitClubText07"></p>',
                  '<p class="i18n" i18n-text="recruitClubText08"></p>',
                '</div>',
                '<div class="toApplyClub">',
                  '<span class="i18n" i18n-text="applyClub"></span>',
                  '<div class="showLoadAppQr"><img src="images/qrCode.png"></div>',
                '</div>',
              '</div>',
              '<div class="carClubManerger recruitModule">',
                '<div class="moduleLeftTop"><span class="i18n" i18n-text="recruitClubTitle03"></span></div>',
                '<div class="moduleText">',
                  '<p class="i18n" i18n-text="recruitClubText09"></p>',
                  '<p class="i18n" i18n-text="recruitClubText10"></p>',
                  '<p class="i18n" i18n-text="recruitClubText11"></p>',
                '</div>',
                '<div class="toApplyClub">',
                  '<span class="i18n" i18n-text="applyClub"></span>',
                  '<div class="showLoadAppQr"><img src="images/qrCode.png"></div>',
                '</div>',
              '</div>',
            '</div>',
  ].join('')
}