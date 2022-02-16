using GestionDrivApi.Entities;
using System.Collections.Generic;

namespace GestionDrivApi.Dto
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Description { get; set; }
        public double QuantityStock { get; set; }
        public Category Category { get; set; }
        public bool Disponible { get; set; }
        public List<ProductImage> ProductImages { get; set; }
        public List<Unit> Units { get; set; }

        public ProductDto()
        {
        }

        public ProductDto(int id, string nom, string description, double quantityStock, Category category, bool disponible, List<ProductImage> productImages, List<Unit> units)
        {
            Id = id;
            Nom = nom;
            Description = description;
            QuantityStock = quantityStock;
            Category = category;
            Disponible = disponible;
            ProductImages = productImages;
            Units = units;
        }
    }
}
