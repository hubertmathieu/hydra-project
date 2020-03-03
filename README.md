# Hydra-Project

Répositoire du projet de serre hydroponique connectée du Cégep de Sorel-Tracy. 

## Introduction

Le projet repose sur une serre flottante qui puise l’eau nécessaire à même la rivière sur
laquelle elle repose. L’eau est filtrée et fertilisée par des engrais naturels solubles dans l’eau.
Elle est ensuite acheminée aux racines des plantes par un évaporateur. C’est une version
plus évoluée de l’hydroponie appelée aéroponie. Les plantes se nourrissent des nutriments
et relâchent dans la rivière une eau purifiée après condensation.

### Prérequis 

Vous trouverez ci-dessous la liste des matériaux ainsi que la liste des différents logiciels qui permettront de faire fonctionner le système d'automatisation de la serre. 
  
|       Électronique             |                  Tuyaux et plomberie            |           Serre et autres      | 
| -------------------------------| ----------------------------------------------- | -------------------------------|
| [2x Relais 5V](https://amzn.to/2rm3FQe)| [Pompe à eau grand débit](https://amzn.to/2pLP6oq) | [Serre](https://amzn.to/33eJiS8) | 
| [6x Capteur d'humidité](https://amzn.to/2OKojkT) | [Pompe à eau petit débit](https://amzn.to/37F01RS) | [Scellant](https://bit.ly/37GrR0q) |
| [3x Capteur de pH](https://amzn.to/33jcuY7) | [Répartiteur de tuyaux](https://amzn.to/35Dt0nz) | [Disque rotatif](https://amzn.to/34mzRkX)| 
| [5x Capteur de niveau d'eau](https://amzn.to/2XVFi8h) | [3x Buse 50 microns](https://bit.ly/2DeN8js) | [Bac de rangement](https://bit.ly/34lHJTV) |   
| [1x FIPY](https://bit.ly/2KRR1iP) | [Ponceau 12po diamètre x 8po long](https://bit.ly/2OKOisl) | [pH Down](https://amzn.to/33lkYy6) | 
| [1x Filtreur](https://amzn.to/2XLTqAy) | [Rouleau de tuyeau en vinyle](https://bit.ly/33ljoMG) | [Engrais](https://amzn.to/2qJ6oTC) | 
| [2x Module Bluetooth](https://amzn.to/34l5aN6)| [Ruban d'étanchéité](https://amzn.to/2qKvdia) |                  |
| [9x Valves solénoïdes](https://amzn.to/2DeVWWT) | [50x Colliers de serrage en plastique](https://bit.ly/2KPPf1u) |
| [Convertisseur 12V-5V](https://amzn.to/2KV8RkR) | [Tuyeaux de cuivre (30' x 1/2")](https://bit.ly/2Djcwoq) |     |
| [Convertisseur 12V-3.3V](https://amzn.to/2QRFST0) |                               |                              | 
| [Convertisseur 120V-12V](https://amzn.to/2QPPcqd) |                               |                              |
| [2x Arduino Uno Rev2](https://bit.ly/2pRjQEL) |                                   |                              |
| [Panneau de distribution](https://amzn.to/2QPEYGv) |                              |                              |        
    
### Installation

La prochaine étape consiste à mettre sur pied un serveur Node Express. Nous avons utilisé la distribution Debian dans cet exemple. 

Installez nodeJS et MongoDB, puis vérifiez la version de l'installation. 
```
$sudo apt-get install nodejs
$node -v 
v13.0.1 // Version du programme.
```

Clonez le répositoire du projet. 
```
$git clone https://github.com/LudoB99/hydra-project.git
$cd hydra-project
$npm install // Mettre à jour les dépendences.
```

Démarrez le serveur 
```
$npm start
> hydra-project@0.0.0 start /home/hydra-project //Output attendu.
> node-dev ./bin/www
```

## Écrit avec l'aide de:

* [NodeJS](https://nodejs.org/en/docs/) - Runtime JavaScript 
* [Express](https://expressjs.com/fr/) - Infrastructure Web
* [MongoDB](https://www.mongodb.com/fr) - Base de données


## Auteurs

* **[Cégep de Sorel-Tracy](https://cegepst.qc.ca)**
* Voyez aussi la liste des [contributeurs](https://github.com/LudoB99/hydra-project/graphs/contributors) qui ont participé au projet.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Remerciements

* À Alexandre Vovan pour ses conseils judicieux.
* Au [Camping-Marina Parc Bellerive](https://www.campingmarinabellerive.com/) pour leur hospitalité. 
* À la [SADC Pierre-de Saurel](https://sadcpierredesaurel.ca/) pour leur infinie générosité. 
