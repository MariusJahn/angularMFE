## Notwendigkeiten und Probleme

### Notwendigkeiten

- Das [Paket](https://www.npmjs.com/package/@angular-architects/module-federation) kommt mit als Dependency in das Projekt und muss dementsprechend mit gewartet werden.

- Es kann nur ein forRoot RoutingModul geben (Shell). Alle anderen MFEs müssen als forChildren Routen eingetragen werden (z.B. im App-Modul der MFE-App). Hier ist leichter die Routen in ein File zu legen. (app.routes.ts)

- Libraries / Pakete müssen und sollten geshared werden. (share in der Webpackconfig). So entsteht weniger Overhead beim verheiraten der Anwendung.

Bonus: Man kann Components auch direkt um die Loadfunktion im Router mappen um die Komponente zu nutzen. Siehe hier im [Video](https://www.youtube.com/watch?v=ox0aoy2KHK0)

- Man muss eine Entscheidung treffen ob Mono oder Multi Repository -> Im Endeffekt laufen die Anwendungen eh in einem Container.

### Probleme

- ich kann vorstellen das die autorisierung etwas hakeliger wird. Muss man sich nochmal anschauen.

- Die Struktur an sich wird erstmal Komplexer und größer
