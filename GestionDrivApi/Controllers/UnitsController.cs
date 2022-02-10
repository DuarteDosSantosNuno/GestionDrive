using GestionDrivApi.Entities;
using GestionDrivApi.Repositories;
using GestionDrivApi.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;




namespace GestionDrivApi.Controllers
{
  
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UnitsController : ControllerBase
    {
        private readonly ILogger<UnitsController> _logger;

        private IUnitRepository _unitRepository;

 
        public UnitsController(ILogger<UnitsController> logger, IUnitRepository unitRepository)
        {
            _logger = logger;
            _unitRepository = (UnitRepository)unitRepository;          
        }

        /*public UnitRepository Get_unitRepository()
        {
            return _unitRepository;
        }*/

        /*     [HttpGet]
             public async Task<IActionResult> FindAll(UnitRepository _unitRepository)
             {
                 try
                 {
                     List<Unit> listeUnit = await _unitRepository.FindAll();
                     if (listeUnit == null)
                         return NotFound();
                     else
                         return Ok(listeUnit);
                 }
                 catch (Exception e)
                 {
                     return NotFound(e.Message);
                 }
             }*/

        /*[HttpGet]
        public List<Unit> FindAll()
        {
            return _unitRepository.FindAll();
        }*/

        /*[HttpGet]
        public IActionResult FindAll()
        {
            List<Unit> list = _unitRepository.FindAll();
            _logger.LogDebug(list.ToString());
            if (list != null)
            {
                return Ok(list);
            }
            else
            {
                return NotFound();
            }
        }*/


        [HttpGet]
        [Route("{id}")]
        public Unit FindById(int id)
        {
            return _unitRepository.FindById(id);
        }

        [HttpGet("{id:int}/exists")]
        public bool Exists(int id)
        {
            return _unitRepository.Exists(id);
        }

        [HttpPost()]
        public IActionResult Create([FromBody] Unit newUnit)
        {
            newUnit = _unitRepository.Create(newUnit);
            return CreatedAtAction(nameof(FindById), new { id = newUnit.Id }, newUnit);
        }

      //  [HttpDelete("{id}")]
        [HttpDelete]
        [Route("Delete/id={id}")]

        public IActionResult Delete([FromRoute] int id)
        {
            OkObjectResult deleteResult = new OkObjectResult(_unitRepository.Delete(id));
            return deleteResult;
        }

        [HttpPut()]
        public IActionResult Modify([FromBody] Unit newUnit)
        {
            OkObjectResult modifytResult = new OkObjectResult(_unitRepository.Modify(newUnit));
            return modifytResult;
        }
    }
}
