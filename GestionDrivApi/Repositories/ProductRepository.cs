using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDrivApi.Repositories
{
    public class ProductRepository
    {
        private ApplicationContext _applicationContext;

        public ProductRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public async Task<List<Product>> FindAll()
        {
            List<Product> products = await _applicationContext.Products.ToListAsync();
            return products;
        }

        public async Task<Product> FindById(int id)
        {
            Product product = await _applicationContext.Products.SingleAsync(p => p.Id == id);
            return product;
        }

        public async Task<List<Product>> FindByName(string name)
        {
            List<Product> products = await _applicationContext.Products.Where(p => p.Nom == name).ToListAsync();
            return products;
        }

        public async Task<List<Product>> FindByCategory(int categoryId)
        {
            List<Product> products = await _applicationContext.Products.Where(p => p.CategoryId == categoryId).ToListAsync();
            return products;
        }

        public async Task<List<Product>> FindByAvailability(bool available)
        {
            List<Product> products = await _applicationContext.Products.Where(p => p.Disponible == available).ToListAsync();
            return products;
        }

        public async Task<Product> CreateProduct(Product newProduct)
        {
            Product product = new Product();
            product.Id = newProduct.Id;
            product.Nom = newProduct.Nom;
            product.Description = newProduct.Description;
            product.QuantityStock = newProduct.QuantityStock;
            product.CategoryId = newProduct.CategoryId;
            product.Disponible = newProduct.Disponible;
            product.ProductImageSrc = newProduct.ProductImageSrc;

            _applicationContext.Products.Add(product);
            _applicationContext.SaveChanges();
           
            return product;
        }

        public async Task<Product> UpdateProduct(Product newProduct)
        {
            Product product = await _applicationContext.Products.SingleAsync(p => p.Id == newProduct.Id);
            if (product == null)
                return null;
            product.Nom = newProduct.Nom;
            product.Description = newProduct.Description;
            product.QuantityStock = newProduct.QuantityStock;
            product.CategoryId = newProduct.CategoryId;
            product.Disponible = newProduct.Disponible;
            product.ProductImageSrc = newProduct.ProductImageSrc;

            _applicationContext.SaveChanges();

            return product;
        }

        public async Task<Product> DeleteProduct(int id)
        {
            Product product = await _applicationContext.Products.SingleAsync(p => p.Id == id);
            if (product == null)
                return null;
            _applicationContext.Products.Remove(product);
            _applicationContext.SaveChanges();
            return product;
        }
    }
}
