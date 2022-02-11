using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backOffice.Models
{
    public class Personne : IdentityUser
    {
        public string Nom { get; set; }
        public string Prenom { get; set; }

    }
}
