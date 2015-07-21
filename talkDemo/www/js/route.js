(function () {
    "use strict";
    angular.module('talkDemo')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('menu', {
              url: "/menu",
              abstract: true,
              templateUrl: "demos/sidemenu/menu.html",
              controller: 'MenuController'
            })
            .state('menu.tabs', {
              url: "/tab",
              views: {
                'menuContent' :{
                  templateUrl: "demos/tabs/tabs.html"
                }
              }
            })
            .state('menu.tabs.buttons', {
              url: "/buttons",
              views: {
                'buttons-tab': {
                  templateUrl: "demos/buttons/buttons.html",
                  controller: 'ButtonsTabController'
                }
              }
            })
            .state('menu.tabs.colors', {
              url: "/colors",
              views: {
                'colors-tab': {
                  templateUrl: "demos/colors/colors.html"
                }
              }
            })
            .state('menu.tabs.list', {
              url: "/list",
              views: {
                'list-tab': {
                  templateUrl: "demos/masterdetail/list.html",
                  controller: 'ListController'
                }
              }
            })
            .state('menu.tabs.item', {
              url: "/item",
              views: {
                'list-tab': {
                  templateUrl: "demos/masterdetail/item.html"
                }
              }
            })
            .state('menu.tabs.form', {
              url: "/form",
              views: {
                'form-tab': {
                  templateUrl: "demos/forms/form.html"
                }
              }
            })
            .state('menu.keyboard', {
              url: "/keyboard",
              views: {
                'menuContent': {
                  templateUrl: "demos/keyboard/keyboard.html"
                }
              }
            })
            .state('menu.slidebox', {
              url: "/slidebox",
              views: {
                'menuContent': {
                  templateUrl: "demos/slidebox/slidebox.html",
                  controller: 'SlideboxController'
                }
              }
            })
            .state('menu.about', {
              url: "/about",
              views: {
                'menuContent': {
                  templateUrl: "demos/about/about.html"
                }
              }
            })
              .state('menu.collectionrepeat', {
              url: "/collectionrepeat",
              views: {
                'menuContent' :{
                  templateUrl: "demos/collectionrepeat/collectionrepeattabs.html"
                }
              }
            })
            .state('menu.collectionrepeat.crbasic', {
                url: '/crbasic',
                views: {
                    'basic-tab' : {
                        templateUrl: "demos/collectionrepeat/basic/collectionrepeatbasic.html",
                        controller: "CollectionRepeatBasicController"
                        
                    }
                }
            })
            .state('menu.collectionrepeat.crwithdivider', {
                url: '/crwithdivider',
                views: {
                    'divder-tab' : {
                        templateUrl: "demos/collectionrepeat/withdivider/collectionrepeatdivider.html",
                        controller: "CollectionRepeatDividerController"
                    }
                }
            })
             .state('menu.collectionrepeat.crabout', {
                url: '/crabout',
                    views: {
                    'about-tab' : {
                        templateUrl: "demos/collectionrepeat/collectionrepeatabout.html"
                    }
                }               
            })
            //  .state('menu.collectionrepeat.collectionrepeatbasic', {
            //     url: '/collectionrepeatbasic',
            //     views: {
            //         'basic-tab': {
            //             templateUrl: "demos/collectionrepeat/basic/collectionrepeatbasic.html",
            //             controller: 'CollectionRepeatBasicController'
            //         }
            //     }
            // })
            // .state('menu.collectionrepeat.collectionrepeatwithdivider', {
            //     url: '/collectionrepeatwithdivider',
            //     views: {
            //         'divider-tab': {
            //             templateUrl: "demos/collectionrepeat/withdivider/CollectionRepeatWithDivider.html",
            //             controller: 'CollectionRepeatWithDividerController'
            //         } 
            //     }
            // })
            ;
            
          $urlRouterProvider.otherwise("menu/tab/buttons");
    }]);
}());