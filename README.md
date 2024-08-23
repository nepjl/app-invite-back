# app-invite-back

app-invite-back/
├── app.js             # Configuration principale de l'application Express.js
├── server.js          # Serveur d'écoute
├── .env               # Fichier de configuration pour les variables d'environnement
├── db/
│   └── db.js          # Connexion à la base de données MySQL
├── routes/
│   ├── inviteRoutes.js  # Routes pour la gestion des invitations
│   └── userRoutes.js    # Routes pour la gestion des utilisateurs
├── models/
│   ├── inviteModel.js   # Modèle pour la table "invites"
│   └── userModel.js     # Modèle pour la table "users"
├── controllers/
│   ├── inviteController.js  # Contrôleur pour gérer la logique des invitations
│   └── userController.js    # Contrôleur pour gérer la logique des utilisateurs
└── utils/
    └── qrGenerator.js  # Utilitaire pour générer le code QR

