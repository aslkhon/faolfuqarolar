uzbek = true
switchLang()

function switchLang() {
  if (uzbek) {
    document.getElementById('intro').innerHTML = 'Tumanimizni obodonlashtirishiga o\'z hissangizni qo\'shing. Atrof-muhit bo\'yicha muammolar va takliflaringizni kiriting'
    document.getElementById('download_first').innerHTML = 'Birinchilardan bo\'lib ilovani'
    document.getElementById('download_second').innerHTML = 'yuklab oling!'

    document.getElementById('h1').innerHTML = 'Loyiha haqida'
    document.getElementById('p1').innerHTML = 'Sharof Rashidov tuman hokimiyati, fuqarolardan kelib tushadigan ma\'lumotlar yordamida, atrof-muhit va obodonlashtirish sohalarini yaxshilaydi. Buning uchun har bir befarq bo\'lmagan fuqaro ilovani yuklab olib, muammolar to\'g\'risida xabar beradi.'

    document.getElementById('h2').innerHTML = 'Ilovani yuklab oling'
    document.getElementById('p2').innerHTML = 'Ilovani PlayMarket va Appstore platformalaridan yuklab oling, qulay royhatdan o\'ting, telefon raqamingizni kiriting, qo\'shimcha ravishda ism va sharifingiz haqida malumot berib o\'ting.'
    
    document.getElementById('h3').innerHTML = 'Muammo haqida xabar bering'
    document.getElementById('p3').innerHTML = 'Tumanda Siz uchratgan muammolarni rasmga tushiring rasmga batafsil izoh bering muammo turini tanlang va ilova orqali hokimiyatga yuboring. '
    
    document.getElementById('h4').innerHTML = 'Jarayonni kuzatib boring'
    document.getElementById('p4').innerHTML = 'Ma\'lumotingiz bilan olib borilayotgan ishlar bo\'yicha yangiliklarni kuzatib boring. Mutasaddi tashkilotlar tomonidan olib borilayotgan ishlardan xabardor bo\'ling. '
    
    document.getElementById('h5').innerHTML = 'Faol bo\'ling'
    document.getElementById('p5').innerHTML = 'Faolligingiz bilan tumanimizni yanada obod va farovon bo\'lishiga ko\'maklashing.'

    document.getElementById('privacy').innerHTML = 'Maxfiylik siyosati '
    document.getElementById('terms').innerHTML = ' Foydalanish shartlari'

    document.getElementById('hero1').src = './image/hero-phn.png'
    document.getElementById('i1').src = './image/iPhone-1.png'
    document.getElementById('i2').src = './image/iPhone-2.png'
    document.getElementById('i3').src = './image/iPhone-3.png'
    document.getElementById('i4').src = './image/iPhone-4.png'
    document.getElementById('i5').src = './image/iPhone-5.png'

    uzbek = false
  } else {
    document.getElementById('intro').innerHTML = 'Внесите свой вклад в облагораживании своего района. Предлагайте свои идеи, способствующие улучшению окружающей среды и проблемы с которыми вы сталкиваетесь в работе.'
    document.getElementById('download_first').innerHTML = 'Загрузите приложение '
    document.getElementById('download_second').innerHTML = 'прямо сейчас!'

    document.getElementById('h1').innerHTML = 'О проекте'
    document.getElementById('p1').innerHTML = 'Хокимият Шароф-Рашидовского района с помощью информации, предоставленной гражданами, улучшает окружающую среду и место проживания. Каждый неравнодушный к своему району гражданин может скачать приложение, и сообщать о проблемах. '

    document.getElementById('h2').innerHTML = 'Загрузите приложение'
    document.getElementById('p2').innerHTML = 'Загрузите приложение в платформах PlayMarket и Appstore, пройдите удобную регистрацию, введите свой номер телефона, в виде дополнительной информации укажите имя и фамилию.'
    
    document.getElementById('h3').innerHTML = 'Сообщите о проблеме'
    document.getElementById('p3').innerHTML = 'Сфотографируте проблему с которой Вы столкнулись на своем районе подробно опишите проблему выберите тип проблемы с помощью приложения отправьте сообщение хокимияту. '
    
    document.getElementById('h4').innerHTML = 'Следите за изменениями'
    document.getElementById('p4').innerHTML = 'Следите за новостями о проделанной работе с вашей информацией. Будьте в курсе работы, проводимой соответствующими организациями.  '
    
    document.getElementById('h5').innerHTML = 'Будьте активны'
    document.getElementById('p5').innerHTML = 'Помогите своей активностью сделать район более процветающим.'

    document.getElementById('privacy').innerHTML = 'Политика конфиденциальности '
    document.getElementById('terms').innerHTML = ' Условия использования'

    document.getElementById('hero1').src = './image/hero-phn_rus.png'
    document.getElementById('i1').src = './image/iPhone-1_rus.png'
    document.getElementById('i2').src = './image/iPhone-2_rus.png'
    document.getElementById('i3').src = './image/iPhone-3_rus.png'
    document.getElementById('i4').src = './image/iPhone-4_rus.png'
    document.getElementById('i5').src = './image/iPhone-5_rus.png'

    uzbek = true
  }
}

const language = document.querySelector('.lang')

language.addEventListener('click', switchLang)