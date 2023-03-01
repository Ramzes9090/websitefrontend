import React from 'react'
import CardItem from './CardItem'
import './InfoText.css'

function InfoText() {
    return (
        <div className='container-text'>
            <h1> Dowiedz się więcej o tej fascynującej sztuce! </h1>
            <p className='text-info'>
                „Dziadek był golibrodą, tata fryzjerem męskim, mama hobbystyczną fryzjerką…” Nic więc dziwnego, że zawodem tym, interesuje się również młode pokolenie. Dziś jednak panuje moda na barberstwo. Barber jest osobą dbającą o wygląd mężczyzn, ich fryzury i brody. Nie tylko strzyże, ale specjalizuje się również w pielęgnacji. Jak jednak zawód ten postrzegany jest przez samych barberów?

                Czym jest barberstwo z perspektywy barbera?
                Zdaniem niejednego doświadczonego barbera wizyta w salonie barberskim to nie tylko strzyżenie, ale wręcz pewnego rodzaju rytuał, chwila relaksu i odprężenia. Barberzy porównują ten proces z wizytą kobiet u makijażystki, manikiurzystki czy kosmetyczki, gdzie mają chwilę tylko dla siebie. Barberzy podkreślają, że niby wszystkie brody wydają się takie same, a w rzeczywistości każda z nich jest inna, tak samo zresztą, jak jej właściciel. W związku z tym fascynuje nie tylko samo golenie i strzyżenie, ale też, a może przede wszystkim kontakt z drugim człowiekiem.


            </p>
            <div className='text-card'>
                <CardItem
                    src="images/img-2.jpg"
                    text="Sprawdź nasze usługi i skorzystaj z porad profesjonalnego Barbera "
                    label='Usługi'
                    path='/services'
                />
            </div>

            <p className='text-info'>

                To nie jest tak, że ktoś z talentem do świadczenia usług barberskich po prostu się rodzi. Co prawda nie każdy nadaje się do tego zawodu, ale z pewnością każdy może się w tej profesji sprawdzić. Wystarczy, że uda się na kurs przygotowawczy, kurs barberski dla początkujących. Dziś bez problemu można znaleźć niejedną tego typu szkołę. Taki kurs najczęściej trwa 200 godzin (8 godzin dziennie), czyli dokładnie 24 dni. W czasie tych wszystkich zajęć uczestnik musi „przerobić” 50 żywych głów. Głowy fryzjerskie to nie to samo, co żywe. Ważne jest wobec tego to, aby miał on styczność zarówno z jednymi, jak i z drugimi. To pomoże mu dojść do perfekcji. Zajęcia prowadzone w ramach kursu składają się z teorii i praktyki. Lekcje teoretyczne gwarantują zastrzyk wiedzy fryzjerskiej oraz filozofii barberingu. Teoria to 2 dni, a praktyka, czyli praca na głowach fryzjerskich to już aż 4 dni. Zajęcia prowadzone są przez doświadczonych barberów, którzy podobnie jak uczestnicy, kiedyś stawiali pierwsze kroki w tym fachu. Zapewniają luźną atmosferę, która pozwala w zupełnie przyjaznych i ciepłych warunkach zdobyć pierwsze doświadczenia z użyciem nożyczek, brzytwy oraz pozostałych barberskich narzędzi. Taki kurs to gwarancja szybkiego i efektywnego pozyskania wiedzy, która pozwoli w przyszłości sprostać oczekiwaniom wymagających klientów we własnym salonie.

                Aktualnie noszenie brody jest bardzo modne i zarazem stylowe. Niektórzy panowie decydują się na delikatny, ciekawie ukształtowany zarost lub wąs. Inni gustują w nieco bujniejszym zaroście. Każdy ma prawo wyboru. Każdy może robić ze swoim wyglądem, co chce. A barber jak najbardziej mu w tym pomoże. To zawód przyszłości – powtarzać można wręcz do znudzenia. Ten, dla którego własna praca jest jednocześnie pasją, z pewnością sprosta oczekiwaniom nawet najbardziej wymagającego klienta. Dziś i Ty masz możliwość sprawdzić się w roli barbera. Skorzystaj z możliwości, jaką daje Ci kurs barberski dla początkujących.
            </p>

        </div>
    )
}

export default InfoText
