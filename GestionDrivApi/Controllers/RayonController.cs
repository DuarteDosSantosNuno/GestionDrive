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
    public class RayonController : Controller
    {
        private RayonRepository _rayonRepository;

        public RayonController(RayonRepository rayonRepository)
        {
            _rayonRepository = rayonRepository;
        }

        [HttpGet]
        public async Task<IActionResult> FindAll()
        {
            try
            {
                List<Rayon> listeRayon = await _rayonRepository.FindAll();
                if (listeRayon == null)
                    return NotFound();
                else
                    return Ok(listeRayon);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("id")]
        public async Task<Rayon> GetById(int id)
        {
            return await _rayonRepository.FindById(id);
        }
        [HttpGet("listnoms")]
        public List<Rayon> GetByListNoms( string nom)
        {
            return _rayonRepository.FindByListNoms(nom);
        }
        [HttpGet("nom")]
        public Rayon GetByNom(string nom)
        {
            return _rayonRepository.FindByNom(nom);
        }
        [HttpGet("nomExist")]
        public bool NomExist(string nom)
        {
            return _rayonRepository.ExistNom(nom);
        }
        [HttpPost("Create")]
        public IActionResult AddRayon(Rayon newRayon)
        {
            Rayon rayon = _rayonRepository.Create(newRayon);
            return CreatedAtAction(nameof(GetById), new { id = rayon.Id }, newRayon);
        }
        
        [HttpPut("Modify")]
        public IActionResult Modify(Rayon ra)
        {
            OkObjectResult modifyRayon = new OkObjectResult(_rayonRepository.Update(ra));
            return modifyRayon;
        }

    }
}
