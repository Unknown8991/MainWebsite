import React from 'react';
import html from '../images/icons8-html-5.svg';
import sass from '../images/icons8-sass.svg';
import js from '../images/icons8-javascript.svg';
import react from '../images/icons8-react.svg';
import vue from '../images/icons8-vue-js(1).svg';
import git from '../images/icons8-git.svg';

const data = {
    techs: [
        {
            id: 1,
            name: 'HTML',
            description: 'Od 2019 roku tworzę własne strony przy użyciu Html oraz CSS. W pełni opanowałem umiejętność stworzenia odpowiedniej struktury strony WWW oraz aplikacji. Przy stylowaniu strony WWW staram się tworzyć animacje przy użyciu keyframes. Dzięki czemu witryna sprawia wrażenie "ożywionej" i jest bardziej przyjazna dla użytkownika. Zwracam uwagę, aby projekty były responsywne i dostowane do każdego urządzenia mobilnego jak i komputerów. W zależności od realizacji, potrafię zaprojektować aplikację kierując się techniką Mobile First, aby była jak najbardziej dopasowana do urządzeń mobilnych. ',
            image: html,
        },
        {
            id: 2,
            name: 'SASS',
            description: 'Dzięki preprocesorowi CSS, moja praca jest zdecydowanie bardziej efektywniejsza. Podczas nauki SASS zacząłem korzystać z metodologii BEM, dzieki czemu kod jest uporządkowany. Preprocessor proponuje dwie składnie SASS lub SCSS, ich zasada działania jest taka sama, różnicą jest tylko sama składnia. Przyjaźniejszą propozycją dla większości programistów jest składnia SCSS, dla mnie również i to właśnie ją stosuje w swoich projektach. Przy okazji nauki SASS zacząłem stosować task runner o nazwie Gulp. Automatyzował czyli upraszczał moją pracę, był odpowiedzialny m.in za: przeładowanie przeglądarki po zapisaniu kodu, zmniejszenie rozmiaru plików CSS oraz łączenie wielu plików w jeden plik końcowy .css.',
            image: sass,
        },
        {
            id: 3,
            name: 'Java Script',
            description: 'Opanowałem solidne postawy Java Script. Naukę rozpocząłem od kursów Samuraja Programowania, posiadam certyfikat ukończenia kursu "Programowanie w JavaScript". Przez okres cały kurs stworzyłem kilkadziesiąt aplikacji. Poznałem metodę forEach jej sposób działania i w jaki sposób ją wykorzystywać w kodzie. Efekt pisania na maszynie wykonany w czystym JavaScript nie jest mi obcy. Nauczyłem sie również wykorzystywać programowanie zorientowane obiektowo, co przyczyniło się do przejścia z czystego JavaScript na framework Vue.js oraz React Własne aplikacje to m.in: color-picker oraz ballon-cloud. Próbkę mojego kodu można znaleźć na moim GitHub.',
            image: js,
        },
        {
            id: 4,
            name: 'React',
            description: 'Na chwilę obecną najwięcej czasu na naukę poświęcam React. Posiadam certyfikat ukonczenia kursu od Samuraja Programowania "React od podstaw". Naczyłem się korzystać z komponentów funkcyjnych i stanowych, obiektów state i props, prace z formularzami, metoda setState, tworzenie aplikacji za pomocą Create React App. Przy okazji tego kursu nauczyłem się również korzystać z metody fetch oraz promises. Przykład apliakcji w której korzystam z API to randomUsers na moim GitHub.',
            image: react,
        },
        {
            id: 5,
            name: 'Vue.js ',
            description: 'Framework Vue zacząłem sie uczyć przed rozpoczęciem pracy z React. Wiedzę nabyłem z tutoriali na YouTube pl/en oraz z książki pt. "Vue.js w akcji" której twórcami są Erik Hanchett i Benjamin Listwon. Nabyłem wiedzę z zakresu tworzenia widoków i modelów widoków, praca na formularzach, dyrektywy warunkowe oraz pętle, sortowanie komponentów oraz w jaki sposób przygotować środowisko. Aplikacje napisane we Vue można znaleźć na moim GitHub, a jest to m.in: Aplikacja do zarządzania salonem kosmetycznym oraz aplikacja która łączy się z API NASA i pobiera obrazki wraz z opisami.',
            image: vue,
        },
        {
            id: 6,
            name: 'Git',
            description: 'System kontroli wersji wykorzystuję w każdym projekcie, aby zachować historię zmian w aplikacji. Najczęściej z gitem pracuję sam, aczkolwiek przy jednym z projektów pracuję z zespołem i wykorzystujemy system kontroli wersji pracując wspólnie na repozytorium. Flow pracy jest przejrzyste, wprowadzając nową zmianę, feature czy poprawkę błędu tworzymy nową gałąź, następnie wprowadzamy zmianę i scalamy modyfikację z główną gałęzią, a zbędną usuwamy. ',
            image: git,
        },

    ]
}

const Item = (props)=>{
    return(
        <div className="tech-item col-md-3">
            <div className="position-header-tech">
                <img className="col-6 logo " src={props.content.image} alt="" />
                <div className="col-6 text text--tech">{props.content.name}</div>
            </div>
            <br />
          <div className="tech-description">
            {props.content.description}
          </div>
        </div>
    )
}

class TechList extends React.Component {
    render() { 
        
        const Items = data.techs.map(item => <Item key={item.id} content={item}/>)
        return (
        <div className="col-md-12 tech-list">{Items}</div>
        );
    }
}
 
export default TechList;