export default class PsConfig {

    static versionNo : String = '1.2';

    ///
    /// API Key to connection with Main Backend
    /// This key must equal with key from backend
    ///
    static apiKey: String = "teampsisthebest";

    ///
    /// Live Mode
    /// ------------
    /// If you want to upload to server, please enable below and comment Development below
    ///
    //static fixedDomain: String = "https://yard99.in/admin"; 
    //static domain: String = "https://yard99.in/admin"; 

    ///
    /// Development Mode
    /// -----------------
    /// Before upload to server, please comment this 2 lines.
    ///
    static fixedDomain: String = "https://yard99.in/admin";    
    static domain: String = "http://localhost:3000";

    ///
    /// Firebase Config
    ///
    static firebaseConfig = {
        apiKey: "AIzaSyBGiX9YytF68545bfJLNKE7oLwRERC1KH8",
        authDomain: "yard99-f7dfc.firebaseapp.com",
        projectId: "yard99-f7dfc",
        storageBucket: "yard99-f7dfc.appspot.com",
        messagingSenderId: "23443831146",
        appId: "1:23443831146:web:74cd28451d8b6032b04d13",
        measurementId: "G-7F2GFEK855"
      };
    
    // static firebaseConfig = {
    //     apiKey: "AIzaSyCtBHbqTWRgh9O8veCOJNnCMG56lXTdGJw",
    //     authDomain: "flutter-buy-and-sell.firebaseapp.com",
    //     databaseURL: "https://flutter-buy-and-sell.firebaseio.com",
    //     projectId: "flutter-buy-and-sell",
    //     storageBucket: "flutter-buy-and-sell.appspot.com",
    //     messagingSenderId: "505384053995",
    //     appId: "1:505384053995:web:f22081b8b835af474ae2ae",
    //     measurementId: "G-2CNXCDNZ2Y"
    // };
    
    ///
    /// Base URL * Don't update it *
    ///
    static base: String = PsConfig.domain; 
    static baseUrl: String = PsConfig.domain + '/index.php';
    static fixedPath : String = PsConfig.fixedDomain;
    
    
    /// Google Map Key
    /// ----------------
    // static mapKey: String = "AI0000000000000000000000000000000000000";
    static mapKey: String = "AIzaSyCtBHbqTWRgh9O8veCOJNnCMG56lXTdGJw";
    

    ///
    /// Price Format
    /// -----------------
    /// Need to change according to your format that you need
    /// E.g.
    /// "#,##0.00"   => 2,555.00
    /// "##0.00"    => 2555.00
    /// "#.00"       => 2555.00
    /// "#,###."      => 2,555
    /// "#,##0.0"    => 2555.0
    /// "###"        => 255
    static  priceFormat : string = '#,##0.0';


    ///
    /// Profile Setting for Item Grid
    /// You can hide/show user profile at item grid
    /// show == show user profile
    /// hide == hide user profile
    ///
    static showUserProfile : string = 'show';


    ///
    /// Map Filter Setting
    ///
    static  noFilterWithLocationOnMap : Boolean= false;

    ///
    /// Promotion Date Pre-define Set
    ///
    /// Type 1 == Fixed Date, Type 2 == Custom Date with user input
    static promotionDays = [
        {
            id:"1", days:7, type:1
        },
        {
            id:"2", days:14, type:1
        },
        {
            id:"3", days:30, type:1
        },
        {
            id:"4", days:60, type:1
        },
        {
            id:"5", days:1, type:2
        }
    ];

    ///
    /// Default Mile for Nearest Search
    ///
    static mile = "8";

    
    

