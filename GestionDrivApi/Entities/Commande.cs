using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("Commande")]
    public class Commande
    {
        public int Id { get; set; }
        public DateTime DateCommande { get; set; }
        public DateTime DatePreparation { get; set; }  
        public DateTime DateLivraison { get; set; }
        public double Quantity { get; set; }
        public string ModePayment { get; set; }
        public string Status { get; set; } // annuler, en cours, terminer
        public Personne Client { get; set; }
        public Personne Employee { get; set; }
    }
}
