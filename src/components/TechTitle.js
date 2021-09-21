import React from 'react';

const TechTitle = () => {
    return ( 
        <div className="container col-12 tech-title">
            <div className="colorful-tech-text" id="darkColorfulText">
                Creative junior
            </div>
            <div className="tech-label">
                Tworzenie stron to moja pasja. Rozwijam swoję umiejętności techniczne 
                w kierunku Frontendu. Fascynuję się nowoczesnym Web designem, niekonwencjonalne
                projekty wzbudzają we mnie pozytywną energię. Chciałbym wejść na wyższy poziom, na poziom
                który pozwoli mi kreować elementy pozytywnie zaskakujące użytkowników.
            </div>
            <div className=" colorful-tech-text__support">
                Support
            </div>
            <div className="tech-label">
                Swoją przygodę zawodową zacząłem od wsparcia technicznego. Moja praca polegała na pomocy klientowi
                telefonicznie oraz mailowo. Rozwiązywałem na bieżąco problemy zgłaszane przez klientów, aczkolwiek w 
                przypadku błędów były przekazywane do działu oprogramowania. Przez dwa lata nauczyłem się <strong>testować</strong> oprogramowanie,
                w wielu przypadkach wspierałem dział testów sprawdzając czy nowość w systemie czy poprawka działa poprawnie. Testy przeprowadzałem manualnie
                przeklikując różne scenariusze.  
            </div>
            <div className="colorful-tech-text__support"> 
                UI/UX
            </div>
            <div className="tech-label">
                Wszystko zaczyna sie w głowie. Przed rozpoczęciem pisania kodu
                zaczynam od planowania i tworzenia layout'u w programie graficznym. Wykorzystuję do tego Adobe XD, często korzystam z programu Inkscape do tworzenia obrazków.
            </div>
            <div className="col-12 box-add-tech">
                <div className="col-md-4 box-add-tech__left">
                    <div className=" colorful-tech-text__add-skills">Other</div>
                    <div className="tech-label__other">
                        Na helpdesku, posługiwałem sie językiem SQL podczas pracy z bazami danych.
                        W wyniku dużej ilości zgłoszeń na supporcie musiałem wykazywać sie umiejętnością 
                        analitycznego myślenia. Na co dzień miałem do czynienia z systemem LINUX.
                    </div>
                </div>
                <div className="col-md-7 box-add-tech__right">
                    <div className="colorful-tech-text__text-main-skills">
                            Main skills
                    </div>
                    <div className="tech-color-skills">
                        Poniżej główne umiejętności
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TechTitle;