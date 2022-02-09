using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("Category")]
    public class Category
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public Rayon Rayon { get; set; }

    }
}
