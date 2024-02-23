# MovieApp

Bu uygulama, The Movie DB API'sini kullanarak film verilerini listeleyen ve beğenilen filmleri saklayan bir mini uygulamadır.

## Özet

MovieApp, Redux ve React Navigation gibi teknolojiler kullanılarak geliştirilmiştir. Redux, uygulama durumunu yönetmek ve kullanıcı beğenilerini saklamak için kullanılmıştır. React Navigation ile uygulamanın gezinme yapısı oluşturulmuştur. The Movie DB API'den alınan film verileri, kullanıcıların beğenileri ve arama fonksiyonalitesi gibi özellikler uygulamaya entegre edilmiştir.

## Yapılan İşler

- The Movie DB API'den film verilerini almak için fetch kullanıldı.
- Redux Toolkit kullanılarak Redux store oluşturuldu ve film verileri, beğenilen filmler gibi durumlar saklandı.
- React Navigation ile uygulamanın gezinme yapısı oluşturuldu. Stack Navigator, Tab Navigator gibi yöntemler kullanıldı.
- Kullanıcıların beğendiği filmler Redux store'da saklandı ve Redux-persist kullanılarak kalıcı hale getirildi.
- Film listesi ve detayları için ayrı React component'leri oluşturuldu.
- Kullanıcıların filmleri arayabilmesi için arama fonksiyonalitesi eklendi.

## Kurulum

1. Bu repo'yu klonlayın.
2. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Uygulamayı başlatmak için `npm start` komutunu çalıştırın.

## Kullanılan Teknolojiler

- React Native
- Redux Toolkit
- React Navigation
- The Movie DB API

## Demo Video

[![MovieApp Demo](Assets/video/movieApp.mp4)](Assets/video/movieApp.mp4)

## Katkılar

Katkılarınızı memnuniyetle karşılıyoruz. Lütfen açık bir issue açın veya bir pull request gönderin.

## UPDATES

removed eslint --