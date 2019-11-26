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
| [1x FIPY](https://bit.ly/2KRR1iP) | [Ponceau 18po diamètre x 8po long](https://bit.ly/2OKOisl) | [pH Down](https://amzn.to/33lkYy6) | 
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

Installez nodeJS, puis vérifiez la version de l'installation. 
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

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
