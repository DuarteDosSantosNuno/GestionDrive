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
    }
}
