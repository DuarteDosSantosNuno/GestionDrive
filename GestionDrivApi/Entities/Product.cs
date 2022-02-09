using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("Product")]
    public class Product
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Description { get; set; }
        public double Quantity_stock { get; set; }
        public Category Category { get; set; }
        public bool Disponible { get; set; }

    }
}
