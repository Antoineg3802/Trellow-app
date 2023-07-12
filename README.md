# Comment lancer cette application

Ce projet est une application Tauri utilisant React comme framework de développement.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :
- [Node.js](https://nodejs.org) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/get-npm)

## Installation

Suivez les étapes ci-dessous pour installer et exécuter l'application localement :

1. Clonez ce dépôt GitHub :

```bash
git clone https://github.com/dyzzorka/Trellow-app.git
cd Trellow-app
```

2. Installez les dépendances du projet :

```bash
npm install
```

3. Build l'application React :

```bash
npm run build
```

4. Générez les fichiers nécessaires à Tauri :

```bash
npm run tauri init
```

5. Démarrez l'application en mode développement :

```bash
npm run tauri dev
```

Cela lancera l'application Tauri avec React en utilisant le mode de développement.

6. Pour créer une version de production de l'application :

```bash
npm run tauri build
```

Cette commande générera une version de l'application prête à être déployée.

si vous avez un probléme vous pouvez vous referencer a la [documentation officielle des prérequies](https://tauri.app/v1/guides/getting-started/prerequisites/)

## Configuration

Le fichier de configuration principal de Tauri se trouve dans le répertoire `src-tauri/tauri.conf.js`. Vous pouvez y modifier différents paramètres pour adapter votre application.

Pour plus de détails sur la configuration de Tauri, vous pouvez consulter la [documentation officielle de Tauri](https://tauri.studio/docs/getting-started/intro).
