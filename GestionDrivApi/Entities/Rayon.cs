using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("Rayons")]
    public class Rayon
    {
        public int Id { get; set; } 
        public string Nom { get; set; }
    }
}
