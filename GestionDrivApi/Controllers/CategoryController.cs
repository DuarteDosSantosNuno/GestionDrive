using GestionDrivApi.Entities;
using GestionDrivApi.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GestionDrivApi.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private CategoryRepository _CategoryRepository;

        public CategoryController(CategoryRepository categoryRepository)
        {
            _CategoryRepository = categoryRepository;
        }

        [HttpGet]
        public async Task<IActionResult> FindAll()
        {
            try
            {
                List<Category> categories = await _CategoryRepository.FindAll();
                if (categories == null)
                    return NotFound();
                else
                    return Ok(categories);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> FindById(int id)
        {
            try
            {
                Category category = await _CategoryRepository.FindById(id);
                if (category == null)
                    return NotFound();
                else
                    return Ok(category);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> FindByName(string name)
        {
            try
            {
                Category category = await _CategoryRepository.FindByName(name);
                if (category == null)
                    return NotFound();
                else
                    return Ok(category);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("rayon/{id}")]
        public async Task<IActionResult> FindByRayonId(int id)
        {
            try
            {
                List<Category> categories = await _CategoryRepository.FindByRayonId(id);
                if (categories == null)
                    return NotFound();
                else
                    return Ok(categories);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("exist/{id:int}")]
        public async Task<IActionResult> ExistById(int id)
        {
            try
            {
                bool exist = await _CategoryRepository.ExistById(id);
                return exist ? Ok(exist) : NotFound(exist);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("exist/{name}")]
        public async Task<IActionResult> ExistByName(string name)
        {
            try
            {
                bool exist = await _CategoryRepository.ExistByName(name);
                return exist ? Ok(exist) : NotFound(exist);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(Category newCategory)
        {
            try
            {
                if (!await _CategoryRepository.ExistByName(newCategory.Nom))
                {

                    Category category = await _CategoryRepository.Create(newCategory);
                    return Ok();
                }
                else
                    return BadRequest($"{newCategory.Nom} Category already exists");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

