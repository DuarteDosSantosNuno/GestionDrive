using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("ProductImage")]
    public class ProductImage : IdentityUser
    {
        public string Src { get; set; }

    }
}
