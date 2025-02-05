importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"6440d5a80cbf4ebcac88198c8393a9b6","url":"contributors.html"},{"revision":"a1a1d31e9fd7130623f42ee1a136a9c4","url":"feedback.html"},{"revision":"002254a0fbf4f82bccc76c0dd56e49d7","url":"images/boltzmann_formula1.png"},{"revision":"a2def601d82ec6828a4cd0701aa0eced","url":"images/boltzmann_formula2.png"},{"revision":"d70b1b37ee37ed1ed017ddf93dd8c032","url":"images/fig1.png"},{"revision":"713a43e8403f369f01e974c305e22995","url":"images/fig2.png"},{"revision":"5aa5f42e7c55670f19b5f32b46c86f34","url":"images/fig3.png"},{"revision":"af89402bf4e9cc786d9ab674282e608e","url":"images/fig4.png"},{"revision":"58db5dce8ac6152041991f689788b588","url":"images/fig5.png"},{"revision":"911e0c09337afec8a61ea411113bcd59","url":"images/planck_radiation_formula1.png"},{"revision":"87721946608a7bdfa01708fb8130cd10","url":"images/planck_radiation_formula2.png"},{"revision":"9acfa7b3765145e6da3b34a886fe0ff9","url":"images/primer_formula1.png"},{"revision":"f7452187e64b273d5b87faa87a51b0c4","url":"images/primer_formula2.png"},{"revision":"47e88e80279f2e3e083fa4db3bab6112","url":"images/primer_formula3.png"},{"revision":"3902391daa6d99f46e81152f8ab61b57","url":"images/primer_formula4.png"},{"revision":"990a0e78974aecae83509229dcd92340","url":"images/primer_formula5.png"},{"revision":"473823207af34076764edc10615f0d81","url":"images/primer_formula6.png"},{"revision":"5417863b15827975db8ee440c56ce4bb","url":"images/primer_formula7.png"},{"revision":"60a0a9b9d65e1f0b831b26ab5fabe958","url":"images/wein's_displacement_formula.png"},{"revision":"9491d2ae40304a608bfd36e2222ea7d1","url":"index.html"},{"revision":"b60c4be2301321f2bf85ac7c00658ab1","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"0826a0ffda16fddabeb6268197e0c33b","url":"posttest.html"},{"revision":"e6e866383912e89875e9a8b7542270e2","url":"posttest.json"},{"revision":"8abd11fc2081d91de8a71e5b611d80ac","url":"pretest.html"},{"revision":"9fed42c7a04eb26e2d68445476a720d7","url":"pretest.json"},{"revision":"78f9b7c0431984dc025fa0d24dd0140b","url":"procedure.html"},{"revision":"cc73b74bf721e5396adabe63a5605dfe","url":"references.html"},{"revision":"9cae3465c68a6996079154a4863b0050","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"93351e072f46f084f277eb4bec1984d3","url":"simulation/css/style.css"},{"revision":"2228e977ebea8966e27929f43e39cb67","url":"simulation/dummy.html"},{"revision":"29b26be9f08fda1e93dbc3371b491884","url":"simulation/images/es.png"},{"revision":"5c19c3166923ba329819c12193f5639e","url":"simulation/images/lmtd.png"},{"revision":"718cdf8e6453413b3e7d5b8355b7da12","url":"simulation/images/sha-256.png"},{"revision":"dd0f619802e4e95403ab0457c0310920","url":"simulation/index.html"},{"revision":"ebc8417695763567895bde02c854a827","url":"simulation/js/activity1.js"},{"revision":"f3ea789caf2e96567d59c7983c5e1bcf","url":"simulation/js/activity3.js"},{"revision":"6fa0c23b612a54335109105816bee9ab","url":"simulation/js/activity4.js"},{"revision":"0a7e2e5ffcc05c489af61b19ca9304f2","url":"simulation/js/activity5.js"},{"revision":"5cc2c5d13def61903fdd40cb5de1e66b","url":"simulation/js/common.js"},{"revision":"274f054d82408a231146197ef3bc7983","url":"simulation/js/data.js"},{"revision":"f01efec355d6242b5e56e2fd49c26e2e","url":"simulation/js/dummy.js"},{"revision":"d18fe7df512e9f0da25e4a7340a6f059","url":"simulation/js/geomerty.js"},{"revision":"9ee7b8ee93ef802c637fa28dce12f956","url":"simulation/js/loaded_images.js"},{"revision":"1a58bae2408d1e8315e283e283cb7ff8","url":"simulation/js/pannel.js"},{"revision":"11baf1de5b3dc85af3de72f678404a04","url":"simulation/js/scene.js"},{"revision":"3bba7e7d6780b42c61d94257622fba0f","url":"theory.html"},{"revision":"ce21473f39f8fca1ac1ad3c0c15deed5","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );