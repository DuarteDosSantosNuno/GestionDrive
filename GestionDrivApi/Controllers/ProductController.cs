using GestionDrivApi.Entities;
using GestionDrivApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        public ProductController(ProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet("")]
        public async Task<IActionResult> FindAll()
        {
            try
            {
                List<Product> listeProduct = await _productRepository.FindAll();
                if (listeProduct == null)
                    return NotFound();
                else
                    return Ok(listeProduct);
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


    }
}
