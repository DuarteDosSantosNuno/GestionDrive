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
    public class UnitsController : Controller
    {
        private UnitRepository _unitRepository;


        public UnitsController(UnitRepository unitRepository)
        {
            _unitRepository = unitRepository;          
        }

        [HttpGet("FindAll")]
        public async Task<IActionResult> FindAll()
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
        }


        [HttpGet("FindById")]
        public Unit GetById(int id)
        {
            try
                {
                    Unit unit = _unitRepository.FindById(id);
                    if (unit == null)
                        return null;
                    else
                        return unit;
                }
                catch (Exception e)
                {
                    return null;
                }
            
        }

        [HttpGet("existUnit")]
        public bool Exists(string unit)
        { 

            return _unitRepository.Exists(unit);
            
        }


        [HttpGet("GetByUnit")]
        public Unit GetByUnit(string unit)
        {
            return _unitRepository.FindByUnit(unit);
        }


        [HttpPost("Create")]
        public IActionResult Create([FromBody] Unit newUnit)
        {
            Unit unit = _unitRepository.Create(newUnit);
            return CreatedAtAction(nameof(GetById), new { id = newUnit.Id }, newUnit);
        }

       
        [HttpDelete("Delete")]
        public IActionResult Delete([FromRoute] int id)
        {
            OkObjectResult deleteResult = new OkObjectResult(_unitRepository.Delete(id));
            return deleteResult;
        }

        [HttpPut("Modify")]
        public IActionResult Modify(Unit newUnit)
        {
            OkObjectResult modifytResult = new OkObjectResult(_unitRepository.Modify(newUnit));
            return modifytResult;

        }

    }
}
