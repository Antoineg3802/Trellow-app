![Tauri Logo](https://d33wubrfki0l68.cloudfront.net/4112b407ce93d899a0e499bbefa9fc172b11685e/9077b/fr/meta/tauri_logo_dark.svg)

Tauri est une boîte à outils qui aide les développeurs à créer des applications pour les principales plates-formes de bureau, en utilisant pratiquement n'importe quel framework frontal existant. Le noyau est construit avec Rust et le CLI exploite Node.js, faisant de Tauri une approche véritablement polyglotte pour créer et maintenir de superbes applications. [Source](https://tauri.app/fr/about/intro/)

## Comment fonctionne Tauri ?

Tauri fonctionne en utilisant une architecture hybride, combinant une interface utilisateur basée sur le web avec un backend natif. L'interface utilisateur est construite à l'aide des technologies web habituelles, tandis que le backend est écrit en utilisant un langage de programmation natif, tel que Rust.

Voici les principaux composants de Tauri :

1. **Frontend** : L'interface utilisateur de votre application peut etre développée en utilisant les technologies web les plus connuent comme par exemple HTML, CSS et JavaScript. Vous pouvez utiliser des frameworks web populaires tels que React, Vuejs, Angular et bien d'autre, pour construire l'interface de votre application.

2. **Backend natif** : Tauri utilise un backend natif pour accéder aux fonctionnalités système et fournir une interaction avec le système d'exploitation. Le backend est développé en Rust, un langage de programmation rapide et sécurisé.

3. **Empaquetage de l'application** : Une fois que vous avez développé votre application Tauri, vous pouvez l'emballer dans un exécutable natif pour chaque plateforme cible (Windows, macOS, Linux). Cela signifie que votre application sera distribuée et exécutée comme une application de bureau native, bénéficiant ainsi des performances et des fonctionnalités spécifiques au système d'exploitation.

## Avantages de Tauri

- **Développement multiplateforme**

- **Performance élevée**

- **Accès complet aux fonctionnalités du système d'exploitation** 

- **Utilisation de technologies web familières**

- **Emballage facile de l'application**

## Conclusion - Tauri

Tauri est un framework puissant pour le développement d'applications de bureau multiplateformes en utilisant des technologies web. Il combine l'interface utilisateur web avec un backend natif pour offrir des performances élevées et un accès complet aux fonctionnalités du système d'exploitation. En utilisant Tauri, vous pouvez développer des applications de bureau natives et performantes en utilisant vos compétences en développement web.



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
