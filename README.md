
Application de location de voitures développée avec Next.js.



 Prérequis

Avant de commencer, assure-toi d’avoir installé :

* Node.js >= 18
* npm ou yarn
* Git

---

## 🚀 Installation du projet

### 1. Cloner le projet

```bash
git clone ...
cd ...
```


### 2. Installer les dépendances

```bash
npm install
```

---

### 3. Configurer les variables d’environnement

```bash
cp .env.example .env
```


### 4. Lancer le projet en local

```bash
npm run dev ou pnpm dev
```

---

## 🌐 Accès à l'application

Ouvre ton navigateur :

```
http://localhost:3000
```

---

## 🧑‍💻 Workflow de développement

### 🔀 Créer une branche

```bash
git checkout -b feature/nom-de-la-fonctionnalite
```

---

## ⚠️ Avant de faire un push (IMPORTANT)

Avant chaque push, tu dois absolument :

### ✅ 1. Vérifier que le projet compile

```bash
npm run build
```

---

### ✅ 2. Lancer le linter

```bash
npm run lint
```

Corrige toutes les erreurs avant de continuer.

---

### ✅ 3. Tester ton code

* Vérifie que tout fonctionne correctement
* Pas d’erreurs dans la console navigateur

---

### ✅ 4. Mettre à jour ton code avec la branche principale

```bash
git pull origin main
```

Résous les conflits si nécessaire.

---

### ✅ 5. Faire un commit propre

```bash
git add .
git commit -m "feat: description claire de la fonctionnalité"
```

---

## 🚀 Push et Pull Request

```bash
git push origin feature/nom-de-la-fonctionnalite
```

Ensuite :

1. Va sur GitHub
2. Crée une Pull Request vers `main`
3. Ajoute une description claire


