# kns

uygulamalari acma, hatalar, cozumler

EMAAR:  


asagidakielrin disinda baska hata alinirsa packagelar ile ilgili: sudo npx jetifier 

1)emaar acilirken hatalar 
Fetching podspec for `glog` from `../node_modules/react-native/third-party-podspecs/glog.podspec`
[!] Unable to find a specification for 

COZUMU: ilgili kutuphanelerin .podspecindeki from  -  to /

s.dependency

2)fsevents veya darwin hatasi: node versiyonu ile ilgili asagida belirtilen node v calismazsa 12.0.0, 12, 14, 14.5.0 te den

node modules, packagelock ve pods sil nvm use 12 yap sonra npm i, sudo npm i cd ios pod install yap bu sekilde calisiyor

3)android apk alirken. bundle hatasi alirsan:

ana dizinde: npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 


android klasorunde: sudo ./gradlew assembleRelease -x bundleReleaseJsAndAssets


4)xcodedda PERMISSION DENIED 

sudo chown -R kaan ~/desktop/KNS/projectName


