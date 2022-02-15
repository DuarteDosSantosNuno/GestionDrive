using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
#nullable enable

namespace GestionDrivApi.Entities
{
    [Table("Personne")]
    public class Personne : IdentityUser
    {
        public string? Nom { get; set; }
        public string? Prenom { get; set; }

    }
}
