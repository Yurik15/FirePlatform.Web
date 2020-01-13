function visStart(vistring){
    visList=vistring;
    curn=0;
    vis(demo);
    }
    function vis(item) {
    
    var vint=0;
    for (child of item.$children) {
    
    vint= parseInt(visList.charAt(curn));
    
    child.gray=!vint;
    
    if (hiddenOn==false)
    {child.v = 1;}
    else
    {child.v = vint;}
    
    curn+=1;
    
    if (vint==0 && hiddenOn==false)
    {graydowntree(child)}
    else
    {vis(child);}}}
    function graydowntree(item) {
    for (child of item.$children) {
    child.gray=true;
    curn+=1;
    graydowntree(child);}}
    function expl(item,l) {
    for (child of item.$children) {
    if (child.level<=l-1) {child.isOpen=true}
    expl(child,l);  }}
    function updateProps(props){
        var prop=props.split(",");
        var lvl=prop[3];
        if (lvl == '0'){
            showLines = (prop[0] == 'True');
            hiddenOn = (prop[1] == 'True');
            var localnumOn = (prop[2] == 'True');
            if (numOn!=localnumOn) {numOn=localnumOn;num(demo);}
            if (showLines==true) {linlify(demo,"<hr>");} else {linlify(demo,"");}
            invisify(demo);}
        else {
            colall(demo);
            expl(demo, parseInt(lvl,10));
        }   
    }
    function colall(item){
        for (child of item.$children) {
        child.isOpen=false;
        colall(child);  }}
    function num(item) {
        for (child of item.$children) {
            if (child.n == 0) {child.n =1;child.nn =0;} else {child.n =0;child.nn =1;}
        num(child);}}   
    function linlify(item,hr) {
       for (child of item.$children) {
        child.hr=hr;
        linlify(child,hr);  }}
    function invisify(item) {
       for (child of item.$children) {
        if (hiddenOn && child.gray) 
            {child.v=false} 
        else 
            {child.v=true}
        invisify(child);  }}
    function start(){
        if (document.documentElement.getBoundingClientRect().height!=pageH){
            pageH=document.documentElement.getBoundingClientRect().height
            //window.external.notify(document.documentElement.getBoundingClientRect().height.toString());}}
            CefSharp.PostMessage(pageH.toString());}
    }
    function assignTreeData(){
        return [
    {L: 1,num: 'Rozdział 1. ',name: 'Zasady ogólne',children: [
    {L: 2,num: '§ 207. ',name: 'Zasady projektowania',children: [
    {L: 3,num: '1. ',name: 'Cele projektowania',children: [
    {L: 4,num: '',name: 'Budynek i urządzenia z nim związane powinny być projektowane i wykonane w sposób ograniczający możliwość powstania pożaru, a w razie jego wystąpienia zapewniający:<br>1) zachowanie nośności konstrukcji przez określony czas;<br>2) ograniczenie rozprzestrzeniania się ognia i dymu wewnątrz budynku;<br>3) ograniczenie rozprzestrzeniania się pożaru na sąsiednie obiekty budowlane lub tereny przyległe;<br>4) możliwość ewakuacji ludzi lub ich uratowania w inny sposób;<br>5) uwzględnienie bezpieczeństwa ekip ratowniczych.'}] },
    {L: 3,num: '2. ',name: 'Budynki istniejące',children: [
    {L: 4,num: '',name: 'Przepisy rozporządzenia dotyczące bezpieczeństwa pożarowego, wymiarów schodów, o których mowa w § 68 ust. 1 i 2, a także oświetlenia awaryjnego, o którym mowa w § 181, stosuje się, z uwzględnieniem § 2 ust. 2, również do użytkowanych budynków istniejących, które na podstawie przepisów odrębnych uznaje się za zagrażające życiu ludzi.'}] }] },
    {L: 2,num: '§ 208. ',name: 'Stosowanie rozporządzenia ',children: [
    {L: 3,num: '1. ',name: 'Czynniki projektowe',children: [
    {L: 4,num: '',name: 'Przepisy niniejszego działu określają wymagania dotyczące bezpieczeństwa pożarowego budynków lub ich części, wynikające z ich przeznaczenia i sposobu użytkowania, wysokości lub liczby kondygnacji, a także położenia w stosunku do poziomu terenu oraz do innych obiektów budowlanych.'}] },
    {L: 3,num: '2. ',name: 'Inne przepisy i normy',children: [
    {L: 4,num: '',name: 'Stosowanie przepisów rozporządzenia wymaga uwzględnienia:<br>1) przepisów odrębnych dotyczących ochrony przeciwpożarowej, określających w szczególności:<br>a) zasady oceny zagrożenia wybuchem i wyznaczania stref zagrożenia wybuchem,<br>b) warunki wyposażania budynków lub ich części w instalacje sygnalizacyjno-alarmowe i stałe urządzenia gaśnicze,<br>c) zasady przeciwpożarowego zaopatrzenia wodnego,<br>d) wymagania dotyczące dróg pożarowych,<br>2) wymagań Polskich Norm i warunków określonych w załączniku nr 3 do rozporządzenia, dotyczących w szczególności zasad ustalania:<br>a) gęstości obciążenia ogniowego pomieszczeń i stref pożarowych,<br>b) klas odporności ogniowej i dymoszczelności elementów budynku oraz elementów stosowanych w instalacjach, w tym zamknięć otworów,<br>c) klas odporności dachów na ogień zewnętrzny,<br>d) właściwości funkcjonalnych urządzeń służących do wentylacji pożarowej,<br>e) stopnia rozprzestrzeniania ognia przez ściany zewnętrzne od strony zewnętrznej,<br>f) klas reakcji na ogień wyrobów (materiałów) budowlanych,<br>g) toksyczności produktów rozkładu spalania materiałów.'}] }] },
    {L: 2,num: '§ 208a. ',name: 'Klasy reakcji na ogień',children: [
    {L: 3,num: '1. ',name: 'Palność',children: [
    {L: 4,num: '',name: 'Określeniom użytym w rozporządzeniu: niepalny, niezapalny, trudno zapalny, łatwo zapalny, niekapiący, samogasnący, intensywnie dymiący odpowiadają klasy reakcji na ogień zgodnie z załącznikiem nr 3 do rozporządzenia.'}] },
    {L: 3,num: '2. ',name: 'Rozprzestrzenianie ognia',children: [
    {L: 4,num: '',name: 'Elementy budynku określone w rozporządzeniu jako nierozprzestrzeniające ognia, słabo rozprzestrzeniające ogień lub silnie rozprzestrzeniające ogień powinny spełniać, z zastrzeżeniem ust. 3, wymagania zgodnie z załącznikiem nr 3 do rozporządzenia.'}] },
    {L: 3,num: '3. ',name: 'Ściany zewnętrzne',children: [
    {L: 4,num: '',name: 'W przypadku ścian zewnętrznych budynku, w tym z ociepleniem i okładziną zewnętrzną lub tylko z okładziną zewnętrzną, przez elementy budynku:<br>1) nierozprzestrzeniające ognia – rozumie się elementy budynku nierozprzestrzeniające ognia zarówno przy działaniu ognia wewnątrz, jak i od zewnątrz budynku,<br>2) słabo rozprzestrzeniające ogień – rozumie się elementy budynku, które z jednej strony są słabo rozprzestrzeniające ogień, natomiast przy działaniu ognia z drugiej strony są słabo rozprzestrzeniające ogień lub nierozprzestrzeniające ognia,<br>3) silnie rozprzestrzeniające ogień – rozumie się elementy budynku, które przy działaniu ognia z jednej strony sklasyfikowane są jako silnie rozprzestrzeniające ogień, niezależnie od klasyfikacji uzyskanej przy działaniu ognia z drugiej strony – dla których wymagania przy działaniu ognia wewnątrz budynku określa się zgodnie z załącznikiem nr 3 do rozporządzenia, a przy działaniu ognia od zewnątrz budynku określa się zgodnie z Polską Normą dotyczącą metody badania stopnia rozprzestrzeniania ognia przez ściany.'}] },
    {L: 3,num: '4. ',name: 'Drzwi i zamknięcia',children: [
    {L: 4,num: '',name: 'Występująca w rozporządzeniu klasa E I odporności ogniowej drzwi lub innych zamknięć otworów oznacza klasę EI1 lub EI2 zgodnie z Polską Normą dotyczącą klasyfikacji ogniowej ustalanej na podstawie badań odporności ogniowej, z wyłączeniem instalacji wentylacyjnej; dla drzwi przystankowych do dźwigu dopuszcza się określenie odporności ogniowej zgodnie z Polską Normą dotyczącą wykonywania próby odporności ogniowej drzwi przystankowych.'}] },
    {L: 3,num: '5. ',name: 'Dymoszczelność drzwi',children: [
    {L: 4,num: '',name: 'Klasy dymoszczelności drzwi Sa i S200 określa się zgodnie z Polską Normą dotyczącą klasyfikacji ogniowej ustalanej na podstawie badań odporności ogniowej, z wyłączeniem instalacji wentylacyjnej.'}] }] },
    {L: 2,num: '§ 209. ',name: 'Rodzaje budynków i stref',children: [
    {L: 3,num: '1. ',name: 'Przeznaczenie',children: [
    {L: 4,num: '',name: 'Budynki oraz części budynków, stanowiące odrębne strefy pożarowe w rozumieniu § 226, z uwagi na przeznaczenie i sposób użytkowania, dzieli się na:<br>1) mieszkalne, zamieszkania zbiorowego i użyteczności publicznej charakteryzowane kategorią zagrożenia ludzi, określane dalej jako ZL,<br>2) produkcyjne i magazynowe, określane dalej jako PM,<br>3) inwentarskie (służące do hodowli inwentarza), określane dalej jako IN.'}] },
    {L: 3,num: '2. ',name: 'Strefy ZL',children: [
    {L: 4,num: '',name: 'Budynki oraz części budynków, stanowiące odrębne strefy pożarowe, określane jako ZL, zalicza się do jednej lub do więcej niż jedna spośród następujących kategorii zagrożenia ludzi:<br>1) ZL I – zawierające pomieszczenia przeznaczone do jednoczesnego przebywania ponad 50 osób niebędących ich stałymi użytkownikami, a nieprzeznaczone przede wszystkim do użytku ludzi o ograniczonej zdolności poruszania się,<br>2) ZL II – przeznaczone przede wszystkim do użytku ludzi o ograniczonej zdolności poruszania się, takie jak szpitale, żłobki, przedszkola, domy dla osób starszych,<br>3) ZL III – użyteczności publicznej, niezakwalifikowane do ZL I i ZL II,<br>4) ZL IV – mieszkalne,<br>5) ZL V – zamieszkania zbiorowego, niezakwalifikowane do ZL I i ZL II.'}] },
    {L: 3,num: '3. ',name: 'Strefy PM',children: [
    {L: 4,num: '',name: 'Wymagania dotyczące bezpieczeństwa pożarowego budynków oraz części budynków stanowiących odrębne strefy pożarowe, określanych jako PM, odnoszą się również do garaży, hydroforni, kotłowni, węzłów ciepłowniczych, rozdzielni elektrycznych, stacji transformatorowych, central telefonicznych oraz innych o podobnym przeznaczeniu.'}] },
    {L: 3,num: '4. ',name: 'Strefy IN',children: [
    {L: 4,num: '',name: 'Wymagania dotyczące bezpieczeństwa pożarowego budynków oraz części budynków stanowiących odrębne strefy pożarowe, określanych jako IN, odnoszą się również do takich budynków w zabudowie zagrodowej o kubaturze brutto nieprzekraczającej 1.500 m3, jak stodoły, budynki do przechowywania płodów rolnych i budynki gospodarcze.'}] },
    {L: 3,num: '5. ',name: 'Strefy o kilku kategoriach',children: [
    {L: 4,num: '',name: 'Strefy pożarowe zaliczone, z uwagi na przeznaczenie i sposób użytkowania, do więcej niż jednej kategorii zagrożenia ludzi, powinny spełniać wymagania określone dla każdej z tych kategorii.'}] }] },
    {L: 2,num: '§ 210. ',name: 'Odrębność budynków',children: [
    {L: 3,num: '1. ',name: 'Całkowite oddzielenie pionowe',children: [
    {L: 4,num: '',name: 'Części budynku wydzielone ścianami oddzielenia przeciwpożarowego w pionie – od fundamentu do przekrycia dachu - mogą być traktowane jako odrębne budynki.'}] }] },
    {L: 2,num: '§ 211. ',name: 'Budynki z ograniczeniem wolności',children: [
    {L: 3,num: '1. ',name: 'Wyjątki - zakwaterowanie osadzonych',children: [
    {L: 4,num: '',name: 'Przepisów § 242 ust. 1, § 243 ust. 1, § 245 pkt 2 oraz § 256 ust. 3, w zakresie kategorii ZL V, nie stosuje się do budynków i pomieszczeń przeznaczonych do zakwaterowania osób osadzonych.'}] },
    {L: 3,num: '2. ',name: 'Wyjątki - zakłady karne i areszty',children: [
    {L: 4,num: '',name: 'Przepisów § 236 ust. 4 oraz § 239 ust. 2 pkt 3 i 4 nie stosuje się do budynków zlokalizowanych na terenie zakładów karnych i aresztów śledczych.'}] },
    {L: 3,num: '3. ',name: 'Wyjątki - zakłady poprawcze i schroniska',children: [
    {L: 4,num: '',name: 'Przepisów § 239 ust. 2 pkt 3 i 4 nie stosuje się do zakładów poprawczych i schronisk dla nieletnich.'}] }] }] },
    {L: 1,num: 'Rozdział 2. ',name: 'Odporność pożarowa',children: [
    {L: 2,num: '§ 212. ',name: 'Klasy',children: [
    {L: 3,num: '1.',name: 'Klasy ABCDE',children: [
    {L: 4,num: '',name: 'Ustanawia się pięć klas odporności pożarowej budynków lub ich części, podanych w kolejności od najwyższej do najniższej i oznaczonych literami: A, B, C, D i E, a scharakteryzowanych w § 216.'}] },
    {L: 3,num: '2.',name: 'Klasy w ZL',children: [
    {L: 4,num: '',name: 'Wymaganą klasę odporności pożarowej dla budynku, zaliczonego do jednej kategorii ZL, określa poniższa tabela: <br><table ><tbody><tr><td>Budynek</td><td>ZL I</td><td>ZL II</td><td>ZL III</td><td>ZL IV</td><td>ZL V</td></tr><tr><td>N</td><td>B</td><td>B</td><td>C</td><td>D</td><td>C</td></tr><tr><td>SW</td><td>B</td><td>B</td><td>B</td><td>C</td><td>B</td></tr><tr><td>W</td><td>B</td><td>B</td><td>B</td><td>B</td><td>B</td></tr><tr><td>WW</td><td>A</td><td>A</td><td>A</td><td>B</td><td>A</td></tr></tbody></table>'}] },
    {L: 3,num: '3.',name: 'Obniżenie klasy w ZL',children: [
    {L: 4,num: '',name: 'Dopuszcza się obniżenie wymaganej klasy odporności pożarowej w budynkach wymienionych w poniższej tabeli do poziomu w niej określonego:<br><table><tbody><tr><td>Liczba kondygnacji nadziemnych</td><td>ZL I</td><td>ZL II</td><td>ZL III</td></tr><tr><td>1</td><td>D</td><td>D</td><td>D</td></tr><tr><td>2*⁾</td><td>C</td><td>C</td><td>D</td></tr></tbody></table>*) Gdy poziom stropu nad pierwszą kondygnacją nadziemną jest na wysokości nie większej niż 9 m nad poziomem terenu.'}] },
    {L: 3,num: '4.',name: 'Klasy w PM i IN',children: [
    {L: 4,num: '',name: 'Wymaganą klasę odporności pożarowej dla budynku PM oraz IN, z zastrzeżeniem § 282, określa poniższa tabela:<br><table><tbody><tr><td colspan="1" rowspan="2"><div>Maksymalna gęstość obciążenia ogniowego strefy pożarowej w budynku Q [MJ/m&sup2;]</div></td><td colspan="1" rowspan="2"><div>Budynek o jednej kondygnacji nadziemnej (bez ograniczenia wysokości)</div></td><td colspan="4" rowspan="1">Budynek wielokondygnacyjny</td></tr><tr><td>N</td><td>SW</td><td>W</td><td>WW</td></tr><tr><td>Q &le; 500</td><td>E</td><td>D</td><td>C</td><td>B</td><td>B</td></tr><tr><td>500 &lt; Q &le; 1000</td><td>D</td><td>D</td><td>C</td><td>B</td><td>B</td></tr><tr><td>1000 &lt; Q &le; 2000</td><td>C</td><td>C</td><td>C</td><td>B</td><td>B</td></tr><tr><td>2000 &lt; Q &le; 4000</td><td>B</td><td>B</td><td>B</td><td>*</td><td>*</td></tr><tr><td>Q &gt; 4000</td><td>A</td><td>A</td><td>A</td><td>*</td><td>*</td></tr></tbody></table>* - Zgodnie z § 228 ust. 1 nie mogą występować takie budynki'}] },
    {L: 3,num: '5.',name: 'ZL w podziemnej',children: [
    {L: 4,num: '',name: 'Jeżeli część podziemna budynku jest zaliczona do ZL, klasę odporności pożarowej budynku ustala się, przyjmując jako liczbę jego kondygnacji lub jego wysokość odpowiednio: sumę kondygnacji lub wysokości części podziemnej i nadziemnej, przy czym do tego ustalenia nie bierze się pod uwagę tych części podziemnych budynku, które są oddzielone elementami oddzielenia przeciwpożarowego o klasie odporności ogniowej co najmniej R E I 120, zgodnie z oznaczeniem pod tabelą w § 216 ust. 1, i mają bezpośrednie wyjścia na zewnątrz.'}] },
    {L: 3,num: '6.',name: 'Kondygnacje o różnych klasach',children: [
    {L: 4,num: '',name: 'W budynku wielokondygnacyjnym, którego kondygnacje są zaliczone do różnych kategorii ZL lub PM, klasy odporności pożarowej określa się dla poszczególnych kondygnacji odrębnie, zgodnie z zasadami określonymi w ust. 2-4.'}] },
    {L: 3,num: '7.',name: 'Klasy dla niższych kondygnacji',children: [
    {L: 4,num: '',name: 'Klasa odporności pożarowej części budynku nie powinna być niższa od klasy odporności pożarowej części budynku położonej nad nią, przy czym dla części podziemnej nie powinna być ona niższa niż „C”.'}] },
    {L: 3,num: '8.',name: 'Powiązanie funkcjonalne ZL i PM',children: [
    {L: 4,num: '',name: 'Jeżeli w budynku znajdują się pomieszczenia produkcyjne, magazynowe lub techniczne, niepowiązane funkcjonalnie z częścią budynku zaliczoną do ZL, pomieszczenia te powinny stanowić odrębną strefę pożarową, dla której oddzielnie ustala się klasę odporności pożarowej, zgodnie z zasadami określonymi w ust. 4, z zastrzeżeniem § 220.'}] },
    {L: 3,num: '9.',name: 'Pomieszczenia ppoż.',children: [
    {L: 4,num: '',name: 'Pomieszczenia, w których są umieszczone przeciwpożarowe zbiorniki wody lub innych środków gaśniczych, pompy wodne instalacji przeciwpożarowych, maszynownie wentylacji do celów przeciwpożarowych oraz rozdzielnie elektryczne, zasilające, niezbędne podczas pożaru, instalacje i urządzenia, powinny stanowić odrębną strefę pożarową.'}] }] },
    {L: 2,num: '§ 213.',name: 'Częściowe wyłączenie - niewielkie budynki',children: [
    {L: 3,num: '1. ',name: 'Małe prywatne 1-3K',children: [
    {L: 4,num: '',name: 'Wymagania dotyczące klasy odporności pożarowej budynków określone w § 212 oraz dotyczące klas odporności ogniowej elementów budynków i rozprzestrzeniania ognia przez te elementy określone w § 216, z zastrzeżeniem § 271 ust. 8a, nie dotyczą budynków:<br>1) do trzech kondygnacji nadziemnych włącznie:<br>a) mieszkalnych: jednorodzinnych, zagrodowych i rekreacji indywidualnej, z zastrzeżeniem § 217 ust. 2,<br>b) mieszkalnych i administracyjnych w gospodarstwach leśnych;<br>2) wolnostojących do dwóch kondygnacji nadziemnych włącznie:<br>a) o kubaturze brutto do 1500 m3 przeznaczonych do celów turystyki i wypoczynku,<br>b) gospodarczych w zabudowie jednorodzinnej i zagrodowej oraz w gospodarstwach leśnych,<br>c) o kubaturze brutto do 1000 m3 przeznaczonych do wykonywania zawodu lub działalności usługowej i handlowej, także z częścią mieszkalną;<br>3) wolnostojących garaży o liczbie stanowisk postojowych nie większej niż 2;<br>4) inwentarskich o kubaturze brutto do 1500 m3.'}] }] },
    {L: 2,num: '§ 214.',name: 'Obniżenie klasy SUGW',children: [
    {L: 3,num: '1. ',name: 'SUG wodne',children: [
    {L: 4,num: '',name: 'W budynkach wyposażonych w stałe samoczynne urządzenia gaśnicze wodne, z wyjątkiem budynków ZL II oraz wielokondygnacyjnych budynków wysokich (W) i wysokościowych (WW), dopuszcza się:<br>1) obniżenie klasy odporności pożarowej budynku o jedną w stosunku do wynikającej z § 212,<br>2) przyjęcie klasy „E” odporności pożarowej dla budynku jednokondygnacyjnego.'}] }] },
    {L: 2,num: '§ 215.',name: 'Obniżenie do E i oddzielenia przy obniżeniach klasy',children: [
    {L: 3,num: '1.',name: 'Oddymianie i NRO w PM 1k',children: [
    {L: 4,num: '',name: 'Dopuszcza się przyjęcie klasy „E” odporności pożarowej dla jednokondygnacyjnego budynku PM o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2, pod warunkiem zastosowania:<br>1) wszystkich elementów budynku nierozprzestrzeniających ognia,<br>2) samoczynnych urządzeń oddymiających w strefach pożarowych o powierzchni przekraczającej 1.000 m2.'}] },
    {L: 3,num: '2.',name: 'Oddzielenia',children: [
    {L: 4,num: '',name: 'Obniżenie klasy odporności pożarowej budynku, w przypadkach wymienionych w ust. 1 oraz w § 214, nie zwalnia z zachowania wymaganej pierwotnie klasy odporności ogniowej elementów oddzielenia przeciwpożarowego, określonej w § 232.'}] }] },
    {L: 2,num: '§ 216.',name: 'Klasy elementów',children: [
    {L: 3,num: '1.',name: 'Tabela elementów',children: [
    {L: 4,num: '',name: 'Elementy budynku, odpowiednio do jego klasy odporności pożarowej, powinny spełniać, z zastrzeżeniem § 213 oraz § 237 ust. 9, co najmniej wymagania określone w poniższej tabeli:<br><table><tbody><tr><td  colspan="1" rowspan="2"><div>Klasa odporności pożarowej budynku</div></td><td  colspan="6" rowspan="1">Klasa odporności ogniowej element&oacute;w budynku ⁵)*)</td></tr><tr><td>gł&oacute;wna konstrukcja nośna</td><td>konstrukcja dachu</td><td>strop&sup1;⁾</td><td>ściana zewnętrzna&sup1;⁾,&sup2;⁾</td><td>ściana wewnętrzna&sup1;⁾</td><td><div><div>przekrycie dachu&sup3;⁾</div></div></td></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>"A"</td><td>R 240</td><td>R 30</td><td>REI 120</td><td>EI 120<br/>(o-i)</td><td>EI 60</td><td>RE 30</td></tr><tr><td>"B"</td><td>R 120</td><td>R 30</td><td>REI 60</td><td>EI 60<br/>(o-i)</td><td>EI 30 4)</td><td>RE 30</td></tr><tr><td>"C"</td><td>R 60</td><td>R 15</td><td>REI 60</td><td>EI 30<br/>(o-i)</td><td>EI 15 4)</td><td>RE 15</td></tr><tr><td>"D"</td><td>R 30</td><td>(-)</td><td>REI 30</td><td>EI 30<br/>(o-i)</td><td>(-)</td><td>(-)</td></tr><tr><td>"E"</td><td>(-)</td><td>(-)</td><td>(-)</td><td>(-)</td><td>(-)</td><td>(-)</td></tr></tbody></table>Oznaczenia w tabeli:<br>R &ndash; nośność ogniowa (w minutach), określona zgodnie z Polską Normą dotyczącą zasad ustalania klas odporności ogniowej element&oacute;w budynku,<br>E &ndash; szczelność ogniowa (w minutach), określona jw.,<br>I &ndash; izolacyjność ogniowa (w minutach), określona jw.,<br>(&ndash;) &ndash; nie stawia się wymagań.<br>*<sup>)</sup>&nbsp;Z zastrzeżeniem &sect; 219 ust. 1<br><sup>1)&nbsp;</sup>Jeżeli przegroda jest częścią gł&oacute;wnej konstrukcji nośnej, powinna spełniać także kryteria nośności ogniowej (R) odpowiednio do wymagań zawartych w kol. 2 i 3 dla danej klasy odporności pożarowej budynku.<br><sup>2)&nbsp;</sup>Klasa odporności ogniowej dotyczy pasa międzykondygnacyjnego wraz z połączeniem ze stropem.<br><sup>3)&nbsp;</sup>Wymagania nie dotyczą naświetli dachowych, świetlik&oacute;w, lukarn i okien połaciowych (z zastrzeżeniem &sect; 218), jeśli otwory w połaci dachowej nie zajmują więcej niż 20% jej powierzchni, nie dotyczą także budynku, w kt&oacute;rym nad najwyższą kondygnacją znajduje się strop albo inna przegroda, spełniająca kryteria określone w kol. 4.<br><sup>4)&nbsp;</sup>Dla ścian kom&oacute;r zsypu wymaga się EI 60, a dla drzwi kom&oacute;r zsypu - EI 30.<br><sup>5)</sup>&nbsp;Klasa odporności ogniowej dotyczy element&oacute;w wraz z uszczelnieniami złączy i dylatacjami.'}] },
    {L: 3,num: '2.',name: 'Rozprzestrzenianie ognia (NRO i złagodzenia do SRO)',children: [
    {L: 4,num: '',name: 'Elementy budynku, o których mowa w ust. 1, powinny być nierozprzestrzeniające ognia, przy czym dopuszcza się zastosowanie słabo rozprzestrzeniających ogień:<br>1) elementów budynku o jednej kondygnacji nadziemnej ZL IV oraz PM, o maksymalnej gęstości obciążenia ogniowego strefy pożarowej do 500 MJ/m2,<br>2) ścian wewnętrznych i zewnętrznych oraz elementów konstrukcji dachu i jego przekrycia w budynku PM niskim o maksymalnej gęstości obciążenia ogniowego strefy pożarowej do 1.000 MJ/m2,<br>3) ścian zewnętrznych w budynku niskim ZL IV.<br>'}] },
    {L: 3,num: '3.',name: 'Ściany zewnętrzne PM',children: [
    {L: 4,num: '',name: 'Dopuszcza się stosowanie w budynku PM ścian zewnętrznych klasy D z rdzeniem klasy E z uwagi na reakcję na ogień, jeżeli okładzina wewnętrzna jest niepalna, a ściana jest nierozprzestrzeniająca ognia przy działaniu ognia od strony elewacji.'}] },
    {L: 3,num: '4.',name: 'Ściany wewnętrzne PM',children: [
    {L: 4,num: '',name: 'Dopuszcza się stosowanie w budynku PM ścian wewnętrznych klasy D z uwagi na reakcję na ogień.'}] },
    {L: 3,num: '5.',name: 'Palna izolacja ścian ZL II',children: [
    {L: 4,num: '',name: 'W ścianach zewnętrznych budynku ZL II dopuszcza się, z zastrzeżeniem ust. 8, zastosowanie izolacji cieplnej palnej, jeżeli osłaniająca ją od wewnątrz okładzina jest niepalna i ma klasę odporności ogniowej co najmniej:<br>1) w budynku klasy odporności pożarowej „B" - EI 60,<br>2) w budynku klasy odporności pożarowej „C" i „D" - EI 30.'}] },
    {L: 3,num: '6.',name: 'Palne klapy dymowe - dopuszczalne',children: [
    {L: 4,num: '',name: 'Dopuszcza się stosowanie klap dymowych z materiałów łatwo zapalnych w dachach i stropodachach.'}] },
    {L: 3,num: '7.',name: 'Antresole - klasa',children: [
    {L: 4,num: '',name: 'Strop tworzący w pomieszczeniu dodatkowy poziom – antresolę, przeznaczoną do użytku dla więcej niż 10 osób, a także jej konstrukcja nośna, powinny odpowiadać wymaganiom wynikającym z klasy odporności pożarowej budynku, lecz nie mniejszym niż dla klasy „D", z zastrzeżeniem § 214.'}] },
    {L: 3,num: '8.',name: 'Elewacja powyżej 25m',children: [
    {L: 4,num: '',name: 'W budynku, na wysokości powyżej 25 m od poziomu terenu, okładzina elewacyjna i jej zamocowanie mechaniczne, a także izolacja cieplna ściany zewnętrznej, powinny być wykonane z materiałów niepalnych.'}] },
    {L: 3,num: '9.',name: 'Ocieplenie ściany zewnętrznej ZL IV',children: [
    {L: 4,num: '',name: 'Dopuszcza się ocieplenie ściany zewnętrznej budynku mieszkalnego, wzniesionego przed dniem 1 kwietnia 1995 r., o wysokości do 11 kondygnacji włącznie, z użyciem samogasnącego polistyrenu spienionego, w sposób zapewniający nierozprzestrzenianie ognia.'}] }] },
    {L: 2,num: '§ 217.',name: 'Przegrody w mieszkalnych',children: [
    {L: 3,num: '1.',name: 'Ściany dróg komunikacji i między lokalami',children: [
    {L: 4,num: '',name: 'W budynkach ZL IV i ZL V klasa odporności ogniowej przegród wewnętrznych oddzielających mieszkania lub samodzielne pomieszczenia mieszkalne od dróg komunikacji ogólnej oraz od innych mieszkań i samodzielnych pomieszczeń mieszkalnych, z zastrzeżeniem § 216 ust. 1, powinna wynosić co najmniej:<br>1) dla ścian w budynku:<br>a) niskim i średniowysokim – EI 30,<br>b) wysokim i wysokościowym – EI 60,<br>2) dla stropów w budynku zawierającym 2 mieszkania – REI 30.'}] },
    {L: 3,num: '2.',name: 'Między segmentami',children: [
    {L: 4,num: '',name: 'Klasa odporności ogniowej ściany oddzielającej segmenty jednorodzinnych budynków ZL IV: bliźniaczych, szeregowych lub atrialnych, powinna wynosić co najmniej – REI 60.'}] },
    {L: 3,num: '3.',name: 'Wewnątrz mieszkań ',children: [
    {L: 4,num: '',name: 'W mieszkaniach oraz w samodzielnych pomieszczeniach mieszkalnych dopuszcza się wykonywanie ścian wewnętrznych nierozprzestrzeniających ognia, bez wymaganej w § 216 ust. 1 w kolumnie 6 tabeli klasy odporności ogniowej.'}] }] },
    {L: 2,num: '§ 218.',name: 'Bliskość budynku niższego',children: [
    {L: 3,num: '1.',name: 'Klasa dachu niższego budynku sąsiedniego - 30 min',children: [
    {L: 4,num: '',name: 'Przekrycie dachu budynku niższego, usytuowanego bliżej niż 8 m lub przyległego do ściany z otworami budynku wyższego, z wyjątkiem przypadków wymienionych w § 273 ust. 1, w pasie o szerokości 8 m od tej ściany powinno być nierozprzestrzeniające ognia oraz w pasie tym:<br>1) konstrukcja dachu powinna mieć klasę odporności ogniowej co najmniej R 30,<br>2) przekrycie dachu powinno mieć klasę odporności ogniowej co najmniej RE 30.'}] },
    {L: 3,num: '2.',name: 'Wyjątek - oddalenie okien wyższego  i małe obciążenie w niższym',children: [
    {L: 4,num: '',name: 'Warunki określone w ust. 1 nie mają zastosowania, jeżeli najbliżej położony otwór w ścianie budynku wyższego znajduje się w odległości nie mniejszej niż 10 m od dachu budynku niższego, a gęstość obciążenia ogniowego w budynku niższym nie przekracza 2.000 MJ/m2.'}] },
    {L: 3,num: '3.',name: 'Osobna strefa w niższym nie zmienia sytuacji',children: [
    {L: 4,num: '',name: 'Postanowienia ust. 1 i 2 odnoszą się również do części niższej budynku, jeżeli część ta stanowi odrębną strefę pożarową.'}] },
    {L: 3,num: '4.',name: 'Dopuszczalne wyloty w dachu niższego',children: [
    {L: 4,num: '',name: 'Dopuszcza się sytuowanie wylotów kanałów wentylacyjnych i spalinowych od urządzeń gazowych oraz rur wentylujących piony kanalizacyjne w części połaci dachu lub stropodachu budynku niższego, o której mowa w ust. 1.'}] }] },
    {L: 2,num: '§ 219.',name: 'Duże dachy i oddzielenie poddaszy od palnego dachu',children: [
    {L: 3,num: '1.',name: 'Przekrycie > 1000 m2',children: [
    {L: 4,num: '',name: 'Przekrycie budynku o powierzchni większej niż 1.000 m2 powinno być nierozprzestrzeniające ognia, a palna izolacja cieplna przekrycia powinna być oddzielona od wnętrza budynku przegrodą o klasie odporności ogniowej nie niższej niż RE 15.'}] },
    {L: 3,num: '2.',name: 'Poddasza w ZL III, IV i V',children: [
    {L: 4,num: '',name: 'W budynkach ZL III, ZL IV i ZL V poddasze użytkowe przeznaczone na cele mieszkalne lub biurowe powinno być oddzielone od palnej konstrukcji i palnego przekrycia dachu przegrodami o klasie odporności ogniowej:<br>1) w budynku niskim – E I 30,<br>2) w budynku średniowysokim i wysokim – EI 60.'}] }] },
    {L: 2,num: '§ 220.',name: 'Kotłownie i magazyny opału',children: [
    {L: 3,num: '1.',name: 'Ściany wewnętrzne i stropy',children: [
    {L: 4,num: '',name: 'Ściany wewnętrzne i stropy wydzielające kotłownie, składy paliwa stałego, żużlownie i magazyny oleju opałowego, a także zamknięcia otworów w tych elementach, powinny mieć klasę odporności ogniowej nie mniejszą niż określona w tabeli:<br><table><tbody><tr><td colspan="1" rowspan="2"><div>Rodzaj pomieszczenia</div></td><td colspan="3" rowspan="1">Klasa odporności ogniowej</td></tr><tr><td>ścian wewnętrznych</td><td>strop&oacute;w</td><td><div><div>drzwi lub innych zamknięć</div></div></td></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>Kotłownia z kotłami na paliwo stałe, o łącznej mocy cieplnej powyżej 25 kW</td><td>EI 60</td><td>REI 60</td><td>EI 30</td></tr><tr><td>Kotłownia z kotłami na olej opałowy, o łącznej mocy cieplnej powyżej 30 kW</td><td>EI 60</td><td>REI 60</td><td>EI 30</td></tr><tr><td>Kotłownia z kotłami na paliwo gazowe, o łącznej mocy cieplnej powyżej 30 kW:<br />- w budynku N i SW<br />- w budynku W i WW</td><td><br />EI 60<br />EI 120</td><td><br />REI 60<br />REI&nbsp;120</td><td><br />EI 30<br />EI 60</td></tr><tr><td>Skład paliwa stałego i żużlownia</td><td>EI 120*⁾</td><td>REI 120*⁾</td><td>EI 60*⁾</td></tr><tr><td>Magazyn oleju opałowego</td><td>EI 120</td><td>REI 120</td><td>EI 60</td></tr></tbody></table>*) Wymaganie nie dotyczy budynków mieszkalnych jednorodzinnych, budynków mieszkalnych w zabudowie zagrodowej oraz budynków rekreacji indywidualnej'}] },
    {L: 3,num: '2.',name: 'Ściany zewnętrzne',children: [
    {L: 4,num: '',name: 'Dla pomieszczeń, o których mowa w ust. 1, klasę odporności ogniowej ścian zewnętrznych należy przyjmować zgodnie z § 216.'}] },
    {L: 3,num: '3.',name: 'Kotłownie gazowe ponad dachem',children: [
    {L: 4,num: '',name: 'Nie stawia się wymagań w zakresie klasy odporności ogniowej dla przegród zewnętrznych kotłowni z kotłami na paliwo gazowe, zlokalizowanej ponad dachem budynku, przy zachowaniu warunku, iż przegrody te powinny być wykonane z materiałów niepalnych.'}] }] },
    {L: 2,num: '§ 221.',name: 'Pomieszczenia zagrożone wybuchem ',children: [
    {L: 3,num: '1.',name: 'Lekki dach',children: [
    {L: 4,num: '',name: 'Nad pomieszczeniem zagrożonym wybuchem należy stosować lekki dach, wykonany z materiałów co najmniej trudno zapalnych, o masie nieprzekraczającej 75 kg/m2 rzutu, licząc bez elementów konstrukcji nośnej dachu, takich jak podciągi, wiązary i belki.'}] },
    {L: 3,num: '2.',name: 'Odciążenia zamiast dachu',children: [
    {L: 4,num: '',name: 'Przepis ust. 1 nie dotyczy pomieszczenia, w którym łączna powierzchnia urządzeń odciążających (przeciwwybuchowych), jak przepony, klapy oraz otwory oszklone szkłem zwykłym, jest większa niż 0,065 m2/m3 kubatury pomieszczenia.'}] },
    {L: 3,num: '3.',name: 'Ściany - parcie 15kPa ',children: [
    {L: 4,num: '',name: 'Ściany oddzielające pomieszczenie zagrożone wybuchem od innych pomieszczeń powinny być odporne na parcie o wartości 15 kN/m2 (15 kPa).'}] }] },
    {L: 2,num: '§ 222.',name: 'Usytuowanie pomieszczeń ZW',children: [
    {L: 3,num: '1.',name: 'Najwyższa kondygnacja',children: [
    {L: 4,num: '',name: 'Pomieszczenie zagrożone wybuchem należy sytuować na najwyższej kondygnacji budynku. Wymaganie to nie dotyczy budynków na terenach zamkniętych.'}] },
    {L: 3,num: '2.',name: 'Inne miejsce po uzgodnieniu',children: [
    {L: 4,num: '',name: 'Dopuszcza się inne usytuowanie pomieszczeń, o których mowa w ust. 1, pod warunkiem zastosowania odpowiednich instalacji i urządzeń przeciwwybuchowych, uzgodnionych z właściwym komendantem wojewódzkim Państwowej Straży Pożarnej.'}] }] },
    {L: 2,num: '§ 223.',name: 'Pasy międzykondygnacyjne',children: [
    {L: 3,num: '1.',name: 'Ściany zewnętrzne',children: [
    {L: 4,num: '',name: 'W ścianach zewnętrznych budynku wielokondygnacyjnego, z zastrzeżeniem § 224, powinny być pasy międzykondygnacyjne o wysokości co najmniej 0,8 m.'}] },
    {L: 3,num: '2.',name: 'Równorzędne wysunięcia',children: [
    {L: 4,num: '',name: 'Za równorzędne rozwiązania uznaje się oddzielenia poziome w formie daszków, gzymsów i balkonów o wysięgu co najmniej 0,5 m lub też inne oddzielenia poziome i pionowe o sumie wysięgu i wymiaru pionowego co najmniej 0,8 m.'}] },
    {L: 3,num: '3.',name: 'Klasa równorzędnych wysunięć',children: [
    {L: 4,num: '',name: 'Elementy poziome wymienione w ust. 2 powinny spełniać wymagania szczelności ogniowej i izolacyjności ogniowej, również w obrębie połączenia ze ścianami zewnętrznymi, przez okres odpowiadający czasowi klasyfikacyjnemu wymaganemu w stosunku do ścian zewnętrznych budynku i być nierozprzestrzeniające ognia.'}] },
    {L: 3,num: '4.',name: 'Wyjątek - komunikacja ogólna',children: [
    {L: 4,num: '',name: 'Warunki określone w ust. 1 i 2 nie dotyczą ścian holu i dróg komunikacji ogólnej.'}] }] },
    {L: 2,num: '§ 224.',name: 'Pasy  międzykondygnacyjne PM ',children: [
    {L: 3,num: '1.',name: 'Wysokość pasa',children: [
    {L: 4,num: '',name: 'W ścianach zewnętrznych budynku wielokondygnacyjnego nad strefą pożarową PM, o gęstości obciążenia ogniowego powyżej 1.000 MJ/m2, wysokość pasa międzykondygnacyjnego powinna wynosić co najmniej 1,2 m.'}] },
    {L: 3,num: '2.',name: 'Równorzędne wysunięcia',children: [
    {L: 4,num: '',name: 'Za równorzędne rozwiązanie uznaje się oddzielenie poziome w formie daszków, gzymsów i balkonów o wysięgu co najmniej 0,8 m lub też inne oddzielenie poziome i pionowe o sumie wymiaru pionowego i wysięgu co najmniej 1,2 m, z zachowaniem warunków określonych w § 223 ust. 3.'}] }] },
    {L: 2,num: '§ 225.',name: 'Okładziny elewacyjne',children: [
    {L: 3,num: '1.',name: 'Mocowanie - odporność jak ściana zewnętrzna',children: [
    {L: 4,num: '',name: 'Elementy okładzin elewacyjnych powinny być mocowane do konstrukcji budynku w sposób uniemożliwiający ich odpadanie w przypadku pożaru w czasie krótszym niż wynikający z wymaganej klasy odporności ogniowej dla ściany zewnętrznej, określonej w § 216 ust. 1, odpowiednio do klasy odporności pożarowej budynku, w którym są one zamocowane.'}] }] }] },
    {L: 1,num: 'Rozdział 3. ',name: 'Strefy i oddzielenia',children: [
    {L: 2,num: '§ 226.',name: 'Strefa pozarowa ',children: [
    {L: 3,num: '1.',name: 'Pojęcie strefy',children: [
    {L: 4,num: '',name: 'Strefę pożarową stanowi budynek albo jego część oddzielona od innych budynków lub innych części budynku elementami oddzielenia przeciwpożarowego, o których mowa w § 232 ust. 4, bądź też pasami wolnego terenu o szerokości nie mniejszej niż dopuszczalne odległości od innych budynków, określone w § 271 ust. 1-7.'}] },
    {L: 3,num: '2.',name: 'Kiedy kondygnacja strefą',children: [
    {L: 4,num: '',name: 'Częścią budynku, o której mowa w ust. 1, jest także jego kondygnacja, jeżeli klatki schodowe i szyby dźwigowe w tym budynku spełniają co najmniej wymagania określone w § 256 ust. 2 dla klatek schodowych.'}] },
    {L: 3,num: '3.',name: 'Powierzchnia (wnętrze i antresola)',children: [
    {L: 4,num: '',name: 'Powierzchnia strefy pożarowej jest obliczana jako powierzchnia wewnętrzna budynku lub jego części, przy czym wlicza się do niej także powierzchnię antresoli.'}] }] },
    {L: 2,num: '§ 227.',name: 'Powierzchnie stref ZL',children: [
    {L: 3,num: '1.',name: 'Powierzchnie ZL',children: [
    {L: 4,num: '',name: 'Dopuszczalne powierzchnie stref pożarowych ZL określa poniższa tabela:<br><table><colgroup><col /><col /><col /><col /><col /></colgroup><tbody><tr><td colspan="1" rowspan="3"><div>Kategoria zagrożenia ludzi</div></td><td colspan="4" rowspan="1">Dopuszczalna powierzchnia strefy pożarowej w m&sup2;</td></tr><tr><td colspan="1" rowspan="2"><div>w budynku o jednej<br /> kondygnacji nadziemnej<br /> (bez ograniczenia wysokości)</div></td><td colspan="3" rowspan="1">w budynku wielokondygnacyjnym</td></tr><tr><td>N</td><td>SW</td><td>W i WW</td></tr><tr><td>ZL I, ZL III, ZL IV, ZL V</td><td>10 000</td><td>8000</td><td>5000</td><td>2500</td></tr><tr><td>ZL II</td><td>8000</td><td>5000</td><td>3500</td><td>2000</td></tr></tbody></table>'}] },
    {L: 3,num: '2.',name: 'Podziemne',children: [
    {L: 4,num: '',name: 'Dopuszczalna powierzchnia strefy pożarowej ZL, obejmującej podziemną część budynku, nie powinna przekraczać 50% dopuszczalnej powierzchni strefy pożarowej tej samej kategorii zagrożenia ludzi, określonej w ust. 1 dla pierwszej nadziemnej kondygnacji tego budynku.'}] },
    {L: 3,num: '3.',name: 'Podziemne wyjątki',children: [
    {L: 4,num: '',name: 'Zmniejszenie dopuszczalnej powierzchni strefy pożarowej, o której mowa w ust. 2, nie dotyczy przypadku, gdy wyjścia ewakuacyjne z kondygnacji podziemnej prowadzą bezpośrednio na zewnątrz budynku.'}] },
    {L: 3,num: '4.',name: 'Powiększenia',children: [
    {L: 4,num: '',name: 'Dopuszcza się powiększenie powierzchni stref pożarowych, o których mowa w ust. 1, z wyjątkiem stref pożarowych w wielokondygnacyjnych budynkach wysokich (W) i wysokościowych (WW), pod warunkiem zastosowania:<br>1) stałych samoczynnych urządzeń gaśniczych wodnych – o 100%;<br>2) samoczynnych urządzeń oddymiających uruchamianych za pomocą systemu wykrywania dymu - o 100%.<br>Przy jednoczesnym stosowaniu urządzeń wymienionych w pkt 1 i 2 dopuszcza się powiększenie powierzchni stref pożarowych o 200%.'}] },
    {L: 3,num: '5.',name: 'Podział poziomy ZL II',children: [
    {L: 4,num: '',name: 'Ze strefy pożarowej ZL II o powierzchni przekraczającej 750 m2 w budynku wielokondygnacyjnym, powinna być zapewniona możliwość ewakuacji ludzi do innej strefy pożarowej na tej samej kondygnacji.'}] }] },
    {L: 2,num: '§ 228.',name: 'Powierzchnie stref PM ',children: [
    {L: 3,num: '1.',name: 'Powierzchnie',children: [
    {L: 4,num: '',name: 'Dopuszczalne powierzchnie stref pożarowych PM, z wyjątkiem garaży, określa poniższa tabela:<br><table><colgroup><col /><col /><col /><col /><col /></colgroup><tbody><tr><td colspan="1" rowspan="3"><div>Rodzaj stref pożarowych</div></td><td colspan="1" rowspan="3"><div>Gęstość obciążenia ogniowego <br />Q [MJ/m&sup2;]</div></td><td colspan="3" rowspan="1">Dopuszczalna powierzchnia strefy pożarowej w m&sup2;</td></tr><tr><td colspan="1" rowspan="2"><div>w budynku o jednej kondygnacji nadziemnej (bez ograniczenia wysokości)</div></td><td colspan="2" rowspan="1">w budynku wielokondygnacyjnym</td></tr><tr><td>N i SW</td><td>W i WW</td></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><td>Strefy pożarowe z pomieszczeniem zagrożonym wybuchem</td><td>Q&gt;4000<br />2000&lt;Q&le;4000<br />1000&lt;Q&le;2000<br />500&lt;Q&le;1000<br />Q&le;500</td><td>1000<br />2000<br />4000<br />6000<br />8000</td><td>*<br />*<br />1000<br />2000<br />3000</td><td>*<br />*<br />*<br />500<br />1000</td></tr><tr><td>Strefy pożarowe pozostałe</td><td>Q&gt;4000<br />2000&lt;Q&le;4000<br />1000&lt;Q&le;2000<br />500&lt;Q&le;1000<br />Q&le;500</td><td>2000<br />4000<br />8000<br />15000<br />20000</td><td>1000<br />2000<br />4000<br />8000<br />10000</td><td>*<br />*<br />1000<br />2500<br />5000</td></tr></tbody></table>* Nie dopuszcza się takich przypadków'}] },
    {L: 3,num: '2.',name: 'Podziemne',children: [
    {L: 4,num: '',name: 'Strefy pożarowe, o których mowa w ust. 1, w podziemnej części budynków nie powinny przekraczać 50% powierzchni określonych w tabeli.'}] }] },
    {L: 2,num: '§ 229.',name: 'Powiększenie stref PM (wielokondygnacyjne)',children: [
    {L: 3,num: '1.',name: 'SUG lub oddymianie',children: [
    {L: 4,num: '',name: 'Dopuszcza się powiększenie powierzchni stref pożarowych, o których mowa w § 228, pod warunkiem ich ochrony:<br>1) stałymi samoczynnymi urządzeniami gaśniczymi wodnymi - o 100%,<br>2) samoczynnymi urządzeniami oddymiającymi - o 50%.'}] },
    {L: 3,num: '2.',name: 'Łączenie SUG i Oddymiania',children: [
    {L: 4,num: '',name: 'Przy jednoczesnym stosowaniu urządzeń wymienionych w ust. 1 dopuszcza się powiększenie stref pożarowych o 150%.'}] }] },
    {L: 2,num: '§ 230.',name: 'Powiększenia stref PM (1k lub ostatnia kondygnacja, niegaraże)',children: [
    {L: 3,num: '1.',name: 'Oddymianie + NRO = 100% ',children: [
    {L: 4,num: '',name: 'W budynku jednokondygnacyjnym lub na ostatniej kondygnacji budynku wielokondygnacyjnego wielkości stref pożarowych PM, z wyjątkiem garaży, można powiększyć o 100%, jeżeli budynek nie zawiera pomieszczenia zagrożonego wybuchem i jest wykonany z elementów nierozprzestrzeniających ognia oraz zastosowano samoczynne urządzenia oddymiające.'}] },
    {L: 3,num: '2.',name: 'Oddymianie + SUGW = bez ograniczeń',children: [
    {L: 4,num: '',name: 'W budynku jednokondygnacyjnym wielkości stref pożarowych PM, z wyjątkiem garażu, nie ogranicza się, pod warunkiem zastosowania stałych samoczynnych urządzeń gaśniczych wodnych i samoczynnych urządzeń oddymiających.'}] }] },
    {L: 2,num: '§ 231.',name: 'Powierzchnie stref IN ',children: [
    {L: 3,num: '1.',name: 'Dopuszczalne  wielkości',children: [
    {L: 4,num: '',name: 'Dopuszczalne powierzchnie stref pożarowych IN określa poniższa tabela:<br><table><colgroup><col/><col/><col/></colgroup><tbody><tr><td colspan="1" rowspan="2"><div>Liczba kondygnacji budynku</div></td><td colspan="2" rowspan="1">Dopuszczalna powierzchnia strefy pożarowej w m2</td></tr><tr><td>przy hodowli ści&oacute;łkowej</td><td><div><div>przy hodowli bezści&oacute;łkowej</div></div></td></tr><tr><td>Jedna</td><td>5000</td><td>nie ogranicza się</td></tr><tr><td>Dwie</td><td>2500</td><td>5000</td></tr><tr><td>Powyżej dw&oacute;ch</td><td>1000</td><td>2500</td></tr></tbody></table>'}] },
    {L: 3,num: '2.',name: 'Wyjątki dla SRO i hodowli bezściółkowej',children: [
    {L: 4,num: '',name: 'W przypadku stosowania w budynku ścian silnie rozprzestrzeniających ogień, strefę pożarową należy zmniejszyć do 25% wartości podanej w ust. 1, a w przypadku jednokondygnacyjnego budynku przeznaczonego do hodowli bezściółkowej, strefę ogranicza się do 5.000 m2.'}] }] },
    {L: 2,num: '§ 232.',name: 'Oddzielnia ppoż.',children: [
    {L: 3,num: '1.',name: 'Otwory - przedsionki lub drzwi ppoż.',children: [
    {L: 4,num: '',name: 'Ściany i stropy stanowiące elementy oddzielenia przeciwpożarowego powinny być wykonane z materiałów niepalnych, a występujące w nich otwory - obudowane przedsionkami przeciwpożarowymi lub zamykane za pomocą drzwi przeciwpożarowych bądź innego zamknięcia przeciwpożarowego.'}] },
    {L: 3,num: '2.',name: 'Powierzchnia otworów',children: [
    {L: 4,num: '',name: 'W ścianie oddzielenia przeciwpożarowego łączna powierzchnia otworów, o których mowa w ust. 1, nie powinna przekraczać 15% powierzchni ściany, a w stropie oddzielenia przeciwpożarowego - 0,5% powierzchni stropu. Ograniczenia nie stosuje się do otworów w ścianach oddzielenia przeciwpożarowego w garażu, które znajdują się na drogach manewrowych.'}] },
    {L: 3,num: '3.',name: 'Przedsionki ppoż. - wymagania',children: [
    {L: 4,num: '',name: 'Przedsionek przeciwpożarowy powinien mieć wymiary rzutu poziomego nie mniejsze niż 1,4 × 1,4 m, ściany i strop, a także osłony lub obudowy przewodów i kabli elektrycznych z wyjątkiem wykorzystywanych w przedsionku oraz z wyjątkiem zespołów kablowych, o których mowa w § 187 ust. 3 – o klasie odporności ogniowej co najmniej E I 60 wykonane z materiałów niepalnych oraz powinien być zamykany drzwiami i wentylowany co najmniej grawitacyjnie, z zastrzeżeniem § 246 ust. 2 i 3.'}] },
    {L: 3,num: '4.',name: 'Klasa oddzieleń ppoż. ',children: [
    {L: 4,num: '',name: 'Wymaganą klasę odporności ogniowej elementów oddzielenia przeciwpożarowego oraz zamknięć znajdujących się w nich otworów określa poniższa tabela:<br><table><colgroup><col /><col /><col /><col /><col /><col /></colgroup><tbody><tr><td colspan="1" rowspan="3"><div>Klasa odporności pożarowej budynku</div></td><td colspan="5" rowspan="1">Klasa odporności ogniowej</td></tr><tr><td colspan="2" rowspan="1">element&oacute;w oddzielenia przeciwpożarowego</td><td colspan="1" rowspan="2"><div>drzwi przeciwpożarowych lub innych zamknięć przeciwpożarowych</div></td><td colspan="2" rowspan="1">drzwi z przedsionka pożarowego</td></tr><tr><td>ścian i strop&oacute;w, z wyjątkiem strop&oacute;w w ZL</td><td>strop&oacute;w w ZL</td><td>na korytarz i do pomieszczenia</td><td>na klatkę schodową*⁾</td></tr><tr><td>A</td><td>REI 240</td><td>REI&nbsp;120</td><td>EI 120</td><td>EI 60</td><td>EI 60</td></tr><tr><td>B i C</td><td>REI 120</td><td>REI 60</td><td>EI 60</td><td>EI 30</td><td>EI 30</td></tr><tr><td>D i E</td><td>REI 60</td><td>REI 30</td><td>EI 30</td><td>EI 15</td><td>EI 15</td></tr></tbody></table>*) Dopuszcza się osadzenie tych drzwi  w ścianie o klaie odporności ogniowej, określonej dla drzwi w kol. 6, znajdującej się między przedsionkiem, a klatką schodową.'}] },
    {L: 3,num: '5.',name: 'Klasa oddzieleń ppoż. w małych budynkach',children: [
    {L: 4,num: '',name: 'Klasa odporności ogniowej elementów oddzielenia przeciwpożarowego oraz zamknięć znajdujących się w nich otworów w budynkach, o których mowa w § 213, powinna być nie mniejsza od określonej w ust. 4 dla budynków o klasie odporności pożarowej „D” i „E”.'}] },
    {L: 3,num: '6.',name: 'Szkło w otworach oddzieleń',children: [
    {L: 4,num: '',name: 'W ścianie oddzielenia przeciwpożarowego dopuszcza się wypełnienie otworów materiałem przepuszczającym światło, takim jak luksfery, cegła szklana lub inne przeszklenie, jeżeli powierzchnia wypełnionych otworów nie przekracza 10% powierzchni ściany, przy czym klasa odporności ogniowej wypełnień nie powinna być niższa niż:<br><table><colgroup><col /><col /><col /></colgroup><tbody><tr><td colspan="1" rowspan="2"><div>Wymagana klasa odporności ogniowej ściany oddzielenia przeciwpożarowego</div></td><td colspan="2" rowspan="1">Klasa odporności ogniowej wypełnienia otworu w ścianie</td></tr><tr><td>będącej obudową drogi ewakuacyjnej</td><td>innej</td></tr><tr><td>REI 240</td><td>EI 120</td><td>E&nbsp;120</td></tr><tr><td>REI 120</td><td>EI 60</td><td>E 60</td></tr><tr><td>REI 60</td><td>EI 30</td><td>E 30</td></tr></tbody></table>'}] },
    {L: 3,num: '7.',name: 'Otwory w ścianie PM',children: [
    {L: 4,num: '',name: 'Dopuszcza się stosowanie w strefach pożarowych PM otworu w ścianie oddzielenia przeciwpożarowego, służącego przeprowadzeniu urządzeń technologicznych, chronionego w sposób równoważny wymaganym dla tej ściany drzwiom przeciwpożarowym pod względem możliwości przeniesienia się przez ten otwór ognia lub dymu, w przypadku pożaru.'}] }] },
    {L: 2,num: '§ 233.',name: 'Teatry ',children: [
    {L: 3,num: '1.',name: 'Kurtyna przeciwpożarowa',children: [
    {L: 4,num: '',name: 'Stosowanie kurtyny przeciwpożarowej jest wymagane do oddzielenia:<br>1) widowni, o liczbie miejsc przekraczającej 600, od sceny teatralnej o powierzchni wewnętrznej przekraczającej 150 m2 lub o kubaturze brutto przekraczającej 1.200 m3,<br>2) kieszeni scenicznej, o powierzchni przekraczającej 100 m2, od sceny teatralnej o powierzchni wewnętrznej przekraczającej 300 m2 lub o kubaturze brutto przekraczającej 6.000 m3.'}] },
    {L: 3,num: '2.',name: 'Oddymianie scen',children: [
    {L: 4,num: '',name: 'Sceny, o których mowa w ust. 1, powinny być wyposażone w samoczynne urządzenia oddymiające uruchamiane za pomocą systemu wykrywania dymu.'}] }] },
    {L: 2,num: '§ 234.',name: 'Przepusty instalacyjne',children: [
    {L: 3,num: '1.',name: 'Klasa jak oddzielenie ppoż.',children: [
    {L: 4,num: '',name: 'Przepusty instalacyjne w elementach oddzielenia przeciwpożarowego powinny mieć klasę odporności ogniowej (EI) wymaganą dla tych elementów.'}] },
    {L: 3,num: '2.',name: 'Złagodzenie - higienicznosanitarne ',children: [
    {L: 4,num: '',name: 'Dopuszcza się nieinstalowanie przepustów, o których mowa w ust. 1, dla pojedynczych rur instalacji wodnych, kanalizacyjnych i ogrzewczych, wprowadzanych przez ściany i stropy do pomieszczeń higienicznosanitarnych.'}] },
    {L: 3,num: '3.',name: 'Klasa jak przegroda w nie-oddzieleniach EI60',children: [
    {L: 4,num: '',name: 'Przepusty instalacyjne o średnicy większej niż 0,04 m w ścianach i stropach, pomieszczenia zamkniętego, dla których wymagana klasa odporności ogniowej jest nie niższa niż EI 60 lub REI 60, a niebędących elementami oddzielenia przeciwpożarowego, powinny mieć klasę odporności ogniowej (EI) ścian i stropów tego pomieszczenia.'}] },
    {L: 3,num: '4.',name: 'Przejścia przez ściany zewnętrzne poniżej terenu',children: [
    {L: 4,num: '',name: 'Przejścia instalacji przez zewnętrzne ściany budynku, znajdujące się poniżej poziomu terenu, powinny być zabezpieczone przed możliwością przenikania gazu do wnętrza budynku.'}] }] },
    {L: 2,num: '§ 235.',name: 'Ściany oddzielenia ppoż. ',children: [
    {L: 3,num: '1.',name: 'Podparcie o odporności co najmniej równej',children: [
    {L: 4,num: '',name: 'Ścianę oddzielenia przeciwpożarowego należy wznosić na własnym fundamencie lub na stropie, opartym na konstrukcji nośnej o klasie odporności ogniowej nie niższej od odporności ogniowej tej ściany.'}] },
    {L: 3,num: '2.',name: 'Wysunięcie poza lico i pas niepalny',children: [
    {L: 4,num: '',name: 'Ścianę oddzielenia przeciwpożarowego należy wysunąć na co najmniej 0,3 m poza lico ściany zewnętrznej budynku lub na całej wysokości ściany zewnętrznej zastosować pionowy pas z materiału niepalnego o szerokości co najmniej 2 m i klasie odporności ogniowej EI 60.'}] },
    {L: 3,num: '3.',name: 'Dach z przekryciem rozprzestrzeniającym ogień',children: [
    {L: 4,num: '',name: 'W budynku z przekryciem dachu rozprzestrzeniającym ogień ściany oddzielenia przeciwpożarowego należy wyprowadzić ponad pokrycie dachu na wysokość co najmniej 0,3 m lub zastosować wzdłuż ściany pas z materiału niepalnego o szerokości co najmniej 1 m i klasie odporności ogniowej EI 60, bezpośrednio pod pokryciem; przekrycie na tej szerokości powinno być nierozprzestrzeniające ognia.'}] },
    {L: 3,num: '4.',name: 'Dach ze świetlikami lub klapami',children: [
    {L: 4,num: '',name: 'W budynku, z wyjątkiem zabudowy jednorodzinnej, w dachu którego znajdują się świetliki lub klapy dymowe, ściany oddzielenia przeciwpożarowego usytuowane od nich w odległości poziomej mniejszej niż 5 m, należy wyprowadzić ponad górną ich krawędź na wysokość co najmniej 0,3 m, przy czym wymaganie to nie dotyczy świetlików nieotwieranych o klasie odporności ogniowej co najmniej E 30.'}] }] }] },
    {L: 1,num: 'Rozdział 4. ',name: 'Drogi ewakuacyjne',children: [
    {L: 2,num: '§ 236.',name: 'Wymagania ogólne',children: [
    {L: 3,num: '1.',name: 'Wyjście z pomieszczeń na zewnątrz lub przez inną strefę drogami',children: [
    {L: 4,num: '',name: 'Z pomieszczeń przeznaczonych na pobyt ludzi powinna być zapewniona możliwość ewakuacji w bezpieczne miejsce na zewnątrz budynku lub do sąsiedniej strefy pożarowej, bezpośrednio albo drogami komunikacji ogólnej, zwanymi dalej „drogami ewakuacyjnymi".'}] },
    {L: 3,num: '2.',name: 'Wyjście ze strefy na zewnątrz lub przez inną strefę',children: [
    {L: 4,num: '',name: 'Ze strefy pożarowej, o której mowa w ust. 1, powinno być wyjście bezpośrednio na zewnątrz budynku lub przez inną strefę pożarową, z zastrzeżeniem § 227 ust. 5.'}] },
    {L: 3,num: '3.',name: 'Pomieszczenia zamykane są drzwiami',children: [
    {L: 4,num: '',name: 'Wyjścia z pomieszczeń na drogi ewakuacyjne powinny być zamykane drzwiami.'}] },
    {L: 3,num: '4.',name: 'Kierunek otwierana drzwi >50 osób',children: [
    {L: 4,num: '',name: 'Drzwi stanowiące wyjście ewakuacyjne z budynku przeznaczonego dla więcej niż 50 osób powinny otwierać się na zewnątrz. Wymaganie to nie dotyczy budynku wpisanego do rejestru zabytków.'}] },
    {L: 3,num: '5.',name: 'Drzwi rozsuwane - dopuszczalne*',children: [
    {L: 4,num: '',name: 'W wyjściu ewakuacyjnym z budynku dopuszcza się stosowanie drzwi rozsuwanych spełniających wymagania określone w § 240 ust. 4.'}] },
    {L: 3,num: '6.',name: 'Ustalanie liczby osób - wskaźniki',children: [
    {L: 4,num: '',name: 'Określając wymaganą szerokość i liczbę przejść, wyjść oraz dróg ewakuacyjnych w budynku, w którym z przeznaczenia i sposobu zagospodarowania pomieszczeń nie wynika jednoznacznie maksymalna liczba ich użytkowników, liczbę tę należy przyjmować w odniesieniu do powierzchni, tych pomieszczeń, dla:<br>1) sal konferencyjnych, lokali gastronomiczno-rozrywkowych, poczekalni, holi, świetlic itp. - 1 m2/osobę,<br>2) pomieszczeń handlowo-usługowych - 4 m2/osobę,<br>3) pomieszczeń administracyjno-biurowych - 5 m2/osobę,<br>4) archiwów, bibliotek itp. - 7 m2/osobę,<br>5) magazynów - 30 m2/osobę.'}] }] },
    {L: 2,num: '§ 237.',name: 'Przejścia ewakuacyjne',children: [
    {L: 3,num: '1.',name: 'Definicja i długość',children: [
    {L: 4,num: '',name: 'W pomieszczeniach, od najdalszego miejsca, w którym może przebywać człowiek, do wyjścia ewakuacyjnego na drogę ewakuacyjną lub do innej strefy pożarowej albo na zewnątrz budynku, powinno być zapewnione przejście, zwane dalej „przejściem ewakuacyjnym", o długości nieprzekraczającej:<br>1) w strefach pożarowych ZL - 40 m,<br>2) w strefach pożarowych PM o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2 w budynku o więcej niż jednej kondygnacji nadziemnej - 75 m,<br>3) w strefach pożarowych PM, o obciążeniu ogniowym nieprzekraczającym 500 MJ/m2, w budynku o więcej niż jednej kondygnacji nadziemnej oraz w strefach pożarowych PM w budynku o jednej kondygnacji nadziemnej bez względu na wielkość obciążenia ogniowego - 100 m.'}] },
    {L: 3,num: '2.',name: 'Długość w ZW - max 40m',children: [
    {L: 4,num: '',name: 'W pomieszczeniu zagrożonym wybuchem długość przejścia ewakuacyjnego, o którym mowa w ust.1 pkt 2 i 3, nie powinna przekraczać 40 m.'}] },
    {L: 3,num: '3.',name: 'Przejście przez ZW - dopuszczalne*',children: [
    {L: 4,num: '',name: 'Dopuszcza się prowadzenie przez pomieszczenie zagrożone wybuchem przejścia ewakuacyjnego z innego pomieszczenia, jeżeli pomieszczenia te są powiązane funkcjonalnie.'}] },
    {L: 3,num: '4.',name: '80% gdy niejednoznaczny układ pomieszczenia',children: [
    {L: 4,num: '',name: 'Jeżeli z przewidywanego przeznaczenia pomieszczenia nie wynika jednoznacznie sposób jego zagospodarowania, projektowa długość przejścia ewakuacyjnego nie może być większa niż 80% długości określonej w ust. 1 i 2.'}] },
    {L: 3,num: '5.',name: 'Długość +25% za wysokość > 5 m',children: [
    {L: 4,num: '',name: 'W pomieszczeniach o wysokości przekraczającej 5 m długość przejść, o których mowa w ust. 1 i 2, może być powiększona o 25%.'}] },
    {L: 3,num: '6.',name: 'Długość +50% za SUGw lub oddymianie',children: [
    {L: 4,num: '',name: 'Długości przejść, o których mowa w ust. 1 i 2, mogą być powiększone pod warunkiem zastosowania:<br>1) stałych samoczynnych urządzeń gaśniczych wodnych - o 50%,<br>2) samoczynnych urządzeń oddymiających uruchamianych za pomocą systemu wykrywania dymu - o 50%.'}] },
    {L: 3,num: '7.',name: 'Długość +100% za SUGw i oddymianie',children: [
    {L: 4,num: '',name: 'Powiększenia, o których mowa w ust. 5 i 6 pkt 1 i 2, podlegają sumowaniu.'}] },
    {L: 3,num: '8.',name: 'Max liczba pomieszczeń - 3',children: [
    {L: 4,num: '',name: 'Przejście, o którym mowa w ust. 1, nie powinno prowadzić łącznie przez więcej niż trzy pomieszczenia.'}] },
    {L: 3,num: '9.',name: 'Ścianki działowe dla przejścia - klasa E',children: [
    {L: 4,num: '',name: 'Ścianek działowych oddzielających od siebie pomieszczenia, dla których określa się łącznie długość przejścia ewakuacyjnego, nie dotyczą wymagania określone w § 216 ust. 1.'}] },
    {L: 3,num: '10.',name: 'Szerokość przejścia - 6mm/os (min. 0.8-0.9m)',children: [
    {L: 4,num: '',name: 'Szerokość przejścia ewakuacyjnego w pomieszczeniu przeznaczonym na pobyt ludzi, z zastrzeżeniem § 261, należy obliczać proporcjonalnie do liczby osób, do których ewakuacji ono służy, przyjmując co najmniej 0,6 m na 100 osób, lecz nie mniej niż 0,9 m, a w przypadku przejścia służącego do ewakuacji do 3 osób - nie mniej niż 0,8 m.'}] }] },
    {L: 2,num: '§ 238.',name: 'Minimum 2 wyjścia (oddalone o min 5m)',children: [
    {L: 3,num: '1.',name: 'Liczba osób, mobilność, powierzchnia, zagrożenie ',children: [
    {L: 4,num: '',name: 'Pomieszczenie powinno mieć co najmniej dwa wyjścia ewakuacyjne oddalone od siebie o co najmniej 5 m w przypadkach, gdy:<br>1) jest przeznaczone do jednoczesnego przebywania w nim ponad 50 osób, a w strefie pożarowej ZL II - ponad 30 osób,<br>2) znajduje się w strefie pożarowej ZL, a jego powierzchnia przekracza 300 m2,<br>3) znajduje się w strefie pożarowej PM o gęstości obciążenia ogniowego powyżej 500 MJ/m2, a jego powierzchnia przekracza 300 m2,<br>4) znajduje się w strefie pożarowej PM o gęstości obciążenia ogniowego do 500 MJ/m2, a jego powierzchnia przekracza 1.000 m2,<br>5) jest zagrożone wybuchem, a jego powierzchnia przekracza 100 m2.'}] }] },
    {L: 2,num: '§ 239.',name: 'Drzwi ewakuacyjne',children: [
    {L: 3,num: '1.',name: 'Szerokość drzwi - 6mm/os (min. 0.8-0.9m)',children: [
    {L: 4,num: '',name: 'Łączną szerokość drzwi w świetle, stanowiących wyjścia ewakuacyjne z pomieszczenia, należy obliczać proporcjonalnie do liczby osób mogących przebywać w nim równocześnie, przyjmując co najmniej 0,6 m szerokości na 100 osób, przy czym najmniejsza szerokość drzwi w świetle ościeżnicy powinna wynosić 0,9 m, a w przypadku drzwi służących do ewakuacji do 3 osób - 0,8 m.'}] },
    {L: 3,num: '2.',name: 'Konieczność otwierania na zewnątrz (kryteria)',children: [
    {L: 4,num: '',name: 'Drzwi stanowiące wyjście ewakuacyjne powinny otwierać się na zewnątrz pomieszczeń:<br>1) zagrożonych wybuchem,<br>2) do których jest możliwe niespodziewane przedostanie się mieszanin wybuchowych lub substancji trujących, duszących bądź innych, mogących utrudnić ewakuację,<br>3) przeznaczonych do jednoczesnego przebywania ponad 50 osób,<br>4) przeznaczonych dla ponad 6 osób o ograniczonej zdolności poruszania się.'}] },
    {L: 3,num: '3.',name: 'Zagrożenie wybuchem - przez przedsionek',children: [
    {L: 4,num: '',name: 'Wyjścia ewakuacyjne z pomieszczenia zagrożonego wybuchem na drogę ewakuacyjną powinny prowadzić przez przedsionki przeciwpożarowe odpowiadające wymaganiom § 232.'}] },
    {L: 3,num: '4.',name: 'Szerokość wyjscia z budynku',children: [
    {L: 4,num: '',name: 'Szerokość drzwi stanowiących wyjście ewakuacyjne z budynku, z zastrzeżeniem ust. 1, a także szerokość drzwi na drodze ewakuacyjnej z klatki schodowej, prowadzących na zewnątrz budynku lub do innej strefy pożarowej, powinna być nie mniejsza niż szerokość biegu klatki schodowej, określona zgodnie z § 68 ust. 1 i 2.'}] },
    {L: 3,num: '5.',name: 'Szerokość innych drzwi',children: [
    {L: 4,num: '',name: 'Szerokość drzwi w świetle na drodze ewakuacyjnej, niewymienionych w ust. 4, należy obliczać proporcjonalnie do liczby osób, do których ewakuacji są one przeznaczone, przyjmując co najmniej 0,6 m szerokości na 100 osób, przy czym najmniejsza szerokość drzwi powinna wynosić 0,9 m w świetle ościeżnicy.'}] },
    {L: 3,num: '6.',name: 'Wysokość drzwi',children: [
    {L: 4,num: '',name: 'Wysokość drzwi, o których mowa w ust. 1, 4 i 5, powinna odpowiadać wymaganiom § 62 ust. 1.'}] }] },
    {L: 2,num: '§ 240.',name: 'Drzwi nietypowe i urządzenia dodatkowe',children: [
    {L: 3,num: '1.',name: 'Wieloskrzydłowe',children: [
    {L: 4,num: '',name: 'Drzwi wieloskrzydłowe, stanowiące wyjście ewakuacyjne z pomieszczenia oraz na drodze ewakuacyjnej, powinny mieć co najmniej jedno, nieblokowane skrzydło drzwiowe o szerokości nie mniejszej niż 0,9 m.'}] },
    {L: 3,num: '2.',name: 'Wahadłowe',children: [
    {L: 4,num: '',name: 'Szerokość skrzydła drzwi wahadłowych, stanowiących wyjście ewakuacyjne z pomieszczenia oraz na drodze ewakuacyjnej, powinna wynosić co najmniej dla drzwi jednoskrzydłowych - 0,9 m, a dla drzwi dwuskrzydłowych - 0,6 m, przy czym oba skrzydła drzwi dwuskrzydłowych muszą mieć tę samą szerokość.'}] },
    {L: 3,num: '3.',name: 'Obrotowe i podnoszone',children: [
    {L: 4,num: '',name: 'Zabrania się stosowania do celów ewakuacji drzwi obrotowych i podnoszonych.'}] },
    {L: 3,num: '4.',name: 'Rozsuwane',children: [
    {L: 4,num: '',name: 'Drzwi rozsuwane mogą stanowić wyjścia na drogi ewakuacyjne, a także być stosowane na drogach ewakuacyjnych, jeżeli są przeznaczone nie tylko do celów ewakuacji, a ich konstrukcja zapewnia:<br>1) otwieranie automatyczne i ręczne bez możliwości ich blokowania,<br>2) samoczynne ich rozsunięcie i pozostanie w pozycji otwartej w razie pożaru lub awarii drzwi.'}] },
    {L: 3,num: '5.',name: 'Bramy i ściany przesuwane',children: [
    {L: 4,num: '',name: 'W bramach i ścianach przesuwanych na drogach ewakuacyjnych powinny znajdować się drzwi otwierane ręcznie albo w bezpośrednim sąsiedztwie tych bram i ścian powinny być umieszczone i wyraźnie oznakowane drzwi przeznaczone do celów ewakuacji.'}] },
    {L: 3,num: '6.',name: 'Samoczynne zamykanie w przypadku pożaru',children: [
    {L: 4,num: '',name: 'Drzwi, bramy i inne zamknięcia otworów o wymaganej klasie odporności ogniowej lub dymoszczelności powinny być zaopatrzone w urządzenia, zapewniające samoczynne zamykanie otworu w razie pożaru. Należy też zapewnić możliwość ręcznego otwierania drzwi służących do ewakuacji.'}] },
    {L: 3,num: '7.',name: 'Przeciwpaniczne >300 osób',children: [
    {L: 4,num: '',name: 'Drzwi stanowiące wyjście ewakuacyjne z pomieszczenia, w którym może przebywać jednocześnie więcej niż 300 osób, oraz drzwi na drodze ewakuacyjnej z tego pomieszczenia, powinny być wyposażone w urządzenia przeciwpaniczne.'}] }] },
    {L: 2,num: '§ 241.',name: 'Obudowa poziomych dróg ewakuacyjnych',children: [
    {L: 3,num: '1.',name: 'Klasa obudowy - jak ściany wewnętrzne*',children: [
    {L: 4,num: '',name: 'Obudowa poziomych dróg ewakuacyjnych powinna mieć klasę odporności ogniowej wymaganą dla ścian wewnętrznych, nie mniejszą jednak niż E I 15, z uwzględnieniem § 217. Wymaganie klasy odporności ogniowej dla obudowy poziomych dróg ewakuacyjnych nie dotyczy obudowy krytego ciągu pieszego - pasażu, o którym mowa w § 247 ust. 2.'}] },
    {L: 3,num: '2.',name: 'Naświetla na drogach ewakuacji',children: [
    {L: 4,num: '',name: 'W ścianach wewnętrznych, stanowiących obudowę dróg ewakuacyjnych w strefach pożarowych ZL III i PM, dopuszcza się umieszczenie nieotwieranych naświetli powyżej 2 m od poziomu posadzki, jeżeli przylegające pomieszczenia nie są zagrożone wybuchem i jeżeli gęstość obciążenia ogniowego w tych pomieszczeniach nie przekracza 1.000 MJ na m2.'}] },
    {L: 3,num: '3.',name: 'Naświetla na zewnętrznej galerii',children: [
    {L: 4,num: '',name: 'W ścianach zewnętrznych budynków, przy których znajduje się galeria, będąca jedyną drogą ewakuacyjną, dopuszcza się umieszczenie naświetli powyżej 2 m od posadzki tej galerii.'}] }] },
    {L: 2,num: '§ 242.',name: 'Wymiary dróg ewakuacyjnych',children: [
    {L: 3,num: '1.',name: 'Szerokość ',children: [
    {L: 4,num: '',name: 'Szerokość poziomych dróg ewakuacyjnych należy obliczać proporcjonalnie do liczby osób mogących przebywać jednocześnie na danej kondygnacji budynku, przyjmując co najmniej 0,6 m na 100 osób, lecz nie mniej niż 1,4 m.'}] },
    {L: 3,num: '2.',name: 'Zmniejszenie szerokości',children: [
    {L: 4,num: '',name: 'Dopuszcza się zmniejszenie szerokości poziomej drogi ewakuacyjnej do 1,2 m, jeżeli jest ona przeznaczona do ewakuacji nie więcej niż 20 osób.'}] },
    {L: 3,num: '3.',name: 'Wysokość',children: [
    {L: 4,num: '',name: 'Wysokość drogi ewakuacyjnej powinna wynosić co najmniej 2,2 m, natomiast wysokość lokalnego obniżenia 2 m, przy czym długość obniżonego odcinka drogi nie może być większa niż 1,5 m na każdym odcinku drogi ewakuacyjnej o długości 10 m.'}] },
    {L: 3,num: '4.',name: 'Drzwi stanowiące wyjscie na drogę',children: [
    {L: 4,num: '',name: 'Skrzydła drzwi stanowiących wyjście na drogę ewakuacyjną nie mogą, po ich całkowitym otwarciu, zmniejszać wymaganej szerokości tej drogi. Wymagania nie stosuje się do drzwi wyposażonych w urządzenia samoczynnie je zamykające.'}] }] },
    {L: 2,num: '§ 243.',name: 'Długie korytarze',children: [
    {L: 3,num: '1.',name: 'Podział korytarzy ZL (max 50m)',children: [
    {L: 4,num: '',name: 'Korytarze stanowiące drogę ewakuacyjną w strefach pożarowych ZL powinny być podzielone na odcinki nie dłuższe niż 50 m przy zastosowaniu przegród z drzwiami dymoszczelnymi lub innych urządzeń technicznych, zapobiegających rozprzestrzenianiu się dymu.'}] },
    {L: 3,num: '2.',name: 'Bez podziału korytarzy jeśli oddymianie',children: [
    {L: 4,num: '',name: 'Wymaganie, o którym mowa w ust. 1, nie dotyczy korytarzy, na których zastosowano rozwiązania techniczno-budowlane zabezpieczające przed zadymieniem.'}] },
    {L: 3,num: '3.',name: 'Przy podziale - przegrody niepalne',children: [
    {L: 4,num: '',name: 'Przegrody, o których mowa w ust. 1, nad sufitami podwieszonymi i pod podłogami podniesionymi powyżej poziomu stropu lub podłoża, powinny być wykonane z materiałów niepalnych.'}] }] },
    {L: 2,num: '§ 244.',name: 'Ograniczenia dla niektórych schodów i stopni',children: [
    {L: 3,num: '1.',name: 'Zakaz stopni na spocznikach i zabiegowych',children: [
    {L: 4,num: '',name: 'Na drogach ewakuacyjnych jest zabronione stosowanie:<br>1) spoczników ze stopniami,<br>2) schodów ze stopniami zabiegowymi, jeżeli schody te są jedyną drogą ewakuacyjną.'}] },
    {L: 3,num: '2.',name: 'Schody wachlarzowe - tak, jeśli szerokie stopnie',children: [
    {L: 4,num: '',name: 'Na drogach ewakuacyjnych dopuszcza się stosowanie schodów wachlarzowych, pod warunkiem zachowania najmniejszej szerokości stopni określonych w § 69 ust. 6.'}] },
    {L: 3,num: '3.',name: 'Oznakowanie pochylni lub różnicy poziomu',children: [
    {L: 4,num: '',name: 'Na drogach ewakuacyjnych miejsca, w których zastosowano pochylnie lub stopnie umożliwiające pokonanie różnicy poziomów, powinny być wyraźnie oznakowane.'}] }] },
    {L: 2,num: '§ 245.',name: 'Obudowa klatek i przeciwdziałanie zadymieniu',children: [
    {L: 3,num: '1. ',name: 'Samoczynne usuwanie dymu lub systemy różnicowania ciśnienia',children: [
    {L: 4,num: '',name: 'Klatki schodowe przeznaczone do ewakuacji ze strefy pożarowej:<br>1) ZL II w budynku niskim (N),<br>2) ZL I, ZL II, ZL III lub ZL V w budynku średniowysokim (SW),<br>3) PM o gęstości obciążenia ogniowego powyżej 500 MJ/m2 lub zawierającej pomieszczenie zagrożone wybuchem w budynku niskim (N) bądź średniowysokim (SW)<br>– powinny być obudowane i zamykane drzwiami dymoszczelnymi oraz wyposażone w urządzenia zapobiegające zadymieniu lub służące do usuwania dymu, uruchamiane samoczynnie za pomocą systemu wykrywania dymu.'}] }] },
    {L: 2,num: '§ 246.',name: 'Ewakuacja',children: [
    {L: 3,num: '1.',name: 'Min 2 obudowane klatki i przedsionki (W-WW)',children: [
    {L: 4,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW), z zastrzeżeniem ust. 4, należy zapewnić możliwość ewakuacji do co najmniej dwóch klatek schodowych, które powinny być obudowane i oddzielone od poziomych dróg komunikacyjnych lub ewakuacyjnych oraz pomieszczeń, przedsionkiem przeciwpożarowym, odpowiadającym wymaganiom określonym w § 232.'}] },
    {L: 3,num: '2.',name: 'Zapobieganie zadymieniu w klatkach i przedsionkach (W-WW)',children: [
    {L: 4,num: '',name: 'Klatki schodowe i przedsionki przeciwpożarowe, stanowiące drogę ewakuacyjną w budynku wysokim (W) dla stref pożarowych innych niż ZL IV i PM oraz w budynku wysokościowym (WW), powinny być wyposażone w urządzenia zapobiegające ich zadymieniu.'}] },
    {L: 3,num: '3.',name: 'Klatki i przedsionki - usuwanie lub zapobieganie zadymieniu (PM, W)',children: [
    {L: 4,num: '',name: 'Klatki schodowe i przedsionki przeciwpożarowe, stanowiące drogę ewakuacyjną w budynku wysokim (W) dla strefy pożarowej PM, powinny być wyposażone w urządzenia zapobiegające zadymieniu lub samoczynne urządzenia oddymiające uruchamiane za pomocą systemu wykrywania dymu.'}] },
    {L: 3,num: '4.',name: '1 klatka - gdy rzut < 750 m2 (W bez ZL II + WW ZL IV)*',children: [
    {L: 4,num: '',name: 'Prowadzenie ewakuacji tylko do jednej klatki schodowej dopuszcza się w przypadku:<br>1) budynku wysokiego (W) niezawierającego strefy pożarowej ZL II, jeżeli powierzchnia wewnętrzna kondygnacji nie przekracza 750 m2;<br>2) strefy pożarowej ZL IV, jeżeli łączna powierzchnia wewnętrzna mieszkań na kondygnacji lub jej części nie przekracza 750 m2.'}] },
    {L: 3,num: '5.',name: 'Alternatywy dla przedsionków (ZL IV - W-WW) ',children: [
    {L: 4,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW) dopuszcza się wykonywanie klatek schodowych, stanowiących drogę ewakuacyjną wyłącznie dla stref pożarowych ZL IV, bez przedsionków oddzielających je od poziomych dróg komunikacji ogólnej, jeżeli:<br>1) każde mieszkanie lub pomieszczenie jest oddzielone od poziomej drogi komunikacji ogólnej drzwiami o klasie odporności ogniowej co najmniej E I 30,<br>2) klatki schodowe są zamykane drzwiami dymoszczelnymi,<br>3) klatki schodowe są wyposażone w urządzenia zapobiegające zadymieniu lub w samoczynne urządzenia oddymiające uruchamiane za pomocą systemu wykrywania dymu.'}] },
    {L: 3,num: '6.',name: 'Drzwi EI30 z pokojów (ZL5 poza N)',children: [
    {L: 4,num: '',name: 'W budynku średniowysokim (SW) i wyższym, w strefie pożarowej ZL V, drzwi z pomieszczeń, z wyjątkiem higienicznosanitarnych, prowadzące na drogi komunikacji ogólnej, powinny mieć klasę odporności ogniowej co najmniej E I 30.'}] }] },
    {L: 2,num: '§ 247.',name: 'Wymagane oddymianie',children: [
    {L: 3,num: '1.',name: 'Budynki W/WW, ZL IV',children: [
    {L: 4,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW), w strefach pożarowych innych niż ZL IV, należy zastosować rozwiązania techniczno-budowlane zabezpieczające przed zadymieniem poziomych dróg ewakuacyjnych.'}] },
    {L: 3,num: '2.',name: 'Pasaż',children: [
    {L: 4,num: '',name: 'W krytym ciągu pieszym (pasażu), do którego przylegają lokale handlowe i usługowe, oraz w przekrytym dziedzińcu wewnętrznym, należy zastosować rozwiązania techniczno-budowlane zabezpieczające przed zadymieniem dróg ewakuacyjnych.'}] },
    {L: 3,num: '3.',name: 'Kondygnacja podziemna',children: [
    {L: 4,num: '',name: 'W podziemnej kondygnacji budynku, w której znajduje się pomieszczenie przeznaczone dla ponad 100 osób, oraz budowli podziemnej z takim pomieszczeniem, należy zastosować rozwiązania techniczno-budowlane zapewniające usuwanie dymu z tego pomieszczenia i z dróg ewakuacyjnych.'}] }] },
    {L: 2,num: '§ 248.',name: 'Schody wewnętrzne',children: [
    {L: 3,num: '1.',name: 'ZL IV',children: [
    {L: 4,num: '',name: 'Schody wewnętrzne w mieszkaniach w budynku wielorodzinnym oraz w budynku jednorodzinnym, zagrodowym i rekreacji indywidualnej, a także budynku tymczasowym nieprzeznaczonym na cele widowiskowe lub inne zgromadzenia ludzi, mogą nie spełniać wymagań stawianych drogom ewakuacyjnym.'}] }] },
    {L: 2,num: '§ 249.',name: 'Klatki schodowe',children: [
    {L: 3,num: '1.',name: 'Klasa obudowy jak dla stropów',children: [
    {L: 4,num: '',name: 'Ściany wewnętrzne i stropy stanowiące obudowę klatki schodowej lub pochylni powinny mieć klasę odporności ogniowej określoną zgodnie z § 216, jak dla stropów budynku.'}] },
    {L: 3,num: '2.',name: '(uchyla się)',children: [
    {L: 4,num: '',name: '(uchyla się)'}] },
    {L: 3,num: '3.',name: 'Klasa biegów',children: [
    {L: 4,num: '',name: 'Biegi i spoczniki schodów oraz pochylnie służące do ewakuacji powinny być wykonane z materiałów niepalnych i mieć klasę odporności ogniowej co najmniej:<br>1) w budynkach o klasie odporności pożarowej „A”, „B” i „C” - R 60,<br>2) w budynkach o klasie odporności pożarowej „D” i „E” - R 30.'}] },
    {L: 3,num: '4.',name: 'Bez klasy gdy przedsionki lub antresola < 10 osób',children: [
    {L: 4,num: '',name: 'Wymaganie klasy odporności ogniowej, o którym mowa w ust. 3, nie dotyczy klatek schodowych wydzielonych na każdej kondygnacji przedsionkami przeciwpożarowymi oraz schodów na antresolę w pomieszczeniu, w którym się ona znajduje, jeżeli antresola ta jest przeznaczona do użytku nie więcej niż 10 osób.'}] },
    {L: 3,num: '5.',name: 'Palne biegi w Niskim DE (obudowane klatki)',children: [
    {L: 4,num: '',name: 'W budynku niskim o klasie odporności pożarowej „D” lub „E” w obudowanych klatkach schodowych, zamykanych drzwiami o klasie odporności ogniowej co najmniej EI 30, dopuszcza się wykonanie biegów i spoczników schodów z materiałów palnych.'}] },
    {L: 3,num: '6.',name: 'Ściany zewnętrzne',children: [
    {L: 4,num: '',name: 'Odległość między ścianą zewnętrzną, stanowiącą obudowę klatki schodowej przeznaczonej do ewakuacji, o której mowa w § 245, 246 i 256 ust. 2, a inną ścianą zewnętrzną tego samego lub innego budynku powinna być ustalona zgodnie z § 271. Przepisu nie stosuje się, jeżeli co najmniej jedna z tych ścian posiada co najmniej klasę odporności ogniowej zgodnie z § 216, jak dla stropu budynku z tą klatką schodową, w pasie terenu określonym zgodnie z § 271.'}] }] },
    {L: 2,num: '§ 250.',name: 'Oddzielenie piwnic',children: [
    {L: 3,num: '1.',name: 'Klasa oddzielenia piwnic',children: [
    {L: 4,num: '',name: 'Piwnice powinny być oddzielone od pozostałej części budynku, z wyjątkiem budynków ZL IV niskich (N) i średniowysokich (SW) stropami i ścianami o klasie odporności ogniowej co najmniej R E I 60 i zamknięte drzwiami o klasie odporności ogniowej co najmniej E I 30. Jeżeli drzwi do piwnic znajdują się poniżej poziomu terenu, schody prowadzące z tego poziomu powinny być zabezpieczone w sposób uniemożliwiający omyłkowe zejście ludzi do piwnic w przypadku ewakuacji (np. ruchomą barierą)'}] },
    {L: 3,num: '2.',name: 'Przedsionki W i WW',children: [
    {L: 4,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW) piwnice powinny być oddzielone od klatki schodowej przedsionkiem przeciwpożarowym.'}] }] },
    {L: 2,num: '§ 251.',name: 'Wyjście z klatki schodowej',children: [
    {L: 3,num: '1.',name: 'Strych lub poddasze',children: [
    {L: 4,num: '',name: 'Wyjście z klatki schodowej na strych lub poddasze powinno być zamykane drzwiami lub klapą wyjściową o klasie odporności ogniowej co najmniej:<br>1) w budynkach niskich (N) - E I 15,<br>2) w budynkach średniowysokich (SW) i wyższych - E I 30.'}] }] },
    {L: 2,num: '§ 252.',name: 'Schody i pochylnie ruchome',children: [
    {L: 3,num: '1.',name: 'Nie wliczane',children: [
    {L: 4,num: '',name: 'Schodów i pochylni ruchomych nie zalicza się do dróg ewakuacyjnych.'}] }] },
    {L: 2,num: '§ 253.',name: 'Dźwigi dla ekip ratowniczych',children: [
    {L: 3,num: '1.',name: 'Posadzka powyżej 25 m',children: [
    {L: 4,num: '',name: 'W budynku ZL I, ZL II, ZL III lub ZL V, mającym kondygnację z posadzką na wysokości powyżej 25 m ponad poziomem terenu przy najniżej położonym wejściu do budynku oraz w budynku wysokościowym (WW) ZL IV przynajmniej jeden dźwig powinien być przystosowany do potrzeb ekip ratowniczych, spełniając wymagania Polskiej Normy dotyczącej dźwigów dla straży pożarnej. Dźwig dla ekip ratowniczych powinien zapewniać dostęp do każdej strefy pożarowej na kondygnacji bezpośrednio lub drogami komunikacji ogólnej.'}] },
    {L: 3,num: '2.',name: 'Dojście do dźwigu',children: [
    {L: 4,num: '',name: 'Dojście do dźwigu dla ekip ratowniczych powinno prowadzić przez przedsionek przeciwpożarowy spełniający wymagania określone w § 232.'}] },
    {L: 3,num: '3.',name: 'Ściany i stropy',children: [
    {L: 4,num: '',name: 'Ściany i stropy szybu dźwigu dla ekip ratowniczych powinny mieć klasę odporności ogniowej wymaganą jak dla stropów budynku, zgodnie z § 216.'}] },
    {L: 3,num: '4.',name: 'Zapobieganie zadymieniu',children: [
    {L: 4,num: '',name: 'Szyb dźwigu dla ekip ratowniczych powinien być wyposażony w urządzenia zapobiegające zadymieniu'}] }] },
    {L: 2,num: '§ 254.',name: '(uchylony)',children: [
    {L: 3,num: '1. ',name: '(uchylony)',children: [
    {L: 4,num: '',name: '(uchylony)'}] }] },
    {L: 2,num: '§ 255.',name: '(uchylony)',children: [
    {L: 3,num: '1. ',name: '(uchylony)',children: [
    {L: 4,num: '',name: '(uchylony)'}] }] },
    {L: 2,num: '§ 256.',name: 'Dojścia ewakuacyjne',children: [
    {L: 3,num: '1.',name: 'Pojęcie dojścia',children: [
    {L: 4,num: '',name: 'Długość drogi ewakuacyjnej od wyjścia z pomieszczenia na tę drogę do wyjścia do innej strefy pożarowej lub na zewnątrz budynku, zwanej dalej „dojściem ewakuacyjnym", mierzy się wzdłuż osi drogi ewakuacyjnej. W przypadku zakończenia dojścia ewakuacyjnego przedsionkiem przeciwpożarowym, długość tę mierzy się do pierwszych drzwi tego przedsionka.'}] },
    {L: 3,num: '2.',name: 'Wyjście do innej strefy',children: [
    {L: 4,num: '',name: 'Za równorzędne wyjściu do innej strefy pożarowej, o którym mowa w ust. 1, uważa się wyjście do obudowanej klatki schodowej, zamykanej drzwiami o klasie odporności ogniowej co najmniej E I 30, wyposażonej w urządzenia zapobiegające zadymieniu lub służące do usuwania dymu, a w przypadku, o którym mowa w § 246 ust. 5 - zamykanej drzwiami dymoszczelnymi.'}] },
    {L: 3,num: '3.',name: 'Długości dojść ewakuacyjnych',children: [
    {L: 4,num: '',name: 'Dopuszczalne długości dojść ewakuacyjnych w strefach pożarowych określa poniższa tabela:<br><table><colgroup><col/><col/><col/></colgroup><tbody><tr><td colspan="1" rowspan="2"><div>Rodzaj strefy pożarowej</div></td><td colspan="2" rowspan="1">Długość dojścia w m</td></tr><tr><td>przy jednym dojściu</td><td><div><div>przy co najmniej 2 dojściach&sup1;⁾</div></div></td></tr><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>Z pomieszczeniem zagrożonym wybuchem</td><td>10</td><td>40</td></tr><tr><td>PM o gęstości obciążenia ogniowego Q &gt; 500 MJ/m&sup2; bez pomieszczenia zagrożonego wybuchem</td><td>30&sup2;⁾</td><td>60</td></tr><tr><td>PM o gęstości obciążenia ogniowego Q &le; 500 MJ/m&sup2; bez pomieszczenia zagrożonego wybuchem</td><td>60&sup2;⁾</td><td>100</td></tr><tr><td>ZL I, II i V</td><td>10</td><td>40</td></tr><tr><td>ZL III</td><td>30&sup2;⁾</td><td>60</td></tr><tr><td>ZL IV</td><td>60&sup2;⁾</td><td>100</td></tr></tbody></table>1) Dla dojscia najkrótszego, przy czym dopuszcza się dla drugiego dojścia długość większą o 100% od najkrótszego. Dojścia te nie mogą się pokrywać ani krzyżować, przy czym dopuszcza się ich wsp&oacute;lny początkowy przebieg na długości nie większej niż 2 m.<br />2) W tym nie więcej niż 20 m na poziomej drodze ewakuacyjnej.'}] },
    {L: 3,num: '4. ',name: 'Powiększenie długości dojść',children: [
    {L: 4,num: '',name: 'Długości dojść ewakuacyjnych, o których mowa w ust. 3, mogą być powiększone pod warunkiem ochrony:<br>1) strefy pożarowej stałymi samoczynnymi urządzeniami gaśniczymi wodnymi - o 50%,<br>2) drogi ewakuacyjnej samoczynnymi urządzeniami oddymiającymi uruchamianymi za pomocą systemu wykrywania dymu - o 50%.<br>Przy jednoczesnym stosowaniu tych urządzeń długość dojścia może być powiększona o 100%'}] },
    {L: 3,num: '5. ',name: 'Wyjście z klatki schodowej',children: [
    {L: 4,num: '',name: 'Wyjście z klatki schodowej, o której mowa w ust. 2, powinno prowadzić na zewnątrz budynku, bezpośrednio lub poziomymi drogami komunikacji ogólnej, których obudowa odpowiada wymaganiom § 249 ust. 1, a otwory w obudowie mają zamknięcia o klasie odporności ogniowej co najmniej E I 30.'}] },
    {L: 3,num: '6. ',name: 'Prowadzenie drogi ewakuacyjnej przez hol',children: [
    {L: 4,num: '',name: 'Dopuszcza się przeprowadzenie drogi ewakuacyjnej do wyjścia na zewnątrz budynku z klatki schodowej oraz z poziomych dróg komunikacji ogólnej przez hol, mogący spełniać także funkcje uzupełniające do funkcji wynikających z przeznaczenia budynku, takie jak: recepcyjna, ochrony budynku, drobnej sprzedaży, pod warunkiem że:<br>1) przez jeden hol możliwe jest przeprowadzenie drogi ewakuacyjnej tylko z jednej klatki schodowej, przy czym ograniczenie to nie odnosi się do klatek schodowych z odrębnym, nieprowadzącym przez ten hol, wyjściem ewakuacyjnym,<br>2) hol nie znajduje się w strefie pożarowej PM o gęstości obciążenia ogniowego powyżej 500 MJ/m2 ani też zawierającej pomieszczenie zagrożone wybuchem,<br>3) hol jest oddzielony od poziomych dróg komunikacji ogólnej, tak jak jest to wymagane dla klatki schodowej, o której mowa w pkt 1,<br>4) wolna szerokość drogi ewakuacyjnej jest co najmniej o 50% większa od szerokości poziomej drogi ewakuacyjnej w budynku, prowadzącej do tego wyjścia, określonej zgodnie z § 242 ust. 1, dla kondygnacji budynku o największej liczbie przewidywanych osób, znajdujących się tam jedocześnie,<br>5) wysokość holu w miejscu, w którym przebiega droga ewakuacyjna, jest nie mniejsza niż 3,3 m,<br>6) szerokość drzwi wyjściowych na zewnątrz budynku jest większa o 50% od minimalnej szerokości drzwi wyjściowych określonej zgodnie z § 239 ust. 4.'}] },
    {L: 3,num: '7. ',name: 'Długość od klatki schodowej',children: [
    {L: 4,num: '',name: 'Dopuszczalną długość drogi od wyjścia z klatki schodowej, o której mowa w ust. 2, do wyjścia na zewnątrz budynku określa się zgodnie z ust. 3.'}] }] },
    {L: 2,num: '§ 257.',name: 'Drabiny ewakuacyjne',children: [
    {L: 3,num: '1.',name: 'Budynki PM',children: [
    {L: 4,num: '',name: 'W budynku PM, w którym jest wymagana druga droga ewakuacyjna dla ludzi z wyższej kondygnacji, dopuszcza się stosowanie na tej drodze drabiny ewakuacyjnej, prowadzącej na dach nad niższą kondygnacją lub na poziom terenu, jeżeli liczba osób przebywających jednocześnie na wyższej kondygnacji nie przekracza 50, a w budynku z pomieszczeniem zagrożonym wybuchem - 15. Nie dotyczy to zakładów pracy chronionej.'}] },
    {L: 3,num: '2.',name: 'Usytuowanie drabin',children: [
    {L: 4,num: '',name: 'Drabiny ewakuacyjne należy umieszczać w miejscach łatwo dostępnych. Sytuowanie drabin naprzeciw świetlików i okien jest zabronione.'}] },
    {L: 3,num: '3.',name: 'Wykonanie drabin',children: [
    {L: 4,num: '',name: 'Dopuszcza się wykonywanie drabin ewakuacyjnych bez obręczy ochronnych, gdy różnica wysokości nie przekracza 3 m, z uwzględnieniem wymagań § 101.'}] }] }] },
    {L: 1,num: 'Rozdział 5. ',name: 'Wykończenie i wyposażenie',children: [
    {L: 2,num: '§ 258.',name: 'Materiały i wyroby łatwo zapalne',children: [
    {L: 3,num: '1.',name: 'Zakaz w ZL (bez mieszkalnych)',children: [
    {L: 4,num: '',name: 'W strefach pożarowych ZL I, ZL II, ZL III i ZL V stosowanie do wykończenia wnętrz materiałów i wyrobów łatwo zapalnych, których produkty rozkładu termicznego są bardzo toksyczne lub intensywnie dymiące, jest zabronione.'}] },
    {L: 3,num: '1a.',name: 'Materiały luźno zwisające - PN',children: [
    {L: 4,num: '',name: 'W przypadku stosowania materiałów wykończeniowych luźno zwisających, w szczególności w kurtynach, zasłonach, draperiach, kotarach oraz żaluzjach, za łatwo zapalne uważa się materiały, których właściwości określone w badaniach zgodnych z Polskimi Normami odnoszącymi się do zapalności i rozprzestrzeniania płomienia przez wyroby włókiennicze nie spełniają co najmniej jednego z kryteriów:<br>1) ti ≥4 s,<br>2) ts ≤ 30 s,<br>3) nie następuje przepalenie trzeciej nitki,<br>4) nie występują płonące krople.'}] },
    {L: 3,num: '2.',name: 'Zakaz na drogach ewakuacyjnych',children: [
    {L: 4,num: '',name: 'Na drogach komunikacji ogólnej, służących celom ewakuacji, stosowanie materiałów i wyrobów budowlanych łatwo zapalnych jest zabronione.'}] }] },
    {L: 2,num: '§ 259.',name: 'Podłogi podniesione',children: [
    {L: 3,num: '1.',name: 'Konstrukcja',children: [
    {L: 4,num: '',name: 'Podłogi podniesione o więcej niż 0,2 m ponad poziom stropu lub innego podłoża powinny mieć:<br>1) niepalną konstrukcję nośną oraz co najmniej niezapalne płyty podłogi od strony przestrzeni podpodłogowej, mające klasę odporności ogniowej co najmniej REI 30, a w budynku wysokościowym (WW) lub ze strefą pożarową o gęstości obciążenia ogniowego ponad 4.000 MJ/m2 oraz w strefach pożarowych ZL II - co najmniej REI 60,<br>2) przestrzeń podpodłogową podzieloną na sektory o powierzchni nie większej niż 1.000 m2 przegrodami o klasie odporności ogniowej co najmniej EI 30, a w budynku wysokościowym (WW) lub ze strefą pożarową o gęstości obciążenia ogniowego ponad 4.000 MJ/m2 - co najmniej EI 60.'}] },
    {L: 3,num: '2.',name: 'Przewody i kable',children: [
    {L: 4,num: '',name: 'Przewody i kable elektryczne oraz inne instalacje wykonane z materiałów palnych, prowadzone w przestrzeni podpodłogowej podłogi podniesionej i w przestrzeni ponad sufitami podwieszonymi, wykorzystywanej do wentylacji lub ogrzewania pomieszczenia, powinny mieć osłonę lub obudowę o klasie odporności ogniowej co najmniej EI 30, a w budynku wysokościowym (WW) lub w budynkach ze strefą pożarową o gęstości obciążenia ogniowego ponad 4.000 MJ/m2 - co najmniej EI 60.'}] },
    {L: 3,num: '3.',name: 'Otwory',children: [
    {L: 4,num: '',name: 'Na drogach ewakuacyjnych wykonywanie w podłodze podniesionej otworów do wentylacji lub ogrzewania jest zabronione.'}] }] },
    {L: 2,num: '§ 260.',name: 'Łatwo zapalne przegrody, elementy i wykładziny',children: [
    {L: 3,num: '1.',name: 'Pomieszczenia dla więcej niż 50 osób i produkcyjne',children: [
    {L: 4,num: '',name: 'W pomieszczeniach, przeznaczonych do jednoczesnego przebywania ponad 50 osób oraz w pomieszczeniach produkcyjnych, stosowanie łatwo zapalnych przegród, stałych elementów wyposażenia i wystroju wnętrz oraz wykładzin podłogowych jest zabronione.'}] },
    {L: 3,num: '2.',name: 'ZL II, magazyny i pomieszczenia z podniesionymi podłogami',children: [
    {L: 4,num: '',name: 'W pomieszczeniach stref pożarowych ZL II, pomieszczeniach magazynowych oraz w pomieszczeniach z podłogami podniesionymi, stosowanie wykładzin podłogowych łatwo zapalnych jest zabronione.'}] }] },
    {L: 2,num: '§ 261.',name: 'Siedzenia w rzędach',children: [
    {L: 3,num: '1. ',name: 'Ponad 200 dorosłych lub 100 dzieci',children: [
    {L: 4,num: '',name: 'Pomieszczenia przeznaczone do jednoczesnego przebywania ponad 200 osób dorosłych lub 100 dzieci, w których miejsca do siedzenia są ustawione w rzędach, powinny mieć:<br>1) fotele i inne siedzenia trudno zapalne oraz niewydzielające produktów rozkładu i spalania, określonych jako bardzo toksyczne, zgodnie z Polską Normą dotyczącą badań wydzielania produktów toksycznych; określenie trudno zapalny przypisuje się fotelom i innym siedzeniom, które nie ulegają postępującemu tleniu i spalaniu płomieniowemu w warunkach określonych Polską Normą dotyczącą badania zapalności mebli tapicerowanych,<br>2) szerokość przejść pomiędzy rzędami siedzeń nie mniejszą niż 0,45 m, przy czym odległość tę należy ustalać, biorąc pod uwagę odstęp między stałymi elementami siedzeń,<br>3) liczbę siedzeń w rzędzie nie większą niż 16 pomiędzy przejściami oraz 8 w rzędzie przyściennym, przy czym dopuszcza się zwiększenie liczby miejsc w rzędach odpowiednio do 40 i 20 pod warunkiem zwiększenia odstępu między rzędami siedzeń o 1 cm na każde dodatkowe siedzenie odpowiednio powyżej 16 lub 8,<br>4) szerokość przejść komunikacyjnych nie mniejszą niż 1,2 m przy liczbie osób do 150, a przy większej ich liczbie szerokość tę należy zwiększyć proporcjonalnie o 0,6 m na 100 osób,<br>5) rzędy siedzeń lub ławek trwale umocowane do podłogi albo siedzenia sztywno łączone ze sobą w rzędy oraz między rzędami.'}] }] },
    {L: 2,num: '§ 262.',name: 'Sufity',children: [
    {L: 3,num: '1.',name: 'Materiały',children: [
    {L: 4,num: '',name: 'Okładziny sufitów oraz sufity podwieszone należy wykonywać z materiałów niepalnych lub niezapalnych, niekapiących i nieodpadających pod wpływem ognia. Wymaganie to nie dotyczy mieszkań.'}] },
    {L: 3,num: '2.',name: 'Podział na sektory',children: [
    {L: 4,num: '',name: 'Przestrzeń między sufitem podwieszonym i stropem powinna być podzielona na sektory o powierzchni nie większej niż 1.000 m2, a w korytarzach - przegrodami co 50 m, wykonanymi z materiałów niepalnych.'}] }] },
    {L: 2,num: '§ 263.',name: 'Łazienki i sauny',children: [
    {L: 3,num: '1.',name: 'Piecyki gazowe i elektryczne',children: [
    {L: 4,num: '',name: 'W łazienkach i saunach z piecykami gazowymi oraz termami gazowymi i elektrycznymi dopuszcza się stosowanie okładzin ściennych z materiałów palnych, z tym że odległość tych urządzeń od okładzin powinna wynosić co najmniej 0,3 m.'}] },
    {L: 3,num: '2.',name: 'Piec na paliwo',children: [
    {L: 4,num: '',name: 'Stosowanie okładzin ściennych z materiałów łatwo zapalnych w łazienkach i saunach z piecem na paliwo stałe jest zabronione.'}] }] },
    {L: 2,num: '§ 264.',name: 'Łazienki i sauny',children: [
    {L: 3,num: '1. ',name: 'Zabezpieczenie przed zapyleniem i zwęgleniem',children: [
    {L: 4,num: '',name: 'Palne elementy wystroju wnętrz budynku, przez które lub obok których są prowadzone przewody ogrzewcze, wentylacyjne, dymowe lub spalinowe, powinny być zabezpieczone przed możliwością zapalenia lub zwęglenia.'}] }] }] },
    {L: 1,num: 'Rozdział 6. ',name: 'Paleniska i wentylacja',children: [
    {L: 2,num: '§ 265.',name: 'Paleniska i piece',children: [
    {L: 3,num: '1.',name: 'Usytuowanie palenisk',children: [
    {L: 4,num: '',name: 'Palenisko powinno być umieszczone na podłożu niepalnym o grubości co najmniej 0,15 m, a przy piecach metalowych bez nóżek - 0,3 m. Podłoga łatwo zapalna przed drzwiczkami palenisk powinna być zabezpieczona pasem materiału niepalnego o szerokości co najmniej 0,3 m, sięgającym poza krawędzie drzwiczek co najmniej po 0,3 m.'}] },
    {L: 3,num: '2.',name: 'Paleniska otwarte',children: [
    {L: 4,num: '',name: 'Palenisko otwarte może być stosowane tylko w pomieszczeniu, w którym nie występuje zagrożenie wybuchem, w odległości co najmniej 0,6 m od łatwo zapalnych części budynku. W pomieszczeniach ze stropem drewnianym palenisko otwarte powinno mieć okap wykonany z materiałów niepalnych, wystający co najmniej 0,3 m poza krawędź paleniska.'}] },
    {L: 3,num: '3.',name: 'Usytuowanie piecy metalowych',children: [
    {L: 4,num: '',name: 'Piec metalowy lub w ramach metalowych, rury przyłączeniowe oraz otwory do czyszczenia powinny być oddalone od łatwo zapalnych, nieosłoniętych części konstrukcyjnych budynku co najmniej 0,6 m, a od osłoniętych okładziną z tynku o grubości 25 mm lub inną równorzędną okładziną - co najmniej 0,3 m.'}] },
    {L: 3,num: '4.',name: 'Usytuowanie piecy z kamienia i ceramiki',children: [
    {L: 4,num: '',name: 'Piec z kamienia, cegły, kafli i podobnych materiałów niepalnych oraz przewody spalinowe i dymowe powinny być oddalone od łatwo zapalnych, nieosłoniętych części konstrukcyjnych budynku co najmniej 0,3 m, a od osłoniętych okładziną z tynku o grubości 25 mm na siatce albo równorzędną okładziną - co najmniej 0,15 m.'}] }] },
    {L: 2,num: '§ 266.',name: 'Przewody spalinowe',children: [
    {L: 3,num: '1.',name: 'Niepalne materiały',children: [
    {L: 4,num: '',name: 'Przewody spalinowe i dymowe powinny być wykonane z wyrobów niepalnych.'}] },
    {L: 3,num: '2.',name: 'Spełniają PN dla małych kominów',children: [
    {L: 4,num: '',name: 'Przewody lub obudowa przewodów spalinowych i dymowych powinny spełniać wymagania określone w Polskiej Normie dotyczącej badań ogniowych małych kominów.'}] },
    {L: 3,num: '3.',name: 'Obudowy z cegły 12cm',children: [
    {L: 4,num: '',name: 'Dopuszcza się wykonanie obudowy, o której mowa w ust. 2, z cegły pełnej grubości 12 cm, murowanej na zaprawie cementowo-wapiennej, z zewnętrznym tynkiem lub spoinowaniem.'}] },
    {L: 3,num: '4.',name: 'Min 6m do korony drzew',children: [
    {L: 4,num: '',name: 'Między wylotem przewodu spalinowego i dymowego a najbliższym skrajem korony drzew dorosłych należy zapewnić zachowanie odległości co najmniej 6 m, z zastrzeżeniem § 271 ust. 8.'}] }] },
    {L: 2,num: '§ 267.',name: 'Przewody wentylacyjne',children: [
    {L: 3,num: '1.',name: 'Wykonanie przewodów',children: [
    {L: 4,num: '',name: 'Przewody wentylacyjne powinny być wykonane z materiałów niepalnych, a palne izolacje cieplne i akustyczne oraz inne palne okładziny przewodów wentylacyjnych mogą być stosowane tylko na zewnętrznej ich powierzchni w sposób zapewniający nierozprzestrzenianie ognia.'}] },
    {L: 3,num: '2.',name: 'Budynki PM',children: [
    {L: 4,num: '',name: 'Dopuszcza się w budynkach PM, z wyjątkiem garaży, wykonanie przewodów wentylacyjnych nierozprzestrzeniających ognia, pod warunkiem że nie są one prowadzone przez drogi ewakuacyjne oraz nie przepływa nimi powietrze o temperaturze powyżej 85°C lub zanieczyszczenia mogące się odkładać.'}] },
    {L: 3,num: '3.',name: 'Odległość od wykładzin',children: [
    {L: 4,num: '',name: 'Odległość nieizolowanych przewodów wentylacyjnych od wykładzin i powierzchni palnych powinna wynosić co najmniej 0,5 m.'}] },
    {L: 3,num: '4.',name: 'Drzwiczki rewizyjne',children: [
    {L: 4,num: '',name: 'Drzwiczki rewizyjne stosowane w kanałach i przewodach wentylacyjnych powinny być wykonane z materiałów niepalnych.'}] },
    {L: 3,num: '5.',name: 'Kuchnie',children: [
    {L: 4,num: '',name: 'W kuchni lub w aneksie kuchennym w mieszkaniu dopuszcza się stosowanie przewodów wentylacji wywiewnej z materiałów co najmniej trudno zapalnych.'}] },
    {L: 3,num: '6.',name: 'Połączenia przewodów',children: [
    {L: 4,num: '',name: 'Elastyczne elementy łączące, służące do połączenia sztywnych przewodów wentylacyjnych z elementami instalacji lub urządzeniami, z wyjątkiem wentylatorów, powinny być wykonane z materiałów co najmniej trudno zapalnych, posiadać długość nie większą niż 4 m, przy czym nie powinny być prowadzone przez elementy oddzielenia przeciwpożarowego.'}] },
    {L: 3,num: '7.',name: 'Łączenia przewodów z wentylatorami',children: [
    {L: 4,num: '',name: 'Elastyczne elementy łączące wentylatory z przewodami wentylacyjnymi powinny być wykonane z materiałów co najmniej trudno zapalnych, przy czym ich długość nie powinna przekraczać 0,25 m.'}] },
    {L: 3,num: '8.',name: 'Izolacje',children: [
    {L: 4,num: '',name: 'Izolacje cieplne i akustyczne zastosowane w instalacjach: wodociągowej, kanalizacyjnej i ogrzewczej powinny być wykonane w sposób zapewniający nierozprzestrzenianie ognia.'}] }] },
    {L: 2,num: '§ 268.',name: 'Wentylacja i klimatyzacja',children: [
    {L: 3,num: '1.',name: 'Wymagania ogólne',children: [
    {L: 4,num: '',name: 'Instalacje wentylacji mechanicznej i klimatyzacji w budynkach, z wyjątkiem budynków jednorodzinnych i rekreacji indywidualnej, powinny spełniać następujące wymagania:<br>1) przewody wentylacyjne powinny być wykonane i prowadzone w taki sposób, aby w przypadku pożaru nie oddziaływały siłą większą niż 1 kN na elementy budowlane, a także aby przechodziły przez przegrody w sposób umożliwiający kompensacje wydłużeń przewodu,<br>2) zamocowania przewodów do elementów budowlanych powinny być wykonane z materiałów niepalnych, zapewniających przejęcie siły powstającej w przypadku pożaru w czasie nie krótszym niż wymagany dla klasy odporności ogniowej przewodu lub klapy odcinającej,<br>3) w przewodach wentylacyjnych nie należy prowadzić innych instalacji,<br>4) filtry i tłumiki powinny być zabezpieczone przed przeniesieniem się do ich wnętrza palących się cząstek,<br>5) maszynownie wentylacyjne i klimatyzacyjne w budynkach mieszkalnych średniowysokich (SW) i wyższych oraz w innych budynkach o wysokości powyżej dwóch kondygnacji nadziemnych powinny być wydzielone ścianami o klasie odporności ogniowej co najmniej E I 60 i zamykane drzwiami o klasie odporności ogniowej co najmniej E I 30; nie dotyczy to obudowy urządzeń instalowanych ponad dachem budynku.'}] },
    {L: 3,num: '2.',name: 'Stosowanie nagrzewnic',children: [
    {L: 4,num: '',name: 'Dopuszcza się instalowanie w przewodzie wentylacyjnym nagrzewnic elektrycznych, oraz nagrzewnic na paliwo ciekłe lub gazowe, których temperatura powierzchni grzewczych nie przekracza 160°C, pod warunkiem zastosowania ogranicznika temperatury, automatycznie wyłączającego ogrzewanie po osiągnięciu temperatury powietrza 110°C oraz zabezpieczenia uniemożliwiającego pracę nagrzewnicy bez przepływu powietrza.'}] },
    {L: 3,num: '3.',name: 'Wentylatory',children: [
    {L: 4,num: '',name: 'Dopuszcza się zainstalowanie w przewodzie wentylacyjnym wentylatorów i urządzeń do uzdatniania powietrza pod warunkiem wykonania ich obudowy o klasie odporności ogniowej E I 60.'}] },
    {L: 3,num: '4.',name: 'Przejście przez elemementy oddzielenia ppoż',children: [
    {L: 4,num: '',name: 'Przewody wentylacyjne i klimatyzacyjne w miejscu przejścia przez elementy oddzielenia przeciwpożarowego powinny być wyposażone w przeciwpożarowe klapy odcinające o klasie odporności ogniowej równej klasie odporności ogniowej elementu oddzielenia przeciwpożarowego z uwagi na szczelność ogniową, izolacyjność ogniową i dymoszczelność (E I S), z zastrzeżeniem ust. 5.'}] },
    {L: 3,num: '5.',name: 'Przejście przez nieobsługiwaną strefę',children: [
    {L: 4,num: '',name: 'Przewody wentylacyjne i klimatyzacyjne samodzielne lub obudowane prowadzone przez strefę pożarową, której nie obsługują, powinny mieć klasę odporności ogniowej wymaganą dla elementów oddzielenia przeciwpożarowego tych stref pożarowych z uwagi na szczelność ogniową, izolacyjność ogniową i dymoszczelność (E I S) lub powinny być wyposażone w przeciwpożarowe klapy odcinające zgodnie z ust. 4.'}] },
    {L: 3,num: '6.',name: 'Współpraca z instalacją sygnalizacyjno-alarmową',children: [
    {L: 4,num: '',name: 'W strefach pożarowych, w których jest wymagana instalacja sygnalizacyjno-alarmowa, przeciwpożarowe klapy odcinające powinny być uruchamiane przez tę instalację, niezależnie od zastosowanego wyzwalacza termicznego.'}] }] },
    {L: 2,num: '§ 269.',name: 'Pomieszczenia zagrożone wybuchem',children: [
    {L: 3,num: '1.',name: 'Wstrzymanie pracy wentylatorów',children: [
    {L: 4,num: '',name: 'W pomieszczeniach zagrożonych wybuchem należy stosować urządzenia wstrzymujące automatycznie pracę wentylatorów w razie powstania pożaru i sygnalizujące ich wyłączenie, jeżeli działanie wentylatorów mogłoby przyczynić się do jego rozprzestrzeniania.'}] },
    {L: 3,num: '2.',name: 'Instalacje wyciągowe',children: [
    {L: 4,num: '',name: 'W pomieszczeniach zagrożonych wybuchem należy stosować oddzielną dla każdego pomieszczenia instalację wyciągową.'}] },
    {L: 3,num: '3.',name: 'Usytuowanie otworów wyciągowych',children: [
    {L: 4,num: '',name: 'Usytuowanie wentylacyjnych otworów wyciągowych powinno uwzględniać gęstość względną par cieczy i gazów występujących w pomieszczeniu w stosunku do powietrza oraz przewidywany kierunek ruchu zanieczyszczonego powietrza.'}] },
    {L: 3,num: '4.',name: 'Pomieszczeni z palnymi pyłami',children: [
    {L: 4,num: '',name: 'W pomieszczeniach, w których mogą występować palne pyły, tworzące z powietrzem mieszaniny wybuchowe, otwory wentylacji nawiewnej powinny być usytuowane oraz wykonane tak, aby nie powodowały unoszenia pyłów osiadłych.'}] },
    {L: 3,num: '5.',name: 'Filtry, komory pyłowe i cyklony',children: [
    {L: 4,num: '',name: 'Filtry, komory pyłowe i cyklony do palnych pyłów powinny być zlokalizowane w pomieszczeniach wydzielonych elementami oddzielenia przeciwpożarowego lub też na zewnątrz budynku, w miejscu bezpiecznym dla tych urządzeń oraz dla otoczenia.'}] },
    {L: 3,num: '6.',name: 'Wyjątki',children: [
    {L: 4,num: '',name: 'Wymagania, o których mowa w ust. 5, nie dotyczą przypadków uzasadnionych względami technologicznymi, w których filtry, komory pyłowe i cyklony stanowią bezpośrednie wyposażenie urządzeń i agregatów produkcyjnych.'}] },
    {L: 3,num: '7.',name: 'Urządzenia zapobiegające przeniesieniu się ognia',children: [
    {L: 4,num: '',name: 'Przewody wentylacyjne przed miejscem wprowadzenia do komór pyłowych i cyklonów powinny być wyposażone w urządzenia zapobiegające przeniesieniu się ognia.'}] },
    {L: 3,num: '8.',name: 'Klapy lub przepony przeciwwybuchowe',children: [
    {L: 4,num: '',name: 'Komory pyłowe i cyklony dla pyłów tworzących z powietrzem mieszaniny wybuchowe powinny być wyposażone w klapy lub przepony przeciwwybuchowe, zabezpieczające konstrukcję cyklonu i komory, a także konstrukcję budynku przed skutkami wybuchu.'}] }] },
    {L: 2,num: '§ 270.',name: 'Wentylacja oddymiająca',children: [
    {L: 3,num: '1.',name: 'Wymagania dla wentylacji',children: [
    {L: 4,num: '',name: 'Instalacja wentylacji oddymiającej powinna:<br>1) usuwać dym z intensywnością zapewniającą, że w czasie potrzebnym do ewakuacji ludzi na chronionych przejściach i drogach ewakuacyjnych nie wystąpi zadymienie lub temperatura uniemożliwiające bezpieczną ewakuację,<br>2) mieć stały dopływ powietrza zewnętrznego uzupełniającego braki tego powietrza w wyniku jego wypływu wraz z dymem,<br>3–7) (uchylone)'}] },
    {L: 3,num: '2.',name: 'Klasa odporności przewodów',children: [
    {L: 4,num: '',name: 'Przewody wentylacji oddymiającej, obsługujące:<br>1) wyłącznie jedną strefę pożarową, powinny mieć klasę odporności ogniowej z uwagi na szczelność ogniową i dymoszczelność - E600 S, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216, przy czym dopuszcza się stosowanie klasy E300 S, jeżeli wynikająca z obliczeń temperatura dymu powstającego w czasie pożaru nie przekracza 300 °C,<br>2) więcej niż jedną strefę pożarową, powinny mieć klasę odporności ogniowej E I S, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216.'}] },
    {L: 3,num: '3.',name: 'Klasa odporności klap odcinających',children: [
    {L: 4,num: '',name: 'Klapy odcinające do przewodów wentylacji oddymiającej, obsługujące:<br>1) wyłącznie jedną strefę pożarową, powinny być uruchamiane automatycznie i mieć klasę odporności ogniowej z uwagi na szczelność ogniową i dymoszczelność - E600 S AA, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216, przy czym dopuszcza się stosowanie klasy E300 S AA, jeżeli wynikająca z obliczeń temperatura dymu powstającego w czasie pożaru nie przekracza 300 °C,<br>2) więcej niż jedną strefę pożarową, powinny być uruchamiane automatycznie i mieć klasę odporności ogniowej E I S AA, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216.'}] },
    {L: 3,num: '4.',name: 'Klasa odporności wentylatorów',children: [
    {L: 4,num: '',name: 'Wentylatory oddymiające powinny mieć klasę:<br>1) F600 60, jeżeli przewidywana temperatura dymu przekracza 400 °C,<br>2) F400 120 w pozostałych przypadkach, przy czym dopuszcza się inne klasy, jeżeli z analizy obliczeniowej temperatury dymu oraz zapewnienia bezpieczeństwa ekip ratowniczych wynika taka możliwość.'}] },
    {L: 3,num: '5.',name: 'Klasa odpornosci klap dymowych',children: [
    {L: 4,num: '',name: 'Klapy dymowe w grawitacyjnej wentylacji oddymiającej powinny mieć klasę:<br>1) B300 30 - dla klap otwieranych automatycznie,<br>2) B600 30 - dla klap otwieranych wyłącznie w sposób ręczny.'}] }] }] },
    {L: 1,num: 'Rozdział 7. ',name: 'Usytuowanie',children: [
    {L: 2,num: '§ 271.',name: 'Między budynkami',children: [
    {L: 3,num: '1.',name: 'Wymagana klasa  >65% ściany',children: [
    {L: 4,num: '',name: 'Odległość między zewnętrznymi ścianami budynków niebędącymi ścianami oddzielenia przeciwpożarowego, a mającymi na powierzchni większej niż 65% klasę odporności ogniowej (E), określoną w § 216 ust. 1 w 5 kolumnie tabeli, nie powinna, z zastrzeżeniem ust. 2 i 3, być mniejsza niż odległość w metrach określona w poniższej tabeli:<br><table><colgroup><col /><col /><col /><col /><col /><col /></colgroup><tbody><tr><td colspan="1" rowspan="3"><div>Rodzaj budynku oraz dla budynku PM maksymalna gęstość obciążenia ogniowego strefy pożarowej PM Q w MJ/m&sup2;</div></td><td colspan="5" rowspan="1">Rodzaj budynku oraz dla budynku PM maksymalna gęstość obciążenia ogniowego strefy pożarowej PM Q w MJ/m&sup2;</td></tr><tr><td colspan="1" rowspan="2"><div>ZL</div></td><td colspan="1" rowspan="2"><div>IN</div></td><td colspan="3" rowspan="1">PM</td></tr><tr><td>Q&le;1000</td><td>1000&lt;Q&le;4000</td><td>Q&gt;4000</td></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>ZL</td><td>8</td><td>8</td><td>8</td><td>15</td><td>20</td></tr><tr><td>IN</td><td>8</td><td>8</td><td>8</td><td>15</td><td>20</td></tr><tr><td>PM Q &le; 1000</td><td>8</td><td>8</td><td>8</td><td>15</td><td>20</td></tr><tr><td>PM 1000 &lt; Q &le; 4000</td><td>15</td><td>15</td><td>15</td><td>15</td><td>20</td></tr><tr><td>PM Q &gt; 4000</td><td>20</td><td>20</td><td>20</td><td>20</td><td>20</td></tr></tbody></table>'}] },
    {L: 3,num: '2.',name: 'Ściany i dachy rozprzestrzeniające ogień',children: [
    {L: 4,num: '',name: 'Jeżeli jedna ze ścian zewnętrznych usytuowana od strony sąsiedniego budynku lub przekrycie dachu jednego z budynków jest rozprzestrzeniające ogień, wówczas odległość określoną w ust. 1 należy zwiększyć o 50%, a jeżeli dotyczy to obu ścian zewnętrznych lub przekrycia dachu obu budynków - o 100%.'}] },
    {L: 3,num: '3.',name: 'Zagrożenie wybuchem',children: [
    {L: 4,num: '',name: 'Jeżeli co najmniej w jednym z budynków znajduje się pomieszczenie zagrożone wybuchem, wówczas odległość między ich zewnętrznymi ścianami nie powinna być mniejsza niż 20 m.'}] },
    {L: 3,num: '4.',name: 'Wymagana klasa na 30-65% ściany',children: [
    {L: 4,num: '',name: 'Jeżeli ściana zewnętrzna budynku ma na powierzchni nie większej niż 65%, lecz nie mniejszej niż 30%, klasę odporności ogniowej (E), określoną w § 216 ust. 1 w 5 kolumnie tabeli, wówczas odległość między tą ścianą lub jej częścią a ścianą zewnętrzną drugiego budynku należy zwiększyć w stosunku do określonej w ust. 1 i 2 o 50%.'}] },
    {L: 3,num: '5.',name: 'Wymagana klasa na <30% ściany',children: [
    {L: 4,num: '',name: 'Jeżeli ściana zewnętrzna budynku ma na powierzchni mniejszej niż 30% klasę odporności ogniowej (E), określoną w § 216 ust. 1 w 5 kolumnie tabeli, wówczas odległość między tą ścianą lub jej częścią a ścianą zewnętrzną drugiego budynku należy zwiększyć w stosunku do określonej w ust. 1 i 2 o 100%.'}] },
    {L: 3,num: '6.',name: 'SUG w obu budynkach',children: [
    {L: 4,num: '',name: 'Odległość między ścianami zewnętrznymi budynków lub częściami tych ścian może być zmniejszona o 50%, w stosunku do określonej w ust. 1-5, jeżeli we wszystkich strefach pożarowych budynków, przylegających odpowiednio do tych ścian lub ich części, są stosowane stałe urządzenia gaśnicze wodne.'}] },
    {L: 3,num: '7.',name: 'SUG w jednym z budynków',children: [
    {L: 4,num: '',name: 'Odległość od ściany zewnętrznej budynku lub jej części do ściany zewnętrznej drugiego budynku może być zmniejszona o 25%, w stosunku do określonej w ust. 1-5, jeżeli we wszystkich strefach pożarowych budynku, przylegających odpowiednio do tej ściany lub jej części, są stosowane stałe urządzenia gaśnicze wodne.'}] },
    {L: 3,num: '8.',name: 'Las',children: [
    {L: 4,num: '',name: 'Najmniejszą odległość budynków ZL, PM, IN od granicy (konturu) lasu, rozumianego jako grunt leśny (Ls) określony na mapie ewidencyjnej lub teren przeznaczony w miejscowym planie zagospodarowania przestrzennego jako leśny, przyjmuje się jako odległość ścian tych budynków od ściany budynku ZL z przekryciem dachu rozprzestrzeniającym ogień.'}] },
    {L: 3,num: '8a.',name: 'Niewielkie budynki',children: [
    {L: 4,num: '',name: 'Najmniejsza odległość budynków wymienionych w § 213, wykonanych z elementów nierozprzestrzeniających ognia, niezawierających pomieszczeń zagrożonych wybuchem oraz posiadających klasę odporności pożarowej wyższą niż wymagana zgodnie z § 212, od granicy (konturu) lasu zlokalizowanej na:<br>1) sąsiedniej działce – wynosi 4 m,<br>2) działce, na której sytuuje się budynek – nie określa się<br>– jeżeli teren, na którym znajduje się granica (kontur) lasu, przeznaczony jest w miejscowym planie zagospodarowania przestrzennego pod zabudowę niezwiązaną z produkcją leśną, a w przypadku braku planu miejscowego – grunty leśne są objęte zgodą na zmianę przeznaczenia na cele nieleśne uzyskaną przy sporządzaniu miejscowych planów zagospodarowania przestrzennego, które utraciły moc na podstawie art. 1 lit. a ustawy z dnia 21 grudnia 2001 r. o zmianie ustawy o zagospodarowaniu przestrzennym (Dz. U. poz. 1804) oraz art. 87 ust. 3 ustawy z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym (Dz. U. z 2017 r. poz. 1073 i 1566).'}] },
    {L: 3,num: '9.',name: 'Niewielkie budynki',children: [
    {L: 4,num: '',name: 'Odległości, o których mowa w ust. 1, dla budynków wymienionych w § 213, bez pomieszczeń zagrożonych wybuchem, można zmniejszyć o 25%, jeżeli są zwrócone do siebie ścianami i dachami z przekryciami nierozprzestrzeniającymi ognia, niemającymi otworów.'}] },
    {L: 3,num: '10.',name: 'Oddzielenia w pasie terenu',children: [
    {L: 4,num: '',name: 'W pasie terenu o szerokości określonej w ust. 1-7, otaczającym ściany zewnętrzne budynku, niebędące ścianami oddzielenia przeciwpożarowego, ściany zewnętrzne innego budynku powinny spełniać wymagania określone w § 232 ust. 4 i 5 dla ścian oddzielenia przeciwpożarowego obu budynków.'}] },
    {L: 3,num: '11.',name: 'Ściany pod kątem 60-120',children: [
    {L: 4,num: '',name: 'Wymaganie, o którym mowa w ust. 10, dotyczy pasa terenu o szerokości zmniejszonej o 50% w odniesieniu do tych ścian zewnętrznych obu budynków, które tworzą między sobą kąt 60° lub większy, lecz mniejszy niż 120°.'}] },
    {L: 3,num: '12.',name: 'Ściany pod kątem >120',children: [
    {L: 4,num: '',name: 'Wymaganie, o którym mowa w ust. 10, nie dotyczy budynków, które:<br>1) są oddzielone od siebie ścianą oddzielenia przeciwpożarowego, spełniającą dla obu budynków wymagania określone w § 232 ust. 4 i 5, z zastrzeżeniem § 218, lub<br>2) mają ściany zewnętrzne tworzące między sobą kąt nie mniejszy niż 120°.'}] },
    {L: 3,num: '13.',name: 'Składowisko jak PM',children: [
    {L: 4,num: '',name: 'Otwarte składowisko, ze względu na usytuowanie, należy traktować jak budynek PM.'}] }] },
    {L: 2,num: '§ 272.',name: 'Sąsiednia działka',children: [
    {L: 3,num: '1.',name: 'Sąsiednia działka niezabudowana',children: [
    {L: 4,num: '',name: 'Odległość ściany zewnętrznej wznoszonego budynku od granicy sąsiedniej niezabudowanej działki budowlanej powinna wynosić co najmniej połowę odległości określonej w § 271 ust. 1-7, przyjmując, że na działce niezabudowanej będzie usytuowany budynek o przeznaczeniu określonym w miejscowym planie zagospodarowania przestrzennego, przy czym dla budynków PM należy przyjmować, że będzie on miał gęstość obciążenia ogniowego strefy pożarowej Q większą od 1.000 MJ/m2, lecz nie większą niż 4.000 MJ/m2, a w przypadku braku takiego planu - budynek ZL ze ścianą zewnętrzną, o której mowa w § 271 ust. 1.'}] },
    {L: 3,num: '2.',name: 'Małe budynki ',children: [
    {L: 4,num: '',name: 'Budynki mieszkalne jednorodzinne, rekreacji indywidualnej oraz budynki mieszkalne zagrodowe i gospodarcze, ze ścianami i dachami z przekryciami nierozprzestrzeniającymi ognia, powinny być sytuowane w odległości nie mniejszej od granicy sąsiedniej, niezabudowanej działki, niż jest to określone w § 12.'}] },
    {L: 3,num: '3.',name: 'Budynek na granicy działki',children: [
    {L: 4,num: '',name: 'Budynek usytuowany bezpośrednio przy granicy działki powinien mieć od strony sąsiedniej działki ścianę oddzielenia przeciwpożarowego o klasie odporności ogniowej określonej w § 232 ust. 4 i 5.'}] }] },
    {L: 2,num: '§ 273.',name: 'Ta sama działka i zbiorniki olejowe',children: [
    {L: 3,num: '1.',name: 'Budynki na tej samej działce',children: [
    {L: 4,num: '',name: 'Odległości między ścianami zewnętrznymi budynków położonych na jednej działce budowlanej nie ustala się, z zastrzeżeniem § 249 ust. 6, jeżeli łączna powierzchnia wewnętrzna tych budynków nie przekracza najmniejszej dopuszczalnej powierzchni strefy pożarowej wymaganej dla każdego ze znajdujących się na tej działce rodzajów budynków'}] },
    {L: 3,num: '2.',name: 'Odległość zbiornika oleju i ZL',children: [
    {L: 4,num: '',name: 'Odległość zbiornika naziemnego oleju opałowego zasilającego kotłownię od budynku ZL powinna wynosić co najmniej 10 m.'}] },
    {L: 3,num: '3.',name: 'Odległość zbiornika oleju ze ścianą ',children: [
    {L: 4,num: '',name: 'Dopuszcza się zmniejszenie odległości, o których mowa w ust. 2, do 3 m, pod warunkiem wykonania ściany zewnętrznej budynku od strony zbiornika jako ściany oddzielenia przeciwpożarowego o klasie odporności ogniowej co najmniej R E I 120 lub wykonania takiej ściany pomiędzy budynkiem a zbiornikiem.'}] },
    {L: 3,num: '4.',name: 'Budowa zbiornika',children: [
    {L: 4,num: '',name: 'Zbiorniki, o których mowa w ust. 3, powinny być wykonane jako stalowe dwupłaszczowe lub być lokalizowane na terenie ukształtowanym w formie niecki, o pojemności większej od pojemności zbiornika, z izolacją uniemożliwiającą przedostawanie się oleju do gruntu.'}] },
    {L: 3,num: '5.',name: 'Zbiornik podziemny i ZL',children: [
    {L: 4,num: '',name: 'Odległość budynku ZL od zbiornika podziemnego oleju opałowego, przykrytego warstwą ziemi o grubości nie mniejszej niż 0,5 m, powinna wynosić co najmniej 3 m, a od urządzenia spustowego, oddechowego i pomiarowego tego zbiornika - co najmniej 10 m.'}] },
    {L: 3,num: '6.',name: 'Odległość zbiornika i PM IN',children: [
    {L: 4,num: '',name: 'Odległości budynków PM i IN wykonanych z materiałów niepalnych od zbiorników i ich urządzeń, o których mowa w ust. 5, powinny wynosić co najmniej 3 m.'}] }] }] },
    {L: 1,num: 'Rozdział 8. ',name: 'Garaże',children: [
    {L: 2,num: '§ 274.',name: 'Przepisy ogólne i zadaszony parking',children: [
    {L: 3,num: '1.',name: 'Zakres - zamknięte i otwarte',children: [
    {L: 4,num: '',name: 'Wymagania przeciwpożarowe, określone w niniejszym rozdziale, dotyczą garaży zamkniętych i otwartych, o których mowa w § 102-108.'}] },
    {L: 3,num: '2.',name: 'Gdy nie określono - dotyczy obu',children: [
    {L: 4,num: '',name: 'W przypadku gdy przepis rozporządzenia nie określa rodzaju garażu, należy rozumieć, że dotyczy on garaży zamkniętych i otwartych.'}] },
    {L: 3,num: '3.',name: 'Zadaszony parking - niekapiący',children: [
    {L: 4,num: '',name: 'Jednokondygnacyjny, nadziemny garaż otwarty, mający formę zadaszenia stanowisk postojowych z odkrytymi drogami manewrowymi, powinien mieć elementy konstrukcji i przekrycia dachu niekapiące pod wpływem wysokiej temperatury.'}] }] },
    {L: 2,num: '§ 275.',name: 'Klasy odporności',children: [
    {L: 3,num: '1.',name: 'Jak PM<500',children: [
    {L: 4,num: '',name: 'Klasę odporności pożarowej garażu należy przyjmować, jak dla budynku PM o gęstości obciążenia ogniowego do 500 MJ/m2, pod warunkiem wykonania jego elementów jako nierozprzestrzeniających ognia, niekapiących i nieodpadających pod wpływem ognia, jeżeli przepisy rozporządzenia nie stanowią inaczej.'}] },
    {L: 3,num: '2.',name: 'Parking na dachu w niskim',children: [
    {L: 4,num: '',name: 'Dopuszcza się, z zastrzeżeniem § 277 ust. 5, wykonanie nad najwyższą kondygnacją garażu otwartego, będącego budynkiem niskim (N), dodatkowego poziomu stanowisk postojowych bez zadaszenia lub z zadaszeniem spełniającym wymagania określone w § 274 ust. 3.'}] },
    {L: 3,num: '3.',name: 'Klasa D w otwartym <25m',children: [
    {L: 4,num: '',name: 'Garaż otwarty, którego najwyższy poziom parkowania znajduje się nie wyżej niż 25 m nad poziomem otaczającego terenu, może być wykonany w klasie D odporności pożarowej, jeżeli nad kondygnacją przeznaczoną do parkowania samochodów nie znajdują się inne pomieszczenia.'}] }] },
    {L: 2,num: '§ 276.',name: 'Usytuowanie',children: [
    {L: 3,num: '1.',name: 'Jak PM<1000',children: [
    {L: 4,num: '',name: 'Usytuowanie garażu zamkniętego i otwartego powinno odpowiadać warunkom określonym w § 271 jak dla budynków PM o gęstości obciążenia ogniowego do 1 000 MJ/m2, z zastrzeżeniem § 19.'}] },
    {L: 3,num: '2.',name: 'Wyjątek - do 3 aut',children: [
    {L: 4,num: '',name: 'Przepisu ust. 1 nie stosuje się do garażu o liczbie stanowisk postojowych nie większej niż 3, w zabudowie jednorodzinnej i rekreacji indywidualnej.'}] }] },
    {L: 2,num: '§ 277.',name: 'Strefy pożarowe',children: [
    {L: 3,num: '1.',name: 'Max 5000 m2 w zamkniętym',children: [
    {L: 4,num: '',name: 'Powierzchnia strefy pożarowej w nadziemnym lub podziemnym garażu zamkniętym nie powinna przekraczać 5 000 m2.'}] },
    {L: 3,num: '2.',name: 'Powiększenie strefy',children: [
    {L: 4,num: '',name: 'Powierzchnia, o której mowa w ust. 1, może być powiększona o 100%, jeżeli jest spełniony jeden z poniższych warunków:<br>1) zastosowano ochronę strefy pożarowej stałymi samoczynnymi urządzeniami gaśniczymi wodnymi,<br>2) wykonano, oddzielające od siebie nie więcej niż po 2 stanowiska postojowe, ściany o klasie odporności ogniowej, w części pełnej co najmniej E I 30, od posadzki do poziomu zapewniającego pozostawienie prześwitu pod stropem o wysokości 0,1 do 0,5 m na całej ich długości.'}] },
    {L: 3,num: '3.',name: 'SUG wodne',children: [
    {L: 4,num: '',name: 'W garażu zamkniętym obejmującym więcej niż dwie kondygnacje podziemne lub znajdującym się poniżej drugiej kondygnacji podziemnej należy stosować stałe samoczynne urządzenia gaśnicze wodne. Wymagania nie stosuje się do strefy pożarowej garażu, która posiada bezpośredni wjazd lub wyjazd z budynku.'}] },
    {L: 3,num: '4.',name: 'Oddymianie',children: [
    {L: 4,num: '',name: 'W strefie pożarowej garażu zamkniętego należy stosować instalację wentylacji oddymiającej uruchamianą za pomocą systemu wykrywania dymu, w przypadku gdy ta strefa nie posiada bezpośredniego wjazdu lub wyjazdu z budynku lub gdy jej powierzchnia przekracza 1500 m2.'}] },
    {L: 3,num: '5.',name: 'Przewody wentylacji',children: [
    {L: 4,num: '',name: 'W przypadku zastosowania rozwiązania, o którym mowa w ust. 2 pkt 1, klasa odporności ogniowej przewodów wentylacji oddymiającej powinna odpowiadać wymaganiom określonym w § 270 ust. 2 - jedynie z uwagi na kryterium szczelności ogniowej (E).'}] }] },
    {L: 2,num: '§ 278.',name: 'Wyjścia ewakuacyjne',children: [
    {L: 3,num: '1.',name: 'Wymagane wyjścia ewakuacyjne',children: [
    {L: 4,num: '',name: 'Ze strefy pożarowej garażu, która posiada więcej niż 25 stanowisk postojowych i nie jest wyposażona w instalację wentylacji oddymiającej lub ma powierzchnię przekraczającą 1500 m2, należy zapewnić co najmniej dwa wyjścia ewakuacyjne, przy czym jednym z tych wyjść może być wjazd lub wyjazd.'}] },
    {L: 3,num: '2.',name: 'Przejście ewakuacyjne',children: [
    {L: 4,num: '',name: 'W przypadku strefy pożarowej garażu obejmującej więcej niż dwie kondygnacje wyjścia ewakuacyjne należy zapewnić na poziomie każdej kondygnacji. Długość przejścia od stanowiska postojowego do najbliższego wyjścia ewakuacyjnego nie może przekraczać:<br>1) w garażu zamkniętym – 40 m;<br>2) w garażu otwartym – 60 m.'}] },
    {L: 3,num: '3.',name: 'Powiększenie przejścia',children: [
    {L: 4,num: '',name: 'Długość przejścia, o którym mowa w ust. 2 pkt 1, może być powiększona zgodnie z zasadami określonymi w § 237 ust. 6 i 7. W przypadku zastosowania instalacji wentylacji oddymiającej strumieniowej nie stosuje się § 237 ust. 6 pkt 2.'}] },
    {L: 3,num: '4.',name: 'Dostępność wyjścia',children: [
    {L: 4,num: '',name: 'Wyjście ewakuacyjne powinno być dostępne także w przypadku zamknięcia wjazdu lub wyjazdu z garażu lub bramy między strefami pożarowymi.'}] },
    {L: 3,num: '5.',name: 'Alternatywne wyjścia ewakuacyjne',children: [
    {L: 4,num: '',name: 'Jeżeli poziom parkowania leży nie wyżej niż 3 m nad poziomem terenu urządzonego przy budynku, za wyjście ewakuacyjne mogą służyć nieobudowane schody zewnętrzne.'}] },
    {L: 3,num: '6.',name: 'Oddzielenie garaży',children: [
    {L: 4,num: '',name: 'W garażu podziemnym strefy pożarowe o powierzchni powyżej 1500 m2 powinny, w razie pożaru, mieć możliwość oddzielenia ich od siebie i od kondygnacji nadziemnej budynku za pomocą drzwi, bram lub innych zamknięć o klasie odporności ogniowej nie mniejszej niż E I 30.'}] }] },
    {L: 2,num: '§ 279.',name: 'Wrota garaży w ZL',children: [
    {L: 3,num: '1.',name: 'Odległości od okien w pionie',children: [
    {L: 4,num: '',name: 'W garażu zamkniętym, znajdującym się w budynku ZL, odległość w pionie między wrotami garażu a oknami tego budynku powinna wynosić co najmniej 1,5 m. Odległość ta może wynosić 1,1 m, jeżeli wykonano nad wjazdem do garażu daszek z materiałów niepalnych o wysięgu co najmniej 0,6 m od lica ściany, wysunięty obustronnie 0,8 m poza boczne krawędzie wrót garażu, lub jeżeli wrota garażu są cofnięte o 0,8 m od lica ściany.'}] },
    {L: 3,num: '2.',name: 'Odległości od okien w poziomie',children: [
    {L: 4,num: '',name: 'W budynku, o którym mowa w ust. 1, odległość wrót garażu wbudowanego lub przybudowanego od najbliższej krawędzi okien pomieszczeń przeznaczonych na pobyt ludzi w tym samym budynku nie może być mniejsza niż 1,5 m w rzucie poziomym.'}] }] },
    {L: 2,num: '§ 280.',name: 'Przedsionki przeciwpożarowe',children: [
    {L: 3,num: '1.',name: 'Klasa odporności ogniowej',children: [
    {L: 4,num: '',name: 'Połączenie garażu z budynkiem wymaga zastosowania przedsionka przeciwpożarowego zamykanego drzwiami o klasie odporności ogniowej co najmniej E I 30.'}] },
    {L: 3,num: '2.',name: 'Przedsionki przed dźwigami',children: [
    {L: 4,num: '',name: 'Nie wymaga się zastosowania przedsionka, o którym mowa w ust. 1, przed dźwigiem oddzielonym od garażu drzwiami o klasie odporności ogniowej co najmniej E I 60.'}] },
    {L: 3,num: '3.',name: 'Wyjątek',children: [
    {L: 4,num: '',name: 'Wymaganie, o którym mowa w ust. 1, nie dotyczy budynków mieszkalnych jednorodzinnych i rekreacji indywidualnej.'}] }] },
    {L: 2,num: '§ 281.',name: 'Studzienki rewizyjne, urządzenia i przewody gazowe',children: [
    {L: 3,num: '1. ',name: 'Zabronione',children: [
    {L: 4,num: '',name: 'Instalowanie w garażu studzienek rewizyjnych, urządzeń i przewodów gazowych, z zastrzeżeniem § 164 ust. 6, oraz umieszczanie otworów od palenisk lub otworów rewizyjnych przeznaczonych do czyszczenia kanałów dymowych, spalinowych i wentylacyjnych, jest zabronione.'}] }] }] },
    {L: 1,num: 'Rozdział 9. ',name: 'Inwentarskie',children: [
    {L: 2,num: '§ 282.',name: 'Bez klasy dla niewielkich budynków',children: [
    {L: 3,num: '1. ',name: 'Kubatura do 1500 m3',children: [
    {L: 4,num: '',name: 'Od wymagań dotyczących klasy odporności pożarowej budynków, określonych w § 212, zwalnia się budynki IN o kubaturze brutto do 1.500 m3.'}] }] },
    {L: 2,num: '§ 283.',name: 'Pomieszczenia z paleniskami',children: [
    {L: 3,num: '1. ',name: 'Przegrody niepalne',children: [
    {L: 4,num: '',name: 'Paszarnie, kotłownie i inne pomieszczenia wyposażone w paleniska lub trzony kuchenne, znajdujące się w budynkach IN, powinny mieć podłogi, ściany i stropy wykonane z materiałów niepalnych.'}] }] },
    {L: 2,num: '§ 284.',name: 'Ewakuacja',children: [
    {L: 3,num: '1. ',name: 'Wymagania',children: [
    {L: 4,num: '',name: 'Budynek IN powinien spełniać następujące wymagania ewakuacyjne:<br>1) odległość od najdalszego stanowiska dla zwierząt do wyjścia ewakuacyjnego nie powinna przekraczać przy ściółkowym utrzymaniu zwierząt - 50 m, a przy bezściółkowym - 75 m,<br>2) w bezściółkowym chowie bydła, trzody chlewnej i owiec, jeżeli liczba bydła i trzody chlewnej nie przekracza 15 sztuk, a owiec - 200 sztuk, należy stosować co najmniej jedno wyjście ewakuacyjne,<br>3) w budynku przeznaczonym dla większej liczby zwierząt aniżeli wymieniona w pkt 2 należy stosować co najmniej dwa wyjścia, a z pomieszczeń podzielonych na sekcje - co najmniej jedno wyjście ewakuacyjne z każdej sekcji,<br>4) wrota i drzwi w budynku inwentarskim powinny otwierać się na zewnątrz pomieszczenia.'}] }] },
    {L: 2,num: '§ 285.',name: 'Część mieszkalna',children: [
    {L: 3,num: '1. ',name: 'Część mieszkalna',children: [
    {L: 4,num: '',name: 'Dopuszcza się umieszczenie w jednym budynku części mieszkalnej i gospodarczej pod następującymi warunkami:<br>1) część mieszkalna oraz część gospodarcza mają odrębne wejścia,<br>2) między częścią mieszkalną a gospodarczą zostanie wykonana ściana o klasie odporności ogniowej co najmniej R E I 60.'}] }] }] },
    {L: 1,num: 'Rozdział 10. ',name: 'Tymczasowe',children: [
    {L: 2,num: '§ 286.',name: 'Wymagania ogólne',children: [
    {L: 3,num: '1.',name: 'Klasa odporności pożarowej',children: [
    {L: 4,num: '',name: 'Budynek tymczasowy przeznaczony na stały pobyt ludzi powinien być wykonany co najmniej w klasie „E” odporności pożarowej. Budynek taki nie powinien mieć kondygnacji podziemnych i więcej niż 2 kondygnacje nadziemne.'}] },
    {L: 3,num: '2.',name: 'Usytuowanie',children: [
    {L: 4,num: '',name: 'Do wyznaczania minimalnej odległości budynku tymczasowego od innego budynku mają zastosowanie przepisy określające odległości między budynkami ZL, PM lub IN, o których mowa w § 271 i § 273 ust. 1.'}] },
    {L: 3,num: '3.',name: 'Oddzielenia przeciwpożarowe',children: [
    {L: 4,num: '',name: 'Tymczasowy budynek wykonany z materiałów palnych lub z palną izolacją należy przegradzać w odstępach nieprzekraczających 24 m ścianami oddzieleń przeciwpożarowych o klasie odporności ogniowej co najmniej R E I 60; nie dotyczy to przypadków określonych w § 287 i 288.'}] },
    {L: 3,num: '4.',name: 'Ściana oddzielenia przeciwpożarowego',children: [
    {L: 4,num: '',name: 'Ściana oddzielenia przeciwpożarowego powinna być wysunięta co najmniej o 0,6 m poza lico ścian zewnętrznych i ponad palne pokrycie dachu.'}] },
    {L: 3,num: '5.',name: 'Dostęp do poddasza',children: [
    {L: 4,num: '',name: 'Dostęp do poddasza tymczasowego budynku wykonanego z materiałów palnych powinien być umożliwiony za pomocą wewnętrznego wyłazu z klapą, o której mowa w § 251 pkt 1, o wymiarach co najmniej 0,6x0,6 m, lub przez drabinę i drzwi zewnętrzne o wymiarach co najmniej 0,6x1,6 m, umieszczone w szczytowej ścianie budynku.'}] },
    {L: 3,num: '6.',name: 'Instalacje elektryczne lub gazowe',children: [
    {L: 4,num: '',name: 'Stosowanie instalacji elektrycznych lub gazowych na strychu tymczasowego budynku wykonanego z materiałów palnych jest zabronione.'}] }] },
    {L: 2,num: '§ 287.',name: 'Duża liczba osób',children: [
    {L: 3,num: '1. ',name: 'Wymagania',children: [
    {L: 4,num: '',name: 'Budynek tymczasowy może być przeznaczony na cele widowiskowe lub inne zgromadzenia ludzi, jeżeli:<br>1) jest jednokondygnacyjny,<br>2) widownia jest dostępna z poziomu terenu,<br>3) dach lub stropodach mają przekrycie co najmniej trudno zapalne,<br>4) ma wyjścia, przejścia i dojścia ewakuacyjne o liczbie i wymiarach określonych w przepisach rozporządzenia, oznakowane - zgodnie z Polskimi Normami - znakami bezpieczeństwa,<br>5) ma oświetlenie awaryjne,<br>6) ma instalację elektryczną wykonaną zgodnie z Polskimi Normami.'}] }] },
    {L: 2,num: '§ 288.',name: 'Pneumatyczny PM',children: [
    {L: 3,num: '1. ',name: 'Wymagania dla <1000 MJ/m2',children: [
    {L: 4,num: '',name: 'Pomieszczenie z obudową pneumatyczną może być wykorzystywane jako tymczasowy budynek PM o gęstości obciążenia ogniowego strefy pożarowej nie wyższej od 1.000 MJ/ m2, pod warunkiem:<br>1) zachowania odległości co najmniej 20 m od innych obiektów budowlanych,<br>2) użycia powłoki z materiału co najmniej trudno zapalnego,<br>3) zastosowania wyłącznie ogrzewania powietrznego,<br>4) zapewnienia liczby i wymiarów wyjść, dojść i przejść ewakuacyjnych, określonych w przepisach rozporządzenia,<br>5) oznakowania wyjść ewakuacyjnych - zgodnie z Polskimi Normami - znakami bezpieczeństwa,<br>6) wyposażenia w oświetlenie awaryjne,<br>7) wyposażenia w instalację elektryczną wykonaną zgodnie z Polskimi Normami.'}] }] },
    {L: 2,num: '§ 289.',name: 'Pneumatyczny ZL',children: [
    {L: 3,num: '1. ',name: 'Cele widowiskowe, wystawowe, rekreacyjne',children: [
    {L: 4,num: '',name: 'Pomieszczenie, o którym mowa w § 288, przeznaczone do celów widowiskowych, wystawowych, rekreacyjnych lub sportowych, powinno być dodatkowo wyposażone w:<br>1) konstrukcje umieszczone wewnątrz lub na zewnątrz budynku do awaryjnego podwieszenia powłoki pneumatycznej,<br>2) awaryjne urządzenie do utrzymania ciśnienia w powłoce, zasilane z niezależnego źródła energii,<br>3) awaryjną wentylację mechaniczną do wymiany powietrza, zasilaną z niezależnego źródła energii,<br>4) wyjścia ewakuacyjne rozmieszczone możliwie równomiernie na obwodzie,<br>5) krzesła połączone ze sobą w sposób trwały i unieruchomione w rzędach co najmniej po 8 sztuk, ustawione zgodnie z wymaganiami określonymi w § 261.'}] }] },
    {L: 2,num: '§ 290.',name: 'Namiot',children: [
    {L: 3,num: '1. ',name: 'Cele widowiskowe',children: [
    {L: 4,num: '',name: 'Tymczasowy budynek typu namiotowego przeznaczony do celów widowiskowych powinien spełniać wymagania określone w § 288 i 289, z wyjątkiem wymagań dotyczących urządzeń do utrzymywania ciśnienia w powłoce.'}] }] }]  }
    ]}