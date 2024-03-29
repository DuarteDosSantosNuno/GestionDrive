﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace GestionDrivApi.Entities
{
    [Table("Product")]
    public class Product
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Description { get; set; }
        public double QuantityStock { get; set; }
        public Category Category { get; set; }
        public bool Disponible { get; set; }

        public static implicit operator Product(List<Product> v)
        {
            throw new NotImplementedException();
        }
    }
}
