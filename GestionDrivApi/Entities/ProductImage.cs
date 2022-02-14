using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("ProductImage")]
    public class ProductImage
    {
        public int Id { get; set; }
        public string Src { get; set; }
        public Product Product { get; set; }
    }
}
