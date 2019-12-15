var tags = [
    'x',
    'y',
    'z'
];

var visConditions = [
    '1',
    'x&&y',
    'x&&y&&z',
    'x&&z&&(!y)',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x',
    '1',
    'x&&y',
    'x&&y&&z',
    'x&&z&&(!y)',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x',
    'x'
    
];


var treeData = [
{L: 1,num: ' ',name: 'Warunki techniczne',children: [
{L: 2,num: 'Rozdział 1. ',name: 'Zasady ogólne',children: [
{L: 3,num: '§ 207. ',name: 'Zasady projektowania',children: [
{L: 4,num: '1. ',name: 'Cele projektowania',children: [
{L: 5,num: '',name: 'Budynek i urządzenia z nim związane powinny być projektowane i wykonane w sposób ograniczający możliwość powstania pożaru, a w razie jego wystąpienia zapewniający:<br>1) zachowanie nośności konstrukcji przez określony czas;<br>2) ograniczenie rozprzestrzeniania się ognia i dymu wewnątrz budynku;<br>3) ograniczenie rozprzestrzeniania się pożaru na sąsiednie obiekty budowlane lub tereny przyległe;<br>4) możliwość ewakuacji ludzi lub ich uratowania w inny sposób;<br>5) uwzględnienie bezpieczeństwa ekip ratowniczych.'}] },
{L: 4,num: '2. ',name: 'Budynki istniejące',children: [
{L: 5,num: '',name: 'Przepisy rozporządzenia dotyczące bezpieczeństwa pożarowego, wymiarów schodów, o których mowa w § 68 ust. 1 i 2, a także oświetlenia awaryjnego, o którym mowa w § 181, stosuje się, z uwzględnieniem § 2 ust. 2, również do użytkowanych budynków istniejących, które na podstawie przepisów odrębnych uznaje się za zagrażające życiu ludzi.'}] }] },
{L: 3,num: '§ 208. ',name: 'Stosowanie rozporządzenia ',children: [
{L: 4,num: '1. ',name: 'Czynniki projektowe',children: [
{L: 5,num: '',name: 'Przepisy niniejszego działu określają wymagania dotyczące bezpieczeństwa pożarowego budynków lub ich części, wynikające z ich przeznaczenia i sposobu użytkowania, wysokości lub liczby kondygnacji, a także położenia w stosunku do poziomu terenu oraz do innych obiektów budowlanych.'}] },
{L: 4,num: '2. ',name: 'Inne przepisy i normy',children: [
{L: 5,num: '',name: 'Stosowanie przepisów rozporządzenia wymaga uwzględnienia:<br>1) przepisów odrębnych dotyczących ochrony przeciwpożarowej, określających w szczególności:<br>a) zasady oceny zagrożenia wybuchem i wyznaczania stref zagrożenia wybuchem,<br>b) warunki wyposażania budynków lub ich części w instalacje sygnalizacyjno-alarmowe i stałe urządzenia gaśnicze,<br>c) zasady przeciwpożarowego zaopatrzenia wodnego,<br>d) wymagania dotyczące dróg pożarowych,<br>2) wymagań Polskich Norm i warunków określonych w załączniku nr 3 do rozporządzenia, dotyczących w szczególności zasad ustalania:<br>a) gęstości obciążenia ogniowego pomieszczeń i stref pożarowych,<br>b) klas odporności ogniowej i dymoszczelności elementów budynku oraz elementów stosowanych w instalacjach, w tym zamknięć otworów,<br>c) klas odporności dachów na ogień zewnętrzny,<br>d) właściwości funkcjonalnych urządzeń służących do wentylacji pożarowej,<br>e) stopnia rozprzestrzeniania ognia przez ściany zewnętrzne od strony zewnętrznej,<br>f) klas reakcji na ogień wyrobów (materiałów) budowlanych,<br>g) toksyczności produktów rozkładu spalania materiałów.'}] }] },
{L: 3,num: '§ 208a. ',name: 'Klasy reakcji na ogień',children: [
{L: 4,num: '1. ',name: 'Palność',children: [
{L: 5,num: '',name: 'Określeniom użytym w rozporządzeniu: niepalny, niezapalny, trudno zapalny, łatwo zapalny, niekapiący, samogasnący, intensywnie dymiący odpowiadają klasy reakcji na ogień zgodnie z załącznikiem nr 3 do rozporządzenia.'}] },
{L: 4,num: '2. ',name: 'Rozprzestrzenianie ognia',children: [
{L: 5,num: '',name: 'Elementy budynku określone w rozporządzeniu jako nierozprzestrzeniające ognia, słabo rozprzestrzeniające ogień lub silnie rozprzestrzeniające ogień powinny spełniać, z zastrzeżeniem ust. 3, wymagania zgodnie z załącznikiem nr 3 do rozporządzenia.'}] },
{L: 4,num: '3. ',name: 'Ściany zewnętrzne',children: [
{L: 5,num: '',name: 'W przypadku ścian zewnętrznych budynku, w tym z ociepleniem i okładziną zewnętrzną lub tylko z okładziną zewnętrzną, przez elementy budynku:<br>1) nierozprzestrzeniające ognia – rozumie się elementy budynku nierozprzestrzeniające ognia zarówno przy działaniu ognia wewnątrz, jak i od zewnątrz budynku,<br>2) słabo rozprzestrzeniające ogień – rozumie się elementy budynku, które z jednej strony są słabo rozprzestrzeniające ogień, natomiast przy działaniu ognia z drugiej strony są słabo rozprzestrzeniające ogień lub nierozprzestrzeniające ognia,<br>3) silnie rozprzestrzeniające ogień – rozumie się elementy budynku, które przy działaniu ognia z jednej strony sklasyfikowane są jako silnie rozprzestrzeniające ogień, niezależnie od klasyfikacji uzyskanej przy działaniu ognia z drugiej strony – dla których wymagania przy działaniu ognia wewnątrz budynku określa się zgodnie z załącznikiem nr 3 do rozporządzenia, a przy działaniu ognia od zewnątrz budynku określa się zgodnie z Polską Normą dotyczącą metody badania stopnia rozprzestrzeniania ognia przez ściany.'}] },
{L: 4,num: '4. ',name: 'Drzwi i zamknięcia',children: [
{L: 5,num: '',name: 'Występująca w rozporządzeniu klasa E I odporności ogniowej drzwi lub innych zamknięć otworów oznacza klasę EI1 lub EI2 zgodnie z Polską Normą dotyczącą klasyfikacji ogniowej ustalanej na podstawie badań odporności ogniowej, z wyłączeniem instalacji wentylacyjnej; dla drzwi przystankowych do dźwigu dopuszcza się określenie odporności ogniowej zgodnie z Polską Normą dotyczącą wykonywania próby odporności ogniowej drzwi przystankowych.'}] },
{L: 4,num: '5. ',name: 'Dymoszczelność drzwi',children: [
{L: 5,num: '',name: 'Klasy dymoszczelności drzwi Sa i S200 określa się zgodnie z Polską Normą dotyczącą klasyfikacji ogniowej ustalanej na podstawie badań odporności ogniowej, z wyłączeniem instalacji wentylacyjnej.'}] }] },
{L: 3,num: '§ 209. ',name: 'Rodzaje budynków i stref',children: [
{L: 4,num: '1. ',name: 'Przeznaczenie',children: [
{L: 5,num: '',name: 'Budynki oraz części budynków, stanowiące odrębne strefy pożarowe w rozumieniu § 226, z uwagi na przeznaczenie i sposób użytkowania, dzieli się na:<br>1) mieszkalne, zamieszkania zbiorowego i użyteczności publicznej charakteryzowane kategorią zagrożenia ludzi, określane dalej jako ZL,<br>2) produkcyjne i magazynowe, określane dalej jako PM,<br>3) inwentarskie (służące do hodowli inwentarza), określane dalej jako IN.'}] },
{L: 4,num: '2. ',name: 'Strefy ZL',children: [
{L: 5,num: '',name: 'Budynki oraz części budynków, stanowiące odrębne strefy pożarowe, określane jako ZL, zalicza się do jednej lub do więcej niż jedna spośród następujących kategorii zagrożenia ludzi:<br>1) ZL I – zawierające pomieszczenia przeznaczone do jednoczesnego przebywania ponad 50 osób niebędących ich stałymi użytkownikami, a nieprzeznaczone przede wszystkim do użytku ludzi o ograniczonej zdolności poruszania się,<br>2) ZL II – przeznaczone przede wszystkim do użytku ludzi o ograniczonej zdolności poruszania się, takie jak szpitale, żłobki, przedszkola, domy dla osób starszych,<br>3) ZL III – użyteczności publicznej, niezakwalifikowane do ZL I i ZL II,<br>4) ZL IV – mieszkalne,<br>5) ZL V – zamieszkania zbiorowego, niezakwalifikowane do ZL I i ZL II.'}] },
{L: 4,num: '3. ',name: 'Strefy PM',children: [
{L: 5,num: '',name: 'Wymagania dotyczące bezpieczeństwa pożarowego budynków oraz części budynków stanowiących odrębne strefy pożarowe, określanych jako PM, odnoszą się również do garaży, hydroforni, kotłowni, węzłów ciepłowniczych, rozdzielni elektrycznych, stacji transformatorowych, central telefonicznych oraz innych o podobnym przeznaczeniu.'}] },
{L: 4,num: '4. ',name: 'Strefy IN',children: [
{L: 5,num: '',name: 'Wymagania dotyczące bezpieczeństwa pożarowego budynków oraz części budynków stanowiących odrębne strefy pożarowe, określanych jako IN, odnoszą się również do takich budynków w zabudowie zagrodowej o kubaturze brutto nieprzekraczającej 1.500 m3, jak stodoły, budynki do przechowywania płodów rolnych i budynki gospodarcze.'}] },
{L: 4,num: '5. ',name: 'Strefy o kilku kategoriach',children: [
{L: 5,num: '',name: 'Strefy pożarowe zaliczone, z uwagi na przeznaczenie i sposób użytkowania, do więcej niż jednej kategorii zagrożenia ludzi, powinny spełniać wymagania określone dla każdej z tych kategorii.'}] }] },
{L: 3,num: '§ 210. ',name: 'Odrębność budynków',children: [
{L: 4,num: '1. ',name: 'Całkowite oddzielenie pionowe',children: [
{L: 5,num: '',name: 'Części budynku wydzielone ścianami oddzielenia przeciwpożarowego w pionie – od fundamentu do przekrycia dachu - mogą być traktowane jako odrębne budynki.'}] }] },
{L: 3,num: '§ 211. ',name: 'Budynki z ograniczeniem wolności',children: [
{L: 4,num: '1. ',name: 'Wyjątki - zakwaterowanie osadzonych',children: [
{L: 5,num: '',name: 'Przepisów § 242 ust. 1, § 243 ust. 1, § 245 pkt 2 oraz § 256 ust. 3, w zakresie kategorii ZL V, nie stosuje się do budynków i pomieszczeń przeznaczonych do zakwaterowania osób osadzonych.'}] },
{L: 4,num: '2. ',name: 'Wyjątki - zakłady karne i areszty',children: [
{L: 5,num: '',name: 'Przepisów § 236 ust. 4 oraz § 239 ust. 2 pkt 3 i 4 nie stosuje się do budynków zlokalizowanych na terenie zakładów karnych i aresztów śledczych.'}] },
{L: 4,num: '3. ',name: 'Wyjątki - zakłady poprawcze i schroniska',children: [
{L: 5,num: '',name: 'Przepisów § 239 ust. 2 pkt 3 i 4 nie stosuje się do zakładów poprawczych i schronisk dla nieletnich.'}] }] }] },
{L: 2,num: 'Rozdział 2. ',name: 'Odporność pożarowa',children: [
{L: 3,num: '§ 212. ',name: 'Klasy',children: [
{L: 4,num: '1.',name: 'Klasy ABCDE',children: [
{L: 5,num: '',name: 'Ustanawia się pięć klas odporności pożarowej budynków lub ich części, podanych w kolejności od najwyższej do najniższej i oznaczonych literami: A, B, C, D i E, a scharakteryzowanych w § 216.'}] },
{L: 4,num: '2.',name: 'Klasy w ZL',children: [
{L: 5,num: '',name: 'Wymaganą klasę odporności pożarowej dla budynku, zaliczonego do jednej kategorii ZL, określa poniższa tabela: '}] },
{L: 4,num: '3.',name: 'Obniżenie klasy w ZL',children: [
{L: 5,num: '',name: 'Dopuszcza się obniżenie wymaganej klasy odporności pożarowej w budynkach wymienionych w poniższej tabeli do poziomu w niej określonego:'}] },
{L: 4,num: '4.',name: 'Klasy w PM i IN',children: [
{L: 5,num: '',name: 'Wymaganą klasę odporności pożarowej dla budynku PM oraz IN, z zastrzeżeniem § 282, określa poniższa tabela:'}] },
{L: 4,num: '5.',name: 'ZL w podziemnej',children: [
{L: 5,num: '',name: 'Jeżeli część podziemna budynku jest zaliczona do ZL, klasę odporności pożarowej budynku ustala się, przyjmując jako liczbę jego kondygnacji lub jego wysokość odpowiednio: sumę kondygnacji lub wysokości części podziemnej i nadziemnej, przy czym do tego ustalenia nie bierze się pod uwagę tych części podziemnych budynku, które są oddzielone elementami oddzielenia przeciwpożarowego o klasie odporności ogniowej co najmniej R E I 120, zgodnie z oznaczeniem pod tabelą w § 216 ust. 1, i mają bezpośrednie wyjścia na zewnątrz.'}] },
{L: 4,num: '6.',name: 'Kondygnacje o różnych klasach',children: [
{L: 5,num: '',name: 'W budynku wielokondygnacyjnym, którego kondygnacje są zaliczone do różnych kategorii ZL lub PM, klasy odporności pożarowej określa się dla poszczególnych kondygnacji odrębnie, zgodnie z zasadami określonymi w ust. 2-4.'}] },
{L: 4,num: '7.',name: 'Klasy dla niższych kondygnacji',children: [
{L: 5,num: '',name: 'Klasa odporności pożarowej części budynku nie powinna być niższa od klasy odporności pożarowej części budynku położonej nad nią, przy czym dla części podziemnej nie powinna być ona niższa niż „C”.'}] },
{L: 4,num: '8.',name: 'Powiązanie funkcjonalne ZL i PM',children: [
{L: 5,num: '',name: 'Jeżeli w budynku znajdują się pomieszczenia produkcyjne, magazynowe lub techniczne, niepowiązane funkcjonalnie z częścią budynku zaliczoną do ZL, pomieszczenia te powinny stanowić odrębną strefę pożarową, dla której oddzielnie ustala się klasę odporności pożarowej, zgodnie z zasadami określonymi w ust. 4, z zastrzeżeniem § 220.'}] },
{L: 4,num: '9.',name: 'Pomieszczenia ppoż.',children: [
{L: 5,num: '',name: 'Pomieszczenia, w których są umieszczone przeciwpożarowe zbiorniki wody lub innych środków gaśniczych, pompy wodne instalacji przeciwpożarowych, maszynownie wentylacji do celów przeciwpożarowych oraz rozdzielnie elektryczne, zasilające, niezbędne podczas pożaru, instalacje i urządzenia, powinny stanowić odrębną strefę pożarową.'}] }] },
{L: 3,num: '§ 213.',name: 'Częściowe wyłączenie - niewielkie budynki',children: [
{L: 4,num: '1. ',name: 'Małe prywatne 1-3K',children: [
{L: 5,num: '',name: 'Wymagania dotyczące klasy odporności pożarowej budynków określone w § 212 oraz dotyczące klas odporności ogniowej elementów budynków i rozprzestrzeniania ognia przez te elementy określone w § 216, z zastrzeżeniem § 271 ust. 8a, nie dotyczą budynków:<br>1) do trzech kondygnacji nadziemnych włącznie:<br>a) mieszkalnych: jednorodzinnych, zagrodowych i rekreacji indywidualnej, z zastrzeżeniem § 217 ust. 2,<br>b) mieszkalnych i administracyjnych w gospodarstwach leśnych;<br>2) wolnostojących do dwóch kondygnacji nadziemnych włącznie:<br>a) o kubaturze brutto do 1500 m3 przeznaczonych do celów turystyki i wypoczynku,<br>b) gospodarczych w zabudowie jednorodzinnej i zagrodowej oraz w gospodarstwach leśnych,<br>c) o kubaturze brutto do 1000 m3 przeznaczonych do wykonywania zawodu lub działalności usługowej i handlowej, także z częścią mieszkalną;<br>3) wolnostojących garaży o liczbie stanowisk postojowych nie większej niż 2;<br>4) inwentarskich o kubaturze brutto do 1500 m3.'}] }] },
{L: 3,num: '§ 214.',name: 'Obniżenie klasy SUGW',children: [
{L: 4,num: '1. ',name: 'SUG wodne',children: [
{L: 5,num: '',name: 'W budynkach wyposażonych w stałe samoczynne urządzenia gaśnicze wodne, z wyjątkiem budynków ZL II oraz wielokondygnacyjnych budynków wysokich (W) i wysokościowych (WW), dopuszcza się:<br>1) obniżenie klasy odporności pożarowej budynku o jedną w stosunku do wynikającej z § 212,<br>2) przyjęcie klasy „E” odporności pożarowej dla budynku jednokondygnacyjnego.'}] }] },
{L: 3,num: '§ 215.',name: 'Obniżenie do E i oddzielenia przy obniżeniach klasy',children: [
{L: 4,num: '1.',name: 'Oddymianie i NRO w PM 1k',children: [
{L: 5,num: '',name: 'Dopuszcza się przyjęcie klasy „E” odporności pożarowej dla jednokondygnacyjnego budynku PM o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2, pod warunkiem zastosowania:<br>1) wszystkich elementów budynku nierozprzestrzeniających ognia,<br>2) samoczynnych urządzeń oddymiających w strefach pożarowych o powierzchni przekraczającej 1.000 m2.'}] },
{L: 4,num: '2.',name: 'Oddzielenia',children: [
{L: 5,num: '',name: 'Obniżenie klasy odporności pożarowej budynku, w przypadkach wymienionych w ust. 1 oraz w § 214, nie zwalnia z zachowania wymaganej pierwotnie klasy odporności ogniowej elementów oddzielenia przeciwpożarowego, określonej w § 232.'}] }] },
{L: 3,num: '§ 216.',name: 'Klasy elementów',children: [
{L: 4,num: '1.',name: 'Tabela elementów',children: [
{L: 5,num: '',name: 'Elementy budynku, odpowiednio do jego klasy odporności pożarowej, powinny spełniać, z zastrzeżeniem § 213 oraz § 237 ust. 9, co najmniej wymagania określone w poniższej tabeli:'}] },
{L: 4,num: '2.',name: 'Rozprzestrzenianie ognia (NRO i złagodzenia do SRO)',children: [
{L: 5,num: '',name: 'Elementy budynku, o których mowa w ust. 1, powinny być nierozprzestrzeniające ognia, przy czym dopuszcza się zastosowanie słabo rozprzestrzeniających ogień:<br>1) elementów budynku o jednej kondygnacji nadziemnej ZL IV oraz PM, o maksymalnej gęstości obciążenia ogniowego strefy pożarowej do 500 MJ/m2,<br>2) ścian wewnętrznych i zewnętrznych oraz elementów konstrukcji dachu i jego przekrycia w budynku PM niskim o maksymalnej gęstości obciążenia ogniowego strefy pożarowej do 1.000 MJ/m2,<br>3) ścian zewnętrznych w budynku niskim ZL IV.<br>'}] },
{L: 4,num: '3.',name: 'Ściany zewnętrzne PM',children: [
{L: 5,num: '',name: 'Dopuszcza się stosowanie w budynku PM ścian zewnętrznych klasy D z rdzeniem klasy E z uwagi na reakcję na ogień, jeżeli okładzina wewnętrzna jest niepalna, a ściana jest nierozprzestrzeniająca ognia przy działaniu ognia od strony elewacji.'}] },
{L: 4,num: '4.',name: 'Ściany wewnętrzne PM',children: [
{L: 5,num: '',name: 'Dopuszcza się stosowanie w budynku PM ścian wewnętrznych klasy D z uwagi na reakcję na ogień.'}] },
{L: 4,num: '5.',name: 'Palna izolacja ścian ZL II',children: [
{L: 5,num: '',name: 'W ścianach zewnętrznych budynku ZL II dopuszcza się, z zastrzeżeniem ust. 8, zastosowanie izolacji cieplnej palnej, jeżeli osłaniająca ją od wewnątrz okładzina jest niepalna i ma klasę odporności ogniowej co najmniej:<br>1) w budynku klasy odporności pożarowej „B" - EI 60,<br>2) w budynku klasy odporności pożarowej „C" i „D" - EI 30.'}] },
{L: 4,num: '6.',name: 'Palne klapy dymowe - dopuszczalne',children: [
{L: 5,num: '',name: 'Dopuszcza się stosowanie klap dymowych z materiałów łatwo zapalnych w dachach i stropodachach.'}] },
{L: 4,num: '7.',name: 'Antresole - klasa',children: [
{L: 5,num: '',name: 'Strop tworzący w pomieszczeniu dodatkowy poziom – antresolę, przeznaczoną do użytku dla więcej niż 10 osób, a także jej konstrukcja nośna, powinny odpowiadać wymaganiom wynikającym z klasy odporności pożarowej budynku, lecz nie mniejszym niż dla klasy „D", z zastrzeżeniem § 214.'}] },
{L: 4,num: '8.',name: 'Elewacja powyżej 25m',children: [
{L: 5,num: '',name: 'W budynku, na wysokości powyżej 25 m od poziomu terenu, okładzina elewacyjna i jej zamocowanie mechaniczne, a także izolacja cieplna ściany zewnętrznej, powinny być wykonane z materiałów niepalnych.'}] },
{L: 4,num: '9.',name: 'Ocieplenie ściany zewnętrznej ZL IV',children: [
{L: 5,num: '',name: 'Dopuszcza się ocieplenie ściany zewnętrznej budynku mieszkalnego, wzniesionego przed dniem 1 kwietnia 1995 r., o wysokości do 11 kondygnacji włącznie, z użyciem samogasnącego polistyrenu spienionego, w sposób zapewniający nierozprzestrzenianie ognia.'}] }] },
{L: 3,num: '§ 217.',name: 'Przegrody w mieszkalnych',children: [
{L: 4,num: '1.',name: 'Ściany dróg komunikacji i między lokalami',children: [
{L: 5,num: '',name: 'W budynkach ZL IV i ZL V klasa odporności ogniowej przegród wewnętrznych oddzielających mieszkania lub samodzielne pomieszczenia mieszkalne od dróg komunikacji ogólnej oraz od innych mieszkań i samodzielnych pomieszczeń mieszkalnych, z zastrzeżeniem § 216 ust. 1, powinna wynosić co najmniej:<br>1) dla ścian w budynku:<br>a) niskim i średniowysokim – EI 30,<br>b) wysokim i wysokościowym – EI 60,<br>2) dla stropów w budynku zawierającym 2 mieszkania – REI 30.'}] },
{L: 4,num: '2.',name: 'Między segmentami',children: [
{L: 5,num: '',name: 'Klasa odporności ogniowej ściany oddzielającej segmenty jednorodzinnych budynków ZL IV: bliźniaczych, szeregowych lub atrialnych, powinna wynosić co najmniej – REI 60.'}] },
{L: 4,num: '3.',name: 'Wewnątrz mieszkań ',children: [
{L: 5,num: '',name: 'W mieszkaniach oraz w samodzielnych pomieszczeniach mieszkalnych dopuszcza się wykonywanie ścian wewnętrznych nierozprzestrzeniających ognia, bez wymaganej w § 216 ust. 1 w kolumnie 6 tabeli klasy odporności ogniowej.'}] }] },
{L: 3,num: '§ 218.',name: 'Bliskość budynku niższego',children: [
{L: 4,num: '1.',name: 'Klasa dachu niższego budynku sąsiedniego - 30 min',children: [
{L: 5,num: '',name: 'Przekrycie dachu budynku niższego, usytuowanego bliżej niż 8 m lub przyległego do ściany z otworami budynku wyższego, z wyjątkiem przypadków wymienionych w § 273 ust. 1, w pasie o szerokości 8 m od tej ściany powinno być nierozprzestrzeniające ognia oraz w pasie tym:<br>1) konstrukcja dachu powinna mieć klasę odporności ogniowej co najmniej R 30,<br>2) przekrycie dachu powinno mieć klasę odporności ogniowej co najmniej RE 30.'}] },
{L: 4,num: '2.',name: 'Wyjątek - oddalenie okien wyższego  i małe obciążenie w niższym',children: [
{L: 5,num: '',name: 'Warunki określone w ust. 1 nie mają zastosowania, jeżeli najbliżej położony otwór w ścianie budynku wyższego znajduje się w odległości nie mniejszej niż 10 m od dachu budynku niższego, a gęstość obciążenia ogniowego w budynku niższym nie przekracza 2.000 MJ/m2.'}] },
{L: 4,num: '3.',name: 'Osobna strefa w niższym nie zmienia sytuacji',children: [
{L: 5,num: '',name: 'Postanowienia ust. 1 i 2 odnoszą się również do części niższej budynku, jeżeli część ta stanowi odrębną strefę pożarową.'}] },
{L: 4,num: '4.',name: 'Dopuszczalne wyloty w dachu niższego',children: [
{L: 5,num: '',name: 'Dopuszcza się sytuowanie wylotów kanałów wentylacyjnych i spalinowych od urządzeń gazowych oraz rur wentylujących piony kanalizacyjne w części połaci dachu lub stropodachu budynku niższego, o której mowa w ust. 1.'}] }] },
{L: 3,num: '§ 219.',name: 'Duże dachy i oddzielenie poddaszy od palnego dachu',children: [
{L: 4,num: '1.',name: 'Przekrycie > 1000 m2',children: [
{L: 5,num: '',name: 'Przekrycie budynku o powierzchni większej niż 1.000 m2 powinno być nierozprzestrzeniające ognia, a palna izolacja cieplna przekrycia powinna być oddzielona od wnętrza budynku przegrodą o klasie odporności ogniowej nie niższej niż RE 15.'}] },
{L: 4,num: '2.',name: 'Poddasza w ZL III, IV i V',children: [
{L: 5,num: '',name: 'W budynkach ZL III, ZL IV i ZL V poddasze użytkowe przeznaczone na cele mieszkalne lub biurowe powinno być oddzielone od palnej konstrukcji i palnego przekrycia dachu przegrodami o klasie odporności ogniowej:<br>1) w budynku niskim – E I 30,<br>2) w budynku średniowysokim i wysokim – EI 60.'}] }] },
{L: 3,num: '§ 220.',name: 'Kotłownie i magazyny opału',children: [
{L: 4,num: '1.',name: 'Ściany wewnętrzne i stropy',children: [
{L: 5,num: '',name: 'Ściany wewnętrzne i stropy wydzielające kotłownie, składy paliwa stałego, żużlownie i magazyny oleju opałowego, a także zamknięcia otworów w tych elementach, powinny mieć klasę odporności ogniowej nie mniejszą niż określona w tabeli:'}] },
{L: 4,num: '2.',name: 'Ściany zewnętrzne',children: [
{L: 5,num: '',name: 'Dla pomieszczeń, o których mowa w ust. 1, klasę odporności ogniowej ścian zewnętrznych należy przyjmować zgodnie z § 216.'}] },
{L: 4,num: '3.',name: 'Kotłownie gazowe ponad dachem',children: [
{L: 5,num: '',name: 'Nie stawia się wymagań w zakresie klasy odporności ogniowej dla przegród zewnętrznych kotłowni z kotłami na paliwo gazowe, zlokalizowanej ponad dachem budynku, przy zachowaniu warunku, iż przegrody te powinny być wykonane z materiałów niepalnych.'}] }] },
{L: 3,num: '§ 221.',name: 'Pomieszczenia zagrożone wybuchem ',children: [
{L: 4,num: '1.',name: 'Lekki dach',children: [
{L: 5,num: '',name: 'Nad pomieszczeniem zagrożonym wybuchem należy stosować lekki dach, wykonany z materiałów co najmniej trudno zapalnych, o masie nieprzekraczającej 75 kg/m2 rzutu, licząc bez elementów konstrukcji nośnej dachu, takich jak podciągi, wiązary i belki.'}] },
{L: 4,num: '2.',name: 'Odciążenia zamiast dachu',children: [
{L: 5,num: '',name: 'Przepis ust. 1 nie dotyczy pomieszczenia, w którym łączna powierzchnia urządzeń odciążających (przeciwwybuchowych), jak przepony, klapy oraz otwory oszklone szkłem zwykłym, jest większa niż 0,065 m2/m3 kubatury pomieszczenia.'}] },
{L: 4,num: '3.',name: 'Ściany - parcie 15kPa ',children: [
{L: 5,num: '',name: 'Ściany oddzielające pomieszczenie zagrożone wybuchem od innych pomieszczeń powinny być odporne na parcie o wartości 15 kN/m2 (15 kPa).'}] }] },
{L: 3,num: '§ 222.',name: 'Usytuowanie pomieszczeń ZW',children: [
{L: 4,num: '1.',name: 'Najwyższa kondygnacja',children: [
{L: 5,num: '',name: 'Pomieszczenie zagrożone wybuchem należy sytuować na najwyższej kondygnacji budynku. Wymaganie to nie dotyczy budynków na terenach zamkniętych.'}] },
{L: 4,num: '2.',name: 'Inne miejsce po uzgodnieniu',children: [
{L: 5,num: '',name: 'Dopuszcza się inne usytuowanie pomieszczeń, o których mowa w ust. 1, pod warunkiem zastosowania odpowiednich instalacji i urządzeń przeciwwybuchowych, uzgodnionych z właściwym komendantem wojewódzkim Państwowej Straży Pożarnej.'}] }] },
{L: 3,num: '§ 223.',name: 'Pasy międzykondygnacyjne',children: [
{L: 4,num: '1.',name: 'Ściany zewnętrzne',children: [
{L: 5,num: '',name: 'W ścianach zewnętrznych budynku wielokondygnacyjnego, z zastrzeżeniem § 224, powinny być pasy międzykondygnacyjne o wysokości co najmniej 0,8 m.'}] },
{L: 4,num: '2.',name: 'Równorzędne wysunięcia',children: [
{L: 5,num: '',name: 'Za równorzędne rozwiązania uznaje się oddzielenia poziome w formie daszków, gzymsów i balkonów o wysięgu co najmniej 0,5 m lub też inne oddzielenia poziome i pionowe o sumie wysięgu i wymiaru pionowego co najmniej 0,8 m.'}] },
{L: 4,num: '3.',name: 'Klasa równorzędnych wysunięć',children: [
{L: 5,num: '',name: 'Elementy poziome wymienione w ust. 2 powinny spełniać wymagania szczelności ogniowej i izolacyjności ogniowej, również w obrębie połączenia ze ścianami zewnętrznymi, przez okres odpowiadający czasowi klasyfikacyjnemu wymaganemu w stosunku do ścian zewnętrznych budynku i być nierozprzestrzeniające ognia.'}] },
{L: 4,num: '4.',name: 'Wyjątek - komunikacja ogólna',children: [
{L: 5,num: '',name: 'Warunki określone w ust. 1 i 2 nie dotyczą ścian holu i dróg komunikacji ogólnej.'}] }] },
{L: 3,num: '§ 224.',name: 'Pasy  międzykondygnacyjne PM ',children: [
{L: 4,num: '1.',name: 'Wysokość pasa',children: [
{L: 5,num: '',name: 'W ścianach zewnętrznych budynku wielokondygnacyjnego nad strefą pożarową PM, o gęstości obciążenia ogniowego powyżej 1.000 MJ/m2, wysokość pasa międzykondygnacyjnego powinna wynosić co najmniej 1,2 m.'}] },
{L: 4,num: '2.',name: 'Równorzędne wysunięcia',children: [
{L: 5,num: '',name: 'Za równorzędne rozwiązanie uznaje się oddzielenie poziome w formie daszków, gzymsów i balkonów o wysięgu co najmniej 0,8 m lub też inne oddzielenie poziome i pionowe o sumie wymiaru pionowego i wysięgu co najmniej 1,2 m, z zachowaniem warunków określonych w § 223 ust. 3.'}] }] },
{L: 3,num: '§ 225.',name: 'Okładziny elewacyjne',children: [
{L: 4,num: '1.',name: 'Mocowanie - odporność jak ściana zewnętrzna',children: [
{L: 5,num: '',name: 'Elementy okładzin elewacyjnych powinny być mocowane do konstrukcji budynku w sposób uniemożliwiający ich odpadanie w przypadku pożaru w czasie krótszym niż wynikający z wymaganej klasy odporności ogniowej dla ściany zewnętrznej, określonej w § 216 ust. 1, odpowiednio do klasy odporności pożarowej budynku, w którym są one zamocowane.'}] }] }] },
{L: 2,num: 'Rozdział 3. ',name: 'Strefy i oddzielenia',children: [
{L: 3,num: '§ 226.',name: 'Strefa pozarowa ',children: [
{L: 4,num: '1.',name: 'Pojęcie strefy',children: [
{L: 5,num: '',name: 'Strefę pożarową stanowi budynek albo jego część oddzielona od innych budynków lub innych części budynku elementami oddzielenia przeciwpożarowego, o których mowa w § 232 ust. 4, bądź też pasami wolnego terenu o szerokości nie mniejszej niż dopuszczalne odległości od innych budynków, określone w § 271 ust. 1-7.'}] },
{L: 4,num: '2.',name: 'Kiedy kondygnacja strefą',children: [
{L: 5,num: '',name: 'Częścią budynku, o której mowa w ust. 1, jest także jego kondygnacja, jeżeli klatki schodowe i szyby dźwigowe w tym budynku spełniają co najmniej wymagania określone w § 256 ust. 2 dla klatek schodowych.'}] },
{L: 4,num: '3.',name: 'Powierzchnia (wnętrze i antresola)',children: [
{L: 5,num: '',name: 'Powierzchnia strefy pożarowej jest obliczana jako powierzchnia wewnętrzna budynku lub jego części, przy czym wlicza się do niej także powierzchnię antresoli.'}] }] },
{L: 3,num: '§ 227.',name: 'Powierzchnie stref ZL',children: [
{L: 4,num: '1.',name: 'Powierzchnie ZL',children: [
{L: 5,num: '',name: 'Dopuszczalne powierzchnie stref pożarowych ZL określa poniższa tabela:'}] },
{L: 4,num: '2.',name: 'Podziemne',children: [
{L: 5,num: '',name: 'Dopuszczalna powierzchnia strefy pożarowej ZL, obejmującej podziemną część budynku, nie powinna przekraczać 50% dopuszczalnej powierzchni strefy pożarowej tej samej kategorii zagrożenia ludzi, określonej w ust. 1 dla pierwszej nadziemnej kondygnacji tego budynku.'}] },
{L: 4,num: '3.',name: 'Podziemne wyjątki',children: [
{L: 5,num: '',name: 'Zmniejszenie dopuszczalnej powierzchni strefy pożarowej, o której mowa w ust. 2, nie dotyczy przypadku, gdy wyjścia ewakuacyjne z kondygnacji podziemnej prowadzą bezpośrednio na zewnątrz budynku.'}] },
{L: 4,num: '4.',name: 'Powiększenia',children: [
{L: 5,num: '',name: 'Dopuszcza się powiększenie powierzchni stref pożarowych, o których mowa w ust. 1, z wyjątkiem stref pożarowych w wielokondygnacyjnych budynkach wysokich (W) i wysokościowych (WW), pod warunkiem zastosowania:<br>1) stałych samoczynnych urządzeń gaśniczych wodnych – o 100%;<br>2) samoczynnych urządzeń oddymiających uruchamianych za pomocą systemu wykrywania dymu - o 100%.<br>Przy jednoczesnym stosowaniu urządzeń wymienionych w pkt 1 i 2 dopuszcza się powiększenie powierzchni stref pożarowych o 200%.'}] },
{L: 4,num: '5.',name: 'Podział poziomy ZL II',children: [
{L: 5,num: '',name: 'Ze strefy pożarowej ZL II o powierzchni przekraczającej 750 m2 w budynku wielokondygnacyjnym, powinna być zapewniona możliwość ewakuacji ludzi do innej strefy pożarowej na tej samej kondygnacji.'}] }] },
{L: 3,num: '§ 228.',name: 'Powierzchnie stref PM ',children: [
{L: 4,num: '1.',name: 'Powierzchnie',children: [
{L: 5,num: '',name: 'Dopuszczalne powierzchnie stref pożarowych PM, z wyjątkiem garaży, określa poniższa tabela:'}] },
{L: 4,num: '2.',name: 'Podziemne',children: [
{L: 5,num: '',name: 'Strefy pożarowe, o których mowa w ust. 1, w podziemnej części budynków nie powinny przekraczać 50% powierzchni określonych w tabeli.'}] }] },
{L: 3,num: '§ 229.',name: 'Powiększenie stref PM (wielokondygnacyjne)',children: [
{L: 4,num: '1.',name: 'SUG lub oddymianie',children: [
{L: 5,num: '',name: 'Dopuszcza się powiększenie powierzchni stref pożarowych, o których mowa w § 228, pod warunkiem ich ochrony:<br>1) stałymi samoczynnymi urządzeniami gaśniczymi wodnymi - o 100%,<br>2) samoczynnymi urządzeniami oddymiającymi - o 50%.'}] },
{L: 4,num: '2.',name: 'Łączenie SUG i Oddymiania',children: [
{L: 5,num: '',name: 'Przy jednoczesnym stosowaniu urządzeń wymienionych w ust. 1 dopuszcza się powiększenie stref pożarowych o 150%.'}] }] },
{L: 3,num: '§ 230.',name: 'Powiększenia stref PM (1k lub ostatnia kondygnacja, niegaraże)',children: [
{L: 4,num: '1.',name: 'Oddymianie + NRO = 100% ',children: [
{L: 5,num: '',name: 'W budynku jednokondygnacyjnym lub na ostatniej kondygnacji budynku wielokondygnacyjnego wielkości stref pożarowych PM, z wyjątkiem garaży, można powiększyć o 100%, jeżeli budynek nie zawiera pomieszczenia zagrożonego wybuchem i jest wykonany z elementów nierozprzestrzeniających ognia oraz zastosowano samoczynne urządzenia oddymiające.'}] },
{L: 4,num: '2.',name: 'Oddymianie + SUGW = bez ograniczeń',children: [
{L: 5,num: '',name: 'W budynku jednokondygnacyjnym wielkości stref pożarowych PM, z wyjątkiem garażu, nie ogranicza się, pod warunkiem zastosowania stałych samoczynnych urządzeń gaśniczych wodnych i samoczynnych urządzeń oddymiających.'}] }] },
{L: 3,num: '§ 231.',name: 'Powierzchnie stref IN ',children: [
{L: 4,num: '1.',name: 'Dopuszczalne  wielkości',children: [
{L: 5,num: '',name: 'Dopuszczalne powierzchnie stref pożarowych IN określa poniższa tabela:'}] },
{L: 4,num: '2.',name: 'Wyjątki dla SRO i hodowli bezściółkowej',children: [
{L: 5,num: '',name: 'W przypadku stosowania w budynku ścian silnie rozprzestrzeniających ogień, strefę pożarową należy zmniejszyć do 25% wartości podanej w ust. 1, a w przypadku jednokondygnacyjnego budynku przeznaczonego do hodowli bezściółkowej, strefę ogranicza się do 5.000 m2.'}] }] },
{L: 3,num: '§ 232.',name: 'Oddzielnia ppoż.',children: [
{L: 4,num: '1.',name: 'Otwory - przedsionki lub drzwi ppoż.',children: [
{L: 5,num: '',name: 'Ściany i stropy stanowiące elementy oddzielenia przeciwpożarowego powinny być wykonane z materiałów niepalnych, a występujące w nich otwory - obudowane przedsionkami przeciwpożarowymi lub zamykane za pomocą drzwi przeciwpożarowych bądź innego zamknięcia przeciwpożarowego.'}] },
{L: 4,num: '2.',name: 'Powierzchnia otworów',children: [
{L: 5,num: '',name: 'W ścianie oddzielenia przeciwpożarowego łączna powierzchnia otworów, o których mowa w ust. 1, nie powinna przekraczać 15% powierzchni ściany, a w stropie oddzielenia przeciwpożarowego - 0,5% powierzchni stropu. Ograniczenia nie stosuje się do otworów w ścianach oddzielenia przeciwpożarowego w garażu, które znajdują się na drogach manewrowych.'}] },
{L: 4,num: '3.',name: 'Przedsionki ppoż. - wymagania',children: [
{L: 5,num: '',name: 'Przedsionek przeciwpożarowy powinien mieć wymiary rzutu poziomego nie mniejsze niż 1,4 × 1,4 m, ściany i strop, a także osłony lub obudowy przewodów i kabli elektrycznych z wyjątkiem wykorzystywanych w przedsionku oraz z wyjątkiem zespołów kablowych, o których mowa w § 187 ust. 3 – o klasie odporności ogniowej co najmniej E I 60 wykonane z materiałów niepalnych oraz powinien być zamykany drzwiami i wentylowany co najmniej grawitacyjnie, z zastrzeżeniem § 246 ust. 2 i 3.'}] },
{L: 4,num: '4.',name: 'Klasa oddzieleń ppoż. ',children: [
{L: 5,num: '',name: 'Wymaganą klasę odporności ogniowej elementów oddzielenia przeciwpożarowego oraz zamknięć znajdujących się w nich otworów określa poniższa tabela:'}] },
{L: 4,num: '5.',name: 'Klasa oddzieleń ppoż. w małych budynkach',children: [
{L: 5,num: '',name: 'Klasa odporności ogniowej elementów oddzielenia przeciwpożarowego oraz zamknięć znajdujących się w nich otworów w budynkach, o których mowa w § 213, powinna być nie mniejsza od określonej w ust. 4 dla budynków o klasie odporności pożarowej „D” i „E”.'}] },
{L: 4,num: '6.',name: 'Szkło w otworach oddzieleń',children: [
{L: 5,num: '',name: 'W ścianie oddzielenia przeciwpożarowego dopuszcza się wypełnienie otworów materiałem przepuszczającym światło, takim jak luksfery, cegła szklana lub inne przeszklenie, jeżeli powierzchnia wypełnionych otworów nie przekracza 10% powierzchni ściany, przy czym klasa odporności ogniowej wypełnień nie powinna być niższa niż:'}] },
{L: 4,num: '7.',name: 'Otwory w ścianie PM',children: [
{L: 5,num: '',name: 'Dopuszcza się stosowanie w strefach pożarowych PM otworu w ścianie oddzielenia przeciwpożarowego, służącego przeprowadzeniu urządzeń technologicznych, chronionego w sposób równoważny wymaganym dla tej ściany drzwiom przeciwpożarowym pod względem możliwości przeniesienia się przez ten otwór ognia lub dymu, w przypadku pożaru.'}] }] },
{L: 3,num: '§ 233.',name: 'Teatry ',children: [
{L: 4,num: '1.',name: 'Kurtyna przeciwpożarowa',children: [
{L: 5,num: '',name: 'Stosowanie kurtyny przeciwpożarowej jest wymagane do oddzielenia:<br>1) widowni, o liczbie miejsc przekraczającej 600, od sceny teatralnej o powierzchni wewnętrznej przekraczającej 150 m2 lub o kubaturze brutto przekraczającej 1.200 m3,<br>2) kieszeni scenicznej, o powierzchni przekraczającej 100 m2, od sceny teatralnej o powierzchni wewnętrznej przekraczającej 300 m2 lub o kubaturze brutto przekraczającej 6.000 m3.'}] },
{L: 4,num: '2.',name: 'Oddymianie scen',children: [
{L: 5,num: '',name: 'Sceny, o których mowa w ust. 1, powinny być wyposażone w samoczynne urządzenia oddymiające uruchamiane za pomocą systemu wykrywania dymu.'}] }] },
{L: 3,num: '§ 234.',name: 'Przepusty instalacyjne',children: [
{L: 4,num: '1.',name: 'Klasa jak oddzielenie ppoż.',children: [
{L: 5,num: '',name: 'Przepusty instalacyjne w elementach oddzielenia przeciwpożarowego powinny mieć klasę odporności ogniowej (EI) wymaganą dla tych elementów.'}] },
{L: 4,num: '2.',name: 'Złagodzenie - higienicznosanitarne ',children: [
{L: 5,num: '',name: 'Dopuszcza się nieinstalowanie przepustów, o których mowa w ust. 1, dla pojedynczych rur instalacji wodnych, kanalizacyjnych i ogrzewczych, wprowadzanych przez ściany i stropy do pomieszczeń higienicznosanitarnych.'}] },
{L: 4,num: '3.',name: 'Klasa jak przegroda w nie-oddzieleniach EI60',children: [
{L: 5,num: '',name: 'Przepusty instalacyjne o średnicy większej niż 0,04 m w ścianach i stropach, pomieszczenia zamkniętego, dla których wymagana klasa odporności ogniowej jest nie niższa niż EI 60 lub REI 60, a niebędących elementami oddzielenia przeciwpożarowego, powinny mieć klasę odporności ogniowej (EI) ścian i stropów tego pomieszczenia.'}] },
{L: 4,num: '4.',name: 'Przejścia przez ściany zewnętrzne poniżej terenu',children: [
{L: 5,num: '',name: 'Przejścia instalacji przez zewnętrzne ściany budynku, znajdujące się poniżej poziomu terenu, powinny być zabezpieczone przed możliwością przenikania gazu do wnętrza budynku.'}] }] },
{L: 3,num: '§ 235.',name: 'Ściany oddzielenia ppoż. ',children: [
{L: 4,num: '1.',name: 'Podparcie o odporności co najmniej równej',children: [
{L: 5,num: '',name: 'Ścianę oddzielenia przeciwpożarowego należy wznosić na własnym fundamencie lub na stropie, opartym na konstrukcji nośnej o klasie odporności ogniowej nie niższej od odporności ogniowej tej ściany.'}] },
{L: 4,num: '2.',name: 'Wysunięcie poza lico i pas niepalny',children: [
{L: 5,num: '',name: 'Ścianę oddzielenia przeciwpożarowego należy wysunąć na co najmniej 0,3 m poza lico ściany zewnętrznej budynku lub na całej wysokości ściany zewnętrznej zastosować pionowy pas z materiału niepalnego o szerokości co najmniej 2 m i klasie odporności ogniowej EI 60.'}] },
{L: 4,num: '3.',name: 'Dach z przekryciem rozprzestrzeniającym ogień',children: [
{L: 5,num: '',name: 'W budynku z przekryciem dachu rozprzestrzeniającym ogień ściany oddzielenia przeciwpożarowego należy wyprowadzić ponad pokrycie dachu na wysokość co najmniej 0,3 m lub zastosować wzdłuż ściany pas z materiału niepalnego o szerokości co najmniej 1 m i klasie odporności ogniowej EI 60, bezpośrednio pod pokryciem; przekrycie na tej szerokości powinno być nierozprzestrzeniające ognia.'}] },
{L: 4,num: '4.',name: 'Dach ze świetlikami lub klapami',children: [
{L: 5,num: '',name: 'W budynku, z wyjątkiem zabudowy jednorodzinnej, w dachu którego znajdują się świetliki lub klapy dymowe, ściany oddzielenia przeciwpożarowego usytuowane od nich w odległości poziomej mniejszej niż 5 m, należy wyprowadzić ponad górną ich krawędź na wysokość co najmniej 0,3 m, przy czym wymaganie to nie dotyczy świetlików nieotwieranych o klasie odporności ogniowej co najmniej E 30.'}] }] }] },
{L: 2,num: 'Rozdział 4. ',name: 'Drogi ewakuacyjne',children: [
{L: 3,num: '§ 236.',name: 'Wymagania ogólne',children: [
{L: 4,num: '1.',name: 'Wyjście z pomieszczeń na zewnątrz lub przez inną strefę drogami',children: [
{L: 5,num: '',name: 'Z pomieszczeń przeznaczonych na pobyt ludzi powinna być zapewniona możliwość ewakuacji w bezpieczne miejsce na zewnątrz budynku lub do sąsiedniej strefy pożarowej, bezpośrednio albo drogami komunikacji ogólnej, zwanymi dalej „drogami ewakuacyjnymi".'}] },
{L: 4,num: '2.',name: 'Wyjście ze strefy na zewnątrz lub przez inną strefę',children: [
{L: 5,num: '',name: 'Ze strefy pożarowej, o której mowa w ust. 1, powinno być wyjście bezpośrednio na zewnątrz budynku lub przez inną strefę pożarową, z zastrzeżeniem § 227 ust. 5.'}] },
{L: 4,num: '3.',name: 'Pomieszczenia zamykane są drzwiami',children: [
{L: 5,num: '',name: 'Wyjścia z pomieszczeń na drogi ewakuacyjne powinny być zamykane drzwiami.'}] },
{L: 4,num: '4.',name: 'Kierunek otwierana drzwi >50 osób',children: [
{L: 5,num: '',name: 'Drzwi stanowiące wyjście ewakuacyjne z budynku przeznaczonego dla więcej niż 50 osób powinny otwierać się na zewnątrz. Wymaganie to nie dotyczy budynku wpisanego do rejestru zabytków.'}] },
{L: 4,num: '5.',name: 'Drzwi rozsuwane - dopuszczalne*',children: [
{L: 5,num: '',name: 'W wyjściu ewakuacyjnym z budynku dopuszcza się stosowanie drzwi rozsuwanych spełniających wymagania określone w § 240 ust. 4.'}] },
{L: 4,num: '6.',name: 'Ustalanie liczby osób - wskaźniki',children: [
{L: 5,num: '',name: 'Określając wymaganą szerokość i liczbę przejść, wyjść oraz dróg ewakuacyjnych w budynku, w którym z przeznaczenia i sposobu zagospodarowania pomieszczeń nie wynika jednoznacznie maksymalna liczba ich użytkowników, liczbę tę należy przyjmować w odniesieniu do powierzchni, tych pomieszczeń, dla:<br>1) sal konferencyjnych, lokali gastronomiczno-rozrywkowych, poczekalni, holi, świetlic itp. - 1 m2/osobę,<br>2) pomieszczeń handlowo-usługowych - 4 m2/osobę,<br>3) pomieszczeń administracyjno-biurowych - 5 m2/osobę,<br>4) archiwów, bibliotek itp. - 7 m2/osobę,<br>5) magazynów - 30 m2/osobę.'}] }] },
{L: 3,num: '§ 237.',name: 'Przejścia ewakuacyjne',children: [
{L: 4,num: '1.',name: 'Definicja i długość',children: [
{L: 5,num: '',name: 'W pomieszczeniach, od najdalszego miejsca, w którym może przebywać człowiek, do wyjścia ewakuacyjnego na drogę ewakuacyjną lub do innej strefy pożarowej albo na zewnątrz budynku, powinno być zapewnione przejście, zwane dalej „przejściem ewakuacyjnym", o długości nieprzekraczającej:<br>1) w strefach pożarowych ZL - 40 m,<br>2) w strefach pożarowych PM o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2 w budynku o więcej niż jednej kondygnacji nadziemnej - 75 m,<br>3) w strefach pożarowych PM, o obciążeniu ogniowym nieprzekraczającym 500 MJ/m2, w budynku o więcej niż jednej kondygnacji nadziemnej oraz w strefach pożarowych PM w budynku o jednej kondygnacji nadziemnej bez względu na wielkość obciążenia ogniowego - 100 m.'}] },
{L: 4,num: '2.',name: 'Długość w ZW - max 40m',children: [
{L: 5,num: '',name: 'W pomieszczeniu zagrożonym wybuchem długość przejścia ewakuacyjnego, o którym mowa w ust.1 pkt 2 i 3, nie powinna przekraczać 40 m.'}] },
{L: 4,num: '3.',name: 'Przejście przez ZW - dopuszczalne*',children: [
{L: 5,num: '',name: 'Dopuszcza się prowadzenie przez pomieszczenie zagrożone wybuchem przejścia ewakuacyjnego z innego pomieszczenia, jeżeli pomieszczenia te są powiązane funkcjonalnie.'}] },
{L: 4,num: '4.',name: '80% gdy niejednoznaczny układ pomieszczenia',children: [
{L: 5,num: '',name: 'Jeżeli z przewidywanego przeznaczenia pomieszczenia nie wynika jednoznacznie sposób jego zagospodarowania, projektowa długość przejścia ewakuacyjnego nie może być większa niż 80% długości określonej w ust. 1 i 2.'}] },
{L: 4,num: '5.',name: 'Długość +25% za wysokość > 5 m',children: [
{L: 5,num: '',name: 'W pomieszczeniach o wysokości przekraczającej 5 m długość przejść, o których mowa w ust. 1 i 2, może być powiększona o 25%.'}] },
{L: 4,num: '6.',name: 'Długość +50% za SUGw lub oddymianie',children: [
{L: 5,num: '',name: 'Długości przejść, o których mowa w ust. 1 i 2, mogą być powiększone pod warunkiem zastosowania:<br>1) stałych samoczynnych urządzeń gaśniczych wodnych - o 50%,<br>2) samoczynnych urządzeń oddymiających uruchamianych za pomocą systemu wykrywania dymu - o 50%.'}] },
{L: 4,num: '7.',name: 'Długość +100% za SUGw i oddymianie',children: [
{L: 5,num: '',name: 'Powiększenia, o których mowa w ust. 5 i 6 pkt 1 i 2, podlegają sumowaniu.'}] },
{L: 4,num: '8.',name: 'Max liczba pomieszczeń - 3',children: [
{L: 5,num: '',name: 'Przejście, o którym mowa w ust. 1, nie powinno prowadzić łącznie przez więcej niż trzy pomieszczenia.'}] },
{L: 4,num: '9.',name: 'Ścianki działowe dla przejścia - klasa E',children: [
{L: 5,num: '',name: 'Ścianek działowych oddzielających od siebie pomieszczenia, dla których określa się łącznie długość przejścia ewakuacyjnego, nie dotyczą wymagania określone w § 216 ust. 1.'}] },
{L: 4,num: '10.',name: 'Szerokość przejścia - 6mm/os (min. 0.8-0.9m)',children: [
{L: 5,num: '',name: 'Szerokość przejścia ewakuacyjnego w pomieszczeniu przeznaczonym na pobyt ludzi, z zastrzeżeniem § 261, należy obliczać proporcjonalnie do liczby osób, do których ewakuacji ono służy, przyjmując co najmniej 0,6 m na 100 osób, lecz nie mniej niż 0,9 m, a w przypadku przejścia służącego do ewakuacji do 3 osób - nie mniej niż 0,8 m.'}] }] },
{L: 3,num: '§ 238.',name: 'Minimum 2 wyjścia (oddalone o min 5m)',children: [
{L: 4,num: '1.',name: 'Liczba osób, mobilność, powierzchnia, zagrożenie ',children: [
{L: 5,num: '',name: 'Pomieszczenie powinno mieć co najmniej dwa wyjścia ewakuacyjne oddalone od siebie o co najmniej 5 m w przypadkach, gdy:<br>1) jest przeznaczone do jednoczesnego przebywania w nim ponad 50 osób, a w strefie pożarowej ZL II - ponad 30 osób,<br>2) znajduje się w strefie pożarowej ZL, a jego powierzchnia przekracza 300 m2,<br>3) znajduje się w strefie pożarowej PM o gęstości obciążenia ogniowego powyżej 500 MJ/m2, a jego powierzchnia przekracza 300 m2,<br>4) znajduje się w strefie pożarowej PM o gęstości obciążenia ogniowego do 500 MJ/m2, a jego powierzchnia przekracza 1.000 m2,<br>5) jest zagrożone wybuchem, a jego powierzchnia przekracza 100 m2.'}] }] },
{L: 3,num: '§ 239.',name: 'Drzwi ewakuacyjne',children: [
{L: 4,num: '1.',name: 'Szerokość drzwi - 6mm/os (min. 0.8-0.9m)',children: [
{L: 5,num: '',name: 'Łączną szerokość drzwi w świetle, stanowiących wyjścia ewakuacyjne z pomieszczenia, należy obliczać proporcjonalnie do liczby osób mogących przebywać w nim równocześnie, przyjmując co najmniej 0,6 m szerokości na 100 osób, przy czym najmniejsza szerokość drzwi w świetle ościeżnicy powinna wynosić 0,9 m, a w przypadku drzwi służących do ewakuacji do 3 osób - 0,8 m.'}] },
{L: 4,num: '2.',name: 'Konieczność otwierania na zewnątrz (kryteria)',children: [
{L: 5,num: '',name: 'Drzwi stanowiące wyjście ewakuacyjne powinny otwierać się na zewnątrz pomieszczeń:<br>1) zagrożonych wybuchem,<br>2) do których jest możliwe niespodziewane przedostanie się mieszanin wybuchowych lub substancji trujących, duszących bądź innych, mogących utrudnić ewakuację,<br>3) przeznaczonych do jednoczesnego przebywania ponad 50 osób,<br>4) przeznaczonych dla ponad 6 osób o ograniczonej zdolności poruszania się.'}] },
{L: 4,num: '3.',name: 'Zagrożenie wybuchem - przez przedsionek',children: [
{L: 5,num: '',name: 'Wyjścia ewakuacyjne z pomieszczenia zagrożonego wybuchem na drogę ewakuacyjną powinny prowadzić przez przedsionki przeciwpożarowe odpowiadające wymaganiom § 232.'}] },
{L: 4,num: '4.',name: 'Szerokość wyjscia z budynku',children: [
{L: 5,num: '',name: 'Szerokość drzwi stanowiących wyjście ewakuacyjne z budynku, z zastrzeżeniem ust. 1, a także szerokość drzwi na drodze ewakuacyjnej z klatki schodowej, prowadzących na zewnątrz budynku lub do innej strefy pożarowej, powinna być nie mniejsza niż szerokość biegu klatki schodowej, określona zgodnie z § 68 ust. 1 i 2.'}] },
{L: 4,num: '5.',name: 'Szerokość innych drzwi',children: [
{L: 5,num: '',name: 'Szerokość drzwi w świetle na drodze ewakuacyjnej, niewymienionych w ust. 4, należy obliczać proporcjonalnie do liczby osób, do których ewakuacji są one przeznaczone, przyjmując co najmniej 0,6 m szerokości na 100 osób, przy czym najmniejsza szerokość drzwi powinna wynosić 0,9 m w świetle ościeżnicy.'}] },
{L: 4,num: '6.',name: 'Wysokość drzwi',children: [
{L: 5,num: '',name: 'Wysokość drzwi, o których mowa w ust. 1, 4 i 5, powinna odpowiadać wymaganiom § 62 ust. 1.'}] }] },
{L: 3,num: '§ 240.',name: 'Drzwi nietypowe i urządzenia dodatkowe',children: [
{L: 4,num: '1.',name: 'Wieloskrzydłowe',children: [
{L: 5,num: '',name: 'Drzwi wieloskrzydłowe, stanowiące wyjście ewakuacyjne z pomieszczenia oraz na drodze ewakuacyjnej, powinny mieć co najmniej jedno, nieblokowane skrzydło drzwiowe o szerokości nie mniejszej niż 0,9 m.'}] },
{L: 4,num: '2.',name: 'Wahadłowe',children: [
{L: 5,num: '',name: 'Szerokość skrzydła drzwi wahadłowych, stanowiących wyjście ewakuacyjne z pomieszczenia oraz na drodze ewakuacyjnej, powinna wynosić co najmniej dla drzwi jednoskrzydłowych - 0,9 m, a dla drzwi dwuskrzydłowych - 0,6 m, przy czym oba skrzydła drzwi dwuskrzydłowych muszą mieć tę samą szerokość.'}] },
{L: 4,num: '3.',name: 'Obrotowe i podnoszone',children: [
{L: 5,num: '',name: 'Zabrania się stosowania do celów ewakuacji drzwi obrotowych i podnoszonych.'}] },
{L: 4,num: '4.',name: 'Rozsuwane',children: [
{L: 5,num: '',name: 'Drzwi rozsuwane mogą stanowić wyjścia na drogi ewakuacyjne, a także być stosowane na drogach ewakuacyjnych, jeżeli są przeznaczone nie tylko do celów ewakuacji, a ich konstrukcja zapewnia:<br>1) otwieranie automatyczne i ręczne bez możliwości ich blokowania,<br>2) samoczynne ich rozsunięcie i pozostanie w pozycji otwartej w razie pożaru lub awarii drzwi.'}] },
{L: 4,num: '5.',name: 'Bramy i ściany przesuwane',children: [
{L: 5,num: '',name: 'W bramach i ścianach przesuwanych na drogach ewakuacyjnych powinny znajdować się drzwi otwierane ręcznie albo w bezpośrednim sąsiedztwie tych bram i ścian powinny być umieszczone i wyraźnie oznakowane drzwi przeznaczone do celów ewakuacji.'}] },
{L: 4,num: '6.',name: 'Samoczynne zamykanie w przypadku pożaru',children: [
{L: 5,num: '',name: 'Drzwi, bramy i inne zamknięcia otworów o wymaganej klasie odporności ogniowej lub dymoszczelności powinny być zaopatrzone w urządzenia, zapewniające samoczynne zamykanie otworu w razie pożaru. Należy też zapewnić możliwość ręcznego otwierania drzwi służących do ewakuacji.'}] },
{L: 4,num: '7.',name: 'Przeciwpaniczne >300 osób',children: [
{L: 5,num: '',name: 'Drzwi stanowiące wyjście ewakuacyjne z pomieszczenia, w którym może przebywać jednocześnie więcej niż 300 osób, oraz drzwi na drodze ewakuacyjnej z tego pomieszczenia, powinny być wyposażone w urządzenia przeciwpaniczne.'}] }] },
{L: 3,num: '§ 241.',name: 'Obudowa poziomych dróg ewakuacyjnych',children: [
{L: 4,num: '1.',name: 'Klasa obudowy - jak ściany wewnętrzne*',children: [
{L: 5,num: '',name: 'Obudowa poziomych dróg ewakuacyjnych powinna mieć klasę odporności ogniowej wymaganą dla ścian wewnętrznych, nie mniejszą jednak niż E I 15, z uwzględnieniem § 217. Wymaganie klasy odporności ogniowej dla obudowy poziomych dróg ewakuacyjnych nie dotyczy obudowy krytego ciągu pieszego - pasażu, o którym mowa w § 247 ust. 2.'}] },
{L: 4,num: '2.',name: 'Naświetla na drogach ewakuacji',children: [
{L: 5,num: '',name: 'W ścianach wewnętrznych, stanowiących obudowę dróg ewakuacyjnych w strefach pożarowych ZL III i PM, dopuszcza się umieszczenie nieotwieranych naświetli powyżej 2 m od poziomu posadzki, jeżeli przylegające pomieszczenia nie są zagrożone wybuchem i jeżeli gęstość obciążenia ogniowego w tych pomieszczeniach nie przekracza 1.000 MJ na m2.'}] },
{L: 4,num: '3.',name: 'Naświetla na zewnętrznej galerii',children: [
{L: 5,num: '',name: 'W ścianach zewnętrznych budynków, przy których znajduje się galeria, będąca jedyną drogą ewakuacyjną, dopuszcza się umieszczenie naświetli powyżej 2 m od posadzki tej galerii.'}] }] },
{L: 3,num: '§ 242.',name: 'Wymiary dróg ewakuacyjnych',children: [
{L: 4,num: '1.',name: 'Szerokość ',children: [
{L: 5,num: '',name: 'Szerokość poziomych dróg ewakuacyjnych należy obliczać proporcjonalnie do liczby osób mogących przebywać jednocześnie na danej kondygnacji budynku, przyjmując co najmniej 0,6 m na 100 osób, lecz nie mniej niż 1,4 m.'}] },
{L: 4,num: '2.',name: 'Zmniejszenie szerokości',children: [
{L: 5,num: '',name: 'Dopuszcza się zmniejszenie szerokości poziomej drogi ewakuacyjnej do 1,2 m, jeżeli jest ona przeznaczona do ewakuacji nie więcej niż 20 osób.'}] },
{L: 4,num: '3.',name: 'Wysokość',children: [
{L: 5,num: '',name: 'Wysokość drogi ewakuacyjnej powinna wynosić co najmniej 2,2 m, natomiast wysokość lokalnego obniżenia 2 m, przy czym długość obniżonego odcinka drogi nie może być większa niż 1,5 m na każdym odcinku drogi ewakuacyjnej o długości 10 m.'}] },
{L: 4,num: '4.',name: 'Drzwi stanowiące wyjscie na drogę',children: [
{L: 5,num: '',name: 'Skrzydła drzwi stanowiących wyjście na drogę ewakuacyjną nie mogą, po ich całkowitym otwarciu, zmniejszać wymaganej szerokości tej drogi. Wymagania nie stosuje się do drzwi wyposażonych w urządzenia samoczynnie je zamykające.'}] }] },
{L: 3,num: '§ 243.',name: 'Długie korytarze',children: [
{L: 4,num: '1.',name: 'Podział korytarzy ZL (max 50m)',children: [
{L: 5,num: '',name: 'Korytarze stanowiące drogę ewakuacyjną w strefach pożarowych ZL powinny być podzielone na odcinki nie dłuższe niż 50 m przy zastosowaniu przegród z drzwiami dymoszczelnymi lub innych urządzeń technicznych, zapobiegających rozprzestrzenianiu się dymu.'}] },
{L: 4,num: '2.',name: 'Bez podziału korytarzy jeśli oddymianie',children: [
{L: 5,num: '',name: 'Wymaganie, o którym mowa w ust. 1, nie dotyczy korytarzy, na których zastosowano rozwiązania techniczno-budowlane zabezpieczające przed zadymieniem.'}] },
{L: 4,num: '3.',name: 'Przy podziale - przegrody niepalne',children: [
{L: 5,num: '',name: 'Przegrody, o których mowa w ust. 1, nad sufitami podwieszonymi i pod podłogami podniesionymi powyżej poziomu stropu lub podłoża, powinny być wykonane z materiałów niepalnych.'}] }] },
{L: 3,num: '§ 244.',name: 'Ograniczenia dla niektórych schodów i stopni',children: [
{L: 4,num: '1.',name: 'Zakaz stopni na spocznikach i zabiegowych',children: [
{L: 5,num: '',name: 'Na drogach ewakuacyjnych jest zabronione stosowanie:<br>1) spoczników ze stopniami,<br>2) schodów ze stopniami zabiegowymi, jeżeli schody te są jedyną drogą ewakuacyjną.'}] },
{L: 4,num: '2.',name: 'Schody wachlarzowe - tak, jeśli szerokie stopnie',children: [
{L: 5,num: '',name: 'Na drogach ewakuacyjnych dopuszcza się stosowanie schodów wachlarzowych, pod warunkiem zachowania najmniejszej szerokości stopni określonych w § 69 ust. 6.'}] },
{L: 4,num: '3.',name: 'Oznakowanie pochylni lub różnicy poziomu',children: [
{L: 5,num: '',name: 'Na drogach ewakuacyjnych miejsca, w których zastosowano pochylnie lub stopnie umożliwiające pokonanie różnicy poziomów, powinny być wyraźnie oznakowane.'}] }] },
{L: 3,num: '§ 245.',name: 'Obudowa klatek i przeciwdziałanie zadymieniu',children: [
{L: 4,num: '1. ',name: 'Samoczynne usuwanie dymu lub systemy różnicowania ciśnienia',children: [
{L: 5,num: '',name: 'Klatki schodowe przeznaczone do ewakuacji ze strefy pożarowej:<br>1) ZL II w budynku niskim (N),<br>2) ZL I, ZL II, ZL III lub ZL V w budynku średniowysokim (SW),<br>3) PM o gęstości obciążenia ogniowego powyżej 500 MJ/m2 lub zawierającej pomieszczenie zagrożone wybuchem w budynku niskim (N) bądź średniowysokim (SW)<br>– powinny być obudowane i zamykane drzwiami dymoszczelnymi oraz wyposażone w urządzenia zapobiegające zadymieniu lub służące do usuwania dymu, uruchamiane samoczynnie za pomocą systemu wykrywania dymu.'}] }] },
{L: 3,num: '§ 246.',name: 'Ewakuacja',children: [
{L: 4,num: '1.',name: 'Min 2 obudowane klatki i przedsionki (W-WW)',children: [
{L: 5,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW), z zastrzeżeniem ust. 4, należy zapewnić możliwość ewakuacji do co najmniej dwóch klatek schodowych, które powinny być obudowane i oddzielone od poziomych dróg komunikacyjnych lub ewakuacyjnych oraz pomieszczeń, przedsionkiem przeciwpożarowym, odpowiadającym wymaganiom określonym w § 232.'}] },
{L: 4,num: '2.',name: 'Zapobieganie zadymieniu w klatkach i przedsionkach (W-WW)',children: [
{L: 5,num: '',name: 'Klatki schodowe i przedsionki przeciwpożarowe, stanowiące drogę ewakuacyjną w budynku wysokim (W) dla stref pożarowych innych niż ZL IV i PM oraz w budynku wysokościowym (WW), powinny być wyposażone w urządzenia zapobiegające ich zadymieniu.'}] },
{L: 4,num: '3.',name: 'Klatki i przedsionki - usuwanie lub zapobieganie zadymieniu (PM, W)',children: [
{L: 5,num: '',name: 'Klatki schodowe i przedsionki przeciwpożarowe, stanowiące drogę ewakuacyjną w budynku wysokim (W) dla strefy pożarowej PM, powinny być wyposażone w urządzenia zapobiegające zadymieniu lub samoczynne urządzenia oddymiające uruchamiane za pomocą systemu wykrywania dymu.'}] },
{L: 4,num: '4.',name: '1 klatka - gdy rzut < 750 m2 (W bez ZL II + WW ZL IV)*',children: [
{L: 5,num: '',name: 'Prowadzenie ewakuacji tylko do jednej klatki schodowej dopuszcza się w przypadku:<br>1) budynku wysokiego (W) niezawierającego strefy pożarowej ZL II, jeżeli powierzchnia wewnętrzna kondygnacji nie przekracza 750 m2;<br>2) strefy pożarowej ZL IV, jeżeli łączna powierzchnia wewnętrzna mieszkań na kondygnacji lub jej części nie przekracza 750 m2.'}] },
{L: 4,num: '5.',name: 'Alternatywy dla przedsionków (ZL IV - W-WW) ',children: [
{L: 5,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW) dopuszcza się wykonywanie klatek schodowych, stanowiących drogę ewakuacyjną wyłącznie dla stref pożarowych ZL IV, bez przedsionków oddzielających je od poziomych dróg komunikacji ogólnej, jeżeli:<br>1) każde mieszkanie lub pomieszczenie jest oddzielone od poziomej drogi komunikacji ogólnej drzwiami o klasie odporności ogniowej co najmniej E I 30,<br>2) klatki schodowe są zamykane drzwiami dymoszczelnymi,<br>3) klatki schodowe są wyposażone w urządzenia zapobiegające zadymieniu lub w samoczynne urządzenia oddymiające uruchamiane za pomocą systemu wykrywania dymu.'}] },
{L: 4,num: '6.',name: 'Drzwi EI30 z pokojów (ZL5 poza N)',children: [
{L: 5,num: '',name: 'W budynku średniowysokim (SW) i wyższym, w strefie pożarowej ZL V, drzwi z pomieszczeń, z wyjątkiem higienicznosanitarnych, prowadzące na drogi komunikacji ogólnej, powinny mieć klasę odporności ogniowej co najmniej E I 30.'}] }] },
{L: 3,num: '§ 247.',name: 'Wymagane oddymianie',children: [
{L: 4,num: '1.',name: 'Budynki W/WW, ZL IV',children: [
{L: 5,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW), w strefach pożarowych innych niż ZL IV, należy zastosować rozwiązania techniczno-budowlane zabezpieczające przed zadymieniem poziomych dróg ewakuacyjnych.'}] },
{L: 4,num: '2.',name: 'Pasaż',children: [
{L: 5,num: '',name: 'W krytym ciągu pieszym (pasażu), do którego przylegają lokale handlowe i usługowe, oraz w przekrytym dziedzińcu wewnętrznym, należy zastosować rozwiązania techniczno-budowlane zabezpieczające przed zadymieniem dróg ewakuacyjnych.'}] },
{L: 4,num: '3.',name: 'Kondygnacja podziemna',children: [
{L: 5,num: '',name: 'W podziemnej kondygnacji budynku, w której znajduje się pomieszczenie przeznaczone dla ponad 100 osób, oraz budowli podziemnej z takim pomieszczeniem, należy zastosować rozwiązania techniczno-budowlane zapewniające usuwanie dymu z tego pomieszczenia i z dróg ewakuacyjnych.'}] }] },
{L: 3,num: '§ 248.',name: 'Schody wewnętrzne',children: [
{L: 4,num: '1.',name: 'ZL IV',children: [
{L: 5,num: '',name: 'Schody wewnętrzne w mieszkaniach w budynku wielorodzinnym oraz w budynku jednorodzinnym, zagrodowym i rekreacji indywidualnej, a także budynku tymczasowym nieprzeznaczonym na cele widowiskowe lub inne zgromadzenia ludzi, mogą nie spełniać wymagań stawianych drogom ewakuacyjnym.'}] }] },
{L: 3,num: '§ 249.',name: 'Klatki schodowe',children: [
{L: 4,num: '1.',name: 'Klasa obudowy jak dla stropów',children: [
{L: 5,num: '',name: 'Ściany wewnętrzne i stropy stanowiące obudowę klatki schodowej lub pochylni powinny mieć klasę odporności ogniowej określoną zgodnie z § 216, jak dla stropów budynku.'}] },
{L: 4,num: '2.',name: '(uchyla się)',children: [
{L: 5,num: '',name: '(uchyla się)'}] },
{L: 4,num: '3.',name: 'Klasa biegów',children: [
{L: 5,num: '',name: 'Biegi i spoczniki schodów oraz pochylnie służące do ewakuacji powinny być wykonane z materiałów niepalnych i mieć klasę odporności ogniowej co najmniej:<br>1) w budynkach o klasie odporności pożarowej „A”, „B” i „C” - R 60,<br>2) w budynkach o klasie odporności pożarowej „D” i „E” - R 30.'}] },
{L: 4,num: '4.',name: 'Bez klasy gdy przedsionki lub antresola < 10 osób',children: [
{L: 5,num: '',name: 'Wymaganie klasy odporności ogniowej, o którym mowa w ust. 3, nie dotyczy klatek schodowych wydzielonych na każdej kondygnacji przedsionkami przeciwpożarowymi oraz schodów na antresolę w pomieszczeniu, w którym się ona znajduje, jeżeli antresola ta jest przeznaczona do użytku nie więcej niż 10 osób.'}] },
{L: 4,num: '5.',name: 'Palne biegi w Niskim DE (obudowane klatki)',children: [
{L: 5,num: '',name: 'W budynku niskim o klasie odporności pożarowej „D” lub „E” w obudowanych klatkach schodowych, zamykanych drzwiami o klasie odporności ogniowej co najmniej EI 30, dopuszcza się wykonanie biegów i spoczników schodów z materiałów palnych.'}] },
{L: 4,num: '6.',name: 'Ściany zewnętrzne',children: [
{L: 5,num: '',name: 'Odległość między ścianą zewnętrzną, stanowiącą obudowę klatki schodowej przeznaczonej do ewakuacji, o której mowa w § 245, 246 i 256 ust. 2, a inną ścianą zewnętrzną tego samego lub innego budynku powinna być ustalona zgodnie z § 271. Przepisu nie stosuje się, jeżeli co najmniej jedna z tych ścian posiada co najmniej klasę odporności ogniowej zgodnie z § 216, jak dla stropu budynku z tą klatką schodową, w pasie terenu określonym zgodnie z § 271.'}] }] },
{L: 3,num: '§ 250.',name: 'Oddzielenie piwnic',children: [
{L: 4,num: '1.',name: 'Klasa oddzielenia piwnic',children: [
{L: 5,num: '',name: 'Piwnice powinny być oddzielone od pozostałej części budynku, z wyjątkiem budynków ZL IV niskich (N) i średniowysokich (SW) stropami i ścianami o klasie odporności ogniowej co najmniej R E I 60 i zamknięte drzwiami o klasie odporności ogniowej co najmniej E I 30. Jeżeli drzwi do piwnic znajdują się poniżej poziomu terenu, schody prowadzące z tego poziomu powinny być zabezpieczone w sposób uniemożliwiający omyłkowe zejście ludzi do piwnic w przypadku ewakuacji (np. ruchomą barierą)'}] },
{L: 4,num: '2.',name: 'Przedsionki W i WW',children: [
{L: 5,num: '',name: 'W budynku wysokim (W) i wysokościowym (WW) piwnice powinny być oddzielone od klatki schodowej przedsionkiem przeciwpożarowym.'}] }] },
{L: 3,num: '§ 251.',name: 'Wyjście z klatki schodowej',children: [
{L: 4,num: '1.',name: 'Strych lub poddasze',children: [
{L: 5,num: '',name: 'Wyjście z klatki schodowej na strych lub poddasze powinno być zamykane drzwiami lub klapą wyjściową o klasie odporności ogniowej co najmniej:<br>1) w budynkach niskich (N) - E I 15,<br>2) w budynkach średniowysokich (SW) i wyższych - E I 30.'}] }] },
{L: 3,num: '§ 252.',name: 'Schody i pochylnie ruchome',children: [
{L: 4,num: '1.',name: 'Nie wliczane',children: [
{L: 5,num: '',name: 'Schodów i pochylni ruchomych nie zalicza się do dróg ewakuacyjnych.'}] }] },
{L: 3,num: '§ 253.',name: 'Dźwigi dla ekip ratowniczych',children: [
{L: 4,num: '1.',name: 'Posadzka powyżej 25 m',children: [
{L: 5,num: '',name: 'W budynku ZL I, ZL II, ZL III lub ZL V, mającym kondygnację z posadzką na wysokości powyżej 25 m ponad poziomem terenu przy najniżej położonym wejściu do budynku oraz w budynku wysokościowym (WW) ZL IV przynajmniej jeden dźwig powinien być przystosowany do potrzeb ekip ratowniczych, spełniając wymagania Polskiej Normy dotyczącej dźwigów dla straży pożarnej. Dźwig dla ekip ratowniczych powinien zapewniać dostęp do każdej strefy pożarowej na kondygnacji bezpośrednio lub drogami komunikacji ogólnej.'}] },
{L: 4,num: '2.',name: 'Dojście do dźwigu',children: [
{L: 5,num: '',name: 'Dojście do dźwigu dla ekip ratowniczych powinno prowadzić przez przedsionek przeciwpożarowy spełniający wymagania określone w § 232.'}] },
{L: 4,num: '3.',name: 'Ściany i stropy',children: [
{L: 5,num: '',name: 'Ściany i stropy szybu dźwigu dla ekip ratowniczych powinny mieć klasę odporności ogniowej wymaganą jak dla stropów budynku, zgodnie z § 216.'}] },
{L: 4,num: '4.',name: 'Zapobieganie zadymieniu',children: [
{L: 5,num: '',name: 'Szyb dźwigu dla ekip ratowniczych powinien być wyposażony w urządzenia zapobiegające zadymieniu'}] }] },
{L: 3,num: '§ 254.',name: '(uchylony)',children: [
{L: 4,num: '1. ',name: '(uchylony)',children: [
{L: 5,num: '',name: '(uchylony)'}] }] },
{L: 3,num: '§ 255.',name: '(uchylony)',children: [
{L: 4,num: '1. ',name: '(uchylony)',children: [
{L: 5,num: '',name: '(uchylony)'}] }] },
{L: 3,num: '§ 256.',name: 'Dojścia ewakuacyjne',children: [
{L: 4,num: '1.',name: 'Pojęcie dojścia',children: [
{L: 5,num: '',name: 'Długość drogi ewakuacyjnej od wyjścia z pomieszczenia na tę drogę do wyjścia do innej strefy pożarowej lub na zewnątrz budynku, zwanej dalej „dojściem ewakuacyjnym", mierzy się wzdłuż osi drogi ewakuacyjnej. W przypadku zakończenia dojścia ewakuacyjnego przedsionkiem przeciwpożarowym, długość tę mierzy się do pierwszych drzwi tego przedsionka.'}] },
{L: 4,num: '2.',name: 'Wyjście do innej strefy',children: [
{L: 5,num: '',name: 'Za równorzędne wyjściu do innej strefy pożarowej, o którym mowa w ust. 1, uważa się wyjście do obudowanej klatki schodowej, zamykanej drzwiami o klasie odporności ogniowej co najmniej E I 30, wyposażonej w urządzenia zapobiegające zadymieniu lub służące do usuwania dymu, a w przypadku, o którym mowa w § 246 ust. 5 - zamykanej drzwiami dymoszczelnymi.'}] },
{L: 4,num: '3.',name: 'Długości dojść ewakuacyjnych',children: [
{L: 5,num: '',name: 'Dopuszczalne długości dojść ewakuacyjnych w strefach pożarowych określa poniższa tabela:'}] },
{L: 4,num: '4. ',name: 'Powiększenie długości dojść',children: [
{L: 5,num: '',name: 'Długości dojść ewakuacyjnych, o których mowa w ust. 3, mogą być powiększone pod warunkiem ochrony:<br>1) strefy pożarowej stałymi samoczynnymi urządzeniami gaśniczymi wodnymi - o 50%,<br>2) drogi ewakuacyjnej samoczynnymi urządzeniami oddymiającymi uruchamianymi za pomocą systemu wykrywania dymu - o 50%.<br>Przy jednoczesnym stosowaniu tych urządzeń długość dojścia może być powiększona o 100%'}] },
{L: 4,num: '5. ',name: 'Wyjście z klatki schodowej',children: [
{L: 5,num: '',name: 'Wyjście z klatki schodowej, o której mowa w ust. 2, powinno prowadzić na zewnątrz budynku, bezpośrednio lub poziomymi drogami komunikacji ogólnej, których obudowa odpowiada wymaganiom § 249 ust. 1, a otwory w obudowie mają zamknięcia o klasie odporności ogniowej co najmniej E I 30.'}] },
{L: 4,num: '6. ',name: 'Prowadzenie drogi ewakuacyjnej przez hol',children: [
{L: 5,num: '',name: 'Dopuszcza się przeprowadzenie drogi ewakuacyjnej do wyjścia na zewnątrz budynku z klatki schodowej oraz z poziomych dróg komunikacji ogólnej przez hol, mogący spełniać także funkcje uzupełniające do funkcji wynikających z przeznaczenia budynku, takie jak: recepcyjna, ochrony budynku, drobnej sprzedaży, pod warunkiem że:<br>1) przez jeden hol możliwe jest przeprowadzenie drogi ewakuacyjnej tylko z jednej klatki schodowej, przy czym ograniczenie to nie odnosi się do klatek schodowych z odrębnym, nieprowadzącym przez ten hol, wyjściem ewakuacyjnym,<br>2) hol nie znajduje się w strefie pożarowej PM o gęstości obciążenia ogniowego powyżej 500 MJ/m2 ani też zawierającej pomieszczenie zagrożone wybuchem,<br>3) hol jest oddzielony od poziomych dróg komunikacji ogólnej, tak jak jest to wymagane dla klatki schodowej, o której mowa w pkt 1,<br>4) wolna szerokość drogi ewakuacyjnej jest co najmniej o 50% większa od szerokości poziomej drogi ewakuacyjnej w budynku, prowadzącej do tego wyjścia, określonej zgodnie z § 242 ust. 1, dla kondygnacji budynku o największej liczbie przewidywanych osób, znajdujących się tam jedocześnie,<br>5) wysokość holu w miejscu, w którym przebiega droga ewakuacyjna, jest nie mniejsza niż 3,3 m,<br>6) szerokość drzwi wyjściowych na zewnątrz budynku jest większa o 50% od minimalnej szerokości drzwi wyjściowych określonej zgodnie z § 239 ust. 4.'}] },
{L: 4,num: '7. ',name: 'Długość od klatki schodowej',children: [
{L: 5,num: '',name: 'Dopuszczalną długość drogi od wyjścia z klatki schodowej, o której mowa w ust. 2, do wyjścia na zewnątrz budynku określa się zgodnie z ust. 3.'}] }] },
{L: 3,num: '§ 257.',name: 'Drabiny ewakuacyjne',children: [
{L: 4,num: '1.',name: 'Budynki PM',children: [
{L: 5,num: '',name: 'W budynku PM, w którym jest wymagana druga droga ewakuacyjna dla ludzi z wyższej kondygnacji, dopuszcza się stosowanie na tej drodze drabiny ewakuacyjnej, prowadzącej na dach nad niższą kondygnacją lub na poziom terenu, jeżeli liczba osób przebywających jednocześnie na wyższej kondygnacji nie przekracza 50, a w budynku z pomieszczeniem zagrożonym wybuchem - 15. Nie dotyczy to zakładów pracy chronionej.'}] },
{L: 4,num: '2.',name: 'Usytuowanie drabin',children: [
{L: 5,num: '',name: 'Drabiny ewakuacyjne należy umieszczać w miejscach łatwo dostępnych. Sytuowanie drabin naprzeciw świetlików i okien jest zabronione.'}] },
{L: 4,num: '3.',name: 'Wykonanie drabin',children: [
{L: 5,num: '',name: 'Dopuszcza się wykonywanie drabin ewakuacyjnych bez obręczy ochronnych, gdy różnica wysokości nie przekracza 3 m, z uwzględnieniem wymagań § 101.'}] }] }] },
{L: 2,num: 'Rozdział 5. ',name: 'Wykończenie i wyposażenie',children: [
{L: 3,num: '§ 258.',name: 'Materiały i wyroby łatwo zapalne',children: [
{L: 4,num: '1.',name: 'Zakaz w ZL (bez mieszkalnych)',children: [
{L: 5,num: '',name: 'W strefach pożarowych ZL I, ZL II, ZL III i ZL V stosowanie do wykończenia wnętrz materiałów i wyrobów łatwo zapalnych, których produkty rozkładu termicznego są bardzo toksyczne lub intensywnie dymiące, jest zabronione.'}] },
{L: 4,num: '1a.',name: 'Materiały luźno zwisające - PN',children: [
{L: 5,num: '',name: 'W przypadku stosowania materiałów wykończeniowych luźno zwisających, w szczególności w kurtynach, zasłonach, draperiach, kotarach oraz żaluzjach, za łatwo zapalne uważa się materiały, których właściwości określone w badaniach zgodnych z Polskimi Normami odnoszącymi się do zapalności i rozprzestrzeniania płomienia przez wyroby włókiennicze nie spełniają co najmniej jednego z kryteriów:<br>1) ti ≥4 s,<br>2) ts ≤ 30 s,<br>3) nie następuje przepalenie trzeciej nitki,<br>4) nie występują płonące krople.'}] },
{L: 4,num: '2.',name: 'Zakaz na drogach ewakuacyjnych',children: [
{L: 5,num: '',name: 'Na drogach komunikacji ogólnej, służących celom ewakuacji, stosowanie materiałów i wyrobów budowlanych łatwo zapalnych jest zabronione.'}] }] },
{L: 3,num: '§ 259.',name: 'Podłogi podniesione',children: [
{L: 4,num: '1.',name: 'Konstrukcja',children: [
{L: 5,num: '',name: 'Podłogi podniesione o więcej niż 0,2 m ponad poziom stropu lub innego podłoża powinny mieć:<br>1) niepalną konstrukcję nośną oraz co najmniej niezapalne płyty podłogi od strony przestrzeni podpodłogowej, mające klasę odporności ogniowej co najmniej REI 30, a w budynku wysokościowym (WW) lub ze strefą pożarową o gęstości obciążenia ogniowego ponad 4.000 MJ/m2 oraz w strefach pożarowych ZL II - co najmniej REI 60,<br>2) przestrzeń podpodłogową podzieloną na sektory o powierzchni nie większej niż 1.000 m2 przegrodami o klasie odporności ogniowej co najmniej EI 30, a w budynku wysokościowym (WW) lub ze strefą pożarową o gęstości obciążenia ogniowego ponad 4.000 MJ/m2 - co najmniej EI 60.'}] },
{L: 4,num: '2.',name: 'Przewody i kable',children: [
{L: 5,num: '',name: 'Przewody i kable elektryczne oraz inne instalacje wykonane z materiałów palnych, prowadzone w przestrzeni podpodłogowej podłogi podniesionej i w przestrzeni ponad sufitami podwieszonymi, wykorzystywanej do wentylacji lub ogrzewania pomieszczenia, powinny mieć osłonę lub obudowę o klasie odporności ogniowej co najmniej EI 30, a w budynku wysokościowym (WW) lub w budynkach ze strefą pożarową o gęstości obciążenia ogniowego ponad 4.000 MJ/m2 - co najmniej EI 60.'}] },
{L: 4,num: '3.',name: 'Otwory',children: [
{L: 5,num: '',name: 'Na drogach ewakuacyjnych wykonywanie w podłodze podniesionej otworów do wentylacji lub ogrzewania jest zabronione.'}] }] },
{L: 3,num: '§ 260.',name: 'Łatwo zapalne przegrody, elementy i wykładziny',children: [
{L: 4,num: '1.',name: 'Pomieszczenia dla więcej niż 50 osób i produkcyjne',children: [
{L: 5,num: '',name: 'W pomieszczeniach, przeznaczonych do jednoczesnego przebywania ponad 50 osób oraz w pomieszczeniach produkcyjnych, stosowanie łatwo zapalnych przegród, stałych elementów wyposażenia i wystroju wnętrz oraz wykładzin podłogowych jest zabronione.'}] },
{L: 4,num: '2.',name: 'ZL II, magazyny i pomieszczenia z podniesionymi podłogami',children: [
{L: 5,num: '',name: 'W pomieszczeniach stref pożarowych ZL II, pomieszczeniach magazynowych oraz w pomieszczeniach z podłogami podniesionymi, stosowanie wykładzin podłogowych łatwo zapalnych jest zabronione.'}] }] },
{L: 3,num: '§ 261.',name: 'Siedzenia w rzędach',children: [
{L: 4,num: '1. ',name: 'Ponad 200 dorosłych lub 100 dzieci',children: [
{L: 5,num: '',name: 'Pomieszczenia przeznaczone do jednoczesnego przebywania ponad 200 osób dorosłych lub 100 dzieci, w których miejsca do siedzenia są ustawione w rzędach, powinny mieć:<br>1) fotele i inne siedzenia trudno zapalne oraz niewydzielające produktów rozkładu i spalania, określonych jako bardzo toksyczne, zgodnie z Polską Normą dotyczącą badań wydzielania produktów toksycznych; określenie trudno zapalny przypisuje się fotelom i innym siedzeniom, które nie ulegają postępującemu tleniu i spalaniu płomieniowemu w warunkach określonych Polską Normą dotyczącą badania zapalności mebli tapicerowanych,<br>2) szerokość przejść pomiędzy rzędami siedzeń nie mniejszą niż 0,45 m, przy czym odległość tę należy ustalać, biorąc pod uwagę odstęp między stałymi elementami siedzeń,<br>3) liczbę siedzeń w rzędzie nie większą niż 16 pomiędzy przejściami oraz 8 w rzędzie przyściennym, przy czym dopuszcza się zwiększenie liczby miejsc w rzędach odpowiednio do 40 i 20 pod warunkiem zwiększenia odstępu między rzędami siedzeń o 1 cm na każde dodatkowe siedzenie odpowiednio powyżej 16 lub 8,<br>4) szerokość przejść komunikacyjnych nie mniejszą niż 1,2 m przy liczbie osób do 150, a przy większej ich liczbie szerokość tę należy zwiększyć proporcjonalnie o 0,6 m na 100 osób,<br>5) rzędy siedzeń lub ławek trwale umocowane do podłogi albo siedzenia sztywno łączone ze sobą w rzędy oraz między rzędami.'}] }] },
{L: 3,num: '§ 262.',name: 'Sufity',children: [
{L: 4,num: '1.',name: 'Materiały',children: [
{L: 5,num: '',name: 'Okładziny sufitów oraz sufity podwieszone należy wykonywać z materiałów niepalnych lub niezapalnych, niekapiących i nieodpadających pod wpływem ognia. Wymaganie to nie dotyczy mieszkań.'}] },
{L: 4,num: '2.',name: 'Podział na sektory',children: [
{L: 5,num: '',name: 'Przestrzeń między sufitem podwieszonym i stropem powinna być podzielona na sektory o powierzchni nie większej niż 1.000 m2, a w korytarzach - przegrodami co 50 m, wykonanymi z materiałów niepalnych.'}] }] },
{L: 3,num: '§ 263.',name: 'Łazienki i sauny',children: [
{L: 4,num: '1.',name: 'Piecyki gazowe i elektryczne',children: [
{L: 5,num: '',name: 'W łazienkach i saunach z piecykami gazowymi oraz termami gazowymi i elektrycznymi dopuszcza się stosowanie okładzin ściennych z materiałów palnych, z tym że odległość tych urządzeń od okładzin powinna wynosić co najmniej 0,3 m.'}] },
{L: 4,num: '2.',name: 'Piec na paliwo',children: [
{L: 5,num: '',name: 'Stosowanie okładzin ściennych z materiałów łatwo zapalnych w łazienkach i saunach z piecem na paliwo stałe jest zabronione.'}] }] },
{L: 3,num: '§ 264.',name: 'Łazienki i sauny',children: [
{L: 4,num: '1. ',name: 'Zabezpieczenie przed zapyleniem i zwęgleniem',children: [
{L: 5,num: '',name: 'Palne elementy wystroju wnętrz budynku, przez które lub obok których są prowadzone przewody ogrzewcze, wentylacyjne, dymowe lub spalinowe, powinny być zabezpieczone przed możliwością zapalenia lub zwęglenia.'}] }] }] },
{L: 2,num: 'Rozdział 6. ',name: 'Paleniska i wentylacja',children: [
{L: 3,num: '§ 265.',name: 'Paleniska i piece',children: [
{L: 4,num: '1.',name: 'Usytuowanie palenisk',children: [
{L: 5,num: '',name: 'Palenisko powinno być umieszczone na podłożu niepalnym o grubości co najmniej 0,15 m, a przy piecach metalowych bez nóżek - 0,3 m. Podłoga łatwo zapalna przed drzwiczkami palenisk powinna być zabezpieczona pasem materiału niepalnego o szerokości co najmniej 0,3 m, sięgającym poza krawędzie drzwiczek co najmniej po 0,3 m.'}] },
{L: 4,num: '2.',name: 'Paleniska otwarte',children: [
{L: 5,num: '',name: 'Palenisko otwarte może być stosowane tylko w pomieszczeniu, w którym nie występuje zagrożenie wybuchem, w odległości co najmniej 0,6 m od łatwo zapalnych części budynku. W pomieszczeniach ze stropem drewnianym palenisko otwarte powinno mieć okap wykonany z materiałów niepalnych, wystający co najmniej 0,3 m poza krawędź paleniska.'}] },
{L: 4,num: '3.',name: 'Usytuowanie piecy metalowych',children: [
{L: 5,num: '',name: 'Piec metalowy lub w ramach metalowych, rury przyłączeniowe oraz otwory do czyszczenia powinny być oddalone od łatwo zapalnych, nieosłoniętych części konstrukcyjnych budynku co najmniej 0,6 m, a od osłoniętych okładziną z tynku o grubości 25 mm lub inną równorzędną okładziną - co najmniej 0,3 m.'}] },
{L: 4,num: '4.',name: 'Usytuowanie piecy z kamienia i ceramiki',children: [
{L: 5,num: '',name: 'Piec z kamienia, cegły, kafli i podobnych materiałów niepalnych oraz przewody spalinowe i dymowe powinny być oddalone od łatwo zapalnych, nieosłoniętych części konstrukcyjnych budynku co najmniej 0,3 m, a od osłoniętych okładziną z tynku o grubości 25 mm na siatce albo równorzędną okładziną - co najmniej 0,15 m.'}] }] },
{L: 3,num: '§ 266.',name: 'Przewody spalinowe',children: [
{L: 4,num: '1.',name: 'Niepalne materiały',children: [
{L: 5,num: '',name: 'Przewody spalinowe i dymowe powinny być wykonane z wyrobów niepalnych.'}] },
{L: 4,num: '2.',name: 'Spełniają PN dla małych kominów',children: [
{L: 5,num: '',name: 'Przewody lub obudowa przewodów spalinowych i dymowych powinny spełniać wymagania określone w Polskiej Normie dotyczącej badań ogniowych małych kominów.'}] },
{L: 4,num: '3.',name: 'Obudowy z cegły 12cm',children: [
{L: 5,num: '',name: 'Dopuszcza się wykonanie obudowy, o której mowa w ust. 2, z cegły pełnej grubości 12 cm, murowanej na zaprawie cementowo-wapiennej, z zewnętrznym tynkiem lub spoinowaniem.'}] },
{L: 4,num: '4.',name: 'Min 6m do korony drzew',children: [
{L: 5,num: '',name: 'Między wylotem przewodu spalinowego i dymowego a najbliższym skrajem korony drzew dorosłych należy zapewnić zachowanie odległości co najmniej 6 m, z zastrzeżeniem § 271 ust. 8.'}] }] },
{L: 3,num: '§ 267.',name: 'Przewody wentylacyjne',children: [
{L: 4,num: '1.',name: 'Wykonanie przewodów',children: [
{L: 5,num: '',name: 'Przewody wentylacyjne powinny być wykonane z materiałów niepalnych, a palne izolacje cieplne i akustyczne oraz inne palne okładziny przewodów wentylacyjnych mogą być stosowane tylko na zewnętrznej ich powierzchni w sposób zapewniający nierozprzestrzenianie ognia.'}] },
{L: 4,num: '2.',name: 'Budynki PM',children: [
{L: 5,num: '',name: 'Dopuszcza się w budynkach PM, z wyjątkiem garaży, wykonanie przewodów wentylacyjnych nierozprzestrzeniających ognia, pod warunkiem że nie są one prowadzone przez drogi ewakuacyjne oraz nie przepływa nimi powietrze o temperaturze powyżej 85°C lub zanieczyszczenia mogące się odkładać.'}] },
{L: 4,num: '3.',name: 'Odległość od wykładzin',children: [
{L: 5,num: '',name: 'Odległość nieizolowanych przewodów wentylacyjnych od wykładzin i powierzchni palnych powinna wynosić co najmniej 0,5 m.'}] },
{L: 4,num: '4.',name: 'Drzwiczki rewizyjne',children: [
{L: 5,num: '',name: 'Drzwiczki rewizyjne stosowane w kanałach i przewodach wentylacyjnych powinny być wykonane z materiałów niepalnych.'}] },
{L: 4,num: '5.',name: 'Kuchnie',children: [
{L: 5,num: '',name: 'W kuchni lub w aneksie kuchennym w mieszkaniu dopuszcza się stosowanie przewodów wentylacji wywiewnej z materiałów co najmniej trudno zapalnych.'}] },
{L: 4,num: '6.',name: 'Połączenia przewodów',children: [
{L: 5,num: '',name: 'Elastyczne elementy łączące, służące do połączenia sztywnych przewodów wentylacyjnych z elementami instalacji lub urządzeniami, z wyjątkiem wentylatorów, powinny być wykonane z materiałów co najmniej trudno zapalnych, posiadać długość nie większą niż 4 m, przy czym nie powinny być prowadzone przez elementy oddzielenia przeciwpożarowego.'}] },
{L: 4,num: '7.',name: 'Łączenia przewodów z wentylatorami',children: [
{L: 5,num: '',name: 'Elastyczne elementy łączące wentylatory z przewodami wentylacyjnymi powinny być wykonane z materiałów co najmniej trudno zapalnych, przy czym ich długość nie powinna przekraczać 0,25 m.'}] },
{L: 4,num: '8.',name: 'Izolacje',children: [
{L: 5,num: '',name: 'Izolacje cieplne i akustyczne zastosowane w instalacjach: wodociągowej, kanalizacyjnej i ogrzewczej powinny być wykonane w sposób zapewniający nierozprzestrzenianie ognia.'}] }] },
{L: 3,num: '§ 268.',name: 'Wentylacja i klimatyzacja',children: [
{L: 4,num: '1.',name: 'Wymagania ogólne',children: [
{L: 5,num: '',name: 'Instalacje wentylacji mechanicznej i klimatyzacji w budynkach, z wyjątkiem budynków jednorodzinnych i rekreacji indywidualnej, powinny spełniać następujące wymagania:<br>1) przewody wentylacyjne powinny być wykonane i prowadzone w taki sposób, aby w przypadku pożaru nie oddziaływały siłą większą niż 1 kN na elementy budowlane, a także aby przechodziły przez przegrody w sposób umożliwiający kompensacje wydłużeń przewodu,<br>2) zamocowania przewodów do elementów budowlanych powinny być wykonane z materiałów niepalnych, zapewniających przejęcie siły powstającej w przypadku pożaru w czasie nie krótszym niż wymagany dla klasy odporności ogniowej przewodu lub klapy odcinającej,<br>3) w przewodach wentylacyjnych nie należy prowadzić innych instalacji,<br>4) filtry i tłumiki powinny być zabezpieczone przed przeniesieniem się do ich wnętrza palących się cząstek,<br>5) maszynownie wentylacyjne i klimatyzacyjne w budynkach mieszkalnych średniowysokich (SW) i wyższych oraz w innych budynkach o wysokości powyżej dwóch kondygnacji nadziemnych powinny być wydzielone ścianami o klasie odporności ogniowej co najmniej E I 60 i zamykane drzwiami o klasie odporności ogniowej co najmniej E I 30; nie dotyczy to obudowy urządzeń instalowanych ponad dachem budynku.'}] },
{L: 4,num: '2.',name: 'Stosowanie nagrzewnic',children: [
{L: 5,num: '',name: 'Dopuszcza się instalowanie w przewodzie wentylacyjnym nagrzewnic elektrycznych, oraz nagrzewnic na paliwo ciekłe lub gazowe, których temperatura powierzchni grzewczych nie przekracza 160°C, pod warunkiem zastosowania ogranicznika temperatury, automatycznie wyłączającego ogrzewanie po osiągnięciu temperatury powietrza 110°C oraz zabezpieczenia uniemożliwiającego pracę nagrzewnicy bez przepływu powietrza.'}] },
{L: 4,num: '3.',name: 'Wentylatory',children: [
{L: 5,num: '',name: 'Dopuszcza się zainstalowanie w przewodzie wentylacyjnym wentylatorów i urządzeń do uzdatniania powietrza pod warunkiem wykonania ich obudowy o klasie odporności ogniowej E I 60.'}] },
{L: 4,num: '4.',name: 'Przejście przez elemementy oddzielenia ppoż',children: [
{L: 5,num: '',name: 'Przewody wentylacyjne i klimatyzacyjne w miejscu przejścia przez elementy oddzielenia przeciwpożarowego powinny być wyposażone w przeciwpożarowe klapy odcinające o klasie odporności ogniowej równej klasie odporności ogniowej elementu oddzielenia przeciwpożarowego z uwagi na szczelność ogniową, izolacyjność ogniową i dymoszczelność (E I S), z zastrzeżeniem ust. 5.'}] },
{L: 4,num: '5.',name: 'Przejście przez nieobsługiwaną strefę',children: [
{L: 5,num: '',name: 'Przewody wentylacyjne i klimatyzacyjne samodzielne lub obudowane prowadzone przez strefę pożarową, której nie obsługują, powinny mieć klasę odporności ogniowej wymaganą dla elementów oddzielenia przeciwpożarowego tych stref pożarowych z uwagi na szczelność ogniową, izolacyjność ogniową i dymoszczelność (E I S) lub powinny być wyposażone w przeciwpożarowe klapy odcinające zgodnie z ust. 4.'}] },
{L: 4,num: '6.',name: 'Współpraca z instalacją sygnalizacyjno-alarmową',children: [
{L: 5,num: '',name: 'W strefach pożarowych, w których jest wymagana instalacja sygnalizacyjno-alarmowa, przeciwpożarowe klapy odcinające powinny być uruchamiane przez tę instalację, niezależnie od zastosowanego wyzwalacza termicznego.'}] }] },
{L: 3,num: '§ 269.',name: 'Pomieszczenia zagrożone wybuchem',children: [
{L: 4,num: '1.',name: 'Wstrzymanie pracy wentylatorów',children: [
{L: 5,num: '',name: 'W pomieszczeniach zagrożonych wybuchem należy stosować urządzenia wstrzymujące automatycznie pracę wentylatorów w razie powstania pożaru i sygnalizujące ich wyłączenie, jeżeli działanie wentylatorów mogłoby przyczynić się do jego rozprzestrzeniania.'}] },
{L: 4,num: '2.',name: 'Instalacje wyciągowe',children: [
{L: 5,num: '',name: 'W pomieszczeniach zagrożonych wybuchem należy stosować oddzielną dla każdego pomieszczenia instalację wyciągową.'}] },
{L: 4,num: '3.',name: 'Usytuowanie otworów wyciągowych',children: [
{L: 5,num: '',name: 'Usytuowanie wentylacyjnych otworów wyciągowych powinno uwzględniać gęstość względną par cieczy i gazów występujących w pomieszczeniu w stosunku do powietrza oraz przewidywany kierunek ruchu zanieczyszczonego powietrza.'}] },
{L: 4,num: '4.',name: 'Pomieszczeni z palnymi pyłami',children: [
{L: 5,num: '',name: 'W pomieszczeniach, w których mogą występować palne pyły, tworzące z powietrzem mieszaniny wybuchowe, otwory wentylacji nawiewnej powinny być usytuowane oraz wykonane tak, aby nie powodowały unoszenia pyłów osiadłych.'}] },
{L: 4,num: '5.',name: 'Filtry, komory pyłowe i cyklony',children: [
{L: 5,num: '',name: 'Filtry, komory pyłowe i cyklony do palnych pyłów powinny być zlokalizowane w pomieszczeniach wydzielonych elementami oddzielenia przeciwpożarowego lub też na zewnątrz budynku, w miejscu bezpiecznym dla tych urządzeń oraz dla otoczenia.'}] },
{L: 4,num: '6.',name: 'Wyjątki',children: [
{L: 5,num: '',name: 'Wymagania, o których mowa w ust. 5, nie dotyczą przypadków uzasadnionych względami technologicznymi, w których filtry, komory pyłowe i cyklony stanowią bezpośrednie wyposażenie urządzeń i agregatów produkcyjnych.'}] },
{L: 4,num: '7.',name: 'Urządzenia zapobiegające przeniesieniu się ognia',children: [
{L: 5,num: '',name: 'Przewody wentylacyjne przed miejscem wprowadzenia do komór pyłowych i cyklonów powinny być wyposażone w urządzenia zapobiegające przeniesieniu się ognia.'}] },
{L: 4,num: '8.',name: 'Klapy lub przepony przeciwwybuchowe',children: [
{L: 5,num: '',name: 'Komory pyłowe i cyklony dla pyłów tworzących z powietrzem mieszaniny wybuchowe powinny być wyposażone w klapy lub przepony przeciwwybuchowe, zabezpieczające konstrukcję cyklonu i komory, a także konstrukcję budynku przed skutkami wybuchu.'}] }] },
{L: 3,num: '§ 270.',name: 'Wentylacja oddymiająca',children: [
{L: 4,num: '1.',name: 'Wymagania dla wentylacji',children: [
{L: 5,num: '',name: 'Instalacja wentylacji oddymiającej powinna:<br>1) usuwać dym z intensywnością zapewniającą, że w czasie potrzebnym do ewakuacji ludzi na chronionych przejściach i drogach ewakuacyjnych nie wystąpi zadymienie lub temperatura uniemożliwiające bezpieczną ewakuację,<br>2) mieć stały dopływ powietrza zewnętrznego uzupełniającego braki tego powietrza w wyniku jego wypływu wraz z dymem,<br>3–7) (uchylone)'}] },
{L: 4,num: '2.',name: 'Klasa odporności przewodów',children: [
{L: 5,num: '',name: 'Przewody wentylacji oddymiającej, obsługujące:<br>1) wyłącznie jedną strefę pożarową, powinny mieć klasę odporności ogniowej z uwagi na szczelność ogniową i dymoszczelność - E600 S, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216, przy czym dopuszcza się stosowanie klasy E300 S, jeżeli wynikająca z obliczeń temperatura dymu powstającego w czasie pożaru nie przekracza 300 °C,<br>2) więcej niż jedną strefę pożarową, powinny mieć klasę odporności ogniowej E I S, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216.'}] },
{L: 4,num: '3.',name: 'Klasa odporności klap odcinających',children: [
{L: 5,num: '',name: 'Klapy odcinające do przewodów wentylacji oddymiającej, obsługujące:<br>1) wyłącznie jedną strefę pożarową, powinny być uruchamiane automatycznie i mieć klasę odporności ogniowej z uwagi na szczelność ogniową i dymoszczelność - E600 S AA, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216, przy czym dopuszcza się stosowanie klasy E300 S AA, jeżeli wynikająca z obliczeń temperatura dymu powstającego w czasie pożaru nie przekracza 300 °C,<br>2) więcej niż jedną strefę pożarową, powinny być uruchamiane automatycznie i mieć klasę odporności ogniowej E I S AA, co najmniej taką jak klasa odporności ogniowej stropu określona w § 216.'}] },
{L: 4,num: '4.',name: 'Klasa odporności wentylatorów',children: [
{L: 5,num: '',name: 'Wentylatory oddymiające powinny mieć klasę:<br>1) F600 60, jeżeli przewidywana temperatura dymu przekracza 400 °C,<br>2) F400 120 w pozostałych przypadkach, przy czym dopuszcza się inne klasy, jeżeli z analizy obliczeniowej temperatury dymu oraz zapewnienia bezpieczeństwa ekip ratowniczych wynika taka możliwość.'}] },
{L: 4,num: '5.',name: 'Klasa odpornosci klap dymowych',children: [
{L: 5,num: '',name: 'Klapy dymowe w grawitacyjnej wentylacji oddymiającej powinny mieć klasę:<br>1) B300 30 - dla klap otwieranych automatycznie,<br>2) B600 30 - dla klap otwieranych wyłącznie w sposób ręczny.'}] }] }] },
{L: 2,num: 'Rozdział 7. ',name: 'Usytuowanie',children: [
{L: 3,num: '§ 271.',name: 'Między budynkami',children: [
{L: 4,num: '1.',name: 'Wymagana klasa  >65% ściany',children: [
{L: 5,num: '',name: 'Odległość między zewnętrznymi ścianami budynków niebędącymi ścianami oddzielenia przeciwpożarowego, a mającymi na powierzchni większej niż 65% klasę odporności ogniowej (E), określoną w § 216 ust. 1 w 5 kolumnie tabeli, nie powinna, z zastrzeżeniem ust. 2 i 3, być mniejsza niż odległość w metrach określona w poniższej tabeli:<br>Tabela '}] },
{L: 4,num: '2.',name: 'Ściany i dachy rozprzestrzeniające ogień',children: [
{L: 5,num: '',name: 'Jeżeli jedna ze ścian zewnętrznych usytuowana od strony sąsiedniego budynku lub przekrycie dachu jednego z budynków jest rozprzestrzeniające ogień, wówczas odległość określoną w ust. 1 należy zwiększyć o 50%, a jeżeli dotyczy to obu ścian zewnętrznych lub przekrycia dachu obu budynków - o 100%.'}] },
{L: 4,num: '3.',name: 'Zagrożenie wybuchem',children: [
{L: 5,num: '',name: 'Jeżeli co najmniej w jednym z budynków znajduje się pomieszczenie zagrożone wybuchem, wówczas odległość między ich zewnętrznymi ścianami nie powinna być mniejsza niż 20 m.'}] },
{L: 4,num: '4.',name: 'Wymagana klasa na 30-65% ściany',children: [
{L: 5,num: '',name: 'Jeżeli ściana zewnętrzna budynku ma na powierzchni nie większej niż 65%, lecz nie mniejszej niż 30%, klasę odporności ogniowej (E), określoną w § 216 ust. 1 w 5 kolumnie tabeli, wówczas odległość między tą ścianą lub jej częścią a ścianą zewnętrzną drugiego budynku należy zwiększyć w stosunku do określonej w ust. 1 i 2 o 50%.'}] },
{L: 4,num: '5.',name: 'Wymagana klasa na <30% ściany',children: [
{L: 5,num: '',name: 'Jeżeli ściana zewnętrzna budynku ma na powierzchni mniejszej niż 30% klasę odporności ogniowej (E), określoną w § 216 ust. 1 w 5 kolumnie tabeli, wówczas odległość między tą ścianą lub jej częścią a ścianą zewnętrzną drugiego budynku należy zwiększyć w stosunku do określonej w ust. 1 i 2 o 100%.'}] },
{L: 4,num: '6.',name: 'SUG w obu budynkach',children: [
{L: 5,num: '',name: 'Odległość między ścianami zewnętrznymi budynków lub częściami tych ścian może być zmniejszona o 50%, w stosunku do określonej w ust. 1-5, jeżeli we wszystkich strefach pożarowych budynków, przylegających odpowiednio do tych ścian lub ich części, są stosowane stałe urządzenia gaśnicze wodne.'}] },
{L: 4,num: '7.',name: 'SUG w jednym z budynków',children: [
{L: 5,num: '',name: 'Odległość od ściany zewnętrznej budynku lub jej części do ściany zewnętrznej drugiego budynku może być zmniejszona o 25%, w stosunku do określonej w ust. 1-5, jeżeli we wszystkich strefach pożarowych budynku, przylegających odpowiednio do tej ściany lub jej części, są stosowane stałe urządzenia gaśnicze wodne.'}] },
{L: 4,num: '8.',name: 'Las',children: [
{L: 5,num: '',name: 'Najmniejszą odległość budynków ZL, PM, IN od granicy (konturu) lasu, rozumianego jako grunt leśny (Ls) określony na mapie ewidencyjnej lub teren przeznaczony w miejscowym planie zagospodarowania przestrzennego jako leśny, przyjmuje się jako odległość ścian tych budynków od ściany budynku ZL z przekryciem dachu rozprzestrzeniającym ogień.'}] },
{L: 4,num: '8a.',name: 'Niewielkie budynki',children: [
{L: 5,num: '',name: 'Najmniejsza odległość budynków wymienionych w § 213, wykonanych z elementów nierozprzestrzeniających ognia, niezawierających pomieszczeń zagrożonych wybuchem oraz posiadających klasę odporności pożarowej wyższą niż wymagana zgodnie z § 212, od granicy (konturu) lasu zlokalizowanej na:<br>1) sąsiedniej działce – wynosi 4 m,<br>2) działce, na której sytuuje się budynek – nie określa się<br>– jeżeli teren, na którym znajduje się granica (kontur) lasu, przeznaczony jest w miejscowym planie zagospodarowania przestrzennego pod zabudowę niezwiązaną z produkcją leśną, a w przypadku braku planu miejscowego – grunty leśne są objęte zgodą na zmianę przeznaczenia na cele nieleśne uzyskaną przy sporządzaniu miejscowych planów zagospodarowania przestrzennego, które utraciły moc na podstawie art. 1 lit. a ustawy z dnia 21 grudnia 2001 r. o zmianie ustawy o zagospodarowaniu przestrzennym (Dz. U. poz. 1804) oraz art. 87 ust. 3 ustawy z dnia 27 marca 2003 r. o planowaniu i zagospodarowaniu przestrzennym (Dz. U. z 2017 r. poz. 1073 i 1566).'}] },
{L: 4,num: '9.',name: 'Niewielkie budynki',children: [
{L: 5,num: '',name: 'Odległości, o których mowa w ust. 1, dla budynków wymienionych w § 213, bez pomieszczeń zagrożonych wybuchem, można zmniejszyć o 25%, jeżeli są zwrócone do siebie ścianami i dachami z przekryciami nierozprzestrzeniającymi ognia, niemającymi otworów.'}] },
{L: 4,num: '10.',name: 'Oddzielenia w pasie terenu',children: [
{L: 5,num: '',name: 'W pasie terenu o szerokości określonej w ust. 1-7, otaczającym ściany zewnętrzne budynku, niebędące ścianami oddzielenia przeciwpożarowego, ściany zewnętrzne innego budynku powinny spełniać wymagania określone w § 232 ust. 4 i 5 dla ścian oddzielenia przeciwpożarowego obu budynków.'}] },
{L: 4,num: '11.',name: 'Ściany pod kątem 60-120',children: [
{L: 5,num: '',name: 'Wymaganie, o którym mowa w ust. 10, dotyczy pasa terenu o szerokości zmniejszonej o 50% w odniesieniu do tych ścian zewnętrznych obu budynków, które tworzą między sobą kąt 60° lub większy, lecz mniejszy niż 120°.'}] },
{L: 4,num: '12.',name: 'Ściany pod kątem >120',children: [
{L: 5,num: '',name: 'Wymaganie, o którym mowa w ust. 10, nie dotyczy budynków, które:<br>1) są oddzielone od siebie ścianą oddzielenia przeciwpożarowego, spełniającą dla obu budynków wymagania określone w § 232 ust. 4 i 5, z zastrzeżeniem § 218, lub<br>2) mają ściany zewnętrzne tworzące między sobą kąt nie mniejszy niż 120°.'}] },
{L: 4,num: '13.',name: 'Składowisko jak PM',children: [
{L: 5,num: '',name: 'Otwarte składowisko, ze względu na usytuowanie, należy traktować jak budynek PM.'}] }] },
{L: 3,num: '§ 272.',name: 'Sąsiednia działka',children: [
{L: 4,num: '1.',name: 'Sąsiednia działka niezabudowana',children: [
{L: 5,num: '',name: 'Odległość ściany zewnętrznej wznoszonego budynku od granicy sąsiedniej niezabudowanej działki budowlanej powinna wynosić co najmniej połowę odległości określonej w § 271 ust. 1-7, przyjmując, że na działce niezabudowanej będzie usytuowany budynek o przeznaczeniu określonym w miejscowym planie zagospodarowania przestrzennego, przy czym dla budynków PM należy przyjmować, że będzie on miał gęstość obciążenia ogniowego strefy pożarowej Q większą od 1.000 MJ/m2, lecz nie większą niż 4.000 MJ/m2, a w przypadku braku takiego planu - budynek ZL ze ścianą zewnętrzną, o której mowa w § 271 ust. 1.'}] },
{L: 4,num: '2.',name: 'Małe budynki ',children: [
{L: 5,num: '',name: 'Budynki mieszkalne jednorodzinne, rekreacji indywidualnej oraz budynki mieszkalne zagrodowe i gospodarcze, ze ścianami i dachami z przekryciami nierozprzestrzeniającymi ognia, powinny być sytuowane w odległości nie mniejszej od granicy sąsiedniej, niezabudowanej działki, niż jest to określone w § 12.'}] },
{L: 4,num: '3.',name: 'Budynek na granicy działki',children: [
{L: 5,num: '',name: 'Budynek usytuowany bezpośrednio przy granicy działki powinien mieć od strony sąsiedniej działki ścianę oddzielenia przeciwpożarowego o klasie odporności ogniowej określonej w § 232 ust. 4 i 5.'}] }] },
{L: 3,num: '§ 273.',name: 'Ta sama działka i zbiorniki olejowe',children: [
{L: 4,num: '1.',name: 'Budynki na tej samej działce',children: [
{L: 5,num: '',name: 'Odległości między ścianami zewnętrznymi budynków położonych na jednej działce budowlanej nie ustala się, z zastrzeżeniem § 249 ust. 6, jeżeli łączna powierzchnia wewnętrzna tych budynków nie przekracza najmniejszej dopuszczalnej powierzchni strefy pożarowej wymaganej dla każdego ze znajdujących się na tej działce rodzajów budynków'}] },
{L: 4,num: '2.',name: 'Odległość zbiornika oleju i ZL',children: [
{L: 5,num: '',name: 'Odległość zbiornika naziemnego oleju opałowego zasilającego kotłownię od budynku ZL powinna wynosić co najmniej 10 m.'}] },
{L: 4,num: '3.',name: 'Odległość zbiornika oleju ze ścianą ',children: [
{L: 5,num: '',name: 'Dopuszcza się zmniejszenie odległości, o których mowa w ust. 2, do 3 m, pod warunkiem wykonania ściany zewnętrznej budynku od strony zbiornika jako ściany oddzielenia przeciwpożarowego o klasie odporności ogniowej co najmniej R E I 120 lub wykonania takiej ściany pomiędzy budynkiem a zbiornikiem.'}] },
{L: 4,num: '4.',name: 'Budowa zbiornika',children: [
{L: 5,num: '',name: 'Zbiorniki, o których mowa w ust. 3, powinny być wykonane jako stalowe dwupłaszczowe lub być lokalizowane na terenie ukształtowanym w formie niecki, o pojemności większej od pojemności zbiornika, z izolacją uniemożliwiającą przedostawanie się oleju do gruntu.'}] },
{L: 4,num: '5.',name: 'Zbiornik podziemny i ZL',children: [
{L: 5,num: '',name: 'Odległość budynku ZL od zbiornika podziemnego oleju opałowego, przykrytego warstwą ziemi o grubości nie mniejszej niż 0,5 m, powinna wynosić co najmniej 3 m, a od urządzenia spustowego, oddechowego i pomiarowego tego zbiornika - co najmniej 10 m.'}] },
{L: 4,num: '6.',name: 'Odległość zbiornika i PM IN',children: [
{L: 5,num: '',name: 'Odległości budynków PM i IN wykonanych z materiałów niepalnych od zbiorników i ich urządzeń, o których mowa w ust. 5, powinny wynosić co najmniej 3 m.'}] }] }] },
{L: 2,num: 'Rozdział 8. ',name: 'Garaże',children: [
{L: 3,num: '§ 274.',name: 'Przepisy ogólne i zadaszony parking',children: [
{L: 4,num: '1.',name: 'Zakres - zamknięte i otwarte',children: [
{L: 5,num: '',name: 'Wymagania przeciwpożarowe, określone w niniejszym rozdziale, dotyczą garaży zamkniętych i otwartych, o których mowa w § 102-108.'}] },
{L: 4,num: '2.',name: 'Gdy nie określono - dotyczy obu',children: [
{L: 5,num: '',name: 'W przypadku gdy przepis rozporządzenia nie określa rodzaju garażu, należy rozumieć, że dotyczy on garaży zamkniętych i otwartych.'}] },
{L: 4,num: '3.',name: 'Zadaszony parking - niekapiący',children: [
{L: 5,num: '',name: 'Jednokondygnacyjny, nadziemny garaż otwarty, mający formę zadaszenia stanowisk postojowych z odkrytymi drogami manewrowymi, powinien mieć elementy konstrukcji i przekrycia dachu niekapiące pod wpływem wysokiej temperatury.'}] }] },
{L: 3,num: '§ 275.',name: 'Klasy odporności',children: [
{L: 4,num: '1.',name: 'Jak PM<500',children: [
{L: 5,num: '',name: 'Klasę odporności pożarowej garażu należy przyjmować, jak dla budynku PM o gęstości obciążenia ogniowego do 500 MJ/m2, pod warunkiem wykonania jego elementów jako nierozprzestrzeniających ognia, niekapiących i nieodpadających pod wpływem ognia, jeżeli przepisy rozporządzenia nie stanowią inaczej.'}] },
{L: 4,num: '2.',name: 'Parking na dachu w niskim',children: [
{L: 5,num: '',name: 'Dopuszcza się, z zastrzeżeniem § 277 ust. 5, wykonanie nad najwyższą kondygnacją garażu otwartego, będącego budynkiem niskim (N), dodatkowego poziomu stanowisk postojowych bez zadaszenia lub z zadaszeniem spełniającym wymagania określone w § 274 ust. 3.'}] },
{L: 4,num: '3.',name: 'Klasa D w otwartym <25m',children: [
{L: 5,num: '',name: 'Garaż otwarty, którego najwyższy poziom parkowania znajduje się nie wyżej niż 25 m nad poziomem otaczającego terenu, może być wykonany w klasie D odporności pożarowej, jeżeli nad kondygnacją przeznaczoną do parkowania samochodów nie znajdują się inne pomieszczenia.'}] }] },
{L: 3,num: '§ 276.',name: 'Usytuowanie',children: [
{L: 4,num: '1.',name: 'Jak PM<1000',children: [
{L: 5,num: '',name: 'Usytuowanie garażu zamkniętego i otwartego powinno odpowiadać warunkom określonym w § 271 jak dla budynków PM o gęstości obciążenia ogniowego do 1 000 MJ/m2, z zastrzeżeniem § 19.'}] },
{L: 4,num: '2.',name: 'Wyjątek - do 3 aut',children: [
{L: 5,num: '',name: 'Przepisu ust. 1 nie stosuje się do garażu o liczbie stanowisk postojowych nie większej niż 3, w zabudowie jednorodzinnej i rekreacji indywidualnej.'}] }] },
{L: 3,num: '§ 277.',name: 'Strefy pożarowe',children: [
{L: 4,num: '1.',name: 'Max 5000 m2 w zamkniętym',children: [
{L: 5,num: '',name: 'Powierzchnia strefy pożarowej w nadziemnym lub podziemnym garażu zamkniętym nie powinna przekraczać 5 000 m2.'}] },
{L: 4,num: '2.',name: 'Powiększenie strefy',children: [
{L: 5,num: '',name: 'Powierzchnia, o której mowa w ust. 1, może być powiększona o 100%, jeżeli jest spełniony jeden z poniższych warunków:<br>1) zastosowano ochronę strefy pożarowej stałymi samoczynnymi urządzeniami gaśniczymi wodnymi,<br>2) wykonano, oddzielające od siebie nie więcej niż po 2 stanowiska postojowe, ściany o klasie odporności ogniowej, w części pełnej co najmniej E I 30, od posadzki do poziomu zapewniającego pozostawienie prześwitu pod stropem o wysokości 0,1 do 0,5 m na całej ich długości.'}] },
{L: 4,num: '3.',name: 'SUG wodne',children: [
{L: 5,num: '',name: 'W garażu zamkniętym obejmującym więcej niż dwie kondygnacje podziemne lub znajdującym się poniżej drugiej kondygnacji podziemnej należy stosować stałe samoczynne urządzenia gaśnicze wodne. Wymagania nie stosuje się do strefy pożarowej garażu, która posiada bezpośredni wjazd lub wyjazd z budynku.'}] },
{L: 4,num: '4.',name: 'Oddymianie',children: [
{L: 5,num: '',name: 'W strefie pożarowej garażu zamkniętego należy stosować instalację wentylacji oddymiającej uruchamianą za pomocą systemu wykrywania dymu, w przypadku gdy ta strefa nie posiada bezpośredniego wjazdu lub wyjazdu z budynku lub gdy jej powierzchnia przekracza 1500 m2.'}] },
{L: 4,num: '5.',name: 'Przewody wentylacji',children: [
{L: 5,num: '',name: 'W przypadku zastosowania rozwiązania, o którym mowa w ust. 2 pkt 1, klasa odporności ogniowej przewodów wentylacji oddymiającej powinna odpowiadać wymaganiom określonym w § 270 ust. 2 - jedynie z uwagi na kryterium szczelności ogniowej (E).'}] }] },
{L: 3,num: '§ 278.',name: 'Wyjścia ewakuacyjne',children: [
{L: 4,num: '1.',name: 'Wymagane wyjścia ewakuacyjne',children: [
{L: 5,num: '',name: 'Ze strefy pożarowej garażu, która posiada więcej niż 25 stanowisk postojowych i nie jest wyposażona w instalację wentylacji oddymiającej lub ma powierzchnię przekraczającą 1500 m2, należy zapewnić co najmniej dwa wyjścia ewakuacyjne, przy czym jednym z tych wyjść może być wjazd lub wyjazd.'}] },
{L: 4,num: '2.',name: 'Przejście ewakuacyjne',children: [
{L: 5,num: '',name: 'W przypadku strefy pożarowej garażu obejmującej więcej niż dwie kondygnacje wyjścia ewakuacyjne należy zapewnić na poziomie każdej kondygnacji. Długość przejścia od stanowiska postojowego do najbliższego wyjścia ewakuacyjnego nie może przekraczać:<br>1) w garażu zamkniętym – 40 m;<br>2) w garażu otwartym – 60 m.'}] },
{L: 4,num: '3.',name: 'Powiększenie przejścia',children: [
{L: 5,num: '',name: 'Długość przejścia, o którym mowa w ust. 2 pkt 1, może być powiększona zgodnie z zasadami określonymi w § 237 ust. 6 i 7. W przypadku zastosowania instalacji wentylacji oddymiającej strumieniowej nie stosuje się § 237 ust. 6 pkt 2.'}] },
{L: 4,num: '4.',name: 'Dostępność wyjścia',children: [
{L: 5,num: '',name: 'Wyjście ewakuacyjne powinno być dostępne także w przypadku zamknięcia wjazdu lub wyjazdu z garażu lub bramy między strefami pożarowymi.'}] },
{L: 4,num: '5.',name: 'Alternatywne wyjścia ewakuacyjne',children: [
{L: 5,num: '',name: 'Jeżeli poziom parkowania leży nie wyżej niż 3 m nad poziomem terenu urządzonego przy budynku, za wyjście ewakuacyjne mogą służyć nieobudowane schody zewnętrzne.'}] },
{L: 4,num: '6.',name: 'Oddzielenie garaży',children: [
{L: 5,num: '',name: 'W garażu podziemnym strefy pożarowe o powierzchni powyżej 1500 m2 powinny, w razie pożaru, mieć możliwość oddzielenia ich od siebie i od kondygnacji nadziemnej budynku za pomocą drzwi, bram lub innych zamknięć o klasie odporności ogniowej nie mniejszej niż E I 30.'}] }] },
{L: 3,num: '§ 279.',name: 'Wrota garaży w ZL',children: [
{L: 4,num: '1.',name: 'Odległości od okien w pionie',children: [
{L: 5,num: '',name: 'W garażu zamkniętym, znajdującym się w budynku ZL, odległość w pionie między wrotami garażu a oknami tego budynku powinna wynosić co najmniej 1,5 m. Odległość ta może wynosić 1,1 m, jeżeli wykonano nad wjazdem do garażu daszek z materiałów niepalnych o wysięgu co najmniej 0,6 m od lica ściany, wysunięty obustronnie 0,8 m poza boczne krawędzie wrót garażu, lub jeżeli wrota garażu są cofnięte o 0,8 m od lica ściany.'}] },
{L: 4,num: '2.',name: 'Odległości od okien w poziomie',children: [
{L: 5,num: '',name: 'W budynku, o którym mowa w ust. 1, odległość wrót garażu wbudowanego lub przybudowanego od najbliższej krawędzi okien pomieszczeń przeznaczonych na pobyt ludzi w tym samym budynku nie może być mniejsza niż 1,5 m w rzucie poziomym.'}] }] },
{L: 3,num: '§ 280.',name: 'Przedsionki przeciwpożarowe',children: [
{L: 4,num: '1.',name: 'Klasa odporności ogniowej',children: [
{L: 5,num: '',name: 'Połączenie garażu z budynkiem wymaga zastosowania przedsionka przeciwpożarowego zamykanego drzwiami o klasie odporności ogniowej co najmniej E I 30.'}] },
{L: 4,num: '2.',name: 'Przedsionki przed dźwigami',children: [
{L: 5,num: '',name: 'Nie wymaga się zastosowania przedsionka, o którym mowa w ust. 1, przed dźwigiem oddzielonym od garażu drzwiami o klasie odporności ogniowej co najmniej E I 60.'}] },
{L: 4,num: '3.',name: 'Wyjątek',children: [
{L: 5,num: '',name: 'Wymaganie, o którym mowa w ust. 1, nie dotyczy budynków mieszkalnych jednorodzinnych i rekreacji indywidualnej.'}] }] },
{L: 3,num: '§ 281.',name: 'Studzienki rewizyjne, urządzenia i przewody gazowe',children: [
{L: 4,num: '1. ',name: 'Zabronione',children: [
{L: 5,num: '',name: 'Instalowanie w garażu studzienek rewizyjnych, urządzeń i przewodów gazowych, z zastrzeżeniem § 164 ust. 6, oraz umieszczanie otworów od palenisk lub otworów rewizyjnych przeznaczonych do czyszczenia kanałów dymowych, spalinowych i wentylacyjnych, jest zabronione.'}] }] }] },
{L: 2,num: 'Rozdział 9. ',name: 'Inwentarskie',children: [
{L: 3,num: '§ 282.',name: 'Bez klasy dla niewielkich budynków',children: [
{L: 4,num: '1. ',name: 'Kubatura do 1500 m3',children: [
{L: 5,num: '',name: 'Od wymagań dotyczących klasy odporności pożarowej budynków, określonych w § 212, zwalnia się budynki IN o kubaturze brutto do 1.500 m3.'}] }] },
{L: 3,num: '§ 283.',name: 'Pomieszczenia z paleniskami',children: [
{L: 4,num: '1. ',name: 'Przegrody niepalne',children: [
{L: 5,num: '',name: 'Paszarnie, kotłownie i inne pomieszczenia wyposażone w paleniska lub trzony kuchenne, znajdujące się w budynkach IN, powinny mieć podłogi, ściany i stropy wykonane z materiałów niepalnych.'}] }] },
{L: 3,num: '§ 284.',name: 'Ewakuacja',children: [
{L: 4,num: '1. ',name: 'Wymagania',children: [
{L: 5,num: '',name: 'Budynek IN powinien spełniać następujące wymagania ewakuacyjne:<br>1) odległość od najdalszego stanowiska dla zwierząt do wyjścia ewakuacyjnego nie powinna przekraczać przy ściółkowym utrzymaniu zwierząt - 50 m, a przy bezściółkowym - 75 m,<br>2) w bezściółkowym chowie bydła, trzody chlewnej i owiec, jeżeli liczba bydła i trzody chlewnej nie przekracza 15 sztuk, a owiec - 200 sztuk, należy stosować co najmniej jedno wyjście ewakuacyjne,<br>3) w budynku przeznaczonym dla większej liczby zwierząt aniżeli wymieniona w pkt 2 należy stosować co najmniej dwa wyjścia, a z pomieszczeń podzielonych na sekcje - co najmniej jedno wyjście ewakuacyjne z każdej sekcji,<br>4) wrota i drzwi w budynku inwentarskim powinny otwierać się na zewnątrz pomieszczenia.'}] }] },
{L: 3,num: '§ 285.',name: 'Część mieszkalna',children: [
{L: 4,num: '1. ',name: 'Część mieszkalna',children: [
{L: 5,num: '',name: 'Dopuszcza się umieszczenie w jednym budynku części mieszkalnej i gospodarczej pod następującymi warunkami:<br>1) część mieszkalna oraz część gospodarcza mają odrębne wejścia,<br>2) między częścią mieszkalną a gospodarczą zostanie wykonana ściana o klasie odporności ogniowej co najmniej R E I 60.'}] }] }] },
{L: 2,num: 'Rozdział 10. ',name: 'Tymczasowe',children: [
{L: 3,num: '§ 286.',name: 'Wymagania ogólne',children: [
{L: 4,num: '1.',name: 'Klasa odporności pożarowej',children: [
{L: 5,num: '',name: 'Budynek tymczasowy przeznaczony na stały pobyt ludzi powinien być wykonany co najmniej w klasie „E” odporności pożarowej. Budynek taki nie powinien mieć kondygnacji podziemnych i więcej niż 2 kondygnacje nadziemne.'}] },
{L: 4,num: '2.',name: 'Usytuowanie',children: [
{L: 5,num: '',name: 'Do wyznaczania minimalnej odległości budynku tymczasowego od innego budynku mają zastosowanie przepisy określające odległości między budynkami ZL, PM lub IN, o których mowa w § 271 i § 273 ust. 1.'}] },
{L: 4,num: '3.',name: 'Oddzielenia przeciwpożarowe',children: [
{L: 5,num: '',name: 'Tymczasowy budynek wykonany z materiałów palnych lub z palną izolacją należy przegradzać w odstępach nieprzekraczających 24 m ścianami oddzieleń przeciwpożarowych o klasie odporności ogniowej co najmniej R E I 60; nie dotyczy to przypadków określonych w § 287 i 288.'}] },
{L: 4,num: '4.',name: 'Ściana oddzielenia przeciwpożarowego',children: [
{L: 5,num: '',name: 'Ściana oddzielenia przeciwpożarowego powinna być wysunięta co najmniej o 0,6 m poza lico ścian zewnętrznych i ponad palne pokrycie dachu.'}] },
{L: 4,num: '5.',name: 'Dostęp do poddasza',children: [
{L: 5,num: '',name: 'Dostęp do poddasza tymczasowego budynku wykonanego z materiałów palnych powinien być umożliwiony za pomocą wewnętrznego wyłazu z klapą, o której mowa w § 251 pkt 1, o wymiarach co najmniej 0,6x0,6 m, lub przez drabinę i drzwi zewnętrzne o wymiarach co najmniej 0,6x1,6 m, umieszczone w szczytowej ścianie budynku.'}] },
{L: 4,num: '6.',name: 'Instalacje elektryczne lub gazowe',children: [
{L: 5,num: '',name: 'Stosowanie instalacji elektrycznych lub gazowych na strychu tymczasowego budynku wykonanego z materiałów palnych jest zabronione.'}] }] },
{L: 3,num: '§ 287.',name: 'Duża liczba osób',children: [
{L: 4,num: '1. ',name: 'Wymagania',children: [
{L: 5,num: '',name: 'Budynek tymczasowy może być przeznaczony na cele widowiskowe lub inne zgromadzenia ludzi, jeżeli:<br>1) jest jednokondygnacyjny,<br>2) widownia jest dostępna z poziomu terenu,<br>3) dach lub stropodach mają przekrycie co najmniej trudno zapalne,<br>4) ma wyjścia, przejścia i dojścia ewakuacyjne o liczbie i wymiarach określonych w przepisach rozporządzenia, oznakowane - zgodnie z Polskimi Normami - znakami bezpieczeństwa,<br>5) ma oświetlenie awaryjne,<br>6) ma instalację elektryczną wykonaną zgodnie z Polskimi Normami.'}] }] },
{L: 3,num: '§ 288.',name: 'Pneumatyczny PM',children: [
{L: 4,num: '1. ',name: 'Wymagania dla <1000 MJ/m2',children: [
{L: 5,num: '',name: 'Pomieszczenie z obudową pneumatyczną może być wykorzystywane jako tymczasowy budynek PM o gęstości obciążenia ogniowego strefy pożarowej nie wyższej od 1.000 MJ/ m2, pod warunkiem:<br>1) zachowania odległości co najmniej 20 m od innych obiektów budowlanych,<br>2) użycia powłoki z materiału co najmniej trudno zapalnego,<br>3) zastosowania wyłącznie ogrzewania powietrznego,<br>4) zapewnienia liczby i wymiarów wyjść, dojść i przejść ewakuacyjnych, określonych w przepisach rozporządzenia,<br>5) oznakowania wyjść ewakuacyjnych - zgodnie z Polskimi Normami - znakami bezpieczeństwa,<br>6) wyposażenia w oświetlenie awaryjne,<br>7) wyposażenia w instalację elektryczną wykonaną zgodnie z Polskimi Normami.'}] }] },
{L: 3,num: '§ 289.',name: 'Pneumatyczny ZL',children: [
{L: 4,num: '1. ',name: 'Cele widowiskowe, wystawowe, rekreacyjne',children: [
{L: 5,num: '',name: 'Pomieszczenie, o którym mowa w § 288, przeznaczone do celów widowiskowych, wystawowych, rekreacyjnych lub sportowych, powinno być dodatkowo wyposażone w:<br>1) konstrukcje umieszczone wewnątrz lub na zewnątrz budynku do awaryjnego podwieszenia powłoki pneumatycznej,<br>2) awaryjne urządzenie do utrzymania ciśnienia w powłoce, zasilane z niezależnego źródła energii,<br>3) awaryjną wentylację mechaniczną do wymiany powietrza, zasilaną z niezależnego źródła energii,<br>4) wyjścia ewakuacyjne rozmieszczone możliwie równomiernie na obwodzie,<br>5) krzesła połączone ze sobą w sposób trwały i unieruchomione w rzędach co najmniej po 8 sztuk, ustawione zgodnie z wymaganiami określonymi w § 261.'}] }] },
{L: 3,num: '§ 290.',name: 'Namiot',children: [
{L: 4,num: '1. ',name: 'Cele widowiskowe',children: [
{L: 5,num: '',name: 'Tymczasowy budynek typu namiotowego przeznaczony do celów widowiskowych powinien spełniać wymagania określone w § 288 i 289, z wyjątkiem wymagań dotyczących urządzeń do utrzymywania ciśnienia w powłoce.'}] }] }] }] },
{L: 1,num: '',name: 'Ochrona przeciwpożarowa',children: [
{L: 2,num: 'Rozdział 1.',name: 'Przepisy ogólne',children: [
{L: 3,num: '§ 1.',name: 'Zakres',children: [
{L: 4,num: '1.',name: 'Zakres rozporządzenia',children: [
{L: 5,num: '',name: 'Rozporządzenie określa sposoby i warunki ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów, zwanych dalej "obiektami".'}] },
{L: 4,num: '2.',name: 'Rozwiązania zamienne',children: [
{L: 5,num: '',name: 'W przypadkach szczególnie uzasadnionych uwarunkowaniami lokalnymi, wskazanymi w ekspertyzie technicznej rzeczoznawcy do spraw zabezpieczeń przeciwpożarowych, dopuszcza się, w uzgodnieniu z właściwym miejscowo komendantem wojewódzkim Państwowej Straży Pożarnej, stosowanie rozwiązań zamiennych w stosunku do wymienionych w § 19, § 23, § 24 i § 25 ust. 1, 2, 5 i 6 oraz w § 27 ust. 1 i 2, § 28 ust. 1, § 29 ust. 1 i § 38 ust. 1, zapewniających niepogorszenie warunków ochrony przeciwpożarowej obiektu.<br>'}] }] },
{L: 3,num: '§ 2.',name: 'Objaśnienia',children: [
{L: 4,num: '1.',name: 'Definicje',children: [
{L: 5,num: '',name: 'Ilekroć w rozporządzeniu jest mowa o: <br>1) materiałach niebezpiecznych pożarowo - należy przez to rozumieć: <br>a) gazy palne, <br>b) ciecze palne o temperaturze zapłonu poniżej 328,15 K (55 °C), <br>c) materiały wytwarzające w zetknięciu z wodą gazy palne, <br>d) materiały zapalające się samorzutnie na powietrzu, <br>e) materiały wybuchowe i wyroby pirotechniczne, <br>f) materiały ulegające samorzutnemu rozkładowi lub polimeryzacji, <br>g) materiały mające skłonności do samozapalenia, <br>h) materiały inne niż wymienione w lit. a-g, jeśli sposób ich składowania, przetwarzania lub innego wykorzystania może spowodować powstanie pożaru; <br>2) pasie przeciwpożarowym - należy przez to rozumieć system drzewostanów różnej szerokości poddanych specjalnym zabiegom gospodarczym i porządkowym lub powierzchni wylesionych i oczyszczonych do warstwy mineralnej; <br>3) pompowni przeciwpożarowej - należy przez to rozumieć pompownię zasilającą w wodę instalację lub sieć wodociągową przeciwpożarową; <br>4) pracach niebezpiecznych pod względem pożarowym - należy przez to rozumieć prace remontowo-budowlane związane z użyciem otwartego ognia, cięciem z wytwarzaniem iskier mechanicznych i spawaniem, prowadzone wewnątrz lub na dachach obiektów, na przyległych do nich terenach oraz placach składowych, a także prace remontowo-budowlane wykonywane w strefach zagrożonych wybuchem; <br>5) strefie pożarowej składowiska - należy przez to rozumieć powierzchnię składowiska oddzieloną od budynków, innych obiektów budowlanych i składowisk, w sposób określony dla budynków w przepisach rozporządzenia Ministra Infrastruktury z dnia 12 kwietnia 2002 r. w sprawie warunków technicznych, jakim powinny odpowiadać budynki i ich usytuowanie (Dz. U. Nr 75, poz. 690, z późn. zm.), zwanych dalej "przepisami techniczno-budowlanymi"; <br>6) strefie zagrożenia wybuchem - należy przez to rozumieć przestrzeń, w której może występować mieszanina wybuchowa substancji palnych z powietrzem lub innymi gazami utleniającymi, o stężeniu zawartym między dolną i górną granicą wybuchowości; <br>7) technicznych środkach zabezpieczenia przeciwpożarowego - należy przez to rozumieć urządzenia, sprzęt, instalacje i rozwiązania budowlane służące zapobieganiu powstawaniu i rozprzestrzenianiu się pożarów; <br>8) terenie przyległym - należy przez to rozumieć pas terenu wokół obiektu, o szerokości równej minimalnej dopuszczalnej odległości od innych obiektów z uwagi na wymagania bezpieczeństwa pożarowego określone w przepisach techniczno-budowlanych; <br>9) urządzeniach przeciwpożarowych - należy przez to rozumieć urządzenia (stałe lub półstałe, uruchamiane ręcznie lub samoczynnie) służące do zapobiegania powstaniu, wykrywania, zwalczania pożaru lub ograniczania jego skutków, a w szczególności: stałe i półstałe urządzenia gaśnicze i zabezpieczające, urządzenia inertyzujące, urządzenia wchodzące w skład dźwiękowego systemu ostrzegawczego i systemu sygnalizacji pożarowej, w tym urządzenia sygnalizacyjno-alarmowe, urządzenia odbiorcze alarmów pożarowych i urządzenia odbiorcze sygnałów uszkodzeniowych, instalacje oświetlenia ewakuacyjnego, hydranty wewnętrzne i zawory hydrantowe, hydranty zewnętrzne, pompy w pompowniach przeciwpożarowych, przeciwpożarowe klapy odcinające, urządzenia oddymiające, urządzenia zabezpieczające przed powstaniem wybuchu i ograniczające jego skutki, kurtyny dymowe oraz drzwi, bramy przeciwpożarowe i inne zamknięcia przeciwpożarowe, jeżeli są wyposażone w systemy sterowania, przeciwpożarowe wyłączniki prądu oraz dźwigi dla ekip ratowniczych; <br>10) zabezpieczeniu przed zadymieniem dróg ewakuacyjnych - należy przez to rozumieć zabezpieczenie przed utrzymywaniem się na drogach ewakuacyjnych dymu w ilości, która ze względu na ograniczenie widoczności, toksyczność lub temperaturę uniemożliwiałaby bezpieczną ewakuację; <br>11) zagrożeniu wybuchem - należy przez to rozumieć możliwość tworzenia przez palne gazy, pary palnych cieczy, pyły lub włókna palnych ciał stałych, w różnych warunkach, mieszanin z powietrzem, które pod wpływem czynnika inicjującego zapłon wybuchają, czyli ulegają gwałtownemu spalaniu połączonemu ze wzrostem ciśnienia.'}] },
{L: 4,num: '2.',name: 'Definicje',children: [
{L: 5,num: '',name: 'Ilekroć w rozporządzeniu użyto określeń dotyczących:<br>1) budynków - należy rozumieć przez to określenia zawarte w § 3 pkt 4-6 i 8 oraz § 209 ust. 1,<br>2) budynków produkcyjnych i magazynowych - należy rozumieć przez to określenie zawarte w § 209 ust. 1 pkt 2,<br>3) budynków inwentarskich - należy rozumieć przez to określenie zawarte w § 209 ust. 1 pkt 3,<br>4) grup wysokości - należy rozumieć przez to określenia zawarte w § 8,<br>5) kategorii zagrożenia ludzi - należy rozumieć przez to określenia zawarte w § 209 ust. 2,<br>6) kondygnacji - należy rozumieć przez to określenia zawarte w § 3 pkt 16-18,<br>7) stref pożarowych - należy rozumieć przez to określenie zawarte w § 226 ust. 1 i 2<br>- przepisów techniczno-budowlanych;<br>8) paliwie płynnym klasy III - należy rozumieć przez to określenie zawarte w § 2 pkt 3 rozporządzenia Ministra Gospodarki z dnia 21 listopada 2005 r. w sprawie warunków technicznych, jakim powinny odpowiadać bazy i stacje paliw płynnych, rurociągi przesyłowe dalekosiężne służące do transportu ropy naftowej i produktów naftowych i ich usytuowanie (Dz. U. Nr 243, poz. 2063 oraz z 2007 r. Nr 240, poz. 1753).'}] }] },
{L: 3,num: '§ 3.',name: 'Próby i badania urządzeń ppoż',children: [
{L: 4,num: '1.',name: 'Wykonanie urządzeń ppoż i warunki dopuszczenia',children: [
{L: 5,num: '',name: 'Urządzenia przeciwpożarowe w obiekcie powinny być wykonane zgodnie z projektem uzgodnionym przez rzeczoznawcę do spraw zabezpieczeń przeciwpożarowych, a warunkiem dopuszczenia do ich użytkowania jest przeprowadzenie odpowiednich dla danego urządzenia prób i badań, potwierdzających prawidłowość ich działania.'}] },
{L: 4,num: '2.',name: 'Przegląd i konserwacja',children: [
{L: 5,num: '',name: 'Urządzenia przeciwpożarowe oraz gaśnice przenośne i przewoźne, zwane dalej "gaśnicami", powinny być poddawane przeglądom technicznym i czynnościom konserwacyjnym, zgodnie z zasadami i w sposób określony w Polskich Normach dotyczących urządzeń przeciwpożarowych i gaśnic, w dokumentacji techniczno-ruchowej oraz w instrukcjach obsługi, opracowanych przez ich producentów.'}] },
{L: 4,num: '3.',name: 'Częstotliwość przeglądów i konserwacji',children: [
{L: 5,num: '',name: 'Przeglądy techniczne i czynności konserwacyjne powinny być przeprowadzane w okresach ustalonych przez producenta, nie rzadziej jednak niż raz w roku.'}] },
{L: 4,num: '4.',name: 'Próby ciśnieniowe węży',children: [
{L: 5,num: '',name: 'Węże stanowiące wyposażenie hydrantów wewnętrznych powinny być raz na 5 lat poddawane próbie ciśnieniowej na maksymalne ciśnienie robocze, zgodnie z Polską Normą dotyczącą konserwacji hydrantów wewnętrznych.'}] }] }] },
{L: 2,num: 'Rozdział 2.',name: 'Czynności zabronione i obowiązki',children: [
{L: 3,num: '§ 4.',name: 'Czynności zabronione i obowiązki',children: [
{L: 4,num: '1.',name: 'Zabronione czynności',children: [
{L: 5,num: '',name: 'W obiektach oraz na terenach przyległych do nich jest zabronione wykonywanie następujących czynności, które mogą spowodować pożar, jego rozprzestrzenianie się, utrudnienie prowadzenia działania ratowniczego lub ewakuacji:<br>1) używanie otwartego ognia, palenie tytoniu i stosowanie innych czynników mogących zainicjować zapłon materiałów występujących:<br>a) w strefie zagrożenia wybuchem, z wyjątkiem urządzeń przeznaczonych do tego celu, spełniających wymagania określone w przepisach rozporządzenia Ministra Gospodarki z dnia 22 grudnia 2005 r. w sprawie zasadniczych wymagań dla urządzeń i systemów ochronnych przeznaczonych do użytku w przestrzeniach zagrożonych wybuchem (Dz. U. Nr 263, poz. 2203),<br>b) w miejscach występowania materiałów niebezpiecznych pożarowo;<br>2) użytkowanie instalacji, urządzeń i narzędzi niesprawnych technicznie lub w sposób niezgodny z przeznaczeniem albo warunkami określonymi przez producenta bądź niepoddawanych okresowym kontrolom, o zakresie i częstotliwości wynikających z przepisów prawa budowlanego, jeżeli może się to przyczynić do powstania pożaru, wybuchu lub rozprzestrzenienia ognia;<br>3) garażowanie pojazdów silnikowych w obiektach i pomieszczeniach nieprzeznaczonych do tego celu, jeżeli nie opróżniono zbiornika paliwa pojazdu i nie odłączono na stałe zasilania akumulatorowego pojazdu;<br>4) rozgrzewanie za pomocą otwartego ognia smoły i innych materiałów w odległości mniejszej niż 5 m od obiektu, przyległego do niego składowiska lub placu składowego z materiałami palnymi, przy czym jest dopuszczalne wykonywanie tych czynności na dachach o konstrukcji i pokryciu niepalnym w budowanych obiektach, a w pozostałych, jeżeli zostaną zastosowane odpowiednie, przeznaczone do tego celu podgrzewacze;<br>5) rozpalanie ognia, wysypywanie gorącego popiołu i żużla lub wypalanie wierzchniej warstwy gleby i traw, w miejscu umożliwiającym zapalenie się materiałów palnych albo sąsiednich obiektów;<br>6) składowanie poza budynkami w odległości mniejszej niż 4 m od granicy działki sąsiedniej materiałów palnych, w tym pozostałości roślinnych, gałęzi i chrustu;<br>7) użytkowanie elektrycznych urządzeń ogrzewczych ustawionych bezpośrednio na podłożu palnym, z wyjątkiem urządzeń eksploatowanych zgodnie z warunkami określonymi przez producenta;<br>8) przechowywanie materiałów palnych oraz stosowanie elementów wystroju i wyposażenia wnętrz z materiałów palnych w odległości mniejszej niż 0,5 m od:<br>a) urządzeń i instalacji, których powierzchnie zewnętrzne mogą nagrzewać się do temperatury przekraczającej 373,15 K (100 °C),<br>b) linii kablowych o napięciu powyżej 1 kV, przewodów uziemiających oraz przewodów odprowadzających instalacji piorunochronnej oraz czynnych rozdzielnic prądu elektrycznego, przewodów elektrycznych siłowych i gniazd wtykowych siłowych o napięciu powyżej 400 V;<br>9) stosowanie na osłony punktów świetlnych materiałów palnych, z wyjątkiem materiałów trudno zapalnych i niezapalnych, jeżeli zostaną umieszczone w odległości co najmniej 0,05 m od żarówki;<br>10) instalowanie opraw oświetleniowych oraz osprzętu instalacji elektrycznych, takich jak wyłączniki, przełączniki, gniazda wtyczkowe, bezpośrednio na podłożu palnym, jeżeli ich konstrukcja nie zabezpiecza podłoża przed zapaleniem;<br>11) składowanie materiałów palnych na drogach komunikacji ogólnej służących ewakuacji lub umieszczanie przedmiotów na tych drogach w sposób zmniejszający ich szerokość albo wysokość poniżej wymaganych wartości określonych w przepisach techniczno-budowlanych;<br>12) składowanie materiałów palnych w pomieszczeniach technicznych, na nieużytkowych poddaszach i strychach oraz na drogach komunikacji ogólnej w piwnicach;<br>13) przechowywanie pełnych, niepełnych i opróżnionych butli przeznaczonych do gazów palnych na nieużytkowych poddaszach i strychach oraz w piwnicach;<br>14) zamykanie drzwi ewakuacyjnych w sposób uniemożliwiający ich natychmiastowe użycie w przypadku pożaru lub innego zagrożenia powodującego konieczność ewakuacji;<br>15) blokowanie drzwi i bram przeciwpożarowych w sposób uniemożliwiający ich samoczynne zamknięcie w przypadku powstania pożaru;<br>16) lokalizowanie elementów wystroju wnętrz, instalacji i urządzeń w sposób zmniejszający wymiary drogi ewakuacyjnej poniżej wartości wymaganych w przepisach techniczno-budowlanych;<br>17) wykorzystywanie drogi ewakuacyjnej z sali widowiskowej lub innej o podobnym przeznaczeniu, w której następuje jednoczesna wymiana publiczności lub użytkowników, jako miejsca oczekiwania na wejście do tej sali;<br>18) uniemożliwianie lub ograniczanie dostępu do:<br>a) gaśnic i urządzeń przeciwpożarowych,<br>b) przeciwwybuchowych urządzeń odciążających,<br>c) źródeł wody do celów przeciwpożarowych,<br>d) urządzeń uruchamiających instalacje gaśnicze i sterujących takimi instalacjami oraz innymi instalacjami wpływającymi na stan bezpieczeństwa pożarowego obiektu,<br>e) wyjść ewakuacyjnych albo okien dla ekip ratowniczych,<br>f) wyłączników i tablic rozdzielczych prądu elektrycznego oraz kurków głównych instalacji gazowej,<br>g) krat zewnętrznych i okiennic, które zgodnie z przepisami techniczno-budowlanymi powinny otwierać się od wewnątrz mieszkania lub pomieszczenia;<br>19) napełnianie gazem płynnym butli na stacjach paliw, stacjach gazu płynnego i w innych obiektach nieprzeznaczonych do tego celu;<br>20) dystrybucja i przeładunek ropy naftowej i produktów naftowych w obiektach i na terenach nieprzeznaczonych do tego celu.'}] },
{L: 4,num: '2.',name: 'Obowiązki właścicieli',children: [
{L: 5,num: '',name: 'Właściciele, zarządcy lub użytkownicy budynków oraz placów składowych i wiat, z wyjątkiem budynków mieszkalnych jednorodzinnych:<br>1) utrzymują urządzenia przeciwpożarowe i gaśnice w stanie pełnej sprawności technicznej i funkcjonalnej;<br>2) wyposażają obiekty w przeciwpożarowe wyłączniki prądu zgodnie z przepisami techniczno-budowlanymi;<br>3) umieszczają w widocznych miejscach instrukcje postępowania na wypadek pożaru wraz z wykazem telefonów alarmowych;<br>4) oznakowują znakami zgodnymi z Polskimi Normami:<br>a) drogi i wyjścia ewakuacyjne z wyłączeniem budynków mieszkalnych oraz pomieszczenia, w których zgodnie z przepisami techniczno-budowlanymi są wymagane co najmniej 2 wyjścia ewakuacyjne, w sposób zapewniający dostarczenie informacji niezbędnych do ewakuacji,<br>b) miejsca usytuowania urządzeń przeciwpożarowych i gaśnic,<br>c) miejsca usytuowania elementów sterujących urządzeniami przeciwpożarowymi,<br>d) miejsca usytuowania nasady umożliwiającej zasilanie instalacji wodociągowej przeciwpożarowej, kurków głównych instalacji gazowej oraz materiałów niebezpiecznych pożarowo,<br>e) pomieszczenia i tereny z materiałami niebezpiecznymi pożarowo,<br>f) drabiny ewakuacyjne, rękawy ratownicze, pojemniki z maskami ucieczkowymi, miejsca zbiórki do ewakuacji, miejsca lokalizacji kluczy do wyjść ewakuacyjnych,<br>g) dźwigi dla straży pożarnej,<br>h) przeciwpożarowe zbiorniki wodne, zbiorniki technologiczne stanowiące uzupełniające źródło wody do celów przeciwpożarowych, punkty poboru wody, stanowiska czerpania wody,<br>i) drzwi przeciwpożarowe,<br>j) drogi pożarowe,<br>k) miejsca zaklasyfikowane jako strefy zagrożenia wybuchem;<br>5) umieszczają, przy wjazdach do garaży zamkniętych z podłogą znajdującą się poniżej poziomu terenu, czytelną informację o dopuszczeniu lub niedopuszczeniu parkowania w tych garażach samochodów zasilanych gazem płynnym propan-butan, o których mowa w przepisach techniczno-budowlanych.'}] },
{L: 4,num: '3.',name: 'Składowiska',children: [
{L: 5,num: '',name: 'Wokół placów składowych i składowisk przy obiektach oraz przy obiektach tymczasowych o konstrukcji palnej musi być zachowany pas ochronny o minimalnej szerokości 2 m i nawierzchni z materiałów niepalnych lub gruntowej oczyszczonej.'}] },
{L: 4,num: '4.',name: 'Składowanie materiałów palnych',children: [
{L: 5,num: '',name: 'Składowanie materiałów palnych pod ścianami obiektu związanych z jego funkcją, z wyjątkiem materiałów niebezpiecznych pożarowo, jest dopuszczalne pod warunkiem:<br>1) nieprzekroczenia maksymalnej powierzchni strefy pożarowej, określonej dla tego obiektu;<br>2) zachowania dostępu do obiektu na wypadek działań ratowniczych;<br>3) nienaruszenia minimalnej odległości od obiektów sąsiednich, wymaganej z uwagi na bezpieczeństwo pożarowe;<br>4) zachowania minimalnej odległości 5 m od drogi pożarowej.'}] },
{L: 4,num: '5.',name: 'Gaz płynny',children: [
{L: 5,num: '',name: 'Właściciele, zarządcy i użytkownicy stacji paliw umieszczają na odmierzaczu gazu płynnego informacje o nienapełnianiu butli.'}] },
{L: 4,num: '6.',name: 'Pyły palne',children: [
{L: 5,num: '',name: 'Właściciele, zarządcy i użytkownicy obiektów produkcyjnych i magazynowych przeprowadzają regularne czynności porządkowe w miejscach, w których występują pyły palne zalegające w warstwach, zgodnie z zasadami określonymi w Polskich Normach.'}] }] },
{L: 3,num: '§ 5.',name: 'Utrzymanie dróg pożarowych',children: [
{L: 4,num: '1.',name: 'Właściele i zarządcy',children: [
{L: 5,num: '',name: 'Właściciele lub zarządcy terenów utrzymują znajdujące się na nich drogi pożarowe w stanie umożliwiającym wykorzystanie tych dróg przez pojazdy jednostek ochrony przeciwpożarowej zgodnie z przepisami dotyczącymi przeciwpożarowego zaopatrzenia w wodę oraz dróg pożarowych.'}] }] },
{L: 3,num: '§ 6.',name: 'Instrukcja bezpieczeństwa pożarowego',children: [
{L: 4,num: '1.',name: 'Zawartość',children: [
{L: 5,num: '',name: 'Właściciele, zarządcy lub użytkownicy obiektów bądź ich części stanowiących odrębne strefy pożarowe, przeznaczonych do wykonywania funkcji użyteczności publicznej, zamieszkania zbiorowego, produkcyjnych, magazynowych oraz inwentarskich, zapewniają i wdrażają instrukcję bezpieczeństwa pożarowego, zawierającą:<br>1) warunki ochrony przeciwpożarowej, wynikające z przeznaczenia, sposobu użytkowania, prowadzonego procesu technologicznego, magazynowania (składowania) i warunków technicznych obiektu, w tym zagrożenia wybuchem;<br>2) określenie wyposażenia w wymagane urządzenia przeciwpożarowe i gaśnice oraz sposoby poddawania ich przeglądom technicznym i czynnościom konserwacyjnym;<br>3) sposoby postępowania na wypadek pożaru i innego zagrożenia;<br>4) sposoby zabezpieczenia prac niebezpiecznych pod względem pożarowym, jeżeli takie prace są przewidywane;<br>5) warunki i organizację ewakuacji ludzi oraz praktyczne sposoby ich sprawdzania;<br>6) sposoby zapoznania użytkowników obiektu, w tym zatrudnionych pracowników, z przepisami przeciwpożarowymi oraz treścią przedmiotowej instrukcji;<br>7) zadania i obowiązki w zakresie ochrony przeciwpożarowej dla osób będących ich stałymi użytkownikami;<br>8) plany obiektów, obejmujące także ich usytuowanie, oraz terenu przyległego, z uwzględnieniem graficznych danych dotyczących w szczególności:<br>a) powierzchni, wysokości i liczby kondygnacji budynku,<br>b) odległości od obiektów sąsiadujących,<br>c) parametrów pożarowych występujących substancji palnych,<br>d) występującej gęstości obciążenia ogniowego w strefie pożarowej lub w strefach pożarowych,<br>e) kategorii zagrożenia ludzi, przewidywanej liczby osób na każdej kondygnacji i w poszczególnych pomieszczeniach,<br>f) lokalizacji pomieszczeń i przestrzeni zewnętrznych zaklasyfikowanych jako strefy zagrożenia wybuchem,<br>g) podziału obiektu na strefy pożarowe,<br>h) warunków ewakuacji, ze wskazaniem kierunków i wyjść ewakuacyjnych,<br>i) miejsc usytuowania urządzeń przeciwpożarowych i gaśnic, kurków głównych instalacji gazowej, materiałów niebezpiecznych pożarowo oraz miejsc usytuowania elementów sterujących urządzeniami przeciwpożarowymi,<br>j) wskazania dojść do dźwigów dla ekip ratowniczych,<br>k) hydrantów zewnętrznych oraz innych źródeł wody do celów przeciwpożarowych,<br>l) dróg pożarowych i innych dróg dojazdowych, z zaznaczeniem wjazdów na teren ogrodzony;<br>9) wskazanie osób lub podmiotów opracowujących instrukcję.'}] },
{L: 4,num: '2.',name: 'Przekazanie informacji do PSP',children: [
{L: 5,num: '',name: 'Warunki ochrony przeciwpożarowej, o których mowa w ust. 1 pkt 1, oraz plany, o których mowa w ust. 1 pkt 8, w stosunku do obiektów i terenów wymienionych w § 28 ust. 1, są przekazywane do właściwego miejscowo komendanta powiatowego (miejskiego) Państwowej Straży Pożarnej w celu ich wykorzystania na potrzeby planowania, organizacji i prowadzenia działań ratowniczych.'}] },
{L: 4,num: '3.',name: 'Przechowywanie dokumentów',children: [
{L: 5,num: '',name: 'Sposób przechowywania dokumentów, o których mowa w ust. 2, powinien zapewnić możliwość ich natychmiastowego wykorzystania na potrzeby prowadzenia działań ratowniczych.'}] },
{L: 4,num: '4.',name: 'Zwolnienie z obowiązku',children: [
{L: 5,num: '',name: 'Komendant powiatowy (miejski) Państwowej Straży Pożarnej może zwolnić właściciela, zarządcę lub użytkownika obiektu z przekazania dokumentów, o których mowa w ust. 2, jeżeli nie spowoduje to niespełnienia wymagań, o których mowa w ust. 3, oraz żądać ich uzupełnienia w uzasadnionych przypadkach.'}] },
{L: 4,num: '5.',name: 'Przekazanie elektroniczne',children: [
{L: 5,num: '',name: 'Dokumenty, o których mowa w ust. 2, mogą być przekazywane w formie elektronicznej.'}] },
{L: 4,num: '6.',name: 'Część instrukcji technologiczno-ruchowej',children: [
{L: 5,num: '',name: 'Instrukcja, o której mowa w ust. 1, może stanowić w obiektach produkcyjnych, magazynowych i inwentarskich część instrukcji technologiczno-ruchowej, a w obiektach znajdujących się na terenach zamkniętych, służących obronności państwa oraz obiektach zlokalizowanych na terenach zakładów karnych i aresztów śledczych część planu ochrony lub działań ratowniczych.'}] },
{L: 4,num: '7.',name: 'Aktualizacja',children: [
{L: 5,num: '',name: 'Instrukcja bezpieczeństwa pożarowego jest poddawana okresowej aktualizacji, co najmniej raz na 2 lata, a także po takich zmianach sposobu użytkowania obiektu lub procesu technologicznego, które wpływają na zmianę warunków ochrony przeciwpożarowej.'}] },
{L: 4,num: '8.',name: 'Zwolnienie z obowiązku wykonania instrukcji',children: [
{L: 5,num: '',name: 'Instrukcja bezpieczeństwa pożarowego nie jest wymagana dla obiektów lub ich części, o których mowa w ust. 1, jeżeli nie występuje w nich strefa zagrożenia wybuchem, a ponadto: <br>1) kubatura brutto budynku lub jego części stanowiącej odrębną strefę pożarową nie przekracza 1 000 m3, z zastrzeżeniem pkt 2; <br>2) kubatura brutto budynku inwentarskiego nie przekracza 1 500 m3; <br>3) powierzchnia strefy pożarowej obiektu innego niż budynek nie przekracza 1 000 m2.'}] },
{L: 4,num: '9.',name: 'Umiejscowienie',children: [
{L: 5,num: '',name: 'Instrukcja bezpieczeństwa pożarowego powinna się znajdować w miejscach dostępnych dla ekip ratowniczych.'}] }] }] },
{L: 2,num: 'Rozdział 3.',name: 'Materiały niebezpieczne pożarowo',children: [
{L: 3,num: '§ 7.',name: 'Przechowywanie i używanie',children: [
{L: 4,num: '1.',name: 'Uwagi ogólne',children: [
{L: 5,num: '',name: 'Przy używaniu lub przechowywaniu materiałów niebezpiecznych pożarowo należy:<br>1) wykonywać wszystkie czynności związane z wytwarzaniem, przetwarzaniem, obróbką, transportem lub składowaniem materiałów niebezpiecznych zgodnie z warunkami ochrony przeciwpożarowej określonymi w instrukcji bezpieczeństwa pożarowego, o której mowa w § 6, lub zgodnie z warunkami określonymi przez producenta;<br>2) utrzymywać na stanowisku pracy ilość materiału niebezpiecznego pożarowo nie większą niż dobowe zapotrzebowanie lub dobowa produkcja, jeżeli przepisy szczególne nie stanowią inaczej;<br>3) przechowywać zapas materiałów niebezpiecznych pożarowo przekraczający wielkość określoną w pkt 2 w oddzielnym magazynie przystosowanym do takiego celu;<br>4) przechowywać materiały niebezpieczne pożarowo w sposób uniemożliwiający powstanie pożaru lub wybuchu w następstwie procesu składowania lub wskutek wzajemnego oddziaływania;<br>5) przechowywać ciecze o temperaturze zapłonu poniżej 328,15 K (55 °C) wyłącznie w pojemnikach, urządzeniach i instalacjach przystosowanych do tego celu, wykonanych z materiałów co najmniej trudno zapalnych, odprowadzających ładunki elektryczności statycznej, wyposażonych w szczelne zamknięcia i zabezpieczonych przed stłuczeniem.'}] },
{L: 4,num: '2.',name: 'Zabronione miejsca przechowywania',children: [
{L: 5,num: '',name: 'Materiałów niebezpiecznych pożarowo nie przechowuje się w pomieszczeniach piwnicznych, na poddaszach i strychach, w obrębie klatek schodowych i korytarzy oraz w innych pomieszczeniach ogólnie dostępnych, jak również na tarasach, balkonach i loggiach.'}] }] },
{L: 3,num: '§ 8.',name: 'Ciecze o wysokiej temperaturze',children: [
{L: 4,num: '1.',name: 'Przechowywanie cieczy o temp. zapłonu <55',children: [
{L: 5,num: '',name: 'Podczas przechowywania cieczy o temperaturze zapłonu poniżej 328,15 K (55 °C) w budynkach, w strefach pożarowych zaliczonych do kategorii zagrożenia ludzi:<br>1) jest dopuszczalne przechowywanie w jednej strefie pożarowej, zakwalifikowanej do kategorii zagrożenia ludzi innej niż ZL IV oraz o przeznaczeniu innym niż handlowo-usługowe do 10 dm3 cieczy o temperaturze zapłonu poniżej 294,15 K (21 °C) oraz do 50 dm3 cieczy o temperaturze zapłonu 294,15÷328,15 K (21÷55 °C), a w mieszkaniach odpowiednio do 5 i do 20 dm3 cieczy;<br>2) jest dopuszczalne przechowywanie w pomieszczeniach handlowo-usługowych cieczy o temperaturze zapłonu do 328,15 K (55 °C) w takiej ilości, że gęstość obciążenia ogniowego stworzona przez te ciecze nie przekroczy 500 MJ/m2;<br>3) jest dopuszczalne przechowywanie w pomieszczeniach handlowo-usługowych stanowiących odrębną strefę pożarową cieczy palnych w ilościach większych niż określone w pkt 2, pod warunkiem spełniania przez te pomieszczenia wymagań techniczno-budowlanych dotyczących stref pożarowych produkcyjnych i magazynowych;<br>4) w pomieszczeniach handlowo-usługowych ciecze palne powinny być przechowywane w szczelnych naczyniach, zabezpieczonych przed stłuczeniem, a ich sprzedaż należy prowadzić bez rozlewania.'}] },
{L: 4,num: '2.',name: 'Przechowywanie cieczy o temp. zapłonu <100',children: [
{L: 5,num: '',name: 'Podczas przechowywania cieczy o temperaturze zapłonu poniżej 373,15 K (100 °C) w garażach:<br>1) o powierzchni powyżej 100 m2 jest dopuszczalne przechowywanie tych cieczy tylko wtedy, gdy są niezbędne przy eksploatacji pojazdu i są przechowywane w jednostkowych opakowaniach stosowanych w handlu detalicznym;<br>2) nie jest dopuszczalne przelewanie paliwa oraz napełnianie nim zbiorników paliwa w pojazdach;<br>3) wolno stojących wykonanych z materiałów niepalnych o powierzchni do 100 m2 jest dopuszczalne przechowywanie do 200 dm3 cieczy o temperaturze zapłonu poniżej 328,15 K (55 °C);<br>4) o powierzchni do 100 m2 innych niż wymienione w pkt 3 jest dopuszczalne przechowywanie do 20 dm3 cieczy o temperaturze zapłonu poniżej 294,15 K (21 °C) lub do 60 dm3 cieczy o temperaturze zapłonu 294,15÷373,15 K (21÷100 °C);<br>5) ciecze powinny być przechowywane w naczyniach metalowych lub innych dopuszczonych do tego celu, posiadających szczelne zamknięcia.'}] }] },
{L: 3,num: '§ 9.',name: 'Wyroby pirotechniczne',children: [
{L: 4,num: '1.',name: 'Sprzedaż detaliczna',children: [
{L: 5,num: '',name: 'Prowadzenie detalicznej sprzedaży wyrobów pirotechnicznych widowiskowych w budynkach odbywa się wyłącznie na stanowiskach wyodrębnionych do tego celu bez możliwości sprzedaży samoobsługowej.'}] },
{L: 4,num: '2.',name: 'Przechowywanie',children: [
{L: 5,num: '',name: 'Wyroby pirotechniczne widowiskowe przechowuje się w oddzielnych magazynach lub pomieszczeniach zaplecza, przeznaczonych wyłącznie do tego celu, wydzielonych ścianami wewnętrznymi i stropami o klasie odporności ogniowej odpowiednio co najmniej EI 60 i REI 60 i zamykanych drzwiami o klasie odporności ogniowej co najmniej EI 30.'}] },
{L: 4,num: '3.',name: 'Wymagania dla pomieszczeń',children: [
{L: 5,num: '',name: 'Szczegółowe wymagania dotyczące pomieszczeń, w których prowadzi się obrót wyrobami, o których mowa w ust. 2, określają przepisy wydane na podstawie art. 24 pomieszczenia magazynowe ust. 2 i art. 33 rozporządzenie w sprawie obiektów do przechowywania materiałów wybuchowych ust. 2 ustawy z dnia 22 czerwca 2001 r. o wykonywaniu działalności gospodarczej w zakresie wytwarzania i obrotu materiałami wybuchowymi, bronią, amunicją oraz wyrobami i technologią o przeznaczeniu wojskowym lub policyjnym (Dz. U. Nr 67, poz. 679, z późn. zm.) oraz przepisy rozporządzenia Ministra Gospodarki, Pracy i Polityki Społecznej z dnia 9 lipca 2003 r. w sprawie bezpieczeństwa i higieny pracy przy produkcji, transporcie wewnątrzzakładowym oraz obrocie materiałów wybuchowych, w tym wyrobów pirotechnicznych (Dz. U. Nr 163, poz. 1577).<br>'}] }] },
{L: 3,num: '§ 10.',name: 'Gaz płynny',children: [
{L: 4,num: '1.',name: 'Użytkowanie butli',children: [
{L: 5,num: '',name: 'Wymagania dotyczące użytkowania butli z gazem płynnym do zasilania urządzeń i instalacji gazowych w budynkach określają przepisy techniczno-budowlane.'}] },
{L: 4,num: '2.',name: 'Tymczasowy obiekt lub teren',children: [
{L: 5,num: '',name: 'W strefie pożarowej, obejmującej tymczasowy obiekt budowlany lub teren, określanej tak jak strefa pożarowa składowiska, dopuszcza się użytkowanie i przechowywanie nie więcej niż 2 butli z gazem płynnym, o zawartości gazu do 11 kg każda, przy czym w przypadku butli turystycznych o zawartości gazu do 5 kg jego łączna masa zgromadzona w butlach nie może przekraczać 22 kg.'}] }] },
{L: 3,num: '§ 11.',name: 'Paliwa płynne klasy III',children: [
{L: 4,num: '1.',name: 'Przechowywanie',children: [
{L: 5,num: '',name: 'Dopuszcza się przechowywanie paliw płynnych klasy III, na potrzeby własne użytkownika, w zbiorniku naziemnym dwu płaszczowym o pojemności do 5 m3.'}] },
{L: 4,num: '2.',name: 'Usytuowanie zbiornika',children: [
{L: 5,num: '',name: 'Zbiornik do przechowywania paliw płynnych klasy III na potrzeby własne użytkownika, o którym mowa w ust. 1, należy sytuować z zachowaniem następujących odległości: <br>1) 10 m - od budynków mieszkalnych i budynków użyteczności publicznej; <br>2) 5 m - od innych obiektów budowlanych i od granicy działki sąsiedniej.'}] },
{L: 4,num: '3.',name: 'Złagodzenia',children: [
{L: 5,num: '',name: 'Odległości, o których mowa w ust. 2, mogą być zmniejszone o połowę, pod warunkiem zastosowania pomiędzy budynkiem lub obiektem a zbiornikiem ściany oddzielenia przeciwpożarowego o klasie odporności ogniowej co najmniej REI 120 zasłaniającej zbiornik od strony budynku lub obiektu.'}] },
{L: 4,num: '4.',name: 'Dopuszczenia dla ścian zewnętrznych',children: [
{L: 5,num: '',name: 'Dopuszcza się wykonanie ściany zewnętrznej budynku lub obiektu od strony zbiornika jako ściany oddzielenia przeciwpożarowego, o której mowa w ust. 3.'}] }] },
{L: 3,num: '§ 12.',name: 'Usytuowanie butli z gazem',children: [
{L: 4,num: '1.',name: 'Gazy palne i karbid',children: [
{L: 5,num: '',name: 'Pomieszczenia magazynowe przeznaczone do składowania gazów palnych lub karbidu muszą spełniać wymagania określone dla pomieszczeń zagrożonych wybuchem.'}] },
{L: 4,num: '2.',name: 'Ochrona butli z gazami',children: [
{L: 5,num: '',name: 'Pomieszczenie magazynowe butli z gazami palnymi należy chronić przed ogrzaniem do temperatury przekraczającej 308,15 K (35 °C).'}] },
{L: 4,num: '3.',name: 'Usytuowanie butli na zewnątrz',children: [
{L: 5,num: '',name: 'Dopuszcza się sytuowanie na zewnątrz budynków produkcyjnych i magazynowych, w miejscu obudowanym z trzech stron pełnymi ścianami o klasie odporności ogniowej co najmniej REI 120, do dwóch wiązek butli z gazem palnym, zawierających maksymalnie po 16 butli każda, połączonych wspólnym kolektorem ze stacjami rozprężania.'}] },
{L: 4,num: '4.',name: 'Usytuowanie',children: [
{L: 5,num: '',name: 'Butle, o których mowa w ust. 3, zawierające gaz płynny, muszą być oddalone od najbliższych studzienek lub innych zagłębień terenu oraz otworów do pomieszczeń z podłogą znajdującą się poniżej przyległego terenu co najmniej o 3 m.'}] }] },
{L: 3,num: '§ 13.',name: 'Butle z gazem palnym',children: [
{L: 4,num: '1.',name: 'Oznaczenie butli',children: [
{L: 5,num: '',name: 'Butle przeznaczone do przechowywania i transportu gazów palnych oznacza się zgodnie z Polskimi Normami.'}] },
{L: 4,num: '2.',name: 'Przechowywanie',children: [
{L: 5,num: '',name: 'Butle z gazami palnymi należy przechowywać w pomieszczeniach przeznaczonych wyłącznie do tego celu.'}] },
{L: 4,num: '3.',name: 'Ograniczenia przechowywania',children: [
{L: 5,num: '',name: 'W jednym pomieszczeniu mogą być magazynowane:<br>1) butle z gazami palnymi oraz z gazami niepalnymi, nietrującymi, z wyjątkiem gazów utleniających;<br>2) butle opróżnione z butlami napełnionymi gazem palnym, pod warunkiem ich oddzielnego ustawienia.'}] },
{L: 4,num: '4.',name: 'Ustawienie',children: [
{L: 5,num: '',name: 'Butle z gazami palnymi, pełne lub opróżnione, posiadające stopy, należy ustawiać jednowarstwowo w pozycji pionowej, segregując je według zawartości.'}] },
{L: 4,num: '5.',name: 'Butle nieposiadające stóp',children: [
{L: 5,num: '',name: 'Butle z gazami palnymi nieposiadające stóp należy magazynować w drewnianych ramach w pozycji poziomej; dopuszcza się układanie butli w stosy o wysokości do 1,5 m.'}] },
{L: 4,num: '6.',name: 'Zabezpieczenie przed upadkiem',children: [
{L: 5,num: '',name: 'Butle należy zabezpieczyć przed upadkiem, stosując bariery, przegrody lub inne środki ochronne, a zawory butli zabezpieczyć kołpakami.'}] },
{L: 4,num: '7.',name: 'Składowanie i magazynowanie',children: [
{L: 5,num: '',name: 'Szczegółowe wymagania dotyczące składowania i magazynowania butli z gazem płynnym określa rozporządzenie Ministra Gospodarki z dnia 6 września 1999 r. w sprawie bezpieczeństwa i higieny pracy przy magazynowaniu, napełnianiu i rozprowadzaniu gazów płynnych (Dz. U. Nr 75, poz. 846, z 2000 r. Nr 29, poz. 366 oraz z 2004 r. Nr 43, poz. 395).'}] }] },
{L: 3,num: '§ 14.',name: 'Butle z gazem płynnym',children: [
{L: 4,num: '1.',name: 'Punkty sprzedaży',children: [
{L: 5,num: '',name: 'W punktach sprzedaży przyborów gazowych gaz płynny można składować w butlach o łącznej masie gazu do 70 kg.'}] },
{L: 4,num: '2.',name: 'Handlowe sieci detaliczne',children: [
{L: 5,num: '',name: 'W handlowej sieci detalicznej, poza stacjami paliw, butle można składować w kontenerach o konstrukcji ażurowej. Kontenery te, o łącznej masie gazu w butlach do 440 kg, powinny być ustawiane w odległości co najmniej:<br>1) 8 m - od budynków użyteczności publicznej, zamieszkania zbiorowego i mieszkalnych, a także od innych budynków, jeżeli ich konstrukcja wykonana jest z elementów palnych;<br>2) 3 m - od pozostałych budynków, od studzienek i innych zagłębień terenu oraz od granicy działki.'}] },
{L: 4,num: '3.',name: 'Składowanie w kontenerach',children: [
{L: 5,num: '',name: 'Butle można składować w kontenerach przy ścianie budynku o klasie odporności ogniowej co najmniej REI 120, w odległości co najmniej 2 m w poziomie i co najmniej 9 m w pionie od znajdujących się w niej otworów okiennych i drzwiowych.'}] },
{L: 4,num: '4.',name: 'Wymogi dotyczące urządzeń chroniących',children: [
{L: 5,num: '',name: 'Magazyny i rozlewnie gazu płynnego oraz bazy i stacje paliw płynnych muszą być wyposażone w urządzenia i instalacje spełniające wymagania określone w przepisach rozporządzenia Ministra Gospodarki z dnia 21 listopada 2005 r. w sprawie warunków technicznych, jakim powinny odpowiadać bazy i stacje paliw płynnych, rurociągi przesyłowe dalekosiężne służące do transportu ropy naftowej i produktów naftowych i ich usytuowanie.'}] }] }] },
{L: 2,num: 'Rozdział 4.',name: 'Ewakuacja',children: [
{L: 3,num: '§ 15.',name: 'Wymagania',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'Z każdego miejsca w obiekcie, przeznaczonego do przebywania ludzi, zapewnia się odpowiednie warunki ewakuacji, umożliwiające szybkie i bezpieczne opuszczanie strefy zagrożonej lub objętej pożarem, dostosowane do liczby i stanu sprawności osób przebywających w obiekcie oraz jego funkcji, konstrukcji i wymiarów, a także zastosowanie technicznych środków zabezpieczenia przeciwpożarowego, polegających na:<br>1) zapewnieniu dostatecznej liczby, wysokości i szerokości wyjść ewakuacyjnych;<br>2) zachowaniu dopuszczalnej długości, wysokości i szerokości przejść oraz dojść ewakuacyjnych;<br>3) zapewnieniu bezpiecznej pożarowo obudowy i wydzieleń dróg ewakuacyjnych oraz pomieszczeń;<br>4) zabezpieczeniu przed zadymieniem wymienionych w przepisach techniczno-budowlanych dróg ewakuacyjnych, w tym: na stosowaniu urządzeń zapobiegających zadymieniu lub urządzeń i innych rozwiązań techniczno-budowlanych zapewniających usuwanie dymu;<br>5) zapewnieniu oświetlenia awaryjnego (ewakuacyjnego i zapasowego) w pomieszczeniach i na drogach ewakuacyjnych wymienionych w przepisach techniczno-budowlanych;<br>6) zapewnieniu możliwości rozgłaszania sygnałów ostrzegawczych i komunikatów głosowych przez dźwiękowy system ostrzegawczy w budynkach, dla których jest on wymagany.'}] },
{L: 4,num: '2.',name: 'Przepisy',children: [
{L: 5,num: '',name: 'Odpowiednie warunki ewakuacji określają przepisy techniczno-budowlane.'}] }] },
{L: 3,num: '§ 16.',name: 'Budynek zagrażający życiu ludzi',children: [
{L: 4,num: '1.',name: 'Definicja',children: [
{L: 5,num: '',name: 'Użytkowany budynek istniejący uznaje się za zagrażający życiu ludzi, gdy występujące w nim warunki techniczne nie zapewniają możliwości ewakuacji ludzi.'}] },
{L: 4,num: '2.',name: 'Podstawa do stwierdzenia zagrożenia',children: [
{L: 5,num: '',name: 'Podstawą do stwierdzenia, że w budynku występują warunki techniczne, o których mowa w ust. 1, z zastrzeżeniem § 45, może być:<br>1) szerokość przejścia, dojścia lub wyjścia ewakuacyjnego albo biegu bądź spocznika klatki schodowej służącej ewakuacji, mniejsza o ponad jedną trzecią od określonej w przepisach techniczno-budowlanych;<br>2) długość przejścia lub dojścia ewakuacyjnego większa o ponad 100 % od określonej w przepisach techniczno-budowlanych;<br>3) występowanie w pomieszczeniu strefy pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I, ZL II lub ZL V albo na drodze ewakuacyjnej:<br>a) okładziny sufitu lub sufitu podwieszonego z materiału łatwo zapalnego lub kapiącego pod wpływem ognia, bądź wykładziny podłogowej z materiału łatwo zapalnego,<br>b) okładziny ściennej z materiału łatwo zapalnego na drodze ewakuacyjnej, jeżeli nie zapewniono dwóch kierunków ewakuacji;<br>4) niewydzielenie ewakuacyjnej klatki schodowej budynku wysokiego innego niż mieszkalny lub wysokościowego, w sposób określony w przepisach techniczno-budowlanych;<br>5) niezabezpieczenie przed zadymieniem dróg ewakuacyjnych wymienionych w przepisach techniczno-budowlanych, w sposób w nich określonych;<br>6) brak wymaganego oświetlenia awaryjnego w odniesieniu do strefy pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I, ZL II lub ZL V albo na drodze ewakuacyjnej prowadzącej z tej strefy na zewnątrz budynku.'}] },
{L: 4,num: '3.',name: 'Obowiązki właściciela',children: [
{L: 5,num: '',name: 'Właściciel lub zarządca budynku, o którym mowa w ust. 1, zobowiązany jest zastosować rozwiązania zapewniające spełnienie wymagań bezpieczeństwa pożarowego w sposób określony w przepisach techniczno-budowlanych.'}] }] },
{L: 3,num: '§ 17.',name: 'Praktyczne sprawdzenie organizacji i warunków ewakuacji',children: [
{L: 4,num: '1.',name: 'ZLIV',children: [
{L: 5,num: '',name: 'Właściciel lub zarządca obiektu przeznaczonego dla ponad 50 osób będących jego stałymi użytkownikami, niezakwalifikowanego do kategorii zagrożenia ludzi ZL IV, powinien co najmniej raz na 2 lata przeprowadzać praktyczne sprawdzenie organizacji oraz warunków ewakuacji z całego obiektu.'}] },
{L: 4,num: '2.',name: 'Obiekty, w których zmienia sie cyklicznie powyżej 50 osób',children: [
{L: 5,num: '',name: 'W przypadku obiektów, w których cyklicznie zmienia się jednocześnie grupa powyżej 50 użytkowników, w szczególności: szkół, przedszkoli, internatów, domów studenckich, praktycznego sprawdzenia organizacji oraz warunków ewakuacji należy dokonać - co najmniej raz na rok, jednak w terminie nie dłuższym niż 3 miesiące od dnia rozpoczęcia korzystania z obiektu przez nowych użytkowników.'}] },
{L: 4,num: '3.',name: 'ZLII i więzienia',children: [
{L: 5,num: '',name: 'W przypadku obiektu zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL II oraz w budynkach zakwaterowania osadzonych zlokalizowanych na terenach zakładów karnych i aresztów śledczych, zakres i obszar budynku objęty praktycznym sprawdzeniem organizacji i warunków ewakuacji musi być uzgodniony z właściwym miejscowo komendantem powiatowym (miejskim) Państwowej Straży Pożarnej.'}] },
{L: 4,num: '4.',name: 'Zwiadomienie o działaniu',children: [
{L: 5,num: '',name: 'Właściciel lub zarządca obiektu powiadamia właściwego miejscowo komendanta powiatowego (miejskiego) Państwowej Straży Pożarnej o terminie przeprowadzenia działań, o których mowa w ust. 1, nie później niż na tydzień przed ich przeprowadzeniem.'}] }] }] },
{L: 2,num: 'Rozdział 5.',name: 'Instalacja wodociągowa przeciwpożarowa',children: [
{L: 3,num: '§ 18.',name: 'Punkty poboru wody w budynku',children: [
{L: 4,num: '1.',name: 'Rodzaje punktów poboru wody',children: [
{L: 5,num: '',name: 'W budynkach stosuje się następujące rodzaje punktów poboru wody do celów przeciwpożarowych:<br>1) hydranty wewnętrzne z wężem półsztywnym o nominalnej średnicy węża 25 mm i 33 mm, zwane dalej odpowiednio "hydrantem 25" i "hydrantem 33";<br>2) hydrant wewnętrzny z wężem płasko składanym o nominalnej średnicy węża 52 mm, zwany dalej "hydrantem 52";<br>3) zawór hydrantowy, zwany dalej "zaworem 52", bez wyposażenia w wąż pożarniczy.'}] },
{L: 4,num: '2.',name: 'Hydranty wewnętrzne',children: [
{L: 5,num: '',name: 'Hydranty wewnętrzne muszą spełniać wymagania Polskich Norm dotyczących tych urządzeń.'}] },
{L: 4,num: '3.',name: 'Zawory 52',children: [
{L: 5,num: '',name: 'Zawory 52 muszą spełniać wymagania Polskich Norm dotyczących tych urządzeń.'}] },
{L: 4,num: '4.',name: 'Zasilanie hydrantów wewnętrznych',children: [
{L: 5,num: '',name: 'Zasilanie hydrantów wewnętrznych musi być zapewnione co najmniej przez 1 godzinę.'}] }] },
{L: 3,num: '§ 19.',name: 'Hydranty wewnętrzne',children: [
{L: 4,num: '1.',name: 'Hydranty 25',children: [
{L: 5,num: '',name: 'Hydranty 25 muszą być stosowane w strefach pożarowych zakwalifikowanych do kategorii zagrożenia ludzi ZL:<br>1) na każdej kondygnacji budynku wysokiego i wysokościowego, z wyjątkiem kondygnacji obejmującej wyłącznie strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL IV;<br>2) na każdej kondygnacji budynku innego niż tymczasowy, niskiego i średniowysokiego:<br>a) w strefie pożarowej o powierzchni przekraczającej 200 m2, zakwalifikowanej do kategorii zagrożenia ludzi ZL I, ZL II lub ZL V,<br>b) w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL III:<br>– o powierzchni przekraczającej 200 m2 w budynku średniowysokim, przy czym jeżeli jest to strefa pożarowa obejmująca tylko pierwszą kondygnację nadziemną, a nad nią znajdują się wyłącznie strefy pożarowe ZL IV, jedynie wtedy, gdy powierzchnia tej strefy pożarowej przekracza 1 000 m2,<br>– o powierzchni przekraczającej 1 000 m2 w budynku niskim.'}] },
{L: 4,num: '2.',name: 'Hydranty 33',children: [
{L: 5,num: '',name: 'Hydranty 33 muszą być stosowane w garażu: <br>1) jednokondygnacyjnym zamkniętym o więcej niż 10 stanowiskach postojowych; <br>2) wielokondygnacyjnym.'}] },
{L: 4,num: '3.',name: 'Hydranty 52',children: [
{L: 5,num: '',name: 'Hydranty 52 muszą być stosowane:<br>1) w strefie pożarowej produkcyjnej i magazynowej o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2 i powierzchni przekraczającej 200 m2;<br>2) w strefie pożarowej produkcyjnej i magazynowej o gęstości obciążenia ogniowego nieprzekraczającej 500 MJ/m2, w której znajduje się pomieszczenie o powierzchni przekraczającej 100 m2 i gęstości obciążenia ogniowego przekraczającej 1 000 MJ/m2;<br>3) przy wejściu do pomieszczeń magazynowych lub technicznych o powierzchni przekraczającej 200 m2 i gęstości obciążenia ogniowego przekraczającej 500 MJ/m2, usytuowanych w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I, ZL II, ZL III lub ZL V, znajdującej się w budynku niskim albo średniowysokim.'}] },
{L: 4,num: '4.',name: 'Odstępstwa',children: [
{L: 5,num: '',name: 'W strefach pożarowych, o których mowa w ust. 3 pkt 1, i przy wejściu do pomieszczeń magazynowych lub technicznych, o których mowa w ust. 3 pkt 3, dopuszcza się stosowanie hydrantów 33, jeżeli gęstość obciążenia ogniowego w tych strefach i tych pomieszczeniach magazynowych lub technicznych nie przekracza 1 000 MJ/m2.'}] },
{L: 4,num: '5.',name: 'Wyłączenia',children: [
{L: 5,num: '',name: 'Wymagania, o których mowa w ust. 2, nie dotyczą wolno stojących garaży na terenach zamkniętych podległych Ministrowi Obrony Narodowej.'}] }] },
{L: 3,num: '§ 20.',name: 'Rozmieszczenie hydrantów wewnętrznych',children: [
{L: 4,num: '1.',name: 'Rozmieszczenie',children: [
{L: 5,num: '',name: 'Hydranty wewnętrzne oraz zawory 52 powinny być umieszczane przy drogach komunikacji ogólnej, w szczególności:<br>1) przy wejściach do budynku i klatek schodowych na każdej kondygnacji budynku, przy czym w budynkach wysokich i wysokościowych zaleca się lokalizację zaworów 52 w przedsionkach przeciwpożarowych, a dopuszcza na klatkach schodowych;<br>2) w przejściach i na korytarzach, w tym w holach i na korytarzach poszczególnych kondygnacji budynków wysokich i wysokościowych;<br>3) przy wejściach na poddasza;<br>4) przy wyjściach na przestrzeń otwartą lub przy wyjściach ewakuacyjnych z pomieszczeń produkcyjnych i magazynowych, w szczególności zagrożonych wybuchem.'}] },
{L: 4,num: '2.',name: 'Rozmieszczenie w pionie',children: [
{L: 5,num: '',name: 'Hydranty wewnętrzne oraz zawory 52 muszą znajdować się na każdej kondygnacji, przy czym w budynkach wysokich i wysokościowych należy stosować po dwa zawory 52 na każdym pionie na kondygnacji podziemnej i na kondygnacji położonej na wysokości powyżej 25 m oraz po jednym zaworze 52 na każdym pionie na pozostałych kondygnacjach.'}] },
{L: 4,num: '3.',name: 'Zasięg hydrantów wewnetrznych',children: [
{L: 5,num: '',name: 'Zasięg hydrantów wewnętrznych w poziomie obejmuje całą powierzchnię chronionego budynku, strefy pożarowej lub pomieszczenia, z uwzględnieniem:<br>1) długości odcinka węża hydrantu wewnętrznego określonej w normach, o których mowa w § 18 ust. 2;<br>2) efektywnego zasięgu rzutu prądów gaśniczych:<br>a) 3 m - w strefach pożarowych zakwalifikowanych do kategorii zagrożenia ludzi ZL, znajdujących się w budynkach o więcej niż jednej kondygnacji nadziemnej - przyjmowanego dla prądów rozproszonych stożkowych,<br>b) 10 m - w pozostałych budynkach.'}] },
{L: 4,num: '4.',name: 'Strefy PM',children: [
{L: 5,num: '',name: 'W przypadku pomieszczeń i stref pożarowych produkcyjnych i magazynowych, do zabezpieczenia miejsc, z których odległość do najbliższego wyjścia ewakuacyjnego lub innego wyjścia na przestrzeń otwartą przekracza 30 m, w celu spełnienia wymagań, o których mowa w ust. 3, dopuszcza się wyposażenie hydrantu 52 w dodatkowy wąż.'}] }] },
{L: 3,num: '§ 21.',name: 'Zawory 52',children: [
{L: 4,num: '1.',name: 'Wysokość od podłogi',children: [
{L: 5,num: '',name: 'Zawory 52 i zawory odcinające hydrantów wewnętrznych muszą być umieszczone na wysokości 1,35±0,1 m od poziomu podłogi.'}] },
{L: 4,num: '2.',name: 'Nasady tłoczne',children: [
{L: 5,num: '',name: 'Zawory 52 oraz zawory odcinające w hydrantach 52 powinny posiadać nasady tłoczne skierowane do dołu, usytuowane wraz z pokrętłem zaworu względem ścian lub obudowy w sposób umożliwiający łatwe przyłączanie węża tłocznego oraz otwieranie i zamykanie jego zaworu.'}] },
{L: 4,num: '3.',name: 'Miejsca narażone na uszkodzenie lub dewastację',children: [
{L: 5,num: '',name: 'Zawory 52 lokalizowane w miejscach, w których mogą być narażone na uszkodzenie lub dewastację, umieszcza się w metalowych szafkach ochronnych zgodnych z wymaganiami Polskich Norm, z zamkiem zgodnym z Polskimi Normami otwieranym głowicą toporka strażackiego.'}] },
{L: 4,num: '4.',name: 'Przestrzeń przed hydrantem',children: [
{L: 5,num: '',name: 'Przed hydrantem wewnętrznym lub zaworem 52 zapewnia się dostateczną przestrzeń do rozwinięcia linii gaśniczej.'}] }] },
{L: 3,num: '§ 22.',name: 'Wydajność i ciśnienie na zaworze',children: [
{L: 4,num: '1.',name: 'Wydajność poboru wody',children: [
{L: 5,num: '',name: 'Minimalna wydajność poboru wody mierzona na wylocie prądownicy wynosi:<br>1) dla hydrantu 25 - 1,0 dm3/s;<br>2) dla hydrantu 33 - 1,5 dm3/s;<br>3) dla hydrantu 52 - 2,5 dm3/s;<br>4) dla zaworu 52 - 2,5 dm3/s.'}] },
{L: 4,num: '2.',name: 'Ciśnienie na zaworze odcinającym',children: [
{L: 5,num: '',name: 'Ciśnienie na zaworze odcinającym hydrantu wewnętrznego powinno zapewniać wydajność określoną w ust. 1 dla danego rodzaju hydrantu wewnętrznego, z uwzględnieniem zastosowanej średnicy dyszy prądownicy, i być nie mniejsze niż 0,2 MPa.'}] },
{L: 4,num: '3.',name: 'Zawór 52',children: [
{L: 5,num: '',name: 'Ciśnienie na zaworze 52, położonym najniekorzystniej ze względu na wysokość i opory hydrauliczne, dla wydajności określonej w ust. 1 pkt 4, nie powinno być mniejsze niż 0,2 MPa.'}] },
{L: 4,num: '4.',name: 'Maksymalne ciśnienie robocze',children: [
{L: 5,num: '',name: 'Maksymalne ciśnienie robocze w instalacji wodociągowej przeciwpożarowej na zaworze odcinającym nie powinno przekraczać 1,2 MPa, przy czym na zaworze 52 i zaworach odcinających hydrantów 33 oraz hydrantów 52 nie powinno przekraczać 0,7 MPa.'}] }] },
{L: 3,num: '§ 23.',name: 'Jednoczesność pracy hydrantów',children: [
{L: 4,num: '1.',name: 'Przyjmowana liczba hydrantów',children: [
{L: 5,num: '',name: 'Instalacja wodociągowa przeciwpożarowa powinna zapewniać możliwość jednoczesnego poboru wody na jednej kondygnacji budynku lub w jednej strefie pożarowej z:<br>1) jednego hydrantu wewnętrznego - w budynku niskim lub średniowysokim, jeżeli powierzchnia strefy pożarowej nie przekracza 500 m2;<br>2) dwóch sąsiednich hydrantów wewnętrznych lub dwóch sąsiednich zaworów 52 - w budynkach niewymienionych w pkt 1 i 3 oraz w budynku wysokim z jedną klatką schodową;<br>3) czterech sąsiednich hydrantów wewnętrznych lub zaworów 52:<br>a) w budynku wysokim i wysokościowym na kondygnacjach podziemnych i kondygnacjach położonych na wysokości powyżej 25 m,<br>b) w strefie pożarowej produkcyjnej i magazynowej o gęstości obciążenia ogniowego przekraczającej 500 MJ/m2 i powierzchni przekraczającej 3 000 m2.'}] }] },
{L: 3,num: '§ 24.',name: 'Zasilanie instalacji wodociągowej',children: [
{L: 4,num: '1.',name: 'Wymagania ogólne',children: [
{L: 5,num: '',name: 'Instalacja wodociągowa przeciwpożarowa musi być zasilana z zewnętrznej sieci wodociągowej przeciwpożarowej lub ze zbiorników o odpowiednim zapasie wody do celów przeciwpożarowych, bezpośrednio albo za pomocą pompowni przeciwpożarowej, w sposób zapewniający spełnienie wymagań określonych w § 22 i 23.'}] },
{L: 4,num: '2.',name: 'Zapas dla budynków W i WW',children: [
{L: 5,num: '',name: 'Do zasilania w wodę instalacji wodociągowej przeciwpożarowej w budynkach wysokich i wysokościowych powinien być zapewniony zapas wody zgromadzony o łącznej pojemności nie mniejszej niż 100 m3 w jednym lub kilku zbiornikach przeznaczony wyłącznie do tego celu.'}] },
{L: 4,num: '3.',name: 'Złagodzenia',children: [
{L: 5,num: '',name: 'Dopuszcza się:<br>1) zmniejszenie pojemności zbiorników, o których mowa w ust. 2, do 50 m3, w przypadku budynków wysokich i wysokościowych o wysokości do 100 m:<br>a) zawierających na wysokości powyżej 12 m jedynie strefy pożarowe zakwalifikowane do kategorii zagrożenia ludzi ZL IV, niezależnie od ich powierzchni, lub<br>b) niezawierających stref pożarowych o powierzchni przekraczającej 750 m2;<br>2) stosowanie jednego wspólnego zbiornika o pojemności co najmniej 100 m3 dla grupy budynków wysokich i wysokościowych wzniesionych obok siebie, jeżeli zbiornik nie jest oddalony od żadnego z budynków o więcej niż 100 m;<br>3) stosowanie zbiorników o pojemności zmniejszonej niż wymienione w:<br>a) ust. 2 i ust. 3 pkt 2 - do 50 m3 w przypadku zapewnienia zasilania tych zbiorników w wodę z zewnętrznej sieci wodociągowej przeciwpożarowej o wydajności nie mniejszej niż 10 dm3/s,<br>b) ust. 2 i ust. 3 pkt 2 - do 25 m3 w przypadku zapewnienia zasilania tych zbiorników w wodę z zewnętrznej sieci wodociągowej przeciwpożarowej o wydajności nie mniejszej niż 15 dm3/s,<br>c) ust. 3 pkt 1 - do 6 m3 w przypadku zapewnienia zasilania tych zbiorników w wodę z zewnętrznej sieci wodociągowej przeciwpożarowej o wydajności nie mniejszej niż 10 dm3/s.'}] },
{L: 4,num: '4.',name: 'Złagodzenia dla budynków wysokich ZLIV',children: [
{L: 5,num: '',name: 'Dla budynków wysokich zakwalifikowanych do kategorii zagrożenia ludzi ZL IV dopuszcza się zasilanie instalacji wodociągowej przeciwpożarowej bezpośrednio z zewnętrznej sieci wodociągowej przeciwpożarowej o wydajności nie mniejszej niż 10 dm3/s, bez konieczności zapewnienia zbiorników, o których mowa w ust. 2 i 3.'}] },
{L: 4,num: '5.',name: 'Warunki dla złagodzeń',children: [
{L: 5,num: '',name: 'Warunkiem zastosowania dopuszczeń, o których mowa w ust. 3 pkt 3 i ust. 4, jest wyprowadzenie w elewacjach budynku, od strony drogi pożarowej, dodatkowej nasady o średnicy 75 mm, umożliwiającej zasilanie instalacji wodociągowej przeciwpożarowej z samochodów gaśniczych.'}] }] },
{L: 3,num: '§ 25.',name: 'Przewody instalacji wodociągowej przeciwpożarowej',children: [
{L: 4,num: '1.',name: 'Wykonanie',children: [
{L: 5,num: '',name: 'Przewody zasilające instalacji wodociągowej przeciwpożarowej muszą być wykonane:<br>1) jako piony w klatkach schodowych lub przy klatkach schodowych;<br>2) jako przewody rozprowadzające w budynkach jednokondygnacyjnych oraz, jeżeli zachodzi taka potrzeba, na kondygnacjach budynków wielokondygnacyjnych.'}] },
{L: 4,num: '2.',name: 'Budynki W i WW',children: [
{L: 5,num: '',name: 'W budynkach wysokich i wysokościowych o dwu lub więcej klatkach schodowych nawodnione piony powinny być połączone ze sobą na najwyższej kondygnacji przewodem o średnicy nominalnej (DN) co najmniej DN 80.'}] },
{L: 4,num: '3.',name: 'Obudowanie przewodów',children: [
{L: 5,num: '',name: 'Przewody instalacji, z której pobiera się wodę do gaszenia pożaru, wykonane z materiałów palnych, powinny być obudowane ze wszystkich stron osłonami o klasie odporności ogniowej co najmniej EI 60. Warunek ten nie dotyczy pionów prowadzonych w klatkach schodowych wydzielonych ścianami i zamkniętych drzwiami o klasie odporności ogniowej co najmniej EI 30.'}] },
{L: 4,num: '4.',name: 'Średnice nominalne',children: [
{L: 5,num: '',name: 'Średnice nominalne przewodów zasilających, w milimetrach, na których instaluje się hydranty wewnętrzne i zawory 52, powinny wynosić co najmniej:<br>1)DN 25 - dla hydrantów 25;<br>2)DN 50 - dla hydrantów 33 i 52;<br>3)DN 80 - dla zaworów 52 na nawodnionych pionach w budynkach wysokich i wysokościowych.'}] },
{L: 4,num: '5.',name: 'Budynki nieogrzewane',children: [
{L: 5,num: '',name: 'W nieogrzewanych budynkach lub w ich częściach przewody zasilające instalacji wodociągowej przeciwpożarowej należy zabezpieczyć przed możliwością zamarznięcia. W tym przypadku można stosować instalację suchą, pod warunkiem zastosowania rozwiązań umożliwiających jej nawadnianie w sposób ręczny i/lub automatyczny.'}] },
{L: 4,num: '6.',name: 'Przewody obwodowe',children: [
{L: 5,num: '',name: 'Przewody zasilające instalacji wodociągowej przeciwpożarowej muszą być wykonane jako obwodowe zapewniające doprowadzenie wody co najmniej z dwóch stron, w przypadku gdy:<br>1) liczba pionów w budynku, zasilanych z jednego przewodu, jest większa niż 3;<br>2) na przewodach rozprowadzających zainstalowano więcej niż 5 hydrantów wewnętrznych.'}] },
{L: 4,num: '7.',name: 'Odłączanie zasuwami lub zaworami',children: [
{L: 5,num: '',name: 'Należy zapewnić możliwość odłączania zasuwami lub zaworami tych części przewodów zasilających instalację wodociągową przeciwpożarową, które znajdują się pomiędzy doprowadzeniami, o których mowa w ust. 6.'}] },
{L: 4,num: '8.',name: 'Przyłączenie przyborów sanitarnych',children: [
{L: 5,num: '',name: 'Dopuszcza się przyłączanie do przewodów zasilających instalacji wodociągowej przeciwpożarowej przyborów sanitarnych, pod warunkiem że w przypadku ich uszkodzenia nie spowoduje to niekontrolowanego wypływu wody z instalacji.'}] },
{L: 4,num: '9.',name: 'Niezależność systemu',children: [
{L: 5,num: '',name: 'Możliwość poboru wody do celów przeciwpożarowych o wymaganych parametrach ciśnienia i wydajności w budynku musi być zapewniona niezależnie od stanu pracy innych systemów bądź urządzeń.'}] }] },
{L: 3,num: '§ 26.',name: 'Pompownie przeciwpożarowe',children: [
{L: 4,num: '1.',name: 'Wymagania w rozporządzeniu o drogach i wodzie',children: [
{L: 5,num: '',name: 'Szczegółowe wymagania dla pompowni przeciwpożarowych określają przepisy rozporządzenia Ministra Spraw Wewnętrznych i Administracji z dnia 24 lipca 2009 r. w sprawie przeciwpożarowego zaopatrzenia w wodę oraz dróg pożarowych (Dz. U. Nr 124, poz. 1030).'}] }] }] },
{L: 2,num: 'Rozdział 6.',name: 'Stosowanie SUG, SSP, DSO i gaśnic',children: [
{L: 3,num: '§ 27.',name: 'Stałe urządzenia gaśnicze',children: [
{L: 4,num: '1.',name: 'Wymagane stosowanie',children: [
{L: 5,num: '',name: 'Stosowanie stałych urządzeń gaśniczych związanych na stałe z obiektem, zawierających zapas środka gaśniczego i uruchamianych samoczynnie we wczesnej fazie rozwoju pożaru, jest wymagane w:<br>1) archiwach wyznaczonych przez Naczelnego Dyrektora Archiwów Państwowych;<br>2) muzeach oraz zabytkach budowlanych, wyznaczonych przez Generalnego Konserwatora Zabytków w uzgodnieniu z Komendantem Głównym Państwowej Straży Pożarnej;<br>3) ośrodkach elektronicznego przetwarzania danych o znaczeniu krajowym.'}] },
{L: 4,num: '2.',name: 'Wymagane stosowanie samoczynnych urządzeń gąsniczych wodnych',children: [
{L: 5,num: '',name: 'Stosowanie stałych samoczynnych urządzeń gaśniczych wodnych jest wymagane w:<br>1) budynkach handlowych lub wystawowych:<br>a) jednokondygnacyjnych, w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 8 000 m2,<br>b) wielokondygnacyjnych, w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 5 000 m2;<br>2) w budynkach o liczbie miejsc służących celom gastronomicznym powyżej 600;<br>3) budynkach użyteczności publicznej wysokościowych;<br>4) budynkach zamieszkania zbiorowego wysokościowych.'}] },
{L: 4,num: '3.',name: 'Stałe urządzenia gaśnicze gazowe',children: [
{L: 5,num: '',name: 'W strefach pożarowych i pomieszczeniach wyposażonych w stałe urządzenia gaśnicze gazowe lub z innym środkiem gaśniczym mogącym mieć wpływ na zdrowie ludzi zapewnia się warunki bezpieczeństwa dla osób przebywających w tych pomieszczeniach, zgodnie z Polskimi Normami dotyczącymi tych urządzeń.'}] }] },
{L: 3,num: '§ 28.',name: 'System sygnalizacji pożarowej',children: [
{L: 4,num: '1.',name: 'Wymagane stosowanie',children: [
{L: 5,num: '',name: 'Stosowanie systemu sygnalizacji pożarowej, obejmującego urządzenia sygnalizacyjno-alarmowe, służące do samoczynnego wykrywania i przekazywania informacji o pożarze, a także urządzenia odbiorcze alarmów pożarowych i urządzenia odbiorcze sygnałów uszkodzeniowych, jest wymagane w:<br>1) budynkach handlowych lub wystawowych:<br>a) jednokondygnacyjnych o powierzchni strefy pożarowej powyżej 5 000 m2,<br>b) wielokondygnacyjnych o powierzchni strefy pożarowej powyżej 2 500 m2;<br>2) teatrach o liczbie miejsc powyżej 300;<br>3) kinach o liczbie miejsc powyżej 600;<br>4) budynkach o liczbie miejsc służących celom gastronomicznym powyżej 300;<br>5) salach widowiskowych i sportowych o liczbie miejsc powyżej 1 500;<br>6) szpitalach, z wyjątkiem psychiatrycznych, oraz w sanatoriach - o liczbie łóżek powyżej 200 w budynku;<br>7) szpitalach psychiatrycznych o liczbie łóżek powyżej 100 w budynku;<br>8) domach pomocy społecznej i ośrodkach rehabilitacji dla osób niepełnosprawnych o liczbie łóżek powyżej 100 w budynku;<br>9) zakładach pracy zatrudniających powyżej 100 osób niepełnosprawnych w budynku;<br>10) budynkach użyteczności publicznej wysokich i wysokościowych;<br>11) budynkach zamieszkania zbiorowego, w których przewidywany okres pobytu tych samych osób przekracza trzy doby, o liczbie miejsc noclegowych powyżej 200;<br>12) budynkach zamieszkania zbiorowego niewymienionych w pkt 11, o liczbie miejsc noclegowych powyżej 50;<br>13) archiwach wyznaczonych przez Naczelnego Dyrektora Archiwów Państwowych;<br>14) muzeach oraz zabytkach budowlanych, wyznaczonych przez Generalnego Konserwatora Zabytków w uzgodnieniu z Komendantem Głównym Państwowej Straży Pożarnej;<br>15) ośrodkach elektronicznego przetwarzania danych o zasięgu krajowym, wojewódzkim i w urzędach obsługujących organy administracji rządowej;<br>16) centralach telefonicznych o pojemności powyżej 10 000 numerów i centralach telefonicznych tranzytowych o pojemności 5 000-10 000 numerów, o znaczeniu miejscowym lub regionalnym;<br>17) garażach podziemnych, w których strefa pożarowa przekracza 1 500 m2 lub obejmujących więcej niż jedną kondygnację podziemną;<br>18) stacjach metra i stacjach kolei podziemnych;<br>19) dworcach i portach, przeznaczonych do jednoczesnego przebywania powyżej 500 osób;<br>20) bankach, w których strefa pożarowa zawierająca salę operacyjną ma powierzchnię przekraczającą 500 m2;<br>21) bibliotekach, których zbiory w całości lub w części tworzą narodowy zasób biblioteczny.'}] },
{L: 4,num: '2.',name: 'Wyłączenia',children: [
{L: 5,num: '',name: 'Wymagania, o których mowa w ust. 1 pkt 4 i 11, nie dotyczą budynków, które są zlokalizowane na terenach zamkniętych służących obronności państwa, oraz budynków zakwaterowania osadzonych, które zlokalizowane są na terenach zakładów karnych i aresztów śledczych.'}] }] },
{L: 3,num: '§ 29.',name: 'Dźwiękowy system ostrzegawczy',children: [
{L: 4,num: '1.',name: 'Wymagane stosowanie',children: [
{L: 5,num: '',name: 'Stosowanie dźwiękowego systemu ostrzegawczego, umożliwiającego rozgłaszanie sygnałów ostrzegawczych i komunikatów głosowych na potrzeby bezpieczeństwa osób przebywających w obiekcie, nadawanych automatycznie po otrzymaniu sygnału z systemu sygnalizacji pożarowej, a także przez operatora, jest wymagane w:<br>1) budynkach handlowych lub wystawowych:<br>a) jednokondygnacyjnych, zawierających strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 8 000 m2,<br>b) wielokondygnacyjnych, zawierających strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 5 000 m2;<br>2) salach widowiskowych i sportowych o liczbie miejsc powyżej 1 500;<br>3) kinach i teatrach o liczbie miejsc powyżej 600;<br>4) szpitalach i sanatoriach o liczbie łóżek powyżej 200 w budynku, z wyłączeniem pomieszczeń intensywnej opieki medycznej, sal operacyjnych oraz sal z chorymi;<br>5) budynkach użyteczności publicznej wysokich i wysokościowych;<br>6) budynkach zamieszkania zbiorowego wysokich i wysokościowych lub o liczbie miejsc noclegowych powyżej 200;<br>7) stacjach metra i stacjach kolei podziemnych;<br>8) dworcach i portach, przeznaczonych do jednoczesnego przebywania powyżej 500 osób.'}] },
{L: 4,num: '2.',name: 'Współpraca z DSO',children: [
{L: 5,num: '',name: 'W obiektach, w których zastosowano dźwiękowy system ostrzegawczy, nie stosuje się innych pożarowych urządzeń alarmowych akustycznych służących alarmowaniu użytkowników tego obiektu, poza służbami dozoru lub ochrony.'}] },
{L: 4,num: '3.',name: 'Wyłączenia',children: [
{L: 5,num: '',name: 'Wymaganie, o którym mowa w ust. 1 pkt 6, nie dotyczy budynków znajdujących się na terenach zamkniętych służących obronności państwa oraz budynków zakwaterowania osadzonych, które zlokalizowane są na terenach zakładów karnych i aresztów śledczych.<br>'}] }] },
{L: 3,num: '§ 30.',name: 'Złagodzenia',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'Obiekty wyposażone w stałe urządzenia gaśnicze mogą być niewyposażone w system sygnalizacji pożarowej.'}] },
{L: 4,num: '2.',name: 'Wyłączenia',children: [
{L: 5,num: '',name: 'Przepis ust. 1 nie dotyczy obiektów, w których system sygnalizacji pożarowej jest niezbędny do uruchamiania urządzeń przewidzianych do funkcjonowania podczas pożaru.'}] }] },
{L: 3,num: '§ 31.',name: 'Połączenie urządzeń z PSP',children: [
{L: 4,num: '1. ',name: 'Uzgodnienie z komendantem powiatowym/miejskim',children: [
{L: 5,num: '',name: 'Właściciel, zarządca lub użytkownik obiektu, o którym mowa w art. 5 urządzenia sygnalizacyjno-alarmowe ustawy z dnia 24 sierpnia 1991 r. o ochronie przeciwpożarowej, uzgadnia z właściwym miejscowo komendantem powiatowym (miejskim) Państwowej Straży Pożarnej sposób połączenia urządzeń sygnalizacyjno-alarmowych systemu sygnalizacji pożarowej z obiektem komendy Państwowej Straży Pożarnej lub obiektem wskazanym przez tego komendanta.'}] }] },
{L: 3,num: '§ 32.',name: 'Gaśnice',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'Obiekty muszą być wyposażone w gaśnice, spełniające wymagania Polskich Norm dotyczących gaśnic.'}] },
{L: 4,num: '2.',name: 'Rodzaje gaśnic',children: [
{L: 5,num: '',name: 'Rodzaj gaśnic powinien być dostosowany do gaszenia tych grup pożarów, które mogą wystąpić w obiekcie: <br>1) A - materiałów stałych, zwykle pochodzenia organicznego, których normalne spalanie zachodzi z tworzeniem żarzących się węgli; <br>2) B - cieczy i materiałów stałych topiących się; <br>3) C - gazów; <br>4) D - metali; <br>5) F - tłuszczów i olejów w urządzeniach kuchennych.'}] },
{L: 4,num: '3.',name: 'Rozmieszczenie środka gaśniczego',children: [
{L: 5,num: '',name: 'Jedna jednostka masy środka gaśniczego 2 kg (lub 3 dm3) zawartego w gaśnicach przypada, z wyjątkiem przypadków określonych w przepisach szczególnych:<br>1) na każde 100 m2 powierzchni strefy pożarowej w budynku, niechronionej stałym urządzeniem gaśniczym:<br>a) zakwalifikowanej do kategorii zagrożenia ludzi ZL I, ZL II, ZL III lub ZL V,<br>b) produkcyjnej i magazynowej o gęstości obciążenia ogniowego ponad 500 MJ/m2,<br>c) zawierającej pomieszczenie zagrożone wybuchem;<br>2) na każde 300 m2 powierzchni strefy pożarowej niewymienionej w pkt 1, z wyjątkiem zakwalifikowanej do kategorii zagrożenia ludzi ZL IV.'}] },
{L: 4,num: '4.',name: 'Magazyny gazów i paliw płynnych',children: [
{L: 5,num: '',name: 'Wyposażenie w gaśnice magazynów, w których są składowane butle z gazem płynnym, oraz stacji paliw płynnych określa rozporządzenie Ministra Gospodarki z dnia 21 listopada 2005 r. w sprawie warunków technicznych, jakim powinny odpowiadać bazy i stacje paliw płynnych, rurociągi przesyłowe dalekosiężne służące do transportu ropy naftowej i produktów naftowych i ich usytuowanie.'}] },
{L: 4,num: '5.',name: 'Miejsca omłotów',children: [
{L: 5,num: '',name: 'Miejsce omłotów, niezależnie od wymaganych gaśnic, musi być wyposażone w pojemnik z wodą o objętości co najmniej 200 dm3, przygotowany do wykorzystania w celach gaśniczych z użyciem wiadra lub w inny równorzędny sposób.'}] }] },
{L: 3,num: '§ 33.',name: 'Rozmieszczenie gaśnic',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'Gaśnice w obiektach muszą być rozmieszczone:<br>1) w miejscach łatwo dostępnych i widocznych, w szczególności:<br>a) przy wejściach do budynków,<br>b) na klatkach schodowych,<br>c) na korytarzach,<br>d) przy wyjściach z pomieszczeń na zewnątrz;<br>2) w miejscach nienarażonych na uszkodzenia mechaniczne oraz działanie źródeł ciepła (piece, grzejniki);<br>3) w obiektach wielokondygnacyjnych - w tych samych miejscach na każdej kondygnacji, jeżeli pozwalają na to istniejące warunki.'}] },
{L: 4,num: '2.',name: 'Warunki',children: [
{L: 5,num: '',name: 'Przy rozmieszczaniu gaśnic muszą być spełnione następujące warunki:<br>1) odległość z każdego miejsca w obiekcie, w którym może przebywać człowiek, do najbliższej gaśnicy nie powinna być większa niż 30 m;<br>2) do gaśnic powinien być zapewniony dostęp o szerokości co najmniej 1 m.'}] }] }] },
{L: 2,num: 'Rozdział 7.',name: 'Instalacje i urządzenia techniczne',children: [
{L: 3,num: '§ 34.',name: 'Czynności kominiarskie',children: [
{L: 4,num: '1.',name: 'Częstotliwość usuwania zanieczyszczeń',children: [
{L: 5,num: '',name: 'W obiektach lub ich częściach, w których odbywa się proces spalania paliwa stałego, ciekłego lub gazowego, usuwa się zanieczyszczenia z przewodów dymowych i spalinowych w okresach ich użytkowania:<br>1) od palenisk zakładów zbiorowego żywienia i usług gastronomicznych - co najmniej raz w miesiącu, jeżeli przepisy miejscowe nie stanowią inaczej;<br>2) od palenisk opalanych paliwem stałym niewymienionych w pkt 1 - co najmniej raz na 3 miesiące;<br>3) od palenisk opalanych paliwem płynnym i gazowym niewymienionych w pkt 1 - co najmniej raz na 6 miesięcy.'}] },
{L: 4,num: '2.',name: 'Złagodzenia',children: [
{L: 5,num: '',name: 'W obiektach lub ich częściach, o których mowa w ust. 1, usuwa się zanieczyszczenia z przewodów wentylacyjnych co najmniej raz w roku, jeżeli większa częstotliwość nie wynika z warunków użytkowych.'}] },
{L: 4,num: '3.',name: 'Wymagania dla wykonawców',children: [
{L: 5,num: '',name: 'Czynności, o których mowa w ust. 1 i 2, wykonują osoby posiadające kwalifikacje kominiarskie.'}] },
{L: 4,num: '4.',name: 'Wyłaczenia',children: [
{L: 5,num: '',name: 'Przepisu ust. 3 nie stosuje się przy usuwaniu zanieczyszczeń z przewodów dymowych, spalinowych i wentylacyjnych budynków mieszkalnych jednorodzinnych oraz obiektów budowlanych budownictwa zagrodowego i letniskowego.'}] }] },
{L: 3,num: '§ 35.',name: 'Dopuszczalne temperatury',children: [
{L: 4,num: '1.',name: 'Zewnętrzne powierzchnie urządzeń',children: [
{L: 5,num: '',name: 'Temperatura zewnętrznych powierzchni urządzeń i instalacji je zasilających, z wyłączeniem instalacji elektroenergetycznych, oraz temperatura wtłaczanego do pomieszczenia powietrza nie powinna przekraczać w zależności od rodzaju występujących w obiekcie materiałów następujących wielkości:<br>1) w przypadku gazów i par cieczy 2/3 maksymalnej temperatury powierzchni wyrażonej w stopniach Celsjusza (°C), określonej Polską Normą dotyczącą urządzeń elektrycznych w przestrzeniach zagrożonych wybuchem dla poszczególnych klas temperaturowych gazów i par cieczy;<br>2) w przypadku pyłów i włókien:<br>a) co najmniej 70 stopni Celsjusza (°C) poniżej temperatury tlenia się 5 mm warstwy pyłu dla poziomych powierzchni ogrzewczych lub nachylonych do 60° w stosunku do poziomu,<br>b) 2/3 temperatury samozapłonu, wyrażonej w stopniach Celsjusza (°C), mieszaniny pyłów lub włókien z powietrzem dla powierzchni o nachyleniu większym niż 60° w stosunku do poziomu oraz dla tych powierzchni, na których uniemożliwiono gromadzenie się pyłów i włókien,<br>c) 2/3 temperatury samozapłonu, wyrażonej w stopniach Celsjusza (°C), mieszaniny pyłów lub włókien z powietrzem dla nietlących się pyłów lub włókien, niezależnie od stopnia nachylenia powierzchni urządzeń ogrzewczych;<br>3) w przypadkach pozostałych ciał stałych łatwo zapalnych 2/3 temperatury samozapłonu, wyrażonej w stopniach Celsjusza (°C).'}] },
{L: 4,num: '2.',name: 'Praca urządzeń elektroenergetycznych i klasy temperaturowe',children: [
{L: 5,num: '',name: 'Dopuszczalne temperatury pracy urządzeń elektroenergetycznych oraz zasady klasyfikacji gazów i par cieczy do klas temperaturowych określają Polskie Normy dotyczące urządzeń elektrycznych w przestrzeniach zagrożonych wybuchem.'}] },
{L: 4,num: '3.',name: 'Założenia przy ustalaniu temperatury',children: [
{L: 5,num: '',name: 'Przy ustalaniu dopuszczalnych temperatur należy przyjmować za podstawę ten materiał palny znajdujący się w danym pomieszczeniu, który ma najniższą temperaturę samozapłonu, a dla tlących się pyłów - najniższą temperaturę tlenia.'}] },
{L: 4,num: '4.',name: 'Recyrkulacja',children: [
{L: 5,num: '',name: 'W systemach ogrzewczych oraz wentylacyjnych nie jest dopuszczalna recyrkulacja powietrza, jeżeli mogłaby spowodować wzrost zagrożenia wybuchem.'}] },
{L: 4,num: '5.',name: 'Centralne ogrzewanie powietrzne',children: [
{L: 5,num: '',name: 'Dopuszcza się stosowanie systemów centralnego ogrzewania powietrznego we wszystkich obiektach i pomieszczeniach, pod warunkiem zastosowania samoczynnych urządzeń (termoregulatorów) zapobiegających przekroczeniu dopuszczalnych temperatur w przypadku zaniku przepływu powietrza oraz blokady uniemożliwiającej włączenie elementów grzewczych przed uruchomieniem nawiewu powietrza.'}] },
{L: 4,num: '6.',name: 'Centralne ogrzewanie wodne i parowe',children: [
{L: 5,num: '',name: 'Systemów centralnego ogrzewania wodnego i parowego nie stosuje się w obiektach, w których występują materiały wytwarzające w reakcji z wodą lub parą wodną palne gazy, jeżeli reakcje takie nie są przewidziane w procesie technologicznym.'}] },
{L: 4,num: '7.',name: 'Powierzchnie przewodów i urządzeń grzewczych',children: [
{L: 5,num: '',name: 'Powierzchnie przewodów i urządzeń grzewczych oraz ich izolacje w obrębie pomieszczeń, w których mogą wydzielać się palne pyły i włókna, muszą być gładkie, łatwe do oczyszczenia i nierozprzestrzeniające ognia.'}] },
{L: 4,num: '8.',name: 'Instalacje i urządzenia wytwarzające ładunki elektryczności statycznej podczas eksploatacji',children: [
{L: 5,num: '',name: 'Instalacje i urządzenia techniczne oraz technologiczne, w których podczas eksploatacji mogą wytwarzać się ładunki elektryczności statycznej o potencjale wystarczającym do zapalenia występujących materiałów palnych, wyposaża się w odpowiednie środki ochrony, zgodnie z Polskimi Normami dotyczącymi ochrony przed elektrycznością statyczną.'}] }] },
{L: 3,num: '§ 36.',name: 'Prace niebezpieczne pożarowo',children: [
{L: 4,num: '1.',name: 'Przygotowanie do prac',children: [
{L: 5,num: '',name: 'Przed rozpoczęciem prac niebezpiecznych pod względem pożarowym, mogących powodować bezpośrednie niebezpieczeństwo powstania pożaru lub wybuchu, właściciel, zarządca lub użytkownik obiektu:<br>1) ocenia zagrożenie pożarowe w miejscu, w którym prace będą wykonywane;<br>2) ustala rodzaj przedsięwzięć mających na celu niedopuszczenie do powstania i rozprzestrzeniania się pożaru lub wybuchu;<br>3) wskazuje osoby odpowiedzialne za odpowiednie przygotowanie miejsca pracy, za przebieg oraz zabezpieczenie miejsca po zakończeniu pracy;<br>4) zapewnia wykonywanie prac wyłącznie przez osoby do tego upoważnione, posiadające odpowiednie kwalifikacje;<br>5) zaznajamia osoby wykonujące prace z zagrożeniami pożarowymi występującymi w rejonie wykonywania prac oraz z przedsięwzięciami mającymi na celu niedopuszczenie do powstania pożaru lub wybuchu.'}] },
{L: 4,num: '2.',name: 'Wykonywanie prac',children: [
{L: 5,num: '',name: 'Przy wykonywaniu prac, o których mowa w ust. 1, należy:<br>1) zabezpieczyć przed zapaleniem materiały palne występujące w miejscu wykonywania prac oraz w rejonach przyległych, w tym również elementy konstrukcji budynku i znajdujące się w nim instalacje techniczne;<br>2) prowadzić prace niebezpieczne pod względem pożarowym w pomieszczeniach lub przy urządzeniach zagrożonych wybuchem lub w pomieszczeniach, w których wcześniej wykonywano inne prace związane z użyciem łatwo palnych cieczy lub palnych gazów, jedynie wtedy, gdy stężenie par cieczy lub gazów w mieszaninie z powietrzem w miejscu wykonywania prac nie przekracza 10 % ich dolnej granicy wybuchowości;<br>3) mieć w miejscu wykonywania prac sprzęt umożliwiający likwidację wszelkich źródeł pożaru;<br>4) po zakończeniu prac poddać kontroli miejsce, w którym prace były wykonywane, oraz rejony przyległe;<br>5) używać do wykonywania prac wyłącznie sprzętu sprawnego technicznie i zabezpieczonego przed możliwością wywołania pożaru.'}] }] },
{L: 3,num: '§ 37.',name: 'Ocena zagrożenia wybucjem',children: [
{L: 4,num: '1.',name: 'Wymagana ocena',children: [
{L: 5,num: '',name: 'W obiektach i na terenach przyległych, gdzie są prowadzone procesy technologiczne z użyciem materiałów mogących wytworzyć mieszaniny wybuchowe lub w których materiały takie są magazynowane, dokonuje się oceny zagrożenia wybuchem.'}] },
{L: 4,num: '2.',name: 'Zakres oceny',children: [
{L: 5,num: '',name: 'Ocena zagrożenia wybuchem obejmuje wskazanie pomieszczeń zagrożonych wybuchem, wyznaczenie w pomieszczeniach i przestrzeniach zewnętrznych odpowiednich stref zagrożenia wybuchem wraz z opracowaniem graficznej dokumentacji klasyfikacyjnej oraz wskazanie czynników mogących w nich zainicjować zapłon.'}] },
{L: 4,num: '3.',name: 'Dokumentacja graficzna',children: [
{L: 5,num: '',name: 'Graficzna dokumentacja klasyfikacyjna zawiera plany sytuacyjne obrazujące rodzaj i zasięg stref zagrożenia wybuchem oraz lokalizację i identyfikację źródeł emisji, zgodnie z zasadami określonymi w Polskich Normach.'}] },
{L: 4,num: '4.',name: 'Wykonawca oceny',children: [
{L: 5,num: '',name: 'Oceny zagrożenia wybuchem dokonują: inwestor, projektant lub użytkownik decydujący o procesie technologicznym.'}] },
{L: 4,num: '5.',name: 'Ocena ryzyka wybuchu',children: [
{L: 5,num: '',name: 'Ocena zagrożenia wybuchem może stanowić część oceny ryzyka wybuchu, o której mowa w przepisach rozporządzenia Ministra Gospodarki, Pracy i Polityki Społecznej z dnia 29 maja 2003 r. w sprawie minimalnych wymagań dotyczących bezpieczeństwa i higieny pracy pracowników zatrudnionych na stanowiskach pracy, na których może wystąpić atmosfera wybuchowa (Dz. U. Nr 107, poz. 1004 oraz z 2006 r. Nr 121, poz. 836).'}] },
{L: 4,num: '6.',name: 'Wytyczne do oceny',children: [
{L: 5,num: '',name: 'Klasyfikację stref zagrożenia wybuchem określa Polska Norma dotycząca zapobiegania wybuchowi i ochronie przed wybuchem.'}] },
{L: 4,num: '7.',name: 'Przyrost cisnienia w pomieszczeniu',children: [
{L: 5,num: '',name: 'Pomieszczenie, w którym może wytworzyć się mieszanina wybuchowa, powstała z wydzielającej się takiej ilości palnych gazów, par, mgieł lub pyłów, której wybuch mógłby spowodować przyrost ciśnienia w tym pomieszczeniu przekraczający 5 kPa, określa się jako pomieszczenie zagrożone wybuchem.'}] },
{L: 4,num: '8.',name: 'Wytyczne do określenia przyrostu ciśnienia',children: [
{L: 5,num: '',name: 'Wytyczne w zakresie określania przyrostu ciśnienia w pomieszczeniu, jaki mógłby zostać spowodowany przez wybuch, określa załącznik do rozporządzenia.'}] },
{L: 4,num: '9.',name: 'Strefa zagrożenia wybuchem',children: [
{L: 5,num: '',name: 'W pomieszczeniu należy wyznaczyć strefę zagrożenia wybuchem, jeżeli może w nim występować mieszanina wybuchowa o objętości co najmniej 0,01 m3 w zwartej przestrzeni.'}] }] }] },
{L: 2,num: 'Rozdział 9.',name: 'Zabezpieczenie przeciwpożarowe lasów',children: [
{L: 3,num: '§ 38.',name: 'Pasy przeciwpożarowe',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'Lasy położone przy obiektach mogących stanowić zagrożenie pożarowe dla lasu oddziela się od tych obiektów pasami przeciwpożarowymi, utrzymywanymi w stanie zapewniającym ich użyteczność przez cały rok.'}] },
{L: 4,num: '2.',name: 'Rodzaje i sposoby wykonywania',children: [
{L: 5,num: '',name: 'Rodzaje oraz sposoby wykonywania pasów przeciwpożarowych przez podmioty określone jako właściwe do ich wykonania i utrzymywania w: ustawie z dnia 28 września 1991 r. o lasach (Dz. U. z 2005 r. Nr 45, poz. 435, z późn. zm.), ustawie z dnia 28 marca 2003 r. o transporcie kolejowym (Dz. U. z 2007 r. Nr 16, poz. 94, z późn. zm.) oraz ustawie z dnia 24 sierpnia 1991 r. o ochronie przeciwpożarowej określają:<br>1) rozporządzenie Ministra Środowiska z dnia 22 marca 2006 r. w sprawie szczegółowych zasad zabezpieczenia przeciwpożarowego lasów (Dz. U. Nr 58, poz. 405 i Nr 82, poz. 573);<br>2) rozporządzenie Ministra Infrastruktury z dnia 7 sierpnia 2008 r. w sprawie wymagań w zakresie odległości i warunków dopuszczających usytuowanie drzew i krzewów, elementów ochrony akustycznej i wykonywania robót ziemnych w sąsiedztwie linii kolejowej, a także sposobu urządzania i utrzymywania zasłon odśnieżnych oraz pasów przeciwpożarowych (Dz. U. Nr 153, poz. 955).'}] },
{L: 4,num: '3.',name: 'Wyłączenia',children: [
{L: 5,num: '',name: 'Przepis ust. 2 nie dotyczy: <br>1) lasów zaliczonych do III kategorii zagrożenia pożarowego; <br>2) drzewostanów starszych niż 30 lat położonych przy drogach publicznych i parkingach oraz drzewostanów położonych przy drogach o nawierzchni nieutwardzonej, z wyjątkiem dróg poligonowych i międzypoligonowych; <br>3) lasów o szerokości mniejszej niż 200 m.'}] },
{L: 4,num: '4.',name: 'Kategorie zagrożenia pożarowego',children: [
{L: 5,num: '',name: 'Zaliczenia obszarów leśnych do kategorii zagrożenia pożarowego dokonuje się w planach urządzenia lasu, uproszczonych planach urządzenia lasu i planach ochrony parków narodowych.'}] }] },
{L: 3,num: '§ 39.',name: 'Zabezpieczenia przeciwpożarowe w lasach',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'W odległości mniejszej niż 30 m od skraju toru kolejowego lub drogi publicznej, z wyjątkiem drogi o nawierzchni nieutwardzonej, pozostawianie w szczególności gałęzi, chrustu, nieokrzesanych ściętych drzew i odpadów poeksploatacyjnych jest zabronione.'}] },
{L: 4,num: '2.',name: 'Obowiązki właścicieli/ zarządców/ użytkowników',children: [
{L: 5,num: '',name: 'Właściciele, zarządcy lub użytkownicy lasów, których lasy samoistnie lub wspólnie tworzą kompleks leśny o powierzchni ponad 300 ha:<br>1) organizują obserwację i patrolowanie lasów w celu wykrywania pożarów oraz alarmowania o ich powstaniu, zgodnie z przepisami o zabezpieczeniu przeciwpożarowym lasów;<br>2) zapewniają i utrzymują źródła wody do celów przeciwpożarowych;<br>3) utrzymują dojazdy pożarowe wyznaczone w planie urządzenia lasu zgodnie z przepisami w sprawie zasad zabezpieczenia przeciwpożarowego lasów;<br>4) oznaczają stanowiska czerpania wody znakami zgodnymi z Polskimi Normami dotyczącymi znaków bezpieczeństwa;<br>5) urządzają i utrzymują w miejscach wyznaczonych, w porozumieniu z właściwymi miejscowo komendantami powiatowymi (miejskimi) Państwowej Straży Pożarnej, bazy sprzętu do gaszenia pożarów lasów, zgodnie z przepisami o zabezpieczeniu przeciwpożarowym lasów;<br>6) uzgadniają projekt planu urządzenia lasu, projekt uproszczonego planu urządzenia lasu oraz projekt planu ochrony parku narodowego, w części dotyczącej ochrony przeciwpożarowej, z właściwym miejscowo komendantem wojewódzkim Państwowej Straży Pożarnej, dla lasów I i II kategorii zagrożenia pożarowego.'}] },
{L: 4,num: '3.',name: 'Wymaganie dla źródeł wody do celów ppoż',children: [
{L: 5,num: '',name: 'Źródło wody do celów przeciwpożarowych w lasach powinno zapewnić możliwość pobierania wody z głębokości nie większej niż 4 m, licząc między lustrem wody a poziomem stanowiska czerpania wody, i być wyposażone w stanowisko czerpania wody wraz z dojazdem.'}] },
{L: 4,num: '4.',name: 'Rozmieszczenie źródeł wody',children: [
{L: 5,num: '',name: 'Źródła wody do celów przeciwpożarowych w lasach, które samoistnie lub wspólnie tworzą kompleks o powierzchni ponad 300 ha, zapewnia się w postaci nie więcej niż 2 zbiorników w obrębie chronionej powierzchni zawierających łącznie co najmniej 50 m3 wody, hydrantów zewnętrznych lub cieku wodnego o stałym przepływie wody nie mniejszym niż 10 dm3/s przy najniższym stanie wód, z zapewnieniem najbliższego stanowiska czerpania wody w terenie o promieniu:<br>1) nieprzekraczającym 3 km w lasach I kategorii zagrożenia pożarowego;<br>2) nieprzekraczającym 5 km w lasach II kategorii zagrożenia pożarowego;<br>3) uzgodnionym z właściwym miejscowo komendantem powiatowym (miejskim) Państwowej Straży Pożarnej w lasach III kategorii zagrożenia pożarowego.'}] },
{L: 4,num: '5.',name: 'Tablice informacyjne i ostrzegawcze',children: [
{L: 5,num: '',name: 'Właściciel lub zarządca lasu umieszcza tablice informacyjne i ostrzegawcze dotyczące zabezpieczenia przeciwpożarowego lasu przy wjazdach do lasów oraz przy parkingach leśnych, w uzgodnieniu z właściwym miejscowo komendantem powiatowym (miejskim) Państwowej Straży Pożarnej.'}] },
{L: 4,num: '6.',name: 'Dojazdy pożarowe i bazy sprzętu',children: [
{L: 5,num: '',name: 'Dojazdy pożarowe, o których mowa w ust. 2 pkt 3, oraz bazy sprzętu, o których mowa w ust. 2 pkt 5, określa rozporządzenie Ministra Środowiska z dnia 22 marca 2006 r. w sprawie szczegółowych zasad zabezpieczenia przeciwpożarowego lasów.'}] }] },
{L: 3,num: '§ 40.',name: 'Czynności zabronione',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'W lasach i na terenach śródleśnych, na obszarze łąk, torfowisk i wrzosowisk, jak również w odległości do 100 m od granicy lasów nie jest dopuszczalne wykonywanie czynności mogących wywołać niebezpieczeństwo pożaru, w szczególności:<br>1) rozniecanie ognia poza miejscami wyznaczonymi do tego celu przez właściciela lub zarządcę lasu;<br>2) palenie tytoniu, z wyjątkiem miejsc na drogach utwardzonych i miejsc wyznaczonych do pobytu ludzi.'}] },
{L: 4,num: '2.',name: 'Wyłączenia',children: [
{L: 5,num: '',name: 'Przepis ust. 1 pkt 1 nie dotyczy czynności związanych z gospodarką leśną oraz wykonywaniem robót budowlanych i eksploatacji kopalni w porozumieniu z właścicielem lub zarządcą lasu.'}] }] }] },
{L: 2,num: 'Rozdział 10.',name: 'Zabezpieczenie płodów rolnych',children: [
{L: 3,num: '§ 41.',name: 'Wymagane czynności i zakazy',children: [
{L: 4,num: '1.',name: 'Postanowienia ogólne',children: [
{L: 5,num: '',name: 'Podczas zbioru, transportu i składowania płodów rolnych należy:<br>1) stosować wskazania podane w instrukcjach obsługi przy eksploatacji maszyn rolniczych i innych z napędem;<br>2) stosować silniki elektryczne o odpowiednim do warunków pracy stopniu ochrony; minimalna odległość układu napędowego od stert, stogów i budynków o konstrukcji palnej powinna wynosić 5 m;<br>3) ustawiać silniki spalinowe na podłożu niepalnym, w odległości co najmniej 10 m od stert, stogów lub budynków o konstrukcji palnej;<br>4) zabezpieczać urządzenia wydechowe silników spalinowych przed wylotem iskier;<br>5) zapewnić możliwość ewakuacji ludzi i sprzętu;<br>6) przechowywać niezbędne materiały pędne, w ilości nieprzekraczającej dobowego zapotrzebowania, w zamkniętych nietłukących się naczyniach, w odległości co najmniej 10 m od punktu omłotowego i miejsc występowania palnych płodów rolnych;<br>7) wyposażyć miejsca omłotów, stertowania i kombajnowania w gaśnice oraz w razie potrzeby w sprzęt służący do wykonywania pasów ograniczających rozprzestrzenianie się pożaru.'}] },
{L: 4,num: '2.',name: 'Palenie tytoniu przy obsłudze sprzętu',children: [
{L: 5,num: '',name: 'Palenie tytoniu przy obsłudze sprzętu, maszyn i pojazdów podczas zbiorów palnych płodów rolnych oraz ich transportu jest zabronione.'}] },
{L: 4,num: '3.',name: 'Używanie otwartego ognia i palenie tytoniu przy miejscu omłotów',children: [
{L: 5,num: '',name: 'Używanie otwartego ognia i palenie tytoniu w odległości mniejszej niż 10 m od miejsca omłotów i miejsc występowania palnych płodów rolnych jest zabronione.'}] }] },
{L: 3,num: '§ 42.',name: 'Sterty, stogi i brogi',children: [
{L: 4,num: '1.',name: 'Strefy pożarowe',children: [
{L: 5,num: '',name: 'Strefa pożarowa sterty, stogu lub brogu z palnymi produktami roślinnymi nie przekracza powierzchni 1 000 m2 lub kubatury 5 000 m3.'}] },
{L: 4,num: '2.',name: 'Usytuowanie',children: [
{L: 5,num: '',name: 'Przy ustawianiu stert, stogów i brogów należy zachować co najmniej następujące odległości:<br>1) od budynków wykonanych z materiałów:<br>a) palnych - 30 m,<br>b) niepalnych i o pokryciu co najmniej trudno zapalnym - 20 m;<br>2) od dróg publicznych i torów kolejowych - 30 m;<br>3) od dróg wewnętrznych i od granicy działki - 10 m;<br>4) od urządzeń i przewodów linii elektrycznych wysokiego napięcia - 30 m;<br>5) od lasów i terenów zalesionych - 100 m;<br>6) między stertami, stogami i brogami stanowiącymi odrębne strefy pożarowe - 30 m.'}] },
{L: 4,num: '3.',name: 'Odległości od materiałów palnych',children: [
{L: 5,num: '',name: 'Wokół stert, stogów i brogów należy wykonać i utrzymać powierzchnię o szerokości co najmniej 2 m w odległości 3 m od ich obrysu pozbawioną materiałów palnych.'}] },
{L: 4,num: '4.',name: 'Ryzyko samozapalenia',children: [
{L: 5,num: '',name: 'Produkty roślinne należy składować w sposób uniemożliwiający ich samozapalenie. W przypadku konieczności składowania produktów niedosuszonych należy okresowo sprawdzać ich temperaturę.'}] }] },
{L: 3,num: '§ 43.',name: 'Wypalanie słomy',children: [
{L: 4,num: '1.',name: 'Zabronione',children: [
{L: 5,num: '',name: 'Wypalanie słomy i pozostałości roślinnych na polach jest zabronione.'}] }] }] },
{L: 2,num: 'Rozdział 11.',name: 'Przepisy przejściowe i końcowe',children: [
{L: 3,num: '§ 44.',name: 'Przepis przejściowy',children: [
{L: 4,num: '1.',name: 'Przepis przejściowy',children: [
{L: 5,num: '',name: 'W stosunku do obiektów wzniesionych przed dniem wejścia w życie rozporządzenia:<br>1) wymagań określonych w § 27 ust. 1 i 2 nie stosuje się do obiektów wzniesionych przed dniem 17 stycznia 1993 r.;<br>2) wymagania określone w § 18 ust. 2 oraz w § 19 ust. 1 w przypadku budynków wyposażonych w hydranty 52 obowiązują przy przebudowie i rozbudowie instalacji wodociągowej przeciwpożarowej, a także przy nadbudowie, rozbudowie, przebudowie i zmianie sposobu użytkowania obiektu;<br>3) wymagań określonych w § 19 ust. 2 nie stosuje się, jeżeli zostały one wyposażone w hydranty 52 zgodnie z przepisami rozporządzenia Ministra Spraw Wewnętrznych i Administracji z dnia 21 kwietnia 2006 r. w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów (Dz. U. Nr 80, poz. 563);<br>4) wymagań określonych w § 27 ust. 2 pkt 1 i § 29 ust. 1 pkt 1 nie stosuje się do budynków handlowych i wystawowych:<br>a) jednokondygnacyjnych, zawierających strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 8 000 midx2, lecz nie większej niż 10 000 m2;<br>b) wielokondygnacyjnych, zawierających strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 5 000 midx2, lecz nie większej niż 8 000 m2;<br>5) wymagania określone w § 6 ust. 1 pkt 7 i 8 oraz ust. 2 i 3 powinny zostać spełnione podczas okresowej aktualizacji instrukcji bezpieczeństwa pożarowego, o której mowa w § 6 ust. 7.'}] }] },
{L: 3,num: '§ 45.',name: 'Przepis przejściowy',children: [
{L: 4,num: '1.',name: 'Przepis przejściowy',children: [
{L: 5,num: '',name: 'W stosunku do budynków wzniesionych zgodnie z ustawą z dnia 7 lipca 1994 r. - Prawo budowlane (Dz. U. z 2006 r. Nr 156, poz. 1118, z późn. zm.) oraz aktami wykonawczymi wydanymi na podstawie tej ustawy nie stosuje się kryteriów określonych w § 16 ust. 2.'}] }] },
{L: 3,num: '§ 46.',name: 'Utrata mocy rozporządzenia',children: [
{L: 4,num: '1.',name: 'Utrata mocy rozporządzenia',children: [
{L: 5,num: '',name: 'Traci moc rozporządzenie Ministra Spraw Wewnętrznych i Administracji z dnia 21 kwietnia 2006 r. w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów (Dz. U. Nr 80, poz. 563).'}] }] },
{L: 3,num: '§ 47.',name: 'Wejście rozporządzenia w życie',children: [
{L: 4,num: '1.',name: 'Wejście rozporządzenia w życie',children: [
{L: 5,num: '',name: 'Rozporządzenie wchodzi w życie po upływie 7 dni od dnia ogłoszenia.'}] }] }] }] },
{L: 1,num: '',name: 'Drogi i woda',children: [
{L: 2,num: 'Rozdział 1.',name: 'Przepisy ogólne',children: [
{L: 3,num: '§ 1.',name: 'Zakres rozporządzenia',children: [
{L: 4,num: '1.',name: 'Wymagania',children: [
{L: 5,num: '',name: 'Rozporządzenie określa wymagania w zakresie: <br>1) przeciwpożarowego zaopatrzenia w wodę; <br>2) dróg pożarowych.'}] }] },
{L: 3,num: '§ 2.',name: 'Objaśnienia',children: [
{L: 4,num: '1.',name: 'Budynek',children: [
{L: 5,num: '',name: 'Ilekroć w rozporządzeniu jest mowa o:<br>1) budynkach - należy rozumieć przez to budynki, o których mowa w § 3 pkt 4-6,<br>2) kategorii zagrożenia ludzi - należy rozumieć przez to kategorie, o których mowa w § 209 ust. 2,<br>3) strefach pożarowych - należy rozumieć przez to określenia zawarte w § 226 ust. 1 i 2,<br>4) kondygnacji - należy rozumieć przez to określenia zawarte w § 3 pkt 16 i 17,<br>5) grupach wysokości - należy rozumieć przez to określenia zawarte w § 8<br>- rozporządzenia Ministra Infrastruktury z dnia 12 kwietnia 2002 r. w sprawie warunków technicznych, jakim powinny odpowiadać budynki i ich usytuowanie (Dz. U. Nr 75, poz. 690, późn. zm.).'}] },
{L: 4,num: '2.',name: 'Obiekt budowlany',children: [
{L: 5,num: '',name: 'Ilekroć w rozporządzeniu jest mowa o obiekcie budowlanym, należy rozumieć przez to obiekt budowlany, o którym mowa w art. 3 katalog pojęć ustawowych pkt 1 ustawy z dnia 7 lipca 1994 r. - Prawo budowlane (Dz. U. z 2006 r. Nr 156, poz. 1118, z późn. zm.).'}] },
{L: 4,num: '3.',name: 'Zabudowa',children: [
{L: 5,num: '',name: 'Ilekroć w rozporządzeniu użyte są określenia dotyczące: <br>1) jednostki osadniczej - należy rozumieć przez to określenie zawarte w art. 2 objaśnienie pojęć ustawowych pkt 1, <br>2) zabudowy kolonijnej (kolonii) - należy rozumieć przez to określenie zawarte w art. 2 objaśnienie pojęć ustawowych pkt 2 <br>- ustawy z dnia 29 sierpnia 2003 r. o urzędowych nazwach miejscowości i obiektów fizjograficznych (Dz. U. Nr 166, poz. 1612 oraz z 2005 r. Nr 17, poz. 141).'}] }] }] },
{L: 2,num: 'Rozdział 2.',name: 'Rodzaje obiektów wymagających zapewnienia przeciwpożarowego zaopatrzenia w wodę do zewnętrznego gaszenia pożaru',children: [
{L: 3,num: '§ 3.',name: 'Wymagane zaopatrzenie',children: [
{L: 4,num: '1.',name: 'Obligatoryjne zapewnienie',children: [
{L: 5,num: '',name: 'Zapewnienie przeciwpożarowego zaopatrzenia w wodę do zewnętrznego gaszenia pożaru jest wymagane dla:<br>1) jednostek osadniczych o liczbie mieszkańców przekraczającej 100 osób, niestanowiących zabudowy kolonijnej, a także znajdujących się w ich granicach: budynków użyteczności publicznej i zamieszkania zbiorowego oraz obiektów budowlanych produkcyjnych i magazynowych;<br>2) budynków użyteczności publicznej i zamieszkania zbiorowego oraz obiektów budowlanych produkcyjnych i magazynowych, znajdujących się poza granicami jednostek osadniczych wymienionych w pkt 1, o kubaturze brutto przekraczającej 2.500 m3 lub o powierzchni przekraczającej 500 m2, z wyjątkiem stacji paliw płynnych ze zbiornikami o łącznej pojemności do 200 m3 i stacji gazu płynnego;<br>3) obiektów budowlanych niebędących budynkami, przeznaczonych na potrzeby użyteczności publicznej lub do zamieszkania zbiorowego, w których znajduje się strefa pożarowa o powierzchni przekraczającej 1.000 m2 lub przeznaczona do jednoczesnego przebywania ponad 50 osób;<br>4) obiekty budowlane gospodarki rolnej o powierzchni strefy pożarowej przekraczającej 1.000 m2.'}] },
{L: 4,num: '2.',name: 'Pozostałe obiekty',children: [
{L: 5,num: '',name: 'Dla pozostałych obiektów budowlanych woda do celów przeciwpożarowych do zewnętrznego gaszenia pożaru jest zapewniana w ramach ilości wody przewidywanych dla jednostek osadniczych, nie mniejszej jednak niż 10 dm3/s, z zastrzeżeniem ust. 3.'}] },
{L: 4,num: '3.',name: 'Małe jednostki osadnicze',children: [
{L: 5,num: '',name: 'W przypadku jednostki osadniczej o liczbie mieszkańców do 2.000 wymagana ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla pozostałych obiektów budowlanych powinna wynosić co najmniej 5 dm3/s.'}] }] }] },
{L: 2,num: 'Rozdział 3.',name: 'Sposoby określania wymaganej ilości wody do celów przeciwpożarowych',children: [
{L: 3,num: '§ 4.',name: 'Woda dla jednostek osadniczych',children: [
{L: 4,num: '1.',name: 'Wymagana ilość wody',children: [
{L: 5,num: '',name: 'Wymagana ilość wody do celów przeciwpożarowych dla jednostek osadniczych jest określona w tabeli nr 1 załącznika do rozporządzenia.'}] },
{L: 4,num: '2.',name: 'Oddzielenie dzielnic i osiedli',children: [
{L: 5,num: '',name: 'Wymagana ilość wody do celów przeciwpożarowych może być określona odrębnie dla dzielnicy i osiedla w jednostce osadniczej, pod warunkiem oddzielenia ich od innych dzielnic i osiedli pasami niezabudowanego terenu o szerokości co najmniej 100 m, na których dopuszcza się drzewostan liściasty lub mieszany składający się co najmniej w 50 % z drzew liściastych.'}] },
{L: 4,num: '3.',name: 'Dostępność wody',children: [
{L: 5,num: '',name: 'Woda do celów przeciwpożarowych dla obiektów, o których mowa w § 3, powinna być dostępna w szczególności z urządzeń zaopatrujących w wodę ludność, zgodnie z regulaminem dostarczania wody i odprowadzania ścieków, o którym mowa w art. 19 regulamin dostarczania wody i odprowadzania ścieków ust. 1 ustawy z dnia 7 czerwca 2001 r. o zbiorowym zaopatrzeniu w wodę i zbiorowym odprowadzaniu ścieków (Dz. U. z 2006 r. Nr 123, poz. 858, z 2007 r. Nr 147, poz. 1033 oraz z 2009 r. Nr 18, poz. 97).'}] },
{L: 4,num: '4.',name: 'Zapewnienie wymaganej ilości wody',children: [
{L: 5,num: '',name: 'Wodę do celów przeciwpożarowych w wymaganej ilości określonej w sposób, o którym mowa w ust. 1 i 2, powinna zapewniać sieć wodociągowa doprowadzająca wodę do jednostki osadniczej.'}] },
{L: 4,num: '5.',name: 'Uzupełniające źródło wody',children: [
{L: 5,num: '',name: 'W przypadku gdy w jednostce osadniczej zasoby wody przeznaczonej dla ludności dostarczanej wodociągiem nie zapewniają ilości wymaganych do celów przeciwpożarowych, wykonuje się, w odległości nie większej niż 250 m od skrajnej zabudowy jednostki osadniczej lub chronionego obiektu budowlanego, co najmniej jedno z następujących uzupełniających źródeł wody:<br>1) studnię o wydajności nie mniejszej niż 10 dm3/s;<br>2) punkt czerpania wody przy naturalnym lub sztucznym zbiorniku wodnym o pojemności zapewniającej odpowiedni zapas wody albo na cieku wodnym o stałym przepływie wody nie mniejszym niż 20 dm3/s przy najniższym stanie wód;<br>3) przeciwpożarowy zbiornik wodny spełniający wymagania Polskiej Normy.'}] },
{L: 4,num: '6.',name: 'Wymagania dla uzupełniającego źródła wody',children: [
{L: 5,num: '',name: 'Uzupełniające źródło wody, o którym mowa w ust. 5 pkt 1 i 2, powinno umożliwiać pobieranie wody z głębokości nie większej niż 4 m, licząc między lustrem wody, a poziomem stanowiska czerpania wody, i być wyposażone w:<br>1) studzienkę ssawną lub inne urządzenie umożliwiające pobór wody, zabezpieczone przed zamuleniem i zamarzaniem;<br>2) stanowisko czerpania wody wraz z dojazdem.'}] },
{L: 4,num: '7.',name: 'Zabezpieczenie uzupełniających źródeł wody',children: [
{L: 5,num: '',name: 'Uzupełniające źródła wody, o których mowa w ust. 5, powinny być zabezpieczone przed przypadkowym wpadnięciem do nich ludzi lub zwierząt.'}] }] },
{L: 3,num: '§ 5.',name: 'Budynki użyteczności publicznej',children: [
{L: 4,num: '1.',name: 'Wymagana ilość wody',children: [
{L: 5,num: '',name: 'Wymagana ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla budynków użyteczności publicznej i zamieszkania zbiorowego oraz innych obiektów budowlanych o takim przeznaczeniu, służąca do zewnętrznego gaszenia pożaru, wynosi:<br>1) dla budynku o kubaturze brutto do 5.000 m3 i o powierzchni wewnętrznej do 1.000 m2 - 10 dm3/s z co najmniej jednego hydrantu o średnicy 80 mm lub 100 midx3 zapasu wody w przeciwpożarowym zbiorniku wodnym;<br>2) dla budynków niewymienionych w pkt 1 - 20 dm3/s łącznie z co najmniej dwóch hydrantów o średnicy 80 mm lub 200 m3 zapasu wody w przeciwpożarowym zbiorniku wodnym;<br>3) dla obiektów wymienionych w § 3 ust. 1 pkt 3 - 10 dm3/s z co najmniej jednego hydrantu o średnicy 80 mm lub 100 m3 zapasu wody w przeciwpożarowym zbiorniku wodnym.'}] },
{L: 4,num: '2.',name: 'Uzupełniające źródła wody',children: [
{L: 5,num: '',name: 'W przypadku braku wymaganej ilości wody, o której mowa w ust. 1, dopuszcza się jej uzupełnienie ze źródeł, o których mowa w § 4 ust. 5, przy czym w przypadku przeciwpożarowego zbiornika wodnego jego pojemność powinna wynosić 10 m3 zapasu wody na 1 dm3/s brakującej wydajności wodociągu, jednak nie mniej niż 50 m3.'}] },
{L: 4,num: '3.',name: 'Pomieszczenia magazynowe',children: [
{L: 5,num: '',name: 'W przypadku gdy w budynku użyteczności publicznej lub zamieszkania zbiorowego bądź w innych obiektach budowlanych o takim przeznaczeniu w jednej strefie pożarowej znajdują się również pomieszczenia magazynowe, wymaganą ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla takiego budynku lub obiektu budowlanego określa się zgodnie z zasadami wskazanymi w ust. 1 i 2, z uwzględnieniem wymaganej ilości wody dla pomieszczeń magazynowych ustalonej zgodnie z zasadami określonymi w § 6 ust. 3, z zastrzeżeniem, że dla tych ustaleń zamiast powierzchni strefy pożarowej przyjmuje się łączną powierzchnię pomieszczeń magazynowych, przyjmując dla całego budynku lub obiektu budowlanego wyższe z wymagań.'}] }] },
{L: 3,num: '§ 6.',name: 'Obiekty produkcyjno-magazynowe',children: [
{L: 4,num: '1.',name: 'Źródło zaopatrzenia wodnego',children: [
{L: 5,num: '',name: 'Wodę dla obiektów budowlanych produkcyjnych i magazynowych, w ilości wymaganej do celów przeciwpożarowych do zewnętrznego gaszenia pożaru, należy zapewnić z urządzeń dostarczających ją do celów bytowo-gospodarczych i technologicznych lub z innych zasobów wody służących do tego celu.'}] },
{L: 4,num: '2.',name: 'Uzupełniające źródła wody',children: [
{L: 5,num: '',name: 'W przypadku gdy w obiektach budowlanych produkcyjnych i magazynowych urządzenia i zasoby wody, o których mowa w ust. 1, nie zapewniają wymaganej ilości do celów przeciwpożarowych do zewnętrznego gaszenia pożaru, wykorzystuje się urządzenia służące do dostarczania wody do jednostek osadniczych lub uzupełniające źródła wody, o których mowa w § 4 ust. 5.'}] },
{L: 4,num: '3.',name: 'Wymagana ilość wody',children: [
{L: 5,num: '',name: 'Wymaganą ilość wody do celów przeciwpożarowych dla obiektów budowlanych produkcyjnych i magazynowych, z wyjątkiem wymienionych w ust. 4-8, służącą do zewnętrznego gaszenia pożaru, określa się, biorąc pod uwagę tę strefę pożarową, dla której jest ona największa, zgodnie z tabelą nr 2 załącznika do rozporządzenia.'}] },
{L: 4,num: '4.',name: 'Stacje paliw i gazu',children: [
{L: 5,num: '',name: 'Wymagana ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla stacji paliw i stacji gazu płynnego oraz stacji gazu ziemnego wynosi 10 dm3/s.'}] },
{L: 4,num: '5.',name: 'Zbiorniki',children: [
{L: 5,num: '',name: 'Wymaganą ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla zbiorników z gazami palnymi oraz z cieczami o temperaturze zapłonu do 373,15 K (100 °C) niebędącymi produktami naftowymi oraz dla zbiorników z produktami naftowymi o temperaturze zapłonu od 328,15 K (55 °C) do 373,15 K (100 °C), z wyjątkiem podgrzanych powyżej temperatury zapłonu, służącą do zewnętrznego gaszenia pożaru, określa tabela nr 3 załącznika do rozporządzenia.'}] },
{L: 4,num: '6.',name: 'Pozostałe zbiorniki z prodyktami naftowymi',children: [
{L: 5,num: '',name: 'Wymaganą ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla zbiorników z produktami naftowymi, z wyjątkiem występujących na stacjach paliw i stacjach gazu płynnego oraz wymienionych w ust. 5, określa się zgodnie z przepisami rozporządzenia Ministra Gospodarki z dnia 21 listopada 2005 r. w sprawie warunków technicznych, jakim powinny odpowiadać bazy i stacje paliw płynnych, rurociągi przesyłowe dalekosiężne służące do transportu ropy naftowej i produktów naftowych i ich usytuowanie (Dz. U. Nr 243, poz. 2063 oraz z 2007 r. Nr 240, poz. 1753).'}] },
{L: 4,num: '7.',name: 'Gazy palne i ciecze poza budynkami',children: [
{L: 5,num: '',name: 'Wymaganą ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla urządzeń technologicznych oraz składów i magazynów z gazami palnymi i cieczami o temperaturze zapłonu do 373,15 K (100 °C), zlokalizowanych poza budynkami, określa tabela nr 4 załącznika do rozporządzenia.'}] },
{L: 4,num: '8.',name: 'Stał, sypkie materiały palne i ciecze T>100C',children: [
{L: 5,num: '',name: 'Wymagana ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla silosów, komór i zasobników ze stałymi sypkimi materiałami palnymi oraz dla zbiorników z cieczami palnymi o temperaturze zapłonu powyżej 373,15 K (100 °C) wynosi 10 dm3/s.'}] },
{L: 4,num: '9.',name: 'Obiekty gospodarki rolnej',children: [
{L: 5,num: '',name: 'Wymaganą ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru dla obiektów budowlanych gospodarki rolnej należy zapewnić w następujących ilościach:<br>1) dla obiektów o powierzchni strefy pożarowej do 2.000 m2 - co najmniej 10 dm3/s;<br>2) dla obiektów o powierzchni strefy pożarowej przekraczającej 2.000 m2 - co najmniej 15 dm3/s.'}] },
{L: 4,num: '10.',name: 'Zbiorniki wodne',children: [
{L: 5,num: '',name: 'W przypadku gdy wydajność wodociągu stanowiącego źródło wody do celów przeciwpożarowych nie zapewnia ilości określonej w ust. 3-5 i 7-9, należy zapewnić uzupełniający zapas wody w zbiornikach przeciwpożarowych, technologicznych lub naturalnych, przystosowanych do poboru wody przez pompy pożarnicze:<br>1) dla obiektów budowlanych produkcyjnych i magazynowych wymienionych w ust. 3, w ilości równej iloczynowi brakującej wydajności wodociągu przez czas trwania pożaru przewidziany dla rozpatrywanej strefy pożarowej, ustalony w Polskiej Normie dotyczącej obliczania gęstości obciążenia ogniowego oraz wyznaczania względnego czasu trwania pożaru, jednak nie większy niż 4 godziny;<br>2) dla obiektów budowlanych wymienionych w ust. 4, 5 i 7-9, w ilości odpowiadającej 10 m3 zapasu wody na 1 dm3/s brakującej wydajności wodociągu.'}] },
{L: 4,num: '11.',name: 'Uzupełnienie ze studni lub cieku',children: [
{L: 5,num: '',name: 'W przypadku braku wymaganej ilości wody, o której mowa w ust. 3-5 i 7-9, dopuszcza się jej uzupełnienie ze studni lub z cieku wodnego, o których mowa w § 4 ust. 5 pkt 1 i 2.'}] }] },
{L: 3,num: '§ 7.',name: 'Obiekty ze stałymi urządzeniami gaśniczymi',children: [
{L: 4,num: '1.',name: 'Wymagana ilość wody',children: [
{L: 5,num: '',name: 'Wymagana ilość wody do celów przeciwpożarowych dla stref pożarowych wyposażonych w stałe urządzenia gaśnicze i zabezpieczające zarówno przy wspólnym, jak i oddzielnym wykorzystywaniu wodociągu lub zapasu wody do zasilania tych urządzeń i zewnętrznego gaszenia pożaru, w obiektach budowlanych, o których mowa w § 5 ust. 1 i 3 oraz w § 6 ust. 3, 5 i 7, jest równa:<br>1) przy zastosowaniu urządzeń zraszaczowych zabezpieczających - sumie ilości wody do zasilania tych urządzeń i do zewnętrznego gaszenia pożaru;<br>2) przy zastosowaniu urządzeń gaśniczych tryskaczowych, zraszaczowych i mgłowych oraz sieci stałych działek gaśniczych - sumie ilości wody do zasilania tych urządzeń i zmniejszonej o 50 % ilości wody do zewnętrznego gaszenia pożaru, z tym że wymagana ilość wody powinna być nie mniejsza niż ilość wody do zewnętrznego gaszenia pożaru;<br>3) przy zastosowaniu urządzeń gaśniczych pianowych - sumie ilości wody do zasilania tych urządzeń i zmniejszonej o 75 % ilości wody do zewnętrznego gaszenia pożaru, z tym że wymagana ilość wody powinna być nie mniejsza niż ilość wody do zewnętrznego gaszenia pożaru.'}] },
{L: 4,num: '2.',name: 'Wymagania dla wodociągu',children: [
{L: 5,num: '',name: 'Wodociąg, który służy nie tylko do celów przeciwpożarowych, powinien mieć wydajność zapewniającą łącznie wymaganą ilość wody dla potrzeb:<br>1) przeciwpożarowych;<br>2) bytowo-gospodarczych, ograniczonych do 15 %;<br>3) przemysłowych, ograniczonych do niezbędnej obsługi urządzeń technologicznych.'}] }] },
{L: 3,num: '§ 8.',name: 'Brak źródła wody',children: [
{L: 4,num: '1.',name: 'Zastępcze źródło wody',children: [
{L: 5,num: '',name: 'W przypadku braku źródła wody zapewniającego wymaganą ilość wody do celów przeciwpożarowych, właściwy miejscowo komendant powiatowy (miejski) Państwowej Straży Pożarnej na wniosek właściciela budynku, obiektu budowlanego lub terenu, może dopuścić na czas określony zastępcze źródło wody do celów przeciwpożarowych, w szczególności naturalny lub sztuczny zbiornik wody, studnię lub ciek wodny, wyposażone w stanowisko czerpania wody wraz z dojazdem.'}] },
{L: 4,num: '2.',name: 'Wymagania dla zastępczego źródła wody',children: [
{L: 5,num: '',name: 'Zastępcze źródło wody, o którym mowa w ust. 1, powinno zapewniać możliwość prowadzenia działań gaśniczych z użyciem sił i środków dostępnych w rejonie działania najbliższej jednostki ochrony przeciwpożarowej.'}] },
{L: 4,num: '3.',name: 'Rozwiązania zamienne',children: [
{L: 5,num: '',name: 'W szczególnie uzasadnionych przypadkach, gdy spełnienie wymagań dotyczących przeciwpożarowego zaopatrzenia w wodę jest niemożliwe ze względu na lokalne uwarunkowania lub jest uzasadnione przyjęcie innych rozwiązań, na wniosek właściciela budynku, obiektu budowlanego lub terenu, dopuszcza się stosowanie rozwiązań zamiennych, które zapewniają niepogorszenie warunków ochrony przeciwpożarowej, uzgodnionych z właściwym miejscowo komendantem wojewódzkim Państwowej Straży Pożarnej.'}] },
{L: 4,num: '4.',name: 'Projektowanie i budowa',children: [
{L: 5,num: '',name: 'Wymagania dotyczące projektowania i budowy sieci wodociągowych, przeciwpożarowych zbiorników wodnych wraz ze stanowiskami czerpania wody oraz dojazdami do nich określają odpowiednie Polskie Normy.'}] }] }] },
{L: 2,num: 'Rozdział 4.',name: 'Wymagania przeciwpożarowe dla sieci wodociągowych',children: [
{L: 3,num: '§ 9.',name: 'Sieć wodociągowa przeciwpożarowa',children: [
{L: 4,num: '1.',name: 'Zasilanie',children: [
{L: 5,num: '',name: 'Sieć wodociągowa stanowiąca źródło wody do celów przeciwpożarowych, zwana dalej "siecią wodociągową przeciwpożarową", powinna być zasilana z pompowni przeciwpożarowej, zbiornika wieżowego, studni lub innych urządzeń, zapewniających wymaganą wydajność i ciśnienie w hydrantach zewnętrznych, nawet tych niekorzystnie ulokowanych, przez co najmniej 2 godziny.'}] },
{L: 4,num: '2.',name: 'Wydajność',children: [
{L: 5,num: '',name: 'Sieć wodociągowa przeciwpożarowa powinna zapewniać wydajność nie mniejszą niż 5 dm3/s i ciśnienie w hydrancie zewnętrznym nie mniejsze niż 0,1 MPa (megapaskala), przez co najmniej 2 godziny.'}] },
{L: 4,num: '3.',name: 'Budowa',children: [
{L: 5,num: '',name: 'Sieć wodociągową przeciwpożarową należy wykonywać jako sieć obwodową. Dopuszcza się budowę sieci wodociągowej przeciwpożarowej rozgałęzieniowej poza obszarami miejskimi oraz tam, gdzie łączna wymagana ilość wody nie przekracza 20 dm3/s.'}] },
{L: 4,num: '4.',name: 'Odgałęzienia',children: [
{L: 5,num: '',name: 'Dopuszcza się budowę odgałęzień z sieci obwodowej w celu zasilania hydrantów zewnętrznych.'}] },
{L: 4,num: '5.',name: 'Wydajność>30',children: [
{L: 5,num: '',name: 'W przypadku gdy łączna wymagana ilość wody przekracza 30 dm3/s, sieć obwodową zasila się w dwóch punktach znajdujących się w możliwie największej odległości od siebie, nie mniejszej jednak niż 1/4 obwodu sieci.'}] },
{L: 4,num: '6.',name: 'Wydajność>20',children: [
{L: 5,num: '',name: 'Sieć wodociągową przeciwpożarową, dla której łączna wymagana ilość wody przekracza 20 dm3/s, należy tak zaprojektować i budować, aby możliwe było jednoczesne pobieranie wody z dwóch sąsiednich hydrantów zewnętrznych.'}] },
{L: 4,num: '7.',name: 'Średnice hydrantów',children: [
{L: 5,num: '',name: 'Wyrażone w milimetrach średnice nominalne (DN) przewodów wodociągowych wykonanych z rur stalowych, na których przewiduje się instalowanie hydrantów zewnętrznych przeciwpożarowych, powinny wynosić co najmniej:<br>1) DN 100 - w sieci obwodowej;<br>2) DN 125 - w sieci rozgałęzieniowej;<br>3) w odgałęzieniach sieci obwodowej - według obliczeń hydraulicznych;<br>4) DN 80 - przy rozbudowie lub modernizacji istniejącego wodociągu o wydajności 5 dm3/s w jednostce osadniczej o liczbie mieszkańców nieprzekraczającej 2.000.'}] },
{L: 4,num: '8.',name: 'Materiały przewodów',children: [
{L: 5,num: '',name: 'W przypadku wykonywania przewodów wodociągowych z materiałów innych niż stalowe powinny one posiadać średnice wewnętrzne równoważne dla odpowiednich rur stalowych.'}] }] },
{L: 3,num: '§ 10.',name: 'Hydranty zewnętrzne',children: [
{L: 4,num: '1.',name: 'Hydranty DN 80',children: [
{L: 5,num: '',name: 'Na sieci wodociągowej przeciwpożarowej stosuje się hydranty zewnętrzne nadziemne o średnicy nominalnej DN 80.'}] },
{L: 4,num: '2.',name: 'Hydranty podziemne DN 80',children: [
{L: 5,num: '',name: 'Dopuszcza się instalowanie hydrantów podziemnych o średnicy nominalnej DN 80 w przypadkach, gdy zainstalowanie hydrantów nadziemnych jest szczególnie utrudnione lub niewskazane, na przykład ze względu na utrudnienia w ruchu.'}] },
{L: 4,num: '3.',name: 'Hydranty DN 100',children: [
{L: 5,num: '',name: 'W obiekcie budowlanym produkcyjnym i magazynowym, w którym wymagana ilość wody do celów przeciwpożarowych do zewnętrznego gaszenia pożaru przekracza 30 dm3/s, w zakładach rafineryjnych i petrochemicznych oraz na magistralnym przewodzie wodociągowym przeciwpożarowym należy instalować hydranty nadziemne o średnicy nominalnej DN 100.'}] },
{L: 4,num: '4.',name: 'Odcięcia',children: [
{L: 5,num: '',name: 'Hydranty zewnętrzne zainstalowane na sieci wodociągowej przeciwpożarowej powinny być wyposażone w odcięcia umożliwiające odłączania ich od sieci. Odcięcia te muszą pozostawać w położeniu otwartym podczas normalnej eksploatacji sieci.'}] },
{L: 4,num: '5.',name: 'Wymagania dla hydrantów zewnętrznych',children: [
{L: 5,num: '',name: 'Hydranty zewnętrzne powinny spełniać wymagania Polskich Norm dotyczących tych urządzeń, będących odpowiednikami norm europejskich (EN).'}] },
{L: 4,num: '6.',name: 'Odległości w obszarach miesjkich',children: [
{L: 5,num: '',name: 'Hydranty zewnętrzne umieszcza się wzdłuż dróg i ulic oraz przy ich skrzyżowaniach, przy zachowaniu odległości:<br>1) między hydrantami - do 150 m;<br>2) od zewnętrznej krawędzi jezdni drogi lub ulicy - do 15 m;<br>3) najbliższego hydrantu od chronionego obiektu budowlanego - do 75 m;<br>4) innych niż wymienione w pkt 3 hydrantów wymaganych do ochrony obiektu budowlanego - do 150 m;<br>5) od ściany chronionego budynku - co najmniej 5 m.'}] },
{L: 4,num: '7.',name: 'Odległości poza obszarami miejskimi',children: [
{L: 5,num: '',name: 'Poza obszarami miejskimi odległość między hydrantami powinna być dostosowana do gęstości istniejącej i planowanej zabudowy.'}] },
{L: 4,num: '8.',name: 'Wydajność nominalna hydrantu zewnęrznego',children: [
{L: 5,num: '',name: 'Wydajność nominalna hydrantu zewnętrznego, przy ciśnieniu nominalnym 0,2 MPa mierzonym na zaworze hydrantowym podczas poboru wody, w zależności od jego średnicy nominalnej (DN), nie może być mniejsza niż:<br>1) dla hydrantu nadziemnego DN 80 - 10 dm3/s;<br>2) dla hydrantu nadziemnego DN 100 - 15 dm3/s;<br>3) dla hydrantu podziemnego DN 80 - 10 dm3/s;<br>4) dla hydrantu nadziemnego DN 80 na sieci, o której mowa w § 9 ust. 2 - 5 dm3/s.'}] },
{L: 4,num: '9.',name: 'Intensywne czerpanie wody',children: [
{L: 5,num: '',name: 'Dla zapewnienia możliwości intensywnego czerpania wody do celów przeciwpożarowych na sieciach wodociągowych o średnicy nominalnej nie mniejszej niż DN 250 powinny być instalowane hydranty nadziemne, spełniające następujące wymagania:<br>1) średnica nominalna hydrantu powinna wynosić DN 100 lub DN 150;<br>2) wydajność nominalna przy ciśnieniu nominalnym 0,2 MPa mierzonym na zaworze hydrantowym podczas poboru wody nie może być mniejsza niż 20 dm3/s;<br>3) hydranty powinny być usytuowane w miejscach dostępnych z głównych dróg komunikacyjnych na terenie jednostki osadniczej;<br>4) miejsce usytuowania hydrantu należy oznakować znakami zgodnymi z Polskimi Normami wraz z podaniem na znaku dodatkowym wielkości charakterystycznych hydrantu;<br>5) przy hydrancie należy przewidzieć stanowisko czerpania wody o wymiarach zapewniających swobodny dostęp do hydrantu;<br>6) na stanowisku czerpania wody należy umieścić zakaz parkowania.'}] },
{L: 4,num: '10.',name: 'Określenie potrzeb',children: [
{L: 5,num: '',name: 'Określenia potrzeb w zakresie instalowania hydrantów, o których mowa w ust. 9, dokonują właściwe miejscowo organy Państwowej Straży Pożarnej w ramach opiniowania projektów studium uwarunkowań i kierunków zagospodarowania przestrzennego gminy oraz projektów miejscowych planów zagospodarowania przestrzennego, w trybie określonym w przepisach o planowaniu i zagospodarowaniu przestrzennym.'}] },
{L: 4,num: '11.',name: 'Maksymalne ciśnienie',children: [
{L: 5,num: '',name: 'Maksymalne ciśnienie hydrostatyczne w sieci wodociągowej przeciwpożarowej nie może przekraczać 1,6 MPa.'}] },
{L: 4,num: '12.',name: 'Oznakowanie',children: [
{L: 5,num: '',name: 'Miejsce usytuowania hydrantu zewnętrznego należy oznakować znakami zgodnymi z Polskimi Normami.'}] },
{L: 4,num: '13.',name: 'Przegląd i konserwacja',children: [
{L: 5,num: '',name: 'Hydranty zewnętrzne powinny być co najmniej raz w roku poddawane przeglądom i konserwacji przez właściciela sieci wodociągowej przeciwpożarowej.'}] }] }] },
{L: 2,num: 'Rozdział 5.',name: 'Pompownie przeciwpożarowe',children: [
{L: 3,num: '§ 11.',name: 'Pompy przeciwpożarowe',children: [
{L: 4,num: '1.',name: 'Podstawowe źródło energii',children: [
{L: 5,num: '',name: 'Podstawowym źródłem energii dla pomp w pompowniach przeciwpożarowych powinna być sieć elektroenergetyczna lub silnik spalinowy z zapasem paliwa wystarczającym na 4 godziny pracy przy pełnym obciążeniu.'}] },
{L: 4,num: '2.',name: 'Źródła energii dla większego zapotrzebowania',children: [
{L: 5,num: '',name: 'Przy zapotrzebowaniu na wodę do celów przeciwpożarowych przekraczającym 20 dm3/s:<br>1) pompy należy zasilać z dwóch odrębnych źródeł energii, podstawowego i rezerwowego, przy czym jako źródło rezerwowe dopuszcza się agregat prądotwórczy napędzany silnikiem, o którym mowa w ust. 1;<br>2) w przypadku pracy pomp w systemie ciągłego podawania wody, w pompowni należy zapewnić co najmniej dwie pompy, w tym jedną rezerwową o parametrach nie niższych od parametrów największej z zainstalowanych pomp.'}] },
{L: 4,num: '3.',name: 'Wymagane ciśnienie',children: [
{L: 5,num: '',name: 'Pompy powinny zapewniać wymagane ciśnienie przy największym poborze wody w hydrantach położonych najwyżej lub najbardziej niekorzystnie.'}] },
{L: 4,num: '4.',name: 'Układ pomiarowy',children: [
{L: 5,num: '',name: 'Pompy powinny być wyposażone w układ pomiarowy składający się z ciśnieniomierza, przepływomierza i zaworu regulacyjnego, pozwalający na okresową kontrolę parametrów pracy.'}] },
{L: 4,num: '5.',name: 'Napęd pomp',children: [
{L: 5,num: '',name: 'Napęd pomp w pompowniach przeciwpożarowych powinien spełniać wymagania określone w Polskiej Normie dotyczącej urządzeń tryskaczowych.'}] },
{L: 4,num: '6.',name: 'Wymagania dla zasilania elektrycznego',children: [
{L: 5,num: '',name: 'Pompy zasila się z sieci elektroenergetycznej z obwodu niezależnego od wszystkich innych obwodów w obiekcie, spełniającego wymagania dla instalacji bezpieczeństwa, określone w Polskiej Normie dotyczącej instalacji elektrycznych w obiektach budowlanych.'}] }] }] },
{L: 2,num: 'Rozdział 6.',name: 'Drogi pożarowe',children: [
{L: 3,num: '§ 12.',name: 'Wymogi dla dróg pożarowych',children: [
{L: 4,num: '1.',name: 'Wymaganie drogi pożarowej',children: [
{L: 5,num: '',name: 'Drogę pożarową o utwardzonej nawierzchni, umożliwiającą dojazd pojazdów jednostek ochrony przeciwpożarowej do obiektu budowlanego o każdej porze roku, należy doprowadzić do:<br>1) budynku zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL I lub ZL II;<br>2) budynku należącego do grupy wysokości: średniowysoki, wysoki lub wysokościowy, zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL III, ZL IV lub ZL V;<br>3) budynku zawierającego strefę pożarową produkcyjną lub magazynową oraz do strefy pożarowej poza budynkiem, obejmującej urządzenia technologiczne, plac składowy lub wiatę, jeżeli gęstość obciążenia ogniowego wymienionych stref pożarowych przekracza 500 MJ/m2 i zachodzi co najmniej jeden z warunków:<br>a) powierzchnia strefy pożarowej przekracza 1.000 m2,<br>b) występuje pomieszczenie zagrożone wybuchem;<br>4) budynku zawierającego strefę pożarową produkcyjną lub magazynową o gęstości obciążenia ogniowego poniżej 500 MJ/m2 o powierzchni przekraczającej 20.000 m2;<br>5) budynku niskiego:<br>a) zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL III o powierzchni przekraczającej 1.000 m2, obejmującą kondygnację nadziemną inną niż pierwsza, lub<br>b) zawierającego strefę pożarową zakwalifikowaną do kategorii zagrożenia ludzi ZL V i mającego ponad 50 miejsc noclegowych;<br>6) obiektu budowlanego innego niż budynek, przeznaczonego do użyteczności publicznej lub zamieszkania zbiorowego, w którym przewiduje się możliwość jednoczesnego przebywania w strefie pożarowej ponad 50 osób;<br>7) stanowiska czerpania wody do celów przeciwpożarowych.'}] },
{L: 4,num: '2.',name: 'Przebieg drogi pożarowej',children: [
{L: 5,num: '',name: 'Droga pożarowa powinna przebiegać wzdłuż dłuższego boku budynku, o którym mowa w ust. 1 pkt 1-4, na całej jego długości, a w przypadku gdy krótszy bok budynku ma więcej niż 60 m - z jego dwóch stron, przy czym bliższa krawędź drogi pożarowej musi być oddalona od ściany budynku o 5-15 m dla obiektów zaliczanych do kategorii zagrożenia ludzi i o 5-25 m dla pozostałych obiektów. Pomiędzy tą drogą i ścianą budynku nie mogą występować stałe elementy zagospodarowania terenu lub drzewa i krzewy o wysokości przekraczającej 3 m, uniemożliwiające dostęp do elewacji budynku za pomocą podnośników i drabin mechanicznych.'}] },
{L: 4,num: '3.',name: 'Szczególne przypadki',children: [
{L: 5,num: '',name: 'W przypadkach uzasadnionych warunkami lokalnymi, w szczególności architektonicznymi, droga pożarowa do budynków, o których mowa w ust. 1 pkt 1-4, może być poprowadzona w taki sposób, aby był zapewniony dostęp do:<br>1) 30 % obwodu zewnętrznego budynku, przy jego rozpiętości (największej szerokości) do 60 m,<br>2) 50 % obwodu zewnętrznego budynku, przy jego rozpiętości przekraczającej 60 m,<br>3) 100 % długości elewacji od frontu budynku, przy zabudowie pierzejowej<br>- przy spełnieniu pozostałych wymagań określonych w ust. 2.'}] },
{L: 4,num: '4.',name: 'Wyjścia z obiektów',children: [
{L: 5,num: '',name: 'Wyjścia z obiektów budowlanych, o których mowa w ust. 1 pkt 1-6, powinny mieć połączenie z drogą pożarową, dojściem o szerokości minimalnej 1,5 m i długości nie większej niż 50 m, w sposób zapewniający dotarcie bezpośrednio lub drogami ewakuacyjnymi do każdej strefy pożarowej w tych obiektach.'}] },
{L: 4,num: '5.',name: 'Dźwigi dla ekip ratowniczych',children: [
{L: 5,num: '',name: 'Każdy dźwig dla ekip ratowniczych w budynku powinien mieć połączenie z drogą pożarową dojściem, o którym mowa w ust. 4, przy czym wymieniona długość dojścia powinna obejmować również drogę ewakuacyjną w budynku.'}] },
{L: 4,num: '6.',name: 'Wyjątki',children: [
{L: 5,num: '',name: 'Wymagań, o których mowa w ust. 2 i 3, nie stosuje się, gdy są spełnione łącznie następujące warunki:<br>1) w budynku o więcej niż 3 kondygnacjach nadziemnych, na każdej kondygnacji powyżej trzeciej nadziemnej, do wysokości 25 m, każda klatka schodowa służąca ewakuacji ma okno dla ekip ratowniczych, umożliwiające dostęp z zewnątrz przez otwór o dolnej krawędzi położonej nie wyżej niż 90 cm nad poziomem posadzki oraz o wysokości i szerokości odpowiednio co najmniej 110 cm i 60 cm, lub ma zapewnione dotarcie do takiego okna poziomą drogą ewakuacyjną o długości nieprzekraczającej 50 m;<br>2) droga pożarowa jest doprowadzona do budynku tak, że jej najbliższa krawędź jest oddalona o 5-10 m od rzutu pionowego na poziom terenu każdego z okien, o których mowa w pkt 1, a między tą drogą i wymienionymi oknami nie występują stałe elementy zagospodarowania terenu lub drzewa o wysokości przekraczającej 3 m, uniemożliwiające dotarcie do tych okien za pomocą podnośników i drabin mechanicznych;<br>3) okno, o którym mowa w pkt 1, jest oznakowane od wewnątrz znakiem bezpieczeństwa "nie zastawiać", a z zewnątrz - znakiem bezpieczeństwa odpowiednim do sposobu, w jaki można dostać się do wnętrza budynku, zgodnie z Polską Normą dotyczącą znaków bezpieczeństwa.'}] },
{L: 4,num: '7.',name: 'Wyjątki',children: [
{L: 5,num: '',name: 'Wymagania, o których mowa w ust. 2 i 3, nie dotyczą budynku o nie więcej niż 3 kondygnacjach nadziemnych i wysokości nie większej niż 12 m, jeżeli jest zapewnione połączenie z drogą pożarową wyjść z tego budynku, utwardzonym dojściem o szerokości minimalnej 1,5 m i długości nie większej niż 30 m, w sposób zapewniający dotarcie bezpośrednio lub drogami ewakuacyjnymi do każdej strefy pożarowej.'}] },
{L: 4,num: '8.',name: 'Dojścia przez budynek',children: [
{L: 5,num: '',name: 'Dojścia do budynków, o których mowa w ust. 4 i 7, mogą być prowadzone przez budynek, o ile nie przebiegają one w obrębie strefy pożarowej, do której ma być zapewniony dostęp z drogi pożarowej.'}] },
{L: 4,num: '9.',name: 'Zawracanie pojazdu',children: [
{L: 5,num: '',name: 'Droga pożarowa powinna zapewniać przejazd bez cofania lub powinna być zakończona placem manewrowym o wymiarach 20 m x 20 m, względnie można przewidzieć inne rozwiązania umożliwiające zawrócenie pojazdu, z zastrzeżeniem ust. 10.'}] },
{L: 4,num: '10.',name: 'Cofanie pojazdu',children: [
{L: 5,num: '',name: 'Dopuszcza się wykonanie odcinka drogi pożarowej o długości nie większej niż 15 m, z którego wyjazd jest możliwy jedynie przez cofanie pojazdu.'}] },
{L: 4,num: '11.',name: 'Łuk drogi pożarowej',children: [
{L: 5,num: '',name: 'Najmniejszy promień zewnętrznego łuku drogi pożarowej nie może wynosić mniej niż 11 m.'}] },
{L: 4,num: '12.',name: 'Odstępstwo',children: [
{L: 5,num: '',name: 'Drogi pożarowe oraz place manewrowe w miejscach innych niż wymienione w ust. 2 i 3 mogą być usytuowane w odległości mniejszej niż 5 m od chronionego budynku, pod warunkiem że ściana zewnętrzna budynku na tym odcinku oraz w odległości do 5 m od niego posiada klasę odporności ogniowej wymaganą dla ściany oddzielenia pożarowego tego budynku.'}] }] },
{L: 3,num: '§ 13.',name: 'Szerokość dróg pożarowych',children: [
{L: 4,num: '1.',name: 'Minimalna szerokość',children: [
{L: 5,num: '',name: 'Minimalna szerokość drogi pożarowej powinna wynosić co najmniej 4 m, a jej nachylenie podłużne nie może przekraczać 5 %:<br>1) w miejscach, o których mowa w § 12 ust. 2 i 3, oraz na odcinkach o długości 10 m od tych miejsc, zapewniających dojazd i wyjazd;<br>2) na odcinku o długości 15 m od miejsc doprowadzenia jej do budynku, o których mowa w § 12 ust. 6 pkt 2.'}] },
{L: 4,num: '2.',name: 'Minimalna szerokość i nacisk w obrębie miast i działek',children: [
{L: 5,num: '',name: 'W obrębie miasta oraz na terenie działki, na której jest usytuowany obiekt budowlany, o którym mowa w § 12 ust. 1 pkt 3 i 4, droga pożarowa powinna umożliwiać przejazd pojazdów o nacisku osi na nawierzchnię jezdni co najmniej 100 kN (kiloniutonów), a jej minimalna szerokość w miejscach innych niż wymienione w ust. 1 nie może być mniejsza niż 3,5 m.'}] },
{L: 4,num: '3.',name: 'Minimalna szerokość i nacisk w innych miejscach',children: [
{L: 5,num: '',name: 'Na terenach innych niż wymienione w ust. 2 droga pożarowa powinna umożliwiać przejazd pojazdów o nacisku osi na nawierzchnię jezdni co najmniej 50 kN, a jej minimalna szerokość w miejscach innych niż wymienione w ust. 1 nie może być mniejsza niż 3 m.'}] },
{L: 4,num: '4.',name: 'Rozwiązania zamienne',children: [
{L: 5,num: '',name: 'W szczególnie uzasadnionych przypadkach, gdy spełnienie wymagań dotyczących doprowadzenia drogi pożarowej do obiektu budowlanego jest niemożliwe ze względu na lokalne uwarunkowania lub jest uzasadnione przyjęcie innych rozwiązań, na wniosek właściciela budynku, obiektu budowlanego lub terenu, dopuszcza się stosowanie rozwiązań zamiennych zapewniających niepogorszenie warunków ochrony przeciwpożarowej obiektu, uzgodnionych z właściwym miejscowo komendantem wojewódzkim Państwowej Straży Pożarnej.<br>'}] }] },
{L: 3,num: '§ 14.',name: 'Przejazdy na tereny obudowane',children: [
{L: 4,num: '1.',name: 'Wymiary',children: [
{L: 5,num: '',name: 'Przejazdy na dziedzińce i inne tereny obudowane powinny odpowiadać następującym warunkom:<br>1) wysokość przejazdu nie mniejsza niż 4,2 m, a w budownictwie jednorodzinnym - 3,2 m;<br>2) szerokość przejazdu nie mniejsza niż 3,6 m, w tym szerokość jezdni co najmniej 3 m;<br>3) odległość między przejazdami na jeden dziedziniec nie większa niż 150 m.'}] },
{L: 4,num: '2.',name: 'Oddzielenie od chodników',children: [
{L: 5,num: '',name: 'W przejazdach, których jezdnie są oddzielone od chodników słupami lub ścianami, szerokość jezdni nie może być mniejsza niż 3,6 m.'}] },
{L: 4,num: '3.',name: 'Przejazd jako przejście dla pieszych',children: [
{L: 5,num: '',name: 'W przypadku gdy przejazd jest wykorzystywany jako stałe przejście dla pieszych, należy zapewnić dodatkowo chodnik o szerokości co najmniej 1 m.'}] }] },
{L: 3,num: '§ 15.',name: 'Wysokość wiaduktów i innych przejść',children: [
{L: 4,num: '1.',name: 'Prześwit i szerokość',children: [
{L: 5,num: '',name: 'Wiadukty, estakady, przejścia i inne podobne urządzenia lub stałe elementy, usytuowane ponad drogami pożarowymi, powinny mieć prześwit o wysokości i szerokości nie mniejszej niż 4,5 m.'}] }] },
{L: 3,num: '§ 16.',name: 'Liczba wjazdów, bramy wjazdowe',children: [
{L: 4,num: '1.',name: 'Liczba wjazdów',children: [
{L: 5,num: '',name: 'Na wydzielony teren o powierzchni przekraczającej 5 ha, na którym znajdują się obiekty wymienione w § 12 ust. 1, oraz na place targowe i wystawowe o takiej powierzchni należy zapewnić co najmniej dwa wjazdy, odległe od siebie o co najmniej 75 m.'}] },
{L: 4,num: '2.',name: 'Wymagania dla bram',children: [
{L: 5,num: '',name: 'Bramy wjazdowe muszą spełniać warunki, o których mowa w § 14 ust. 1 pkt 2 i ust. 2.'}] }] }] },
{L: 2,num: 'Rozdział 7.',name: 'Przepisy końcowe',children: [
{L: 3,num: '§ 17.',name: 'Wyjątek w stosowaniu',children: [
{L: 4,num: '1.',name: 'Wyjątek w stosowaniu',children: [
{L: 5,num: '',name: 'Przepis § 12 ust. 2 dotyczący oddalenia bliższej krawędzi drogi pożarowej od ściany obiektów zaliczanych do kategorii zagrożenia ludzi nie ma zastosowania do dróg pożarowych istniejących w dniu wejścia w życie rozporządzenia, jeżeli zostały one wykonane zgodnie z przepisami obowiązującymi w czasie ich budowy.'}] }] },
{L: 3,num: '§ 18.',name: 'Unieważnienie',children: [
{L: 4,num: '1.',name: 'Unieważnienie',children: [
{L: 5,num: '',name: 'Traci moc rozporządzenie Ministra Spraw Wewnętrznych i Administracji z dnia 16 czerwca 2003 r. w sprawie przeciwpożarowego zaopatrzenia w wodę oraz dróg pożarowych (Dz. U. Nr 121, poz. 1139).<br>'}] }] },
{L: 3,num: '§ 19.',name: 'Wejście w życie rozporządzenia',children: [
{L: 4,num: '1. ',name: 'Wejście w życie',children: [
{L: 5,num: '',name: 'Rozporządzenie wchodzi w życie po upływie 14 dni od dnia ogłoszenia.'}] }] }] }] }

    ]