using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("Commande")]
    public class Commande
    {
        public int Id { get; set; }
        public string NumeroCommande { get; set; }
        public DateTime DateCommande { get; set; }
        public DateTime? DatePreparation { get; set; }  
        public DateTime? DateLivraison { get; set; }
        public double Quantity { get; set; }
        public TypePaymentEnum ModePayment { get; set; } //especes, paypal, creditcard
        public StatusCommandeEnum Status { get; set; } // annuler, en cours, terminer
        public Personne Client { get; set; }
        public Personne Employee { get; set; }
        public Product Product { get; set; }  
    }
}
