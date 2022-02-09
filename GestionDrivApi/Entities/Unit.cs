using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("Unit")]
    public class Unit
    {
        public int Id { get; set; }
        public string Unite { get; set; }
        public double Prix { get; set; }
        public Product Product { get; set; }
    }
}
