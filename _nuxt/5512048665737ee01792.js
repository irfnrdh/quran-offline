(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{178:function(t,e,a){var i=a(180);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(23).default)("024851a8",i,!0,{})},179:function(t,e,a){"use strict";var i=a(178);a.n(i).a},180:function(t,e,a){(t.exports=a(22)(!1)).push([t.i,"\n.surah__header[data-v-6ec648d0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.surah__title[data-v-6ec648d0] {\n  font-size: 2rem;\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-6ec648d0] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-6ec648d0] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-6ec648d0] {\n  text-align: right;\n}\n",""])},181:function(t,e,a){"use strict";a(24);var i=a(8),n=a.n(i),s=(a(1),a(2),a(3),a(9)),r={name:"SurahCard",props:{surahArray:{type:Array,default:function(){return[]}}},computed:n()({},Object(s.d)(["surahFavorite"])),methods:n()({},Object(s.b)(["addToFavorite","removeFromFavorite","showNotification"]),{doAddToFavorite:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})},doremoveFromfavorite:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})},findInFavorite:function(t){return(this.surahFavorite||[]).find(function(e){return e.index===t.index})},getSurahDetailUrl:function(t){return"/".concat(t)},goToSurahDetail:function(t){var e=this.getSurahDetailUrl(t);this.$router.push(e)}})},o=(a(179),a(11)),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"surah__root"},t._l(t.surahArray,function(e){return a("a",{key:e.index,staticClass:"surah block_content has-shadow",on:{click:function(a){a.preventDefault(),t.goToSurahDetail(e.index)}}},[a("div",{staticClass:"surah__header"},[a("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(e.index)+"\n      ")]),t._v(" "),a("div",{staticClass:"surah__header--right"},[t.findInFavorite(e)?t._e():a("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(a){a.preventDefault(),t.doAddToFavorite(e)}}},[a("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),t.findInFavorite(e)?a("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#f5aa1e"},on:{click:function(a){a.preventDefault(),t.doremoveFromfavorite(e)}}},[a("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(e.arabic)+"\n      ")])]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(e.latin)+"\n      ")])]),t._v(" "),a("div",{staticClass:"divider clearfix"},[a("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(e.translation)+": "+t._s(e.ayah_count)+" Ayat)\n      ")])])])}))},[],!1,null,"6ec648d0",null);c.options.__file="SurahCard.vue";e.a=c.exports},188:function(t,e,a){var i=a(209);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,a(23).default)("1a5238b4",i,!0,{})},208:function(t,e,a){"use strict";var i=a(188);a.n(i).a},209:function(t,e,a){(t.exports=a(22)(!1)).push([t.i,"\n.feed[data-v-e19a10c6] {\n  display: block;\n  width: 90%;\n  margin: 1em auto;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #ccc;\n}\n.feed__title[data-v-e19a10c6] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    font-size: 1.5rem;\n}\n.feed__title svg[data-v-e19a10c6] {\n      margin-right: .2em;\n}\n.feed__empty[data-v-e19a10c6] {\n    text-align: left;\n    padding-top: 1em;\n    color: #333;\n    font-style: italic;\n}\n",""])},247:function(t,e,a){"use strict";a.r(e);var i=a(8),n=a.n(i),s=(a(1),a(2),a(3),a(86)),r=a.n(s),o=a(9),c=a(181),l=a(12),d=a(29),u={name:"FavoritePage",head:function(){return this.metaHead},components:{IosStarOutlineIcon:r.a,SurahCard:c.a},computed:n()({},Object(o.d)(["settingActiveTheme","surahFavorite"]),{metaHead:function(){var t="Surat Favorit Anda | Qur'an Offline";return{title:t,meta:[{hid:"og:title",property:"og:title",content:t},{hid:"twitter:title",name:"twitter:title",content:t},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}},isHaveFav:function(){return Object(l.a)(this.surahFavorite)}}),mounted:function(){this.setHeaderTitle(d.a.FAVORITE)},methods:n()({},Object(o.c)(["setHeaderTitle"]))},h=(a(208),a(11)),f=Object(h.a)(u,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosStarOutlineIcon",{attrs:{w:"1em",h:"1em"}}),this._v("\n      Surat favorit:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveFav?e("SurahCard",{attrs:{"surah-array":this.surahFavorite}}):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum punya surat yang ditandai sebagai favorit.\n      ")])],1)])])},[],!1,null,"e19a10c6",null);f.options.__file="favorite.vue";e.default=f.exports}}]);