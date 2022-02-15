using GestionDrivApi.Data;
using GestionDrivApi.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDrivApi.Repositories
{
    public class ProductRepository
    {
        private ApplicationContext _applicationContext;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ProductRepository(ApplicationContext applicationContext,IWebHostEnvironment webHostEnvironment)
        {
            _applicationContext = applicationContext;
            _webHostEnvironment = webHostEnvironment;
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

        public async Task<bool> UploadProductImage(int? idProduct, IFormFile file)
        {
            try
            {
                string filePath = Path.Combine(_webHostEnvironment.ContentRootPath, @$"Src\Images\Products\{idProduct}");
                Product product = null;
                if (idProduct != null)
                    product = await FindById(idProduct.Value);

                if (!Directory.Exists(filePath))
                    Directory.CreateDirectory(filePath);            

                string fileName = "Product"+idProduct+"."+file.FileName;
                filePath = Path.Combine(filePath, $"{fileName}{Path.GetExtension(file.FileName)}");
                using var stream = new FileStream(filePath, FileMode.OpenOrCreate);
                await file.CopyToAsync(stream);

                ProductImage productImage = new ProductImage { Src = filePath, Product = product };
                _applicationContext.ProductImages.Add(productImage);
                _applicationContext.SaveChanges();

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<List<ProductImage>> FindProductImageByIdProduct(int idProduct)
        {
            try
            {
                List<ProductImage> images = await _applicationContext.ProductImages.Where(p => p.Product.Id == idProduct).ToListAsync();
                return images;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public async Task<ProductImage> FindProductImageById(int id)
        {
            try
            {
               ProductImage image = await _applicationContext.ProductImages.SingleAsync(p => p.Id == id);
               return image;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public async Task<bool> DeleteProductImageById(int id)
        {
            try
            {
                ProductImage image = await _applicationContext.ProductImages.Include(p => p.Product).SingleOrDefaultAsync(pm => pm.Id == id);
                if (image == null)
                    return false;

                string filePath = image.Src;
                if (File.Exists(filePath))
                    File.Delete(filePath);
                
                _applicationContext.ProductImages.Remove(image);
                _applicationContext.SaveChanges();
                return true;
            } catch (Exception e)
            {
                return false;
            }
        }
    }
}
