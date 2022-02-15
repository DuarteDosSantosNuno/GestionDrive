using GestionDrivApi.Dto;
using GestionDrivApi.Entities;
using GestionDrivApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GestionDrivApi.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ProductController : Controller
    {
        private ProductRepository _productRepository;
        private UnitRepository _unitRepository;

        public ProductController(ProductRepository productRepository,UnitRepository unitRepository)
        {
            _productRepository = productRepository;
            _unitRepository = unitRepository;
        }

        [HttpGet("")]
        public async Task<IActionResult> FindAll()
        {
            try
            {
                List<Product> listeProduct = await _productRepository.FindAll();
                List<ProductDto> productDto = new List<ProductDto>();
        
                if (listeProduct == null)
                    return NotFound();
                else
                {
                    foreach(var product in listeProduct)
                    {
                        List<ProductImage> images = await _productRepository.FindProductImageByIdProduct(product.Id);
                        List<Unit> units = await _unitRepository.FindByIdProduct(product.Id);
                        if(units.Count > 0)
                        {
                           foreach(var u in units)
                           {
                                u.Product = null;
                           }
                        }

                        if(images.Count > 0)
                        {
                            foreach(var i in images)
                            {
                                i.Product = null;
                                i.Src = i.Src.Split("GestionDrivApi")[1];
                            }
                        }
                        
                        productDto.Add
                        (
                            new ProductDto{
                                Id = product.Id,
                                Nom = product.Nom,
                                Description = product.Description,
                                QuantityStock = product.QuantityStock,
                                Category = product.Category,
                                Disponible = product.Disponible,
                                ProductImages = images,
                                Units = units
                            }
                        );
                    }
                }
                return Ok(productDto);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("GetById/{id:int}")]
        public async Task<IActionResult> FindById(int id)
        {
            try
            {
                Product product = await _productRepository.FindById(id);
                if (product == null)
                    return NotFound();
                else
                    return Ok(product);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("GetByName/{name}")]
        public async Task<IActionResult> FindByName(string name)
        {
            try
            {
                List<Product> products = await _productRepository.FindByName(name);
                if (products == null)
                    return NotFound();
                else
                    return Ok(products);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("GetByCategory/{categoryId:int}")]
        public async Task<IActionResult> FindByCategory(int categoryId)
        {
            try
            {
                List<Product> products = await _productRepository.FindByCategory(categoryId);
                if (products == null)
                    return NotFound();
                else
                    return Ok(products);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("GetByAvailability/{available:bool}")]
        public async Task<IActionResult> FindByAvailability(bool available)
        {
            try
            {
                List<Product> products = await _productRepository.FindByAvailability(available);
                if (products == null)
                    return NotFound();
                else
                    return Ok(products);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost("AddProduct")]
        public async Task<IActionResult> CreateProduct([FromBody] Product newProduct)
        {
            try
            {
                Product product = await _productRepository.CreateProduct(newProduct);
                if (product == null)
                    return NotFound();
                else
                    return Ok(product);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPut("ModifyProduct")]
        public async Task<IActionResult> UpdateProduct([FromBody] Product newProduct)
        {
            try
            {
                Product product = await _productRepository.UpdateProduct(newProduct);
                if (product == null)
                    return NotFound();
                else
                    return Ok(product);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpDelete("RemoveProduct")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                Product product = await _productRepository.DeleteProduct(id);
                if (product == null)
                    return NotFound();
                else
                    return Ok(product);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost("UploadProductImage")]
        [RequestFormLimits(MultipartBodyLengthLimit = 209715200)]
        public async Task<IActionResult> UploadProductImage(int? idProduct, IFormFile file)
        {
            try
            {
                OkObjectResult uploadResult = new OkObjectResult(await _productRepository.UploadProductImage(idProduct, file));
                if (uploadResult.Value is false)
                    return BadRequest("Upload fail!");
                else
                    return uploadResult;
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("GetListProductImage")]
        public async Task<IActionResult> GetListProductImage(int idProduct)
        {
            try
            {
                List<ProductImage> images = await _productRepository.FindProductImageByIdProduct(idProduct);
                if (images.Count == 0)
                    return NotFound();

                return Ok(images);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("DownloadProductImage")]
        public async Task<IActionResult> DownloadProductImage(int id)
        {
            try
            {
                ProductImage image = await _productRepository.FindProductImageById(id);
                if (image == null)
                    return NotFound();

                byte[] photo = System.IO.File.ReadAllBytes($"{image.Src}");
                return File(photo, "image/jpeg");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("DeleteProductImage")]
        public async Task<IActionResult> DeleteProductImageById(int id)
        {
            try
            {
                OkObjectResult deleteResult = new OkObjectResult(await _productRepository.DeleteProductImageById(id));
                if (deleteResult.Value is false)
                    return NotFound();
                else
                    return deleteResult;
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
