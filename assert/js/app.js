const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const main = $('.main');
const openMenu = $('.slider_tablet-icon-open');
const closeMenu = $('.slider_tablet-icon-close');
const menuMobile = $('.slider_tablet');
const listContent = $$('.slider_menu-up-list');
const menuMobileopen = $('open');
const avt = $('.avt-user');
const chooseAvt = $('.chooseavt');
const addName = $('.add_name');
const listacctive = $$('.list-acctive');
const cardSlide = $('.content_slide');
const listMUsic = $('.playlist_music');
const content = $('.content');
const header = $('.header');
const heading = $('.name-song');
const thumb_song = $('.thumb_song');
const thumb_music = $('.image-song');
const nameSinger = $('.name-singer');
const audio = $('#audio_music');
const playBtn = $('.btn_toggle-play');
const playing = $('.control-music');
const progress = $('#progress');
const infoSongMusic = $('.info-song');
const btnNext = $('.ic-next');
const btnPre = $('.ic-pre');
const btnRandom = $('.ic-shuffle');
const btnRepeat = $('.ic-repeat');
const sound = $('#sound');
const choose_avt_small = $('.choose_avt-small');
const avtSmall = $('.avt_user-small');
const time_music = $('.time_music');
const section_content = $('.main_section');
const menuSetting = $('.setting__menu');
const btnSetting = $('.setting_btn');
const slider = $('.content__slider-show');
const hictory = $('.header__search-hictory');
const inputSearch = $('.header__search-input');
const heartBtnAction = $('.heart_btn-action');
const itemPlaylist = $('.col .l-2 .m-2 .c-6');
const header_avt = $('.header_avt');
const settingProfile = $('.setting__profile');
const openProfile = $('.edit__profile');
const profile_dislay = $('.profile_dislay');
const nameUser = $('.name_user');
const nameProfile = $('.name_profile');
const closeProfile = $('.btn_close-profile');
const avtUser = $('.avt_user');
const editProfile = $('.edit_profile-avt');
const startTime = $('.start_time');
const endTime = $('.end_time');
const tabListSong = $('.playlist-list-song');
const tabs = $$('.content__navbar-items');
const panes = $$('.container__tab');
const closeMenuMobile = $('.close_slider-mobile');
const overlayMobile = $('.overlay_slide-mobile');
const itemMenuMobile = $$('.slider_mobile_menu-up-list');
const app = {
  currentIndex: 0,
  isPlay: false,
  isRandom: false,
  isRepeat: false,

  song: [
    {
      name: 'Ai mang c?? ????n di',
      singer: 'K-ICM ft APJ',
      thumb: './assert/image/image-music/img3.jpg',
      music: './assert/music/b3.mp3',
    },
    {
      name: "there's no one at all",
      singer: 'S??n T??ng M-TP',
      thumb: './assert/image/image-music/img1.png',
      music: './assert/music/b1.mp3',
    },
    {
      name: 'T?????ng qu??n',
      singer: 'Nh???t phong',
      thumb: './assert/image/image-music/img2.jpg',
      music: './assert/music/b2.mp3',
    },
    {
      name: 'Anh nh?? ??? ????u th???',
      singer: ' Amee',
      thumb: './assert/image/image-music/img4.jpg',
      music: './assert/music/b4.mp3',
    },
    {
      name: 'Ng?????i l??? ??i',
      singer: 'Karik, Orange, Superbrothers',
      thumb: './assert/image/image-music/img5.jpg',
      music: './assert/music/b5.mp3',
    },
    {
      name: 'Mu???n r???i m?? sao c??n',
      singer: 'S??n T??ng M-TP',
      thumb: './assert/image/image-music/img6.jpg',
      music: './assert/music/b6.mp3',
    },
    {
      name: '??o???n tuy???t n??ng ??i',
      singer: ' Ph??t Huy T4',
      thumb: './assert/image/image-music/img7.jpg',
      music: './assert/music/b7.mp3',
    },
    {
      name: 'Fly way',
      singer: 'TheFatRat',
      thumb: './assert/image/image-music/img8.jpg',
      music: './assert/music/b8.mp3',
    },
    {
      name: 'never be alone',
      singer: 'TheFatRat',
      thumb: './assert/image/image-music/img9.jpg',
      music: './assert/music/b9.mp3',
    },
    {
      name: 'save me',
      singer: 'Deamn',
      thumb: './assert/image/image-music/img10.jpg',
      music: './assert/music/b10.mp3',
    },
    {
      name: 'Hoa h???i ???????ng',
      singer: 'R??ch 5tr',
      thumb: './assert/image/image-music/img11.jpg',
      music: './assert/music/b11.mp3',
    },
    {
      name: 'Ch???y ngay ??i',
      singer: 'S??n t??ng M-TP',
      thumb: './assert/image/image-music/img12.jpg',
      music: './assert/music/b12.mp3',
    },
    {
      name: 'L???c tr??i',
      singer: 'S??n t??ng M-TP',
      thumb: './assert/image/image-music/img13.jpg',
      music: './assert/music/b13.mp3',
    },
    {
      name: '????? t???c 2',
      singer: 'Ph??c Du, Ph??o, Masew, ????? Mixi',
      thumb: './assert/image/image-music/img14.jpg',
      music: './assert/music/b14.mp3',
    },
  ],
  slide: [
    {
      image: './assert/image/image-music/img3.jpg',
    },
    {
      image: './assert/image/image-music/img1.png',
    },
    {
      image: './assert/image/image-music/img2.jpg',
    },
    {
      image: './assert/image/image-music/img4.jpg',
    },
    {
      image: './assert/image/image-music/img5.jpg',
    },
    {
      image: './assert/image/image-music/img6.jpg',
    },
    {
      image: './assert/image/image-music/img7.jpg',
    },
    {
      image: './assert/image/image-music/img8.jpg',
    },
    // {
    //   image: './assert/image/image-music/img9.jpg',
    // },
    // {
    //   image: './assert/image/image-music/img10.jpg',
    // },
    // {
    //   image: './assert/image/image-music/img11.jpg',
    // },
    // {
    //   image: './assert/image/image-music/img12.jpg',
    // },
    // {
    //   image: './assert/image/image-music/img13.jpg',
    // },
    // {
    //   image: './assert/image/image-music/img14.jpg',
    // },
  ],

  // t???i nh???c qua
  render: function () {
    const htmlMusic = this.song.map((song, index) => {
      return `
      <div class="list_music-items ${index === this.currentIndex ? 'active' : ''}" data-index= "${index} ">
   <dic class="playlist-info">
        <img src="${song.thumb}" alt="" class="thum_song">
        <div class="info-music">
          <h3 class="name_song">${song.name} </h3>
          <h3 class="name_singer">${song.singer} </h3>
        </div>
   </dic>
   
      <div class="btn_list-music">
      <i class="mic fa-solid fa-microphone"></i>
      <i class="heart  fa-solid fa-heart"></i>
      <i class="more hide-on-mobile fa-solid fa-ellipsis"></i>
    </div>
    </div>
      `;
    });

    listMUsic.innerHTML = htmlMusic.join('\n');
    // t???i tab playlist
    const htmlSongTabPlaylist = this.song.map((song, index) => {
      return `
      <div class="content__playlist-song-item  ${index === this.currentIndex ? 'active' : ''}" data-index="${index} ">
      <div class="content__playlist-song-item-info">
        <div class="content__playlist-song-image">
          <img src="${song.thumb}" alt="" />
        </div>
        <div class="content__playlist-text">
          <h2 class="name-song-tab-playlist">${song.name} </h2>
          <span class="name-singer-tab-playlist">${song.singer} </span>
        </div>
      </div>
      <div class="content__playlist-song-item-action">
        <div class="btn_action-playlist-song hide-on-mobile  ">
          <i class="fa-solid fa-heart"></i>
        </div>
        <div class="btn_action-playlist-song hide-on-mobile ">
          <i class="fa-solid fa-microphone"></i>
        </div>
        <div class="btn_action-playlist-song">
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </div>
      `;
    });
    tabListSong.innerHTML = htmlSongTabPlaylist.join('\n');
  },
  defineProverties: function () {
    Object.defineProperty(this, 'currentSong', {
      get: function () {
        return this.song[this.currentIndex];
      },
    });
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    nameSinger.textContent = this.currentSong.singer;
    thumb_music.src = this.currentSong.thumb;
    audio.src = this.currentSong.music;
  },
  handleEnvent: function () {
    const _this = this;
    // m??? menu tr??n ??t
    openMenu.onclick = function () {
      menuMobile.classList.add('open');
    };
    closeMenu.onclick = function () {
      menuMobile.classList.remove('open');
    };
    // open and close hictory
    inputSearch.onclick = function () {
      hictory.style.display = 'block';
    };
    // open setting

    btnSetting.onclick = function () {
      menuSetting.style.display = 'block';
    };
    // hi???n th??? thanh search khi k??o
    content.onscroll = function () {
      const scrollYChange = content.scrollY || content.scrollTop;
      if (scrollYChange > 20) {
        header.style.backgroundColor = '#37075d';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    };
    // m??? v?? ????mg setting profile
    header_avt.onclick = function () {
      settingProfile.style.display = 'block';
    };
    main.onclick = function (e) {
      if (!e.target.closest('.header__search-hictory') && !e.target.closest('.header__search-input')) {
        hictory.style.display = 'none';
      }
      if (!e.target.closest('.setting_btn')) {
        menuSetting.style.display = 'none';
      }
      if (!e.target.closest('.header_avt')) {
        settingProfile.style.display = 'none';
      }
      if (e.target.closest('.setting__profile-item')) {
        settingProfile.style.display = 'block';
      }
    };
    openProfile.onclick = function () {
      profile_dislay.style.display = 'block';
      setTimeout(() => {
        settingProfile.style.display = 'none';
      }, 0);
    };
    profile_dislay.onclick = function (e) {
      if (!e.target.closest('.profile_edit')) {
        profile_dislay.style.display = 'none';
      }
    };
    closeProfile.onclick = function () {
      profile_dislay.style.display = 'none';
    };

    // thay ??oi??? profile

    nameProfile.addEventListener('change', function () {
      nameUser.textContent = nameProfile.value;
      localStorage.setItem('text_change', nameProfile.value);
    });
    const savETextChange = localStorage.getItem('text_change');
    if (savETextChange) {
      nameUser.textContent = savETextChange;
    } else {
      nameUser.textContent = 'H?? H??ng';
    }

    editProfile.addEventListener('change', function () {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        localStorage.setItem('save_avt', reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
    document.addEventListener('DOMContentLoaded', function () {
      const dataImage = localStorage.getItem('save_avt');
      if (dataImage) {
        avtUser.setAttribute('src', dataImage);
        header_avt.setAttribute('src', dataImage);
      }
    });
    jQuery('.list-acctive').click(function () {
      alert('ch???c n??ng n??y ??ang trong qu?? tr??nh ho??n thi???n');
    });
    // slide
    jQuery('.content__slider-show').slick({
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
    });
    // chuy???n tab
    tabs.forEach((tab, index) => {
      const tabContents = panes[index];
      tab.onclick = function () {
        $('.content__navbar-items.active').classList.remove('active');
        $('.container__tab.active').classList.remove('active');
        this.classList.add('active');
        tabContents.classList.add('active');
      };
    });
    // open  close menu mobile
    jQuery('.open_menu-mobile').click(function () {
      jQuery('.overlay_slide-mobile').slideToggle();
    });
    closeMenuMobile.onclick = function () {
      overlayMobile.style.display = 'none';
    };
    overlayMobile.onclick = function (e) {
      if (!e.target.closest('.slider_mobile')) {
        overlayMobile.style.display = 'none';
      }
    };
    itemMenuMobile.forEach((itemsMobile, index) => {
      itemsMobile.onclick = function () {
        overlayMobile.style.display = 'none';
      };
    });
    // play and pause
    playBtn.onclick = function () {
      if (_this.isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    audio.onplay = function () {
      _this.isPlay = true;
      playing.classList.add('playing');
      infoSongMusic.classList.add('info-active');
      thumbMusicAnimation.play();
    };
    audio.onpause = function () {
      _this.isPlay = false;
      playing.classList.remove('playing');
      infoSongMusic.classList.remove('info-active');
      thumbMusicAnimation.pause();
    };
    //khi nh???c ch???y
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const subline = Math.floor((audio.currentTime / audio.duration) * 100);
        progress.value = subline;
        var color =
          'linear-gradient(90deg, rgb(3, 169, 244)' + progress.value + '% , rgb(214, 214, 214)' + progress.value + '%)';
        progress.style.background = color;
      }
    };
    // tua
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    //???nh quay khi nh???c ch???y
    const thumbMusicAnimation = thumb_music.animate([{ transform: 'rotate(360deg)' }], {
      duration: 7000,
      iterations: Infinity,
    });
    thumbMusicAnimation.pause();

    // next and pre
    btnNext.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.v???ewActiveSong();
    };
    btnPre.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.preSong();
      }
      _this.render();
      _this.v???ewActiveSong();
      audio.play();
    };
    // x??? l?? random
    btnRandom.onclick = function (e) {
      // if (_this.isRandom) {
      //   _this.isRandom = false;
      //   btnRandom.classList.add('random_active');
      // } else {
      //   _this.isRandom = true;
      //   btnRandom.classList.remove('random_active');
      // }
      _this.isRandom = !_this.isRandom;
      btnRandom.classList.toggle('btn_active', _this.isRandom);
    };
    // chuy???n b??i khi h???t
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        btnNext.click();
      }
    };
    // reapeat b??i h??t
    btnRepeat.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      btnRepeat.classList.toggle('btn_active', _this.isRepeat);
    };
    listMUsic.onclick = function (e) {
      const songElement = e.target.closest('.list_music-items');
      if (songElement) {
        _this.currentIndex = Number(songElement.dataset.index);
        _this.loadCurrentSong();
        _this.render();
        audio.play();
      }
    };
    tabListSong.onclick = function (e) {
      const songElementPlaylist = e.target.closest('.content__playlist-song-item');
      if (songElementPlaylist) {
        _this.currentIndex = Number(songElementPlaylist.dataset.index);
        _this.loadCurrentSong();
        _this.render();
        audio.play();
      }
    };
    // ??m l?????ng
    sound.oninput = function () {
      audio.volume = sound.value / 100;
    };
    sound.addEventListener('change', function () {
      var colorSound =
        'linear-gradient(90deg, rgb(3, 169, 244)' + sound.value + '% , rgb(214, 214, 214)' + sound.value + '%)';
      sound.style.background = colorSound;
    });
  },
  // next and pre
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.song.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  preSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.song.length - 1;
    }
    this.loadCurrentSong();
  },
  // random
  randomSong: function () {
    let newIndex;
    do {
      {
        newIndex = Math.floor(Math.random() * this.song.length);
      }
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  // view active
  v???ewActiveSong: function () {
    setTimeout(() => {
      $('.list_music-items.active').scrollIntoView();
    }, 250);
  },

  start: function () {
    this.defineProverties();
    // ho???t ?????ng
    this.handleEnvent();

    this.render();
    // t???i nh???c
    this.loadCurrentSong();
  },
};
app.start();
function timeMusicRun() {
  const { duration, currentTime } = audio;

  if (!duration) {
    endTime.textContent = '00:00';
  } else {
    endTime.textContent = covertTime(duration);
  }
  startTime.textContent = covertTime(currentTime);
}
function covertTime(numberTime) {
  const min = Math.floor(numberTime / 60);
  const sec = Math.floor(numberTime - min * 60);
  return `${min}:${sec}`;
}
timeMusicRun();
setInterval(timeMusicRun, 0);
