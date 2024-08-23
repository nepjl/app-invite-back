import Invite from '../models/modelsInvites.js';

// Création d'une invitation
export const creeInvite = async (req, res) => {
    const { nom, prenom, email, preference_boisson, allergie } = req.body;

    // Vérification des champs requis
    if (!nom || !prenom || !email || !preference_boisson || typeof allergie === 'undefined') {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        const inviteData = { nom, prenom, email, preference_boisson, allergie };
        const result = await Invite.create(inviteData);
        res.status(201).json({ message: 'Invitation créée avec succès.', id: result.id });
    } catch (error) {
        console.error('Erreur lors de la création de l\'invitation:', error.message);
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'L\'email doit être unique.' });
        }
        res.status(500).json({ message: 'Impossible de créer l\'invitation.' });
    }
};

// Récupération de toutes les invitations
export const getAllInvites = async (req, res) => {
    try {
        const invites = await Invite.getAll();
        res.json(invites);
    } catch (error) {
        console.error('Erreur lors de la récupération des invitations:', error.message);
        res.status(500).json({ message: 'Impossible de récupérer les invitations.' });
    }
};

// Récupération d'une invitation par ID
export const getInviteById = async (req, res) => {
    const { id } = req.params;

    try {
        const invite = await Invite.getById(id);
        res.json(invite);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'invitation:', error.message);
        res.status(404).json({ message: 'Impossible de retrouver l\'invitation.' });
    }
};

// Suppression d'une invitation par ID
export const deleteInvite = async (req, res) => {
    const { id } = req.params;

    try {
        await Invite.deleteById(id);
        res.status(204).send({ message: 'Invité supprimé avec succès !!' });
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'invitation:', error.message);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'invitation.' });
    }
};
