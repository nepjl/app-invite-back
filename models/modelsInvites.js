import db from '../config/db.js';

class Invite {
    constructor(nom, prenom, email, preference_boisson, allergie) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.preference_boisson = preference_boisson;
        this.allergie = allergie;
    }

    static async create(inviteData) {
        const { nom, prenom, email, preference_boisson, allergie } = inviteData;

        try {
            const [result] = await db.query(
                'INSERT INTO invites (nom, prenom, email, preference_boisson, allergie) VALUES (?, ?, ?, ?, ?)',
                [nom, prenom, email, preference_boisson, allergie]
            );
            return { id: result.insertId };
        } catch (error) {
            throw new Error('Erreur lors de la création de l\'invitation : ' + error.message);
        }
    }

    static async getAll() {
        try {
            const [invites] = await db.query('SELECT * FROM invites');
            return invites;
        } catch (error) {
            throw new Error('Erreur lors de la récupération des invitations : ' + error.message);
        }
    }

    static async getById(id) {
        try {
            const [invites] = await db.query('SELECT * FROM invites WHERE id = ?', [id]);
            if (invites.length === 0) {
                throw new Error('Invitation non trouvée');
            }
            return invites[0];
        } catch (error) {
            throw new Error('Erreur lors de la récupération de l\'invitation : ' + error.message);
        }
    }

    static async deleteById(id) {
        try {
            const [result] = await db.query('DELETE FROM invites WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                throw new Error('Invitation non trouvée');
            }
        } catch (error) {
            throw new Error('Erreur lors de la suppression de l\'invitation : ' + error.message);
        }
    }
}

export default Invite;