    ///
    /// For default language change, please check
    /// LanguageFragment for language code and country code
    /// ..............................................................
    /// Language             | Language Code     | Country Code
    /// ..............................................................
    /// "English"            | "en"              | "US"
    /// "Arabic"             | "ar"              | "DZ"
    /// "India (Hindi)"      | "hi"              | "IN"
    /// "German"             | "de"              | "DE"
    /// "Spainish"           | "es"              | "ES"
    /// "French"             | "fr"              | "FR"
    /// "Indonesian"         | "id"              | "ID"
    /// "Italian"            | "it"              | "IT"
    /// "Japanese"           | "ja"              | "JP"
    /// "Korean"             | "ko"              | "KR"
    /// "Malay"              | "ms"              | "MY"
    /// "Portuguese"         | "pt"              | "PT"
    /// "Russian"            | "ru"              | "RU"
    /// "Thai"               | "th"              | "TH"
    /// "Turkish"            | "tr"              | "TR"
    /// "Chinese"            | "zh"              | "CN"
    /// ..............................................................
    ///
    static defaultLanguage = {
        languageCode : 'en',
        countryCode : 'US',
        name : 'English US',
        flag :  require('@/assets/flags/usflag.png')
    };
    static supportedLanguages = [
        { languageCode : 'en', countryCode : 'US', name : 'English US', flag: require('@/assets/flags/usflag.png')},
        { languageCode : 'ar', countryCode : 'DZ', name : 'Arabic', flag: require('@/assets/flags/dzFlag.png')},
        { languageCode : 'hi', countryCode : 'IN', name : 'Hindi', flag: require('@/assets/flags/inFlag.jpeg')},
        { languageCode : 'de', countryCode : 'DE', name : 'German', flag: require('@/assets/flags/germanFlag.jpg')},
        { languageCode : 'es', countryCode : 'ES', name : 'Spainish', flag: require('@/assets/flags/spainFlag.jpg')},
        { languageCode : 'fr', countryCode : 'FR', name : 'French', flag: require('@/assets/flags/frenchFlag.jpg')},
        { languageCode : 'id', countryCode : 'ID', name : 'Indonesian', flag: require('@/assets/flags/indonesiaFlag.jpg')},
        { languageCode : 'it', countryCode : 'IT', name : 'Italian', flag: require('@/assets/flags/italyFlag.jpg')},
        { languageCode : 'ja', countryCode : 'JP', name : 'Japanese', flag: require('@/assets/flags/japanFlag.jpg')},
        { languageCode : 'ko', countryCode : 'KR', name : 'Korean', flag: require('@/assets/flags/southkoreaFlag.jpg')},
        { languageCode : 'ms', countryCode : 'MY', name : 'Malay', flag: require('@/assets/flags/malaysiaFlag.jpg')},
        { languageCode : 'pt', countryCode : 'PT', name : 'Potuguese', flag: require('@/assets/flags/potugueseFlag.jpg')},
        { languageCode : 'ru', countryCode : 'RU', name : 'Russian', flag: require('@/assets/flags/russiaFlag.jpg')},
        { languageCode : 'th', countryCode : 'TH', name : 'Thai', flag: require('@/assets/flags/thaiFlag.jpg')},
        { languageCode : 'tr', countryCode : 'TR', name : 'Turkish', flag: require('@/assets/flags/turkishFlag.jpg')},
        { languageCode : 'zh', countryCode : 'CN', name : 'Chinese', flag: require('@/assets/flags/chinaFlag.jpg')}
    ];
        

    /// 
    /// Debug Mode
    ///
    static isDebugMode : Boolean = true;

    /// 
    /// Video Setting
    ///
    static isEnableVideoSetting : Boolean = true;
    
    ///
    /// Notification Setting
    ///
    static enableNotification = 'true';

    // static fcmServerKey : string = '00000000000:000000000000000000000000000000000000000000000000000000000000000000000000-0000000000000000000000000000000000000000000000000000000000000000000';
    static fcmServerKey : string = 'AAAAdas8rOs:APA91bEhLizx8g2RQpdxf6eWfZitLrriVUiAYUIzN6DKKSmXsfyXk6Oq79iMFDZADnEHsIdu-67rue1sss0QmFzKWnIvQi54eWvtvsJLQAlLS0ow4pO_3aQN9RUSiqsvPKSPcuKH_05d';
    
    // static firebaseWebPushKeyPair : string = '00000000000000000000000000000000000000000000000-000000000000000000000000000000000000000';
    static firebaseWebPushKeyPair : string = 'BB25q3Hfb46baQzaD2geWF7_W529dt8Cz9VVbcti1vmO6C0-W3qKWVDHrvW3mCy8A6XSdZKOM8hZW7S7FOFqKuQ';
    

    ///
    /// Adsense Setting
    ///
    // static adClient = "ca-pub-0000000000000000";
    static adClient = "ca-pub-8907881762519005";
    // static adSlot = "0000000000";
    static adSlot = "9078562335";

    ///footer Setting
    static copyRight = "Copyright @ PanaceaSoft 2022";

    static googlePlayUrl = "https://play.google.com/store/apps/details?id=com.panaceasoft.flutterbuyandsell";

    static appStoreUrl = "https://www.apple.com/app-store/";

    static googleSetting = true;

    static appStoreSetting = true;

    static bannerSrc = require('@/assets/images/chart.jpeg');

    //Google and OpenStreet Map Setting
    static googleMap = false;

    static openStreetMap = true;

    //image limit
    static imageLimit = 3;
    
}
